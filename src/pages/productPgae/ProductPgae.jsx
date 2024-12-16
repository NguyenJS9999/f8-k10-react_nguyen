import "./ProductPage.scss"
import React, { useEffect } from 'react';
import { getAll } from '../../services/crudServices';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../actions/productActions';

function ProductPage() {
	const {products} = useSelector(state => state.products);

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const data = await getAll('/products');
			// console.log('ProductPage getAll', data);
			dispatch(setProducts(data));
		})();
	}, []);


	return (
		<div className="product-Page">

			<div className="product-Page-action w-100	">
				<button className="btn btn-primary">Add Product</button>
			</div>

			<table className="table table-striped table-bordered">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">title</th>
						<th scope="col">decription</th>
						<th scope="col">price</th>
						<th scope="col">action</th>
					</tr>
				</thead>
				<tbody>
					{products ? (
						products.map((item, index) => (
							<tr key={item?.id ?? index}>
								<th scope="row">{item?.id}</th>
								<td>{item?.title}</td>
								<td>{item?.description !== '' ? item?.description : '--'}</td>
								<td>{item?.price}</td>
								<td>
									<div>
										<button className="btn btn-success mx-2">
											Edit
										</button>
										<button className="btn btn-danger">
											Del
										</button>
									</div>
								</td>
							</tr>
						))
					) : (
						<div>Không có sản phẩm nào.</div>
					)}

				</tbody>
			</table>
		</div>
	);
}

export default ProductPage;
