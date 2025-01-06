import styled, { css } from 'styled-components';

const sharedButtonStyles = css`
  border: none;
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.preText.fontSize};
  padding: 0.5rem;
  min-width: 100px;
  height: 36px;
`;

const PrimaryButton = styled.button`
  ${sharedButtonStyles}
  background-color: ${({ theme }) => theme.colors.dark200};
  color: ${({ theme }) => theme.colors.ash400};

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark100};
  }
`;

const SecondaryButton = styled.button`
  ${sharedButtonStyles}
  background-color: ${({ theme }) => theme.colors.success400};
  color: ${({ theme }) => theme.colors.success200};

  &:hover {
    background-color: ${({ theme }) => theme.colors.success300};
    transition: background-color 0.5s ease;
  }
`;

const DangerButton = styled.button`
  ${sharedButtonStyles}
  color: ${({ theme }) => theme.colors.white400};
  background-color: ${({ theme }) => theme.colors.error400};

  &:hover {
    background-color: ${({ theme }) => theme.colors.error300};
    transition: background-color 0.5s ease;
  }
`;

const LinkButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.typography.preText.fontSize};
  color: ${({ theme }) => theme.colors.primary400};
  text-decoration: underline;
`;

export { PrimaryButton, SecondaryButton, DangerButton, LinkButton };
