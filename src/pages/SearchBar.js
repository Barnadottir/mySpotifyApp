import React, {useState,useEffect} from "react";
import {searchTrack} from "./apiCalls";
const SearchBar = (props) => {
    const [text,setText] = useState("text");
    const [tracks,setTracks] = useState([]);
    const handleChange = (e) => {
        //console.log(e.target.value);
        //setText(e.target.value)
        //here an api call should be made!
        //should be in application state, but lets put it in component state first
        setText(e.target.value)
    }

    const handleSubmit = async (e) => {
      //If data is not retrieved here,
      //it is most likely do to access token 
      //being expired!
        e.preventDefault();
        const data = await searchTrack(text,props.token);
        setTracks(data.tracks.items.map(track => {
          //console.log("track ID:",track.id);
          return track}))
    }
    return (
        <div className="search-bar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={text} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
      <table className="track-list">
        <tbody>
          
            {tracks.length > 0 ? (
              tracks.map((track) => (
                <React.Fragment key = {track.id}>
                  <tr className="track-info"
                  onClick={() => {
                    //console.log("works here!!");
                    //console.log("trackname:",track.name);
                    props.setCurrentSong(track.name)
                    }
                    }>
                        <td><img src={track.album.images[0].url} alt="" /></td>
                        <td>{track.name}</td>
                        <td>{track.album.name}</td>
                  </tr>
                </React.Fragment>
              ))
            ) : (
                <tr>
                    <td className="no-data" colSpan="2">Make a search!</td>
                </tr>
            )}
        </tbody>
      </table>
    </div>
         
    )
}
export default SearchBar;