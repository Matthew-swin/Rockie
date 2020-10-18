import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBaseComponent } from './Routes/game-base/game-base.component';
import { GameResultComponent } from './Routes/game-result/game-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBaseComponent,
    GameResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
