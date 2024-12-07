import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll, removeById } from "../../../services/crudServices";
import { TodoContext } from "../../../context/TodoContext";
import { UserContext } from "../../../context/UserContext";

const TodoTable = () => {

	const { todoState, dispatchTodo } = useContext(TodoContext);
	const { userState } = useContext(UserContext);
	const [ todos, setTodos] = useState([]);




	useEffect(() => {
		console.log('todos userState', userState);

		(async () => {
			// Có id user thì mới lọc ra show tạm...
			const userIdLogin = 3;
			if (userIdLogin) {
				const dataWithUser = await getAll(`/todos?userId=${userIdLogin}`);
				// const dataWithUser = data.filter( item => item.userId == userIdLogin )
				setTodos(dataWithUser);
				dispatchTodo({ type: "SET_TODOS", payload: dataWithUser });
			}

			// Super Admin
			// else {
			// 	const data = await getAll(`/todos`);
			// 	setTodos(data);
			// 	dispatchTodo({ type: "SET_TODOS", payload: data });
			// }

		})();

		console.log('todos todoState', todoState);


	}, []);


	// useEffect(() => {
	// 	(async () => {
	// 		const data = await getAll(`/todos?userId=3`);
	// 		console.log('data ?userId: ', data);
	// 	})();
	// }, []);


	const handleRemoveProduct = async id => {
		if (confirm('Are you sure?')) {
			const res = await removeById('/data2', id);
			if (res.status === 200) {
				const newToDos = todos.filter(item => item.id !== id);
				setTodos(newToDos);
				dispatch({ type: "SET_TODOS", payload: newToDos });
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
