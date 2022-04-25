import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Row, Col, DatePicker } from "antd";
import Chart from "react-apexcharts";
import moment from "moment";

export default function RevenueColumnCard() {
  const currentYear = new Date().getFullYear().toString();
  const [year, setYear] = useState(currentYear);
  const [data, setData] = useState({
    series: [
      {
        name: "Earning",
        data: [],
      },
      {
        name: "Expense",
        data: [],
      },
    ],

    options: {
      chart: {
        id: "revenue-column-card",
        fontFamily: "Manrope, sans-serif",
        type: "bar",

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      labels: {
        style: {
          fontSize: "14px",
        },
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        borderColor: "#DFE6E9",
        row: {
          opacity: 0.5,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 2,
          columnWidth: "45%",
          endingShape: "rounded",
        },
        colors: {
          backgroundBarColors: ["#0063F7", "#00F7BF"],
        },
      },

      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      xaxis: {
        axisTicks: {
          show: false,
          borderType: "solid",
          color: "#78909C",
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },

        tickPlacement: "between",
        labels: {
          style: {
            colors: ["636E72"],
            fontSize: "14px",
          },
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        horizontalAlign: "right",
        offsetX: 40,
        position: "top",
        markers: {
          radius: 12,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: ["636E72"],
            fontSize: "14px",
          },
          formatter: (value) => {
            return value / 1000 + "K";
          },
        },

        min: 0,
        max: 40000,
        tickAmount: 4,
      },
    },
  });

  useEffect(() => {
    // Use year to make requests by year.
    console.log(year);

    //   We don't have the API yet.
    //   axios.get("").then((res) => {
    //     setData(res.data);
    //   });

    // When backend is ready delete this and uncomment and set-up axios above.
    // This is to feed the graph.
    const mockJSON = [
      {
        name: "Earning",
        data: [
          10000, 20000, 30000, 70000, 32675, 32333, 33457, 38345, 36783, 39457,
          22459, 39840,
        ],
      },
      {
        name: "Expense",
        data: [
          12010, 11313, 14623, 18935, 17345, 13465, 17813, 19125, 16256, 20356,
          12233, 14570,
        ],
      },
    ];

    setData({ ...data, series: mockJSON });
  }, [year]);

  return (
    <Card className="hp-border-color-black-40 hp-card-6 hp-chart-text-color">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row justify="space-between">
            <Row align="bottom">
              <h4 className="hp-mr-8">Revenue</h4>
            </Row>

            <Col>
              <DatePicker
                picker="year"
                defaultValue={moment("2022", "YYYY")}
                onChange={(e) => setYear(e?._d.getFullYear().toString())}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="revenue-column-card">
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              height="100%"
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
