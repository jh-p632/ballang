"use client";

import { logIn } from "@/api/auth.api";
import { LogInData } from "@/schemas/auth.schema";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import React, { ComponentProps, useRef } from "react";

function LogInForm() {
	const router = useRouter();

	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

	const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
		e.preventDefault();

		if (!emailInputRef.current) return;
		if (!passwordInputRef.current) return;

		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;

		if (!email) return alert("이메일 주소를 입력해 주세요");
		if (!password) return alert("비밀번호를 입력해 주세요");
		if (!email.includes("@"))
			return alert("올바른 이메일 주소를 적어 주세요");
		if (password.length < 8)
			return alert("비밀번호는 8글자 이상이어야 합니다");

		const data: LogInData = { email, password };
		const currentUser = await logIn(data);

		setCurrentUser(currentUser);
		alert("로그인 성공~!");

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

			<button className="w-96 bg-black text-white p-4 font-bold rounded-md">
				로그인하기
			</button>
		</form>
	);
}

export default LogInForm;
