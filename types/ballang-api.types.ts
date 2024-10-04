export type BallangProduct = {
	id: number;
	name: string;
	deliveryType: string;
	imgSrc: string;
	onlineStock: number;
	originalPrice: number;
	price: number;
	brand: {
		id: number;
		nameEn: string;
		nameKr: string;
	};
};

export type BallangProducts = BallangProduct[];

export type ProductImage = {
	imgSrc: string;
};

export type BallangBrand = {
	id: number;
	nameEn: string;
	nameKr: string;
};

export type BallangBrands = BallangBrand[];
