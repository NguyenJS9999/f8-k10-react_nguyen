import './OrganismHeader.scss';
import React, { useEffect, useState } from 'react';
import { Link, data, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { removeFromLocalStorage } from '../../../util/localStorage';

const OrganismHeader = () => {
	const nav = useNavigate();

	const [userInforState, setUserInforState] = useState(null);

	const accessTokenLocal = localStorage.getItem(`accessToken`);
	const dataUserLocal = JSON.parse(localStorage.getItem('user'));
	const roleLocal = localStorage.getItem('role');
	console.log('OrganismHeader', dataUserLocal, typeof dataUserLocal);

	useEffect(() => {
		checkLogin();
	}, []);

	useEffect(() => {
		console.log("userInforState: ", userInforState, typeof userInforState);
	}, [userInforState]);


	function handleLogin() {
		console.log('handleLogin');
		nav('/login');
	}

	function checkLogin() {
		console.log('checkLogin')
		if ( !accessTokenLocal && !dataUserLocal ) {
			console.log('!accessTokenLocal && !dataUserLocal !dataUser: ', dataUserLocal);
			setUserInforState(null	);
			nav("/login");
		} else  {
			// Hiện thông tin ở head
			if ( accessTokenLocal && dataUserLocal ) {
				console.log("accessTokenLocal && dataUserLocal: ");
				setUserInforState(dataUserLocal);
			} else {
				setUserInforState(null);
			}
			// Dựa vào Role để điều hướng
			if ( roleLocal === "admin") {nav("/admin");}
			if ( roleLocal === "superAdmin") {nav("/super-admin");}
			if ( !roleLocal ) {nav("/");}
		}
	}

	function handleLogout() {
		removeFromLocalStorage("accessToken");
		removeFromLocalStorage("user");
		checkLogin();
	}

	return (
		<>
			<div className="header-top">
				<div className="header-top-inner"></div>
			</div>
			<div className="header-main">
				<div className="container">
					<div className="header-main-inner">
						<div className="header-logo">
							<Link to="/">Todo</Link>
						</div>
						<div className="header-search-desktop">
							<div className="form-search-control">
								<div className="form-search">
									<span className="header-search-back d-lg-none d-xl-none">
										<i className="fa-light fa-xmark" />
									</span>
									{/* <span class="header-search-icon"></span> */}
									<input
										autoComplete="off"
										type="text"
										name="search-all"
										className="form-control"
										placeholder="Nhập từ khoá tìm kiếm"
										id="search-all"
									/>
									<button
										id="search-btn"
										className="search-btn"
										type="button"
									>
										<i className="fa-solid fa-magnifying-glass" />
									</button>
								</div>
							</div>
						</div>
						{/* https://toshiko.vn/gio-hang */}
						<div className="header-right-item" id="cart-item">
							<a href="./src/pages/cart/cart.html">
								<span className="hri-icon">
									<i className="fa-solid fa-cart-arrow-down" />
									<span className="cart-qty">1</span>
								</span>
								<div className="hri-content">
									{/* <span class="label"><span class="cart-qty">1</span> sản phẩm</span> */}
								</div>
							</a>
						</div>

						{ userInforState ?
							<div className="">
								<div className=" " id="auth-infor">
									{ userInforState?.name ?? 'Name'}
								</div>
								<button className='btn btn-secondary' onClick={handleLogout}>
									Logout
								</button>
							</div>
						:
						<div
							className="header-right-item"
							id="auth-item"
							onClick={handleLogin}
						>
							<a>
								<div className="hri-content">
									<i className="fa-regular fa-user" />
								</div>
							</a>
						</div>
						}



					</div>
				</div>
			</div>
			<div className="header-bottom">
				<div className="container">
					<div className="header-nav">
						<ul className="megamenu">
							<li className="item-category">
								<NavLink to="/">Home</NavLink>
							</li>
							<li className="item-category">
								<NavLink to="/categories">Category</NavLink>
							</li>
							<li className="item-category">
								<NavLink to="/services">Services</NavLink>
							</li>
							<li className="item-category">
								<NavLink to="/admin/users">Users</NavLink>
							</li>
							<li className="item-category">
								<NavLink to="/admin/todos">Todos</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default OrganismHeader;
