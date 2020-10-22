//Import all the shiz you need for the app here!!
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//AppRoutingModule allows me to route between different coponents
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBaseComponent } from './Routes/game-base/game-base.component';
import { GameResultComponent } from './Routes/game-result/game-result.component';
//HttpClientModule enables me to use restful API features like GET, POST etc
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameBaseComponent,
    GameResultComponent
  ],
  //also need to import routing and HTTPclient here
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
