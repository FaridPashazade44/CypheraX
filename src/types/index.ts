// src/types/index.ts

export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
}

export interface Post {
    id: string;
    userId: string;
    title: string;
    content: string;
    createdAt: Date;
}

export interface Comment {
    id: string;
    postId: string;
    userId: string;
    content: string;
    createdAt: Date;
}

export interface Friendship {
    id: string;
    userId1: string;
    userId2: string;
    createdAt: Date;
}

export interface Message {
    id: string;
    senderId: string;
    recipientId: string;
    content: string;
    createdAt: Date;
}

export interface Notification {
    id: string;
    userId: string;
    type: string;
    message: string;
    createdAt: Date;
}