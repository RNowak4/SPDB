package com.spdb.utils;

import com.spdb.domain.AnalyzedData;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
public class CachedData {
    private Map<String, AnalyzedData> cachedDataMap = new HashMap<>();

    public synchronized Optional<AnalyzedData> getCachedData(final String lineId) {
        return Optional.of(cachedDataMap.get(lineId));
    }

    public synchronized void putCachedData(final String lineId, final AnalyzedData analyzedData) {
        cachedDataMap.put(lineId, analyzedData);
    }
}
