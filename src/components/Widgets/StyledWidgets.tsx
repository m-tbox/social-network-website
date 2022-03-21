import styled from 'styled-components';
import Search from '@mui/icons-material/Search';

export const Container = styled.div`
  flex: 0.3;
`;

export const WidgetsInput = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  background-color: var(--app-secondary-color);
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 20px;

  > input {
    border: none;
    background-color: var(--app-secondary-color);
    width: 100%;
  }
`;

export const WidgetsContainer = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  padding: 20px;
  background-color: #f5f8fa;
  border-radius: 20px;
  > h2 {
    font-size: 18px;
    font-weight: 800; 
  }
`;

export const SearchIcon = styled(Search)`
  color: gray;
`;