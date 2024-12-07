import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import ProductForm from './pages/admin/ProductForm';
import ProductTable from './pages/admin/ProductTable';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetail from './pages/ProductDetail';
import RegisterPage from './pages/RegisterPage';
import ServicesPage from './pages/ServicesPage';
import LayoutAdmin from './layout/LayoutAdmin';
import ProtectedRoute from './layout/ProtectedRoute';
import SuperAdmin from './pages/admin/SuperAdmin';
import OrganismHeader from './components/organisms/organismHeader/OrganismHeader';
import { OrganismsFooter } from './components/organisms/organismsFooter/OrganismsFooter';
import UserTable from './pages/admin/user/UserTable';
import UserForm from './pages/admin/user/UserForm';
import TodoTable from './pages/admin/todo/TodoTable';
import TodoForm from './pages/admin/todo/TodoForm';

import ProductProvider from './context/ProductContext';
import UserProvider from './context/UserContext';
import TodoProvider from './context/TodoContext';


const App = () => {
	return (
		<>
		<div className='app-component'>
			<ProductProvider>
			<TodoProvider>
			<UserProvider>
				<OrganismHeader />
				<div className="container">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="/categories" element={<CategoryPage />} />
						<Route
							path="/products/:id"
							element={<ProductDetail />}
						/>

						<Route path="/admin" element={<LayoutAdmin />}>
							<Route index element={<Dashboard />} />
							<Route path="products" element={<ProductTable />} />
							<Route path="products/add" element={<ProductForm />} />
							<Route path="products/update/:id" element={<ProductForm />}/>

							<Route path="todos" element={<TodoTable />} />
							<Route path="todos/add" element={<TodoForm />} />
							<Route path="todos/update/:id" element={<TodoForm />} />

							<Route path="users" element={<UserTable />} />
							<Route path="users/add" element={<UserForm />} />
							<Route path="users/update/:id" element={<UserForm />} />
						</Route>

						{/* superAdmin */}
						{/* <Route path="/super-admin" element={<ProtectedRoute />}>
							<Route index element={<SuperAdmin />} />
						</Route> */}

						<Route	path="/super-admin" element={
								<ProtectedRoute role="superAdmin">
									<SuperAdmin />
								</ProtectedRoute>
							}
						/>

						<Route path="/register" element={<RegisterPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</div>

				<OrganismsFooter />
			</UserProvider>
			</TodoProvider>
			</ProductProvider>
			</div>
		</>
	);
};

export default App;
