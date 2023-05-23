import NextAuth from "next-auth/next"
import SpotifyProvider from "next-auth/providers/spotify"

const scopes = ["user-read-playback-state", "app-remote-control",
"user-modify-playback-state","user-read-currently-playing"]

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: `https://accounts.spotify.com/authorize?scope=${scopes}`
      ,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token}) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account}) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
}

export default NextAuth(authOptions)