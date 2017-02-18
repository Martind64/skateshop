import { Board } from './board';
import { Bearing } from './bearing';
import { Truck } from './truck';
import { Griptape } from './griptape';
import { Wheels } from './wheels';

export class Skateboard{
	board:Board;
	wheels: Wheels;
	bearing:Bearing;
	truck:Truck;
	griptape:Griptape;
	imgPath:string;

	constructor(Board:Board, Wheels:Wheels, Bearing:Bearing, Truck:Truck, Griptape:Griptape, ImgPath:string)
	{
		this.board = Board;
		this.wheels = Wheels;
		this.bearing = Bearing;
		this.truck = Truck;
		this.griptape = Griptape;
		this.imgPath = ImgPath;
	}

}