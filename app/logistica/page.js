"use client";
import Image from "next/image";
import Link from 'next/link'
import login from "../../public/images/login.jpg"
import { Navbar } from "../navbar";

export default function Logistica() {
    return (
      <>
        <Navbar />
        <div className='container mx-auto px-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-gray-900 mb-8'>
                Negocios en los que estás inscrito
            </h1>
        </div>
      </>
    );
}
