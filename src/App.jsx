import ComponentFooter from "./components/componentFooter/ComponentFooter";
import ComponentHeader from "./components/componentHeader/ComponentHeader";
import ComponentProductsList from "./components/componentProductsList/ComponentProductsList";

/**
 *
 ** Bài 1: Tạo 1 nút bấm toogle product list để ẩn hiện danh sách sản phẩm.
 ** Bài 2: Tạo nút bấm "See more" ở cuối danh sách sản phẩm, mỗi lần ấn sẽ hiển thị thêm 10 sản phẩm.
 ** Bài 3: Trong component Header tạo nút bấm "handleChangeTheme" để chuyển đổi giữa DarkMode và LightMode
 */

function App() {
	return (
		<>
			<ComponentHeader />
			<div className="container p-4">
				<ComponentProductsList />
			</div>
			<ComponentFooter />
		</>
	);
}

export default App;
