import styled from 'styled-components';

const Wrapper = styled.div`
  & h1 {
    font-weight: ${(props) => props.theme.typography.title2.fontWeight};
    font-size: ${(props) => props.theme.typography.title2.fontSize};
    line-height: ${(props) => props.theme.typography.lineHeight.xxs};
  }

  /**
   * @mobileStyle
   */
  padding: 1rem 2rem;

  /**
   * @desktopStyle
   */
  @media (min-width: ${({ theme }) => theme.typography.pageWidth.desktopStartWidth}) {
    padding: 1rem 6rem;
  }

  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 18.75rem;
  }
`;

const Retry = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;

  & > img {
    width: 1.5rem;
  }
`;

export { Wrapper, Retry };
