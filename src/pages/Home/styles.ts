import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: 5rem 0 0 0;
  padding: 5rem 10rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`

export const DayContainer = styled.div`
  margin: 1rem 0;
`

export const GamesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  list-style: none;
  margin: 1rem 0 2rem 0;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: initial;
  }
`
