**Học viên nộp bài tập tại đây.**

**Yêu cầu:** Gửi link Github và link Deploy (Vercel).

**Deadline:** 20:00:00 ngày 03/112/2024

##

import React from 'react';

import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast('Wow so easy!');

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

toast("It's that easy"); // or toast.default()
toast.success('to create');
toast.error('different types');
toast.dark('of notifications.');
toast.warning('You just need to');
toast.info('execute one of these functions');
##
