import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  border-radius: ${(props) => props.theme.typography.borderRadius.sm};
  font-size: 0.75rem;
  width: 18.75rem;
  max-width: 90%;
  max-height: 80vh;
  height: 4.375rem;
  padding: 0.75rem 0.375rem;

  &.bottom {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
  }

  &.success {
    color: ${({ theme }) => theme.colors.success400};
    background-color: ${({ theme }) => theme.colors.success300};
    border-color: ${({ theme }) => theme.colors.success200};
  }

  &.error {
    color: ${({ theme }) => theme.colors.error400};
    background-color: ${({ theme }) => theme.colors.error300};
    border-color: ${({ theme }) => theme.colors.error200};
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
