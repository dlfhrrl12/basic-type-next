"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Todo } from "@/types/todo.type";
import Link from "next/link";
import TodoDeleteButton from "./TodoDeleteButton";
import { useToggleTodoMutation } from "@/app/query/useTodoMutation";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();
  const { completed, id, text } = todo;

  // const handleToggleCompleted = async () => {
  //   await fetch(`/api/todos/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ completed: !completed }),
  //   });
  // };
  return (
    <article className="flex flex-row items-center justify-between p-2 border-2 rounded-md">
      <Link
        href={`/${id}`}
        className={cn("hover:underline", {
          "line-through": completed,
        })}
      >
        <h2>{text}</h2>
      </Link>
      <div className="space-x-2">
        <Button
          onClick={() => toggleTodoCompleted({ id, completed: !completed })}
          variant={"outline"}
        >
          {completed ? "취소" : "완료"}
        </Button>

        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
