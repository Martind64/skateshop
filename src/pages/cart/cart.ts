import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

	// Get sessionsstorage and make and object from the string
  public board = JSON.parse(sessionStorage.getItem('board'));
  public wheel = JSON.parse(sessionStorage.getItem('wheel'));
  public griptape = JSON.parse(sessionStorage.getItem('griptape'));
  public bearing = JSON.parse(sessionStorage.getItem('bearing'));
  public truck = JSON.parse(sessionStorage.getItem('truck'));

  public finalPrice = this.totalPrice();




  // Get the total price of the shopping cart
  totalPrice()
  {
    let sum:number = 0;
    if(this.board) {
        sum += this.board.price;
    }
    if(this.wheel) {
        sum += this.wheel.price;
    }
    if(this.griptape) {
       sum += this.griptape.price;
    }
    if(this.bearing) {
       sum += this.bearing.price;
    }
    if(this.truck) {
       sum += this.truck.price;
    }
    return sum;
  }
}
