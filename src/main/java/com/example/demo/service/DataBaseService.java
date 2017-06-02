package com.example.demo.service;

import com.example.demo.domain.DataFromDB;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DataBaseService {

    public List<DataFromDB> getData(final String lineName, final Date startHour, final Date endHour) {
        return null;
    }
}
