import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import ProductCardSkeleton from './components/ProductCard/ProductCardSkeleton';

const mockProducts = [
  // ... (seus dados mockados continuam aqui)
  { id: 1, title: 'Câmera Vintage 35mm com Lente Rápida e Design Clássico', price: 499.9, rating: 4.5, tag: 'Novo', image: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Fone de Ouvido Retrô com Qualidade de Estúdio e Conforto', price: 249.0, rating: 4.8, tag: 'Promo', image: 'https://via.placeholder.com/300' },
  { id: 3, title: 'Mochila de Lona Reforçada Estilo Aventureiro para Notebook', price: 189.9, rating: 4.7, image: 'https://via.placeholder.com/300' },
  { id: 4, title: 'Relógio de Pulso Analógico com Pulseira de Couro Genuíno', price: 320.5, rating: 4.6, tag: 'Novo', image: 'https://via.placeholder.com/300' },
  { id: 5, title: 'Tênis Casual Unissex Inspirado nos Anos 80 e 90', price: 299.99, rating: 4.9, image: 'https://via.placeholder.com/300' },
  { id: 6, title: 'Luminária de Mesa Industrial com Braço Articulado e Base de Madeira', price: 159.0, rating: 4.4, tag: 'Promo', image: 'https://via.placeholder.com/300' },
];

function CssGlobalApp() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Simula o carregamento de dados da API com 2 segundos de atraso
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="app-container">
        <h1>Versão: CSS Global</h1>
        
        <div className="product-grid">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => <ProductCardSkeleton key={index} />)
            : mockProducts.map((product) => <ProductCard key={product.id} product={product} />)
          }
        </div>
      </main>
    </>
  );
}

export default CssGlobalApp;