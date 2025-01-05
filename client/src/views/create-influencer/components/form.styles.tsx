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

  &.invalid {
    border: 1px solid red;
  }

  &.valid {
    border: 1px solid green;
  }
`;

export { StyledForm, Input };
