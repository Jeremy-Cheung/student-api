package com.cheung.jeremy.server.student;

import java.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    @GetMapping(path="api/v1/health")
    public Map<String, String> HealthCheck() {
        Map<String, String> hash = new HashMap<>();
        hash.put("health", "ok");
        return hash;
    }
}
