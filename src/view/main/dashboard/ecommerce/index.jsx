import React, { useEffect, useState } from "react";
import { Row, Col, Select } from "antd";
import axios from "axios";

import RevenueColumnCard from "./revenueColumnCard";
import EarningsDonutCard from "./earningsDonutCard";
import FeatureCards from "./featureCards";
import ProjectTableEcommerceCard from "./projectTableEcommerceCard";
import ECommerceBrowserStates from "./eCommerceBrowserStates";

export default function ECommerce() {
  const [user, setUser] = useState({});
  const [timeWindow, setTimeWindow] = useState("this-month");

  useEffect(() => {
    // Get username.
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <Row gutter={[32, 0]}>
      <Col span={24}>
        <Row align="middle" justify="space-between">
          <Col md={12} span={24}>
            <h3>Welcome back, {user.name} 👋</h3>

            <p className="hp-p1-body hp-mb-0">
              Your current status and analytics are here
            </p>
          </Col>

          <Col className="hp-mt-sm-24">
            <Select
              labelInValue
              style={{ width: 130 }}
              defaultValue={{ value: "this-month" }}
              onChange={(e) => setTimeWindow(e.value)}
            >
              <Select.Option value="this-month">This Month</Select.Option>

              <Select.Option value="this-week">This Week</Select.Option>

              <Select.Option value="this-year">This Year</Select.Option>
            </Select>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <FeatureCards timeWindow={timeWindow} />
      </Col>

      <Col span={24} className="hp-mt-32">
        <Row gutter={[32, 32]}>
          <Col xl={16} span={24} className="hp-overflow-hidden">
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <RevenueColumnCard />
              </Col>

              <Col span={24}>
                <ProjectTableEcommerceCard />
              </Col>
            </Row>
          </Col>

          <Col xl={8} span={24}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <EarningsDonutCard />
              </Col>

              <Col xl={24} md={12} span={24}>
                <ECommerceBrowserStates />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
