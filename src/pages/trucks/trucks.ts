import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Truck } from '../../models/truck';
import { SingleTruckPage } from '../single-truck/single-truck';

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
    	this.trucks.push(new Truck("Hermware","Very sturdy trucks made out of only the best, greate deal for only 199!", 8, 199, "img/truck.jpg"));
    	this.trucks.push(new Truck("USN","A very nice truck by USN, they've still got it!", 8, 199, "img/truck.jpg"));
    	this.trucks.push(new Truck("Chandoe","a brand new kind of truck from Chandoe, they are bringing their A game with this one!", 8, 199, "img/truck.jpg"));
  }

  selectTruck(truck:Truck)
  {
    this.navCtrl.push(SingleTruckPage, truck);
  }

}
