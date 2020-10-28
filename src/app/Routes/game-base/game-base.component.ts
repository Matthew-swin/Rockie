import { Component, HostListener, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service'

@Component({
  selector: 'app-game-base',
  templateUrl: './game-base.component.html',
  styleUrls: ['./game-base.component.css']
})
export class GameBaseComponent implements OnInit {

  constructor(private GameService: GameService) { }

  optionPicked: true | false = false;
  toggleHighlighted: 'Rock' | 'Paper' | 'Scissors';
  colour: string = 'yellow';

  ngOnInit(): void {
  }

  highlight: boolean = false;

  SelectOption(option: 'Rock' | 'Paper' | 'Scissors') {
    this.optionPicked = true;
    this.GameService.SetSelection(option);
    this.toggleHighlighted = option;
  }

  Shoot() {
    this.GameService.CommitOutcome(this.GameService.selection);
  }

  changeBackground($event){
    this.colour = $event.type == 'mouseover' ? 'yellow' : 'pink';
    console.log("fuck");
  }
}
