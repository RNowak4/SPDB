package com.spdb.controller;

import com.spdb.domain.AnalyzedData;
import com.spdb.service.DelayService;
import com.spdb.utils.CachedData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
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
                                           @RequestParam("startHour") final Date startHour,
                                           @RequestParam("endHour") final Date endHour) {

        return delayService.countDelays(lineName, startHour, endHour);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/delay1")
    public AnalyzedData countDelaysForLinea(@RequestParam("line") final String lineName) {

        return cachedData.getCachedData(lineName)
                .map(data -> data)
                .orElseThrow(NoSuchElementException::new);
    }
}
