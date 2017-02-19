import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Griptape } from '../../models/griptape';
import { SingleGriptapePage } from '../single-griptape/single-griptape';

/*
  Generated class for the Griptape page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-griptape',
  templateUrl: 'griptape.html'
})
export class GriptapePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.fillArray();
  }
  
  public griptape:Array<Griptape> = [];

  fillArray()
  {
  	// Push to griptape array
  	this.griptape.push(new Griptape("Stronk","This griptape really isn't all that stronk", 199, "img/griptape.jpg"));
  	this.griptape.push(new Griptape("Hotsen","Griptape from hotsen, very dark, very cold", 170, "img/griptape.jpg"));
  	this.griptape.push(new Griptape("Usn","This griptape is spectacular, very good for the price!", 149, "img/griptape.jpg"));
  }

  selectGriptape(griptape:Griptape)
  {
    this.navCtrl.push(SingleGriptapePage, griptape);
  }  

}
