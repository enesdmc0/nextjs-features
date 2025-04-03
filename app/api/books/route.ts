import { NextResponse } from "next/server";

export type Book = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};

export async function GET(request: Request) {
    const delay = Math.floor(Math.random() * 1500) + 500;
    await new Promise((resolve) => setTimeout(resolve, delay));

    return NextResponse.json(data);
}


const data: Book[] = [
    {
        id: "1",
        amount: 100,
        status: "pending",
        email: "test@example.com",
    },
    {
        id: "2",
        amount: 200,
        status: "processing",
        email: "test1@example.com",
    },
    {
        id: "3",
        amount: 300,
        status: "success",
        email: "test2@example.com",
    },
    {
        id: "4",
        amount: 400,
        status: "failed",
        email: "test3@example.com",
    },
];