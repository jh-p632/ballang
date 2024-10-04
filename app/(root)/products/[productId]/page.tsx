import { getBallangProduct } from "@/api/ballang.api";
import Link from "next/link";
import React from "react";

async function BallangOnProductPage(props: { params: { productId: string } }) {
	const product = await getBallangProduct(props.params.productId);

	// console.log(props.params.productId);

	if (!product) return;

	return (
		<main className="m-auto">
			<section className="flex flex-row justify-center items-center gap-x-5">
				<div className="aspect-[3/4]">
					<img
						className="object-cover"
						src={product.imgSrc}
						alt="제품 이미지"
					/>
				</div>

				<div className="flex flex-col gap-y-5">
					<Link href={"/"}>
						<h2 className="border-b font-bold">
							{product.brand.nameKr}/{product.brand.nameEn}
						</h2>
					</Link>

					<h1 className="font-normal text-lg">{product.name}</h1>

					<div className="grid grid-cols-2 gap-y-3 font-bold">
						<div>정가</div>
						<div className="text-red-500">
							₩{product.originalPrice.toLocaleString()}
						</div>
						<div>판매가</div>
						<div>₩{product.price.toLocaleString()}</div>
						<div>배송</div>
						<div>{product.deliveryType}</div>
						<div>잔여 재고</div>
						<div>{product.onlineStock}</div>
					</div>

					<button className="bg-black text-white font-bold text-1xl p-4 rounded-md">
						장바구니에 담기
					</button>
				</div>
			</section>
		</main>
	);
}

export default BallangOnProductPage;
