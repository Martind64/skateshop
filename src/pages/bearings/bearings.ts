import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Bearing } from '../../models/bearing';

/*
  Generated class for the Bearings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bearings',
  templateUrl: 'bearings.html'
})
export class BearingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.fillArray();
  }

  public selectedBearing:Bearing;
  public bearings:Array<Bearing> = [];

  fillArray()
  {
	// Push to bearings array
	this.bearings.push(new Bearing("brand", "blue", 200));
	this.bearings.push(new Bearing("brand1", "yellow", 400));
	this.bearings.push(new Bearing("brand2", "white", 500));
  }

}
