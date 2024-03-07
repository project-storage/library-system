package com.example.library_zoo_test.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.example.library_zoo_test.Model.Type;

@Repository
@RepositoryRestResource(path="type")
public interface TypeRepository extends CrudRepository<Type, Integer> {
    Optional<Type> findById(int id);
}
