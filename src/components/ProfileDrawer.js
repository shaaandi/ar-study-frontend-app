import React from 'react';
import styled from 'styled-components';
import { Drawer, Row, Col, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import ProfileImage from './ProfileImage';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Text } = Typography;

const LogoutWraper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

function ProfileDrawer(props) {
    const { onClose, closable, placement, visible, width } = props;
    // getting user profile data;
    const { profile } = useSelector(({ firebase }) => firebase);

    const { email, fullname, institute } = profile;

    let history = useHistory();

    return (
        <Drawer
            placement={placement}
            closable={closable}
            onClose={onClose}
            visible={visible}
            width={width}
        >
            <Row
                style={{ marginTop: closable ? '30px' : '0px' }}
                align={'middle'}
            >
                <Col span={24} align={'end'}>
                    <LogoutWraper
                        onClick={() => {
                            history.push('/logout');
                        }}
                    >
                        <div
                            style={{
                                fontSize: '20px',
                                marginRight: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Logout
                        </div>
                        <LogoutOutlined
                            style={{ fontSize: '30px', cursor: 'pointer' }}
                        />
                    </LogoutWraper>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '5px',
                        }}
                    >
                        <ProfileImage
                            src={
                                'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            }
                        />
                    </div>
                </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
                <Col span={8} style={{ fontSize: 'large' }}>
                    <Text strong={true}>Email: </Text>
                </Col>
                <Col span={16} style={{ fontSize: 'large' }}>
                    <Text>{email}</Text>
                </Col>
                <Col span={8} style={{ fontSize: 'large' }}>
                    <Text strong={true}>Full Name: </Text>
                </Col>
                <Col span={16} style={{ fontSize: 'large' }}>
                    <Text>{fullname}</Text>
                </Col>
                <Col span={8} style={{ fontSize: 'large' }}>
                    <Text strong={true}>Institute: </Text>
                </Col>
                <Col span={16} style={{ fontSize: 'large' }}>
                    <Text>{institute}</Text>
                </Col>
                <Col span={8} style={{ fontSize: 'large' }}>
                    <Text strong={true}>Class of: </Text>
                </Col>
                <Col span={16} style={{ fontSize: 'large' }}>
                    <Text>2023</Text>
                </Col>
            </Row>
        </Drawer>
    );
}

export default ProfileDrawer;
