"use client";
import { useTodoItemQuery } from "@/app/query/useTodoQuery";
import LoadingIndicator from "../LoadingIndicator";
import TodoItem from "./TodoItem";

interface todoDetailProps {
  id: string;
}

const TodoDetail = ({ id }: todoDetailProps) => {
  const { data: todo } = useTodoItemQuery(id);
  if (!todo) {
    return <LoadingIndicator />;
  }
  return (
    <div>
      <TodoItem todo={todo} />
    </div>
  );
};

export default TodoDetail;
