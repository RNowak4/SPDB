package com.spdb.controller;

import com.spdb.domain.AnalyzedData;
import com.spdb.service.DelayService;
import com.spdb.utils.CachedData;
import com.spdb.utils.CachedDataKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.NoSuchElementException;

@RestController(value = "/delay")
public class DelayController {
    private CachedData cachedData;
    private DelayService delayService;

    @Autowired
    public DelayController(CachedData cachedData, DelayService delayService) {
        this.cachedData = cachedData;
        this.delayService = delayService;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/delay")
    public AnalyzedData countDelaysForLine(@RequestParam("line") final String lineName,
                                           @RequestParam("hour") final int hour) {

        return cachedData.getCachedData(new CachedDataKey(lineName, hour))
                .map(data -> data)
                .orElseThrow(NoSuchElementException::new);
    }
}