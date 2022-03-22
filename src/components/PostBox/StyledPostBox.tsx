import styled from 'styled-components';
import { Button } from '@mui/material';

type InputProps = {
    padding?: String,
    fontSize?: String,
}

export const Container = styled.div`
    padding-bottom: 10px;
    border-bottom: 8px solid var(--app-secondary-color);
    padding-right: 10px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    padding: 20px;
    display: flex;
`;

export const Input = styled.input<InputProps>`
    flex: 1;
    margin-left: 20px;
    ${({ fontSize }) => fontSize && `font-size: ${fontSize} !important;`}
    border: none;
    ${({ padding }) => padding && `padding: ${padding};`}
`;

export const PostBoxButton = styled(Button)`
    background-color: var(--app-theme-bg-color) !important;
    border: none !important;
    color: white !important;
    font-weight: 900 !important;
    text-transform: inherit !important;
    border-radius: 30px !important;
    width: 80px;
    height: 40px !important;
    margin-top: 20px !important;
    margin-left: auto !important;
`;