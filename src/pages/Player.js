import {getPlayer} from "./apiCalls";
import {useState,useEffect} from "react";
const Player = (props) => {
    //const [myData,setMyData] = useState();
    
    /*getPlayer(props.token);
    if(!myData) {
        const data = getPlayer(props.token);
        setMyData(data);
    }*/

    //console.log("DATA",myData);

    return (
        <div>
            Player data will be displayed here!
        </div>
    )
}

export default Player;