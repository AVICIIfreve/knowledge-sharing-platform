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
      "id": 1,
      "title": "如何使用 React 创建组件？",
      "description": "React 组件是用户界面的基础块，您可以通过编写 JSX 来定义它们。"
    },
    {
      "id": 2,
      "title": "什么是状态管理？",
      "description": "状态管理是跟踪应用中数据变化的过程，例如使用 React 的 useState 或 Redux。"
    },
    {
      "id": 3,
      "title": "如何使用 TailwindCSS 定义样式？",
      "description": "通过使用预定义的类，例如 'p-4', 'bg-gray-100', 快速设计布局。"
    }
  ])
   
    // const response = await apiClient.get('/question');
    // return response.data;
}


export default apiClient;