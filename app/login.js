"use client";
import Image from "next/image";
import Link from 'next/link'
import login from "../public/images/login.jpg"

import Layout from "./Lay";
import AnimatedText from "./AnimatedText";


export default function Login() {
  return (
    <main className='text-light w-full min-h-screen bg-light flex flex-col justify-center items-center'>
        <Layout className='w-full md:px-8 lg:px-16'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                <div className='w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left p-4'>
                    <p className='my-4 font-medium text-xl md:text-sm sm:text-xs'>
                    Ingresa a la plataforma
                    </p>
                    <div className='flex flex-col items-center md:items-start space-y-2'>
                    <Link href="" target={"_blank"} className='bg-primary text-light py-2.5 px-8 rounded-lg text-lg font-semibold hover:bg-secundary hover:text-light'>
                        Ingresar como Negocio
                    </Link>
                    <Link href="" target={"_blank"} className='bg-primary text-light py-2.5 px-8 rounded-lg text-lg font-semibold hover:bg-secundary hover:text-light'>
                        Ingresar como Logística
                    </Link>
                    <Link href="" target={"_blank"} className='bg-primary text-light py-2.5 px-8 rounded-lg text-lg font-semibold hover:bg-secundary hover:text-light'>
                        Registrarme
                    </Link>
                    </div>
                </div>
                <div className='w-full md:w-2/3 h-auto' whileHover={{ y: -10, scale: 1.01 }}>
                    <Image src={login} alt="Kette" layout="responsive" width={700} height={467} /> {/* Ajusta width y height según las proporciones de tu imagen */}
                </div>
            </div>
        </Layout>
    </main>

  );
}
