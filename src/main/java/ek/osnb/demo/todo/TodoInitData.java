package ek.osnb.demo.todo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
class TodoInitData implements CommandLineRunner {

    private final TodoRepository todos;

    TodoInitData(TodoRepository todos) {
        this.todos = todos;
    }

    @Override
    public void run(String... args) {
        todos.save(new Todo("Water the plants", "anna"));
        todos.save(new Todo("Book the dentist", "ben"));
        todos.save(new Todo("Plan the surprise party", "anna"));
    }
}
