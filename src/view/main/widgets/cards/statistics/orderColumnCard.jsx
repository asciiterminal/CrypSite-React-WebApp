import React, { useState } from "react";

import { Card, Row, Col } from "antd";
import Chart from "react-apexcharts";

export default function OrderColumnCard() {
  const [data] = useState({
    series: [
      {
        name: "Earning",
        data: [50, 70, 100, 60],
      },
    ],
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
          top: -15,
          bottom: -15,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          startingShape: "rounded",
          colors: {
            backgroundBarColors: [],
            backgroundBarRadius: 5,
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#1BE7FF"],
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        max: 100,
      },
      tooltip: {
        x: {
          show: false,
        },
      },
    },
  });

  return (
    <Card className="hp-border-color-black-40 hp-card-1">
      <Row gutter={16} align="middle">
        <Col className="hp-pl-0" span={10}>
          <div id="chart">
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              height={57}
              legend="legend"
            />
          </div>
        </Col>

        <Col className="hp-pr-0" span={14}>
          <h3 className="hp-mb-0">13,346</h3>
          
          <p className="hp-p1-body hp-mb-0">New Order</p>
        </Col>
      </Row>
    </Card>
  );
}
