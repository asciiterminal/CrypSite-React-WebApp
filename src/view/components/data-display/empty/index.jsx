import React from "react";

import { Row, Col } from "antd";

import Breadcrumbs from "../../../../layout/components/content/breadcrumbs";
import PageTitle from "../../../../layout/components/content/page-title";
import BasicEmpty from "./basic";
import EmptyChooseImage from "./chooseImage";
import EmptyCustomize from "./customize";
import EmptyGroups from "./groups";
import EmptySheets from "./sheets";
import EmptyQuestions from "./questions";
import EmptyForms from "./forms";
import EmptySearch from "./search";
import EmptySearch2 from "./search-2";
import EmptyNoDescription from "./noDescription";

export default function Empty() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Empty"
          />

          <PageTitle
            pageTitle="Empty"
            pageText="Empty state placeholder."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicEmpty />
      </Col>

      <Col span={24}>
        <EmptyChooseImage />
      </Col>

      <Col span={24}>
        <EmptyCustomize />
      </Col>

      <Col span={24}>
        <EmptyGroups />
      </Col>

      <Col span={24}>
        <EmptyForms />
      </Col>

      <Col span={24}>
        <EmptySheets />
      </Col>

      <Col span={24}>
        <EmptyQuestions />
      </Col>

      <Col span={24}>
        <EmptySearch />
      </Col>

      <Col span={24}>
        <EmptySearch2 />
      </Col>

      <Col span={24}>
        <EmptyNoDescription />
      </Col>
    </Row>
  );
}
