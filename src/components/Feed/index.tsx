import { Header, Container } from './StyledFeed';
import PostBox from 'components/PostBox';
import Post from 'components/Post';

type Props = {}

function Feed({ }: Props) {
    return (
        <Container>
            <Header>
                Posts
            </Header>

            <PostBox />

            <Post
                displayName={'Tom Criuse'}
                username={'matsuda'}
                verified={true}
                text={'yayyy'}
                avatar={'https://i.pravatar.cc/300'}
                image={'https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            />
        </Container>
    )
}

export default Feed