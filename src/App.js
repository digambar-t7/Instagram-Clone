import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './app/components/Home';
import Navbar from './app/components/Navbar';
import Profile from './app/components/Profile';
import Footer from './app/components/Footer';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route strict path="/" element={<Home />} />
        <Route strict path="/my-profile-page" element={<Profile />} />
      </Routes>

      {/* <div id='overlay'></div> */}
    </BrowserRouter>
  );
}

export default App;
