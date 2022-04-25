import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { miniProgressBar } from "./code.js";

import { Card, Row, Col, Progress, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function MiniProgessBar() {
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
              <h4>Mini size progress bar</h4>
              <p className="hp-p1-body">Appropriate for a narrow area.</p>
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

        <Col xxl={8} xl={15} span={20}>
          <div className="hp-mt-8">
            <p className="hp-mb-0 hp-p1-body">Progress Title</p>
            <Progress percent={30} />
          </div>

          <div className="hp-mt-8">
            <p className="hp-mb-0 hp-p1-body">Progress Title</p>
            <Progress percent={50} status="active" />
          </div>

          <div className="hp-mt-8">
            <p className="hp-mb-0 hp-p1-body">Progress Title</p>
            <Progress percent={70} status="exception" />
          </div>

          <div className="hp-mt-8">
            <p className="hp-mb-0 hp-p1-body">Progress Title</p>
            <Progress percent={100} />
          </div>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {miniProgressBar}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
