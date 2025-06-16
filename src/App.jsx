import "./CSS/App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorite from "./Pages/Favorite";
import NavBar from "./Components/NavBar";
import { MovieProvider } from "./Context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
