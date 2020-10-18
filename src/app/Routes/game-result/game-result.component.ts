import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service'

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {

  constructor(private GameService: GameService) { }

  ngOnInit(): void {
  }

}
