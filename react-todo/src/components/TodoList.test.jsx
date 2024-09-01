import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    render(<TodoList initialTodos={[{ id: 1, text: 'Test Todo', completed: false }]} />);
    const todoItem = screen.getByText('Test Todo');

    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  it('deletes a todo', () => {
    render(<TodoList initialTodos={[{ id: 1, text: 'Test Todo', completed: false }]} />);
    const deleteButton = screen.getByText('Delete');

    fireEvent.click(deleteButton);

    expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
  });

  it('does not add empty todos', () => {
    render(<TodoList />);
    const button = screen.getByText('Add Todo');

    fireEvent.click(button);

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('renders initial todos', () => {
    const initialTodos = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true },
    ];
    render(<TodoList initialTodos={initialTodos} />);

    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toHaveStyle('text-decoration: line-through');
  });
});