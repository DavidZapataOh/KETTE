"use client";
import Image from "next/image";
import Link from 'next/link'
import login from "../../public/images/login.jpg"
import { Navbar } from "../navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../Lay";

export default function CrearNegocio() {
    const [formState, setFormState] = useState({
        nombre: '',
        sector: '',
        localidad: '',
        descripcion: '',
        contacto: ''
    });
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí integrarías la lógica para activar el contrato inteligente con los datos del formulario
        console.log(formState);
        // Simulación de activación del contrato y redirección
        // router.push('/ruta-a-la-que-redirigir-después-de-crear');
    };

    return (
        <Layout className="bg-light">
            <div className='container mx-auto px-4 py-8'>
                <h1 className='text-2xl font-bold mb-4'>Crear Negocio</h1>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                    <input type='text' name='nombre' placeholder='Nombre del negocio' onChange={handleChange} value={formState.nombre} required />
                    <input type='text' name='sector' placeholder='Sector' onChange={handleChange} value={formState.sector} required />
                    <input type='text' name='localidad' placeholder='Localidad' onChange={handleChange} value={formState.localidad} required />
                    <textarea name='descripcion' placeholder='Descripción del Negocio' onChange={handleChange} value={formState.descripcion} required />
                    <input type='text' name='contacto' placeholder='Información de Contacto' onChange={handleChange} value={formState.contacto} required />
                    <button type='submit' className='bg-primary hover:bg-thirty text-white font-bold py-2 px-4 rounded'>
                        Crear Negocio
                    </button>
                </form>
            </div>
        </Layout>
        
    );
}
