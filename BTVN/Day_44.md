## Cài đặt json-server-auth

```
npm i json-server-auth
```

## Update package.json

```json
		"dev": "concurrently \"vite\" \"json-server --watch db.json --port 3000 -m ./node_modules/json-server-auth\"",
```

BTVN:

## Xây dựng ứng dụng TodoList với React, Json-server với các chức năng sau:

- Tạo tài khoản mới.
- Đăng nhập và duy trì trạng thái đăng nhập, nếu người dùng chưa đăng nhâp thì không thể thực hiện các chức năng khác.
- Hiển thị danh sách công việc cần làm với tài khoản đã đăng nhập **(lưu ý: mỗi tài khoản sẽ có danh sách việc cần làm riêng)**.
- Thêm công việc mới với các thông tin:

```js
{
	"title": Không được bỏ trống,
	"description": Có thể bỏ trống,
	"status": Bao gồm 2 trạng thái: "done" hoặc "doing", khi mới tạo công việc thì mặc định là "doing",
	"priority": Bao gồm 3 mức độ: "low", "medium", "high", mặc định là "low",
	"userId": Id của người tạo công việc - trường này không cần nhập, sẽ được lấy từ thông tin tài khoản đã đăng nhập.
}

```

- Chỉnh sửa chi tiết công việc đã tạo.
- Xóa công việc đã tạo.
- Đánh dấu công việc đã hoàn thành hoặc chưa hoàn thành.
- Luôn đếm chính xác số công việc chưa hoàn thành và thông báo lên giao diện.

**Gợi ý:**

Cho data todos:

```json
"todos": [
		{
			"id": 1,
			"title": "task A",
			"description": "detail A",
			"status": "doing",
			"priority": "high",
			"userId": 1
		},
		{
			"id": 2,
			"title": "task B",
			"description": "detail B",
			"status": "doing",
			"priority": "high",
			"userId": 1
		},
		{
			"id": 3,
			"title": "task C",
			"description": "detail C",
			"status": "doing",
			"priority": "high",
			"userId": 2
		}
	]
```

Nếu request `http://localhost:3000/todos?userId=1` thì chỉ trả về những item có `userId=1`, ví dụ:

```json
[
	{
		"id": 1,
		"title": "task A",
		"description": "detail A",
		"status": "doing",
		"priority": "high",
		"userId": 1
	},
	{
		"id": 2,
		"title": "task B",
		"description": "detail B",
		"status": "doing",
		"priority": "high",
		"userId": 1
	}
]
```
