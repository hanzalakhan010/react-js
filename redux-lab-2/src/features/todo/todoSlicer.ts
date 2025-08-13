import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
}

export const initialState: TodoState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.todos.push(newTodo);
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
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
// This file defines a slice of the Redux state for managing todos, including actions to add, toggle, and remove todos.
// It uses createSlice from Redux Toolkit to simplify the creation of actions and reducers.
// The initial state is defined with an empty todos array, and each todo has an id, text, and completed status.
// The addTodo action creates a new todo with a unique id based on the current timestamp.
// The toggleTodo action flips the completed status of a todo by its id.
// The removeTodo action filters out a todo by its id from the todos array.
// This setup allows for easy management of todo items in a Redux store, leveraging the power of Redux Toolkit for cleaner and more maintainable code.