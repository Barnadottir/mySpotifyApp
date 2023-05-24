import {BASE_URL} from "../../apiConfig";

const types = [
    "artists",
    "tracks",
]

const checkResponse = async (response) => {
    if (!response.ok) {
        console.log("seems to be an issue with response in apiCalls");
    }

    return await response.json()
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
    const response = await fetch(BASE_URL+"/me/player",{
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    );
    const data = await checkResponse(response)
    return data
}

const getMostPlayedTracks = async (type = types[1],token) => {
    const response = await fetch(`${BASE_URL}/me/top/${type}`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    const data = await checkResponse(response)
    return data;
}

export {searchTrack,getPlayer,getMostPlayedTracks};