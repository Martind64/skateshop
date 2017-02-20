import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Skateboard } from '../../models/skateboard';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.createCart();
    console.log(this.cart);
  }

	// Get sessionsstorage and make and object from the string
  public board = JSON.parse(sessionStorage.getItem('board'));
  public wheel = JSON.parse(sessionStorage.getItem('wheel'));
  public bearing = JSON.parse(sessionStorage.getItem('bearing'));
  public truck = JSON.parse(sessionStorage.getItem('truck'));
  public gripTape = JSON.parse(sessionStorage.getItem('griptape'));

  // Set finalPrice to the total price of the shopping cart 
  public finalPrice = this.totalPrice();

  // Create a skateboard object consisting of all the other objects
  public skateboard = new Skateboard(this.board, this.wheel, this.bearing, this.truck, this.gripTape);

  // Cart array
  public cart:{item:Object}[] = [];


  createCart()
  {
    if(this.skateboard.board) {
    this.cart.push({"item": this.board});
    }
    if(this.skateboard.wheels) {
      this.cart.push({"item": this.wheel});
    }
    if(this.skateboard.bearing) {
      this.cart.push({"item": this.bearing});
    }
    if(this.skateboard.truck) {
      this.cart.push({"item": this.truck});
    }
    if(this.skateboard.griptape) {
      this.cart.push({"item": this.gripTape});
    }
  }


  buy()
  {
    let alert = this.alertCtrl.create({
      title: 'Purchase completed',
      message: 'You have purchased the following items ' + '<br>' + this.displayItems(),
      buttons: [{
        text: 'ok',
        handler: () => {
          this.clearData();
          this.navCtrl.setRoot(HomePage);
        }
      }]
    })
    alert.present();
  }

  clearData()
  {
    if(this.skateboard.board) {
      sessionStorage.removeItem('board');
    }
    if(this.skateboard.wheels) {
      sessionStorage.removeItem('wheel');
    }
    if(this.skateboard.bearing) {
      sessionStorage.removeItem('bearing');
    }
    if(this.skateboard.truck) {
      sessionStorage.removeItem('truck');
    }
    if(this.skateboard.griptape) {
      sessionStorage.removeItem('griptape');
    }
  }

  displayItems()
  {
    let items:string = "";
    if(this.board) {
      items += (this.skateboard.board.brand + ' ' + this.skateboard.board.price + ' DKK<br>');
    }
    if(this.wheel) {
      items += (this.skateboard.wheels.brand + ' ' + this.skateboard.wheels.price + ' DKK<br>');
    }
    if(this.bearing) {
      items += (this.skateboard.bearing.brand + ' ' + this.skateboard.bearing.price + ' DKK<br>');
    }
    if(this.truck) {
      items += (this.skateboard.truck.brand + ' ' + this.skateboard.truck.price + ' DKK<br>');
    }
    if(this.gripTape) {
      items += (this.skateboard.griptape.brand + ' ' + this.skateboard.griptape.price + ' DKK<br>');
    }

    return items;
  }

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
    if(this.gripTape) {
       sum += this.gripTape.price;
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
