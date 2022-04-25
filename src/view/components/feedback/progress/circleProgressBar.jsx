import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { circleProgressBar } from "./code.js";

import { Card, Row, Col, Progress, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function CircleProgessBar() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Circular progress bar</h4>
              <p className="hp-p1-body">A circular progress bar.</p>
            </Col>

            <Col lg={12} span={4} className="hp-text-right">
              <Button
                onClick={toggleChecked}
                type="text"
                icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[8, 8]}>
            <Col>
              <Progress
                type="circle"
                width={160}
                percent={75}
                strokeWidth={2}
              />
            </Col>

            <Col className="hp-text-center">
              <Progress
                type="circle"
                percent={70}
                width={160}
                strokeWidth={2}
                status="exception"
              />
              <p className="hp-badge-text hp-font-weight-400 hp-mb-0 hp-mt-8">
                Information
              </p>
            </Col>

            <Col className="hp-text-center">
              <Progress
                type="circle"
                percent={100}
                width={160}
                strokeWidth={2}
              />
              <p className="hp-badge-text hp-font-weight-400 hp-mb-0 hp-mt-8">
                Information
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {circleProgressBar}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
