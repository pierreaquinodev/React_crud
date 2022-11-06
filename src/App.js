import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Create />} />
                    <Route path="/read" element={<Read />} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/delete" element={<Delete />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
