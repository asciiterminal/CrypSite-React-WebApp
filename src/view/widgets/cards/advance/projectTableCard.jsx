import React from "react";

import { Card, Row, Col, Table, Tag } from "antd";
import { RiMoreFill } from "react-icons/ri";

export default function OrderlistTableCard() {
  const columns = [
    {
      title: <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">#</span>,
      dataIndex: "no",
      key: "no",
      render: (text) => (
        <p className="hp-mb-0 hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0">
          {text}
        </p>
      ),
    },
    {
      title: <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">Project Name</span>,
      dataIndex: "projectName",
      key: "projectName",
      render: (text) => (
        <p className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">{text}</p>
      ),
    },
    {
      title: <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">Start Date</span>,
      dataIndex: "startDate",
      key: "startDate",
      render: (text) => (
        <p className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">{text}</p>
      ),
    },
    {
      title: <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">End Date</span>,
      dataIndex: "endDate",
      key: "endDate",
      render: (text) => (
        <p className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">{text}</p>
      ),
    },
    {
      title: <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">Status</span>,
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag;
            if (tag === "Soon") {
              color = "error";
            } else if (tag === "Review") {
              color = "magenta";
            } else {
              color = "blue";
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
      title: <span className="hp-badge-size hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-50 hp-text-uppercase">Assign</span>,
      dataIndex: "assign",
      key: "assign",
      render: (text) => (
        <p className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">{text}</p>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      no: "1",
      projectName: "Yoda React",
      startDate: "12/05/2021",
      endDate: "12/08/2021",
      tags: ["Work"],
      assign: "Justin Botosh",
    },
    {
      key: "2",
      no: "2",
      projectName: "Leia Html",
      startDate: "12/04/2021",
      endDate: "12/06/2021",
      tags: ["Review"],
      assign: "Leo Stanton",
    },
    {
      key: "3",
      no: "3",
      projectName: "Yoda Vue",
      startDate: "12/09/2021",
      endDate: "12/12/2021",
      tags: ["Soon"],
      assign: "Mira Korsgaard",
    },
    {
      key: "4",
      no: "4",
      projectName: "Yoda Bootstrap",
      startDate: "12/09/2021",
      endDate: "12/12/2021",
      tags: ["Soon"],
      assign: "Miracle Gouse",
    },
    {
      key: "5",
      no: "5",
      projectName: "Yoda Angular",
      startDate: "12/09/2021",
      endDate: "12/12/2021",
      tags: ["Soon"],
      assign: "Miracle Gouse",
    },
  ];

  return (
    <Card className="hp-border-color-black-40 hp-card-6 hp-project-table-card">
      <Row>
        <Col span={24}>
          <Row justify="space-between">
            <h5 className="hp-mb-16">Projects</h5>

            <RiMoreFill className="hp-text-color-dark-0" size={24} />
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
