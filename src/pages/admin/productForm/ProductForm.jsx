// import "./ProductForm.scss"
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaProduct } from "../../../schemas/productShemas.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { createProduct, editProduct, fetchProduct } from "../../../features/products/productActions.js";
import Loadding from "../../../components/loadding/Loadding.jsx";
// import { createNew, getById, updateById } from "../../services/crudServices";

const ProductForm = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const nav = useNavigate();

	const { productDetail, loading, error } = useSelector((state) => state.products)


	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		resolver: zodResolver(schemaProduct),
	});

	useEffect(() => {
		console.log('useEffect getById("/products", id);');
		if (id) {
			(async () => {
				dispatch(fetchProduct(id));
			})();
		}
	}, [id]);

	useEffect(() => {
		if (productDetail) {
			console.log('productDetail: ', productDetail, typeof productDetail);
			reset(productDetail);
		}
	}, [productDetail]);

	const handleAddProduct = async (product) => {
		console.log('handleAddProduct',product);
		// request add product
		if (id) {
			// logic edit
            // console.log(" logic edit");
			dispatch(editProduct({ id, product }))
			// nav(`/admin/products`);

		} else {
			// logic add
            // console.log(" logic add");
			dispatch(createProduct(product));
		}
		// reset();
	};

	function handleResetForm() {
		reset({
			title: "",
			price: null,
			description: "",
		});
	}

	// console.log(watch(errors));

	if (error) {
		toast.success(`${error}`)
	};

	return (
		<div>
			<h1>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>
			<Link to={`/admin/products`} className="btn btn-primary">
				Back
			</Link>
			<div>{ loading && <Loadding /> }</div>
			<form onSubmit={handleSubmit(handleAddProduct)}>
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
						{...register("title", { required: true })}
					/>
					{errors.title && <p className="text-danger">{errors.title?.message}</p>}
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
						step="any"  // Cho phép nhập số thập phân
						{...register("price", { required: true, valueAsNumber: true })}
					/>
					{errors.price && <p className="text-danger">{errors.price?.message}</p>}
				</div>

				<div className="form-group">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<textarea
						className="form-control"
						name="description"
						id="description"
						placeholder="Description"
						{...register("description", { required: true })}
					/>
				</div>

				<div className="form-group">
					<button className="btn btn-secondary" onClick={() => handleResetForm()}>
						Nhập lại
					</button>{" "}
					<button className="btn btn btn-primary" onClick={handleSubmit}>
						{id ? "Cập nhật" : "Thêm mới"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;