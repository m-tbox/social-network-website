import { Avatar, Button } from "@mui/material"
import { Container, Form, Input, InputContainer } from "./StyledPostBox"
import './style.css';

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
                <Button className="postbox__button">
                    Post
                </Button>
            </Form>
        </Container>
    )
}

export default PostBox