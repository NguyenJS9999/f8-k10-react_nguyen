import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { createNew, getById, updateById } from '../../../services/crudServices';
import { schemaTodo } from '../../../schemas/todoSchemas';

const TodoForm = () => {
	const { id } = useParams();
	const {
		register,
		watch,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm({
		resolver: zodResolver(schemaTodo)
	});

	// useEffect(async () => {
	// 	console.log("hello");
	// }, []);

	// Không khai báo async function cho callback trong useEffect.

	useEffect(() => {
		id &&
			(async () => {
				const data = await getById('/todos', id);
				reset(data);
			})();
	}, [id]);

	const handleAddTodo = async todo => {
		todo.priority = 'low';
		todo.status = false;
		console.log(todo);
		// request add todo
		if (id) {
			// logic edit
			const data = await updateById('/todos', id, todo);
			console.log(data);
		} else {
			// logic add
			const data = await createNew('/todos', todo);
			console.log(data);
		}
		reset();
	};

	// console.log(watch(errors));

	return (
		<div>
			<h1>{id ? 'Update' : 'Add new'} sản todo</h1>
			<form onSubmit={handleSubmit(handleAddTodo)}>
				<div className="form-group">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						className="form-control"
						type="text"
						name="title"
						id="title"
						placeholder="Title"
						{...register('title', { required: true })}
					/>
					{errors.title && (
						<p className="text-danger">{errors.title?.message}</p>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input
						className="form-control"
						type="text"
						name="description"
						id="description"
						placeholder="Description"
						{...register('description', { required: true })}
					/>
					{errors.price && (
						<p className="text-danger">{errors.description}</p>
					)}
				</div>

				{/* <div className="form-group">
					<label htmlFor="priority" className="form-label">
						Priority
					</label>
					<textarea
						className="form-control"
						name="priority"
						id="priority"
						placeholder="Priority"
						{...register("Priority", { required: true })}
					/>
				</div> */}

				{/* <div className="form-group">
					<label htmlFor="priority" className="form-label mr-4">
						Priority
					</label>
					<select
						className="ml-4"
						{...register('priority', { required: true })}
					>
						<option value="" disabled>
							-- Chọn --
						</option>
						<option value="high">High</option>
						<option value="mid">Mid</option>
						<option value="low">Low</option>
					</select>
					{errors.priority && (
						<p className="text-danger">{errors.priority}</p>
					)}
				</div> */}

				<div className="form-group">
					<button
						className="btn btn-secondary"
						onClick={() => reset()}
					>
						Nhập lại
					</button>{' '}
					<button
						className="btn btn btn-primary"
						onClick={handleSubmit}
					>
						{id ? 'Cập nhật' : 'Thêm mới'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default TodoForm;
