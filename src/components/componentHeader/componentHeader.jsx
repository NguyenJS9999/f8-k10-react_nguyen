import './ComponentHeader.scss';

function ComponentHeader() {
	const listCategory = [
		{ id: 1, title: 'home', link: '/' },
		{ id: 2, title: 'shop', link: '/shop' },
		{ id: 3, title: 'services', link: '/services' },
		{ id: 4, title: 'contact', link: '/contact' }
	];

	function handleGetPage(link) {
		if (link) {
			console.log('link: ', link);
		}
	}

	return (
		<header>
				<div className="header-top">
					<div className="header-top-inner"></div>
				</div>
				<div className="header-main">
					<div className="container">
						<div className="header-main-inner">
							<div className="header-logo">
								<a href="./index.html">React</a>
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
									listCategory.map(( item ) => {
										return (
											<li
												key={item?.id}
												className="item-category"
												onClick={ () => handleGetPage(item?.link)}
											>
												{item?.title}
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

export default ComponentHeader;
