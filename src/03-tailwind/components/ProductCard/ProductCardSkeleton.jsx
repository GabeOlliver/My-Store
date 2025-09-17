import React from 'react';
import Skeleton from '../Skeleton/Skeleton';

function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden bg-surface-light dark:bg-surface-dark rounded-lg shadow-md">
      <div className="aspect-square">
        <Skeleton className="w-full h-full !rounded-b-none" />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <div className="space-y-2">
          <Skeleton className="h-5 w-5/6" />
          <Skeleton className="h-5 w-4/6" />
        </div>
        <div className="flex items-center justify-between mt-2">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-5 w-1/5" />
        </div>
        <div className="mt-auto pt-4">
          <Skeleton className="w-full h-11" />
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;