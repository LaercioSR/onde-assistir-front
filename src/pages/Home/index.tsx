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
    const weekDays = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];

    const newDate = new Date(
      Number(date.substring(0, 4)),
      Number(date.substring(5, 7)) - 1,
      Number(date.substring(8, 10))
    );
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (newDate.toDateString() === today.toDateString()) return "Hoje";
    if (newDate.toDateString() === tomorrow.toDateString()) return "Amanhã";

    const weekDay = weekDays[newDate.getDay()];
    const dateFormatted = newDate.toLocaleDateString("pt-BR");

    return `${weekDay}, ${dateFormatted}`;
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
