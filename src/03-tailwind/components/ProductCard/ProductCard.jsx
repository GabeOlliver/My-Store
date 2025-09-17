import React from 'react';
import Button from '../Button/Button';

function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    // Container principal do card com flexbox, cor, sombra, borda, transição e hover
    <div className="relative flex flex-col overflow-hidden transition-transform duration-200 bg-surface-light dark:bg-surface-dark rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg">
      
      {/* Tag "Novo" ou "Promo" posicionada absolutamente */}
      {product.tag && (
        <div className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold text-white bg-secondary rounded-lg z-10">
          {product.tag}
        </div>
      )}
      
      {/* Wrapper da imagem com aspect ratio 1:1 */}
      <div className="aspect-square bg-gray-300 dark:bg-gray-600">
        <img src={product.image} alt={product.title} loading="lazy" className="object-cover w-full h-full"/>
      </div>
      
      {/* Corpo do card com padding e flexbox para alinhar o botão no final */}
      <div className="flex flex-col flex-grow p-4">
        
        {/* Título com limite de 2 linhas (plugin 'line-clamp') */}
        <h3 className="text-lg font-semibold leading-snug text-ink dark:text-sand h-[3.5em] line-clamp-2">
          {product.title}
        </h3>
        
        {/* Informações de preço e rating */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-primary">{formattedPrice}</span>
          <span className="text-ink dark:text-sand">★ {product.rating.toFixed(1)}</span>
        </div>
        
        {/* Footer que empurra o botão para baixo */}
        <div className="mt-auto pt-4">
          <Button variant="solid">
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;