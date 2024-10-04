import BallangProductsList from "../products/page";

async function HomePage() {
	return "/" ? (
		<main className="px-5 py-6 flex flex-col">
			<h2 className="font-bold text-3xl text-center py-14">Trending</h2>

			<BallangProductsList />
		</main>
	) : (
		<main className="px-5 py-6 flex flex-col">
			<BallangProductsList />
		</main>
	);
}

export default HomePage;
