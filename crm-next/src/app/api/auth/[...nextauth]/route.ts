import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email", type: "text",
                },
                password: {
                    label: "Passwort", type: "password"
                }
            },
            //@ts-ignore
            async authorize(credentials: any) {
                console.log(credentials);
                return {}
            }

        })
    ]
});


export { handler as GET, handler as POST };


// http://localhost:3000/api/auth/signin