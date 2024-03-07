package com.example.library_zoo_test.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.example.library_zoo_test.Model.Animal;

@Repository
@RepositoryRestResource(path="animal")
public interface AnimalRepository extends CrudRepository<Animal, Integer> {

}