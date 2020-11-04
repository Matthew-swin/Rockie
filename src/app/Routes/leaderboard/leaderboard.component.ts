import { Component, HostListener, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { GameService } from '../../services/game.service'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private GameService: GameService, public LeaderBoardService: LeaderboardService) { }

  ngOnInit(): void {
  }

  tryAgain(){
    this.GameService.InputFieldState = false;
  }

}
