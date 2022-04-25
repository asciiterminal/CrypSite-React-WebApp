import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dangerButton } from "./code.js";

import { Card, Row, Col, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function DangerButton() {
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
          <h4>Danger Button</h4>
          <p className="hp-p1-body">Danger is a property of button</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Button className="hp-mr-16 hp-mb-16" type="primary" danger>
            Primary
          </Button>

          <Button className="hp-mr-16 hp-mb-16" danger>
            Default
          </Button>

          <Button className="hp-mr-16 hp-mb-16" type="dashed" danger>
            Dashed
          </Button>

          <Button className="hp-mr-16 hp-mb-16" type="text" danger>
            Text
          </Button>

          <Button className="hp-mr-16 hp-mb-16" type="link" danger>
            Link
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {dangerButton}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
