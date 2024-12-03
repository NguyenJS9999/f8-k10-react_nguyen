import './AddProducts.scss';
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { create } from "../../axios";
import { updateById } from "../../axios/index";

const AddProducts = () => {
	const { id } = useParams();
	console.log("id: ", id);
	const nav = useNavigate();
	const initValue = {
		title: "",
		price: 0,
		description: "",
		category: "",
	};


	const [product, setProduct] = useState(initValue);

	useEffect(() => {
		(async () => {
		const data = await updateById("/products", id, product);

		})
	}, []);


	// Cập nhật state
	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prev) => ({ ...prev, [name]: value }));
	};

	// Gửi dữ liệu đi
	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			if (id) {
				// logic update
				const data = await updateById("/products", id, product);

			} else {
				// logic add
				const data = await create("/products", product);
			}

			// logic chung
		})();
	};
	return (
		<div>
			<h1>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>

      <div className="product-actions w-100 d-flex">
				<Link to={`/admin/products`} >
					<button type="button" className="btn btn-success px-3 py-1" >
						Product list
					</button>
				</Link>
			</div>

			<form action="">
				<div className="form-group">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						className="form-control"
						type="text"
						name="title"
						id="price"
						placeholder="Title"
						defaultValue={product.title}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input
						className="form-control"
						type="number"
						name="price"
						id="price"
						placeholder="Price"
						defaultValue={product.price}
						onChange={handleChange}
					/>
				</div>

    		    <div className="form-group">
					<label htmlFor="price" className="form-label">
         			  Description
					</label>
					<input
						className="form-control"
						type="text"
						name="description"
						id="description"
						placeholder="description"
						defaultValue={product.description}
						onChange={handleChange}
					/>
				</div>

				<select
					className="per-page-change mr-4"
					name="category"
					id="category"
					defaultValue={product.category}
					onChange={handleChange}
				>
					<option defaultValue={1}  value={1} >Tất cả</option>
					<option defaultValue={2}  value={2}>{2}</option>
					<option defaultValue={10} value={10}>{10}</option>
					<option defaultValue={20} value={20}>{20}</option>
					<option defaultValue={30} value={30}>{30}</option>
					<option defaultValue={50} value={50}>{50}</option>
				</select>

				<div className="form-group mt-2">
					<button className="btn btn btn-primary w-100" onClick={handleSubmit}>
						{id ? "Cập nhật" : "Thêm mới"}
					</button>
				</div>

			</form>
		</div>
	);
};

export default AddProducts;
