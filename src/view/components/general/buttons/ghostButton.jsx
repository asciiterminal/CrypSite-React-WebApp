import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ghostButton } from "./code.js";

import { Card, Row, Col, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function GhostButton() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-pb-16" lg={12} span={20}>
          <h4>Ghost Button</h4>
          <p className="hp-p1-body">
            Ghost property will make button's background transparent, it is
            commonly used in colored background.
          </p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <div className="hp-d-inline-block hp-bg-color-black-20 hp-bg-color-dark-90 hp-px-16 hp-pt-16">
            <Button className="hp-mr-16 hp-mb-16" type="primary" ghost>
              Primary
            </Button>

            <Button className="hp-mr-16 hp-mb-16" ghost>
              Default
            </Button>

            <Button className="hp-mr-16 hp-mb-16" type="dashed" ghost>
              Dashed
            </Button>
          </div>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {ghostButton}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
