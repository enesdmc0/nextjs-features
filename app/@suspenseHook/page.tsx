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
  const data = await fetch("https://api.vercel.app/blog");
  return (await data.json()) as Post[];
};

const SuspenseHook = async () => {
  //await promise(2000);
  const posts = getPosts();
  return (
    <Suspense fallback={<div className="size-full bg-blue-500 rounded-xl">Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  );
};

export default SuspenseHook;

// const promise = (ms: number) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };
