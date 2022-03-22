import styled from 'styled-components';
import { Button } from '@mui/material';
import World from '@mui/icons-material/Language';

export const Container = styled.div`
    border-right: 1px solid var(--app-border-color);
    flex: 0.2;
    min-width: 250px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
`;


export const PostButton = styled(Button)`
    background-color: var(--app-theme-bg-color) !important;
    color: var(--app-theme-text-color) !important;
    border: none !important;
    font-weight: 900 !important;
    text-transform: inherit !important;

    border-radius: 30px !important;
    height: 50px !important;
    margin-top: 20px !important;
`;

export const LanguageIcon = styled(World)`
    color: var(--app-theme-bg-color);
    font-size: 30px !important;
    margin-left: 20px;
    margin-bottom: 20px;
`;