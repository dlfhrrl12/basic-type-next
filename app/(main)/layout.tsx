import { PropsWithChildren } from "react";
import TodoHeader from "../components/todo/layout/TodoHeader";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <TodoHeader />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
