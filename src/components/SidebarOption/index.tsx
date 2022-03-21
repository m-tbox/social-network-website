import React from 'react';
import { Container, Title } from "./StyledSidebarOption";

type Props = {
    text: string,
    Icon: React.FC,
    active?: boolean
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