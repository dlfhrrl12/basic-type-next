"use client";

import { useCreateTodoMutation } from "@/app/query/useTodoMutation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";

const TodoForm = () => {
  const { mutateAsync: createTodo } = useCreateTodoMutation();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = formData.get("todo-text") as string;

    await createTodo(todoText);

    form.reset();
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full items-center space-x-2 bg-gray-100 p-3 rounded-md"
    >
      <Input
        type="text"
        name="todo-text"
        required
        placeholder="할 일을 입력하세요"
        className="bg-white"
      />
      <Button type="submit">추가하기</Button>
    </form>
  );
};

export default TodoForm;
