import { getTodoItem, getTodos } from "@/api/todo-api";
import { FilterType } from "@/store/useTodoFilterStore";
import { useQuery } from "@tanstack/react-query";

export const useTodosQuery = (filter: FilterType) => {
  // 외부에서 데이터를 가져오는 hook이다.
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoItemQuery = (id: string) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoItem(id),
  });
};
