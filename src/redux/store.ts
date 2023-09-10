import { configureStore } from "@reduxjs/toolkit";
import formReducer from './Reducers/formSlice';
import bookReducer from './Reducers/booksSlice'

export const setupStore = configureStore({
  reducer: {
    query: formReducer,
    books: bookReducer
},
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;

