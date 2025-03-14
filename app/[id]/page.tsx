import { getTodoItem } from "@/api/todo-api";
import React from "react";
import TodoItem from "../components/todo/TodoItem";

interface DetailPageProops {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProops) => {
  const { id } = await params;
  const todoItem = await getTodoItem(id);
  return (
    <section>
      <TodoItem todo={todoItem} />
    </section>
  );
};

export default DetailPage;
