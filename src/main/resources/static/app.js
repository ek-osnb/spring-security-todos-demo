import { createLogin } from "./components/Login.js";
import { createTodos } from "./components/Todos.js";
import { createUserInfo } from "./components/UserInfo.js";
import { getMe } from "./api.js";

window.addEventListener("DOMContentLoaded", render);


async function render() {
    const app = document.querySelector("#app");

    app.replaceChildren();

    try {
        // TODO Exercise 6:
        // Call getMe()
        // Not logged in: show only createLogin(render)
        // Logged in: also show createUserInfo(me, render), and pass me to createTodos(me)

        const heading = document.createElement("h1");
        heading.textContent = "My Todos";

        app.append(
            heading,
            createTodos()
        );

    } catch (error) {
        app.textContent = "Could not load application.";
        console.error(error);
    }
}
