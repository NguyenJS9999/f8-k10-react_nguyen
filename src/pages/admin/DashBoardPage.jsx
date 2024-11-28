import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashBoardPage.scss';


const DashBoardPage = () => {

	const listNavAdmin = [
		{ id: 1, title: 'Dash Board', link: '/admin' },
		{ id: 2, title: 'Product list', link: '/admin/products' },
		{ id: 3, title: 'Add Product', link: '/admin/products/add' },
		{ id: 4, title: 'Product detail ', link: '/admin/products/detail' }
	];

	return (
		<div>

			<h1>DashBoard page</h1>

			<div className="admin-header-nav">
				<ul className="admin-megamenu">
					{/* admin-megamenu-active */}
					{listNavAdmin &&
						listNavAdmin.map(item => {
							return (
								<li
									key={item?.id}
									className="item-category"

								>
									<NavLink to={item?.link}>
										{item?.title}
									</NavLink>
								</li>
							);
						})}
				</ul>
			</div>

			<Outlet />
		</div>
	);
};

export default DashBoardPage;
