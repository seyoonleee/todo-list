import { create } from 'zustand';
import produce from 'immer';

const useStore = create((set, get) => {
  const createKey = () => {
    const todoList = get().todoList;
    return todoList.length ? todoList.at(-1).id + 1 : 1;
  };

  const findIdx = (arr, id) => {
    return arr.findIndex(e => e.id === id);
  };

  return {
    todoList: [],

    addTodo: inputValue =>
      set(state => ({
        todoList: produce(state.todoList, draft => {
          draft.push({ id: createKey(), content: inputValue });
        }),
      })),

    removeTodo: id =>
      set(state => ({
        todoList: produce(state.todoList, draft => {
          draft.splice(findIdx(draft, id), 1);
        }),
      })),

    updateTodo: (inputValue, id) =>
      set(state => ({
        todoList: produce(state.todoList, draft => {
          draft[findIdx(draft, id)].content = inputValue;
        }),
      })),
  };
});

export default useStore;
