import React from 'react';
import { Layout } from 'antd';
import { Header, BooksList } from '../../components';

const { Content } = Layout;

const Home = (props) => {
    return (
        <>
            <Header />
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <BooksList />
            </Content>
        </>
    );
};

export default Home;
