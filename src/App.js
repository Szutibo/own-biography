import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Sponsors from './pages/Sponsors';
import UsefulSection from './pages/UsefulSection';
import Gallery from './pages/Gallery';

const App = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between bg-secondary/20'>
            <Navbar />
            <div className='min-h-full mb-auto'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/sponsors' element={<Sponsors />} />
                    <Route path='/useful' element={<UsefulSection />} />
                    <Route path='/gallery' element={<Gallery />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
};

export default App;
