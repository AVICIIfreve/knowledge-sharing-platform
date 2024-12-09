export interface Question {
    id:number;
    title:string;
    description:string;
    createdAt:string;
    author:string;
}

export interface User {
    id:number;
    name:string;
    email:string;
    avatarUrl:string;
}

export interface Answer {
    id:number;
    content:string;
    author:string;
    timestamp:string;
    upvotes:number;
    downvotes:number;
}

