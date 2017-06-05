package com.spdb.service;

import com.spdb.domain.DataFromDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataBaseService {
    private JdbcTemplate jdbcTemplate;
    private final static String GET_DATA_QUERY = "SELECT \n" +
            "  csipline.name, \n" +
            "  csipdaystopping.realdeparture, \n" +
            "  csipdaystopping.scheduleddeparture, \n" +
            "  csipstoppoint.latitude, \n" +
            "  csipstoppoint.longitude, \n" +
            "  csipstoppoint.loid as stopId,\n" +
            "  csipstoppoint.name as stopName\n" +
            "FROM \n" +
            "  public.csipline, \n" +
            "  public.csipdaystopping, \n" +
            "  public.csipstoppoint\n" +
            "WHERE \n" +
            "  csipdaystopping.stoppoint_loid = csipstoppoint.loid AND\n" +
            "  csipdaystopping.line_loid = csipline.loid AND\n" +
            "  csipline.name = ? AND\n" +
            "  date_part('hour', csipdaystopping.scheduleddeparture) = ? AND\n" +
            "  csipdaystopping.realdeparture is not null;\n";

    private final static String GET_ALL_LINE_NAMES_QUERY = "select name from csipline;";

    @Autowired
    public DataBaseService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<DataFromDB> getData(final String lineName, final int hour) {

        return jdbcTemplate.query(GET_DATA_QUERY, new Object[]{lineName, hour}, (resultSet, i) -> {
            final DataFromDB data = new DataFromDB();
            data.setLineName(lineName);
            data.setRealDeparture(resultSet.getTime("realdeparture"));
            data.setScheduledDeparture(resultSet.getTime("scheduleddeparture"));
            data.setX(resultSet.getString("latitude"));
            data.setY(resultSet.getString("longitude"));
            data.setStopId(resultSet.getString("stopId"));
            data.setStopName(resultSet.getString("stopName"));

            return data;
        });
    }

    public List<String> getAllLinesNames() {

        return jdbcTemplate.query(GET_ALL_LINE_NAMES_QUERY, new Object[]{},
                (resultSet, i) -> resultSet.getString("name"));
    }
}
