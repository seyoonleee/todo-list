import React, { useState } from 'react';
import useStore from '../../../store/store';

const TodoCreation = () => {
  const addTodo = useStore(state => state.addTodo);
  let [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        autoFocus
      />
      <button>추가</button>
    </form>
  );
};

export default TodoCreation;
