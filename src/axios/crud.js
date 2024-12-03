
// import instance from "axios";
import instance from "./index.js";


export const getAllItem = async path => {
	try {
		const { data } = await instance.get(path);
		return data;
	} catch (error) {
		console.log(error);
		return error;
	}
};

export const getOneById = async (path, id) => {
	try {
		const { data } = await instance.get(`${path}/${id}`);
		return data;
	} catch (error) {
		console.log(error);
		return error;
	}
};

export const removeOneById = async (path, id) => {
	try {
		const res = await instance.delete(`${path}/${id}`);
		return res;
	} catch (error) {
		console.log(error);
		return error;
	}
};

export const createNewItem = async (path, dataBody) => {
	try {
		const res = await instance.post(`${path}`, dataBody);
		console.log('createNewItem res: ', res);
		const data = res.data;
		return data;
	} catch (error) {
		console.log('createNewItem error: ', error);
		return error;
	}
};

export const updateById = async (path, id, dataBody) => {
	try {
		const { data } = await instance.patch(`${path}/${id}`, dataBody);
		return data;
	} catch (error) {
		console.log(error);
		return error;
	}
};
