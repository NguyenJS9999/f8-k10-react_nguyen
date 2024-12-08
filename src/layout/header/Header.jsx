// import from 'react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getLocalStorage } from '../../util/localStorage';



const Header = () => {
	console.log("Coponent Header");

	const [ userInforState, setUserInforState ] = useState();

	useEffect( () =>  {
		const data = getLocalStorage("user")
		console.log("Header data local: ", data);
		// setUserInforState();
	}, []);

	return (
		<>
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
									<span className="header-search-back d-lg-none d-xl-none">
										<i className="fa-light fa-xmark" />
									</span>
									{/* <span className="header-search-icon"></span> */}
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
									{/* <span className="label"><span className="cart-qty">1</span> sản phẩm</span> */}
								</div>
							</a>
						</div>
						<div className="header-right-item" id="auth-item">
							<a>
								<div className="hri-content">
									<i className="fa-regular fa-user" />
									{/* <span className="label"><span className="cart-qty">1</span> sản phẩm</span> */}
								</div>
							</a>

							<span>{ userInforState?.name }</span>
						</div>
					</div>
				</div>
			</div>
			<div className="header-bottom">
				<div className="container">
					<div className="header-nav">
						<ul className="megamenu">
							{/* megamenu-active */}
							<li
								className="item-category"
								data-category="smartphones"
							>
								{/* <a href=" "><img src="" alt=""><span>Ghế massage</span></a> */}
								{/* <a href="./category.html?category=smartphones">Smart Phones</a> */}
								Smart Phones
							</li>
							<li
								className="item-category"
								data-category="laptops"
							>
								{/* <a href=" "><img src="" alt=""><span>Máy chạy bộ</span></a> */}
								{/* <a href="./category.html?category=laptops">Laptops</a> */}
								Laptops
							</li>
							<li
								className="item-category"
								data-category="furniture"
							>
								{/* <a href=" "><img src="" alt=""><span>Xe đạp tập</span></a> */}
								{/* <a href="./category.html?category=furniture">Furniture</a> */}
								Furniture
							</li>
							<li
								className="item-category"
								data-category="groceries"
							>
								{/* <a href=" "><img src="" alt=""><span>Thiết bị thể thao</span></a> */}
								{/* <a href="./category.html?category=groceries">Groceries</a> */}
								Groceries
							</li>
							{/* <li className="">
							<a href=" "><img src="" alt=""><span>Hệ thống Showroom</span></a>
						</li> */}
							{/* <li className="">
							<a href=" "><img src="" alt=""><span>Liên hệ</span></a>
						</li> */}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
