import React, { useEffect, useState } from "react";
import { Question } from "../types";
import { fetchQuestions } from "../services/api";
import { data } from "react-router-dom";

const Home = () => {
  // 定义状态变量，存储问题列表
  const [questions, setQuestions] = useState<Question[]>([]);
  // 加载状态
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // 错误状态
  const [error, setError] = useState<string | null>(null);

  // 使用 useEffect 在组件加载时调用 API
  useEffect(() => {
    fetchQuestions()
      .then((data) => {
        setQuestions(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("加载数据失败，请稍后再试。");
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-center">知识分享平台</h1>
        {/* 显示加载状态 */}
        {isLoading && <p className="text-center text-blue-500">Loding</p>}
        {/* 显示错误信息 */}
        {error && <p className="text-center text-red-500">{error}</p>}
      </div>

      {/* 显示问题列表 */}
      {!isLoading && !error && (
        <div className="space-y-4">
          {questions.length > 0 ? (
            questions.map((q) => (
              <div
                key={q.id}
                className="p-4 bg-white rounded shadow hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold">{q.title}</h2>
                <p className="text-gray-600">{q.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">暂无问题</p>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
