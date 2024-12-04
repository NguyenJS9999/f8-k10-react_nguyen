import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
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

	const handleLogin = async (dataBody) => {
		const { accessToken, user } = await auth("/login", dataBody);
		user && confirm("Login successfully, redirect Home?") && nav("/");
		localStorage.setItem("accessToken", accessToken);
		localStorage.setItem("user", JSON.stringify(user));
		console.log(user);
		localStorage.setItem("role", user?.role || "client");
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
