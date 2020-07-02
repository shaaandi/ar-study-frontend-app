import React from 'react';
import { Auth } from '../components';
import { Typography, Row, Col } from 'antd';

import styled from 'styled-components';

const { Title } = Typography;

const AuthWrapper = styled.div`
    background: #e3d9d7;
    height: 100vh;
`;

const AboutBtn = styled.a`
    background: no-repeat;
    border: none;
    font-size: 26px;
    color: #e3d9d7;
    &:focus {
        outline: none;
    }
`;
const AboutDiv = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    background: #f46161;
`;

const BaseHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0px 0px 0px 10px;
    // background: white;
    border-bottom: solid 2px #f46161;
`;

function Authentication() {
    return (
        <AuthWrapper>
            <Row>
                <Col span={24}>
                    <BaseHeader>
                        <Title
                            style={{
                                margin: '0',
                                fontFamily: 'Piedra, cursive',
                                fontWeight: 'lighter',
                            }}
                            level={2}
                        >
                            AR Study
                        </Title>
                        <AboutDiv>
                            <AboutBtn
                                href={'https://shaaandi.github.io/ARStudy-app/'}
                            >
                                About
                            </AboutBtn>
                        </AboutDiv>
                    </BaseHeader>
                </Col>
            </Row>
            <Row justify="center" align="middle" style={{ height: '90vh' }}>
                <Col xs={20} sm={24}>
                    <Auth />
                </Col>
            </Row>
        </AuthWrapper>
    );
}

export default Authentication;
