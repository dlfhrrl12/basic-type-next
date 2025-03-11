import { Todo } from "@/types/todo.type";
import React from "react";

const SSRPage = async () => {
  const res = await fetch("http://localhost:3000/todos");
  const data: Todo[] = await res.json();
  return <div>SSRPage: {JSON.stringify(data)}</div>;
};

export default SSRPage;
