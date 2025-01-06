import styled from 'styled-components';

import { sharedInputStyles } from 'components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & > * {
    margin: 0 auto;
  }

  & button {
    margin-bottom: 0.5rem;
  }
`;

const Input = styled.input`
  ${sharedInputStyles}

  &:first-child {
    margin-top: 3rem;
  }

  &.invalid {
    border: 0.0625rem solid ${({ theme }) => theme.colors.error100};
  }

  &.valid {
    border: 0.0625rem solid ${({ theme }) => theme.colors.success600};
  }
`;

export { StyledForm, Input };
