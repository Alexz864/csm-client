import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


import {
    LeftContainer,
    NavbarContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLink,
    NavbarLinkContainer,
    RightContainer,
    StyledNavTitle,
    OpenLinksButton,
    NavbarLinkExtended,
    NavbarItem,
    NavbarItemExtended
} from "./Styles";


const Navbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);

    const location = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [location.pathname]);

    return(
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <StyledNavTitle size={30}>Club Sportiv Municipal Suceava</StyledNavTitle>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarItem>
                            <NavbarLink to="/">Home</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/matches">Meciuri</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/players">Jucatori</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="X">Clasament</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/about">Despre</NavbarLink>
                        </NavbarItem>

                        {
                        <NavbarItem>
                            <NavbarLink to="/login">Login</NavbarLink>
                        </NavbarItem>
                        }

                        

                        <OpenLinksButton onClick={() => {
                            setExtendNavbar((curr) => !curr);
                        }}
                        >
                            {extendNavbar? <>&#10005;</> : <>&#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>

            {extendNavbar && (
            <NavbarExtendedContainer>
                <NavbarItemExtended><NavbarLinkExtended to="/">Home</NavbarLinkExtended></NavbarItemExtended>
                <NavbarItemExtended><NavbarLinkExtended to="/matches">Meciuri</NavbarLinkExtended></NavbarItemExtended>
                <NavbarItemExtended><NavbarLinkExtended to="/players">Jucatori</NavbarLinkExtended></NavbarItemExtended>
                <NavbarItemExtended><NavbarLinkExtended to="/about">Despre</NavbarLinkExtended></NavbarItemExtended>
                <NavbarItemExtended><NavbarLinkExtended to="/login">Login</NavbarLinkExtended></NavbarItemExtended>
            </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}

export default (Navbar);