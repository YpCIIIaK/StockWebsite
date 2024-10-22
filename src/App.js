import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CompanyPage from './components/Pages/CompanyPage/CompanyPage';
import HomePage from './components/Pages/Home/HomePage';
import AboutPage from './components/Pages/About/AboutPage';
import PortfolioPage from "./components/Pages/Portfolio/PortfolioPage";
import Footer from "./components/footer/Footer";
import PrivacyTermsPage from "./components/Pages/PrivacyTerms/PrivacyTermsPage";
import ContactPage from "./components/Pages/Contact/ContactPage";
import Overview from "./components/Pages/Portfolio/Overview";

function App() {
    const links = [
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Terms of Service', to: '/terms-of-service' },
        { label: 'Contact Us', to: '/contact-us' },
    ];

    return (
        <Router>
            <div className="App">
                <Navbar
                    logo="TraderKek"
                    links={['Home', 'About', 'Portfolio']}
                    styleType="black"
                />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />}>
                        <Route path="overview" element={<Overview />} />
                    </Route>
                    <Route path="/company/:ticker" element={<CompanyPage />} />
                    <Route path="/privacy-policy" element={<PrivacyTermsPage />} />
                    <Route path="/terms-of-service" element={<PrivacyTermsPage />} />
                    <Route path="/contact-us" element={<ContactPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

                <Footer
                    text="© 2024 Company. All rights reserved."
                    links={links}
                    styleType="black"
                />
            </div>
        </Router>
    );
}

export default App;