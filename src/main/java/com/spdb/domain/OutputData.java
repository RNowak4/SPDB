package com.spdb.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OutputData {
    private String stopId;
    private String x,y;
    // seconds
    private long delaySum;
}
