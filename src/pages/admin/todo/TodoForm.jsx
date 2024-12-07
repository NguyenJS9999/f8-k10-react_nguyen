import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNew, getById, updateById } from "../../../services/crudServices";
import { schemaTodo } from "../../../schemas/todoSchemas";


const TodoForm = () => {
	const { id } = useParams();
	const {
		register,
		watch,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		resolver: zodResolver(schemaTodo),
	});

	// useEffect(async () => {
	// 	console.log("hello");
	// }, []);

	// Không khai báo async function cho callback trong useEffect.

	useEffect(() => {
		id &&
			(async () => {
				const data = await getById("/todos", id);
				reset(data);
			})();
	}, [id]);

	const handleAddTodo = async (todo) => {
		console.log(todo);
		// request add todo
		if (id) {
			// logic edit
			const data = await updateById("/todos", id, todo);
			console.log(data);
		} else {
			// logic add
			const data = await createNew("/todos", product);
			console.log(data);
		}
		reset();
	};

	// console.log(watch(errors));

	return (
		<div>
			<h1>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>
			<form onSubmit={handleSubmit(handleAddTodo)}>
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

export default TodoForm;
