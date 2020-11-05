import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import {GameResult, PlayerChoice} from '../Class/game';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // stop the username being changed through the game
  public InputFieldState: boolean = false;
  public maxRound: 1 | 3 | 5;
  public CompName: string = "CPU";
  public userName?: string = null;
  public selection?: 'Rock' | 'Paper' | 'Scissors';
  //push all selections to this array
  public selections: [];
  //Private variables should have an underscore at the beginning to represent it is private
  private _roundNumber: number;
  get roundNumber(){
    return this._roundNumber;
  }
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

  setMaxRounds(maxrounds: 1 | 3 | 5){
    this.maxRound = maxrounds;
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

  CommitOutcome(selection: 'Rock' | 'Paper' | 'Scissors',username:string) {
    //<gameResult>Is an interface used to show what will be received
    this.roundNumber + 1;
    //the URL is where exactly will be targetted by the request
    let request = this.httpClient.post<GameResult>("http://localhost:5000/game", {
      PlayerChoice: selection,
      userName: username

    } as PlayerChoice);
    //response is going to be the API reply so we can then allocate the response values to variables
    request.subscribe((response =>{
      this._AIOption = response.cpuChoice;
      this._Outcome = response.result;
      //after the has functioned the below will route us to the results component
    }));
  }
  
}


