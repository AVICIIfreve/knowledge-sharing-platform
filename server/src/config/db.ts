import mysql from 'mysql2/promise' //导入MySQL驱动
import dotenv from 'dotenv';

//加载 .env文件中的环境变量
dotenv.config();

//创建数据库连接池
const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306,
    waitForConnections: true,
    connectionLimit: 10, // 最大连接数
    queueLimit: 0,       // 队列最大数量（0 表示不限制）
})

export default pool;