import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:3000",
	headers: {
		"Content-Type": "application/json",
	},
});

export const getAll = async (path) => {
	try {
		const { data } = await instance.get(path);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getById = async (path, id) => {
	try {
		const { data } = await instance.get(`${path}/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const removeById = async (path, id) => {
	try {
		const res = await instance.delete(`${path}/${id}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const create = async (path, data) => {};
export const updateById = async (path, id, data) => {};

export default instance;
