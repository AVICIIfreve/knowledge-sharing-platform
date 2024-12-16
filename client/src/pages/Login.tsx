import React, { useState } from "react";
import div from "../components/Nav";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hadleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      if (response.status === 200) {
        console.log(response);
        alert("登录成功！");
        navigate("/");
      }
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card p-4 shadow-lg">
                <h2 className="text-center mb-4">用户登录</h2>
                <form onSubmit={hadleSubmit}>
                  <div className="mb-3">
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

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

                  <button type="submit" className="btn btn-primary w-100 mb-3">
                    登录
                  </button>
                  <Link
                    to="/register"
                    className="btn btn-secondary w-100 text-center"
                  >
                    创建账号
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
