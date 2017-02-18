import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Import pages
import { BoardsPage } from '../boards/boards';
import { WheelsPage } from '../wheels/wheels';
import { TrucksPage } from '../trucks/trucks';
import { BearingsPage } from '../bearings/bearings';
import { GriptapePage } from '../griptape/griptape';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }  
  

  boardsPage = BoardsPage;
  wheelsPage = WheelsPage;
  griptapePage = GriptapePage;
  bearingsPage = BearingsPage;
  trucksPage = TrucksPage;
  cartPage = CartPage;


  // Get sessionsstorage and make and object from the string
  public board = JSON.parse(sessionStorage.getItem('board'));
  public wheel = JSON.parse(sessionStorage.getItem('wheel'));
  public griptape = JSON.parse(sessionStorage.getItem('griptape'));
  public bearing = JSON.parse(sessionStorage.getItem('bearing'));
  public truck = JSON.parse(sessionStorage.getItem('truck'));

}
