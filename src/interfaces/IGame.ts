import { IChannel } from "./IChannel";
import { ITeamORCompetition } from "./ITeamOrCompetition";

export interface IGame {
  id: string;
  time?: string;
  date?: string;
  team_home: ITeamORCompetition;
  team_away: ITeamORCompetition;
  competition: ITeamORCompetition;
  broadcasts: IChannel[];
}
