import React from "react";
import div from "../components/Nav";
import { Question, Answer } from "../types/index";

// 临时数据
export const mockQuestion: Question = {
  id: 1,
  title: "How to implement a login page in React?",
  description:
    "I am learning React and want to create a login page with a backend.",
  createdAt: "2024-12-05T12:00:00Z",
  author: "JohnDoe",
};

export const mockAnswers: Answer[] = [
  {
    id: 1,
    content: "You can use React hooks to manage state and Axios for API calls.",
    author: "JaneSmith",
    timestamp: "2024-12-05T13:00:00Z",
    upvotes: 10,
    downvotes: 2,
  },
  {
    id: 2,
    content: "Here is a guide for building a full-stack login system.",
    author: "JohnDoe",
    timestamp: "2024-12-06T14:30:00Z",
    upvotes: 5,
    downvotes: 1,
  },
];

interface Props {
  question: Question;
  answers: Answer[];
}

const QuestionDetail = ({ question, answers }: Props) => {
  return (
    <>
      <div className="container mt-4">
        {/* 问题标题 */}
        <h1>{question.title}</h1>
        {/* 问题描述 */}
        <p className="text-muted">{question.description}</p>

        {/* 回答列表 */}
        <h3>Answers</h3>
        {answers.length > 0 ? (
          answers.map((answer, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <p>{answer.content}</p>
                <div className="text-muted">
                  By {answer.author} |{answer.timestamp}
                </div>
                <button className="btn btn-sm btn-outline-primary me-2">
                  Upovte
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                  Downvote
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No answers yet.</p>
        )}
        {/* 回答输入 */}
        <div className="mt-4">
          <h4>Submit Your Answer</h4>
          <textarea
            name="form-control"
            placeholder="Write your answer here..."
          ></textarea>
          <button className="btn btn-primary mt-2">Submit</button>
        </div>
      </div>
    </>
  );
};

export default QuestionDetail;
