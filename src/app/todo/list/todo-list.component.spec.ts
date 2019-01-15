import { of } from 'rxjs';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../todo.service';

const TODO_ITEMS = [
  {
    title: 'simple-item-1',
    isCompleted: false
  },
  {
    title: 'simple-item-2',
    isCompleted: false
  }
];

describe('TodoListComponent', () => {
  let component: TodoListComponent;

  let todoService: jasmine.SpyObj<TodoService>;

  beforeEach(() => {
    setupTodoService();

    component = new TodoListComponent(todoService);

    component.ngOnInit();
  });

  it('should init item items$', () => {

  });


  it('should  update an item as complete', () => {

  });

  it('should remove a item item', () => {

  });

  describe('when adding a new item', () => {

  });

  const setupTodoService = () => {
    todoService = jasmine.createSpyObj('TodoService', ['getItems', 'updateItem', 'removeItem']);
    todoService.getItems.and.returnValue(of(TODO_ITEMS));
  };
});
