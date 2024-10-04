import { getBallangBrands, getBallangProducts } from "@/api/ballang.api";
import Link from "next/link";
import axios from "axios";

async function BallangBrandsPage(props: {
	params: {};
	searchParams: { brandId: string };
}) {
	const brandId = props.searchParams.brandId;
	console.log(brandId);

	const brands = await getBallangBrands();
	const products = await getBallangProducts();

	const response = await axios.get(
		`https://api.ballang.yoojinyoung.com/brands?brandId=${brandId}`
	);
	const post = response.data.result;
	console.log(brands);
	// console.log(Object.keys(post));
	// console.log(products);

	if (!brands) return null;
	if (!products) return null;

	return (
		<main className="flex flex-col px-5 py-6">
			<h2 className="font-bold text-3xl text-center py-14">Brands</h2>

			<ul className="mx-auto mb-20 grid grid-cols-6 gap-x-6 gap-y-4 font-normal text-sm">
				<li className="mx-auto col-start-1 col-end-7  text-center pb-4">
					<Link href={`/brands`} className="font-bold text-center ">
						ALL
					</Link>
				</li>
				{brands.map((brand) => (
					<li key={brand.id} className="text-center">
						<Link href={`/brands?brandId=${brand.id}`}>
							{brand.nameKr}
						</Link>
					</li>
				))}
			</ul>

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

export default BallangBrandsPage;
