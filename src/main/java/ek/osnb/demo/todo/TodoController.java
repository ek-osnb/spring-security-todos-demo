package ek.osnb.demo.todo;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
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
    List<Todo> myTodos(Authentication auth) {
        return todos.findByOwner(auth.getName());
    }

    // TODO Exercise 3: Save the todo with the logged-in user as its owner
    // A form post (title=...), just like the login form

    record CreateTodoRequest(String title) {}


    @PostMapping("/api/todos")
    @ResponseStatus(HttpStatus.CREATED)
    Todo addTodo(@RequestBody CreateTodoRequest createTodoRequest, Authentication auth) {
//        throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED);
        Todo newTodo = new Todo(createTodoRequest.title(), auth.getName());
        return todos.save(newTodo);
    }

    @GetMapping("/api/admin/todos")
    List<Todo> allTodos() {
        return todos.findAll();
    }
}
