import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    margin-right: 8px;
`;

function AccountAvatar(props) {
    const { name } = props;
    return (
        <Wrapper onClick={props.onClick}>
            <Title>{name}</Title>
            <UserOutlined />
        </Wrapper>
    );
}

export default AccountAvatar;
