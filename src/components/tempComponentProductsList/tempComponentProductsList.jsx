

import './ComponentProductsList.scss';
import { useState } from "react";
import { datas } from "../../datas/data";
import ComponentProductItem from '../componentProductItem/tempComponentProductItem';

function ComponentProductsList() {
	const [arrProduct, setArrProduc] = useState(datas);

	return (
		<div>
			<div className="product-page">
				<div className="product-page-title">Product list</div>
				<div className="product-wraper">
					<div className="product-list">
						{arrProduct &&
							arrProduct.map((item, index) => {
								return (
									<ComponentProductItem
										key={item.id ?? index }
										item={item}
									/>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ComponentProductsList;


// import React from "react";
// import { datas } from "../../datas/data";
//
// const ProductList = () => {
// 	console.log(datas);
// 	return (
// 		<div>
// 			<h2>Danh sach san pham:</h2>
// 			{datas.map((item, index) => (
// 				<div key={index}>
// 					<h2>{item.name}</h2>
// 				</div>
// 			))}
// 		</div>
// 	);
// };
//
// export default ProductList;
