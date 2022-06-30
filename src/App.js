import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import AltasPage from './pages/AltasPage';
import ModPage from './pages/ModPage';
import BajasPage from './pages/BajasPage';
import Navbar from "./components/Navbar";

export default function App(){
    return(
        <BrowserRouter>

            <Navbar/>
            <Routes>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/AltasPage" element={<AltasPage/>}/>
                <Route path="/ModPage" element={<ModPage/>}/>
                <Route path="/BajasPage" element={<BajasPage/>}/>
            </Routes>
        
        </BrowserRouter>
        
    );
}