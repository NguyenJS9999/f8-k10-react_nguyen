// import React, { useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//
// const MoleculeToast = ({ message, duration = 5000, type = "default", onClose, onShowToast }) => {
//
//   const showToast = () => {
//     toast(message, {
//       type: type, // Kiểu: success, error, info, warning, default
//       autoClose: duration, // Thời gian tự đóng
//       onClose: onClose, // Callback khi đóng
//     });
//   };
//
//   function handleShowToast() {
//     onShowToast();
//   }
//
//   return (
//     <>
//       <button onClick={showToast}>Show Toast</button>
//       <ToastContainer />
//     </>
//   );
// };
//
// export default MoleculeToast;

import './Toast.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToast } from './appSlice';

const Toast = ({ id, message, type, duration }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(removeToast(id));
		}, duration || 3000); // Thời gian hiển thị mặc định 3 giây

		return () => clearTimeout(timer);
	}, [dispatch, id, duration]);

	return (
		<div className={`toast toast-${type}`}>
			<p>{message}</p>
			<button onClick={() => dispatch(removeToast(id))}>Close</button>
		</div>
	);
};

const ToastContainer = () => {
	const toasts = useSelector(state => state.app.toasts);

	return (
		<div className="component-toast toast-container">
			{toasts.map(toast => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
