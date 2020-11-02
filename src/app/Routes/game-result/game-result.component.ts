import { Component, OnInit } from '@angular/core';
//importing GameService so i can use its values and methods
import {GameService} from '../../services/game.service'

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {
 
  OptionUsed: boolean = false;
  //Need to have the Gameservice as public as I need to display information it holds in this component
  //Below will be an example of keeping it private and still getting the info using get
  constructor(public GameService: GameService) { }

  ngOnInit(): void {
  }

  tryAgain(){
    this.GameService.InputFieldState = false;
  }

  // This is the example of getting the information and keeping GameService as private
  // get AiOption(){
  //   return this.GameService.AIOption
  // }
}
