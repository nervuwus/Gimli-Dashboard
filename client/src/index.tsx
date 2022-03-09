import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Discord from './Components/discord';
import About from './Components/about';

render(
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<App />} />
                <Route path="/discord" element={<Discord />} />
                <Route path="/about" element={<About />}/> 
            </Route>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
