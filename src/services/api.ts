import axios from "axios";
import { Question } from "../types";


const apiClient =axios.create({
    baseURL: 'http://localhost:5173/api',
    headers: {
        'Content-Type':'application/json',
    }
})

export const fetchQuestions = async (): Promise<Question[]>=>{
    const response = await apiClient.get('/question');
    return response.data;
}


export default apiClient;