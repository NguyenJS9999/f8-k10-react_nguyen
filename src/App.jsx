import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import NotFoundPage from './pages/NotFoundPage';
import OrganismHeader from './components/organismHeader/OrganismHeader';
import OrganismsFooter from './components/organismsFooter/OrganismsFooter';

import Dashboard from './pages/admin/dashboard/Dashboard';
import ProductTable from './pages/admin/productTable/ProductTable';
import ProductForm from './pages/admin/productForm/ProductForm';

import HomePage from './pages/client/homePage/HomePage';
import ServicesPage from './pages/client/servicesPage/ServicesPage';
import CategoryPage from './pages/client/categoryPage/CategoryPage';

import { ToastContainer, toast } from 'react-toastify';
import { addToast } from './features/app/appSlice';
const App = () => {
	// 	const count = useSelector((state) => state.count);
	// 	const dispatch = useDispatch();
	// 	const handleIncrement = () => {
	// 		dispatch(increment());
	// 	};
	//
	// 	const handleDecrement = () => {
	// 		dispatch(decrement());
	// 	};

	const notify = () => toast("Wow so easy!");


	return (
		<>
			<div className="app-component">
				<OrganismHeader />
				<div className="pages-elements ">
					<div className="pages-elements-inner container">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/services" element={<ServicesPage />} />
							<Route path="/categories" element={<CategoryPage />} />
							{/* <Route path="/products/:id" element={<ProductDetail />} /> */}

							<Route path="/admin" element={<Dashboard />}>
								<Route path="products" element={<ProductTable />} />
								<Route path="products/add" element={<ProductForm />} />
								<Route path="products/update/:id" element={<ProductForm />} />
							</Route>
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</div>
				</div>
				<OrganismsFooter />
        		<ToastContainer />


			</div>
		</>
	);
};

export default App;
