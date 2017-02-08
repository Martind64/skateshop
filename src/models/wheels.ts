export class Wheels{
	brand:string;
	description:string;
	imgPath:string;
	size:number;
	price:number;

	constructor(Brand:string, Description:string, Size:number, Price: number, ImgPath:string)
	{
		this.brand = Brand;
		this.description = Description;
		this.size = Size;
		this.price = Price;
		this.imgPath = ImgPath;
	}

}