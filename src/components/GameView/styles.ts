import styled from "styled-components";

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;

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

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 6rem;
    max-height: 1.5rem;
    filter: grayscale(100%) saturate(20%) sepia(30%) hue-rotate(90deg);
    transition: transform 0.4s ease-in-out;

    &:hover {
      filter: none;
      transform: scale(1.1);
    }
  }
`;

export const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0 0.5rem 0;

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

export const TeamContainer = styled.div`
  display: flex;
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
