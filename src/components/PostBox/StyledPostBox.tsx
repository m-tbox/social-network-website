import styled from 'styled-components';

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
