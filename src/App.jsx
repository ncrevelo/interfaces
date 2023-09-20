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



<section className="bg-gray-300 w-screen h-screen grid grid-rows-6">
  <section className="row-span-2">
    <h2 className=" text-left pl-[120px] text-5xl font-bold flex-col pt-5 order-start" >Mis Habilidades Son</h2>
    <section className="  text-2xl font-oswald px-[80px] text-gray-700 flex-col justify-center text-justify width: 180px height: auto word-wrap: break-word order-1 pt-8" style={{ maxHeight: '200px', overflowY: 'auto' }}>
      <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat .
      </p>
    </section>
  </section>
  <section className="row-span-4 grid grid-cols-3 items-center">
    <section className="flex w-[350px] h-[400px] flex-col overflow-hidden border-1 bg-gray-500 rounded-2xl  shadow-md mx-auto"></section>
    <section className="flex w-[350px] h-[400px] flex-col overflow-hidden border-1 bg-gray-500 rounded-2xl  shadow-md mx-auto"></section>
    <section className="flex w-[350px] h-[400px] flex-col overflow-hidden border-1 bg-gray-500 rounded-2xl  shadow-md mx-auto"></section>
  </section>
</section>
      


<section className="bg-white w-screen h-screen flex flex-col items-center  ">
  <h2 className="  text-2xl font-bold text-start text-gray-700 pt-8 " >Mis Proyectos</h2>
  <section className="flex  w-[800px] h-[400px] flex-col   overflow-hidden rounded-tr-none rounded-bl-none border-1  bg-gray-400 rounded-3xl  shadow-md mx-auto my-auto">
  <h2 className="  text-2xl font-bold text-center text-black pt-8 " >Mi Portafolio</h2>
  <section className="  text-2xl font-oswald px-8 text-black flex-col justify-center text-justify width: 100px height:auto word-wrap: break-word order-1 pt-10" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              </section>
  </section>
</section>




<section className="grid grid-cols-2 h-screen w-screen">
  <section className="bg-white flex  ">
    <section className="flex flex-col items-">
      <h3 className=" flex flex-col  text-center  text-gray-600 font-oswald text-3xl pt-10  pb-10">About Us</h3>
      <h2 className=" text-center text-4xl px-10 font-bold flex-col py-10 " >¡¡ No Te Olvides De Enviar Tu Mensaje !!</h2>
      <section className="  text-2xl font-oswald px-[80px] text-gray-700 flex-col justify-center text-justify width: 100px height: auto word-wrap: break-word order-1 pt-10" style={{ maxHeight: '250px', overflowY: 'auto' }}>
        <p > Lorem ipsum dolor sit amet, nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </section> 
  </section>
  <section className="bg-gray-300 flex felx-col justify-center " >
    <section className=" w-[460px] h-[400px] grid grid-rows-2   overflow-hidden rounded-tr-none  border-1  bg-gray-400 rounded-3xl  shadow-md mx-auto my-auto">
      <input type="text" className="border border-gray-300 p-2 w-[300px] h-12 rounded-md my-auto mx-auto"></input>    
      <section className="grid grid-rows-3 pt-5 pl-10">
        <section className="rounded-full bg-gray-700 w-[200px] h-[30px] py-1 text-center text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          <span>  Send Message</span>
        </section>
        <section className="rounded-full bg-gray-700 w-[200px] h-[30px] py-1 text-center text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <span>  Call: 123 456 789</span>
        </section>
        <section className="rounded-full bg-gray-700 w-[250px] h-[30px] py-1 text-center text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>

          <span>  nathalia.cabrera@gmail.com</span>
        </section>

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
