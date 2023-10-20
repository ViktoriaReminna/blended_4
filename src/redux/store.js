import { configureStore } from '@reduxjs/toolkit';
import { todosSliceReducer } from './todosSliceReducer';

export const store = configureStore({ reducer: todosSliceReducer.reducer });
