import styled from 'styled-components';

const Wrapper = styled.div`
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

  & > img {
    width: 18.75rem;
  }
`;

const Refresh = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;

  & span {
    padding-left: 0.5rem;
  }

  & img {
    width: 1.5625rem;
  }
`;

export { Wrapper, Refresh };
