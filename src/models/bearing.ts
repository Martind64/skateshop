export class Bearing{
	brand:string;
	description:string;
	imgPath: string;
	price:number;

	constructor(Brand:string, Description:string, Price:number, ImgPath:string)
	{
		this.brand = Brand;
		this.description = Description;
		this.imgPath = ImgPath;
		this.price = Price;
	}
}