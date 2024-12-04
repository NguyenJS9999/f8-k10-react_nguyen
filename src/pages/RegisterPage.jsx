import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../schemas/authSchemas";
import { auth, registerAccount } from "../services/authServices";

const RegisterPage = () => {
	const nav = useNavigate();
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerSchema),
	});

	const handleRegister = async (dataBody) => {
		const data = await auth("/register", dataBody);
		data.user && confirm("Register new account successfully, login now?") && nav("/login");
	};
	return (
		<>
			<form onSubmit={handleSubmit(handleRegister)}>
				<h1>Register new account</h1>
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
					<label htmlFor="confirmPassword" className="form-label">
						Confirm Password
					</label>
					<input type="password" className="form-control" {...register("confirmPassword", { required: true })} />
					{errors?.confirmPassword && <p className="text-danger">{errors?.confirmPassword?.message}</p>}
				</div>

				<div className="mb-3">
					<button className="btn btn-primary w-100">Register</button>
					<Link to="/login">Already an account?</Link>
				</div>
			</form>
		</>
	);
};

export default RegisterPage;
