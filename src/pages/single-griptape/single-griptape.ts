import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Griptape } from '../../models/griptape';

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
  public price = this.navParams.get('price');
  public imgPath = this.navParams.get('imgPath');


  public griptape = new Griptape(this.brand, this.description, this.price, this.imgPath);

  buyGriptape()
  {
    sessionStorage.setItem('griptape', JSON.stringify(this.griptape));
    this.navCtrl.push(HomePage);
  }
  

}
