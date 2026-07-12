package com.example.temperatureconverter.controller;

import com.example.temperatureconverter.model.TemperatureLog;
import com.example.temperatureconverter.service.TemperatureService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/temperatures")
public class TemperatureController {


    private final TemperatureService service;


    public TemperatureController(TemperatureService service){
        this.service = service;
    }


    // Convert temperature and save
    @PostMapping("/convert")
    public TemperatureLog convert(
            @RequestParam double value,
            @RequestParam String unit
    ){

        return service.convertAndSave(value, unit);

    }


    // Get all history
    @GetMapping("/history")
    public List<TemperatureLog> history(){

        return service.getHistory();

    }


    // Filter history by unit
    @GetMapping("/filter")
    public List<TemperatureLog> filter(
            @RequestParam String unit
    ){

        return service.filterByUnit(unit);

    }

}