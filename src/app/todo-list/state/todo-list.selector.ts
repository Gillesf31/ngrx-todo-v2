import { AppState, TodoListStateModel } from './model/todo-list.state.model';
import { createSelector } from '@ngrx/store';

export const selectTodoList = (state: AppState) => state.todoList;

export const selectItems = createSelector(selectTodoList, (state: TodoListStateModel) => state.items);

export const selectLastItemId = createSelector(selectTodoList, (state: TodoListStateModel) => {
    return state.items.length > 0 ? state.items.slice(-1)[0].id : 0;
});
