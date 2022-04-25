import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Row, Col, Table, Tag } from "antd";
import { Download } from "react-iconly";

export default function ProjectTableEcommerceCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // We don't have the API yet.
    // axios.get("").then((res) => {
    //   setData(res.data);
    // });

    // When backend is ready delete this and uncomment and set-up axios above.
    const mockData = [
      {
        key: "1",
        date: "June 9,2020",
        billingname: "Elon Musk",
        amount: "$1,322.45",
        tags: ["Paid"],
        invoice: <Download className="remix-icon" />,
      },
      {
        key: "2",
        date: "June 9,2020",
        billingname: "Christiano Ronaldo",
        amount: "$733.32",
        tags: ["Paid"],
        invoice: <Download className="remix-icon" />,
      },
      {
        key: "3",
        date: "June 10,2020",
        billingname: "Jeff Bezos",
        amount: "$1,923.32",
        tags: ["Refund"],
        invoice: <Download className="remix-icon" />,
      },
      {
        key: "4",
        date: "June 9,2020",
        billingname: "Richard Hamilton",
        amount: "$922.12",
        tags: ["Paid"],
        invoice: <Download className="remix-icon" />,
      },
      {
        key: "5",
        date: "June 10,2020",
        billingname: "Lebron James",
        amount: "$323.98",
        tags: ["Charge Back"],
        invoice: <Download className="remix-icon" />,
      },
    ];

    setData(mockData);
  }, []);

  const columns = [
    {
      title: (
        <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">
          Date
        </span>
      ),
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <p className="hp-mb-0 hp-text-color-black-100 hp-text-color-dark-0">
          {text}
        </p>
      ),
    },
    {
      title: (
        <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">
          Billing name
        </span>
      ),
      dataIndex: "billingname",
      key: "billingname",
      render: (text) => (
        <p className="hp-mb-0 hp-text-color-black-100 hp-text-color-dark-0">
          {text}
        </p>
      ),
    },
    {
      title: (
        <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">
          Amount
        </span>
      ),
      dataIndex: "amount",
      key: "amount",
      render: (text) => (
        <p className="hp-mb-0 hp-text-color-black-100 hp-text-color-dark-0">
          {text}
        </p>
      ),
    },
    {
      title: (
        <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">
          Status
        </span>
      ),
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag;
            if (tag === "Refund") {
              color = "warning";
            } else if (tag === "Charge Back") {
              color = "error";
            } else {
              color = "success";
            }
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: (
        <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">
          Invoice
        </span>
      ),
      dataIndex: "invoice",
      key: "invoice",
      align: "center",
      render: (text) => (
        <span className="hp-d-block hp-text-color-black-60 hp-text-color-dark-50">
          {text}
        </span>
      ),
    },
  ];

  return (
    <Card className="hp-border-color-black-40 hp-project-ecommerce-table-card">
      <Row>
        <Col span={24}>
          <Row align="middle" justify="space-between" className="hp-mb-32">
            <h5 className="hp-mb-0">Latest Orders</h5>
          </Row>

          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: 700 }}
          />
        </Col>
      </Row>
    </Card>
  );
}
