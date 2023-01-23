// styled components
import styled from 'styled-components';

// background
import background from '../assets/background2.png';

// react router
import {Link} from 'react-router-dom';


// colors
export const colors = {
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#8B0000",
    blue: "#00BFFF"
};

// page container
export const StyledContainer = styled.div`
    margin: 0;
    padding-bottom: 25px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${background});
    background-size: cover;
    background-attachment: fixed;
`;

// navbar
export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: darkblue;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    z-index: 20;
    opacity: 0.8;

    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    padding-left: 50px;
    align-items: center;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const StyledNavTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
`;

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarItem = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    background: transparent;
    border-radius: 2px;
    transition: width 0.7s ease, background-color 0.5s ease;

    &:hover{
        background-color: blue;
    }

    &:active{
        color: #24aaaa;
        border: 1px solid;
    }
`;

export const NavbarItemExtended = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%;
    background: transparent;
    border-radius: 2px;
    transition: width 0.7s ease, background-color 0.5s ease;

    &:hover{
        background-color: blue;
    }

    &:active{
        color: #24aaaa;
        border: 1px solid;
    }
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    padding: 20px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 20px;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 70px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

// footer
export const Box = styled.div`
    padding: 35px 60px;
    background-color: darkblue;
    position: relative;
    bottom: 0;
    width: 100%;
    opacity: 0.8;
    @media (max-width: 1000px) {
    padding: 70px 30px;
}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
    `;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
    color: green;
    transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;

// home
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 25px;
`;

export const Avatar = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    };
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

export const StyledDash = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;
    };
`

// players
export const StyledPlayerGrid = styled.div`
    display: grid;
    margin-top: 140px;
    margin-bottom: 50px;
    grid-template-columns: auto auto auto;
    border: 2px solid;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.6);
    padding: 10px;
`;

export const StyledPlayerCard = styled.div`
    width: 400px;
    height: 520px;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255);
    border: 2px solid rgba(0, 0, 0);
    border-radius: 10px;
    padding: 20px;
    margin: 40px;
    font-size: 30px;
    text-align: center;
`;

export const StyledPlayerName = styled.h2`
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color ? props.color : colors.dark2};
    margin-top: 25px;
`;

export const StyledImage = styled.img`
    width: 350px;
    height: 350px;
    height: 350px;
    border: 2px solid rgba(0, 0, 0);
`;

// input
export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`};

    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    };
`;



export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    padding: 45px 55px;
    opacity: 0.8;
    border-radius: 15px;
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;
    };
`;


export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color ? props.color : colors.dark2)};
    padding: 2px;
    margin-top: 10px;
`;

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    };
`;

// icons
export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 30px;
    left: 15px;
    ${(props) => props.right && `right: 15px;`};
    ${(props) => props.right && `left: 15px;`};
`;

export const StyledEye = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 30px;
    left: 245px;

    &:hover {
        cursor: pointer;
    };
`;

// matches
export const StyledMatchArea = styled.div`
    background-color: ${props => props.bg || colors.light1};
    padding: 45px 55px;
    margin-top: 40px;
    opacity: 0.8;
    border-radius: 15px;
`;

export const StyledTable = styled.table`
    padding: 10px;
    border: 1px solid;
    width: 100%;
    border-radius: 5px;
`;

export const UpdateButton = styled.button`
    margin-right: 5px;
    margin-bottom: 5px;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
`;

export const DeleteButton = styled.button`
    margin-bottom: 5px;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
`;

// player modal
export const ModalButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;
    };
`;

export const PlayerModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${background});
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
`;

export const ModalFormArea = styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    padding: 45px 55px;
    opacity: 0.9;
    border-radius: 15px;
`;

// copyright
export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.light2};
`;