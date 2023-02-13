import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './components/TodoItem';
import useStore from '../../store/store';

const Main = () => {
  const { todoList, addTodo, removeTodo } = useStore(state => state);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // console.log(addTodo({ id: 4, content: '할일4' }));
    // removeTodo(2);
  }, []);

  console.log(todoList);

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(inputValue);
  };

  return (
    <Template>
      <Title>Todo List</Title>
      <WrapperInsert onSubmit={handleSubmit}>
        <input onChange={e => setInputValue(e.target.value)} />
        <button>추가</button>
      </WrapperInsert>
      {todoList.map(item => (
        <TodoItem key={item.id} item={item} />
      ))}
    </Template>
  );
};

const Template = styled.div``;
const Title = styled.div`
  text-align: center;
  background-color: aqua;
`;
const WrapperInsert = styled.form``;
const TodoList = styled.div``;
const TodoListItem = styled.div``;

export default Main;
