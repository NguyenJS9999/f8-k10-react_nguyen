import { Link, Outlet } from 'react-router-dom';
import './Dashboard.scss';
import React from 'react';

function Dashboard() {
	return (
		<>
			<li className="item-category">

			</li>
			{/* active */}
			<ul class="nav">
				<li class="nav-item">
					<Link to="/admin/products"class="btn btn-primaRY nav-link" >Product table</Link>
				</li>
			</ul>
			<br />
			<Outlet />
		</>
	);
}

export default Dashboard;
