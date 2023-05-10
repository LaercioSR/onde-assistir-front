import { IGame } from "../../interfaces/IGame";
import {
  BroadcastsContainer,
  GameViewContainer,
  TeamContainer,
  TeamsContainer,
} from "./styles";
import x from "../../assets/images/x.svg";
import { normalizeString } from "../../utils/normalizeString";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GameViewProps extends IGame {}

export function GameView(props: GameViewProps) {
  return (
    <GameViewContainer>
      <p>{props.competition.name}</p>
      <TeamsContainer>
        <TeamContainer>
          <Link to={`/${normalizeString(props.team_home.name)}`}>
            <img
              src={props.team_home.logo}
              alt={`${props.team_home.name} - Logo`}
            />
            <p>{props.team_home.name}</p>
          </Link>
        </TeamContainer>
        <div className="clash">
          <img src={x} alt="X clash" />
          <span className="time">
            {props.time ?? new Date(props.date ?? "").toLocaleString("pt-BR")}
          </span>
        </div>
        <TeamContainer>
          <Link to={`/${normalizeString(props.team_away.name)}`}>
            <img
              src={props.team_away.logo}
              alt={`${props.team_away.name} - Logo`}
            />
            <p>{props.team_away.name}</p>
          </Link>
        </TeamContainer>
      </TeamsContainer>
      <BroadcastsContainer>
        {props.broadcasts.map((broadcast) => {
          return broadcast.name !== "Sem transmissão" ? (
            <a
              href={broadcast.link ?? "#"}
              target={broadcast.name !== "Sem transmissão" ? "_blank" : ""}
              key={broadcast.name}
            >
              {broadcast.logo ? (
                <img src={broadcast.logo} />
              ) : (
                <span>{broadcast.name}</span>
              )}
            </a>
          ) : (
            <span key={broadcast.name}>{broadcast.name}</span>
          );
        })}
      </BroadcastsContainer>
    </GameViewContainer>
  );
}
