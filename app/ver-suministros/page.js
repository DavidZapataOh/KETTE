"use client";
import Image from "next/image";
import Link from 'next/link'
import login from "../../public/images/login.jpg"
import { Navbar } from "../navbar";
import { useState, useEffect } from 'react';
import QRCode from 'qrcode.react'; 
import Layout from "../Lay";


export default function SuministrosActivos() {
    const [suministros, setSuministros] = useState([]);

    useEffect(() => {
        const suministrosCargados = [
            { id: 1, nombre: 'Producto 1', sku: 'SKU001' },
            { id: 2, nombre: 'Producto 2', sku: 'SKU002' },
        ];
        setSuministros(suministrosCargados);
    }, []);

    return (
        <>
            <Navbar/>
            <Layout className="bg-white">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Suministros Activos</h1>
                    <div className="space-y-4">
                        {suministros.map((suministro) => (
                            <div key={suministro.id} className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{suministro.nombre}</h2>
                                    <p className="text-gray-600">SKU: {suministro.sku}</p>
                                </div>
                                <Link href={`/escanear-qr/${suministro.id}`} className="inline-block bg-primary hover:bg-thirty text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                                    Escanear QR
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
        
        
    );
}
