import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Home from './app/components/Home';
import Login from "./app/components/Login";
import Navbar from './app/components/Navbar';
import Profile from './app/components/Profile';
import RegisterUser from "./app/components/RegisterUser";
import WithNav from "./app/components/WithNav";
import WithoutNav from "./app/components/WithoutNav";
import PostState from "./app/context/Post/PostState";

function App() {


  return (
    <PostState>
      <BrowserRouter>

        <Routes>

          <Route element={<WithoutNav />}>
            <Route strict path="/login" element={<Login />} />
            <Route strict path="/register" element={<RegisterUser />} />
          </Route>

          <Route element={<WithNav />} >
            <Route strict path="/" element={<Home />} />
            <Route strict path="/my-profile-page" element={<Profile />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </PostState>
  );
}

export default App;
