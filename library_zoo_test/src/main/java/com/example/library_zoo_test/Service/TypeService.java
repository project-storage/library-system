package com.example.library_zoo_test.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import com.example.library_zoo_test.Model.Type;
import com.example.library_zoo_test.Repository.TypeRepository;

@Service
public class TypeService {
    @Autowired
    private TypeRepository typeRepository;

    public ResponseEntity<?> createType(Type type) {
        Type newType = typeRepository.save(type);
        return ResponseEntity.status(HttpStatus.CREATED).body(newType);
    }

    public ResponseEntity<?> getAllType() {
        Optional<Iterable<Type>> tOptional = Optional.ofNullable(typeRepository.findAll());

        if (tOptional.isPresent() && tOptional.get().iterator().hasNext()) {
            Iterable<Type> types = tOptional.get();
            return ResponseEntity.ok(types);
        } else {
            Map<String, String> resMap = new HashMap<>();
            resMap.put("message", "No Type found");
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(resMap);
        }
    }

    public ResponseEntity<?> getTypeById(int id) {
        Optional<Type> typeOptional = typeRepository.findById(id);
        return typeOptional.map(ResponseEntity::ok)
                           .orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<?> updateType(int id, Type type) {
        if (!typeRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        type.setId(id);
        Type updatedType = typeRepository.save(type);
        return ResponseEntity.ok(updatedType);
    }

    public ResponseEntity<?> deleteType(int id) {
        if (!typeRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        typeRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
