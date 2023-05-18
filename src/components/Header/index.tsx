import { HeaderContainer } from "./styles";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget);
  }

  function handleCloseNavMenu() {
    setAnchorElNav(null);
  }

  function handleClickOpenAbout() {
    navigate("/about");
  }

  return (
    <HeaderContainer>
      <nav>
        <Link to="/">
          <img src={logo} alt="Onde Assistir logo" />
        </Link>
      </nav>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem onClick={handleClickOpenAbout}>
              <Typography textAlign="center">Sobre</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={handleClickOpenAbout}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Sobre
          </Button>
        </Box>
      </Toolbar>
    </HeaderContainer>
  );
}
