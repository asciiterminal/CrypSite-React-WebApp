import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import axios from "axios";

import OrdersFeatureCard from "./featureCards/ordersFeatureCard";
import SaleFeatureCard from "./featureCards/saleFeatureCard";
import ProfitFeatureCard from "./featureCards/profitFeatureCard";
import CustomerFeatureCard from "./featureCards/customerFeatureCard";

export default function FeatureCards(props) {
  const [data, setData] = useState({
    newCustomer: ["0", "0"],
    newOrder: ["0", "0"],
    avgSale: ["0", "0"],
    grossProfit: ["0", "0"],
  });

  useEffect(() => {
    // Use props.timeWindow to make feature card request.
    console.log(props.timeWindow);

    // We don't have the API yet.
    // axios.get("").then((res) => {
    //   setData(res.data);
    // });

    // When backend is ready delete this and uncomment and set-up axios above.
    const mockData = {
      newCustomer: ["240", "+3"],
      newOrder: ["1240", "+4"],
      avgSale: ["320", "-1.4"],
      grossProfit: ["1,32", "+3"],
    };

    setData(mockData);
  }, [props.timeWindow]);

  return (
    <Row gutter={[32, 32]}>
      <Col xl={6} md={12} span={24}>
        <CustomerFeatureCard
          text="New Customers"
          percentage={data.newCustomer[1]}
          number={data.newCustomer[0]}
        />
      </Col>

      <Col xl={6} md={12} span={24}>
        <OrdersFeatureCard
          text="New Orders"
          percentage={data.newOrder[1]}
          number={data.newOrder[0]}
        />
      </Col>

      <Col xl={6} md={12} span={24}>
        <SaleFeatureCard
          text="Average Sale"
          percentage={data.avgSale[1]}
          number={data.avgSale[0]}
        />
      </Col>

      <Col xl={6} md={12} span={24}>
        <ProfitFeatureCard
          text="Gross Profit"
          percentage={data.grossProfit[1]}
          number={data.grossProfit[0]}
        />
      </Col>
    </Row>
  );
}
