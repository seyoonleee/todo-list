import React from 'react';
import useStore from '../../../store/store';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useStore(state => state.todoList);

  return (
    <>
      {todoList.map(item => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default TodoList;
