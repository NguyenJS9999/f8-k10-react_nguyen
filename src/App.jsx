import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/homePage/HomePage';
import AdminDashboardPage from './pages/adminDashboardPage/AdminDashboardPage';
import ProductTable from './pages/productTable/ProductTable';
import ProductForm from './pages/productForm/ProductForm';

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

	return (
		<>
			<div className="app-component">
				
				<div className="container">
					<Routes>
						<Route path="/" element={<HomePage />} />

						<Route path="/admin" element={<AdminDashboardPage />} />
						<Route
							path="/admin/products"
							element={<ProductTable />}
						/>
						<Route
							path="/admin/products/add"
							element={<ProductForm />}
						/>
						<Route
							path="/admin/products/update/:id"
							element={<ProductForm />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
};

export default App;
