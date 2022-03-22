import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Title } from "./StyledSidebarOption";

type Props = {
    text: string,
    Icon: React.FC,
    navigateTo: string,
}

function SidebarOption({ text, Icon, navigateTo }: Props) {
    const navigate = useNavigate();
    const location = useLocation();

    const active = location.pathname === navigateTo;

    const openRoute = () => {
        navigate(navigateTo);
    }

    return (
        <Container active={active} onClick={openRoute}>
            <Icon />
            <Title>{text}</Title>
        </Container>
    )
}

export default SidebarOption