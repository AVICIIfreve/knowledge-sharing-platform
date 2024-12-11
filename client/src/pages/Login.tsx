import React, { useState } from "react";
import div from "../components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hadleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        //使用mocky模拟假接口
        "https://run.mocky.io/v3/216f0131-2230-498b-b7c2-b89877c99a3d",
        { email, password }
      );
      if (response.data.success) {
        alert("登录成功！");
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("登录失败，请检查网络或稍后重试");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
          <h2 className="text-center mb-4">用户登录</h2>
          <form onSubmit={hadleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                邮箱地址
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="请输入邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                密码
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="请输入密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              登录
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
