import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #E1ECE3;
  }
  > .MuiSvgIcon-root {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 20px;
  margin-right: 20px;
`;
