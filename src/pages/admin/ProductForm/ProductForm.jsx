import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { createNewItem, getOneById, updateById } from "../../../axios/crud.js";
import { schemaProduct } from "../../../schemas/produtc.js";

const ProductForm = () => {
	const { id } = useParams();
	console.log('ProductForm id: ', id);
	let navigate = useNavigate();
	const {
		register,
		watch,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		resolver: zodResolver(schemaProduct),
	});

	useEffect(() => {
		if (id) {
		  (async () => {
			const data = await getOneById("/products", id);
			reset(data);
		  })();
		}
	  }, [id, reset]);

	const handleAddProduct = async (product) => {
		console.log(product);
		// request add product
		if (id) {
			console.log('logic edit');
			const data = await updateById("/products", id, product);
			if (data) {
				console.log(data);
				navigate("/admin/products");
			}
		} else {
			console.log('logic add');
			const data = await createNewItem("/products", product);
			console.log(data);
		}
		// reset();
	};

	// console.log(watch(errors));

	return (
		<div className="mt-4">
			<h1>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>

			<form onSubmit={handleSubmit(handleAddProduct)}>
				<div className="form-group mt-2">
					<label htmlFor="title" className="form-label mt-2">
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
					{errors.title && <p className="text-danger mt-2">{errors.title?.message}</p>}
				</div>

				<div className="form-group">
					<label htmlFor="price" className="form-label mt-2">
						Price
					</label>
					<input
						className="form-control"
						type="number"
						name="price"
						id="price"
						placeholder="Price"
						{...register("price", { required: true, valueAsNumber: true })}
					/>
					{errors.price && <p className="text-danger mt-2">{errors.price?.message}</p>}
				</div>

				<div className="form-group">
					<label htmlFor="description" className="form-label mt-2">
						Description
					</label>
					<textarea
						className="form-control"
						name="description"
						id="description"
						placeholder="Description"
						{...register("description", { required: true })}
					/>
					{errors.description && <p className="text-danger mt-2">{errors.description?.message}</p>}

				</div>

				<div className="form-group mt-4">
					<button className="btn btn-secondary" onClick={() => reset()}>
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
