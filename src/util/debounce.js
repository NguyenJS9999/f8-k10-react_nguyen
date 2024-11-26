export function debounce() {
	function debounce(func, delay) {
		let timer;
		return function (...args) {
			clearTimeout(timer); // Xóa bộ đếm hiện tại nếu người dùng nhập nhanh
			timer = setTimeout(() => func.apply(this, args), delay); // Gọi hàm sau khoảng thời gian delay
		};
	}
}
