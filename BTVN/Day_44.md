## Cài đặt json-server-auth

```
npm i json-server-auth
```

## Update package.json

```json
		"dev": "concurrently \"vite\" \"json-server --watch db.json --port 3000 -m ./node_modules/json-server-auth\"",
```
