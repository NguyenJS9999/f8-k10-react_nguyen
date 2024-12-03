
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TempComponentFooter from './components/tempComponentFooter/tempComponentFooter';
import TempComponentHeader from './components/tempComponentHeader/tempComponentHeader';

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import DashBoardPage from "./pages/admin/DashBoardPage";
import ProductsList from "./pages/admin/ProductsList";
import OrganismFormLogin from '@components/organisms/organismFormLogin/OrganismFormLogin';
import LayoutAdmin from './layouts/LayoutAdmin';
import ProductForm from './pages/admin/ProductForm/ProductForm';
import UserDashBoard from './pages/user/UserDashBoard';
import RegisterForm from './pages/user/RegisterForm';
import LoginForm from './pages/user/LoginForm';

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

	return (
		<>
			<TempComponentHeader
				darkMode={darkMode}
				toggleDarkMode={() => setDarkMode(!darkMode)}
				propsearchValue={searchValue}
				propOnInputSearch={handleSearch}
				propOnPagination={handlePagination}

			/>
				<div className="wrap-frame container h-100">
					<Routes>
						{/* Client layout */}
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<OrganismFormLogin />} />

						<Route path="/shop" element={
							<ShopPage
								propsearchValue={searchValue}
								propIsSearching={isSearching}
								propOnPagination={handlePagination}
							/>}
						/>

						<Route path="/products/:id" element={<ProductDetailPage />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="/contact" element={<ContactPage />} />


						<Route path="/admin" element={<LayoutAdmin />}>
							<Route index element={<DashBoardPage />} />
							<Route path="/admin/products" element={<ProductsList />} />
							<Route path="/admin/products/add" element={<ProductForm />} />
							<Route path="/admin/products/update/:id" element={<ProductForm />} />
						</Route>

						<Route path="/user" element={<UserDashBoard />}>
							<Route path="register" element={<RegisterForm />} />
							<Route path="login" element={<LoginForm />} />
						</Route>

						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</div>
			<TempComponentFooter />
		</>
	);
}

export default App;
