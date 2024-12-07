export function handleLocalStorage(nameLocalStorage, data) {
	console.log('handleLocalStorage');
	if (data) {
		localStorage.setItem(`${nameLocalStorage}`, JSON.stringify(data));
	}
}

export function getLocalStorage(nameLocalStorage) {
	if (nameLocalStorage) {
		const dataRaw = localStorage.getItem(`${nameLocalStorage}`);

		if ( typeof dataRaw === "string" ) {
			return dataRaw;
		}
		return JSON.parse(dataRaw);

	} else {
		return;
	}
}

// Hàm xóa dữ liệu theo key
export function removeFromLocalStorage(key) {
    if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        console.log(`Đã xóa mục với key: ${key}`);
    } else {
        console.log(`Key: ${key} không tồn tại trong Local Storage`);
    }
}

// Hàm xóa danh sách các key trong Local Storage
export function removeMultipleFromLocalStorage(keys) {
    keys.forEach(key => {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key);
            console.log(`Đã xóa mục với key: ${key}`);
        } else {
            console.log(`Key: ${key} không tồn tại trong Local Storage`);
        }
    });
}

