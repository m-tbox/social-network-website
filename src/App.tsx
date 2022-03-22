import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from 'components/Sidebar';
import Widgets from 'components/Widgets';
import Explore from 'components/Explore';
import UserPosts from 'components/UserPosts';
import Notification from 'components/Notifications';
import Messages from 'components/Messages';
import Bookmark from 'components/Bookmark';
import Profile from 'components/Profile';
import More from 'components/More';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Sidebar />
              <UserPosts />
              <Widgets />
            </>
          } />

          <Route path="/explore" element={
            <>
              <Sidebar />
              <Explore />
              <Widgets />
            </>
          } />

          <Route path="/notifications" element={
            <>
              <Sidebar />
              <Notification />
            </>
          } />

          <Route path="/messages" element={
            <>
              <Sidebar />
              <Messages />
            </>
          } />

          <Route path="/bookmark" element={
            <>
              <Sidebar />
              <Bookmark />
            </>
          } />

          <Route path="/profile" element={
            <>
              <Sidebar />
              <Profile />
            </>
          } />

          <Route path="/more" element={
            <>
              <Sidebar />
              <More />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
