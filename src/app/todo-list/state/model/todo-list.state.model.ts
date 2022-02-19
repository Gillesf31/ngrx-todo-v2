import { TodoListItemModel } from '../../model/todo-list.model';

export interface TodoListStateModel {
    items: TodoListItemModel[];
}

export interface AppState {
    todoList: TodoListStateModel;
}
