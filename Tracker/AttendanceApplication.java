import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootApplication
@RestController
public class AttendanceApplication {

    // Dummy database
    private Map<String, Map<String, String>> users = new HashMap<>();
    private Map<String, Map<String, Object>> events = new HashMap<>();

    public static void main(String[] args) {
        SpringApplication.run(AttendanceApplication.class, args);
    }

    @PostMapping("/register")
    public Map<String, String> registerUser(@RequestBody Map<String, String> user) {
        String username = user.get("username");
        if (!users.containsKey(username)) {
            users.put(username, user);
            return Map.of("message", "User registered successfully");
        } else {
            return Map.of("error", "Username already exists");
        }
    }

    @PostMapping("/create_event")
    public Map<String, String> createEvent(@RequestBody Map<String, Object> event) {
        String eventId = (String) event.get("event_id");
        if (!events.containsKey(eventId)) {
            events.put(eventId, event);
            return Map.of("message", "Event created successfully");
        } else {
            return Map.of("error", "Event ID already exists");
        }
    }

    @PostMapping("/mark_attendance")
    public Map<String, String> markAttendance(@RequestBody Map<String, String> attendance) {
        String eventId = attendance.get("event_id");
        String username = attendance.get("username");
        if (events.containsKey(eventId) && users.containsKey(username)) {
            List<Map<String, String>> attendees = (List<Map<String, String>>) events.get(eventId).getOrDefault("attendees", new ArrayList<>());
            Map<String, String> attendee = new HashMap<>();
            attendee.put("username", username);
            attendee.put("timestamp", String.valueOf(System.currentTimeMillis()));
            attendees.add(attendee);
            events.get(eventId).put("attendees", attendees);
            return Map.of("message", "Attendance marked successfully");
        } else {
            return Map.of("error", "Event or user not found");
        }
    }
}
