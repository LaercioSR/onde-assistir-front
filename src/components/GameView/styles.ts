import { Link } from "react-router-dom";
import styled from "styled-components";

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 41px 20px ${(props) => props.theme["base-shadow"]};

  background-color: ${(props) => props.theme["white"]};
  border-radius: 15px;
  padding: 1rem;
  width: 100%;
`;

export const BroadcastsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.7rem;

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    height: 1.2rem;
    filter: grayscale(100%) saturate(20%) sepia(30%) hue-rotate(90deg);

    &:hover {
      filter: none;
    }
  }
`;

export const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;

  .clash {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .time {
      margin: 1rem;
    }
  }
`;

export const TeamContainer = styled(Link)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  img {
    height: 5rem;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 500;
  }
`;
