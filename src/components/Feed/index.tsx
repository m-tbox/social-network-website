import { useEffect, useState } from 'react';
import { Header, Container } from './StyledFeed';
import PostBox from 'components/PostBox';
import Post from 'components/Post';
import { ref, db, onValue } from 'helpers/firebaseHelper';

type Props = {
    snapshot?: Object
}

type PKeys = {
    displayName: string,
    username: string,
    verified: boolean,
    text: string,
    avatar: string,
    image?: string,
}


function Feed({ }: Props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postsData = ref(db, `posts/`);
        onValue(postsData, (snapshot) => {
            let data = snapshot.val();

            console.log('DAtata', data);
            setPosts(data);

        });
    }, []);

    return (
        <Container>
            <Header>
                Posts
            </Header>

            <PostBox />

            {
                posts.map((post: PKeys, index: number) =>
                    <Post
                        key={index}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                )
            }
        </Container>
    )
}

export default Feed