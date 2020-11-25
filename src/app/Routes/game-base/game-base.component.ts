import { Component, HostListener, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { GameService } from '../../services/game.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-game-base',
  templateUrl: './game-base.component.html',
  styleUrls: ['./game-base.component.css']
})
export class GameBaseComponent implements OnInit {

  constructor(public GameService: GameService, public LeaderBoardService: LeaderboardService, public router: Router) { }

  SelectionMade: true | false = false;
  toggleHighlighted: 'Rock' | 'Paper' | 'Scissors';
  colour: string = 'yellow';
  highlight: boolean = false;
  roundnum: number = 1;
  ngOnInit(): void {
  }

  

  SelectOption(option: 'Rock' | 'Paper' | 'Scissors') {
    this.SelectionMade = true;
    this.GameService.SetSelection(option);
    this.toggleHighlighted = option;
  }

  Shoot() {
    //increase round number
    this.GameService.roundNumber = this.roundnum;
    this.GameService.SetplayerChoice(this.GameService.selection, this.GameService.userName, this.roundnum, this.GameService.maxRound);
    this.SelectionMade = false;
    if (this.roundnum = this.GameService.maxRound){
      this.GameService.CommitOutcomes(this.GameService.playerChoiceAndUsername);
    }
    this.roundnum = this.roundnum + 1;
  }


}
