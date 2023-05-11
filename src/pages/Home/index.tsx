import { useEffect, useState } from "react";
import { GameView } from "../../components/GameView";
import { IGame } from "../../interfaces/IGame";
import {
  DayContainer,
  GamesListContainer,
  HomeContainer,
  SelectContainer,
} from "./styles";
import { api } from "../../services/api";
import { ITeamORCompetition } from "../../interfaces/ITeamOrCompetition";
import { AutocompleteChangeReason, Box, TextField } from "@mui/material";

interface GamesByDate {
  date: string;
  games: IGame[];
}

export function Home() {
  const [games, setGames] = useState<GamesByDate[]>([]);
  const [competitions, setCompetitions] = useState<ITeamORCompetition[]>([]);
  const [competition, setCompetition] = useState<ITeamORCompetition | null>(
    null
  );

  useEffect(() => {
    let filter = "?";
    if (competition) {
      filter += `competition=${competition.id}`;
    }
    api.get(`games/date${filter}`).then((response) => setGames(response.data));
  }, [competition]);
  useEffect(() => {
    api.get("competitions").then((response) => setCompetitions(response.data));
  }, []);

  function handleCompetition(
    event: React.SyntheticEvent<Element, Event>,
    value: unknown,
    reason: AutocompleteChangeReason
  ) {
    setCompetition(value as ITeamORCompetition);
  }

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
      <SelectContainer
        id="competitions"
        value={competition}
        onChange={handleCompetition}
        size="small"
        options={competitions}
        autoHighlight
        getOptionLabel={(option) => (option as ITeamORCompetition).name}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="30"
              height="30"
              src={(option as ITeamORCompetition).logo}
              srcSet={(option as ITeamORCompetition).logo}
              alt=""
            />
            {(option as ITeamORCompetition).name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Filtre uma competição"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
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
