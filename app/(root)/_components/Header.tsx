import Link from "next/link";

function Header() {
	return (
		<header className="border-b flex shrink-0 items-center h-16 px-6">
			<Link className="font-bold text-2xl" href={"/"}>
				발랑
			</Link>

			<nav className="ml-20 font-normal text-sm">
				<ul>
					<li>
						<Link href={"/brands"} className="cursor-pointer">
							Brands
						</Link>
					</li>
				</ul>
			</nav>

			<div className="ml-auto flex flex-row gap-5 text-sm">
				<Link href={"/auth/sign-up"}>회원가입</Link>

				<Link href={"/auth/log-in"}>로그인</Link>
			</div>
		</header>
	);
}

export default Header;
