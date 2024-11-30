// import { getAllProduct } from '@api/products';
import React, { useEffect, useState } from 'react';
import './ProductsList.scss';
import { Link } from 'react-router-dom';


const baseUrl = 'https://json-server-be-nguyen-k10.onrender.com';
const path = `products`;

const ProductsList = () => {
	const [ productList, setProductList ] = useState([]);
	const [ productListToView, setProductListToView ] = useState([]);
	const [ currentPageProduct, setCurrentPageProduct ] = useState(1);
	const [ productLimit, setProductLimit ] = useState(10);
	const [ cellPagination, setCellPagination ] = useState(['1']);
	const [ modalConfirm, setModalConfirm ] = useState(false);
	const [ productBeSelected, setProductBeSelected ] = useState({});
	const headerProductTable = [
		{ id: 1, title: 'ID' },
		{ id: 2, title: 'Title' },
		{ id: 3, title: 'Price' },
		{ id: 4, title: 'Action' }
	];

	useEffect(() => {
		initProductList();
	}, [currentPageProduct, productLimit]);

	async function initProductList() {
		// GET /posts?_page=1&_per_page=25
		try {
			// const endUrl = new URL(`${baseUrl}/${path}?_page=${currentPageProduct}&_limit=${productLimit}`);
			const endUrlFull = new URL(`${baseUrl}/${path}`);

			// console.log("endUrlFull: ", endUrlFull);
			const res = await fetch(endUrlFull.toString());
			// console.log('initProductList res: ', res);
			if (res.status === 200) {
				const data = await res.json();
				// console.log('initProductList data: ', data);
				// console.log('initProductList data.length: ', data.length);
				const startIndex = (currentPageProduct - 1) * productLimit;
				const dataPagination = [...data].slice(startIndex, startIndex + productLimit);

				setProductList(data);
				setProductListToView(dataPagination);
				// setTimeout(() => {
				// 	renderPagination();
				// }, 1000);
				const result = [];

				if ( data.length / productLimit > 1) {
					for (let i = 1; i <= (data.length / productLimit); i++) {
						result.push(i);
					}
				}
				if ( data.length / productLimit <= 1) {
					result.push(1);
				}
				setCellPagination(result)

			} else {
				console.log('Error Message: ', res?.statusText);
				return res?.statusText;
			}

		} catch (error) {
			console.log(error);
			return error;
		}
	}


	function handleChangePagination(number) {
		if ( number ) {
			setCurrentPageProduct(number);
		}
	}

	function handChangeLimit(event) {
		if ( event ) {
			setProductLimit(parseInt(Number(event.target.value)));
		}
	}

	function handlePrevPage() {
		// console.log('handlePrevPage');
		if ( currentPageProduct > 1 ) {
			setCurrentPageProduct((currentPageProduct => currentPageProduct - 1))
		}
	}
	function handleNextPage() {
		// if ( parseInt(currentPageProduct) < productList.length / productLimit ) {
		// 	setCurrentPageProduct(currentPageProduct)
		// }

		if ( currentPageProduct < (productList.length / productLimit) ) {
			setCurrentPageProduct((currentPageProduct => currentPageProduct + 1)) ;
		}
	}



	async function deleteProduct() {
		const res = await fetch(`${baseUrl}/${path}/${productBeSelected.id}`, {
			method: "DELETE",
		});
		if (!res.ok) throw new Error("Failed to delete product");
		}

	const handleOpenModalConfirm = (item) => {
		console.log('handleOpenModalConfirm: ', item);
		setProductBeSelected({});
		if (item) {
			setModalConfirm(true);
			setProductBeSelected(item)
		}
	};
	const handleCloseModalConfirm = () => {
		setModalConfirm(false);
		// logic xoa
	};

	const handDeleteProduct = async() => {
		await deleteProduct()
		setModalConfirm(false);
		const filterData =  productList.filter(product => product.id !== productBeSelected.id);
		setProductList(filterData);
		setProductBeSelected({});
		// await initProductList(); // Web cá nhân nên không gọi lại
	};

	function goToEditProduct () {
		console.log('goToEditProduct: ');
	};

	function renderMoney(number) {
		if (number && typeof parseInt(number) === 'number') {
			return number.toLocaleString("en-US", {style:"currency", currency:"USD"});
			// return Number(number).toLocaleString('en', {
			// 	style: 'currency',
			// 	currency: 'VND'
			// });
		} else {
			return number;
		}
	}




	return (
		<div>
			<h1>Danh sách sản phẩm</h1>

			<div className="product-actions w-100 d-flex">
				<Link to={`/admin/products/add`} >
					<button
						type="button" className="btn btn-success px-3 py-1"
					>
						Add product
					</button>
				</Link>
			</div>

			<table className="admin-product-list table table-bordered">
				<thead>
					<tr>
						{headerProductTable &&
							headerProductTable.map(item => {
								return (
									<th key={item?.id} className="" scope="col">
										{item?.title}
									</th>
								);
							})}
					</tr>
				</thead>

				<tbody>
				{productListToView &&
				productListToView.map((item, index) => {
					return (
					<tr  key={item?.id ?? index}  className="" scope="col" >
						<th scope="row">{item?.id}</th>
						<td>{item?.title}</td>
						<td>{ item?.price && renderMoney(item?.price) }</td>

						<td  className="col-2" colSpan="1" >
							<div className='w-100 d-flex gap-2'>
								<button
									type="button" className="btn btn-secondary"
									onClick={() => goToEditProduct(item?.id)}
								>
									Edit
								</button>
								<button
									type="button" className="btn btn-danger"
									onClick={() => handleOpenModalConfirm(item)}
								>
									Delele
								</button>
							</div>
						</td>
					</tr>
					);
				})}

				</tbody>

			</table>

			<nav
					aria-label="pagination-products"
					className="d-flex justify-content-center pt-4"
				>
					<select
						className="per-page-change mr-4"
						id="per-page-change"
						defaultValue={productLimit}
						onChange={handChangeLimit}
					>
						<option defaultValue={1}  value={1} >Tất cả</option>
						<option defaultValue={2}  value={2}>{2}</option>
						<option defaultValue={10} value={10}>{10}</option>
						<option defaultValue={20} value={20}>{20}</option>
						<option defaultValue={30} value={30}>{30}</option>
						<option defaultValue={50} value={50}>{50}</option>
					</select>

					<ul className="pagination d-flex gap-2">
						<li className="page-item" onClick={handlePrevPage}>
							<a className="page-link" href="#">
								<i className="fa-solid fa-chevron-left"></i>
							</a>
						</li>
						{cellPagination && cellPagination
							.map((item, index) => {
								return (
									<li
										className={`${currentPageProduct === Number(item) &&'page-item--active'} page-item`}
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
			{/*  */}
			{/* <div className={`${ modalConfirm ? "fade modal-confirm" : "modal"}`}  tabIndex="-1"> */}
			{ modalConfirm &&
				<div className={`${modalConfirm && "modal-confirm  " } modal fade`}
				onClick={handleCloseModalConfirm}
				tabIndex="-1"
			>
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Bạn có chắc chắn muốn xóa sản phẩm {productBeSelected?.title}</h5>
						<button type="button"
							className="btn-close" data-bs-dismiss="modal" aria-label="Close"
							onClick={handleCloseModalConfirm}
						>
						</button>
					</div>
					{/* <div className="modal-body">
						<p>Modal body text goes here.</p>
					</div> */}
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
							onClick={handleCloseModalConfirm}
						>Close</button>
						<button type="button" className="btn btn-primary" onClick={handDeleteProduct}>Ok</button>
					</div>
					</div>
				</div>
			</div>}
			{/*  */}
		</div>
	);
};

export default ProductsList;
