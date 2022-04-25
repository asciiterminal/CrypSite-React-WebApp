import React, { useState, createElement, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { useSelector } from 'react-redux';

import {
    Layout,
    Button,
    Row,
    Col,
} from "antd";
import {
    RiMenuFoldLine,
    RiMenuUnfoldLine,
} from "react-icons/ri";

import logoSmall from "../../../assets/images/logo/logo-small.svg";

import MenuLogo from "./logo";
import MenuFooter from "./footer";
import MenuItem from "./item";
import MenuMobile from "./mobile";

const { Sider } = Layout;

export default function Sidebar(props) {
    const { visible, setVisible } = props;

    // Redux
    const customise = useSelector(state => state.customise)

    // Collapsed
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if (customise.sidebarCollapsed) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    }, [customise])

    // Location
    const location = useLocation();
    const { pathname } = location;

    // Mobile Sidebar
    const onClose = () => {
        setVisible(false);
    };

    // Menu
    function toggle() {
        setCollapsed(!collapsed);
    }

    const trigger = createElement(
        collapsed ? RiMenuUnfoldLine : RiMenuFoldLine,
        {
            className: "trigger",
            onClick: toggle,
        }
    );

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={256}
            className="hp-sidebar hp-bg-color-black-0 hp-bg-color-dark-100"
        >
            <Row className="hp-mr-12 hp-ml-24 hp-mt-24" align="bottom" justify="space-between">
                <Col>
                    {collapsed === false ? <MenuLogo onClose={onClose} /> : ""}
                </Col>

                {
                    customise.sidebarCollapseButton && (
                        <Col className="hp-pr-0">
                            <Button
                                icon={trigger}
                                type="text"
                                className="hp-float-right hp-text-color-dark-0"
                            ></Button>
                        </Col>
                    )
                }

                {collapsed !== false && (
                    <Col className="hp-mt-8">
                        <Link
                            to="/"
                            onClick={onClose}
                        >
                            <img className="hp-logo" src={logoSmall} alt="logo" />
                        </Link>
                    </Col>
                )}
            </Row>

            <MenuItem onClose={onClose} />

            <MenuFooter onClose={onClose} collapsed={collapsed} />

            <MenuMobile onClose={onClose} visible={visible} />
        </Sider>
    );
};
