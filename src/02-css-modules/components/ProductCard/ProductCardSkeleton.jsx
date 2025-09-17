import React from 'react';
import Skeleton from '../Skeleton/Skeleton';
import cardStyles from './ProductCard.module.css'; // Importa os estilos do card real

function ProductCardSkeleton() {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.imageWrapper}>
        <Skeleton height="100%" />
      </div>
      <div className={cardStyles.body}>
        <h3 className={cardStyles.title} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Skeleton height="1em" width="90%" />
          <Skeleton height="1em" width="70%" />
        </h3>
        <div className={cardStyles.info}>
          <Skeleton height="1.25em" width="40%" />
          <Skeleton height="1em" width="20%" />
        </div>
        <div className={cardStyles.footer}>
          <Skeleton height="42px" />
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;