import React from "react";
import { Navigate } from "react-router-dom";

const LayoutAdmin = ({ children }) => {
	const role = localStorage.getItem("role");
	console.log(role);
	console.log(children);
	// return <>{role === "admin" ? children : <Navigate to="/login" />}</>;
	return <>{role === "admin" ? children : "Bạn không có quyền vào trang này"}</>;
};

export default LayoutAdmin;
