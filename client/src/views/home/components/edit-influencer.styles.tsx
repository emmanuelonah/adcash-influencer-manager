import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.dark300};
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  border: solid 0.0625rem ${({ theme }) => theme.colors.dark50};
  width: 100%;
  max-width: 21.875rem;
  padding: 1rem 0.5rem 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { StyledForm };
