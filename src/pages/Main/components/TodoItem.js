import React, { useState } from 'react';
import styled from 'styled-components';
import useStore from '../../../store/store';

const TodoItem = ({ item }) => {
  const { todoList, addTodo, removeTodo } = useStore(state => state);
  console.log(item);
  const [inputValue, setInputValue] = useState(item.content);

  return (
    <Wrapper>
      <Content
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Delete onClick={() => removeTodo(item.id)}>x</Delete>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.input.attrs(() => ({
  type: 'text',
}))``;

const Delete = styled.button``;

export default TodoItem;
