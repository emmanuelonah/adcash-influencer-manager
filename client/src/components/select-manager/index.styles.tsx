import styled, { css } from 'styled-components';

const sharedInputStyles = css`
  border: none;
  background-color: ${({ theme }) => theme.colors.dark200};
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  color: ${({ theme }) => theme.colors.ash400};
  text-align: left;
  font-size: ${({ theme }) => theme.typography.preText.fontSize};
  padding: 1rem;
  margin-bottom: 0.8rem;
  width: 100%;
  max-width: 18.75rem;
  height: 2.25rem;
`;

const Select = styled.select`
  ${sharedInputStyles}
  margin-bottom: 0.8rem !important;
  font-size: ${({ theme }) => theme.typography.preText.fontSize} !important;
  padding: 0.5rem;

  & option {
    font-size: ${({ theme }) => theme.typography.preText.fontSize};
  }
`;

export { sharedInputStyles, Select };
