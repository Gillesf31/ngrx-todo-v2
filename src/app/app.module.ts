import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TodoListComponent } from './todo-list/todo-list.component';
import { reducer as todoListReducer } from './todo-list/state/todo-list.reducer';

@NgModule({
    declarations: [AppComponent, TodoListComponent],
    imports: [
        StoreModule.forRoot({ todoList: todoListReducer }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent, TodoListComponent],
})
export class AppModule {}
