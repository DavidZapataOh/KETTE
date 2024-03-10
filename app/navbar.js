"use client";

import Link from "next/link";
import {signIn, useSession, signOut} from "next-auth/react"

export function Navbar(){
    const {data: session} = useSession()
    console.log(session)
    
    return(
        <nav className="bg-dark flex items-center py-3 justify-between px-24 text-light">
            <Link href="/">
                <h1>
                    Menú principal
                </h1>
            </Link>

            {session?.user ? (
                <div className="flex gap-x-2 items-center">
                    
                    <p>{session.user.name}</p>
                    <img src={session.user.image} alt="" className="w-10 h-10 rounded-full cursor-pointer"/>
                    <button
                        onClick={() => signOut('google', { callbackUrl: "`${window.location.origin}/login`" })}
                    >
                        LogOut
                    </button>
                </div>
            ): (
                <button onClick={() => signIn()} className="bg-primary px-3 py-2 rounded">Sign In</button>
            )}

            
        </nav>
    )
}