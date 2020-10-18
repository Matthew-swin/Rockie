import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service'

@Component({
  selector: 'app-game-base',
  templateUrl: './game-base.component.html',
  styleUrls: ['./game-base.component.css']
})
export class GameBaseComponent implements OnInit {

  constructor(private GameService: GameService) { }
  optionPicked: true|false = false;
  ngOnInit(): void {
  }

  SelectOption(option: 'Rock' | 'Paper' | 'Scissors'){
    this.optionPicked = true;
    this.GameService.SetSelection(option);
  }

  Shoot(){
    this.GameService.CommitOutcome();
  }
}
