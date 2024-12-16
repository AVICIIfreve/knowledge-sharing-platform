import { Request,Response } from "express";
import bcrypt from "bcrypt";
import pool from "../config/db";
import jwt from 'jsonwebtoken';



//注册用户
export const registerUser = async (req:Request,res:Response) => {
    const {email,password,name} =req.body;

    //校验用户输入
    if(!email || !password ||!name) {
        return res.status(400).json({success:false,message:"邮箱,密码和姓名不能为空"});
    }

    try{
        //检查邮箱是否已经被注册
       const [existingUser] = await pool.execute("select * from users where email =?",[email])
       if((existingUser as any).length >0){
        return res.status(400).json({success:false,field:"email",message:"该邮箱已被注册"});
       }
        //检查姓名是否已经被注册
        const [existingUserName] = await pool.execute("select * from users where name =?",[name])
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

//登录逻辑
export const login =async (req:Request,res:Response)=> {
    const {email , password} = req.body;

    if(!email || !password) {
        return res.status(400).json({message:"请填写邮箱和密码"})
    }

    try{
        //检查用户是否存在
        const [users]:any = await pool.execute("select * from users where email=?",[email]);
        if(!users || users.length === 0){
            return res.status(401).json({message:"用户不存在"})
        }

        const user = users[0];

        //验证密码
        const isPasswordValid = await bcrypt.compare(password,user.password)
        if(!isPasswordValid) {
            return res.status(401).json({message:"密码错误"})
        }

        //生成jwt token
        const token =jwt.sign({id:user.id,email:user.email},process.env.JWT_SECRET || "default_secret",{expiresIn:"1h"});
        res.json({message:"登录成功",token})
    }catch(error){
        res.status(500).json({message:"服务器错误,请稍后再试"})
    }
}