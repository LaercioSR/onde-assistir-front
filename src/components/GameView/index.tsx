import { IGame } from "../../interfaces/IGame";
import {
  BroadcastsContainer,
  GameViewContainer,
  TeamContainer,
  TeamsContainer,
} from "./styles";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GameViewProps extends IGame {}

export function GameView(props: GameViewProps) {
  return (
    <GameViewContainer>
      <p>{props.competition.name}</p>
      <TeamsContainer>
        <TeamContainer>
          <img
            src={props.team_home.logo}
            alt={`${props.team_home.name} - Logo`}
          />
          <p>{props.team_home.name}</p>
        </TeamContainer>
        <div className="clash">
          <span>X</span>
          <span className="time">16:00</span>
        </div>
        <TeamContainer>
          <img
            src={props.team_away.logo}
            alt={`${props.team_away.name} - Logo`}
          />
          <p>{props.team_away.name}</p>
        </TeamContainer>
      </TeamsContainer>
      <BroadcastsContainer>
        {props.broadcasts.map((broadcast) => {
          // return broadcast.logo ? (
          //   <>
          //     <span> | </span>
          //     <img src={broadcast.logo} />
          //   </>
          // ) : (
          //   <span> | {broadcast.name}</span>
          // );
          return <span> | {broadcast.name} </span>;
        })}
      </BroadcastsContainer>
    </GameViewContainer>
  );
}
