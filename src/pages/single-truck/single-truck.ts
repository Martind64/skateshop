import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Truck } from '../../models/truck';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  public brand = this.navParams.get('brand');
  public description = this.navParams.get('description');
  public length = this.navParams.get('length');
  public imgPath = this.navParams.get('imgPath');
  public price = this.navParams.get('price');

  public truck = new Truck(this.brand, this.description, this.length, this.price, this.imgPath);

  buyTruck()
  {
    sessionStorage.setItem('truck', JSON.stringify(this.truck));
    let alert = this.alertCtrl.create({
      title: 'Truck selected',
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
