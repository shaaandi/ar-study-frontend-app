import React, { useState } from 'react';
import { Row, Col, Typography, Drawer } from 'antd';
import styled from 'styled-components';
import Avatar from './AccountAvatar';

import { useHistory } from 'react-router-dom';

import useWindowSize from '../hooks/useWindowSize';

import ProfileDrawer from './ProfileDrawer';

const { Title } = Typography;

const BaseHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 5px 10px;
    background: white;
    border-bottom: solid 2px #dadada;
`;

const Header = (props) => {
    const [drawer, setDrawer] = useState(false);
    const window = useWindowSize();

    let drawerSize = '100%';
    let drawerClose = true;
    if (window) {
        if (window.width > 1100) {
            drawerSize = '30%';
            drawerClose = false;
        } else if (window.width > 780) {
            drawerSize = '50%';
            drawerClose = false;
        }
    }

    return (
        <>
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
                        <Avatar
                            onClick={() => setDrawer(true)}
                            name={'Saad A.'}
                        />
                    </BaseHeader>
                </Col>
            </Row>
            <ProfileDrawer
                placement="right"
                closable={drawerClose}
                onClose={() => setDrawer(false)}
                visible={drawer}
                width={drawerSize}
            />
        </>
    );
};

export default Header;
