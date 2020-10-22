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

  public selection?: 'Rock' | 'Paper' | 'Scissors';
  private _AIOption?: string;
  get AIOption(){
    return this._AIOption;
  }
  private _Outcome?: string;
  get Outcome(){
    return this._Outcome;
  }

  constructor(private router: Router, public httpClient:HttpClient) { }

  SetSelection(playerOption: 'Rock' | 'Paper' | 'Scissors'){
    this.selection = playerOption;
  }
  /* 
  All the below was to make it work front end
  */
  // CalcOutcome(playerOption: 'Rock' | 'Paper' | 'Scissors', AIOption: 'Rock' | 'Paper' | 'Scissors') {
  //   //need to set the winner in this field
  //   if (playerOption == 'Rock' && AIOption == 'Rock' || playerOption == 'Paper' && AIOption == 'Paper' || playerOption == 'Scissors' && AIOption == 'Scissors')
  //   {
  //     this.Outcome = 'Draw';
  //   }
  //   if (playerOption == 'Rock' && AIOption == 'Scissors' || playerOption == 'Scissors' && AIOption == 'Paper' || playerOption == 'Paper' && AIOption == 'Rock')
  //   {
  //     this.Outcome = 'Win';
  //   }
  //   if (playerOption == 'Rock' && AIOption == 'Paper' || playerOption == 'Paper' && AIOption == 'Scissors' || playerOption == 'Scissors' && AIOption == 'Rock')
  //   {
  //     this.Outcome = 'Lose';
  //   }
  // }

  // AISelection(option?: 'Rock' | 'Paper' | 'Scissors') {
  //   //need to set the AI option here to random
  //   //just to test setting option to Rock
  //   option = 'Rock';
  //   this.AIOption = option;
  // }

  // yayaya() {
  //   of(null).pipe(delay(1000)).subscribe(() => {
  //     // set AI selection
  //     this.AISelection()
  //     // set outcome
  //     this.CalcOutcome(this.selection,this.AIOption)
  //     this.router.navigateByUrl('/result');
  //   });
  // }

  CommitOutcome(selection: 'Rock' | 'Paper' | 'Scissors') {
    let request = this.httpClient.post<GameResult>("http://localhost:5000/game", {
      PlayerChoice: selection

    } as PlayerChoice);
    request.subscribe((response =>{
      this._AIOption = response.cpuChoice;
      this._Outcome = response.result;
      this.router.navigateByUrl('/result');
    }));

  }

  
}


