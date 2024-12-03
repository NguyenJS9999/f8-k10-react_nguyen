import { NavLink, useNavigate } from 'react-router-dom';
import { createNewItem } from '../../axios/crud.js';

import { zodResolver } from '@hookform/resolvers/zod';
import { userShemas } from '../../schemas/userShemas';
import { useForm } from 'react-hook-form';
import './AuthForm.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
	let navigate = useNavigate();
	const {
		reset,
		register,
		formState: { errors },
		handleSubmit
	} = useForm({
		resolver: zodResolver(userShemas)
	});

	const handleRegister = async (dataUser) => {
		try {
			const res = await createNewItem('/register', dataUser);
			console.log('handleRegister res: ', res);
			if (res?.accessToken) {
				// alert('Đăng ký thành công, chuyển đến trang đăng nhập');
                toast("Đăng ký thành công, chuyển đến trang đăng nhập!");
				navigate('/user/login');
			} else {
				// alert('Đăng ký thất bại');
				toast('Đăng ký thất bại');
				reset();
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="auth-page container">
			<h1 className="title">Register Account</h1>
			<form onSubmit={handleSubmit(handleRegister)}>
				<div className="formGroup">
					<label htmlFor="username" className="formLabel">
						UserName
					</label>
					<input
						className="formControl"
						type="text"
						name="username"
						id="username"
						placeholder="username"
						{...register('username', { required: true })}
					/>
					{errors.username && (
						<p className="textDanger">{errors.username?.message}</p>
					)}
				</div>

				<div className="formGroup">
					<label htmlFor="email" className="formLabel">
						Email
					</label>
					<input
						className="formControl"
						type="email"
						name="email"
						id="email"
						placeholder="email"
						{...register('email', { required: true })}
					/>
					{errors.email && (
						<p className="textDanger">{errors.email?.message}</p>
					)}
				</div>

				<div className="formGroup">
					<label htmlFor="password" className="formLabel">
						Password
					</label>
					<input
						type="password"
						className="formControl"
						name="password"
						id="password"
						placeholder="********"
						{...register('password', { required: true })}
					/>
					{errors.password && (
						<p className="textDanger">{errors.password?.message}</p>
					)}
				</div>

				<div className="formGroup">
					<button type="submit" className="btnPrimary">
						Login
					</button>
					<NavLink to="/user/login" className="link">
                        Log in if you already have an account
					</NavLink>
				</div>
			</form>

            <ToastContainer />
		</div>
	);
};

export default RegisterForm;
