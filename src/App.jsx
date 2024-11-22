// React Day1: Btvn B28 20/11/2024
import ComponentHeader from './components/componentHeader/ComponentHeader';
import ProductListPage from './pages/productListPage';
import ComponentFooter from './components/componentFooter/componentFooter';

function App(prop) {
	return (
		<>
			<ComponentHeader />
			<div className="content-pages container p-4 h-100">
				<ProductListPage />
			</div>
			<ComponentFooter />
		</>
	);
}

export default App;
