// login
import instance from '.'; // axios

// Cach 1
export const registerAccount = async dataBody => {
	try {
		const { data } = await instance.post('register', dataBody);
        if (data.user) return data;
        alert(error.response.data);
	} catch (error) {
		console.log(error);
        alert(error.response.data || "Register failed!!")
	}
};

export const loginAccount = async dataBody => {
	try {
        const { data } = await instance.post("login", dataBody);
        return data;
	} catch (error) {
        console.log(error);
    }
};

// Cach 2
export const authRequest = async (path, dataBody) => {
	try {
        const { data } = await instance.post(path, dataBody);
        if (data.user) return data;
        alert(error.response.data);
	} catch (error) {
        console.log(error);
        alert(error.response.data || `${path} failed!!`)

    }
};
