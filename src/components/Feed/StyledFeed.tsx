import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.4;
  border-right: 1px solid var(--app-border-color);
  min-witdh: fit-content;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  border-bottom: 1px solid var(--app-border-color);
  padding: 15px 20px;
`;