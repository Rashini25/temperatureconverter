package com.example.temperatureconverter.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "conversions")
@Getter
@Setter
@AllArgsConstructor
public class TemperatureLog {

    @Id
    private String id;

    private double inputTemperature;

    private String inputUnit;

    private double outputTemperature;

    private String outputUnit;

    private String timestamp;
}