import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the SingleGriptape page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-single-griptape',
  templateUrl: 'single-griptape.html'
})
export class SingleGriptapePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public brand = this.navParams.get('brand');
  public description = this.navParams.get('description');
  public imgPath = this.navParams.get('imgPath');
  public price = this.navParams.get('price');

  buyGriptape()
  {
    sessionStorage.setItem('griptapeBrand', this.brand);
    sessionStorage.setItem('griptapeSize', this.description);
    sessionStorage.setItem('griptapeImgPath', this.imgPath);
    sessionStorage.setItem('griptapePrice', this.price);
    this.navCtrl.push(HomePage);
  }
  

}
