import { Avatar } from '@mui/material'
import {
    PostHeaderDescription,
    AvatarContainer,
    VerifiedIcon,
    Container,
    PostBody,
    PostHeader,
    PostHeaderText,
    PostHeaderSpan,
    PostFooter,
    PostImage,
} from './StyledPost';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type Props = {
    displayName: string,
    username: string,
    avatar: string
    verified: boolean,
    text: string,
    image?: string,
}

function Post({ displayName, username, verified, text, image, avatar }: Props) {
    return (
        <Container>
            <AvatarContainer>
                <Avatar src={avatar} />
            </AvatarContainer>

            <PostBody>
                <PostHeader>
                    <PostHeaderText>
                        <h3>
                            {displayName} {" "}
                            <PostHeaderSpan>
                                <VerifiedIcon /> @ {username}
                            </PostHeaderSpan>
                        </h3>
                    </PostHeaderText>
                    <PostHeaderDescription>
                        <p>
                            I can do this
                        </p>
                    </PostHeaderDescription>
                </PostHeader>

                <PostImage src={image} alt="" />
                <PostFooter>
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </PostFooter>
            </PostBody>

        </Container>
    )
}

export default Post