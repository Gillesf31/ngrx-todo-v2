import { Action, createReducer, on } from '@ngrx/store';
import { TodoListStateModel } from './model/todo-list.state.model';
import { addTodoItem, loadTodoList, removeTodoItem, updateTodoItem } from './todo-list.action';

export const initialState: TodoListStateModel = {
    items: [],
};

const _todoListReducer = createReducer(
    initialState,
    on(loadTodoList, (state, { items }) => {
        return { ...state, items };
    }),
    on(addTodoItem, (state, { item }) => {
        return { ...state, items: [...state.items, item] };
    }),
    on(updateTodoItem, (state, { item }) => {
        return { ...state, items: [...state.items.filter((i) => i.id !== item.id), item] };
    }),
    on(removeTodoItem, (state, { id }) => {
        return { ...state, items: [...state.items.filter((i) => i.id !== id)] };
    })
);

export const reducer: any = (state: TodoListStateModel, action: Action) => {
    return _todoListReducer(state, action);
};
