import { Inter } from 'next/font/google'
//import Login from './Login'
import { useSession,signOut} from "next-auth/react"
import {useState,useEffect} from "react";
import SearchBar from "./SearchBar";
import Player from "./Player";
import Navbar from "../components/Navbar"
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
      <Navbar/>
      <p>Welcome, {session?.user.email}</p>
      <SearchBar 
      token = {token}
      setCurrentSong = {(songName) => setCurrentSong(songName)}
      />
      <Player 
      token = {token}
      currentSong = {currentSong}/>
    </div>
  )
}