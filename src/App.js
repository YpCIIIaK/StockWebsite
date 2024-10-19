import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CompanyPage from './components/Pages/CompanyPage/CompanyPage';
import HomePage from './components/Pages/Home/HomePage';
import AboutPage from './components/Pages/About/AboutPage';
import PortfolioPage from "./components/Pages/Portfolio/PortfolioPage";

function App() {
    const handleLinkClick = () => {};

    return (
        <Router>
            <div className="App">
                <Navbar
                    logo="TraderKek"
                    links={['Home', 'About', 'Portfolio']}
                    styleType="black"
                    onLinkClick={handleLinkClick}
                />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/company/:ticker" element={<CompanyPage />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
