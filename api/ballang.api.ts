import {
	BallangBrand,
	BallangBrands,
	BallangProduct,
	BallangProducts,
} from "@/types/ballang-api.types";
import axios from "axios";

const ballangAPI = axios.create({
	baseURL: "https://api.ballang.yoojinyoung.com",
	withCredentials: true,
});

export async function getBallangProducts() {
	try {
		const response = await ballangAPI.get<{ result: BallangProducts }>(
			"/products"
		);
		const data = response.data.result;
		return data;
	} catch (e) {
		console.log(e);
	}
}

export async function getBallangProduct(productId: string) {
	try {
		const response = await ballangAPI.get<{ result: BallangProduct }>(
			`/products/${productId}`
		);
		const data = response.data.result;

		return data;
	} catch (e) {
		console.log(e);
	}
}

export async function getBallangBrands() {
	try {
		const response = await ballangAPI.get<{
			result: BallangBrands;
		}>("/brands");
		const data = response.data.result;

		return data;
	} catch (e) {
		console.log(e);
	}
}

export async function getBallangBrand(brandId: string) {
	try {
		const response = await ballangAPI.get<{ result: BallangBrand }>(
			`/brands/${brandId}`
		);
		const data = response.data.result;

		return data;
	} catch (e) {
		console.log(e);
	}
}
