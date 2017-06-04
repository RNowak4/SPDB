package com.spdb.tasks;

import com.spdb.domain.AnalyzedData;
import com.spdb.service.DataBaseService;
import com.spdb.service.DelayService;
import com.spdb.utils.CachedData;
import com.spdb.utils.CachedDataKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.logging.Logger;

@Component
public class CreateCacheTask {
    private DataBaseService dataBaseService;
    private DelayService delayService;
    private CachedData cachedData;

    static Logger log = Logger.getLogger(CreateCacheTask.class.getName());

    @Autowired
    public CreateCacheTask(DataBaseService dataBaseService, DelayService delayService, CachedData cachedData) {
        this.dataBaseService = dataBaseService;
        this.delayService = delayService;
        this.cachedData = cachedData;
    }

    @Scheduled(fixedRate = 86400000)
    public void performCaching() {
        final List<String> allLinesNames = dataBaseService.getAllLinesNames();

        log.info("Start of performing data cache.");

        for (String lineName : allLinesNames) {
            for (int hour = 0; hour < 24; hour++) {
                final AnalyzedData analyzedData = delayService.countDelays(lineName, hour);
                cachedData.putCachedData(new CachedDataKey(lineName, hour), analyzedData);
            }
        }

        log.info("End of performing data cache.");
    }
}