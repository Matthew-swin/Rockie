import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { Router, RouterModule } from '@angular/router';
import {GameService} from '../../services/game.service'

@Component({
  selector: 'app-round-select',
  templateUrl: './round-select.component.html',
  styleUrls: ['./round-select.component.css']
})
export class RoundSelectComponent implements OnInit {

  constructor(private GameService: GameService, public router: Router) { }

  ngOnInit(): void {
  }

  selectRound(option: 1 | 3| 5){
    this.GameService.maxRound = option;
    this.router.navigateByUrl('/base');
  }
}
