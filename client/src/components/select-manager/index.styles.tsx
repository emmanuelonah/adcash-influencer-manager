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

const Select = styled.select`
  ${sharedInputStyles}
  font-size: 0.75rem !important;

  & option {
    font-size: 0.75rem;
  }
`;

export { sharedInputStyles, Select };
