import { of } from 'rxjs';

import { TodoItem } from '../item.model';
import { TodoService } from '../todo.service';
import { TodoListComponent } from './todo-list.component';

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

  let spy: jasmine.Spy;

  beforeEach(() => {
    spy = jasmine.createSpy('Spy');
    setupTodoService();


    component = new TodoListComponent(todoService);

    component.ngOnInit();
  });

  it('should init item items$', () => {
    component.items$.subscribe(spy);
    expect(spy).toHaveBeenCalledWith(TODO_ITEMS);
  });


  it('should  update an item as complete', () => {
    component.updateItem({ checked: true }, TODO_ITEMS[0]);

    component.items$.subscribe(spy);

    expect(getSpyCallArg()[0]).toEqual({
      ...TODO_ITEMS[0],
      isCompleted: true
    });
  });

  it('should remove a item item', () => {
    component.removeItem(TODO_ITEMS[0]);

    component.items$.subscribe(spy);

    expect(getSpyCallArg().length).toEqual(TODO_ITEMS.length - 1);
  });

  describe('when adding a new item', () => {

  });

  const setupTodoService = () => {
    todoService = jasmine.createSpyObj('TodoService', ['getItems', 'updateItem', 'removeItem']);

    todoService.getItems.and.returnValue(of(TODO_ITEMS));

    todoService.updateItem.and.callFake((isCompleted: boolean, item: TodoItem) => {
    });

    todoService.removeItem.and.callFake((item: TodoItem) => {
    });
  };

  const getSpyCallArg = () => spy.calls.argsFor(0)[0];
});
