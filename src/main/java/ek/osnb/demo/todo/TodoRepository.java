package ek.osnb.demo.todo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

interface TodoRepository extends JpaRepository<Todo, Long> {

    List<Todo> findByOwner(String owner);
}
