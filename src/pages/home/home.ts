import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Skateboard } from '../../models/skateboard';

// Import pages
import { BoardsPage } from '../boards/boards';
import { WheelsPage } from '../wheels/wheels';
import { TrucksPage } from '../trucks/trucks';
import { BearingsPage } from '../bearings/bearings';
import { GriptapePage } from '../griptape/griptape';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }  
  
  // Test navParam by printing brands in html
  public boardDescription = sessionStorage.getItem('boardDescription');
  public secondBrand = sessionStorage.getItem('boardBrand');


  public board = this.navParams.get('board');

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
