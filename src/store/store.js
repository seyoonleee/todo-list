import { create } from 'zustand';

const useStore = create(set => ({
  todoList: [],
  addTodo: content =>
    set(state => ({
      todoList: state.todoList.concat({
        id: state.todoList.length
          ? state.todoList[state.todoList.length - 1].id + 1
          : 1,
        content: content,
      }),
    })),
  removeTodo: id =>
    set(state => ({ todoList: state.todoList.filter(item => item.id !== id) })),
  updateTodo: (inputValue, id) =>
    set(state => ({
      todoList: state.todoList.map(item => {
        if (item.id === id) return { ...item, content: inputValue };
        else return item;
      }),
    })),
}));

export default useStore;
