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

  function transformeDate(date: string): string {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date === today.toISOString().substring(0, 10)) return "Hoje";
    if (date === tomorrow.toISOString().substring(0, 10)) return "Amanhã";
    return new Date(date).toLocaleDateString("pt-BR");
  }

  return (
    <HomeContainer>
      {games.map(({ date, games }) => {
        return (
          <DayContainer key={date}>
            <h1>{transformeDate(date)}</h1>
            <GamesListContainer>
              {games.map((game) => {
                return <GameView key={game.id} {...game} />;
              })}
            </GamesListContainer>
          </DayContainer>
        );
      })}
    </HomeContainer>
  );
}
