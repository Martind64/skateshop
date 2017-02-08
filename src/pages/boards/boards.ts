import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Board } from '../../models/board';
import { SingleBoardPage } from '../single-board/single-board';

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

  public boards:Array<Board> = [];
  
  fillArray()
  {
    	this.boards.push(new Board("Extreme","An amazing board filled with awesome!", 8.4, 499, "img/board.jpg"));
    	this.boards.push(new Board("Delkra","A board made of quality material!",  10.4, 599, "img/board.jpg"));
    	this.boards.push(new Board("Sanchi","This board has been owned by none other than Martin Delfs!", 12.4, 699, "img/board.jpg"));

  }

  selectBoard(board:Board)
  {
    this.navCtrl.push(SingleBoardPage, board);
  }

 
}
