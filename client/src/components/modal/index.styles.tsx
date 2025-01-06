import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.preText.fontSize};
  width: 18.75rem;
  max-width: 90%;
  max-height: 80vh;
  height: 3.75rem;
  padding: 0.75rem 0.375rem;
  z-index: ${({ theme }) => theme.typography.zIndexes.max};
  border: solid 0.0625rem;

  &.bottom {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
  }

  &.top {
    position: fixed;
    top: 1rem;
    left: 1rem;
  }

  &.center {
    position: fixed;
    top: 2rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  &.success {
    color: ${({ theme }) => theme.colors.success100};
    background-color: ${({ theme }) => theme.colors.success500};
    border-color: ${({ theme }) => theme.colors.success600};
  }

  &.error {
    color: ${({ theme }) => theme.colors.error50};
    background-color: ${({ theme }) => theme.colors.error500};
    border-color: ${({ theme }) => theme.colors.error100};
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Close = styled.button`
  color: ${({ theme }) => theme.colors.white400};
  border: none;
  height: fit-content;
  font-size: ${(props) => props.theme.typography.bodyText.fontSize};
  background-color: transparent;
  padding-bottom: 0.625rem;
`;

export { Wrapper, Close, Body };
