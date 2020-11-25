import { Component } from '@angular/core';
import { LeaderboardService } from './services/leaderboard.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Do you want to play a game?';  

  constructor(public LeaderBoardService: LeaderboardService){

  }
}
