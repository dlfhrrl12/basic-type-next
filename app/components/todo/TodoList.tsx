"use client";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "@/types/todo.type";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("/api/todos", {
        next: {
          tags: ["todos"],
        },
      });
      const data: Todo[] = await res.json();
      setTodos(data);
    };

    fetchTodos();
  }, []); // 빈 배열을 의존성 배열로 전달하여 최초 한 번만 실행되도록

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
