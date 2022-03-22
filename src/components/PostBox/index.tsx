import { Avatar } from "@mui/material"
import { Container, Form, Input, InputContainer, PostBoxButton } from "./StyledPostBox"

type Props = {}

function PostBox({ }: Props) {
    return (
        <Container>
            <Form>
                <InputContainer>
                    <Avatar src="https://picsum.photos/640/360" />
                    <Input
                        placeholder="What's happening?"
                        fontSize={'20px'}
                    />
                </InputContainer>

                <Input
                    placeholder="Enter image URL"
                    padding={'10px'}
                />
                <PostBoxButton>
                    Post
                </PostBoxButton>
            </Form>
        </Container>
    )
}

export default PostBox