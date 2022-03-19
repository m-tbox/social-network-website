import React from 'react';
import { Section, Title } from "./StyledSidebarOption";

type Props = {
    text: String,
    Icon: React.FC
}

function SidebarOption({ text, Icon }: Props) {
    return (
        <Section>
            <Icon />
            <Title>{text}</Title>
        </Section>
    )
}

export default SidebarOption