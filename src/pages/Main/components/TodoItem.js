import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useStore from '../../../store/store';

const TodoItem = ({ item }) => {
  const removeTodo = useStore(state => state.removeTodo);
  const updateTodo = useStore(state => state.updateTodo);
  const [inputValue, setInputValue] = useState(item.content);

  return (
    <Wrapper>
      <Content
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={() => updateTodo(inputValue, item.id)}>수정</button>
      <button onClick={() => removeTodo(item.id)}>x</button>
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

export default TodoItem;
