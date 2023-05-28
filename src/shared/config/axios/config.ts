import { BASE_URL } from "../../constants/env";

export const AxiosConfig = {
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
}
