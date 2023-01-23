// styled components
import {
    Avatar,
    ButtonGroup,
    StyledFormButton,
    StyledLabel,
    StyledTextInput,
    StyledTitle,
    colors,
    ModalButton,
    PlayerModalBackground,
    ModalFormArea
} from '../components/Styles';

// logo
import Logo from '../assets/logo.png';

// axios
import Axios from 'axios';

// react
import React, {useState} from 'react';


const MatchModal = ( {closeMatchModal} ) => {
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const [data, setData] = useState('');
    const [scor, setScor] = useState('');

    const addMatch = () => {
        Axios.post("https://csm-test-server.onrender.com/match/insert", {
            team1: team1,
            team2: team2,
            data: data,
            scor: scor
        });
    };

    return(
        <div>
            <PlayerModalBackground>
                <ModalFormArea>
                    <div style={{
                        backgroundColor: "transparent",
                        width: "100%",
                        padding: "15px",
                        display: "flex",
                        justifyContent: "flex-start",
                    }}>
                        <Avatar image={Logo} />
                    </div>
                    <StyledTitle color={colors.theme}  size={30}>Adauga meci</StyledTitle>
                        <StyledLabel>Prima echipa</StyledLabel>
                            <StyledTextInput onChange={(event ) => {
                        setTeam1(event.target.value);
                        }}></StyledTextInput>

                        <StyledLabel >A doua echipa</StyledLabel>
                            <StyledTextInput onChange={(event ) => {
                        setTeam2(event.target.value);
                        }}></StyledTextInput>

                        <StyledLabel>Data meciului</StyledLabel>
                            <StyledTextInput onChange={(event ) => {
                        setData(event.target.value);
                        }}></StyledTextInput>

                        <StyledLabel>Scor</StyledLabel>
                            <StyledTextInput onChange={(event ) => {
                        setScor(event.target.value);
                        }}></StyledTextInput>

                        <ButtonGroup>
                            <StyledFormButton onClick={addMatch} >Add</StyledFormButton>
                            <ModalButton onClick={() => closeMatchModal(false)}>Cancel</ModalButton>
                        </ButtonGroup>
                </ModalFormArea>
            </PlayerModalBackground>
        </div>
    );
}

export default MatchModal;