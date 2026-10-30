package ek.osnb.demo.todo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
class TodoController {

    private final TodoRepository todos;

    TodoController(TodoRepository todos) {
        this.todos = todos;
    }

    // TODO Exercise 3: Return only the todos owned by the logged-in user
    @GetMapping("/api/todos")
    List<Todo> myTodos() {
        return todos.findAll();
    }

    // TODO Exercise 3: Save the todo with the logged-in user as its owner
    // A form post (title=...), just like the login form
    @PostMapping("/api/todos")
    @ResponseStatus(HttpStatus.CREATED)
    Todo addTodo(@RequestParam String title) {
        throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED);
    }

    @GetMapping("/api/admin/todos")
    List<Todo> allTodos() {
        return todos.findAll();
    }
}
