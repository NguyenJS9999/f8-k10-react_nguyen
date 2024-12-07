import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll, removeById } from "../../../services/crudServices";
import { UserContext } from "../../../context/UserContext";

const UserTable = () => {

	const { userState, dispatchUser } = useContext(UserContext);

	const [ todos, setTodos] = useState([]);

	const userIdLogin = 3;

	useEffect(() => {
		(async () => {
			const data = await getAll('/users');
			// Có id user thì mới lọc ra show tạm...
			if (userIdLogin) {
				const dataWithUser = data.filter( item => item.userId == userIdLogin )
				// console.log('dataWithUser', dataWithUser);
				setTodos(dataWithUser);
				dispatchUser({ type: "SET_USER", payload: dataWithUser });
			} else {
				setTodos(data);
				dispatchUser({ type: "SET_USER", payload: data });
			}


		})();

		// console.log('UserTable appState: ', appState);
	}, []);


	// useEffect(() => {
	// 	(async () => {
	// 		const data = await getAll(`/users?userId=${userIdLogin}`);
	// 		console.log('data ?userId: ', data);
	// 	})();
	// }, []);


	const handleRemoveUser = async id => {
		if (confirm('Are you sure?')) {
			const res = await removeById('/users', id);
			if (res.status === 200) {
				const newToDos = todos.filter(item => item.id !== id);
				setTodos(newToDos);
				dispatch({ type: "SET_USER", payload: newToDos });
			} else {
				console.log('Error!');
			}
		}
	};

	return (
		<div>
			<div>
				<h1>Quản lý người dùng</h1>
				<Link to={`/admin/todos/add`} className="btn btn-primary">
					Add user
				</Link>
				<table className="table table-bordered table-striped">
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
								<td>{item?.id}</td>
								<td>{item?.title}-userId: {item?.userId}</td>
								<td>{item?.description}</td>
								<td>{item?.status ? 'Done' : 'Doing'}</td>
								<td>{item?.priority}</td>
								<td>
									<button className="btn btn-danger" onClick={() => handleRemoveUser(item?.id)}>
										Remove
									</button>
									<Link to={`/admin/todos/update/${item?.id}`} className="btn btn-warning">
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

export default UserTable;
