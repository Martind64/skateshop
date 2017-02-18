import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Bearing } from '../../models/bearing';

/*
  Generated class for the SingleBearing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-single-bearing',
  templateUrl: 'single-bearing.html'
})
export class SingleBearingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  public brand = this.navParams.get('brand');
  public description = this.navParams.get('description');
  public price = this.navParams.get('price');
  public imgPath = this.navParams.get('imgPath');

  public bearing = new Bearing(this.brand, this.description, this.price, this.imgPath);

  buyBearing()
  {
    sessionStorage.setItem('bearing', JSON.stringify(this.bearing));
    this.navCtrl.push(HomePage);
  }
}
