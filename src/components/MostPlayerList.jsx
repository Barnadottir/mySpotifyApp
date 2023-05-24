import { useEffect } from "react";
import {getMostPlayedTracks} from "../pages/apiCalls";
const MostPlayedList = () => {
    const [mostPlayedTracks,setMostPlayedTracks] = useState([]);

    useEffect(() => {
        setMostPlayedTracks(getMostPlayedTracks())
    },
    [])

}

export default MostPlayedList;