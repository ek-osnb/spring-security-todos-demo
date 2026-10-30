# Spring Security Foundations: live demo

The teacher's live demo for the Spring Security session. It is a small todos app with the same structure and the same steps as the notes starter that the students use.

- Spring Boot serves both the API (`/api/...`) and the page (`src/main/resources/static`).
- The database is H2 in memory. It starts over every time you restart the app.

## Run it

```bash
./mvnw spring-boot:run
```

Open http://localhost:8080.

## Test users

| Username | Password | Role |
|---|---|---|
| `anna` | `pw` | USER |
| `ben` | `pw` | USER |
| `admin` | `pw` | ADMIN |

## Branches and tags

`main` is the starting point. The `solution` branch has one commit per demo, with the same tags as the starter: `ex-1` to `ex-6`, and `optional`.

Start from `main` on your own branch:

```bash
git switch -c live main
```

Jump to a tag if you get lost. This throws away the changes you haven't committed:

```bash
git switch --discard-changes -c catch-up-5 ex-4
```
