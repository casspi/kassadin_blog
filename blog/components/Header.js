import React from 'react'
import '../public/style/pages/header.css'
import {Row,Col,Menu,Icon} from 'antd'

const Header=()=>(
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="logo-img">Kassadin</span>    
                <span className="logo-text">二手程序员</span>
            </Col>
            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu  mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home" />
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <Icon type="youtube" />
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        <Icon type="smile" />
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header

