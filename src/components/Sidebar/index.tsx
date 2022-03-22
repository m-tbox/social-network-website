import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import SidebarOption from 'components/SidebarOption';
import { Container, LanguageIcon, PostButton } from './StyledSidebar';

type Props = {

}

function Sidebar({ }: Props) {
  return (
    <Container>
      <LanguageIcon />

      <SidebarOption Icon={HomeIcon} text="Home" navigateTo="/" />
      <SidebarOption Icon={SearchIcon} text="Explore" navigateTo="/explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" navigateTo="/notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" navigateTo="/messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" navigateTo="/bookmark" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" navigateTo="/profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" navigateTo="/more" />

      <PostButton fullWidth>
        Post
      </PostButton>

    </Container>
  )
}

export default Sidebar