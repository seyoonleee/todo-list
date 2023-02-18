import React from 'react';
import styled from 'styled-components';
import TodoCreation from './components/TodoCreation';
import TodoList from './components/TodoList';

const Main = () => {
  return (
    <Template>
      <Title>Todo List</Title>
      <TodoCreation />
      <TodoList />
    </Template>
  );
};

const Template = styled.div``;
const Title = styled.div`
  text-align: center;
  background-color: aqua;
`;

export default Main;
