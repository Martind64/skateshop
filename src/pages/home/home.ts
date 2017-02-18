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
  
  // Get sessionsstorage and make it in object
  public board = JSON.parse(sessionStorage.getItem('board'));
  public wheel = JSON.parse(sessionStorage.getItem('wheel'));
  public griptape = JSON.parse(sessionStorage.getItem('griptape'));
  public bearing = JSON.parse(sessionStorage.getItem('bearing'));
  public truck = JSON.parse(sessionStorage.getItem('truck'));


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
