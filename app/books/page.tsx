"use client";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { fetchBooksAtom, tableDataAtom } from "./atom";

export const BooksPage = () => {
  const fetchBooks = useSetAtom(fetchBooksAtom);
  const books = useAtomValue(tableDataAtom);

  useEffect(() => {
    console.log("Fetching books...");
    fetchBooks();
  }, [fetchBooks]);
  return (
    <div className="bg-[#171717] min-h-screen text-white">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={books} />
      </div>
    </div>
  );
};

export default BooksPage;
