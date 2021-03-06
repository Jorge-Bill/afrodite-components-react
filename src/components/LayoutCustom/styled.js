import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  transition: background, color 0.5s;
  width: 100%;

  body#grid & {
    grid-template-areas:
      'posts'
      'pagination';
  }

  ${media.lessThan('large')`
    padding: 7.5rem 0 5rem 0;
  `}
`
