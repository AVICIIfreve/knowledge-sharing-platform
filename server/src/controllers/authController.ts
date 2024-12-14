import { Request,Response } from "express";
import bcrypt from "bcrypt";
import pool from "../config/db";

//注册用户
export const registerUser = async (req:Request,res:Response) => {
    const {email,password,name} =req.body;

    //校验用户输入
    if(!email || !password ||!name) {
        return res.status(400).json({success:false,message:"邮箱,密码和姓名不能为空"});
    }

    try{
        //检查邮箱是否已经被注册
       const [existingUser] = await pool.query("select * from users where email =?",[email])
       if((existingUser as any).length >0){
        return res.status(400).json({success:false,field:"email",message:"该邮箱已被注册"});
       }
        //检查姓名是否已经被注册
        const [existingUserName] = await pool.query("select * from users where name =?",[name])
        if((existingUserName as any).length >0){
         return res.status(400).json({success:false,field:"name",message:"该姓名已被注册"});
        }

       //哈希密码
        const hashPassword = await bcrypt.hash(password,10);

        //插入用户到数据库
        await pool.query("INSERT IGNORE INTO users (email,password,name) VALUES (?,?,?)",[email,hashPassword,name]);
        res.status(200).json({success: true, message: "注册成功" })
    }catch(error) {
        console.error("注册用户失败：", error);
        res.status(500).json({ success: false, message: "服务器错误" });
    }
}