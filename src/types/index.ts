export interface Question {
    id:number;
    title:string;
    description:string;
    createdAt:string;
    author:string;
}

export interface User {
    id:string;
    name:string;
    email:string;
    avatarUrl:string;
}