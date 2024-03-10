"use client";
import Image from "next/image";
import Link from 'next/link'
import login from "../../public/images/login.jpg"
import {signIn, useSession} from 'next-auth/react'


export default function Login() {
  const {data: session} = useSession();
    return (
      <div className='flex min-h-screen text-white'>
        <div className='flex-1 relative w-2/3'>
          <Image src={login} alt="Login" layout="fill" objectFit="cover" />
        </div>
  
        <div className='w-1/3 flex flex-col justify-center items-center bg-light p-4'>
          <p className='text-2xl font-bold mb-4 text-dark'>
            Ingresa a la plataforma
          </p>
          <div className='flex flex-col space-y-4'>
            <Link href="/negocio" className='bg-primary hover:bg-thirty hover:text-dark text-white font-bold py-2 px-4 rounded'>
                <button
            onClick={() => signIn('google', { callbackUrl: `${window.location.origin}/negocio` })}
          >
            Ingresar como Negocio
          </button>
            </Link>
            <Link href="/logistica" className='bg-primary hover:bg-thirty hover:text-dark text-white font-bold py-2 px-4 rounded'>
                Ingresar como Logística
            </Link>
            <Link href="/registro" className='bg-primary hover:bg-thirty hover:text-dark text-white font-bold py-2 px-4 rounded'>
                Registrarme
            </Link>
          </div>
        </div>
      </div>
    );
  }