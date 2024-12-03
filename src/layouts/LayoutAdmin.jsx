import React from 'react';
import { Outlet } from 'react-router-dom';
// import HeaderAdmin from './HeaderAdmin';
// import FooterAdmin from './FooterAdmin';

const LayoutAdmin = () => {
	return (
		< >
			{/* <HeaderAdmin /> */}
			<Outlet />
			{/* <FooterAdmin /> */}
		</>
	);
};

export default LayoutAdmin;
