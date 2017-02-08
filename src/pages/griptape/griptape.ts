import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Griptape } from '../../models/griptape';

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
  
  public selectedGriptape:Griptape;
  public griptape:Array<Griptape> = [];



  fillArray()
  {
	// Push to griptape array
	this.griptape.push(new Griptape("blue", 199));
	this.griptape.push(new Griptape("red", 199));
	this.griptape.push(new Griptape("grey", 149));
	this.selectedGriptape = new Griptape("", 0);

  }

}
