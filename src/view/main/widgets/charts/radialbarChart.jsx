import React, { useState } from "react";

import { Card, Row, Col, Dropdown, Menu } from "antd";
import { RiMoreFill } from "react-icons/ri";
import Chart from "react-apexcharts";

export default function RadialbarChart() {
  const menu = (
    <Menu>
      <Menu.Item>Last 28 Days</Menu.Item>
      <Menu.Item>Last Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  const [data] = useState({
    series: [61, 82, 65],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "radialBar",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#00F7BF", "#0010F7", "#FFC700"],

      labels: ["Ebay", "Amazon", "Web"],

      dataLabels: {
        enabled: false,
      },
      stroke: {
        lineCap: "round",
      },

      plotOptions: {
        radialBar: {
          size: 185,
          hollow: {
            size: "25%",
          },

          track: {
            margin: 16,
          },
          dataLabels: {
            show: true,
            name: {
              fontSize: "16px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              fontSize: "16px",
              label: "Total",
              formatter: function (w) {
                return 7400;
              },
            },
          },
        },
      },

      legend: {
        show: true,
        itemMargin: {
          horizontal: 24,
          vertical: 0,
        },
        horizontalAlign: "center",
        position: "bottom",
        fontSize: "16px",

        markers: {
          radius: 12,
        },
      },
    },
  });

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="top">
            <Col>
              <h4 className="hp-mr-8">Radialbar Chart</h4>
              <p className="hp-badge-text">Marketplace</p>
            </Col>

            <Col>
              <Dropdown overlay={menu} trigger={["click"]}>
                <RiMoreFill className="hp-text-color-dark-0" size={24} onClick={(e) => e.preventDefault()} />
              </Dropdown>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart" className="hp-donut-chart">
            <Chart
              options={data.options}
              series={data.series}
              type="radialBar"
              height={398}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
