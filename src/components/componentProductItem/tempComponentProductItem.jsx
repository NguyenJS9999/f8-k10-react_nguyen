import './tempComponentProductItem.scss';

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

function tempComponentProductItem({ item }) {

	function renderMoney(number) {
		if (number && typeof parseInt(number) === 'number') {
			return Number(number).toLocaleString('vi', {
				style: 'currency',
				currency: 'VND'
			});
		} else {
			return number;
		}
	}

	function renderRating(number) {
		if ( number ) {
			return number;
		}

	}

	function handleGetDetailProduct(url_path) {
		if (url_path) {
			// console.log('url_path: ', url_path);
			// Đưa lên url 1 slug
		}
	}

	return (
		<div className="product-item">
			<a
				className="product-img"
				title={item?.meta_title ?? item?.title }
			>
				<img src={item?.image  ?? item?.thumbnail} alt={item?.meta_title ?? item?.title} />
			</a>
			<div className="product-infor">
				<div className="product-infor-item shorten-text-two-line"  title={item?.name}>
					<span className="prd-infor-content" id="prd-name">
						{item?.name ?? item?.title}
					</span>
				</div>

				<div className="product-infor-item shorten-text-two-line" title={renderMoney(item?.final_price)}>
					<span className="prd-infor-title">Giá: </span>
					<span className="prd-infor-content" id="prd-price">
						{renderMoney(item?.final_price ?? item?.price)}
					</span>
				</div>
				<span className="product-infor-item shorten-text-two-line" title={item?.short_description}>
					<span className="prd-infor-title">Mô tả: </span>
					<span className="prd-infor-content" id='prd-description'>
						{item?.short_description ?? item?.description}
					</span>
				</span>

				<span className="product-infor-item shorten-text-two-line" title={item?.sku}>
					<span className="prd-infor-title">Sku: </span>
					<span className="prd-infor-content" id='prd-sku'>{item?.sku}</span>
				</span>
				<span className="product-infor-item shorten-text-two-line" title={item?.stock}>
					<span className="prd-infor-title">Stock: </span>
					<span className="prd-infor-content" id='prd-stock'>{item?.stock}</span>
				</span>
				{item?.materials && <span className="product-infor-item shorten-text-two-line" title={item?.materials}>
					<span className="prd-infor-title">Materials: </span>
					<span className="prd-infor-content" id='prd-materials'>{item?.materials}</span>
				</span>}
				{item?.instruction && <span className="product-infor-item shorten-text-two-line" title={item?.instruction}>
					<span className="prd-infor-title">Instruction: </span>
					<span className="prd-infor-content" id='prd-instruction'>{item?.instruction}</span>
				</span>}
				{item?.rating && <span className="product-infor-item shorten-text-two-line" title={item?.rating}>
					<span className="prd-infor-title">Rating: </span>
					<span className="prd-infor-content" id='prd-instruction'>
						{ renderRating(item?.rating)} <i className="fa-solid fa-star rating"></i>
					</span>
				</span>}

				<a
					id="get-detail"
					className="btn mt-2"
					onClick={handleGetDetailProduct(item?.url_path)}
				>
					<span>Xem chi tiết</span>
				</a>
			</div>
		</div>
	);
}

// tempComponentProductItem.propTypes = {
// 	item: PropTypes.object.isRequired
// };

export default tempComponentProductItem;
