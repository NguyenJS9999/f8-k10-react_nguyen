import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const { id } = useParams();
	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(`https://dummyjson.com/products/${id}`);
				const data = await res.json();
				console.log(data);
			} catch (error) {
				console.log("Co loi", error);
			}
		})();
	}, []);
	return (
		<div>
			<div className="path-detail">
				<p></p>
			</div>
			<div className="product-detail">
				<img src="" alt="" />
				<div className="content">
					<h1>Ten san pham</h1>
					<p>Gia san pham</p>
					{/* va nhieu thong tin khac */}
					{/* Về nhà làm nốt */}
				</div>
			</div>
		</div>
	);
};

export default ProductDetailPage;
