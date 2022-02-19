import { createAction, props } from '@ngrx/store';
import { TodoListItemModel } from '../model/todo-list.model';

export const loadTodoList = createAction('[TodoList Component] Load TodoList', props<{ items: TodoListItemModel[] }>());
export const addTodoItem = createAction('[TodoList Component] Add TodoList Item', props<{ item: TodoListItemModel }>());
export const updateTodoItem = createAction(
    '[TodoList Component] Update TodoList Item',
    props<{ item: TodoListItemModel }>()
);
export const removeTodoItem = createAction('[TodoList Component] Remove TodoList Item', props<{ id: number }>());
