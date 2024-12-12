import express from 'express';
import pool from './config/db'
import dotenv from 'dotenv';

// 加载 .env 文件的环境变量
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5100;

// 中间件
app.use(express.json());

// 路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});

async function testDatabase() {
  try {
    const connection = await pool.getConnection();
    console.log("Database connection successful!")
    connection.release();
  }catch(error){
    console.error("Database connection failed:",error);
    process.exit(1);
  }
}

testDatabase();

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