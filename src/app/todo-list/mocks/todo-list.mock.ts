import { TodoListItemModel } from '../model/todo-list.model';

export namespace TodoListMock {
    export const TodoListMock: TodoListItemModel[] = [
        { id: 1, text: 'Todo 1', completed: false },
        { id: 2, text: 'Todo 2', completed: false },
        { id: 3, text: 'Todo 3', completed: false },
        { id: 4, text: 'Todo 4', completed: false },
        { id: 5, text: 'Todo 5', completed: false },
    ];
}
