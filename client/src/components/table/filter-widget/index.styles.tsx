import styled from 'styled-components';

import { sharedInputStyles } from 'components/select-manager/index.styles';

const StyledForm = styled.form`
  width: 100%;
  max-width: 800px;
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
  background-color: #171717;
  border: solid 1px #1d1d1d;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  margin-top: 3rem;

  & > input,
  & > select {
    height: 40px;
  }

  & > button {
    height: 40px;
    width: 150px;
  }
`;

const Input = styled.input`
  ${sharedInputStyles}
`;

export { StyledForm, Input };
