package com.spdb.tasks;

import com.spdb.domain.AnalyzedData;
import com.spdb.service.DataBaseService;
import com.spdb.service.DelayService;
import com.spdb.utils.CachedData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CreateCacheTask {
    private DataBaseService dataBaseService;
    private DelayService delayService;
    private CachedData cachedData;

    @Autowired
    public CreateCacheTask(DataBaseService dataBaseService, DelayService delayService, CachedData cachedData) {
        this.dataBaseService = dataBaseService;
        this.delayService = delayService;
        this.cachedData = cachedData;
    }

    @Scheduled(fixedRate = 86400000)
    public void performCaching() {
        final List<String> allLinesNames = dataBaseService.getAllLinesNames();

        for (String lineName : allLinesNames) {
            final AnalyzedData analyzedData = delayService.countDelays(lineName);
            cachedData.putCachedData(lineName, analyzedData);
        }
    }
}