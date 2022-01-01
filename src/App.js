import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './app/components/Home';
import Navbar from './app/components/Navbar';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route strict path="/" element={<Home />} />
      </Routes>

      {/* <div id='overlay'></div> */}

    </BrowserRouter>
  );
}

export default App;
