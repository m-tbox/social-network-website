import styled from 'styled-components';

type Props = {
  active?: Boolean
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ active }) => active && `
    color: var(--app-theme-bg-color);
  `}
  &:hover {
    background-color: var(--hover-color);
    border-radius: 30px;
    color: var(--app-theme-bg-color);
    transition: color 100ms ease-out;
  }
  > .MuiSvgIcon-root {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 20px;
  margin-right: 20px;

  @media (max-width: 700px) {
    display: none;
  }
`;