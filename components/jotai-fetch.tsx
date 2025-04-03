"use client";
import { useAtom } from "jotai";
import { postDataAtom, postIdAtom } from "@/atom";

export const JotaiFetch = () => {
  const [id, setId] = useAtom(postIdAtom);
  const [{ by, text, time }] = useAtom(postDataAtom);

  const next = () => setId((id) => id + 1);

  return (
    <div className="bg-black text-white p-10 space-y-4 h-screen">
      <div className="flex gap-10 flex-col">
        <span>{id}</span>
        <span>{by}</span>
        <span>{text}</span>
        <span>{new Date(time * 1000).toLocaleDateString("en-US")}</span>
      </div>
      <button onClick={next} className="ml-auto w-full">
        →
      </button>
    </div>
  );
};
