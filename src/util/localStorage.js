
export function handleLocalStorage( nameArrTodo, data) {
	console.log('handleLocalStorage');
	if (data) {
		localStorage.setItem(`${nameArrTodo}`, JSON.stringify(data));
	}
}

export function getLocalStorage(nameArrTodo) {
	if (nameArrTodo) {
		console.log('getLocalStorage: ', nameArrTodo);
		const todosData = JSON.parse( localStorage.getItem(`${nameArrTodo}`) );
		if ( todosData ) {
		} else {
			return;
		}

	}
}