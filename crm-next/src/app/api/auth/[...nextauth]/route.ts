import { compare } from "bcrypt";
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
                const email = credentials.email;
                const password = credentials.password;
                const res = await fetch('http://localhost:1337/api/profiles?filters[email][$eq]=' + email);
                const {data: users} = await res.json();
                const user = users[0]
                const hashedPassword = (user.attributes.password);
                
                const isValid = await compare(password, hashedPassword);

                if(isValid) {
                    return {
                        email: user.attributes.email,
                        name: user.attributes.name
                    }
                }
            }
        })
    ]
});

export { handler as GET, handler as POST };

// http://localhost:3000/api/auth/signin