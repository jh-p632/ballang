import LogInForm from "./_components/LogInForm";

function LogInPage() {
	return (
		<main className="p-5 py--6 flex flex-col justify-center">
			<h1 className="text-center font-bold text-3xl my-14">로그인</h1>

			<LogInForm />
		</main>
	);
}

export default LogInPage;
