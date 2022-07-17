package com.divizn.todolist.controller;

import com.divizn.todolist.model.Todo;
import com.divizn.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
@CrossOrigin
public class TodoController {
    @Autowired
    private TodoService todoService;

    @PostMapping("/add")
    public String add(@RequestBody Todo todo) {
        todoService.saveTodo(todo);
        return "New todo item is added";
    }

    @GetMapping("/getAll")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

}
