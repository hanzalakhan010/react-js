import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
const emptyTodo: Todo = { id: 0, text: "", completed: false };

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export interface TodoState {
  todoForm: Todo; // not Partial<Todo>
  todos: Todo[];
  editting?: boolean;
}

export const initialState: TodoState = {
  todoForm: { id: 0, text: "", completed: false },
  todos: [],
  editting: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state) => {
      if (state.todoForm.text) {
        const newTodo: Todo = {
          id: Date.now(),
          text: state.todoForm.text,
          completed: false,
        };
        state.todos.push(newTodo);
        state.todoForm = emptyTodo;
      }
    },
    handleChangeTodo: (state, action: PayloadAction<Partial<Todo>>) => {
      state.todoForm = { ...state.todoForm, ...action.payload };
    },
    handleEditTodo: (state, action: PayloadAction<Todo>) => {
      state.todoForm = action.payload;
      state.editting = true;
    },
    handleEditSubmit: (state) => {
      state.editting = false;
      const index = state.todos.findIndex((t) => t.id == state.todoForm.id);
      if (index === -1) return;
      state.todos[index] = state.todoForm;
      state.todoForm = emptyTodo;
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  toggleTodo,
  removeTodo,
  handleChangeTodo,
  handleEditSubmit,
  handleEditTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
// This file defines a slice of the Redux state for managing todos, including actions to add, toggle, and remove todos.
// It uses createSlice from Redux Toolkit to simplify the creation of actions and reducers.
// The initial state is defined with an empty todos array, and each todo has an id, text, and completed status.
// The addTodo action creates a new todo with a unique id based on the current timestamp.
// The toggleTodo action flips the completed status of a todo by its id.
// The removeTodo action filters out a todo by its id from the todos array.
// This setup allows for easy management of todo items in a Redux store, leveraging the power of Redux Toolkit for cleaner and more maintainable code.
