import { Link } from "lucide-react";
import React from "react";
import { UserAction } from "../../auth/UserAction";

const TodoHeader = () => {
  return (
    <header className="mb-4">
      <div className="container mx-auto p-2 flex flex-row justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-bold">Todo List</h1>
        </Link>

        <UserAction />
      </div>
    </header>
  );
};

export default TodoHeader;
