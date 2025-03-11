import { Todo } from "@/types/todo.type";
import React from "react";

const SSGPage = async () => {
  const res = await fetch("http://localhost:3000/todos", {
    cache: "force-cache",
  });
  const data: Todo[] = await res.json();
  return <div>SSGPage: {JSON.stringify(data)}</div>;
};

export default SSGPage;
