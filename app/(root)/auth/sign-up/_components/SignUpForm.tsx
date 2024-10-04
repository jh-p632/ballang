"use client";

import { signUp } from "@/api/auth.api";
import { SignUpData } from "@/schemas/auth.schema";
import { useRouter } from "next/navigation";
import React, { ComponentProps, useRef } from "react";

function SignUpForm() {
	const router = useRouter();

	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const passwordConfirmInputRef = useRef<HTMLInputElement>(null);

	const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
		e.preventDefault();

		if (!emailInputRef.current) return;
		if (!passwordInputRef.current) return;
		if (!passwordConfirmInputRef.current) return;

		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;
		const passwordConfirm = passwordConfirmInputRef.current.value;

		console.log(email);

		// if (!email) return alert("이메일 주소를 입력해 주세요");
		// if (!password) return alert("비밀번호를 입력해 주세요");
		// if (!passwordConfirm) return alert("비밀번호를 확인해 주세요");
		// if (!email.includes("@"))
		// 	return alert("올바른 이메일 주소를 적어 주세요.");
		// if (password.length < 8)
		// 	return alert("비밀번호는 8글자 이상이어야 합니다.");
		// if (password !== passwordConfirm)
		// 	return alert("비밀번호와 비밀번호 확인 값이 다릅니다.");

		const data: SignUpData = { email, password };
		console.log(data);

		await signUp(data);

		alert("축하드립니다. 회원가입에 성곡하셨습니다!");

		router.push("/");
	};

	return (
		<form
			onSubmit={handleSubmitForm}
			className="mx-auto flex flex-col gap-y-4"
		>
			<input
				ref={emailInputRef}
				name="email"
				className="w-96 border rounded-md p-4"
				placeholder="이메일을 입력해 주세요."
				type="email"
			/>

			<input
				ref={passwordInputRef}
				name="password"
				className="w-96 border rounded-md p-4"
				placeholder="비밀번호를 입력해 주세요"
				type="password"
			/>

			<input
				ref={passwordConfirmInputRef}
				name="password"
				className="w-96 border rounded-md p-4"
				placeholder="비밀번호를 입력해 주세요"
				type="password"
			/>

			<button className="w-96 bg-black text-white p-4 font-bold rounded-md">
				회원가입하기
			</button>
		</form>
	);
}

export default SignUpForm;
