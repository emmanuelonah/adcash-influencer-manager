import { useMemo } from 'react';

import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const SkeletonLoader = styled.div`
  background-color: ${({ theme }) => theme.colors.dark40};
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  width: 100%;
  min-height: calc(100vh - 200px);
  max-width: 1420px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: solid 0.0625rem ${({ theme }) => theme.colors.dark50};
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: ${shimmer} 2s infinite;
  }
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.dark200};
  border: solid 0.0625rem #252525;
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  color: ${({ theme }) => theme.colors.ash400};
  text-align: left;
  font-size: ${({ theme }) => theme.typography.preText.fontSize};
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Row = styled.div`
  background-color: ${({ theme }) => theme.colors.dark200};
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 2rem 1rem;
`;

const SkeletonCell = styled.div`
  height: 20px;
  width: calc(16.666% - 10px);
  background-color: ${({ theme }) => theme.colors.error200};
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
`;

export function Loader() {
  const items = useMemo(() => [...new Array(4)], []);

  return (
    <SkeletonLoader>
      <Header>
        <p>Header</p>
        <p>Header</p>
        <p>Header</p>
        <p>Header</p>
        <p>Header</p>
        <p>Header</p>
      </Header>
      {items.map((_, index) => (
        <Row key={index.toString()}>
          <SkeletonCell />
          <SkeletonCell />
          <SkeletonCell />
          <SkeletonCell />
          <SkeletonCell />
          <SkeletonCell />
        </Row>
      ))}
    </SkeletonLoader>
  );
}
