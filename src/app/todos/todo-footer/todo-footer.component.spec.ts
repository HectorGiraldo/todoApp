import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TodoFooterComponent } from './todo-footer.component';

describe('TodoFooterComponent', () => {
  let component: TodoFooterComponent;
  let fixture: ComponentFixture<TodoFooterComponent>;
  let store: MockStore;
  const initialState = 'todos';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFooterComponent],
      providers: [provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });
  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TodoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
