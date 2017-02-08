import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SingleBoard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-single-board',
  templateUrl: 'single-board.html'
})
export class SingleBoardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public brand = this.navParams.get('brand');
  public description = this.navParams.get('description');
  public size = this.navParams.get('size');
  public imgPath = this.navParams.get('imgPath');
  public price = this.navParams.get('price');




}
