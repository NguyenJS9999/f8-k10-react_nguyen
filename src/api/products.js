const baseUrl = 'http://localhost:3000';

async function getAllProduct(path = 'products') {
	try {
		const endUrl = new URL(`${baseUrl}/${path}`);
		const res = await fetch(endUrl);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export { getAllProduct };
