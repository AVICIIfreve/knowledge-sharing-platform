import express from 'express';
import pool from './config/db'
import dotenv from 'dotenv';
import authRoutes from "./routes/auth";
import cors from "cors";

// 加载 .env 文件的环境变量
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5100;

// 中间件
//跨域
app.use(
  cors({
    origin: "http://localhost:3000", // 允许的前端地址
  })
);
//将json解析为js对象
app.use(express.json());

//路由挂载(中间件的特殊形式)
app.use("/api/auth",authRoutes)
// 路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/users', async(req,res)=>{
  try{
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  }catch(error){
    console.error('Error querying the database:', error);
    res.status(500).send("Database query failed")
  }
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});