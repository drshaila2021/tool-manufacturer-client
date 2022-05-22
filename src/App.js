import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Home/Reviews";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import NavBar from "./Pages/Shared/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
