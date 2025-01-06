import styled from 'styled-components';

import { sharedInputStyles } from 'components/select-manager/index.styles';

const StyledForm = styled.form`
  width: 100%;
  max-width: 50rem;
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.dark40};
  border: solid 0.0625rem ${({ theme }) => theme.colors.dark50};
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  padding: 0.5rem 1rem;
  margin-top: 3rem;

  & > input,
  & > select {
    display: flex;
    align-items: center;
  }
`;

const Input = styled.input`
  ${sharedInputStyles}
`;

const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export { StyledForm, Input, ButtonWrapper };
