import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAllItem } from '../../axios/crud.js';
import { zodResolver } from '@hookform/resolvers/zod';
import { userShemas } from '../../schemas/userShemas';
import './AuthForm.scss';

const LoginForm = () => {
	let navigate = useNavigate();
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm({
		resolver: zodResolver(userShemas)
	});
	const handleLogin = async dataUser => {
		try {
			const res = await getAllItem('/users');
			console.log('handleLogin res: ', res);
			const id = res.find(
				({ username, email }) =>
					username === dataUser.username && email === dataUser.email
			);
			console.log(res);
			if (
				dataUser.email === 'nguyentrungnguyenth14@gmail.com' ||
				dataUser.username === 'Valina Nguyên 2'
			) {
				navigate('/admin/products');
			} else if (id) {
				navigate('/');
			} else {
				alert('Tài khoản hoặc mật khẩu không đúng');
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="auth-page container">
				<h1 className="title">Login</h1>

				<form onSubmit={handleSubmit(handleLogin)}>
					{/* <div className="formGroup">
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
							<p className="textDanger">
								{errors.username?.message}
							</p>
						)}
					</div> */}

					<div className="formGroup">
						<label htmlFor="email" className="formLabel">
							Email
						</label>
						<input
							className="formControl"
							type="text"
							name="email"
							id="email"
							placeholder="email"
							{...register('email', { required: true })}
						/>
						{errors.email && (
							<p className="textDanger">
								{errors.email?.message}
							</p>
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
							<p className="textDanger">
								{errors.password?.message}
							</p>
						)}
					</div>

					<div className="formGroup">
						<button type="submit" className="btnPrimary">
							Login
						</button>
						<NavLink className="link" to="/user/register">
							Register if you do not have an account
						</NavLink>
					</div>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
