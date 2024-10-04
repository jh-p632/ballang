export type SignUpData = {
	email: string;
	password: string;
};

export type LogInData = {
	email: string;
	password: string;
};

export type User = {
	email: string;
	password?: string;
};

export type CurrentUser = { email: string; key: number } | null;
