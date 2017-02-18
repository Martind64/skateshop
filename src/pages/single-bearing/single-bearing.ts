import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  public imgPath = this.navParams.get('imgPath');
  public price = this.navParams.get('price');



    buyBearing()
  {
    sessionStorage.setItem('bearingBrand', this.brand);
    sessionStorage.setItem('bearingDescription', this.description);
    sessionStorage.setItem('bearingimgPath', this.imgPath);
    sessionStorage.setItem('bearingPrice', this.price);
    this.navCtrl.push(HomePage);
  }
}
