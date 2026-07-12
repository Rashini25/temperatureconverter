package com.example.temperatureconverter.config;

import com.example.temperatureconverter.security.ApiKeyFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class SecurityConfig {


    @Bean
    public FilterRegistrationBean<ApiKeyFilter> apiKeyFilterRegistration(ApiKeyFilter apiKeyFilter) {


        FilterRegistrationBean<ApiKeyFilter> registrationBean =
                new FilterRegistrationBean<>();


        registrationBean.setFilter(apiKeyFilter);

        // Apply filter only to temperature APIs
        registrationBean.addUrlPatterns("/api/temperatures/*");


        return registrationBean;
    }

}