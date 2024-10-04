import { LogInData, SignUpData } from "@/schemas/auth.schema";

export async function signUp(data: SignUpData) {
	const response = await fetch(
		"https://api.ballang.yoojinyoung.com/auth/sign-up",
		{
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	console.log(response);

	return result;
}

export async function logIn(data: LogInData) {
	const response = await fetch(
		"https://api.ballang.yoojinyoung.com/auth/log-in",
		{
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();

	return result;
}
