/**
 * @typography this is our typographic design-token.
 *
 * @sample
 * ```ts
 *   const H1 = styled.h1`
 *      font-weight: ${(props) => props.theme.typography.title1.fontWeight};
 *       font-size: ${(props) => props.theme.typography.title1.fontSize};
 *   `;
 * ```
 */
export const typography = {
  fontFamilies: {
    primary: '"Poppins", sans-serif',
    secondary: 'Inter',
  },
  zIndexes: {
    step1: '100',
    step2: '200',
    step3: '300',
    overlay: '500',
    modal: '1000',
    max: '99999',
  },
  lineHeight: {
    xxs: '1.3',
    xs: '1.5',
    sm: '1.75',
    md: '2',
    lg: '2.25',
    xl: '2.5',
    xxl: '2.75',
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '6rem',
  },
  pageWidth: {
    minWidth: '100%',
    mobileStartWidth: '100%',
    mobileEndWidth: '767px',
    desktopStartWidth: '768px',
    desktopEndWidth: '1420px',
  },
  borderRadius: {
    sm: '5px',
  },
  breakpoints: ['40em', '48em', '62em', '80em'],
  title1: { fontWeight: 'bold', fontSize: '4.0625rem' },
  title2: { fontWeight: 'bold', fontSize: '3.125rem' },
  title3: { fontWeight: 'bold', fontSize: '2.1875rem' },
  subtitle: { fontWeight: '500px', fontSize: '1.5rem' },
  boldBody: { fontWeight: 'bold', fontSize: '1.0625rem' },
  bodyText: { fontWeight: '400px', fontSize: '1rem' },
  smallText: { fontWeight: '400px', fontSize: '0.8rem' },
  preText: { fontWeight: '400px', fontSize: '0.75rem' },
} as const;
