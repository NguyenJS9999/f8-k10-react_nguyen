import "./ProductTable.scss"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, removeProduct } from "../../../features/products/productActions";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import Loadding from "../../../components/loadding/Loadding";

const ProductTable = () => {

	const { products, loading, error } = useSelector((state) => state.products);

	const dispatch = useDispatch();
	const nav = useNavigate();
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const handleRequestDeletePro = (id) => {
		const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa mục này không?");
		if (id && isConfirmed) {
			handleDelete(id)
		}
	}
	const handleDelete = (id) => {
		console.log('handleDelete', id);
		dispatch(removeProduct(id))
		toast.success(`Delete product id ${id} success`);
	};
	const handleEditPro = (id) => {
		nav(`/admin/products/update/${id}`);
	}
	// if (loading) return <p>Loading...</p>;
	if (error) {
		toast.success(`${error}`)
	};


	return (
		<div className="product-Page">
			<div className="product-Page-action w-100">
				<Link to={`/admin/products/add`} className="btn btn-primary">
					Add Product
				</Link>
			</div>

			<table className="table table-striped table-bordered my-3">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">title</th>
						<th scope="col">decription</th>
						<th scope="col">price</th>
						<th scope="col">action</th>
					</tr>
				</thead>

				<div>{ loading && <Loadding /> }</div>

				<tbody>
					{
						loading ? <Loadding />
						:
						products &&
							products.map((item, index) => (
								<tr key={item?.id ?? index}>
									<th scope="row">{item?.id}</th>
									<td>{item?.title}</td>
									<td>
										{item?.description !== ''
											? item?.description
											: '--'}
									</td>
									<td>{item?.price}</td>
									<td>
										<div className="flex-1 h-100 d-flex justify-content-center  gap-2">
											<button className="btn btn-success mx-2" onClick={() => handleEditPro(item?.id)}>
												Edit
											</button>
											<button className="btn btn-danger" onClick={() => handleRequestDeletePro(item?.id)}>
												Del
											</button>
										</div>
									</td>
								</tr>
							))

					}

				</tbody>
			</table>
			{/* Modal */}
			<div class="modal fade show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Bạn có thực sự muốn xóa</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					{/* <div class="modal-body">
						...
					</div> */}
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary">Ok</button>
					</div>
					</div>
				</div>
			</div>


			{/*  */}
			<ToastContainer />
		</div>
	);
};

export default ProductTable;