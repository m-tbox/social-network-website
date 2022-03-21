import React from 'react';
import { Container, Title } from "./StyledSidebarOption";

type Props = {
    text: String,
    Icon: React.FC,
    active?: Boolean
}

function SidebarOption({ active, text, Icon }: Props) {
    return (
        <Container active={active}>
            <Icon />
            <Title>{text}</Title>
        </Container>
    )
}

export default SidebarOption