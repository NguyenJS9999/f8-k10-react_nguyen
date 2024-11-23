import './tempComponentProductsList.scss';
import { useState } from 'react';
import { datas } from '../../datas/data';
import ComponentProductItem from '../componentProductItem/tempComponentProductItem';

function TempComponentProductsList() {
	// const [ arrProduct, setArrProduc ] = useState(datas);

	const [visibleProduct, setVisibleProduct] = useState(10);

	const handleSeeMore = () => {
		setVisibleProduct(visibleProduct + 10);
	};

	return (
		<div>
			<div className="product-page">
				<div className="product-page-title">Product list</div>
				<div className="product-wraper">
					<div className="product-list">
						{datas &&
							datas
								.slice(0, visibleProduct)
								.map((item, index) => {
									return (
										<ComponentProductItem
											key={item.id ?? index}
											item={item}
										/>
									);
								})}
					</div>

					<div className='d-flex justify-content-center'>
						{visibleProduct < datas.length && (
							<div
								onClick={handleSeeMore}
								id="btn-see-more"
								className="btn btn-secondary mt-4"
							>
								See more
							</div>
						)}
					</div>

				</div>
			</div>
		</div>
	);
}

export default TempComponentProductsList;

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
