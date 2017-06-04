package com.spdb.utils;

import com.spdb.domain.AnalyzedData;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
public class CachedData {
    private Map<CachedDataKey, AnalyzedData> cachedDataMap = new HashMap<>();

    public synchronized Optional<AnalyzedData> getCachedData(final CachedDataKey cachedDataKey) {
        final AnalyzedData cachedData = cachedDataMap.get(cachedDataKey);
        if (cachedData == null) {
            return Optional.empty();
        } else
            return Optional.of(cachedDataMap.get(cachedDataKey));
    }

    public synchronized void putCachedData(final CachedDataKey cachedDataKey, final AnalyzedData analyzedData) {
        cachedDataMap.put(cachedDataKey, analyzedData);
    }
}
