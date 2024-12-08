import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
// 	const role = localStorage.getItem("role") || "client";
// 	console.log(role);
// 	return (
// 		<div>
// 			<p>Tuyến đường được bảo vệ</p>
// 			{role === "superAdmin" ? <Outlet /> : <Navigate to="/login" />}
// 		</div>
// 	);
// };

const ProtectedRoute = ({ role, children }) => {
	const localRole = localStorage.getItem("role") || "client";
	console.log('Syper admin ProtectedRoute', localRole);
	return (
		<div>
			<p>Tuyến đường được bảo vệ</p>
			{localRole === role ? children : <Navigate to="/login" />}
		</div>
	);
};

export default ProtectedRoute;
