import {
  BroadcastsContainer,
  GameViewContainer,
  TeamContainer,
  TeamsContainer,
} from "./styles";

export function GameView() {
  return (
    <GameViewContainer>
      <p>Competição</p>
      <TeamsContainer>
        <TeamContainer>
          <img
            src="https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
            alt=""
          />
          <p>São Paulo</p>
        </TeamContainer>
        <div className="clash">
          <span>X</span>
          <span className="time">16:00</span>
        </div>
        <TeamContainer>
          <img
            src="https://upload.wikimedia.org/wikipedia/pt/3/34/Esporte_Clube_Vit%C3%B3ria_logo.png"
            alt=""
          />
          <p>Vitória</p>
        </TeamContainer>
      </TeamsContainer>
      <BroadcastsContainer>
        <span>HBO Max</span> | <span>Globo</span> | <span>Premiere</span>
      </BroadcastsContainer>
    </GameViewContainer>
  );
}
