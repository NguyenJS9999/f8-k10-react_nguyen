import './tempComponentHeader.scss';
import { useCallback, useState } from 'react';
import _ from "lodash";
import { Link, NavLink } from 'react-router-dom';

function TempComponentHeader({ darkMode, toggleDarkMode, propOnInputSearch, propsearchValue }) {

	const listCategory = [
		{ id: 1, title: 'Admin', link: '/admin' },
		{ id: 2, title: 'shop', link: '/shop'			 },
		{ id: 3, title: 'services', link: '/services' },
		{ id: 4, title: 'Contact', link: '/contact' }
	];
	// const [searchValue, setValueSearch] = useState("");

	function handleCleanInputSearch() {
		// console.log("handleCleanInputSearch");
	}
	function handleInputSearch(event) {
		// setValueSearch(event.target.value) // Tại component
		debouncedSearch(event.target.value);
	}

	const debouncedSearch = useCallback(
		_.debounce((searchTerm) => {
			propOnInputSearch(searchTerm) // Truyền value search ra ngoài
		}, 1000), // 500ms delay
		[]
	);

	function handleGetPage(link) {
		if (link) {
			// console.log('link: ', link);
		}
	}

	function propOnPagination () {

	}


	// const checkbox = document.getElementById('btn-dark-mode');
	// console.log('light dark', checkbox);

	// checkbox.addEventListener('change', () => {
	// 	document.body.classList.toggle('dark');
	// });

	return (
		<header>
			<div className="header-top">
				<div className="header-top-inner"></div>
			</div>
			<div className="header-main">
				<div className="container">
					<div className="header-main-inner">
						<div className="header-logo">
							<Link to="/">React</Link>
						</div>

						<div className="header-search-desktop">
							<div className="form-search-control">

								<div className="form-search">
									<span className="header-search-back d-lg-none d-xl-none"
										onClick={handleCleanInputSearch}
									>
										<i className="fa-solid fa-xmark"></i>
									</span>
									{/* <span className="header-search-icon"></span> */}
									<input
										id="search-all"
										autoComplete="off"
										type="text"
										name="search-all"
										className="form-control"
										placeholder="Nhập từ khoá tìm kiếm"
										// value={propsearchValue}
										onChange={handleInputSearch}
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
						</div>

						<div id="btn-dark-mode" onClick={toggleDarkMode} className={`${darkMode&&'dark-mode'} btn-dark-mode` }>
							<span>{darkMode ? 'Light' : 'Dark'}</span>
						</div>

					</div>
				</div>
			</div>

			<div className="header-bottom">
				<div className="container">
					<div className="header-nav">
						<ul className="megamenu">
							{/* megamenu-active */}
							{listCategory &&
								listCategory.map(item => {
									return (
										<li
											key={item?.id}
											className="item-category"
											// onClick={() =>
											// 	handleGetPage(item?.link)
											// }
										>
											<NavLink to={item?.link} >{item?.title}</NavLink>
										</li>
									);
								})}

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
		</header>
	);
}

export default TempComponentHeader;
