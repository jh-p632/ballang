import { getBallangProducts } from "@/api/ballang.api";
import Link from "next/link";
import React from "react";

async function BallangProductsList() {
	const products = await getBallangProducts();

	if (!products) return null;

	return (
		<main>
			<ul className="grid grid-cols-6 gap-x-5 gap-y-16">
				{products.map((product) => (
					<li
						className="flex flex-col justify-center items-center"
						key={product.id}
					>
						<article>
							<Link
								className="flex flex-col gap-2"
								href={`/products/${product.id}`}
							>
								<img
									src={product.imgSrc}
									alt="제품 이미지"
									className="lg:hover:scale-110 transition-transform ease-in-out duration-500"
								/>

								<h2 className="font-bold text-sm">
									{product.brand.nameEn}
								</h2>
								<p className="font-medium text-sm">
									{product.name}
								</p>

								<div className="flex flex-row gap-x-3 text-sm	font-bold">
									<p className="text-red-500">
										₩
										{product.originalPrice.toLocaleString()}
									</p>
									<p>₩{product.price.toLocaleString()}</p>
								</div>
							</Link>
						</article>
					</li>
				))}
			</ul>
		</main>
	);
}

export default BallangProductsList;
