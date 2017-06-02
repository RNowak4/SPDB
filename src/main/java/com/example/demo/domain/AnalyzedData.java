package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AnalyzedData {
    private List<OutputData> outputDataList;

    public void addOutputData(final OutputData outputData) {
        outputDataList.add(outputData);
    }
}