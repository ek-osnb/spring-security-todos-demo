package ek.osnb.demo;

import org.junit.jupiter.api.Test;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

public class HashPlaygroundTest {

    @Test
    void testingSomething() {

        int strength = 13;
        PasswordEncoder encoder = new BCryptPasswordEncoder(strength);

        encoder.

        String hash1 = encoder.encode("pw");
//        String hash2 = encoder.encode("pw");
        System.out.println(hash1);
//        System.out.println(hash2);
//
//        System.out.println(encoder.matches("pw",hash1));
//        System.out.println(encoder.matches("pw",hash2));


    }
}
