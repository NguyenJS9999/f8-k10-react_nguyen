function useState(initValue) {
	let state = initValue;

	function setState(state) {
		// logic
		return state;
	}
	return [state, setState];
}

const [count, setCount] = useState(0);
