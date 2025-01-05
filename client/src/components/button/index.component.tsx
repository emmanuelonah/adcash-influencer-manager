import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;
  background-color: #1f1f1f;
  border-radius: 12px;
  color: #797979;
  text-align: center;
  font-size: 0.75rem;
  padding: 1rem 0.5rem;
  width: 100%;
  max-width: 100px;

  &:hover {
    background-color: #2f2f2f;
  }
`;

const LinkButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary400};
  text-decoration: underline;
`;

export { PrimaryButton, LinkButton };
