import styled, { css } from 'styled-components';

const sharedInputStyles = css`
  border: none;
  background-color: #1f1f1f;
  border-radius: 12px;
  color: #797979;
  text-align: left;
  font-size: 0.75rem;
  padding: 1rem 0.5rem;
  margin-bottom: 0.8rem;
  width: 100%;
  max-width: 300px;
  height: 50px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & > * {
    margin: 0 auto;
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

const Select = styled.select`
  ${sharedInputStyles}
  font-size: 0.75rem !important;

  & option {
    font-size: 0.75rem;
  }
`;

const AddButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary400};
  text-decoration: underline;
  margin-bottom: 0.5rem;
`;

const SubmitButton = styled.button`
  border: none;
  background-color: #1f1f1f;
  border-radius: 12px;
  color: #797979;
  text-align: center;
  font-size: 0.75rem;
  padding: 1rem 0.5rem;
  margin-top: 1rem;
  width: 100%;
  max-width: 100px;

  &:hover {
    background-color: #2f2f2f;
  }
`;

export { StyledForm, Input, Select, AddButton, SubmitButton };
