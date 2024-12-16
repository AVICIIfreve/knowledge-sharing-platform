import express from "express";
import { registerUser,login } from "../controllers/authController";

const router = express.Router();


//注册用户的路由
router.post("/register",registerUser);

//登录路由
router.post("/login",login)

export default router;