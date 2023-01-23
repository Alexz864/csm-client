import { useState, useEffect } from "react";

// axios
import Axios from "axios";

// styled components
import {
    StyledPlayerCard,
    StyledPlayerGrid,
    StyledPlayerName,
    StyledImage
} from "../components/Styles"

const Players = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/player/upload').then((response) => {
            setData(response.data)
        })
        .catch((err) => console.log(err, 'It has an error.'));
    },[]);

    return(
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
    );
};

export default Players;