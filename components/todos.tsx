"use client"

import {FC, useOptimistic, useRef} from "react";
import {Todo} from "@prisma/client";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useFormStatus} from 'react-dom'
import {createTodoAction} from "@/app/actions";
import {toast} from "sonner";
import TodoItem from "@/components/todo-item";

interface Props {
    todos: Todo[]
}

const Todos: FC<Props> = ({todos}) => {
    const formRef = useRef<HTMLFormElement>(null)
    const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, (state, newTodo: Todo) => {
        return [...state, newTodo]
    })
    const action = async (data: FormData) => {
        const title = data.get('title')
        if (typeof title !== "string") return

        const newTodo = {
            id: crypto.randomUUID(),
            title,
            isCompleted: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        formRef.current?.reset()
        addOptimisticTodo(newTodo)
        const result = await createTodoAction(title)
        if (result?.error) {
            toast.error(result.error)
        }

    }


    return (
        <div>
            <form action={action} ref={formRef} className="flex">
                <Input type="text" name="title" placeholder="Add a new todo"/>
                <SubmitButton/>
            </form>

            <h2 className="mt-10 border-b pb-2 font-serif text-lg font-medium">
                Previous Todos:
            </h2>

            <ul className="mt-4 flex flex-col gap-1">
                {optimisticTodos?.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
            </ul>

        </div>
    )

}

export default Todos;

const SubmitButton = () => {
    const {pending} = useFormStatus()

    return (
        <Button type="submit" className="ml-2" disabled={pending}>Add Todo</Button>
    )
}

