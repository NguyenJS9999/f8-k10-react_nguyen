import TempComponentProductsList from "@components/tempComponentProductsList/tempComponentProductsList";


const ShopPage = ({
	propsearchValue,
	propIsSearching,
	propOnPagination={handlePagination}
	,
}) => {

	return (
		<div className="wrap-frame container p-4 h-100 ">
			{/* <div
				onClick={handleToggleList}
				className="btn btn-secondary"
				id="show-hide-btn"
			>
				<span>Hiện danh sách sản phẩm</span>
			</div> */}
			<div>
				<TempComponentProductsList
					propsearchValue={propsearchValue}
					propIsSearching={propIsSearching}
					propOnPagination={propOnPagination}
				/>
			</div>
		</div>
	);
};

export default ShopPage;

// SKU = Stock Keeping Unit