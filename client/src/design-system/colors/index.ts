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

  error400: '#721c24',
  error300: '#f8d7da',
  error200: '#f5c6cb',

  success400: '#155724',
  success300: '#d4edda',
  success200: '#c3e6cb',

  dark400: '#000',
  dark300: '#0f0f0f',

  white400: '#fff',
  white300: '#edeef0',
} as const;
