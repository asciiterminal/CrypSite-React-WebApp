import React from "react";

import { Card, Row, Col, Tooltip } from "antd";

export default function BlackGradients() {
  return (
    <Card className="hp-border-color-black-40">
      <Row className="hp-mb-16">
        <h4 className="hp-w-100">Blacks & Gradients</h4>

        <p className="hp-p1-body">
          Black tags can be use with class
          .hp-&#123;css-property&#125;-black-dark-bg, Gradients can be used with
          class .hp-&#123;css-property&#125;-primary-gradient. Gradients is used
          for background instead of backgroun-color.
        </p>
      </Row>

      <Row justify="space-between" className="hp-mb-48">
        <Col>
          <Row className="hp-border-radius hp-overflow-hidden hp-border-color-black-40">
            <Col>
              <Tooltip title="Dark-Bg #111314">
                <Col className="hp-bg-color-black-bg hp-color-wrapper hp-border-radius-l hp-mb-8"></Col>
              </Tooltip>
              <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> Dark-Bg</p>
            </Col>

            <Col>
              <Tooltip title="B-100 #2D3436">
                <Col className="hp-bg-color-black-100 hp-color-wrapper hp-mb-8"></Col>
              </Tooltip>
              <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-100</p>
            </Col>

            <Col>
              <Tooltip title="B-80 #636E72">
                <Col className="hp-bg-color-black-80 hp-color-wrapper hp-mb-8"></Col>
              </Tooltip>
              <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-80</p>
            </Col>

            <Col>
              <Tooltip title="B-60 #B2BEC3">
                <Col className="hp-bg-color-black-60 hp-color-wrapper hp-mb-8"></Col>
              </Tooltip>
              <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-60</p>
            </Col>

            <Col>
              <Tooltip title="B-40 #DFE6E9">
                <Col className="hp-bg-color-black-40 hp-color-wrapper hp-mb-8"></Col>
              </Tooltip>
              <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-40</p>
            </Col>

            <Col>
              <Tooltip title="B-20 #F0F3F5">
                <Col className="hp-bg-color-black-20 hp-color-wrapper hp-mb-8"></Col>
              </Tooltip>
              <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-20</p>
            </Col>

            <Col>
              <Tooltip title="B-10 #F7FAFC">
                <Col className="hp-bg-color-black-10 hp-color-wrapper hp-mb-8"></Col>
              </Tooltip>
              <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-10</p>
            </Col>

            <Col>
              <Tooltip title="B-0 #FFFFFF">
                <Col className="hp-bg-color-black-10 hp-color-wrapper hp-border-radius-r hp-mb-8"></Col>
              </Tooltip>
              <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-0</p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col>
          <Col className="hp-bg-primary-gradient hp-color-wrapper hp-border-radius hp-mb-8"></Col>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Primary <br />
            Gradient
          </p>
        </Col>

        <Col>
          <Col className="hp-bg-secondary-gradient hp-color-wrapper hp-border-radius hp-mb-8"></Col>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Secondary <br />
            Gradient
          </p>
        </Col>

        <Col>
          <Col className="hp-bg-danger-gradient hp-color-wrapper hp-border-radius hp-mb-8"></Col>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Danger <br />
            Gradient
          </p>
        </Col>

        <Col>
          <Col className="hp-bg-info-gradient hp-color-wrapper hp-border-radius hp-mb-8"></Col>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Info <br />
            Gradient
          </p>
        </Col>

        <Col>
          <Col className="hp-bg-success-gradient hp-color-wrapper hp-border-radius hp-mb-8"></Col>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Success <br />
            Gradient
          </p>
        </Col>

        <Col>
          <Col className="hp-bg-warning-gradient hp-color-wrapper hp-border-radius hp-mb-8"></Col>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Warning <br />
            Gradient
          </p>
        </Col>
      </Row>
    </Card>
  );
}
