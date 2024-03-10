"use client";
import Image from "next/image";
import {motion} from 'framer-motion';
import Link from 'next/link'
import right from "../public/images/Right-removebg.png"

import agricultura from "../public/images/agricultura.png"
import farmaceutica from "../public/images/farmaceutica.png"
import textil from "../public/images/textil.png"
import electronica from "../public/images/electrodomesticos.png"
import automocion from "../public/images/locomocion.png"
import cosmeticos from "../public/images/cosmetico.png"
import joyas from "../public/images/joyas.png"
import manufactura from "../public/images/manufactura.png"

import Layout from "./Lay";
import AnimatedText from "./AnimatedText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);


export default function Home() {
  
  const sectors = [
    { name: 'Agricultura y Alimentación', icon: '/images/agricultura.png' },
    { name: 'Farmacéutica', icon: '/images/farmaceutica.png' },
    { name: 'Moda y Textil', icon: '/images/textil.png' },
    { name: 'Electrónica', icon: '/images/electrodomesticos.png' },
    { name: 'Automoción', icon: '/images/locomocion.png' },
    { name: 'Cosméticos', icon: '/images/cosmetico.png' },
    { name: 'Bienes de Lujo', icon: '/images/joyas.png' },
    { name: 'Manufactura', icon: '/images/manufactura.png' },
  ];
  return (
    <main className='text-light w-full min-h-screen bg-light'>
      <Layout className='pt-0 inset-0 bg-gradient-to-t from-dark to-primary md:pt-16 sm:pt-8'>
        <div className='flex items-center justify-between w-full lg:flex-col'>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <AnimatedText text="CONECTANDO EL MUNDO, BLOQUE A BLOQUE" className='!text-6xl !text-left xl:!text-4xl 2xl:!text-7xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
            <p className='my-4 font-medium !text-xl md:text-sm sm:text-xs text-left'>
              Tu cadena de suministros descentralizada y segura
            </p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link href="/login" target={"_blank"} className='flex items-center bg-primary text-light p-2.5 px-8 rounded-lg text-lg font-semibold hover:bg-thirty hover:text-light border-0 border-solid border-transparent hover:border-dark'>
                Go to Dapp
              </Link>
            </div>
          </div>
          <motion.div className='w-1/2 md:w-full' whileHover={{y:-10, scale:1.01}}>
            <Image src={right} alt="Kette" className="w-full h-auto lg:hidden md:inline-block md:w-full" />
          </motion.div>
        </div>
      </Layout>

      <Layout className="py-16 bg-light py-22">
        <div className='flex flex-col items-center justify-center text-center'>
          <h2 className="text-3xl font-bold text-center mb-12 text-dark">Maximiza el Potencial de tu Cadena de Suministro</h2>
          <div className='grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-12'>
            {[
              { title: 'Seguridad Mejorada', icon: '🔒', description: 'Garantiza la integridad de los datos con la inmutabilidad de la blockchain.' },
              { title: 'Eficiencia Operativa', icon: '📦', description: 'Reduce costes y tiempos con procesos automatizados y transparentes.' },
              { title: 'Transparencia Completa', icon: '⚡', description: 'Acceso en tiempo real a la información de la cadena de suministro.' },
              { title: 'Rastreabilidad de Extremo a Extremo', icon: '🔍', description: 'Visualiza el recorrido completo de los productos en la cadena.' },
              { title: 'Integración Fácil', icon: '🚀', description: 'Conecta sin esfuerzo con sistemas existentes y externos.' },
              { title: 'Adaptabilidad e Innovación', icon: '🌱', description: 'Adáptate rápidamente a los cambios del mercado y a las nuevas tecnologías.' },
            ].map((advantage, index) => (
              <div key={index} className='flex flex-col items-center p-6 bg-primary rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <div className='text-4xl mb-4'>{advantage.icon}</div>
                <h3 className='text-xl font-semibold text-thirty mb-2'>{advantage.title}</h3>
                <p className='text-light text-sm text-center'>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>

      <Layout className="py-16 bg-light">
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className="text-3xl font-bold text-center mb-12 text-dark">Sectores que Impactamos</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {sectors.map((sector, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center p-6 bg-light border-primary border-4 rounded-lg shadow-lg" style={{ height: '300px', width: '300px' }}>
                <div className="h-3/5 w-full flex items-center justify-center">
                  <img src={sector.icon} alt={sector.name} className="w-32 h-32" /> 
                </div>
                <div className="h-2/5 w-full">
                  <h3 className="text-xl font-semibold text-primary text-center mt-2">{sector.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Layout>

      <footer className='w-full bg-primary border-t border-solid border-gray-700 text-light'>
        <Layout className='py-8 bg-primary' >
            <div className='flex md:flex-col flex-row items-center justify-between md:space-y-4 space-y-0'>
                <div className='md:text-center text-left'>
                    <span className='block mb-2'>{new Date().getFullYear()} &copy; KETTE. Todos los derechos reservados.</span>
                    <span className='text-sm text-gray-400'>Empowering Supply Chains.</span>
                </div>
                <div className='flex space-x-4'>
                    <Link href="/privacy-policy">Politica de privacidad</Link>
                    <Link href="/terms">Terminos y condiciones</Link>
                </div>
                <div className='flex space-x-4'>
                    <Link href="https://discord.com/" target={"_blank"} aria-label="Entra a nuestro Discord">
                      <Image src={agricultura} alt="Discord Logo" className='h-6 w-6'/>
                    </Link>
                    <Link href="https://twitter.com/" target={"_blank"} aria-label="Siguenos en Twitter">
                      <Image src={agricultura} alt="Instagram Logo" className='h-6 w-6'/>
                    </Link>
                    <Link href="https://www.linkedin.com/company/" target={"_blank"} aria-label="Conectate en LinkedIn">
                      <Image src={agricultura} alt="Instagram Logo" className='h-6 w-6'/>
                    </Link>
                    <Link href="https://www.instagram.com/" target={"_blank"} aria-label="Siguenos en Instagram">
                      <Image src={agricultura} alt="Instagram Logo" className='h-6 w-6'/>
                    </Link>
                </div>
            </div>
        </Layout>
    </footer>
    </main>
  );
}
