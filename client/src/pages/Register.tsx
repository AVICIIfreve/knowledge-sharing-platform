import axios from "axios";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); //初始化路由跳转方法
  const [successMessage, setSuccessMessage] = useState(""); // 用于显示成功消息

  //定义表单验证规则
  const validationSchema = Yup.object({
    email: Yup.string().email("请输入有效的邮箱").required("邮箱不能为空"),
    name: Yup.string().required("姓名不能为空"),
    password: Yup.string()
      .min(8, "密码至少需要8个字符")
      .max(20, "密码不能超过20个字符")
      .required("密码不能为空"),
  });

  //使用Formik管理表单状态和事件
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setSubmitting(true); //正在提交使提交按钮不可用
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/register",
          values
        );
        console.log("服务器返回", response.data);
        setSuccessMessage("注册成功!3秒后将跳转到登录界面...");
        setTimeout(() => {
          navigate("/login"); //跳转到登录界面
        }, 3000);
      } catch (error: any) {
        if (error.response && error.response.data) {
          const { field, message } = error.response.data;
          setErrors({
            [field]: message,
          });
        } else {
          alert("注册失败，请稍后再试！");
        }
        //提交失败后恢复按钮状态
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h2 className="text-center mb-4">用户注册</h2>
                  {/* 成功提示框 */}
                  {successMessage && (
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      {successMessage}
                    </div>
                  )}
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`form-control ${
                          formik.touched.email && formik.errors.email
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="请输入邮箱"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`form-control ${
                          formik.touched.name && formik.errors.name
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="请输入姓名"
                        {...formik.getFieldProps("name")}
                      />
                      {formik.touched.name && formik.errors.name && (
                        <div className="invalid-feedback">
                          {formik.errors.name}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className={`form-control ${
                          formik.touched.password && formik.errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="请输入密码"
                        {...formik.getFieldProps("password")}
                        aria-describedby="passwordHelpBlock"
                      />
                      {formik.touched.password && formik.errors.password && (
                        <div className="invalid-feedback">
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "正在提交..." : "注册"}
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
