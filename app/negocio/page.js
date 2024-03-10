"use client";
import Image from "next/image";
import Link from 'next/link'
import login from "../../public/images/login.jpg"
import { Navbar } from "../navbar";

export default function Negocio() {
    return (
        <>
            <Navbar />
            <div className='container mx-auto px-4 py-16'>
                <h1 className='text-4xl font-bold text-center text-gray-900 mb-8'>
                    Mis Negocios
                </h1>
                <div className='flex justify-center'>
                    <Link href="/crear-negocio" className='bg-primary hover:bg-thirty text-white font-bold py-2 px-4 rounded'>
                      Crear Negocio
                    </Link>
                </div>
            </div>
        </>
    );
}
