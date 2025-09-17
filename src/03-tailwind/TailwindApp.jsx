import React, { useState, useEffect } from 'react';
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

function TailwindApp() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [isLoading, setIsLoading] = useState(true);

  // Efeito para aplicar a classe 'dark' no HTML
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Efeito para simular o carregamento
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-sand dark:bg-background-dark">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <h1 className="text-3xl font-bold text-ink dark:text-sand mb-6">Versão: Tailwind CSS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => <ProductCardSkeleton key={index} />)
            : mockProducts.map((product) => <ProductCard key={product.id} product={product} />)
          }
        </div>
      </main>
    </div>
  );
}

export default TailwindApp;