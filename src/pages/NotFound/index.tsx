import { NotFoundContainer } from "./styles";
import team from "../../assets/images/team.svg";

export function NotFound() {
  return (
    <NotFoundContainer>
      <img src={team} alt="Logo time não encontrado" />
      <h1>Time não Encontrado</h1>
    </NotFoundContainer>
  );
}
