import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBaseComponent } from './Routes/game-base/game-base.component';
import { GameResultComponent } from './Routes/game-result/game-result.component';



// add in the routes here
const routes: Routes = [
{path: "base", component: GameBaseComponent},
{path: "result", component: GameResultComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
