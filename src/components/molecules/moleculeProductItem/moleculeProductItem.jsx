import './MoleculeProductItem.scss';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function MoleculeProductItem({ item }) {
	function renderMoney(number) {
		if (typeof parseInt(number) === 'number') {
			return number.toLocaleString('vi', {
				style: 'currency',
				currency: 'VND'
			});
		}
	}

	function handleGetDetailProduct(url_path) {
		if (url_path) {
			console.log('url_path: ', url_path);
			// Đưa lên url 1 slug
		}
	}

	return (
		<div class="product-item">
			<a
				href="/product-detail.html?id=${item?.id}"
				className="product-img"
				title={item?.meta_title}
			>
				<img src={item?.image} alt={item?.meta_title} />
			</a>
			<div class="product-infor">
				<div class="product-infor-item shorten-text-two-line ">
					<span className="prd-infor-content" id="prd-name">
						{item?.name}
					</span>
				</div>

				<div class="product-infor-item shorten-text-two-line ">
					<span className="prd-infor-title">Giá: </span>
					<span className="prd-infor-content" id="prd-price">
						{renderMoney(item?.final_price)}
					</span>
				</div>
				<span class="product-infor-item shorten-text-two-line ">
					<span className="prd-infor-title">Mô tả: </span>
					<span className="prd-infor-content" id='prd-description'>
						{item?.short_description}
					</span>
				</span>

				<span class="product-infor-item shorten-text-two-line ">
					<span className="prd-infor-title">Sku: </span>
					<span className="prd-infor-content" id='prd-sku'>{item?.sku}</span>
				</span>
				<span class="product-infor-item shorten-text-two-line ">
					<span className="prd-infor-title">Stock: </span>
					<span className="prd-infor-content" id='prd-stock'>{item?.stock}</span>
				</span>
				<span class="product-infor-item shorten-text-two-line ">
					<span className="prd-infor-title">Materials: </span>
					<span className="prd-infor-content" id='prd-materials'>{item?.materials}</span>
				</span>
				<span class="product-infor-item shorten-text-two-line ">
					<span className="prd-infor-title">Instruction: </span>
					<span className="prd-infor-content" id='prd-instruction'>{item?.instruction}</span>
				</span>

				<a
					id="get-detail"
					class="btn mt-2"
					href="/product-detail.html?id=${item?.id}"
					onClick={handleGetDetailProduct(item?.url_path)}
				>
					<span>Xem chi tiết</span>
				</a>
			</div>
		</div>
	);
}

MoleculeProductItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default MoleculeProductItem;
