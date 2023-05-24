import {useSession,signIn,signOut} from "next-auth/react";
import {useState,useEffect} from "react";
import Login from "./Login.jsx";
const Navbar = (props) => {
    const {data: session, status} = useSession();

    return (
        <nav className="navbar">
            <ul>
                {
                    session ? 
                    <li>Welcome, {session.user.name}!</li> : 
                    <li>Welcome, please Sign in!</li>
                }
                <li><Login/></li>
            </ul>
        </nav>


    )
}

export default Navbar;