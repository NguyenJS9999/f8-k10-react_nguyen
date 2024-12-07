import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { getAll, removeById } from "../../services/crudServices";

const ProductTable = () => {

	const { appState, dispatch } = useContext(AppContext);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await getAll('/products');
			setProducts(data);
			dispatch({ type: "INIT_TODO", payload: data });
		})();

		console.log('ProductTable appState: ', appState);
	}, []);

	const handleRemoveProduct = async id => {
		if (confirm('Are you sure?')) {
			const res = await removeById('/products', id);
			if (res.status === 200) {
				const newProducts = products.filter(item => item.id !== id);
				setProducts(newProducts);
				dispatch({ type: "INIT_TODO", payload: newProducts });
			} else {
				console.log('Error!');
			}
		}
	};

	return (
		<div>
			<div>
				<h1>Quản lý sản phẩm</h1>
				<Link to={`/admin/products/add`} className="btn btn-primary">
					Add new product
				</Link>
				<table className="table table-bordered table-striped">
					<thead>
						<tr className="text-center">
							<th>ID</th>
							<th>Title</th>
							<th>Price</th>
							<th>Description</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{products && products.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>{item.price}</td>
								<td>{item.description}</td>
								<td>
									<button className="btn btn-danger" onClick={() => handleRemoveProduct(item.id)}>
										Remove
									</button>
									<Link to={`/admin/products/update/${item.id}`} className="btn btn-warning">
										Update
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductTable;
