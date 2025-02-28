import { Suspense } from "react";
import { Posts } from "../posts";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const getPosts = async () => {
  //   await promise(2000);
  const data = await fetch("https://api.vercel.app/blog");
  return (await data.json()) as Post[];
};

const SuspenseHook = () => {
  const posts = getPosts();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  );
};

export default SuspenseHook;

export const promise = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
