/**
 * @colors this is our colors token.
 *
 * @sample
 * ```ts
 * const H1 = styled.h1`
 *      color: ${(props) => props.theme.colors.warning400};
 *   `;
 * ```
 */

export const colors = {
  primary400: '#1e90ff',

  error500: '#2c0b0e',
  error400: '#c82333',
  error300: '#d32f3f',
  error200: '#2a2a2a',
  error100: '#842029',
  error50: '#ea868f',

  success600: '#0f5132',
  success500: '#051b11',
  success400: '#102319',
  success300: '#1a2f1e',
  success200: '#51b380',
  success100: '#75b798',

  dark500: 'rgba(0, 0, 0, 0.95)',
  dark400: '#000',
  dark300: '#0f0f0f',
  dark200: '#1f1f1f',
  dark100: '#2f2f2f',
  dark50: '#1d1d1d',
  dark40: '#171717',

  ash400: '#797979',

  white400: '#fff',
  white300: '#edeef0',
} as const;
