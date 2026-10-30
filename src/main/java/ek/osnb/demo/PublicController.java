package ek.osnb.demo;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
public class PublicController {

    public record HelloWorld(String msg) {}

    @GetMapping
    HelloWorld get() {
        return new HelloWorld("Hello world");
    }
}
