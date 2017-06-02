package com.spdb.service;

import com.spdb.domain.AnalyzedData;
import com.spdb.domain.Cords;
import com.spdb.domain.DataFromDB;
import com.spdb.domain.OutputData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DelayService {
    private DataBaseService dataBaseService;

    @Autowired
    public DelayService(DataBaseService dataBaseService) {
        this.dataBaseService = dataBaseService;
    }

    public AnalyzedData countDelays(String lineName, Date startHour, Date endHour) {
        final List<DataFromDB> dataFromDB = dataBaseService.getData(lineName, startHour, endHour);
        final Map<String, Long> delays = new HashMap<>();
        final Map<String, Cords> stops = new HashMap<>();

        for (final DataFromDB data : dataFromDB) {
            long depDate = data.getScheduledDeparture().getTime();
            long realDate = data.getRealDeparture().getTime();
            Long diff = realDate - depDate;
            String stopId = data.getStopId();

            Long currentDiff = delays.get(stopId);
            if (currentDiff != null) {
                delays.put(stopId, currentDiff + diff);
            } else {
                delays.put(stopId, diff);
            }

            stops.putIfAbsent(stopId, new Cords(data.getX(), data.getY()));
        }

        return joinData(delays, stops);
    }

    private AnalyzedData joinData(final Map<String, Long> delays, final Map<String, Cords> stops) {
        final AnalyzedData analyzedData = new AnalyzedData();

        for (String stopId : delays.keySet()) {
            final OutputData outputData = new OutputData();
            final Cords stopCords = stops.get(stopId);

            outputData.setDelaySum(delays.get(stopId));
            outputData.setStopId(stopId);
            outputData.setX(stopCords.getX());
            outputData.setY(stopCords.getY());

            analyzedData.addOutputData(outputData);
        }

        return analyzedData;
    }
}