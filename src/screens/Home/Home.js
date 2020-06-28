import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import { Button, Layout } from 'antd';
import { Header, BooksList } from '../../components';

const { Content } = Layout;

const Home = (props) => {
    const firebase = useFirebase();
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
