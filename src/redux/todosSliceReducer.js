import { createSlice } from '@reduxjs/toolkit';

export const todosSliceReducer = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodos: (state, { payload }) => {
      console.log(state);
      state.todos.push(payload);
    },
    deleteTodos: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    updateTodo: (state, { payload }) => {
      const { id, text } = payload;

      state.todos = state.todos.map(todo => {
        return todo.id === id ? { ...todo, text } : todo;
      });
    },
  },
});

export const { addTodos, deleteTodos, updateTodo } = todosSliceReducer.actions;
