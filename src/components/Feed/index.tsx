import { useEffect, useState } from 'react';
import { Header, Container } from './StyledFeed';
import PostBox from 'components/PostBox';
import Post from 'components/Post';
import { db, ref, onValue } from 'helpers/firebaseHelper';

type Props = {
    snapshot?: Object,
    posts: Array<any>,
    showMessageInput?: boolean
}

type PKeys = {
    displayName: string,
    username: string,
    verified: boolean,
    text: string,
    avatar: string,
    image?: string,
}


function Feed({ posts, showMessageInput }: Props) {
    return (
        <Container>
            <Header>
                Posts
            </Header>

            {showMessageInput && <PostBox />}

            {
                posts?.map((post: PKeys, index: number) =>
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