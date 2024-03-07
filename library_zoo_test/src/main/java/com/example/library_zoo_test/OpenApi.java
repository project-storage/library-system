package com.example.library_zoo_test;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@Configuration
public class OpenApi {
    @Bean
    public OpenAPI openNewtonApi() {
        return new OpenAPI()
                .info(new Info()
                        .title("Library Zoo")
                        .description("API Backend")
                        .version("1.0"));
    }
}
