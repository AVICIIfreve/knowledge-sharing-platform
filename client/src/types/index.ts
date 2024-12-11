export interface Question {
    id:number;
    title:string;
    description:string;
    createdAt:string;
    updatedAt:string;
    author:number;//外键。指向提问者用户ID
}

export interface User {
    id:number;
    name:string;
    email:string;
    createdAt:string; //用户创建时间
    updatedAt:string; //用户更新时间
    avatarUrl:string; //头像url
}

export interface Answer {
    id:number;
    content:string;
    author:string;
    createdAt:string;
    updatedAt:string; //用户更新时间
    upvotes:number; //赞同数
    downvotes:number; //不赞同数
}

