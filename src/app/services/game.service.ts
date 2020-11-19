import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {GameResult, PlayerChoiceAndRounds, GameResults, PlayerChoices} from '../Class/game';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  // stop the username being changed through the game
  public InputFieldState: boolean = false;
  public maxRound: 1 | 3 | 5;
  public roundNumber: number = 1;
  public CompName: string = "CPU";
  public userName?: string = null;
  public selection?: 'Rock' | 'Paper' | 'Scissors';
  
  //push all selections to this array
  public selections: [];

  //Private variables ///////////////////////////////////
  private _AIOption?: string;
  get AIOption(){
    return this._AIOption;
  }
  private _Outcome?: string;
  get Outcome(){
    return this._Outcome;
  }
  public playerChoiceAndUsername: PlayerChoiceAndRounds[] = [];


  private _GameResults: GameResults;
  get GameResults(){
    return this._GameResults;
  }

  constructor(private router: Router, public httpClient:HttpClient) { }

  // the settening ///////////////////////////////////////////////////////

  SetSelection(playerOption: 'Rock' | 'Paper' | 'Scissors'){
    this.selection = playerOption;
  }

  setMaxRounds(maxrounds: 1 | 3 | 5){
    this.maxRound = maxrounds;
  }

  SetplayerChoice(playerchoice: string, username: string, currentround: number, maxround: number ){
    //set playerchoice array herererere
    let pooPoo:PlayerChoiceAndRounds = {
      playerChoice: playerchoice,
      userName: username,
      currentRound: currentround,
      maxRound: maxround
    } 
    this.playerChoiceAndUsername = [...this.playerChoiceAndUsername, pooPoo]
  }

  // end of the settening /////////////////////////////////////////////////
  
  //Use this bad boi
  CommitOutcomes(PlayerChoices: PlayerChoiceAndRounds[]) {
     //the URL is where exactly will be targetted by the request
    let request = this.httpClient.post<GameResults>("http://localhost:5000/game/rounds", PlayerChoices)
    console.log(request);
    //response is going to be the API reply so we can then allocate the response values to variables
    request.subscribe((response =>{
      this._GameResults = response;
      this.router.navigateByUrl('result');
    }));  
    
  }
  
}


