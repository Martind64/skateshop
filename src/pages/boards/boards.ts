import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Board } from '../../models/board';

/*
  Generated class for the Boards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-boards',
  templateUrl: 'boards.html'
})
export class BoardsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.fillArray();
  }

  public selectedBoard:Board;
  public boards:Array<Board> = [];
  
  fillArray()
  {
    	this.boards.push(new Board("Extreme", "blue", 8.4, 499));
    	this.boards.push(new Board("Delkra", "redhot", 10.4, 599));
    	this.boards.push(new Board("Sanchi", "Dark grey", 12.4, 699));

    	this.selectedBoard = new Board("", "", 0, 0);

  }

}
