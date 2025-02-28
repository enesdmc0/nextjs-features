"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ClientSWR = () => {
  const { data, error, isLoading } = useSWR("/api/blog", fetcher);

  if (isLoading) return <div className="size-full bg-red-500 rounded-xl">Loading...</div>;
  if (error) return <div>Error: {error.message} </div>;

  return (
    <ul>
      {data.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default ClientSWR;
