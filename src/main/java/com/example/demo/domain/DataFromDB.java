package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class DataFromDB {
    // cord przystanku
    private String x, y;
    private String stopId;
    private Date scheduledDeparture;
    private Date realDeparture;
    private String lineName;
}
