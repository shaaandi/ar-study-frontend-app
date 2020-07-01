import React from 'react';
import { List, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import { useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import Loading from './Loading';

const notes = [
    {
        title: 'page-10',
        note: 'This is really an aweomse man. So detailed concept matter',
    },
    {
        title: 'page-21',
        note: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
    {
        title: 'page-22',
        note: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    },
];

function NotesList(props) {
    const uid = useSelector((state) => state.firebase?.auth?.uid);
    useFirebaseConnect([
        {
            path: `user-book-pages/${uid}`,
        },
    ]);
    let history = useHistory();

    const userBooksPages = useSelector(
        (store) => store.firebase.ordered['user-book-pages']
    );

    if (!userBooksPages || !userBooksPages[`${uid}`]) return <Loading />;

    let pagesArray = userBooksPages[`${uid}`].reduce((pgArray, { value }) => {
        // value is object of keys of pages;
        return [...pgArray, ...Object.keys(value)];
    }, []);

    console.log(pagesArray);

    //  const userBooks = data['user-book-pages']?.[`${uid}`]

    //  const books =
    //      userBooks.length > 0
    //          ? ordered.books.filter(({ key, value }) => {
    //                if (userBooks.includes(`${key}`)) {
    //                    return true;
    //                } else return false;
    //            })
    //          : [];

    return (
        <List
            loading={false}
            itemLayout="horizontal"
            // loadMore={loadMore}
            dataSource={notes}
            renderItem={({ title, note }) => (
                <Card
                    loading={false}
                    hoverable={true}
                    style={{ marginBottom: '10px' }}
                    onClick={() => {
                        history.push('/books/:boodId/notes/noteId');
                    }}
                >
                    <Card.Meta
                        title={title}
                        description={
                            note.length > 280
                                ? `${note.slice(0, 280)} ...`
                                : note
                        }
                    />
                </Card>

                // <List.Item
                //     style={{
                //         background: 'white',
                //         padding: '10px',
                //         margin: '10px 0px',
                //     }}
                //     // actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                // >
                //     <Skeleton avatar title={false} loading={false} active>
                //         <List.Item.Meta
                //             title={title}
                //             description={
                //                 note.length > 280
                //                     ? `${note.slice(0, 280)} ...`
                //                     : note
                //             }
                //         />
                //         {/* <Text ellipsis={true}>{`${title}: ${note}`}</Text> */}
                //     </Skeleton>
                // </List.Item>
            )}
        />
    );
}

export default NotesList;
