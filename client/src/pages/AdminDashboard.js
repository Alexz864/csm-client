import React, {useState, useEffect} from 'react';

// styled components
import {
    StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledFormArea,
    colors,
    ExtraText,
    StyledMatchArea,
    StyledTable,
    UpdateButton,
    DeleteButton,
    StyledImage,
    StyledPlayerGrid,
    StyledPlayerCard,
    StyledPlayerName
} from '../components/Styles';

// axios
import Axios from 'axios';

// logo
import Logo from '../assets/logo.png';

// auth & redux
import { connect } from 'react-redux';
import {logoutAdmin} from '../auth/actions/userActions';

// react router 
import { useNavigate } from 'react-router-dom';
import PlayerModal from '../components/PlayerModal';
import MatchModal from '../components/MatchModal'


const AdminDashboard = ({logoutAdmin, user}) => {
    const navigate = useNavigate();

    const [matchList, setMatchList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/match/read').then((response) => {
            setMatchList(response.data)
        })
        .catch((err) => console.log(err, 'It has an error.'))
    },[]);

    const deleteMatch = (id) => {
        Axios.delete(`http://localhost:5000/match/delete/${id}`).then(() => {
            setMatchList(matchList.filter((val) => {
                return val._id !== id;
            }));
        });
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/player/upload').then((response) => {
            setData(response.data)
        })
        .catch((err) => console.log(err, 'It has an error.'));
    },[]);

    const [openPlayerModal, setPlayerOpenModal] = useState(false); 
    const [openMatchModal, setMatchModal] = useState(false);
    

    return(
        <div>
            <div style={{
                position: "relative",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                marginTop: "80px",
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <Avatar image={Logo} />
            </div>
            <StyledFormArea bg={colors.dark2}>
                <StyledTitle size={65}>
                    Welcome Admin!
                </StyledTitle>

                <ExtraText color={colors.light1}>You are connected as {user.email}</ExtraText>

                <ButtonGroup>
                    <StyledButton onClick={()=>{
                        setMatchModal(true);
                    }}
                        >Add Match
                    </StyledButton>
                    <StyledButton onClick={() => {
                        setPlayerOpenModal(true);
                    }}>
                        Add Player
                    </StyledButton>
                    
                    <StyledButton>
                        Add News
                    </StyledButton>
                    
                    <StyledButton to="/"
                        onClick={() => logoutAdmin(navigate)}
                        >Logout
                    </StyledButton>
                </ButtonGroup>
            </StyledFormArea>
            <br/>

            <StyledMatchArea>
            <StyledTable>
            
                <tbody>
                <tr>
                    <td><b>Echipa1</b></td>
                    <td><b>Echipa2</b></td>
                    <td><b>Data Meciului</b></td>
                    <td><b>Scor</b></td>
                    <td><b>Update / Delete</b></td>
                </tr>
                {matchList.map((val, key) => {
                    return  <tr key={key}>
                                <td>{val.team1}</td>
                                <td>{val.team2}</td>
                                <td>{val.data}</td>
                                <td>{val.scor}</td>
                                <UpdateButton>Update</UpdateButton>
                                <DeleteButton onClick={() => deleteMatch(val._id)} >Delete</DeleteButton>
                            </tr>
                })}
                </tbody>
            </StyledTable>
            </StyledMatchArea>
            <br/>

            <StyledPlayerGrid>
                {data.map((singleData, key) => {
                    const image = btoa(
                        String.fromCharCode(...new Uint8Array(singleData.image.data.data))
                    )
                    return (
                        <StyledPlayerCard key={key}>
                            <StyledImage src={`data:image/png; base64, ${image}`} alt="playerImage"/>
                            <StyledPlayerName size={40}>{`${singleData?.name} ${singleData?.lastName}`}</StyledPlayerName>
                        </StyledPlayerCard>
                    )
                })}
            </StyledPlayerGrid>
            {openPlayerModal && <PlayerModal closePlayerModal={setPlayerOpenModal}/>}
            {openMatchModal && <MatchModal closeMatchModal={setMatchModal}/>}
        </div>
    );
}

const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps, {logoutAdmin})(AdminDashboard);