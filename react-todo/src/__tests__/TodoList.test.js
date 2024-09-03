import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from './TodoList';

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
});