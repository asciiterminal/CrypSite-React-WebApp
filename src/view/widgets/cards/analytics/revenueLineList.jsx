import React, { useState } from "react";

import { Card, Row, Col } from "antd";
import { RiArrowRightDownLine } from "react-icons/ri";
import Chart from "react-apexcharts";

export default function RevenueLineList() {
  const [data1] = useState({
    series: [
      {
        data: [0, 20, 10, 40, 50, 30],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "line",
        id: "visiters-line-card",

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#0063F7"],
      labels: {
        style: {
          fontSize: "14px",
        },
      },
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },

      tooltip: {
        enabled: false,
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        show: false,
      },

      markers: {
        strokeWidth: 0,
        size: 0,
        colors: ["#0063F7", "#1BE7FF"],
        hover: {
          sizeOffset: 1,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],

      yaxis: {
        show: false,
      },
    },
  });
  
  return (
    <Card className="hp-border-color-black-40 hp-mb-32 hp-card-6">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row justify="space-between" align="top">
            <h4 className="hp-mr-8">Revenue</h4>
            <p className="hp-badge-text">Last Week</p>
          </Row>
        </Col>

        <Col span={24}>
          <Col>
            <Row justify="space-between" align="middle">
              <Col id="revenue-line-1" span={12}>
                <Chart
                  options={data1.options}
                  series={data1.series}
                  type="line"
                  legend="legend"
                />
              </Col>

              <div>
                <p className="hp-mb-0 hp-text-color-dark-0">Total Sales</p>
                
                <Row align="middle" justify="end">
                  <h5 className="hp-mb-0 hp-mr-4">$12.253</h5>
                  
                  <RiArrowRightDownLine
                    className="hp-text-color-danger-1"
                    size={12}
                  />
                  
                  <p className="hp-mb-0 hp-input-description hp-text-color-danger-1">
                    10%
                  </p>
                </Row>
              </div>
            </Row>
          </Col>

          <Col>
            <Row justify="space-between" align="middle">
              <Col id="revenue-line-1" span={12}>
                <Chart
                  options={data1.options}
                  series={data1.series}
                  type="line"
                  legend="legend"
                />
              </Col>

              <div>
                <p className="hp-mb-0 hp-text-color-dark-0">Total Sales</p>

                <Row align="middle" justify="end">
                  <h5 className="hp-mb-0 hp-mr-4">$12.253</h5>

                  <RiArrowRightDownLine
                    className="hp-text-color-danger-1"
                    size={12}
                  />

                  <p className="hp-mb-0 hp-input-description hp-text-color-danger-1">
                    10%
                  </p>
                </Row>
              </div>
            </Row>
          </Col>

          <Col>
            <Row justify="space-between" align="middle">
              <Col id="revenue-line-1" span={12}>
                <Chart
                  options={data1.options}
                  series={data1.series}
                  type="line"
                  legend="legend"
                />
              </Col>

              <div>
                <p className="hp-mb-0 hp-text-color-dark-0">Total Sales</p>
                
                <Row align="middle" justify="end">
                  <h5 className="hp-mb-0 hp-mr-4">$12.253</h5>

                  <RiArrowRightDownLine
                    className="hp-text-color-danger-1"
                    size={12}
                  />

                  <p className="hp-mb-0 hp-input-description hp-text-color-danger-1">
                    10%
                  </p>
                </Row>
              </div>
            </Row>
          </Col>
        </Col>
      </Row>
    </Card>
  );
}
