"use client";
import Image from "next/image";
import Link from 'next/link'
import login from "../../public/images/login.jpg"
import { Navbar } from "../navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../Lay";

export default function AdministrarNegocio() {
    const negocio = {
        nombre: "Mi Negocio",
        sector: "Tecnología",
        localidad: "Ciudad X",
    };

    return (
        <>
            <Navbar/>
            <Layout className="bg-light">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Administrar Negocio</h1>
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">{negocio.nombre}</h2>
                        <p className="text-gray-600"><strong>Sector:</strong> {negocio.sector}</p>
                        <p className="text-gray-600"><strong>Localidad:</strong> {negocio.localidad}</p>
                        <button type="submit" className="w-full bg-primary hover:bg-thirty text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                        Ver suministros
                    </button>
                    </div>
                    
                </div>
            </Layout>
            
        </>
        
    );
}