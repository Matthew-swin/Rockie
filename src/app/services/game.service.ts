import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import {GameResult, PlayerChoice} from '../game';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private selection?: 'Rock' | 'Paper' | 'Scissors';
  private AIOption?: 'Rock' | 'Paper' | 'Scissors';
  private Outcome?: 'Win' | 'Lose' | 'Draw';

  constructor(private router: Router) { }

  SetSelection(playerOption: 'Rock' | 'Paper' | 'Scissors'){
    this.selection = playerOption;
  }

  CalcOutcome(playerOption: 'Rock' | 'Paper' | 'Scissors', AIOption: 'Rock' | 'Paper' | 'Scissors') {
    //need to set the winner in this field
    if (playerOption == 'Rock' && AIOption == 'Rock' || playerOption == 'Paper' && AIOption == 'Paper' || playerOption == 'Scissors' && AIOption == 'Scissors')
    {
      this.Outcome = 'Draw';
    }
    if (playerOption == 'Rock' && AIOption == 'Scissors' || playerOption == 'Scissors' && AIOption == 'Paper' || playerOption == 'Paper' && AIOption == 'Rock')
    {
      this.Outcome = 'Win';
    }
    if (playerOption == 'Rock' && AIOption == 'Paper' || playerOption == 'Paper' && AIOption == 'Scissors' || playerOption == 'Scissors' && AIOption == 'Rock')
    {
      this.Outcome = 'Lose';
    }
  }

  AISelection(option?: 'Rock' | 'Paper' | 'Scissors') {
    //need to set the AI option here to random
    //just to test setting option to Rock
    option = 'Rock';
    this.AIOption = option;
  }

  CommitOutcome() {
    of(null).pipe(delay(1000)).subscribe(() => {
      // set AI selection
      this.AISelection()
      // set outcome
      this.CalcOutcome(this.selection,this.AIOption)
      this.router.navigateByUrl('/result');
    });
  }

  // yayaya(option: 'Rock' | 'Paper' | 'Scissors') {
  //   let request = this.HttpClient.post<PlayerChoice>("http://localhost:5000/game", {
  //     PlayerChoice: option

  //   } as GameResult);

  }

  
}


