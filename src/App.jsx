import React from 'react';
import Homepage from './Homepage';
import About from './About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Harypoter from '../Pages/Harypoter';
import Batman from '../Pages/Batman'
import Aboutserching from '../Pages/Aboutserching';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/navbar' element={<Navbar />} />
                    <Route path='/harypoter' element={<Harypoter />} />
                    <Route path='/batman' element={<Batman />} />
                    <Route path='/aboutserch' element={<Aboutserching/>} />

               </Routes>

            </BrowserRouter>
        </>
    );
};



export default App;

