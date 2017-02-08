export class Board{

	brand: string;
	description:string;
	size: number;
	imgPath: string;
	price: number;

	constructor(Brand: string, Description:string, Size: number, Price: number, ImgPath: string)
	{
		this.brand = Brand;
		this.description = Description;
		this.imgPath = ImgPath;
		this.size = Size;
		this.price = Price;
	}

}