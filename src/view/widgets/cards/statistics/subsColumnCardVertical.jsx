import React, { useEffect, useState } from "react";

import { Row, Col } from "antd";
import Chart from "react-apexcharts";

export default function SubsColumnCardVertical() {
  const [chartWidth, setChartWidth] = useState("50%")

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartWidth("100%")
    }, 10);
    return () => clearTimeout(timer);
  }, []);

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
          top: -12,
          bottom: -12,
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
      colors: ["#00F7BF"],
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
    <div className="hp-border-1 hp-overflow-hidden hp-border-color-black-40 hp-border-color-dark-80 hp-border-radius hp-bg-color-black-0 hp-bg-color-dark-100 hp-p-16 hp-card-2">
      <Row gutter={16} align="middle">
        <Col span={24} className="hp-text-center">
          <div
            id="chart"
            className="hp-bg-color-primary-4 hp-bg-color-dark-90 hp-border-radius hp-d-flex-center hp-px-18 hp-mb-18"
          >
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              width={chartWidth}
              height={80}
              legend="legend"
            />
          </div>

          <h3 className="hp-mb-0">1,346</h3>
          <p className="hp-p1-body hp-mb-0 hp-text-color-black-80 hp-text-color-dark-50">
            New Subscribe
          </p>
        </Col>
      </Row>
    </div>
  );
}
