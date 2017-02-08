export class Griptape{
	brand: string;
	description: string;
	price:number;
	imgPath:string;

	constructor(Brand:string, Description: string, Price:number, ImgPath:string)
	{
		this.brand = Brand;
		this.description = Description;
		this.price = Price;
		this.imgPath = ImgPath;
	}
}