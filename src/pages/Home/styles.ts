import { Autocomplete } from "@mui/material";
import styled from "styled-components";

export const HomeContainer = styled.main``;

export const DayContainer = styled.div`
  margin: 1rem 0;
`;

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
`;

export const SelectContainer = styled(Autocomplete)`
  /* width: 10rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-input-text"]};
  border-radius: 10px;
  border: none;
  padding: 0 0.7rem; */
  width: 15rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 10px;
`;
