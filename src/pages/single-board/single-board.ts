import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Board } from '../../models/board';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public brand = this.navParams.get('brand');
  public description = this.navParams.get('description');
  public size = this.navParams.get('size');
  public price = this.navParams.get('price');
  public imgPath = this.navParams.get('imgPath');

  public board = new Board(this.brand, this.description ,this.size, this.price, this.imgPath);
  buyBoard()
  {
    sessionStorage.setItem('board', JSON.stringify(this.board));
    this.navCtrl.push(HomePage);
  }

}
