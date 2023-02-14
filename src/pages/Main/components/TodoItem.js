import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useStore from '../../../store/store';

const TodoItem = ({ item }) => {
  const { removeTodo, updateTodo } = useStore(state => state);
  const [inputValue, setInputValue] = useState(item.content);

  useEffect(() => {
    updateTodo(inputValue, item.id);
  }, [inputValue]);

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
}))`
  border: none;
  &:focus {
    outline: none;
  }
`;

const Delete = styled.button``;

export default TodoItem;
