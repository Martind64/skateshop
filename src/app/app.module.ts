import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BoardsPage } from '../pages/boards/boards';
import { WheelsPage } from '../pages/wheels/wheels';
import { TrucksPage } from '../pages/trucks/trucks';
import { BearingsPage } from '../pages/bearings/bearings';
import { GriptapePage } from '../pages/griptape/griptape';
import { SingleBoardPage } from '../pages/single-board/single-board';
import { SingleWheelPage } from '../pages/single-wheel/single-wheel';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BoardsPage,
    WheelsPage,
    TrucksPage,
    BearingsPage,
    GriptapePage,
    SingleBoardPage,
    SingleWheelPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BoardsPage,
    WheelsPage,
    TrucksPage,
    BearingsPage,
    GriptapePage,
    SingleBoardPage,
    SingleWheelPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
