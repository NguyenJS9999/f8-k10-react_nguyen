/**
 *
 ** Bài 1: Tạo 1 nút bấm toogle product list để ẩn hiện danh sách sản phẩm.
 ** Bài 2: Tạo nút bấm "See more" ở cuối danh sách sản phẩm, mỗi lần ấn sẽ hiển thị thêm 10 sản phẩm.
 ** Bài 3: Trong component Header tạo nút bấm "handleChangeTheme" để chuyển đổi giữa DarkMode và LightMode
 */

import { useEffect, useState } from 'react';
import TempComponentFooter from './components/tempComponentFooter/tempComponentFooter';
import TempComponentHeader from './components/tempComponentHeader/tempComponentHeader';
import TempComponentProductsList from './components/tempComponentProductsList/tempComponentProductsList';

function App( ) {
	const [ darkMode, setDarkMode ] = useState(false);
	const [ showList, setShowList ] = useState(true);
	const [ isSearching, setIsSearching ] = useState(false);
	const [ searchValue, setSearchValue ] = useState("");

	useEffect(() => {
		localStorage.setItem('darkMode', darkMode);
	}, [darkMode]);
	useEffect(() => {
		const savedMode = localStorage.getItem('darkMode') === 'true';
		setDarkMode(savedMode);
	}, []);
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
			document.body.classList.remove('light');
		} else {
			document.body.classList.add('light');
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

	const handleSearch = (value) => {
		setSearchValue(value);
		setIsSearching(true);
	};

	function handlePagination() {
		setIsSearching(false)
		setSearchValue("")
		
	}

	function handleToggleList() {
		// console.log('handleToggleList: ', showList);
		setShowList(!showList);
	}

	return (
		<>
			<TempComponentHeader
				darkMode={darkMode}
				toggleDarkMode={() => setDarkMode(!darkMode)}
				propOnInputSearch={handleSearch}
				propOnPagination={handlePagination}

			/>
			<div className="wrap-frame container p-4 h-100 ">
				<div
					onClick={handleToggleList}
					className="btn btn-secondary"
					id="show-hide-btn"
				>
					<span>Hiện danh sách sản phẩm</span>
				</div>
				<div className={`${ showList ? 'show-list' : 'hire-list'}`}>
					<TempComponentProductsList
						propsearchValue={searchValue}
						propIsSearching={isSearching}
						propOnPagination={handlePagination}

					/>
				</div>
			</div>
			<TempComponentFooter />
		</>
	);
}

export default App;
