import './OrganismHeader.scss';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { NavLink,  } from 'react-router-dom';

const OrganismHeader = () => {
	return (
		<div className="header-component w-100">
			<div className="header-top">
				<div className="header-top-inner"></div>
			</div>
			<div className="header-main">
				<div className="container">
					<div className="header-main-inner">
						<div className="header-logo">
							<a href="./index.html">Todo</a>
						</div>
						<div className="header-search-desktop">
							<div className="form-search-control">
								<div className="form-search">
									{/* <span className="header-search-back d-lg-none d-xl-none">
										<i className="fa-light fa-xmark" />
									</span> */}
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
							<Link to="./cart">
								<span className="hri-icon">
									<i className="fa-solid fa-cart-arrow-down" />
									<span className="cart-qty">1</span>
								</span>
								<div className="hri-content">
									{/* <span class="label"><span class="cart-qty">1</span> sản phẩm</span> */}
								</div>
							</Link>
						</div>
						<div className="header-right-item" id="auth-item">
							<Link to="./login">
								<div className="hri-content">
									<i className="fa-regular fa-user" />
									{/* <span class="label"><span class="cart-qty">1</span> sản phẩm</span> */}
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="header-bottom">
				<div className="container">
					<div className="header-nav">
						<ul className="megamenu">
							{/* megamenu-active */}
							<li className="item-category">
								<NavLink to="/">home</NavLink>
							</li>
							<li className="item-category">
								<NavLink to="/categories">categories</NavLink>
							</li>
							<li className="item-category">
								<NavLink to="/services">services</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrganismHeader;
