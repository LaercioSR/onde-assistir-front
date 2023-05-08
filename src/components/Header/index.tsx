import { HeaderContainer } from "./styles";
import logo from "../../assets/images/logo.svg";

export function Header() {
  function handleTopPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <HeaderContainer>
      <img src={logo} alt="GameCast Central logo" onClick={handleTopPage} />
      <nav></nav>
    </HeaderContainer>
  );
}
