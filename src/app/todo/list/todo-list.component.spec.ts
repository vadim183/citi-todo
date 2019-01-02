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

  it('init item items', () => {
    expect(component.items).toEqual(TODO_ITEMS);
  });


  it('update an item as complete', () => {
    let item = component.items[0];

    component.updateItem({ checked: true }, item);

    expect(item.isCompleted).toBeTruthy();
  });

  it('remove a item item', () => {
    let item = component.items[0];

    component.removeItem(item);

    expect(component.items).not.toEqual(jasmine.arrayContaining([item]));
  });

  describe('when adding a new item', () => {

  });

  const setupTodoService = () => {
    todoService = jasmine.createSpyObj('TodoService', ['getItems']);
    todoService.getItems.and.returnValue(TODO_ITEMS);
  };
});
