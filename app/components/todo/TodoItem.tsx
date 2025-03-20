"use client";

import { cn } from "@/lib/utils";
import { Todo } from "@/types/todo.type";
import Link from "next/link";
import TodoDeleteButton from "./TodoDeleteButton";
import { useToggleTodoMutation } from "@/app/query/useTodoMutation";
import { useId } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "@/components/ui/checkbox";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();
  const { completed, id, text } = todo;
  const checkboxId = useId();

  const onCheckedChange = (checked: CheckedState) => {
    if (checked === "indeterminate") return;

    toggleTodoCompleted({ id, completed: checked });
  };

  return (
    <article className="flex flex-row items-center justify-between p-2 border-2 rounded-md">
      <div className="flex flex-row gap-4 items-center">
        <Checkbox
          id={checkboxId}
          checked={completed}
          onCheckedChange={onCheckedChange}
        />
        <Link
          href={`/${id}`}
          className={cn("hover:underline", {
            "line-through": completed,
          })}
        >
          <h2>{text}</h2>
        </Link>
      </div>
      <div className="space-x-2">
        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
