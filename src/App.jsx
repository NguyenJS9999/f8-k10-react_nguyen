import { useState } from "react";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

function Welcome(props) {
	// props.name = props.name + "aha";

	// const [state, setState] = useState(initial value)
	const [count, setCount] = useState(0);

	function handleClick() {
		// count++;
		console.log("hello");
		setCount((prev) => prev + 1);
		// setCount((prev) => prev + 1);
		// setCount(count + 9);
		// setCount(count + 3);
		//! Không được cố gắng thay đổi trực tiếp giá trị của state.
	}
	return (
		<>
			<h1>Xin chao {props.name}</h1>
			<button onClick={handleClick}>Click me</button>
			{count}
		</>
	);
}

function App() {
	return (
		<>
			<Header />
			<Welcome name="Hoang" />
			<Footer />
		</>
	);
}

export default App;
