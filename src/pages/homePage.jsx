import React from 'react';
import PropTypes from 'prop-types';

function HomePage(props) {
	const courses = [
		{ id: 1, title: 'Khoa hoc JS', price: 500 },
		{ id: 2, title: 'Khoa hoc JS', price: 500 },
		{ id: 3, title: 'Khoa hoc PHP', price: 500 }
	];

	return <div>HomePage</div>;
}

HomePage.propTypes = {};

export default HomePage;
