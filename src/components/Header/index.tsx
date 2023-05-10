import { HeaderContainer } from "./styles";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  // function handleTopPage() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

  return (
    <HeaderContainer>
      <nav>
        <Link to="/">
          <img
            src={logo}
            alt="Onde Assistir logo"
            // onClick={handleTopPage}
          />
        </Link>
      </nav>
    </HeaderContainer>
  );
}
