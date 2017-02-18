import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Bearing } from '../../models/bearing';
import { SingleBearingPage } from '../single-bearing/single-bearing';

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
	this.bearings.push(new Bearing("Windsoe", "This is a beautiful solid bearing!", 200, "img/bearing.jpg"));
	this.bearings.push(new Bearing("Dyna", "very expensive, but very good!", 400, "img/bearing.jpg"));
	this.bearings.push(new Bearing("Jericho", "This bearing has been built on an infinity stone.. it's extraordinary", 500, "img/bearing.jpg"));
  }

  selectBearing(bearing:Bearing)
  {  
    this.navCtrl.push(SingleBearingPage, bearing);
  }

}
