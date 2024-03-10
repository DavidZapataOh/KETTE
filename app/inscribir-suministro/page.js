"use client";
import Image from "next/image";
import Link from 'next/link'
import login from "../../public/images/login.jpg"
import { Navbar } from "../navbar";
import { useState } from 'react';
import QRCode from 'qrcode.react'; 
import Layout from "../Lay";

export default function InscribirSuministro() {
    const [formData, setFormData] = useState({
        sku: '',
        upc: '',
        lugarOrigen: '',
        lugarDestino: '',
        nombreProducto: '',
        descripcionProducto: '',
        fechaProduccion: '',
        fechaVencimiento: '',
        cantidad: ''
    });
    const [showQR, setShowQR] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowQR(true);
        // Aquí integrarías la lógica para inscribir el suministro y generar el código QR
    };

    return (
        <Layout className="bg-light">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Inscribir Suministro</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.keys(formData).map((key) => (
                        <input
                            key={key}
                            className="w-full py-2 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            type="text"
                            name={key}
                            placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} // Converts camelCase to Regular Case
                            onChange={handleChange}
                            value={formData[key]}
                            required
                        />
                    ))}
                    <button type="submit" className="w-full bg-primary hover:bg-thirty text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                        Inscribir
                    </button>
                </form>
                {showQR && (
                    <div className="mt-8 flex justify-center">
                        <QRCode value={JSON.stringify(formData)} size={256} level={"H"} includeMargin={true} />
                    </div>
                )}
            </div>
        </Layout>
        
    );
}
