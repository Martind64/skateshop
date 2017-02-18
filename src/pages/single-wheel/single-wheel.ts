import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Wheels } from '../../models/wheels';

/*
  Generated class for the SingleWheel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-single-wheel',
  templateUrl: 'single-wheel.html'
})
export class SingleWheelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public brand = this.navParams.get('brand');
  public description = this.navParams.get('description');
  public size = this.navParams.get('size');
  public price = this.navParams.get('price');
  public imgPath = this.navParams.get('imgPath');

  public wheel = new Wheels(this.brand, this.description, this.size, this.price, this.imgPath)


  buyWheel()
  {
    sessionStorage.setItem('wheel', JSON.stringify(this.wheel));
    this.navCtrl.push(HomePage);
  }

}
