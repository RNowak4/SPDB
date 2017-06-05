package com.spdb.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class DataFromDB {
    // cord przystanku
    private int hour;
    private String x, y;
    private String stopId;
    private Date scheduledDeparture;
    private Date realDeparture;
    private String lineName;
    private String stopName;
}
