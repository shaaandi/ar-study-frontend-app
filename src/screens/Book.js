import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { PageHeader, Layout, Typography } from 'antd';
import ProfileDrawer from '../components/ProfileDrawer';
import Avatar from '../components/AccountAvatar';
import useWindowSize from '../hooks/useWindowSize';

import NotesList from '../components/NotesList';
import Note from '../components/Note';

const { Content } = Layout;
const { Title } = Typography;

function Book(props) {
    const { history } = props;

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
            <PageHeader
                title={'Book Title'}
                style={{
                    padding: '2px 10px',
                    background: 'white',
                    borderBottom: 'solid 2px #dadada',
                }}
                subTitle={'Notes'}
                onBack={() => history.goBack()}
                extra={[
                    <Avatar onClick={() => setDrawer(true)} name={'Saad A.'} />,
                ]}
            ></PageHeader>
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: 'whitesmoke',
                }}
            >
                <Route path="/books/:bookId/notes/:noteId" component={Note} />
                <Route
                    path={'/books/:bookid'}
                    exact={true}
                    component={() => (
                        <>
                            <Title>Notes</Title>
                            <NotesList />
                        </>
                    )}
                />
            </Content>
            <ProfileDrawer
                placement="right"
                closable={drawerClose}
                onClose={() => setDrawer(false)}
                visible={drawer}
                width={drawerSize}
            />
        </>
    );
}

export default Book;
