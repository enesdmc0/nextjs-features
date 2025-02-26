"use client";
import { use } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

interface Props {
  posts: Promise<Post[]>;
}

export const Posts = ({ posts }: Props) => {
  const allPosts = use(posts);
  return (
    <div>
      {allPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};
