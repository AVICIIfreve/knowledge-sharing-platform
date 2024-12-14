import express from "express";
import { registerUser } from "../controllers/authController";

const router = express.Router();


//注册用户的路由
router.post("/register",registerUser);

export default router;