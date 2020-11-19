import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { Router, RouterModule } from '@angular/router';
import { GameService } from '../../services/game.service'

@Component({
  selector: 'app-round-select',
  templateUrl: './round-select.component.html',
  styleUrls: ['./round-select.component.css']
})
export class RoundSelectComponent implements OnInit {

  constructor(private GameService: GameService, public router: Router,public LeaderboardService: LeaderboardService ) { }

  ngOnInit(): void {
  }

  selectRound(option: 1 | 3 | 5) {
    this.GameService.maxRound = option;
    if (this.GameService.userName == null || this.GameService.userName == "") {
      alert("you need to add a username before starting");
    }
    else{
    this.GameService.InputFieldState = true;
    this.router.navigateByUrl('/base');
    }
  }
}
