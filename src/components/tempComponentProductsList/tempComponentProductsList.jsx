import './tempComponentProductsList.scss';
import { useEffect, useState } from 'react';
import { datas } from '../../datas/data';
import MoleculeProductItem from '@components/molecules/componentProductItem/MoleculeProductItem';


function TempComponentProductsList({ propsearchValue, propIsSearching, propOnPagination }) {

	const [ products, setProducts ] = useState([]);
	const [ totalProducts, setTotalProductss ] = useState(null);
	const [ productsListLimit, setProductsListLimit ] = useState(10);
	const [ productsListSkip, setProductsListSkip ] = useState(0);
	const [ productsListPage, setProductsListPage  ] = useState(1); // current page
	// const [visibleProduct, setVisibleProduct] = useState(10);
	// useEffect(()=> {
	// 	console.log("ProductsList propsearchValue: ", propsearchValue);
	// 	console.log("ProductsList propIsSearching: ", propIsSearching);
	// }, [propsearchValue, propIsSearching ])
	useEffect(() => {
		fetch(
			propIsSearching ?
			`https://dummyjson.com/products/search?q=${propsearchValue}` :
			`https://dummyjson.com/products?
				limit=${productsListLimit}&
				skip=${productsListSkip}
			`
		).then( res => res.json()).then( (data) => {
			setProducts(data?.products);
			setTotalProductss(data?.total)
		})
	}, [ productsListLimit, productsListPage, propsearchValue])

	// const handleSeeMore = () => {
	// 	setVisibleProduct(visibleProduct + 10);
	// };

	// Tính số phần tử nút phân trang, tạo mảng số => map
	function getNumberPagination () {
		if ( productsListLimit && totalProducts ) {
			// console.log('productsListLimit, typeof productsListLimit: ', productsListLimit, typeof productsListLimit);
			let numberPagination;
			if  ( productsListLimit > 1) {
				// console.log('handChangeLimit productsListLimit > 1');
				numberPagination = totalProducts / Number(productsListLimit);

			}
			if  ( productsListLimit == 1) {
				// console.log('handChangeLimit productsListLimit == 1');
				numberPagination = 1;
				setProductsListLimit(0); // Theo DOC
				setProductsListSkip(0);
			}

			if (productsListLimit <= 0) {
				numberPagination = 1
			}

			const arrNumber = Array.from({ length: parseInt(Math.ceil(numberPagination)) }, (_, index) => index + 1);
			return (arrNumber);
		}
	}
	// thay đổi số bản ghi 1 trang
	function handChangeLimit(event) {
		const selectedLimit = Number(event.target.value);
		// console.log('handChangeLimit selectedLimit, ', selectedLimit, typeof selectedLimit);
		setProductsListLimit(selectedLimit);
		getNumberPagination();
		setProductsListPage(1) // Thay đổi limit bắt đầu ở trang 1
		// onLimitChange(selectedLimit); // Callback Cha
	}
	function calculatorSkip() {
		const skip = productsListLimit * productsListPage
		setProductsListSkip(skip);
	}
	async function handleChangePagination(page) {
		// console.log('handleChangePagination page', page);
		setProductsListPage(page);
		calculatorSkip();
		propOnPagination();
	}
	function handlePrevPage() {
		// console.log('handlePrevPage');
		if ( parseInt(productsListPage) > 1 ) {
			setProductsListPage(productsListPage - 1)
			calculatorSkip();
			propOnPagination();
		}
		// console.log('handlePrevPage productsListPage: ', productsListPage);
	}
	function handleNextPage() {
		if ( parseInt(productsListPage) < parseInt(totalProducts / productsListLimit) ) {
			setProductsListPage(productsListPage + 1)
			calculatorSkip();
			propOnPagination();
		}
		// console.log('handleNextPage productsListPage: ', productsListPage);
	}

	return (
		<div>
			<div className="product-page">
				<div className="product-page-title">Product list</div>
				<div className="product-wraper">

					<div id='filter' className="product-action">
						<span className='filter-title'>Sắp xếp theo</span>

						<div className="filter-sort">
							<button className="filter-btn btn-sort " data-value={1}>
								<i className="fa-solid fa-arrow-down-wide-short" />
								<span>Giá Cao - Thấp</span>
							</button>
							<button className="filter-btn btn-sort " data-value={0} >
								<i className="fa-solid fa-arrow-up-wide-short" />
								<span>Giá Thấp - Cao</span>
							</button>
							<button className="filter-btn btn-sort " data-value={2}>
								<i className="fa-solid fa-percent" />
								<span>Khuyến mãi Hot</span>
							</button>
							<button className="filter-btn btn-sort " data-value={3}>
								<i className="fa-solid fa-eye" />
								<span>Xem nhiều</span>
							</button>
							</div>

					</div>

					<div className="product-list">
						{products &&
							products
								// .slice(0, 4)
								.map((item, index) => {
									return (
										<MoleculeProductItem
											key={item.id ?? index}
											item={item}
										/>
									);
								})}
					</div>

					{/* <div className='d-flex justify-content-center'>
						{visibleProduct < datas.length && (
							<div
								onClick={handleSeeMore}
								id="btn-see-more"
								className="btn btn-secondary mt-4"
							>
								See more
							</div>
						)}
					</div> */}

					<nav
						aria-label="pagination-products"
						className="d-flex justify-content-center pt-4"
					>
						<select
							className="per-page-change mr-4"
							id="per-page-change"
							defaultValue={productsListLimit}
							onChange={handChangeLimit}
						>
							<option defaultValue={1}  value={1} >Tất cả</option>
							<option defaultValue={5}  value={5} >{5}</option>
							<option defaultValue={10} value={10}>{10}</option>
							<option defaultValue={20} value={20}>{20}</option>
							<option defaultValue={30} value={30}>{30}</option>
						</select>

						<ul className="pagination d-flex gap-2">
							<li className="page-item" onClick={handlePrevPage}>
								<a className="page-link" href="#">
									<i className="fa-solid fa-chevron-left"></i>
								</a>
							</li>
							{getNumberPagination() && getNumberPagination()
								.map((item, index) => {
									return (
										<li
											className={`${productsListPage === Number(item) &&'page-item--active'} page-item`}
											key={item.id ?? index}
											onClick={() => handleChangePagination(item)}
										>
											<a className="page-link" href="#">{item}</a>
										</li>
									);
								})
							}
							<li className="page-item" onClick={handleNextPage} >
								<a className="page-link" href="#">
									<i className="fa-solid fa-chevron-right"></i>
								</a>
							</li>
						</ul>

					</nav>

				</div>
			</div>
		</div>
	);
}

export default TempComponentProductsList;

// import React from "react";
// import { datas } from "../../datas/data";
//
// const ProductList = () => {
// 	console.log(datas);
// 	return (
// 		<div>
// 			<h2>Danh sach san pham:</h2>
// 			{datas.map((item, index) => (
// 				<div key={index}>
// 					<h2>{item.name}</h2>
// 				</div>
// 			))}
// 		</div>
// 	);
// };
//
// export default ProductList;
