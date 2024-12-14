import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState({ field: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !name) {
      alert("请输入邮箱，密码和姓名！");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { email, password, name }
      );
      console.log("服务器返回", response.data);
      alert("注册成功！");
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError({
          field: error.response.data.field,
          message: error.response.data.message,
        });
      } else {
        setError({ field: "", message: "注册失败，请稍后再试" });
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              {/* style={{ maxWidth: "400px" }} */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h1 className="text-center mb-4">用户注册</h1>
                  {error.message && (
                    <div className="alert alert-danger" role="alert">
                      {error.message}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="请输入邮箱"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="请输入姓名"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        id="password"
                        className="form-control"
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-describedby="passwordHelpBlock"
                      />
                      <div id="passwordHelpBlock" className="form-text">
                        Must be 8-20 characters long.
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      注册
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
