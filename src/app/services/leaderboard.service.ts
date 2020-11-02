import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LeaderBoard } from '../LeaderBoard'

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private router: Router, public httpClient: HttpClient) { }

  public userName: [];
  public winRatio: [];
  public turnsPlayed: [];

  GetSomeLeaderBoardShit() {

    let request = this.httpClient.get<LeaderBoard>("https://swindev.me/articles");
    request.subscribe((response) => {
      console.log(response);
      
    });

  }
}
