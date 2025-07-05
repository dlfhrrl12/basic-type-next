import { getTodoItem, getTodos } from "@/api/todo-api";
import { FilterType } from "@/store/useTodoFilterStore";
import { Todo } from "@/types/todo.type";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";

export const useTodosQuery = (filter: FilterType) => {
  const SupabaseClient = createClient();
  // 외부에서 데이터를 가져오는 hook이다.
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(SupabaseClient, filter),
  });
};

export const useTodoItemQuery = (id: Todo["id"]) => {
  const SupabaseClient = createClient();
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoItem(SupabaseClient, id),
  });
};
