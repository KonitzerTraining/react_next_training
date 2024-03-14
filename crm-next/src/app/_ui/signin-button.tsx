'use client'
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Logged in as {session.user?.name} 
                <button className="rounded bg-yellow-400 p-1" onClick={() => signOut()}>Sign out</button>
            </>
        );
    } else {
        return (
            <button className="rounded bg-slate-300 p-1" onClick={() => signIn()}>Sign in</button>
        );
    }
}