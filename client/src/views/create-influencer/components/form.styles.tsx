import styled from 'styled-components';

import { sharedInputStyles } from 'components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 3rem;
  width: 100%;
  max-width: 380px;
  padding: 0 1rem;

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
    border: 0.0625rem solid ${({ theme }) => theme.colors.error100};
  }

  &.valid {
    border: 0.0625rem solid ${({ theme }) => theme.colors.success600};
  }
`;

const HandleWrapper = styled.div`
  width: 100%;
  max-width: 18.75rem;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  position: relative;

  & > input {
    margin-bottom: 0;
  }
`;

const RemoveHandle = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: -25px;
  top: 5px;
  z-index: ${(props) => props.theme.typography.zIndexes.step1};

  & > img {
    width: 20px;
    height: 20px;

    &:hover {
      opacity: 0.8;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export { StyledForm, Input, HandleWrapper, RemoveHandle };
