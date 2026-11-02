export async function getMe() {
    // TODO Exercise 6:
    const res = await fetch("/api/me");
    // GET /api/me
    if (!res.ok) {
        // Return null if the status is 401
        return null;
    }

    return await res.json();
    // Otherwise return the user data
    // throw new Error("getMe is not implemented yet");
}

export async function login(formData) {
    // TODO Exercise 6:
    const res = await fetch("/api/login", {
            method: "POST",
            body: new URLSearchParams(formData),
            headers: {
                "X-XSRF-TOKEN": csrfToken()
            }
        }
    );
    if (!res.ok) {
        return null;
    };
    // POST /api/login
    // Send username and password as form data
    // Include the CSRF token
    // throw new Error("login is not implemented yet");
}

export async function logout() {
    // TODO Exercise 6:
    // POST /api/logout
    const res = await fetch("/api/logout", {
        method: "POST",
        headers: {
            "X-XSRF-TOKEN": csrfToken()
        }
    });
    if (!res.ok) {
        return null;
    }
    // Include the CSRF token
    // throw new Error("logout is not implemented yet");
}

export async function getTodos(url = "/api/todos") {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
}

// TODO Exercise 5: Send the CSRF token in the X-XSRF-TOKEN header
export async function addTodo(formData) {
    const response = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify(
            {"title": formData.get("title")}
        ),
        headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": csrfToken()
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
}


function csrfToken() {
    // TODO Exercise 5:
    const cookieJar = document.cookie.split("; ");
    const xsrfCookie = cookieJar.find(c => c.startsWith("XSRF-TOKEN="));
    // Read XSRF-TOKEN from document.cookie
    if (!xsrfCookie) {
        return null;
    }

    const token = xsrfCookie.split("=")[1];
    // Decode the value
    // Return the token
    return decodeURIComponent(token);
}
