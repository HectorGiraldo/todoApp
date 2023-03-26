import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TodoAddComponent } from './todo-add.component';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;
  let store: MockStore;
  const initialState = 'todos';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoAddComponent],
      providers: [provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });
  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
