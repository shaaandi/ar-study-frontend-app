import React from 'react';
import styled from 'styled-components';
import { Spin, Space } from 'antd';

const ScalingTransition = styled.div`
    animation-name: beautiful;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    @keyframes beautiful {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(2);
        }
        100% {
            transform: scale(1);
        }
    }
`;

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Loading(props) {
    return (
        <Wrapper>
            <ScalingTransition>
                <Space size="middle">
                    <Spin size="large" />
                </Space>
            </ScalingTransition>
        </Wrapper>
    );
}

export default Loading;
