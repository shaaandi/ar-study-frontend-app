import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import { useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import useWindowSize from '../hooks/useWindowSize';

import Loading from './Loading';

const { Meta } = Card;

const { Title } = Typography;

const BooksList = (props) => {
    useFirebaseConnect([{ path: 'user-book-pages' }, { path: 'books' }]);
    const window = useWindowSize();
    const history = useHistory();

    const uid = useSelector((state) => state.firebase?.auth?.uid);

    const data = useSelector((store) => store.firebase.data);
    const ordered = useSelector((store) => store.firebase.ordered);

    if (!data || !data['user-book-pages'] || !data['books']) {
        return <Loading />;
    }

    const userBooks = data['user-book-pages']?.[`${uid}`]
        ? Object.keys(data['user-book-pages'][`${uid}`])
        : [];

    const books =
        userBooks.length > 0
            ? ordered.books.filter(({ key, value }) => {
                  if (userBooks.includes(`${key}`)) {
                      return true;
                  } else return false;
              })
            : [];

    let justify = 'start';

    if (window) {
        if (window.width < 600) {
            justify = 'center';
        }
    }

    justify = 'start';

    return (
        <>
            <Title style={{ textAlign: justify }}>My Library</Title>
            <Row
                gutter={[
                    { xs: 10, sm: 10, md: 20, lg: 30 },
                    { xs: 10, sm: 10, md: 15, lg: 15 },
                ]}
                justify={justify}
            >
                {books.map(
                    ({ key, value: { IBAN, title, imageURL, pages } }) => {
                        return (
                            <Col lg={{ span: 6 }} key={key}>
                                <Card
                                    hoverable
                                    style={{ width: 200 }}
                                    cover={
                                        <img alt="book cover" src={imageURL} />
                                    }
                                    onClick={() => {
                                        history.push('/books/:324322q4qgresf3');
                                    }}
                                >
                                    <Meta
                                        title={title}
                                        description={`${pages} pages`}
                                    />
                                    <Meta title={`IBAN: ${IBAN}`} />
                                </Card>
                            </Col>
                        );
                    }
                )}
            </Row>
        </>
    );
};

export default BooksList;
