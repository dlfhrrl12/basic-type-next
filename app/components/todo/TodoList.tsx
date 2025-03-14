import { getTodos } from "@/api/todo-api";
import React from "react";
import TodoItes from "./TodoItem";

const TodoList = async () => {
  const todos = await getTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItes todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
