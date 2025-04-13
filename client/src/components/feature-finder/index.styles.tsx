import styled from 'styled-components';

const Input = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.colors.dark200};
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  color: ${({ theme }) => theme.colors.ash400};
  text-align: left;
  font-size: ${({ theme }) => theme.typography.preText.fontSize};
  padding: 0.7rem 1rem;
`;

const Item = styled.li`
  padding: 0.5rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.dark200};

  &:last-child {
    border-bottom: none;
  }
`;

export { Input, Item };
