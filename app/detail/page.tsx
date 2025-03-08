import Link from "next/link";
import React from "react";

const Detailpage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await data.json();
  return (
    <div>
      <h1>{todo.title}</h1> <br />
      <Link href="/">home</Link>
    </div>
  );
};

export default Detailpage;
