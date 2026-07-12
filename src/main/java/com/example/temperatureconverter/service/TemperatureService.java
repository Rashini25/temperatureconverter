package com.example.temperatureconverter.service;

import com.example.temperatureconverter.model.TemperatureLog;
import com.example.temperatureconverter.repository.TemperatureRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TemperatureService {

    private final TemperatureRepository repository;


    public TemperatureService(TemperatureRepository repository) {
        this.repository = repository;
    }


    public TemperatureLog convertAndSave(double value, String unit) {

        double result;
        String outputUnit;


        if(unit.equalsIgnoreCase("Celsius")) {

            result = (value * 9/5) + 32;
            outputUnit = "Fahrenheit";

        } else {

            result = (value - 32) * 5/9;
            outputUnit = "Celsius";
        }


        TemperatureLog log = new TemperatureLog(
                null,
                value,
                unit,
                result,
                outputUnit,
                LocalDateTime.now().toString()
        );


        return repository.save(log);
    }


    // Get all conversion history
    public List<TemperatureLog> getHistory() {

        return repository.findAll();

    }


    // Filter history by unit
    public List<TemperatureLog> filterByUnit(String unit) {

        return repository.findByInputUnitIgnoreCase(unit);

    }

}