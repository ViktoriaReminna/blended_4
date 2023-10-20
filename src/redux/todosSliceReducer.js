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
  },
});
export const { addTodos, deleteTodos } = todosSliceReducer.actions;
