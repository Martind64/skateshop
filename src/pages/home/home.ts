import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Skateboard } from '../../models/skateboard';

// Import pages
import { BoardsPage } from '../boards/boards';
import { WheelsPage } from '../wheels/wheels';
import { TrucksPage } from '../trucks/trucks';
import { BearingsPage } from '../bearings/bearings';
import { GriptapePage } from '../griptape/griptape';
//TEST
import { Board } from '../../models/board';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
    this.myBoard = this.navParams.get('brand');
    this.myBoardColor = this.navParams.get('color');
    this.myBoardSize = this.navParams.get('size');
    this.myBoardPrice = this.navParams.get('price');
  }  
  public myBoard: any;
  public myBoardColor: any;
  public myBoardSize: any;
  public myBoardPrice: any;


  skateboard:Skateboard;


  boardsPage()
  {
    this.navCtrl.push(BoardsPage);
  }

  wheelsPage()
  {
    this.navCtrl.push(WheelsPage);
  }

  griptapePage()
  {
    this.navCtrl.push(GriptapePage);
  }

  trucksPage()
  {
    this.navCtrl.push(TrucksPage);
  }

  bearingsPage()
  {
    this.navCtrl.push(BearingsPage);
  }




}
