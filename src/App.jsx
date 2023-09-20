/**import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
**/
export default function App() {
  return (
    <div className='grid grid-rows-[60px_1fr_50px] w-screen h-screen bg-gray-600'>
      <header className="bg-blue-500 py-4 ">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl">Mi Encabezado</h1>
        </div>
      </header>

      {/*Body) */}
      <main >
        <section className="grid grid-cols-2 h-screen w-screen">
          <section className="bg-white py-4 flex items-center justify-center h-screen">
            <section>
              <h2 className="text-center text-5xl font-bold flex-col order-start">Bienvenido</h2>
              <h3 className=" flex flex-col order-2text-center justify-center font-oswald text-4xl">Soy Nathalia Cabrera</h3>
              </section> 
          </section>
          <section className="bg-gray-300"></section>
        </section>

        <section className="grid grid-cols-2 h-screen w-screen">
          <section className="bg-white py-4 flex items-center justify-center h-screen">
            <section>
              <h2 className=" text-center text-3xl font-bold flex-col order-start" >Bienvenido</h2>
              <h3 className=" flex flex-col order-2text-center justify-center font-oswald text-3xl">Soy Nathalia Cabrera</h3>
              </section> 
          </section>
          <section className="bg-white"></section>
        </section>
      </main>

      {/* Pie de página (Footer) */}
      <footer className="bg-gray-300 py-4">
        <div className="container mx-auto">
          <p className="text-center">© 2023 Mi Empresa</p>
        </div>
      </footer>
    </div>
  )
}
