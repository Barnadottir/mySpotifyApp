import { useSession} from "next-auth/react";
import {BASE_URL} from "../../apiConfig";

const checkResponse = async (response) => {
    if (!response.ok) {
        console.log("response=",response.ok);
        console.log("seems to be an issue with response");
    }

    return  (await response).json();
}

const searchTrack = async (trackName,token) => {
    const response = await fetch(BASE_URL+`/search?q=${encodeURIComponent(trackName)}&type=track`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    );
    const data = await checkResponse(response);
    return data;
}

const getPlayer = async (token) => {
    console.log("something should print here!");
    console.log("token::::!!!!!",token);
    const response = await fetch(BASE_URL+"/me/player",{
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    );
    const data = await checkResponse(response);
    console.log("what do we print here:",data);
    return data;
}

export {searchTrack,getPlayer};