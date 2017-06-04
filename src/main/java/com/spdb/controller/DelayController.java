package com.spdb.controller;

import com.spdb.domain.AnalyzedData;
import com.spdb.service.DelayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController(value = "/delay")
public class DelayController {
    private DelayService delayService;

    @Autowired
    public DelayController(DelayService delayService) {
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

        return delayService.countDelays(lineName);
    }
}
