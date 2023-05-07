import styled from "styled-components";

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 10px;
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
`;
