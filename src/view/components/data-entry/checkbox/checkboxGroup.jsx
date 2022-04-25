import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { group } from "./code.js";

import { Card, Row, Col, Checkbox, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function CheckboxGroup() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  const plainOptions = ["Apple", "Pear", "Orange"];

  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];

  const optionsWithDisabled = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange", disabled: false },
  ];

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Checkbox Group</h4>
          <p className="hp-p1-body">
            Generate a group of checkboxes from an array.
          </p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={12}>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["Apple"]}
            onChange={onChange}
          />
          <br />
          <br />
          <Checkbox.Group
            options={options}
            defaultValue={["Pear"]}
            onChange={onChange}
          />
          <br />
          <br />
          <Checkbox.Group
            options={optionsWithDisabled}
            disabled
            defaultValue={["Apple"]}
            onChange={onChange}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {group}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
