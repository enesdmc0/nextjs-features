import React, {FC, useOptimistic, useTransition} from 'react';
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {Todo} from "@prisma/client";
import {formatDate} from '@/lib/utils'
import {updateTodoAction} from "@/app/actions";
import {toast} from "sonner";

interface Props {
    todo: Todo
}

interface TestProps {
    isCompleted: boolean
    updatedAt: Date
}

const TodoItem: FC<Props> = ({todo}) => {
    const [isPending, startTransition] = useTransition()
    const [optimisticTodo, updateTodo] = useOptimistic(
        todo,
        (todo, {isCompleted, updatedAt}: TestProps) => {
            return {...todo, isCompleted, updatedAt}
        }
    )

    const handleChange = async (isCompleted: boolean) => {
        const updatedAt = new Date()
        updateTodo({isCompleted, updatedAt})

        const result = await updateTodoAction(optimisticTodo.id, isCompleted)

        if (result?.error) {
            toast.error(result.error)
        }

    }

    return (
        <li className="flex items-center gap-3">
            <Checkbox id={optimisticTodo.id} defaultChecked={optimisticTodo.isCompleted}
                      checked={optimisticTodo.isCompleted}
                      onCheckedChange={checked => startTransition(() => handleChange(checked as boolean))}
                      className="peer"/>
            <Label htmlFor={optimisticTodo.id}
                   className="cursor-pointer peer-data-[state=checked]:text-gray-500 peer-data-[state=checked]:line-through ">{optimisticTodo.title}</Label>
            <span
                className="ml-auto text-sm text-gray-500 peer-data-[state=checked]:text-gray-500 peer-data-[state=checked]:line-through ">
                {formatDate(optimisticTodo.updatedAt)}
            </span>
        </li>
    );
};

export default TodoItem;
