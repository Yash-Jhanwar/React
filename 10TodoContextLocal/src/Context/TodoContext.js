import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todos",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    togggleComplete: (id) => {},
});

export const useTodo = () => {return useContext(TodoContext)};

export const TodoProvider = TodoContext.Provider;