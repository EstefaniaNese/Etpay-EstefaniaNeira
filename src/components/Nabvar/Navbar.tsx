import { StyledNavbar, RightContainer } from './Navbar.styled';
import logoRegim from "../../assets/logo/LogoRegim.svg";
import {  Button } from '../Button';


export const Navbar = () => {

    return (
    <StyledNavbar>
        <img src={logoRegim} alt="Logo"  />
        <RightContainer>
          <Button >
              Get Early Access
          </Button>
        </RightContainer>
    </StyledNavbar>
  )
}


