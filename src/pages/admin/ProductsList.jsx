// import { getAllProduct } from '@api/products';
import React, { useEffect, useState } from 'react';
import './ProductsList.scss';


const baseUrl = 'http://localhost:3000';
const path = `products`;

const ProductsList = () => {
	const [ productList, setProductList ] = useState([]);
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
	}, []);

	async function initProductList() {
		try {
			const endUrl = new URL(`${baseUrl}/${path}`);
			const res = await fetch(endUrl);
			// console.log('initProductList res: ', res);
			if (res.status === 200) {
				const data = await res.json();
				// console.log('initProductList data: ', data);
				setProductList(data);
				// return data;
				// console.log('Message: ', res?.statusText);

			} else {
				console.log('Error Message: ', res?.statusText);
				return res?.statusText;
			}

		} catch (error) {
			console.log(error);
			return error;
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
		// logic xoa
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
				{productList &&
				productList.map((item, index) => {
					return (
					<tr  key={item?.id ?? index}  className="" scope="col" >
						<th scope="row">{item?.id}</th>
						<td>{item?.id}</td>
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
