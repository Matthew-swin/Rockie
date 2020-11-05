import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Leaderboard, LeaderboardEnvelope, LeaderboardsEnvelope } from '../Class/LeaderBoard'

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  public Leaderboard?: LeaderboardsEnvelope;

  constructor(public httpClient: HttpClient) { }

  GetSomeLeaderBoardShit() {
    let request = this.httpClient.get<LeaderboardsEnvelope>("https://my-json-server.typicode.com/kmalikkhil/json/Leaderboard");
    request.subscribe((response) => {
      console.log(response);
      this.Leaderboard = response;
    });

  }
}
