import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../../context/TodoContext";
import { getAll, removeById } from "../../../services/crudServices";

const TodoTable = () => {

	const { state, dispatch } = useContext(TodoContext);
	const [ todos, setTodos] = useState([]);

	const userIdLogin = 3;

	useEffect(() => {
		(async () => {
			const data = await getAll('/todos');
			// Có id user thì mới lọc ra show tạm...
			if (userIdLogin) {
				const dataWithUser = data.filter( item => item.userId == userIdLogin )
				console.log('dataWithUser', dataWithUser);
				setTodos(dataWithUser);
				dispatch({ type: "INIT_TODO", payload: dataWithUser });
			} else {
				setTodos(data);
				dispatch({ type: "INIT_TODO", payload: data });
			}

		})();

		console.log('TodoTable state: ', state);
	}, []);


	useEffect(() => {
		(async () => {
			const data = await getAll(`/todos?userId=${userIdLogin}`);
			console.log('data ?userId: ', data);
		})();
	}, []);


	const handleRemoveProduct = async id => {
		if (confirm('Are you sure?')) {
			const res = await removeById('/data2', id);
			if (res.status === 200) {
				const newToDos = todos.filter(item => item.id !== id);
				setTodos(newToDos);
				dispatch({ type: "INIT_TODO", payload: newToDos });
			} else {
				console.log('Error!');
			}
		}
	};

	return (
		<div>
			<div>
				<h1>Quản lý công việc</h1>
				<div className="w-100 d-flex">
					<Link to={`/admin/todos/add`} className="btn btn-primary mt-2">
						Add todo
					</Link>
				</div>
				<table className="table table-bordered table-striped mt-2">
					<thead>
						<tr className="text-center">
							<th>ID</th>
							<th>Title</th>
							<th>Description</th>
							<th>Status</th>
							<th>Priority</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{todos && todos.map((item, index) => (
							<tr key={item.id ?? index}>
								<td>{item.id}</td>
								<td>{item.title}-userId: {item.userId}</td>
								<td>{item.description}</td>
								<td>{item.status ? 'Done' : 'Doing'}</td>
								<td>{item.priority}</td>
								<td>
									<button className="btn btn-danger" onClick={() => handleRemoveProduct(item.id)}>
										Remove
									</button>
									<Link to={`/admin/todos/update/${item.id}`} className="btn btn-warning">
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

export default TodoTable;
