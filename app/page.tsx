import React from "react";
import TodoList from "./components/todo/TodoList";
import TodoForm from "./components/todo/TodoForm";

const HomePage = () => {
  return (
    <section>
      <div className="container p-2 mx-auto">
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
};

export default HomePage;
