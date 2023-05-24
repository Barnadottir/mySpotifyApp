import { useSession,signIn,signOut} from "next-auth/react"
const Login = () => {
    const {data: session} = useSession();
    
        return (
            <div className="login">
                {
                    session ? 
                    <button className = "btn" onClick={() => signOut()}>Sign out</button>
                    : <buton className = "btn" onClick= {() => signIn()}>Sign in</buton>
                }
            </div>
        )
}
export default Login;