package com.example.temperatureconverter.repository;

import com.example.temperatureconverter.model.TemperatureLog;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TemperatureRepository 
        extends MongoRepository<TemperatureLog, String> {


    List<TemperatureLog> findByInputUnitIgnoreCase(String unit);

}