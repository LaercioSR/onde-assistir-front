import { useParams } from "react-router-dom";
import { TeamPageContainer } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { GameView } from "../../components/GameView";
import { IGame } from "../../interfaces/IGame";
import { GamesListContainer } from "../Home/styles";

export function Team() {
  const { name } = useParams();
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    api.get(`teams/${name}`).then((response) => setGames(response.data.games));
  }, []);

  return (
    <TeamPageContainer>
      <h1>{name}</h1>

      {games.length > 0 ? <GameView {...games[0]} /> : ""}
      {games.length > 1 ? (
        <>
          <h2>Próximos jogos</h2>
          <GamesListContainer>
            {games.slice(1, games.length).map((game) => (
              <GameView {...game} key={game.id} />
            ))}
          </GamesListContainer>
        </>
      ) : (
        ""
      )}
    </TeamPageContainer>
  );
}
