import { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header';
import { datas } from './datas/data.js';

function ProductList(props) {
	const [products, setProducts] = useState([]);

	function getInit() {
		// const dataSlide = datas.slice(0, props.Perpage);
		setProducts(datas);
	}
	useEffect(() => {
		getInit();
	}, []);

	return (
		<>
		<div className="product-page">
				<div className="product-page-title">Product list</div>
				<div className="product-wraper">
					<div className="product-list">
						{products &&
							products.map((item, index) => {
								return (
									<MoleculeProductItem
										key={item.id ?? index }
										item={item}
									/>
								);
							})}
					</div>
				</div>
			</div>

		</>
	);
}

function App() {
	const [Perpage, setPerpage] = useState(10);
	const [statusComponent, setStatusComponent] = useState(true);

	function handleToggleComponent() {
		setStatusComponent(!statusComponent);
	}

	function handleLoadMore() {

	}

	return (
		<>
			<Header />
			{/* <Welcome name="Hoang" /> */}
			<button onClick={handleToggleComponent}>Toggle</button>
			{/* {statusComponent && <ProductList perpage={Perpage} />} */}
			<ProductList />
			<button onClick={handleLoadMore}>Load more</button>

			<Footer />
		</>
	);
}

export default App;
