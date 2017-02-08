import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Wheels } from '../../models/wheels';

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
    	this.wheels.push(new Wheels("Mega Wheels", 3, "blue", 199));
    	this.wheels.push(new Wheels("super Wheels", 4, "red", 450));
    	this.wheels.push(new Wheels("Master Wheels", 5, "black", 600	));

    	this.selectedWheels = new Wheels("", 0, "", 0);

 }

}
