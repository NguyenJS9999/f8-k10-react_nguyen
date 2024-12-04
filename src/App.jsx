import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import ProductTable from "./pages/admin/ProductTable";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetail from "./pages/ProductDetail";
import RegisterPage from "./pages/RegisterPage";
import ServicesPage from "./pages/ServicesPage";
import { getAll, removeById } from "./services/crudServices";
import LayoutAdmin from "./layout/LayoutAdmin";
import ProtectedRoute from "./layout/ProtectedRoute";
import SuperAdmin from "./pages/admin/SuperAdmin";

const App = () => {
	const [products, setProducts] = useState([]);

	const location = useLocation();
	// console.log("location: ", location);
	useEffect(() => {
		(async () => {
			const data = await getAll("/products");
			setProducts(data);
		})();
	}, []);

	const handleRemoveProduct = async (id) => {
		if (confirm("Are you sure?")) {
			const res = await removeById("/products", id);
			if (res.status === 200) {
				const newProducts = products.filter((item) => item.id !== id);
				setProducts(newProducts);
			} else {
				console.log("Error!");
			}
		}
	};
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage products={products} />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/categories" element={<CategoryPage />} />
				<Route path="/products/:id" element={<ProductDetail />} />

				<Route path="/admin" element={<LayoutAdmin />}>
					<Route index element={<Dashboard />} />
					<Route path="products" element={<ProductTable products={products} onRemove={handleRemoveProduct} />} />
					<Route path="products/add" element={<ProductForm />} />
					<Route path="products/update/:id" element={<ProductForm />} />
				</Route>

				{/* superAdmin */}
				{/* <Route path="/super-admin" element={<ProtectedRoute />}>
					<Route index element={<SuperAdmin />} />
				</Route> */}

				<Route
					path="/super-admin"
					element={
						<ProtectedRoute role="superAdmin">
							<SuperAdmin />
						</ProtectedRoute>
					}
				/>

				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
