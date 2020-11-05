import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBaseComponent } from './Routes/game-base/game-base.component';
import { GameResultComponent } from './Routes/game-result/game-result.component';
import { LeaderboardComponent } from './Routes/leaderboard/leaderboard.component';
import { RoundSelectComponent } from './Routes/round-select/round-select.component';



// add in the routes here
const routes: Routes = [
{path: "round", component: RoundSelectComponent},
{path: "base", component: GameBaseComponent},
{path: "result", component: GameResultComponent},
{path: "Leaderboard", component: LeaderboardComponent},
{path: "**", redirectTo: "round"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
