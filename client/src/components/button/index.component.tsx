import styled, { css } from 'styled-components';

const sharedButtonStyles = css`
  border: none;
  border-radius: 5px;
  font-size: 0.75rem;
  padding: 0.5rem;
  min-width: 100px;
  height: 36px;
`;

const PrimaryButton = styled.button`
  ${sharedButtonStyles}
  background-color: #1f1f1f;
  color: #797979;

  &:hover {
    background-color: #2f2f2f;
  }
`;

const SecondaryButton = styled.button`
  ${sharedButtonStyles}
  background-color: #102319;
  color: #51b380;

  &:hover {
    background-color: #1a2f1e;
    transition: background-color 0.5s ease;
  }
`;

const DangerButton = styled.button`
  ${sharedButtonStyles}
  color: #fff;
  background-color: #c82333;

  &:hover {
    background-color: #d32f3f;
    transition: background-color 0.5s ease;
  }
`;

const LinkButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primary400};
  text-decoration: underline;
`;

export { PrimaryButton, SecondaryButton, DangerButton, LinkButton };
