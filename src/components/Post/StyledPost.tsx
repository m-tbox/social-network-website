import styled from 'styled-components';
import Verified from '@mui/icons-material/Verified';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid var(--app-border-color);
    padding-bottom: 10px;
`;

export const AvatarContainer = styled.div`
  padding: 20px;
`;

export const PostBody = styled.div`
    flex: 1;
    padding: 10px 30px 10px 10px;
`;

export const PostHeader = styled.div`
   
`;

export const PostHeaderSpan = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: gray;

  display: flex;
  > p {
    margin-left: 10px;
  }
`;

export const PostHeaderText = styled.div`
    > h3 {
        font-size: 15px;
        margin-bottom: 5px;
        display: flex;  
        align-items: center;
    }
`;

export const PostHeaderDescription = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
`;

export const PostImage = styled.img`
    border-radius: 20px;
    width: 100%;    
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const VerifiedIcon = styled(Verified)`
    font-size: 14px !important;
    color: var(--app-blue);
    margin-left: 3px;
`;