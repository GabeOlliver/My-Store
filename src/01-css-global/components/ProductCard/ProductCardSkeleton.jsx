import React from 'react';
import Skeleton from '../Skeleton/Skeleton';
import './ProductCard.css'; // Reutilizamos o mesmo CSS para a estrutura!

function ProductCardSkeleton() {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <Skeleton height="100%" />
      </div>
      <div className="card-body">
        <h3 className="card-title" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Skeleton height="1em" width="90%" />
          <Skeleton height="1em" width="70%" />
        </h3>
        <div className="card-info">
          <Skeleton height="1.25em" width="40%" />
          <Skeleton height="1em" width="20%" />
        </div>
        <div className="card-footer">
          <Skeleton height="42px" />
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;