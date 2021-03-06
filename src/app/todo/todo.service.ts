import { Observable, of } from 'rxjs/index';

import { TodoItem } from './item.model';
import { TODO_ITEMS } from './items.constant';

export class TodoService {

  getItems(): Observable<TodoItem[]> {
    return of(TODO_ITEMS);
  }

  updateItem(isCompleted: boolean, item: TodoItem): void {
  }

  removeItem(item: TodoItem): void {

  }
}
