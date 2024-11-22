import './organismsProduct.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { dataProducts } from '../../../datas/data';
import MoleculeProductItem from '../../molecules/moleculeProductItem/moleculeProductItem';

function OrganismsProduct(props) {
	// console.log('dataProducts: ', dataProducts);
	const [arrProduct, setArrProduc] = useState(dataProducts);

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
