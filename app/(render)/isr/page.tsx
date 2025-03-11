import { Todo } from "@/types/todo.type";
import React from "react";

const ONE_MINUTE_SECONDES = 60;

const ISRPage = async () => {
  const res = await fetch("http://localhost:3000/todos", {
    next: {
      revalidate: ONE_MINUTE_SECONDES,
    },
  });
  const data: Todo[] = await res.json();
  return <div>ISRPage: {JSON.stringify(data)}</div>;
};

export default ISRPage;
