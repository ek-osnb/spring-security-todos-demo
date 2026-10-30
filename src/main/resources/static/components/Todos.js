import { getTodos, addTodo } from "../api.js";

export function createTodos(me) {
    const section = document.createElement("section");

    section.innerHTML = `
        <h2>My Todos</h2>

        <button id="admin-button" type="button" hidden>
            Show everyone's todos
        </button>

        <ul id="todo-list"></ul>

        <form id="todo-form">
            <input name="title"
                   placeholder="New todo..."
                   required>
            <button type="submit">Add todo</button>
        </form>

        <p class="message"></p>
    `;

    const heading = section.querySelector("h2");
    const todoList = section.querySelector("#todo-list");
    const todoForm = section.querySelector("#todo-form");
    const adminButton = section.querySelector("#admin-button");
    const message = section.querySelector(".message");

    // TODO Exercise 6: Show the admin button only for users with ROLE_ADMIN

    async function loadTodos(url = "/api/todos") {
        try {
            const todos = await getTodos(url);

            todoList.replaceChildren();

            for (const todo of todos) {
                const item = document.createElement("li");
                item.textContent = `${todo.title} (${todo.owner})`;
                todoList.append(item);
            }

        } catch (error) {
            message.textContent = "Could not load todos.";
            console.error(error);
        }
    }

    todoForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            await addTodo(new FormData(todoForm));
            todoForm.reset();
            await loadTodos();
        } catch (error) {
            message.textContent = "Could not add todo.";
            console.error(error);
        }
    });

    adminButton.addEventListener("click", () => {
        heading.textContent = "Everyone's Todos";
        loadTodos("/api/admin/todos");
    });

    loadTodos();

    return section;
}
