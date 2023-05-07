import { useEffect, useState } from "react";
import { GameView } from "../../components/GameView";
import { IGame } from "../../interfaces/IGame";
import { DayContainer, GamesListContainer, HomeContainer } from "./styles";
import { api } from "../../services/api";

interface GamesByDate {
  date: string;
  games: IGame[];
}

export function Home() {
  const [games, setGames] = useState<GamesByDate[]>([]);

  useEffect(() => {
    api.get("games/date").then((response) => setGames(response.data));
  }, []);

  return (
    <HomeContainer>
      {games.map(({ date, games }) => {
        return (
          <DayContainer key={date}>
            <h1>{date}</h1>
            <GamesListContainer>
              {games.map((game) => {
                return <GameView key={game.id} {...game} />;
              })}
            </GamesListContainer>
          </DayContainer>
        );
      })}
      {/* <DayContainer>
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
      </DayContainer> */}
    </HomeContainer>
  );
}
