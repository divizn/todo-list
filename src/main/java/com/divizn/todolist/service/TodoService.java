package com.divizn.todolist.service;

import com.divizn.todolist.model.Todo;

import java.util.List;

public interface TodoService {
    public Todo saveTodo(Todo todo);
    public List<Todo> getAllTodos();
}
