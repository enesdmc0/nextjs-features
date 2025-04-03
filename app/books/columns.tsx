"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: () => <div className="text-white"> Status </div>,
    cell: ({ row }) => {
      const status = row.original.status;
      return <div> {status} </div>;
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="text-white"> Email </div>,
    cell: ({ row }) => {
      const email = row.original.email;
      return <div> {email} </div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-white"> Amount </div>,
    cell: ({ row }) => {
      const amount = row.original.amount;
      return <div> {amount} </div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Update</DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href={`/books/${payment.id}`}>
              <DropdownMenuItem>Detail</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
