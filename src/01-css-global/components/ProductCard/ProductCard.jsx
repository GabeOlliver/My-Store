import React from 'react';
import Button from '../Button/Button';
import './ProductCard.css';

function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <div className="card">
      {product.tag && <div className="card-tag">{product.tag}</div>}
      <div className="card-image-wrapper">
        <img
          className="card-image"
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <div className="card-info">
          <span className="card-price">{formattedPrice}</span>
          <span className="card-rating">★ {product.rating.toFixed(1)}</span>
        </div>
        <div className="card-footer">
          <Button variant="solid" style={{ width: '100%' }}>
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;