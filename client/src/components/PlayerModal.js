import { useState } from 'react';

// logo
import Logo from '../assets/logo.png';

// prime react
import { FileUpload } from 'primereact/fileupload';

// axios
import Axios from 'axios';

// styled components
import {
    ButtonGroup,
    StyledLabel,
    StyledTextInput,
    Avatar,
    StyledTitle,
    colors,
    PlayerModalBackground,
    ModalButton,
    ModalFormArea,
} from "./Styles";


const PlayerModal = ({ closePlayerModal }) => {
    const [data, setData] = useState({
        name:'',
        lastName:'',
        image:null
    })

    const handleChange = (e)=>{
        setData(prevState=> {
            return {
            ...prevState,
            [e.target.name]:e.target.value
        }
    })
    }

    const handleFileChange = (e)=>{
        setData(prevState=> {
            return {
            ...prevState,
            image:e.files[0]
        }
    })
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('lastName', data.lastName);
    formData.append('image', data.image);

    const addPlayer = () => {
        Axios.post("http://localhost:5000/player/upload", formData)
        .catch((err) => console.log(err));
    };

    return(
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
            <StyledTitle color={colors.theme}  size={30}>Adauga jucator</StyledTitle>
                <StyledLabel>Nume</StyledLabel>
                    <StyledTextInput name='name'
                    onChange={handleChange}></StyledTextInput>

                <StyledLabel >Prenume</StyledLabel>
                    <StyledTextInput name = 'lastName'
                    onChange={handleChange}></StyledTextInput>

                <StyledLabel>Poza</StyledLabel>
                    <FileUpload onSelect={handleFileChange}
                        name='image' url='http://localhost:5000/player/upload'accept='image/*'
                        customUpload uploadHandler={addPlayer}/>

                <ButtonGroup>
                    <ModalButton onClick={() => closePlayerModal(false)}>Cancel</ModalButton>
                </ButtonGroup>
            </ModalFormArea>
        </PlayerModalBackground>
    );
};

export default PlayerModal;