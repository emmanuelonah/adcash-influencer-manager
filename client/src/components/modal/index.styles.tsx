import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  border-radius: ${(props) => props.theme.typography.borderRadius.sm};
  font-size: 0.75rem;
  width: 18.75rem;
  max-width: 90%;
  max-height: 80vh;
  height: 60px;
  padding: 0.75rem 0.375rem;
  z-index: 9999;
  border: solid 1px;

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
    color: #75b798;
    background-color: #051b11;
    border-color: #0f5132;
  }

  &.error {
    color: #ea868f;
    background-color: #2c0b0e;
    border-color: #842029;
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
