import styled, { css } from 'styled-components';

const sharedInputStyles = css`
  border: none;
  background-color: #1f1f1f;
  border-radius: 5px;
  color: #797979;
  text-align: left;
  font-size: 0.75rem;
  padding: 1rem 1rem;
  margin-bottom: 0.8rem;
  width: 100%;
  max-width: 300px;
  height: 36px;
`;

const Select = styled.select`
  ${sharedInputStyles}
  margin-bottom: 0.8rem !important;
  font-size: 0.75rem !important;
  padding: 0.5rem;

  & option {
    font-size: 0.75rem;
  }
`;

export { sharedInputStyles, Select };
