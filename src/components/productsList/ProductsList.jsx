import React from "react";
import { datas } from "../../datas/data";

const ProductList = () => {
	console.log(datas);
	return (
		<div>
			<h2>Danh sach san pham:</h2>
			{datas.map((item, index) => (
				<div key={index}>
					<h2>{item.name}</h2>
				</div>
			))}
		</div>
	);
};

export default ProductList;
