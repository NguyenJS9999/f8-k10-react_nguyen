## 1: Cài đặt

```bash
npm install json-server-auth
```

## 2: Cập nhật file db.json

```json
"users": []
```

## 3: Cập nhật lại script trong package.json

```json
		"dev": "concurrently \"vite\" \"json-server --watch db.json --port 3000 -m ./node_modules/json-server-auth\"",
```

## Thực hiện test với postman

POST: http://localhost:3000/register
POST: http://localhost:3000/login

## Tạo form đăng ký, đăng nhập.
