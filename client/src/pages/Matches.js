import React, {useState, useEffect} from 'react';

// styled components
import {
    StyledMatchArea,
    StyledTable,
} from '../components/Styles';

// axios
import Axios from 'axios';


const Matches = () => {

    const [matchList, setMatchList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/match/read').then((response) => {
            setMatchList(response.data)
        })
    },[]);

    return(
        <div>
            <StyledMatchArea style={{
                width: "100vh"
            }}>
            <StyledTable>
                <tr>
                    <td><b>Echipa1</b></td>
                    <td><b>Echipa2</b></td>
                    <td><b>Data Meciului</b></td>
                    <td><b>Scor</b></td>
                </tr>
                {matchList.map((val, key) => {
                    return  <tr key={key}>
                                <td>{val.team1}</td>
                                <td>{val.team2}</td>
                                <td>{val.data}</td>
                                <td>{val.scor}</td>
                            </tr>
                })}
            </StyledTable>
            </StyledMatchArea>
        </div>
    );
}

export default Matches;