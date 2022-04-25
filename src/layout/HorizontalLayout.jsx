import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Layout, Row, Col } from "antd";

import HeaderHorizontal from "./components/header/HeaderHorizontal";
import MenuFooter from "./components/footer";
import ScrollTop from "./components/scroll-to-top";

const { Content } = Layout;

export default function HorizontalLayout(props) {
    const { children } = props;
    const [visible, setVisible] = useState(false);

    // Redux
    const customise = useSelector(state => state.customise)

    return (
        <Layout className={`hp-app-layout hp-bg-color-dark-90 ${customise.navigationBg && 'hp-app-layout-bg'}`}>
            <HeaderHorizontal visible={visible} setVisible={setVisible} />

            <Content className="hp-content-main">
                <Row justify="center">
                    {
                        customise.contentWidth == "full" && (
                            <Col span={24}>
                                {children}
                            </Col>
                        )
                    }

                    {
                        customise.contentWidth == "boxed" && (
                            <Col xxl={20} xl={22} span={24}>
                                {children}
                            </Col>
                        )
                    }
                </Row>
            </Content>

            <MenuFooter />

            <ScrollTop />
        </Layout>
    );
};