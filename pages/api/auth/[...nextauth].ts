import NextAuth, { Awaitable, Session, User } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

type ExtendedUserType = User & { username?: string, uid?: string }

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    // https://github.com/nextauthjs/next-auth/discussions/2979
    async session({ session, token, user }) { 
      (session.user as ExtendedUserType).username = session.user?.name?.split(' ').join('').toLocaleLowerCase();
      (session.user as ExtendedUserType).uid = token.sub
      return session 
    },
  }
  // theme: {
  //   logo: 'https://links.papareact.com/sq0',
  //   brandColor: '#F13287',
  //   colorScheme: 'auto'
  // }
})