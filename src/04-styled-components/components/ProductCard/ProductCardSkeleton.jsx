import React from 'react';
import { Skeleton } from '../Skeleton/Skeleton';
// Importando os containers do card real para garantir consistência
import { CardContainer, Body, Info, Footer, ImageWrapper } from './ProductCard';

export function ProductCardSkeleton() {
  return (
    <CardContainer>
      <ImageWrapper>
        <Skeleton style={{ height: '100%', borderRadius: 0 }} />
      </ImageWrapper>
      <Body>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Skeleton style={{ height: '1.4em', width: '90%' }} />
          <Skeleton style={{ height: '1.4em', width: '70%' }} />
        </div>
        <Info>
          <Skeleton style={{ height: '1.25em', width: '40%' }} />
          <Skeleton style={{ height: '1em', width: '20%' }} />
        </Info>
        <Footer>
          <Skeleton style={{ height: '42px' }} />
        </Footer>
      </Body>
    </CardContainer>
  );
}