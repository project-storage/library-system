package com.example.library_zoo_test;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.library_zoo_test.Model.Animal;
import com.example.library_zoo_test.Model.AppUser;
import com.example.library_zoo_test.Model.Continent;
import com.example.library_zoo_test.Model.Type;
import com.example.library_zoo_test.Repository.AnimalRepository;
import com.example.library_zoo_test.Repository.AppUserRepository;
import com.example.library_zoo_test.Repository.ContinentRepository;
import com.example.library_zoo_test.Repository.TypeRepository;

@SpringBootApplication
public class LibraryZooTestApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(LibraryZooTestApplication.class, args);
	}

	private final ContinentRepository continentRepository;
	private final AnimalRepository animalRepository;
	private final TypeRepository typeRepository;
	private final AppUserRepository userRepository;

	public LibraryZooTestApplication(ContinentRepository continentRepository, AnimalRepository animalRepository,
			TypeRepository typeRepository, AppUserRepository userRepository) {
		this.continentRepository = continentRepository;
		this.animalRepository = animalRepository;
		this.typeRepository = typeRepository;
		this.userRepository = userRepository;
	}

	@Override
	public void run(String... args) throws Exception {
		Continent continent1 = new Continent("อเมริกา");
		Continent continent2 = new Continent("ยูโรป");
		Continent continent3 = new Continent("เอเชีย");

		continentRepository.saveAll(Arrays.asList(continent1, continent2, continent3));

		Type type1 = new Type("สัตว์บีก");
		Type type2 = new Type("สัตว์น้ำ");
		Type type3 = new Type("สัตว์บก");

		typeRepository.saveAll(Arrays.asList(type1, type2, type3));

		Animal animal1 = new Animal("นก", "ผู้", type1, continent3);
		Animal animal2 = new Animal("ลิง", "เมีย", type3, continent2);
		Animal animal3 = new Animal("ปลาวาฬ", "เมีย", type2, continent1);

		animalRepository.saveAll(Arrays.asList(animal1, animal2, animal3));
		userRepository
				.save(new AppUser("user", "$2a$10$NVM0n8ElaRgg7zWO1CxUdei7vWoPg91Lz2aYavh9.f9q0e4bRadue", "USER"));
		// Username: admin, password: admin
		userRepository
				.save(
						new AppUser("admin", "$2a$10$8cjz47bjbR4Mn8GMg9IZx.vyjhLXR/SKKMSZ9.mP9vpMu0ssKi8GW", "ADMIN"));
	}

}
