// // interface Post {
// //   id: number;
// //   title: string;
// //   content: string;
// //   author: string;
// //   date: string;
// //   category: string;
// // }

// // const Home = async () => {
// //   const data = await fetch("https://api.vercel.app/blog");
// //   const posts = (await data.json()) as Post[];

// //   return (
// //     <div>
// //       {posts.map((post) => (
// //         <div key={post.id}>{post.title}</div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Home;

// import { Suspense } from "react";
// import { Posts } from "./posts";

// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
//   date: string;
//   category: string;
// }

// const getPosts = async () => {
//   await promise(2000);
//   const data = await fetch("https://api.vercel.app/blog");
//   return (await data.json()) as Post[];
// };

// const Home = () => {
//   const posts = getPosts();
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Posts posts={posts} />
//     </Suspense>
//   );
// };

// export default Home;

// export const promise = (ms: number) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error, isLoading } = useSWR("https://api.vercel.app/blog", fetcher);
  console.log(data, "test");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message} </div>;

  return (
    <ul>
      {data.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Home;
// TODO: There is a bug in the code. Fix it! (CORS issue)