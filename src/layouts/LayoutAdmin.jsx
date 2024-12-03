import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';

const LayoutAdmin = () => {
	return (
		<div>
			<HeaderAdmin />
			<Outlet />
			<FooterAdmin />
		</div>
	);
};

export default LayoutAdmin;
