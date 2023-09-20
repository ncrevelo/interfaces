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

        <section className="flex items-center  rounded-xl ">

            <section className="flex w-[550px] h-[480px] flex-col overflow-hidden   border-1 bg-gray-500 rounded-3xl rounded-tr-none shadow-md mx-auto">
            
            </section>
        </section>

          <section className="bg-white py-4 flex items-center justify-center h-screen">
            
            <section>

            <h3 className=" flex flex-col order-2 text-center justify-center font-oswald text-3xl pt-end pb-3">About Us</h3>
              <h2 className=" text-center text-5xl font-bold flex-col order-start" >¡¡ Estoy encantada de que estes aquí !!</h2>
              <section className="  text-2xl font-oswald px-8 text-gray-700 flex-col justify-center text-justify width: 100px height: auto word-wrap: break-word order-1 pt-10" style={{ maxHeight: '200px', overflowY: 'auto' }}>
              <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              </section>
              <h2 className=" text-center text-3xl font-bold flex-col order-start" >Bienvenido</h2>
              <h3 className=" flex flex-col order-2text-center justify-center font-oswald text-3xl">Soy Nathalia Cabrera</h3>
              </section> 
          </section>
          
        </section>


    <section className="grid grid-rows-4 bg-white h-screen w-screen">
      <section className="">
        <h3 className=" flex flex-col  text-gray-600 pl-[300px] order-2 text-left justify-left font-oswald text-4xl pt-end pb-10">Gallery</h3>
        <h2 className=" text-left pl-[250px] text-5xl font-bold flex-col order-start" >My  Gallery</h2></section>
      <section className="row-span-3 bg-white">
    <section className="flex gap-1 items-center ">

        <section className="flex w-[150px] h-[480px] flex-col  rounded-3xl  mx-auto  items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</section>

        <section className="flex w-[170px] h-[230px] flex-col overflow-hidden border-1 bg-gray-500 rounded-2xl items-center  shadow-md mx-auto"></section>

        <section className="flex w-[170px] h-[290px] flex-col overflow-hidden border-1 bg-gray-500 rounded-2xl  shadow-md mx-auto"></section>

        <section className="flex w-[170px] h-[350px] flex-col overflow-hidden border-1 bg-gray-500 rounded-2xl  shadow-md mx-auto"></section>

        <section className="flex w-[170px] h-[290px] flex-col overflow-hidden border-1 bg-gray-500 rounded-2xl  shadow-md mx-auto"></section>

        <section className="flex w-[170px] h-[230px] flex-col overflow-hidden border-1 bg-gray-500 rounded-2xl  shadow-md mx-auto"></section>

        <section className="flex w-[170px] h-[480px] flex-col   rounded-3xl  mx-auto items-center justify-center "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</section>

  </section>
      </section>
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
