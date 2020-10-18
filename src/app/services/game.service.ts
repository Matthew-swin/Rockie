import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private selection?: 'Rock' | 'Paper' | 'Scissors';
  private AIOption?: 'Rock' | 'Paper' | 'Scissors';
  private Outcome?: 'Win' | 'Lose' | 'Draw';

  constructor(private router: Router) { }

  CalcOutcome(playerOption: 'Rock' | 'Paper' | 'Scissors', AIOption: 'Rock' | 'Paper' | 'Scissors') {
    //need to set the winner in this field
    if (playerOption == 'Rock' && AIOption == 'Rock' || playerOption == 'Paper' && AIOption == 'Paper' || playerOption == 'Scissors' && AIOption == 'Scissors')
    {
      this.Outcome = 'Draw'
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

  AISelection(option: 'Rock' | 'Paper' | 'Scissors') {
    //need to set the AI option here to random
    //just to test setting option to Rock
    option = 'Rock';
    this.AIOption = option;
  }

  CommitOutcome(option: 'Rock' | 'Paper' | 'Scissors') {
    of(null).pipe(delay(1000)).subscribe(() => {
      this.selection = option;
      this.router.navigateByUrl('/result');
    });
  }


}
