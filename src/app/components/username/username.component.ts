import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service'

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor(public GameService: GameService) { }

  ngOnInit(): void {
  }

  username(username){
    this.GameService.userName = username;
  }

}
