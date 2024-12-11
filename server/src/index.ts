import express from 'express';
import dotenv from 'dotenv';

// 加载 .env 文件的环境变量
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(express.json());

// 路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});