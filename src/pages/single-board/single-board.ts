import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  public imgPath = this.navParams.get('imgPath');
  public price = this.navParams.get('price');


  buyBoard()
  {
    sessionStorage.setItem('boardBrand', this.brand);
    sessionStorage.setItem('boardDescription', this.description);
    sessionStorage.setItem('boardSize', this.size);
    sessionStorage.setItem('bardImgPath', this.imgPath);
    sessionStorage.setItem('boardPrize', this.price);
    this.navCtrl.push(HomePage);
  }

}
