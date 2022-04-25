import React from "react";

import { Card, Row, Col, Tooltip } from "antd";

export default function ThemeColors() {
  return (
    <Col className="hp-px-0">
      <div xl={12} lg={24}>
        <h4 className="hp-mb-0">Color Guide</h4>
        
        <p className="hp-text-color-black-80">
          We used dynamic colors to clearly convey the actions, situation and
          direction within the interface. They serve to make things simple to
          understand.
        </p>
      </div>

      <Card className="hp-border-color-black-40">
        <Row className="hp-mb-16">
          <h4 className="hp-w-100">Theme Colors</h4>
          
          <p className="hp-p1-body">
            Theme colors can be use with class
            .hp-&#123;css-property&#125;-primary-1. It's available for text,
            background-color, background and border.
          </p>
        </Row>

        <Row className="hp-mb-48">
          <Col lg={8} sm={8} md={8} xs={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-mr-24">
              <Tooltip title="Pr-1 #0010F7">
                <Col className="hp-bg-color-primary-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col>
                <Tooltip title="Pr-4 #EBFAFA" placement="right">
                  <Col className="hp-bg-color-primary-4 hp-color-wrapper-sm hp-border-radius-tr"></Col>
                </Tooltip>
                <Tooltip title="Pr-3 #55B1F3" placement="right">
                  <Col className="hp-bg-color-primary-3 hp-color-wrapper-sm"></Col>
                </Tooltip>
                <Tooltip title="Pr-2 #0063F7" placement="right">
                  <Col className="hp-bg-color-primary-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                </Tooltip>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Primary</p>
          </Col>

          <Col lg={8} sm={8} md={8} xs={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-mr-24">
              <Tooltip title="Se-1 #C903FF">
                <Col className="hp-bg-color-secondary-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col>
                <Tooltip title="Se-4 #FDEFFC" placement="right">
                  <Col className="hp-bg-color-secondary-4 hp-color-wrapper-sm hp-border-radius-tr"></Col>
                </Tooltip>
                <Tooltip title="Se-3 #F7C2FF" placement="right">
                  <Col className="hp-bg-color-secondary-3 hp-color-wrapper-sm"></Col>
                </Tooltip>
                <Tooltip title="Se-2 #E26BF5" placement="right">
                  <Col className="hp-bg-color-secondary-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                </Tooltip>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Secondary</p>
          </Col>

          <Col lg={8} sm={8} md={8} xs={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-mr-24">
              <Tooltip title="hp-1 #FF0022">
                <Col className="hp-bg-color-danger-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col>
                <Tooltip title="hp-4 #FFE7EA" placement="right">
                  <Col className="hp-bg-color-danger-4 hp-color-wrapper-sm hp-border-radius-tr"></Col>
                </Tooltip>
                <Tooltip title="hp-3 #FF8B9A" placement="right">
                  <Col className="hp-bg-color-danger-3 hp-color-wrapper-sm"></Col>
                </Tooltip>
                <Tooltip title="hp-2 #FF455E" placement="right">
                  <Col className="hp-bg-color-danger-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                </Tooltip>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Danger</p>
          </Col>
        </Row>

        <Row>
          <Col lg={8} sm={8} md={8} xs={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-mr-24">
              <Tooltip title="Su-1 #00F7BF">
                <Col className="hp-bg-color-success-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col>
                <Tooltip title="Su-4 #EAFFF8" placement="right">
                  <Col className="hp-bg-color-success-4 hp-color-wrapper-sm hp-border-radius-tr"></Col>
                </Tooltip>
                <Tooltip title="Su-3 #98FFE0" placement="right">
                  <Col className="hp-bg-color-success-3 hp-color-wrapper-sm"></Col>
                </Tooltip>
                <Tooltip title="Su-2 #5BFFCE" placement="right">
                  <Col className="hp-bg-color-success-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                </Tooltip>
              </Col>
            </Row>
            
            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Success</p>
          </Col>

          <Col lg={8} sm={8} md={8} xs={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-mr-24">
              <Tooltip title="Wa-1 #FFC212">
                <Col className="hp-bg-color-warning-1 hp-color-wrapper-xl"></Col>
              </Tooltip>
              
              <Col>
                <Tooltip title="Wa-4 #FFF9E9" placement="right">
                  <Col className="hp-bg-color-warning-4 hp-color-wrapper-sm hp-border-radius-tr"></Col>
                </Tooltip>
                <Tooltip title="Wa-3 #FFE393" placement="right">
                  <Col className="hp-bg-color-warning-3 hp-color-wrapper-sm"></Col>
                </Tooltip>
                <Tooltip title="Wa-2 #FFD252" placement="right">
                  <Col className="hp-bg-color-warning-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                </Tooltip>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Warning</p>
          </Col>

          <Col lg={8} sm={8} md={8} xs={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-mr-24">
              <Tooltip title="In-1 #1BE7FF">
                <Col className="hp-bg-color-info-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col>
                <Tooltip title="In-4 #EAFCFF" placement="right">
                  <Col className="hp-bg-color-info-4 hp-color-wrapper-sm hp-border-radius-tr"></Col>
                </Tooltip>
                <Tooltip title="In-3 #97F4FF" placement="right">
                  <Col className="hp-bg-color-info-3 hp-color-wrapper-sm"></Col>
                </Tooltip>
                <Tooltip title="In-2 #59EDFF" placement="right">
                  <Col className="hp-bg-color-info-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                </Tooltip>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Info</p>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
