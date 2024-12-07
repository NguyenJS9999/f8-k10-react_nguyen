import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas/authSchemas";
import { auth } from "../services/authServices";

const LoginPage = () => {
	const nav = useNavigate();
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const accessTokenLocal = localStorage.getItem('accessToken');
	const dataUserLocal = JSON.parse(localStorage.getItem('user'));
	const roleLocal = localStorage.getItem('role');
	// console.log('LoginPage', dataUserLocal, typeof dataUserLocal);

	useEffect(() => {
		checkLogin();
	}, []);

	const checkLogin = () => {
		// Nếu ko lấy được thông tin user ở local và token
		if ( !accessTokenLocal && !dataUserLocal ) {
			console.log('!accessTokenLocal && !dataUserLocal !dataUser: ', dataUserLocal);
			nav("/login")
		} else  {
			if ( roleLocal === "admin") {nav("/admin");}
			if ( roleLocal === "superAdmin") {nav("/super-admin");}
			if ( !roleLocal ) {nav("/");}
		}
	}
	const handleLogin = async (dataBody) => {
		const { accessToken, user } = await auth("/login", dataBody);
		user && confirm("Login successfully, redirect Home?") && nav("/");
		localStorage.setItem("accessToken", accessToken);
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem("role", user?.role || "client");
		// handleLocalStorage("accessToken", accessToken);
		// handleLocalStorage("user", JSON.stringify(user));
		// handleLocalStorage("role", user?.role || "client");
	};
	return (
		<>
			<form onSubmit={handleSubmit(handleLogin)}>
				<h1>Login now</h1>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input type="email" className="form-control" {...register("email", { required: true })} />
					{errors?.email && <p className="text-danger">{errors?.email?.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input type="password" className="form-control" {...register("password", { required: true })} />
					{errors?.password && <p className="text-danger">{errors?.password?.message}</p>}
				</div>

				<div className="mb-3">
					<button className="btn btn-primary w-100">Login</button>
					<Link to="/register">Don't haven't an account?</Link>
				</div>
			</form>
		</>
	);
};

export default LoginPage;
