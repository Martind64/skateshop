import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  public brand = this.navParams.get('brand');
  public description = this.navParams.get('description');
  public price = this.navParams.get('price');
  public imgPath = this.navParams.get('imgPath');


  public griptape = new Griptape(this.brand, this.description, this.price, this.imgPath);

  buyGriptape()
  {
    sessionStorage.setItem('griptape', JSON.stringify(this.griptape));
    let alert = this.alertCtrl.create({
      title: 'Griptape selected',
      subTitle: this.brand + " has been added to your cart",
      buttons: [
      {
        text: 'OK',
        role: 'cancel',
        handler: () => {
        this.navCtrl.setRoot(HomePage);
        },
        
      }]
    })
    alert.present();
  }
  

}
