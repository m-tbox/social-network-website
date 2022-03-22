import { useState } from "react"
import { Avatar } from "@mui/material"
import { Container, Form, Input, InputContainer, PostBoxButton } from "./StyledPostBox"
import { db, onValue, set, ref } from "helpers/firebaseHelper";

type Props = {}

function PostBox({ }: Props) {

    const [messageText, setMessageText] = useState('');
    const [messageImage, setMessageImage] = useState('');

    const sendMessage = (e: any) => {
        e.preventDefault();

        let index = 0;
        const postsData = ref(db, `userPosts/`);
        onValue(postsData, (snapshot) => {
            let data = snapshot.val();

            //TODO: Update after impletenting user login
            index = data.length;           
        });

        set(ref(db, `userPosts/${index}`), {
            displayName: 'Takuya Kimura',
            username: 'takuya',
            avatar: "https://www.thefamouspeople.com/profiles/images/takuya-kimura-1.jpg",
            verified: true,
            text: messageText,
            image: messageImage,
        });


        setMessageText("");
        setMessageImage("");
    }

    return (
        <Container>
            <Form>
                <InputContainer>
                    <Avatar src="https://picsum.photos/640/360" />
                    <Input
                        value={messageText}
                        onChange={e => setMessageText(e.target.value)}
                        placeholder="What's happening?"
                        fontSize={'20px'}
                        type="text"
                    />
                </InputContainer>

                <Input
                    value={messageImage}
                    onChange={e => setMessageImage(e.target.value)}
                    placeholder="Enter image URL"
                    padding={'10px'}
                />
                <PostBoxButton onClick={sendMessage} type="submit">
                    Post
                </PostBoxButton>
            </Form>
        </Container>
    )
}

export default PostBox