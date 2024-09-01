import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TodoList from '../TodoList'

describe('TodoList', () => {
  it('renders TodoList component', () => {
    render(<TodoList />)
    expect(screen.getByText('Todo List')).toBeInTheDocument()
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument()
  })

  it('adds a new todo', () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText('Add a new todo')
    const button = screen.getByText('Add Todo')

    fireEvent.change(input, { target: { value: 'New Todo' } })
    fireEvent.click(button)

    expect(screen.getByText('New Todo')).toBeInTheDocument()
  })

  it('toggles a todo', () => {
    render(<TodoList />)
    const todoItem = screen.getByText('Learn React')

    fireEvent.click(todoItem)

    expect(todoItem).toHaveStyle('text-decoration: line-through')
  })

  it('deletes a todo', () => {
    render(<TodoList />)
    const deleteButton = screen.getAllByText('Delete')[0]

    fireEvent.click(deleteButton)

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument()
  })
})