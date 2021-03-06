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
import { SingleGriptapePage } from '../pages/single-griptape/single-griptape';
import { SingleBearingPage } from '../pages/single-bearing/single-bearing';
import { SingleTruckPage } from '../pages/single-truck/single-truck';
import { CartPage } from '../pages/cart/cart';


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
    SingleWheelPage,
    SingleGriptapePage,
    SingleBearingPage,
    SingleTruckPage,
    CartPage
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
    SingleWheelPage,
    SingleGriptapePage,
    SingleBearingPage,
    SingleTruckPage,
    CartPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
