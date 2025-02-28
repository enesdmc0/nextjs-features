interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const ServerFetch = async () => {
  //await promise(1000);
  const data = await fetch("https://api.vercel.app/blog");
  const posts = (await data.json()) as Post[];

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default ServerFetch;

// const promise = (ms: number) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };
