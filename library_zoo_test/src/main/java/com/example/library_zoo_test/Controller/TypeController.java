package com.example.library_zoo_test.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.library_zoo_test.Model.Type;
import com.example.library_zoo_test.Repository.TypeRepository;
import com.example.library_zoo_test.Service.TypeService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/type")
public class TypeController {
    @Autowired
    private TypeRepository typeRepository;

    @Autowired
    private TypeService typeService;

    @GetMapping
    public ResponseEntity<?> getAllType() {
        return typeService.getAllType();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTypeById(@PathVariable int id) {
        return typeService.getTypeById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateType(@PathVariable int id, @RequestBody Type type) {
        return typeService.updateType(id, type);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteType(@PathVariable int id) {
        return typeService.deleteType(id);
    }
}
