import { GameView } from "../../components/GameView";
import { DayContainer, GamesListContainer, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <DayContainer>
        <h1>Hoje</h1>
        <GamesListContainer>
          <GameView></GameView>
          <GameView></GameView>
          <GameView></GameView>
          <GameView></GameView>
          <GameView></GameView>
        </GamesListContainer>
      </DayContainer>
      <DayContainer>
        <h1>Amanhã</h1>
        <GamesListContainer>
          <GameView></GameView>
          <GameView></GameView>
          <GameView></GameView>
          <GameView></GameView>
          <GameView></GameView>
        </GamesListContainer>
      </DayContainer>
    </HomeContainer>
  );
}
