import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Friends from "./app/components/Friends";
import Home from './app/components/Home';
import Login from "./app/components/Login";
import Profile from './app/components/Profile';
import RegisterUser from "./app/components/RegisterUser";
import WithNav from "./app/components/WithNav";
import WithoutNav from "./app/components/WithoutNav";
import FriendState from "./app/context/Friend/FriendState";
import PostState from "./app/context/Post/PostState";
import UserState from "./app/context/User/UserState";

function App() {


  return (
    <UserState>
      <PostState>
        <FriendState>

          <BrowserRouter>

            <Routes>

              <Route element={<WithoutNav />}>
                <Route strict path="/login" element={<Login />} />
                <Route strict path="/register" element={<RegisterUser />} />
              </Route>

              <Route element={<WithNav />} >
                <Route strict path="/" element={<Home />} />
                <Route strict path="/profile/:accountId" element={<Profile />} />
                <Route strict path="/:accountId/:type" element={<Friends />} />
              </Route>

            </Routes>

          </BrowserRouter>

        </FriendState>
      </PostState>
    </UserState>
  );
}

export default App;
