import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dotStyle } from "./code.js";

import { Card, Row, Col, Divider, Steps, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

const { Step } = Steps;

export default function StepsDotStyle() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col lg={12} span={20} className="hp-mb-16">
          <h4>Dot Style</h4>
          <p className="hp-p1-body">Steps with progress dot style.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24} className="hp-overflow-scroll hp-scrollbar-x-hidden hp-pt-4">
          <Steps progressDot current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>

          <Divider />

          <div className="hp-pl-4">
            <Steps progressDot current={1} direction="vertical">
              <Step
                title="Finished"
                description="This is a description. This is a description."
              />
              <Step
                title="Finished"
                description="This is a description. This is a description."
              />
              <Step
                title="In Progress"
                description="This is a description. This is a description."
              />
              <Step title="Waiting" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </div>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {dotStyle}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
