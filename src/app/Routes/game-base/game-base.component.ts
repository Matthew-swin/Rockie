import { Component, HostListener, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { GameService } from '../../services/game.service'


@Component({
  selector: 'app-game-base',
  templateUrl: './game-base.component.html',
  styleUrls: ['./game-base.component.css']
})
export class GameBaseComponent implements OnInit {

  constructor(public GameService: GameService, public LeaderBoardService: LeaderboardService) { }

  SelectionMade: true | false = false;
  toggleHighlighted: 'Rock' | 'Paper' | 'Scissors';
  colour: string = 'yellow';

  ngOnInit(): void {
  }

  highlight: boolean = false;

  SelectOption(option: 'Rock' | 'Paper' | 'Scissors') {
    this.SelectionMade = true;
    this.GameService.SetSelection(option);
    this.toggleHighlighted = option;
  }

  Shoot() {
    
    this.GameService.CommitOutcome(this.GameService.selection, this.GameService.userName);
    this.GameService.InputFieldState = true;
  }

  changeBackground($event){
    this.colour = $event.type == 'mouseover' ? 'yellow' : 'none';
    console.log("fuck");
  }

}
