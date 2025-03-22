'use client';
import { useTodoItemQuery } from '@/app/query/useTodoQuery';
import LoadingIndicator from '../LoadingIndicator';
import TodoItem from './TodoItem';
import { Todo } from '@/types/todo.type';

interface todoDetailProps {
  id: Todo['id'];
}

const TodoDetail = ({ id }: todoDetailProps) => {
  const { data: todo } = useTodoItemQuery(id);
  if (!todo) {
    return <LoadingIndicator />;
  }
  return (
    <div>
      <TodoItem todo={todo} />
    </div>
  );
};

export default TodoDetail;
