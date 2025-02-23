import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/custom.scss';
import './styles/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import About from './pages/About';
import ThemeContextProvider from './contexts/ThemeContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Elemento root não encontrado");
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/produto/:title/:id' element={<Product />} />
            <Route path='/categoria/:category' element={<Category />} />
            <Route path='/contato' element={<Contact />} />
            <Route path='/sobre' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);

