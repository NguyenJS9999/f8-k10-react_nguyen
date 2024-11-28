
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TempComponentFooter from './components/tempComponentFooter/tempComponentFooter';
import TempComponentHeader from './components/tempComponentHeader/tempComponentHeader';
// import TempComponentProductsList from './components/tempComponentProductsList/tempComponentProductsList';

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import DashBoardPage from "./pages/admin/DashBoardPage";
import ProductsList from "./pages/admin/ProductsList";
import AddProducts from './pages/admin/AddProducts';
import ProductsDetail from './pages/admin/ProductsDetail.';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	// const [showList, setShowList] = useState(true);
	const [isSearching, setIsSearching] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		localStorage.setItem('darkMode', darkMode);
	}, [darkMode]);
	useEffect(() => {
		const savedMode = localStorage.getItem('darkMode') === 'true';
		setDarkMode(savedMode);
	}, []);
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
			document.body.classList.remove('light');
		} else {
			document.body.classList.add('light');
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

	const handleSearch = value => {
		setSearchValue(value);
		setIsSearching(true);
	};

	function handlePagination() {
		setIsSearching(false);
		setSearchValue('');
	}

	// function handleToggleList() {
	// 	// console.log('handleToggleList: ', showList);
	// 	setShowList(!showList);
	// }

	return (
		<>

			{/* <div className="wrap-frame container p-4 h-100 ">
				<div
					onClick={handleToggleList}
					className="btn btn-secondary"
					id="show-hide-btn"
				>
					<span>Hiện danh sách sản phẩm</span>
				</div>
				<div className={`${  ? 'show-list' : 'hire-list'}`}>
					<TempComponentProductsList
						propsearchValue={searchValue}
						propIsSearching={isSearching}
						propOnPagination={handlePagination}
					/>
				</div>
			</div> */}

			<TempComponentHeader
				darkMode={darkMode}
				toggleDarkMode={() => setDarkMode(!darkMode)}
				propsearchValue={searchValue}
				propOnInputSearch={handleSearch}
				propOnPagination={handlePagination}

			/>
				<div className="wrap-frame container p-4 h-100">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={
							<ShopPage

								propsearchValue={searchValue}
								propIsSearching={isSearching}
								propOnPagination={handlePagination}
							/>}
						/>
						{/* <Route path="/products/laptop" element={<LaptopPage />} />
						<Route path="/products/desktop" element={<DesktopPage />} /> */}
						<Route path="/products/:id" element={<ProductDetailPage />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="/contact" element={<ContactPage />} />

						{/* <Route path="/admin" element={<DashBoardPage />} /> */}
						{/* <Route path="/admin/products" element={<ProductsList />} /> */}

						<Route path="/admin" element={<DashBoardPage />}>
							<Route path="/admin/products" element={<ProductsList />} />
							<Route path="/admin/products/add" element={<AddProducts />} />
							<Route path="/admin/products/detail" element={<ProductsDetail />} />
						</Route>

						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</div>
			<TempComponentFooter />
		</>
	);
}

export default App;
