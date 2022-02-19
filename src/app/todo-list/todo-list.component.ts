import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { TodoListItemModel } from './model/todo-list.model';
import { TodoListMock } from './mocks/todo-list.mock';
import { Store } from '@ngrx/store';
import { addTodoItem, loadTodoList, removeTodoItem, updateTodoItem } from './state/todo-list.action';
import { AppState } from './state/model/todo-list.state.model';
import { selectItems, selectLastItemId } from './state/todo-list.selector';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
    todoList$: Observable<any> | undefined;

    constructor(private readonly store: Store<AppState>) {}

    ngOnInit(): void {
        this.store.dispatch(loadTodoList({ items: TodoListMock.TodoListMock }));
        this.todoList$ = this.store.select(selectItems);
    }

    toggleTodo(todo: TodoListItemModel): void {
        const updatedTodoItem: TodoListItemModel = { ...todo, completed: !todo.completed };
        this.store.dispatch(updateTodoItem({ item: updatedTodoItem }));
    }

    addTodo(todoText: string): void {
        this.store
            .select(selectLastItemId)
            .pipe(take(1))
            .subscribe((lastItemId) => {
                const newTodoItem: TodoListItemModel = {
                    id: lastItemId + 1,
                    text: todoText,
                    completed: false,
                };
                this.store.dispatch(addTodoItem({ item: newTodoItem }));
            });
    }

    removeTodo(id: number): void {
        this.store.dispatch(removeTodoItem({ id }));
    }
}
