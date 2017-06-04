package com.spdb.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class AnalyzedData {
    private List<OutputData> outputDataList = new ArrayList<>();

    public void addOutputData(final OutputData outputData) {
        outputDataList.add(outputData);
    }
}