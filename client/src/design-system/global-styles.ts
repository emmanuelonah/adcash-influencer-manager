import styled, { createGlobalStyle } from 'styled-components';

import { designTokens } from './design-tokens';

const theme = {
  colors: designTokens.colors,
  typography: designTokens.typography,
};

export type Theme = Record<'theme', typeof theme>;

const SkipToMainContent = styled.a`
  background-color: ${(props) => props.theme.colors.warning400};
  border: solid 0.0625rem ${(props) => props.theme.colors.dark400};
  color: ${(props) => props.theme.colors.white400};
  border-radius: ${(props) => props.theme.typography.borderRadius.sm};
  font-size: ${(props) => props.theme.typography.bodyText.fontSize};
  padding: 0.5rem;
  position: absolute;
  left: 0;
  top: -300px;
  z-index: ${(props) => props.theme.typography.zIndexes.step1};
  transition: top 0.5s ease-out;
  outline: none;

  &:focus {
    top: 0;
  }
`;

const GlobalStyles = createGlobalStyle<Theme>`
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
    display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    html {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }

    html, body {
        font-family: ${({ theme }) => theme.typography.fontFamilies.primary};
        font-size: ${({ theme }) => theme.typography.bodyText.fontSize};
        font-weight: ${({ theme }) => theme.typography.bodyText.fontWeight};
        line-height: ${({ theme }) => theme.typography.lineHeight.xs};
        text-rendering: optimizeLegibility;
        scroll-behavior: smooth;
        width: 100%;
        height: 100%;
        position: relative;
    }

    body {
        color:${({ theme }) => theme.colors.white300};
        background: ${({ theme }) => theme.colors.dark300};
        line-height: 1.5;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
    }

    body main#main {
        flex-grow: 1;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: ${({ theme }) => theme.typography.lineHeight.md};
    }

    img {
        max-width: 100%;
        display: block;
        height: auto;
    }

    ul, ol {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    select,
    button,
    [type="submit"],
    [type="reset"],
    [type="button"]{
        cursor: pointer;
        &:disabled{
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    input[type='color'],
    input[type='date'],
    input[type='datetime'],
    input[type='datetime-local'],
    input[type='email'],
    input[type='month'],
    input[type='number'],
    input[type='password'],
    input[type='search'],
    input[type='tel'],
    input[type='text'],
    input[type='time'],
    input[type='url'],
    input[type='week'],
    select:focus,
    textarea {
        font-size: ${({ theme }) => theme.typography.bodyText.fontSize};
    }
`;

export { SkipToMainContent, GlobalStyles, theme };
