export class Truck{
	brand:string;
	description: string;
	imgPath: string;
	length: number;
	price: number;

	constructor(Brand:string, Description:string, Length:number, Price:number, Imgpath:string)
	{
		this.brand = Brand;
		this.description = Description;
		this.length = Length;
		this.price = Price;
		this.imgPath = Imgpath;
	}
}