import SignUpForm from "./_components/SignUpForm";

function SignUpPage() {
	return (
		<main className="p-5 py--6 flex flex-col justify-center">
			<h1 className="text-center font-bold text-3xl my-14">회원가입</h1>

			<SignUpForm />
		</main>
	);
}

export default SignUpPage;
