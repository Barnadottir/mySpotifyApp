import {useState,useEffect} from "react";
import {searchTrack} from "./apiCalls";
const SearchBar = (props) => {
    const [text,setText] = useState();
    const [tracks,setTracks] = useState([]);
    const handleChange = (e) => {
        console.log(e.target.value);
        //setText(e.target.value)
        //here an api call should be made!
        //should be in application state, but lets put it in component state first
        setText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("trackName==!!!",text);
        const data = await searchTrack(text,props.token);
        //can remove later
        console.log("What we are looking for",data.tracks.items);
        setTracks(data.tracks.items.map(track => track))
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
                <tr key={track} 
                onClick={() => {
                  //console.log("works here!!");
                  //console.log("trackname:",track.name);
                  props.setCurrentSong(track.name)
                  }
                  }>
                  <div className="track-info">
                    <img src={track.album.images[0].url} alt="" />
                    <div>
                      <p>{track.name}</p>
                      <p>{track.album.name}</p>
                    </div>
                  </div>
                </tr>
              ))
            ) : (
                <tr>
                    <td className="no-data" colSpan="2">No data</td>
                </tr>
            )}
        </tbody>
      </table>
    </div>
         
    )
}
export default SearchBar;