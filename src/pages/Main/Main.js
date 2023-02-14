import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './components/TodoItem';
import useStore from '../../store/store';

const Main = () => {
  const { todoList, addTodo } = useStore(state => state);
  const [inputValue, setInputValue] = useState('');
  console.log(todoList);

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <Template>
      <Title>Todo List</Title>
      <WrapperInsert onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          autoFocus
        />
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

export default Main;
