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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

	// Get sessionsstorage and make and object from the string
  public board = JSON.parse(sessionStorage.getItem('board'));
  public wheel = JSON.parse(sessionStorage.getItem('wheel'));
  public griptape = JSON.parse(sessionStorage.getItem('griptape'));
  public bearing = JSON.parse(sessionStorage.getItem('bearing'));
  public truck = JSON.parse(sessionStorage.getItem('truck'));

  public finalPrice = this.totalPrice();

  totalPrice()
  {
    let sum:number;
    if(this.board) {
        let boardPrice = this.board.price;
        if(sum == null) {
          sum = this.board.price
        }
        else
        sum += boardPrice;
    }
    if(this.wheel) {
        if(sum == null) {
          sum = this.wheel.price;
        }
        else
        sum += this.wheel.price;
    }
    if(this.griptape) {
      if(sum == null) {
        sum = this.griptape.price
      }
      else
       sum += this.griptape.price;
    }
    if(this.bearing) {
      if(sum == null) {
        sum = this.bearing.price;
      }
      else
       sum += this.bearing.price;
    }
    if(this.truck) {
      if(sum == null) {
        sum = this.truck.price;
      }
       sum += this.truck.price;
    }
    return sum;
  }
}
