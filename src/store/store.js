import { create } from 'zustand';

const useStore = create(set => ({
  todoList: [
    {
      id: 1,
      content: '할일1',
    },
    {
      id: 2,
      content: '할일2',
    },
    {
      id: 3,
      content: '할일3',
    },
  ],
  addTodo: content =>
    set(state => ({
      todoList: state.todoList.concat({
        id: state.todoList[state.todoList.length - 1].id + 1,
        content: content,
      }),
    })),
  removeTodo: id =>
    set(state => ({ todoList: state.todoList.filter(item => item.id !== id) })),
}));

export default useStore;
