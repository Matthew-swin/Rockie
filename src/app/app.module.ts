//Import all the shiz you need for the app here!!
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//HttpClientModule enables me to use restful API features like GET, POST etc
import { HttpClientModule} from '@angular/common/http';
//AppRoutingModule allows me to route between different coponents
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameBaseComponent } from './Routes/game-base/game-base.component';
import { GameResultComponent } from './Routes/game-result/game-result.component';
import { LeaderboardComponent } from './Routes/leaderboard/leaderboard.component';
import { UsernameComponent } from './components/username/username.component';
import { RoundSelectComponent } from './Routes/round-select/round-select.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBaseComponent,
    GameResultComponent,
    LeaderboardComponent,
    UsernameComponent,
    RoundSelectComponent
  ],
  //also need to import routing and HTTPclient here
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
