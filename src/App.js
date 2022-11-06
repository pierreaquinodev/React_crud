import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Create />} />
                    <Route path="/read" element={<Read />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
