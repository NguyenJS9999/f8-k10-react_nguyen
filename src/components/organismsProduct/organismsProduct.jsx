import './organismsProduct.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { datas } from '../../datas/data.js';
import MoleculeProductItem from '../../components/moleculeProductItem';

function OrganismsProduct(props) {
	const [ arrProduct, setArrProduct ] = useState(datas);
	console.log('arrProduct: ', arrProduct);

	return (
		<div>
			<div className="product-page">
				<div className="product-page-title">Product list</div>
				<div className="product-wraper">
					<div className="product-list">
						{arrProduct &&
							arrProduct.map((item, index) => {
								return (
									<MoleculeProductItem
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

OrganismsProduct.propTypes = {};

export default OrganismsProduct;