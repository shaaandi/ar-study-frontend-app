import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import { useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import useWindowSize from '../hooks/useWindowSize';

import Loading from './Loading';

const { Meta } = Card;

const { Title } = Typography;

const list = [
    {
        IBAN: '895-453-34-4',
        imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/arstudy-d71ad.appspot.com/o/book_cover_images%2F792EAA9B-8180-469A-8AA2-3D2C750BCA77?alt=media&token=f1a79345-498e-42a2-81ec-f384337bbc23',
        pages: 247,
        title: 'IGCSE Biology',
    },
    {
        IBAN: '123-232-23-22',
        imageUrl:
            'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-july-2019/large/bbcjuly19verynice.jpg?1384968217',
        pages: 147,
        title: 'Very Nice - by Marcy Denmarchy',
    },
    {
        IBAN: '222-432-53-22',
        imageUrl:
            'https://2.bp.blogspot.com/-fZoGdYQxf1M/TgvWYwPtA2I/AAAAAAAAJI0/1YQZfEFPN4A/s1600/A%252BGame%252Bof%252BThrones.jpg',
        pages: 347,
        title: 'A Games of Thrones - by George Martin',
    },
];

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
