import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SingleTruck page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-single-truck',
  templateUrl: 'single-truck.html'
})
export class SingleTruckPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public brand = this.navParams.get('brand');
  public description = this.navParams.get('description');
  public length = this.navParams.get('length');
  public imgPath = this.navParams.get('imgPath');
  public price = this.navParams.get('price');


}
