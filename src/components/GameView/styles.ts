import styled from "styled-components";

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme["white"]};;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
`

export const BroadcastsContainer = styled.div`
  align-self: center;
`

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
`

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 5rem;
  }
`