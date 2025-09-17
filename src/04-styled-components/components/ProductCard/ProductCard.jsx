import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

// --- Styled Components ---

const Tag = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius};
  z-index: 10;
`;

const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  background-color: #ccc;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  min-height: 2.8em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const Rating = styled.span`
  font-size: 1rem;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const Body = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  transition: transform ${({ theme }) => theme.transitionDuration}, box-shadow ${({ theme }) => theme.transitionDuration};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;


// --- Componente React ---

export function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <CardContainer>
      {product.tag && <Tag>{product.tag}</Tag>}
      <ImageWrapper>
        <Image src={product.image} alt={product.title} loading="lazy" />
      </ImageWrapper>
      <Body>
        <Title>{product.title}</Title>
        <Info>
          <Price>{formattedPrice}</Price>
          <Rating>★ {product.rating.toFixed(1)}</Rating>
        </Info>
        <Footer>
          <Button variant="solid" style={{ width: '100%' }}>
            Adicionar
          </Button>
        </Footer>
      </Body>
    </CardContainer>
  );
}

export { CardContainer, Body, Info, Footer, ImageWrapper };