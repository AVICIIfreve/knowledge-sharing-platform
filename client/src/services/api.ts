import axios from "axios";
import { Question } from "../types";


const apiClient =axios.create({
    baseURL: 'http://localhost:5173/api',
    headers: {
        'Content-Type':'application/json',
    }
})

export const fetchQuestions = async (): Promise<Question[]>=>{
   return Promise.resolve([
    {
      id: 1,
      title: "如何使用 React 创建组件？",
      description: "React 组件是用户界面的基础块，您可以通过编写 JSX 来定义它们。",
      createdAt: "2024-12-06T14:30:00Z",
      updatedAt: "2024-12-06T14:30:00Z",
      author:1
    },
    {
      id: 2,
      title: "如何使用 React 创建组件？",
      description: "React 组件是用户界面的基础块，您可以通过编写 JSX 来定义它们。",
      createdAt: "2024-12-06T14:30:00Z",
      updatedAt: "2024-12-06T14:30:00Z",
      author:2
    },
    {
      id: 3,
      title: "如何使用 React 创建组件？",
      description: "React 组件是用户界面的基础块，您可以通过编写 JSX 来定义它们。",
      createdAt: "2024-12-06T14:30:00Z",
      updatedAt: "2024-12-06T14:30:00Z",
      author:3
    }
  ])
   
    // const response = await apiClient.get('/question');
    // return response.data;
}


export default apiClient;