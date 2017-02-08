export class Truck{
	model:string;
	price: number;
	length: number;

	constructor(Model:string, Length:number, Price:number)
	{
		this.model = Model;
		this.length = Length;
		this.price = Price;
	}
}