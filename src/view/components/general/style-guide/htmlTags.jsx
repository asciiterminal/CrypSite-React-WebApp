import React from "react";

import { Card, Row, Col } from "antd";

export default function HtmlTags() {
  return (
    <Col className="hp-px-0">
      <div className="hp-mb-32">
        <h2 className="hp-mb-16">Typography</h2>

        <p className="hp-p1-body">
          These examples for typography, including global settings, headings,
          body text, lists, and more. When more control is needed, check out the
          textual utility classes.
        </p>
      </div>

      <div className="hp-mb-32">
        <h4>Headings</h4>

        <p className="hp-p1-body">
          All HTML headings,
          <span className="hp-text-color-primary-1 hp-text-color-dark-primary-2">&lt;h1&gt;</span> through
          <span className="hp-text-color-primary-1 hp-text-color-dark-primary-2">&lt;h6&gt;</span> are
          available.
        </p>
      </div>

      <Card className="hp-border-color-black-40">
        <Row justify="space-between" className="hp-mb-24">
          <Col span={12}>
            <p className="hp-caption hp-text-color-black-60">Tag</p>
          </Col>

          <Col span={12}>
            <p className="hp-caption hp-mt-1 hp-text-color-black-60">Size</p>
          </Col>
        </Row>

        <Row className="hp-mb-24 hp-border-bottom-1 hp-border-color-dark-80">
          <Col span={12}>
            <p className="hp-text-color-primary-1 hp-text-color-dark-primary-2">&lt;h1&gt; &lt;h1&gt;</p>
          </Col>

          <Col className="hp-float-right" span={12}>
            <h1 className="hp-mb-24">h1. Yoda heading</h1>
          </Col>
        </Row>

        <Row className="hp-mb-24 hp-border-bottom-1 hp-border-color-dark-80">
          <Col span={12}>
            <p className="hp-text-color-primary-1 hp-text-color-dark-primary-2">&lt;h2&gt; &lt;h2&gt;</p>
          </Col>

          <Col className="hp-float-right" span={12}>
            <h2 className="hp-mb-24">h2. Yoda heading</h2>
          </Col>
        </Row>

        <Row className="hp-mb-24 hp-border-bottom-1 hp-border-color-dark-80">
          <Col span={12}>
            <p className="hp-text-color-primary-1 hp-text-color-dark-primary-2">&lt;h3&gt; &lt;h3&gt;</p>
          </Col>

          <Col className="hp-float-right" span={12}>
            <h3 className="hp-mb-24">h3. Yoda heading</h3>
          </Col>
        </Row>

        <Row className="hp-mb-24 hp-border-bottom-1 hp-border-color-dark-80">
          <Col span={12}>
            <p className="hp-text-color-primary-1 hp-text-color-dark-primary-2">&lt;h4&gt; &lt;h4&gt;</p>
          </Col>

          <Col className="hp-float-right" span={12}>
            <h4 className="hp-mb-24">h4. Yoda heading</h4>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <p className="hp-text-color-primary-1 hp-text-color-dark-primary-2">&lt;h5&gt; &lt;h5&gt;</p>
          </Col>

          <Col className="hp-float-right" span={12}>
            <h5 className="hp-mb-24">h5. Yoda heading</h5>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
