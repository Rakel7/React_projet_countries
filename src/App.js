import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Blog from './pages/Blog';




const App = () => {
  return (
    <BrowserRouter>
      <Routes> {/*Test toute les routes et si elles ne sont pas bonnes redirection erreur 404 */}
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* path="*" fonctionne si l'url ne correspond à rien de declaré ici */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;