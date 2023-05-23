import { Inter } from 'next/font/google'
//import Login from './Login'
import { useSession,signOut} from "next-auth/react"
import {useState,useEffect} from "react";
import SearchBar from "./SearchBar";
import Player from "./Player";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [currentSong,setCurrentSong] = useState();
  
  const {data: session, status} = useSession({required: true});
  let token = null
  if (session)  token = session.accessToken;
  
  //if (session) console.log("token = ",session.accessToken);
  //using required: true, we have so that we automatically go to Login.tsx
  const [,reRender] = useState(null);

  return (
    <div>
      <p>Welcome, {session?.user.email}</p>
      <button onClick={() => console.log("I am a button!")
      }>click me!</button>
      <form>
        <input/>
      </form>
      <SearchBar 
      token = {token}
      setCurrentSong = {(songName) => setCurrentSong(songName)}
      />
      <Player 
      token = {token}
      currentSong = {currentSong}/>
      <p>Sign out</p>
      <button onClick = {() => signOut()}>sign out</button>
    </div>
  )
}