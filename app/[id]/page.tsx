import { getTodoItem } from "@/api/todo-api";
import React from "react";
import TodoItem from "../components/todo/TodoItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DetailPageProops {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProops) => {
  const { id } = await params;
  const todoItem = await getTodoItem(id);
  return (
    <section>
      <div className="container p-2 mx-auto space-y-4">
        <TodoItem todo={todoItem} />
        <Link href={"/"}>
          <Button className="w-full">돌아가기</Button>
        </Link>
      </div>
    </section>
  );
};

export default DetailPage;
