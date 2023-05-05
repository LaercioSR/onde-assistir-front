import { HeaderContainer } from "./styles";
import logo from "../../assets/images/logo_simple_2.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="GameCast Central logo" />
      <nav></nav>
    </HeaderContainer>
  );
}
