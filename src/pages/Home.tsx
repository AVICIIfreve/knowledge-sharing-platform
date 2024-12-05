import React, { useEffect, useState } from "react";
import { Question } from "../types";
import { fetchQuestions } from "../services/api";

const Home = () => {
  // 定义状态变量，存储问题列表
  const [question, setQuestion] = useState<Question[]>([]);

  // 使用 useEffect 在组件加载时调用 API
  useEffect(() => {
    fetchQuestions().then(setQuestion).catch(console.error);
  }, []);

  return (
    <>
      <div className="p-6 bg-gray-100">
        <h1 className="text-2xl font-bold text-center">知识分享平台</h1>
      </div>
      <div>
        <h1>问题列表</h1>
        {/* {question.map((q) => (
          <div key={q.id}>
            <h2>{q.title}</h2>
            <p>{q.description}</p>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Home;
