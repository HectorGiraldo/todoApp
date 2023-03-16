import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const estadoinicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de ironman'),
  new Todo('Robar escudo de Capitan America'),
];

export const todoReducer = createReducer(
  estadoinicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)])
);
