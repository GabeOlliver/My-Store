import React from 'react';
import Button from '../Button/Button';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <div className={styles.card}>
      {product.tag && <div className={styles.tag}>{product.tag}</div>}
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.info}>
          <span className={styles.price}>{formattedPrice}</span>
          <span className={styles.rating}>★ {product.rating.toFixed(1)}</span>
        </div>
        <div className={styles.footer}>
          <Button variant="solid" style={{ width: '100%' }}>
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;