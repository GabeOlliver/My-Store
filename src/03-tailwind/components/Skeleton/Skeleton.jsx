import React from 'react';

function Skeleton({ className }) {
  // O `&nbsp;` garante que o div tenha altura mesmo se a classe de altura não for passada
  return (
    <div className={`bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse ${className || ''}`}>
      &nbsp;
    </div>
  );
}

export default Skeleton;