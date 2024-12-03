import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm({
        resolver: zodResolver(),
    });

	return <div>RegisterPage</div>;
};

export default RegisterPage;
