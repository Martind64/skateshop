import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Truck } from '../../models/truck';

/*
  Generated class for the Trucks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trucks',
  templateUrl: 'trucks.html'
})
export class TrucksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.fillArray();
  }

  public selectedTruck:Truck;
  public trucks:Array<Truck> = [];
  

  fillArray()
  {
    	// Push to trucks array
    	this.trucks.push(new Truck("Model", 8, 199));
    	this.trucks.push(new Truck("Model1", 8, 199));
    	this.trucks.push(new Truck("Model2", 8, 199));
  }

}
