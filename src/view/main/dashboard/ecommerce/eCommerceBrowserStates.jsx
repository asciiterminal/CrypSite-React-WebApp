import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Row, Col } from "antd";
import Chart from "react-apexcharts";

import chrome from "../../../../assets/images/browser/chrome.svg";
import safari from "../../../../assets/images/browser/safari.svg";
import opera from "../../../../assets/images/browser/opera.svg";
import edge from "../../../../assets/images/browser/edge.svg";
import firefox from "../../../../assets/images/browser/firefox.svg";
import other from "../../../..//assets/images/browser/other.svg";

export default function ECommerceBrowserStates() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // We don't have the API yet.
    // axios.get("").then((res) => {
    //   setData(res.data);
    // });

    // When backend is ready delete this and uncomment and set-up axios above.
    const mockData = [
      {
        title: "Google Chrome",
        value: "50.2",
      },
      {
        title: "Mozila Firefox",
        value: "12.5",
      },
      {
        title: "Apple Safari",
        value: "24.8",
      },
      {
        title: "Microsoft Edge",
        value: "4.7",
      },
      {
        title: "Opera",
        value: "7.8",
      },
      {
        title: "Other",
        value: "2.2",
      },
    ];

    setData(mockData);
  }, []);

  const options = {
    grid: {
      show: false,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15,
      },
    },
    colors: ["#C903FF"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "20%",
        },
        track: {
          background: "#DFE6E9",
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
  };

  const renderStates = () => {
    return data.map((state) => {
      switch (state.title) {
        case "Google Chrome":
          state.avatar = <img src={chrome} alt="Google Chrome" />;
          break;

        case "Mozila Firefox":
          state.avatar = <img src={firefox} alt="Mozila Firefox" />;
          break;

        case "Apple Safari":
          state.avatar = <img src={safari} alt="Apple Safari" />;
          break;

        case "Microsoft Edge":
          state.avatar = <img src={edge} alt="Microsoft Edge" />;
          break;

        case "Opera":
          state.avatar = <img src={opera} alt="Opera" />;
          break;

        default:
          state.avatar = <img src={other} alt="Other" />;
          break;
      }

      return (
        <div key={state.title}>
          <Row justify="space-between" className="hp-mt-32">
            <Col span={12}>
              <Row>
                <div className="hp-mr-8">{state.avatar}</div>
                <p className="hp-p1-body hp-mb-0">{state.title}</p>
              </Row>
            </Col>
            <Col className="hp-text-right" span={12}>
              <Row align="end">
                <p className="hp-badge-text hp-mb-0 hp-mr-8 hp-align-self-center">
                  {state.value}
                </p>
                <Chart
                  options={options}
                  series={[parseInt(state.value)]}
                  type="radialBar"
                  height={22}
                  width={24}
                />
              </Row>
            </Col>
          </Row>
        </div>
      );
    });
  };

  return (
    <Card className="hp-border-color-black-40 hp-card-6 hp-eCommerceCardOne">
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <h5 className="hp-mb-0">Browser states</h5>

            <p className="hp-badge-text hp-text-color-black-80 hp-text-color-dark-30 hp-mb-0">
              {`${new Date().getMonth() + 1} / ${new Date().getFullYear()}`}
            </p>
          </Row>
        </Col>

        <Col span={24}>{renderStates()}</Col>
      </Row>
    </Card>
  );
}
