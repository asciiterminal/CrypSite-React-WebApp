import { Link } from "react-router-dom";

import { Dropdown, Col, Avatar, Divider, Row } from "antd";
import { Calendar, Game, People, } from "react-iconly";

import avatarImg from "../../../assets/images/memoji/memoji-1.png";

export default function HeaderUser() {
  const menu = (
    <div className="hp-border-radius hp-border-1 hp-border-color-black-40 hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80 hp-p-24 hp-mt-12" style={{ width: 260 }}>
      <span className="hp-d-block h5 hp-text-color-black-100 hp-text-color-dark-0 hp-mb-8">Profile Settings</span>

      <Link
        to="/"
        className="hp-p1-body hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-2"
      >
        View Profile
      </Link>

      <Divider className="hp-mt-16 hp-mb-6" />

      <Row>
        <Col span={24}>
          <Link to="/" className="hp-d-flex-center hp-p1-body hp-py-8 hp-px-10 hp-d-block hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 hp-border-radius" style={{ marginLeft: -10, marginRight: -10 }}>
            <People
              set="curved"
              size={16}
            />

            <span className="hp-ml-8">Explore Creators</span>
          </Link>
        </Col>

        <Col span={24}>
          <Link to="/" className="hp-d-flex-center hp-p1-body hp-py-8 hp-px-10 hp-d-block hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 hp-border-radius" style={{ marginTop: -7, marginLeft: -10, marginRight: -10 }}>
            <Calendar
              set="curved"
              size={16}
            />

            <span className="hp-ml-8">Calendar Application</span>
          </Link>
        </Col>

        <Col span={24}>
          <Link to="/" className="hp-d-flex-center hp-p1-body hp-py-8 hp-px-10 hp-d-block hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 hp-border-radius" style={{ marginTop: -7, marginLeft: -10, marginRight: -10 }}>
            <Game
              set="curved"
              size={16}
            />

            <span className="hp-ml-8">Help Desk</span>
          </Link>
        </Col>
      </Row>

      <Divider className="hp-mb-16 hp-mt-6" />

      <Link to="/" className="hp-p1-body">
        Logout
      </Link>
    </div>
  );

  return (
    <Col>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Avatar src={avatarImg} size={40} className="hp-cursor-pointer" />
      </Dropdown>
    </Col>
  );
};
