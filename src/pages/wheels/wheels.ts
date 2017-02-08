import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Wheels } from '../../models/wheels';
import { SingleWheelPage } from '../single-wheel/single-wheel';

/*
  Generated class for the Wheels page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wheels',
  templateUrl: 'wheels.html'
})
export class WheelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.fillArray();
  }

  public selectedWheels:Wheels;
  public wheels:Array<Wheels> = [];

 fillArray()
 {
    	// Push to wheels array
    	this.wheels.push(new Wheels("Mega Wheels", "Rolls over the ground like a hot knife through butter", 3, 199, "img/wheels.jpg"));
    	this.wheels.push(new Wheels("super Wheels", "Might be the best ones for the price, these gorgeous wheels will blow your mind!", 4, 450, "img/wheels.jpg"));
    	this.wheels.push(new Wheels("Master Wheels", "You can't get any better than this. Expensive but sure worth it, now that's value!", 5  , 600, "img/wheels.jpg"));
 }

 selectWheel(wheel:Wheels)
 {
   this.navCtrl.push(SingleWheelPage, wheel);
 }

}
