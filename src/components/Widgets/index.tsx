import { Container, SearchIcon, WidgetsContainer, WidgetsInput } from './StyledWidgets';
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed,
} from "react-twitter-embed";

type Props = {}

function Widgets({ }: Props) {
    return (
        <Container>
            <WidgetsInput>
                <SearchIcon />
                <input placeholder="Search" type="text" />
            </WidgetsInput>

            <WidgetsContainer>
                <h2> What's happening </h2>
                <TwitterTweetEmbed tweetId={"1505559794987372544"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="KeanuReevesoff1"
                    options={{ height: 400 }}
                />
            </WidgetsContainer>
        </Container>
    )
}

export default Widgets