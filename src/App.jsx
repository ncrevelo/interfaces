/**import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
**/
export default function App() {
  return (
    <div className=' w-screen h-screen bg-white'>
      <footer className="bg-gray-800 py-4 h-[60px] w-screen grid grid-cols-2">
    <section></section>
    <section className="flex flex-rows items-center px-5 justify-center space-x-2">
        <button className="w-[80px] h-5 px-0 justify-center pb-6 text-black bg-white border rounded-lg">Home</button>
        <button className="w-[80px] h-5 justify-center pb-6 text-black bg-white border rounded-lg">About</button>
        <button className="w-[80px] h-5 justify-center pb-6 text-black bg-white border rounded-lg">Gallery</button>
        <button className="w-[80px] h-5 justify-center pb-6 text-black bg-white border rounded-lg">Skills</button>
        <button className="w-[80px] h-5 justify-center pb-6 text-black bg-white border rounded-lg">Portafolio</button>
        <section className="rounded-full bg-gray-700 w-[150px] h-[40px] py-1 text-center text-white flex items-center justify-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            <span>Contact</span>
        </section>
    </section>
</footer>


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
              <section className="  text-2xl font-oswald px-8 text-gary-700 flex-col justify-center text-justify width: 100px height: auto word-wrap: break-word order-1 pt-10" style={{ maxHeight: '200px', overflowY: 'auto' }}>
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
    <h2 className=" text-left  pl-[120px] text-5xl font-bold flex-col pt-5 order-start" >Mis Habilidades Son</h2>
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
      <footer className="bg-gray-800 py-4 h-[200px] w-screen grid grid-rows-2 ">
        <section className="flex flex-col justify-center text-white items-center   ">
          <h2 className="text-center text-3xl font-bold flex-col order-start">Fue un placer enseñarte un poquito de mi</h2>
        </section>
        <section className="flex flex-row items-center justify-center  text-gray-600 font-oswald text-3xl pt-1  pb-10">
          <a href="https://github.com/ncrevelo" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mr-2" viewBox="0 0 17 16" fill="#fff">
          <path d="m8.20003216 0c-4.5281696 0-8.20003216 3.67233045-8.20003216 8.2025137 0 3.6241466 2.34955472 6.6987785 5.60770169 7.7833978.40979259.0759104.5602814-.1779394.5602814-.3946059 0-.195566-.00765306-.84177-.01112588-1.5271516-2.28132027.4961843-2.76269151-.9677944-2.76269151-.9677944-.37300645-.948109-.91045728-1.2001576-.91045728-1.2001576-.74395492-.5091149.05607959-.4986933.05607959-.4986933.82344388.0578979 1.25703171.8453083 1.25703171.8453083.73134987 1.2540026 1.9182821.8914335 2.38621225.6819077.07357231-.5302154.28612167-.8920125.52060124-1.0968421-1.82130043-.2074672-3.73598109-.9107972-3.73598109-4.05374848 0-.89548638.32033536-1.62725057.84492391-2.20166134-.08514837-.20663091-.36580356-1.04087425.07942464-2.17071817 0 0 .68858276-.22046205 2.25559569.8408051.6540475-.18179917 1.35555686-.27289175 2.0524358-.27597964.69687893.00308789 1.39890278.09418047 2.05423654.27597964 1.5651479-1.06126715 2.252766-.8408051 2.252766-.8408051.4463215 1.12984392.1655376 1.96408726.0803893 2.17071817.5257461.57441077.8438949 1.30611063.8438949 2.20166134 0 3.15041368-1.9182821 3.84415838-3.74421295 4.04718668.29409628.2545575.55616545.7537654.55616545 1.5189817 0 1.0974854-.0095181 1.9808133-.0095181 2.2510031 0 .2182748.1475948.4740546.5633041.3935122 3.2563462-1.0858415 5.6029426-4.1593798 5.6029426-7.7823041 0-4.53018325-3.6713481-8.2025137-8.19996784-8.2025137"/><path d="m3.07518929 11.6824029c-.01787762.0408541-.08159856.0531168-.13950928.0251063-.05905999-.0268489-.09226129-.0826118-.07310669-.1236596.01755837-.0420803.08127932-.0538267.14021161-.025558.05918769.0267843.09289978.0830636.07240436.1241113m.40045868.3611685c-.03881997.0364008-.11473601.0194912-.16626186-.0380143-.05324977-.0573765-.06321015-.1340506-.02381554-.1710323.0400331-.0363363.11365058-.0193621.16702804.0380789.05324977.0580219.06359325.1342442.02298552.1710322m.27480455.4620452c-.04992964.0350455-.1315282.0021944-.18190478-.0709945-.04986579-.0731243-.04986579-.1608994.00108543-.1960739.05056812-.0351746.13088971-.0035497.18196863.0690583.04980194.0744151.04980194.1621902-.00121313.1980747m.46462657.5351695c-.0446302.0496962-.13963698.0364009-.209232-.0314957-.07112739-.0663476-.09098432-.1605121-.04622642-.2102728.04514099-.0498253.14072241-.03582.21082822.0314957.07068044.0662185.09226128.161093.04469405.2102728m.60036877.1807134c-.01960153.0644113-.11116048.0937127-.20335792.0663476-.09206974-.0282042-.15234286-.1037166-.1337629-.1688379.01915459-.0648632.11109663-.0953908.20399641-.0660894.09194204.0280751.15234286.1030065.13318826.1685797m.68337202.0766095c.00229855.0678966-.07591604.1241759-.17271058.1254021-.09736918.0021299-.17609455-.0527941-.17711613-.1195289 0-.068542.07642682-.124305.17373215-.1259185.09679454-.0019362.17609456.0526005.17609456.1200453m.67130462-.0260098c.01162045.0662185-.05567602.1342442-.15176823.1523155-.09449599.0174259-.18196862-.0234282-.19403602-.0890659-.01174815-.0678965.05682529-.1358576.15112974-.1534772.09628375-.0169096.18241557.0229119.19467451.0902276" fillRule="nonzero"/>
          </svg>
          </a>

          <a href="https://www.instagram.com" className="  font-semibold py-2 px-4 rounded-md items-center">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="100px" height="100px"><path fill="#4e5fd8" d="M82,31v38c0,2.01-0.46,3.92-1.27,5.62c-1.12,2.33-2.92,4.29-5.15,5.58C73.65,81.35,71.4,82,69,82H31 c-1.47,0-2.89-0.25-4.21-0.7h-0.01c-2.43-0.83-4.52-2.35-6.05-4.34C19.02,74.76,18,72,18,69V31c0-0.59,0.04-1.17,0.12-1.74 c0.1-0.77,0.27-1.52,0.51-2.24C20.3,21.79,25.21,18,31,18h38c0.43,0,0.85,0.02,1.26,0.06h0.03c0.77,0.08,1.51,0.22,2.23,0.43 c4.7,1.32,8.33,5.21,9.24,10.07c0.09,0.45,0.15,0.91,0.19,1.38C81.99,30.29,82,30.64,82,31z"/><path fill="#7550cc" d="M81.76,28.56c-0.91-4.86-4.54-8.75-9.24-10.07c-0.74-0.16-1.48-0.3-2.23-0.43h-0.03 c-0.13-0.023-0.262-0.038-0.391-0.06H46.1c-10.24,1.72-19.73,5.64-27.98,11.26C18.04,29.83,18,30.41,18,31v38 c0,3,1.02,5.76,2.73,7.96c1.53,1.99,3.62,3.51,6.05,4.34h0.01C28.11,81.75,29.53,82,31,82h38c2.4,0,4.65-0.65,6.58-1.8 c2.23-1.29,4.03-3.25,5.15-5.58C81.54,72.92,82,71.01,82,69V31c0-0.36-0.01-0.71-0.05-1.06C81.91,29.47,81.85,29.01,81.76,28.56z"/><path fill="#9c32c8" d="M82,31v38c0,2.01-0.46,3.92-1.27,5.62c-1.12,2.33-2.92,4.29-5.15,5.58C73.65,81.35,71.4,82,69,82H31 c-1.47,0-2.89-0.25-4.21-0.7h-0.01c-2.43-0.83-4.52-2.35-6.05-4.34C19.02,74.76,18,72,18,69V38.03C28.95,29.25,42.86,24,58,24 c8.4,0,16.42,1.62,23.76,4.56c0.09,0.45,0.15,0.91,0.19,1.38C81.99,30.29,82,30.64,82,31z"/><path fill="#d515a3" d="M82,36.29V69c0,2.01-0.46,3.92-1.27,5.62c-1.12,2.33-2.92,4.29-5.15,5.58C73.65,81.35,71.4,82,69,82 H31c-1.47,0-2.89-0.25-4.21-0.7h-0.01c-2.43-0.83-4.52-2.35-6.05-4.34C19.02,74.76,18,72,18,69V47.41C28.28,37.26,42.41,31,58,31 C66.57,31,74.71,32.89,82,36.29z"/><path fill="#ec007a" d="M82,44.14V69c0,2.01-0.46,3.92-1.27,5.62c-1.12,2.33-2.92,4.29-5.15,5.58C73.65,81.35,71.4,82,69,82 H31c-1.47,0-2.89-0.25-4.21-0.7h-0.01c-2.43-0.83-4.52-2.35-6.05-4.34C19.02,74.76,18,72,18,69V58.01C27.12,45.86,41.64,38,58,38 C66.69,38,74.87,40.22,82,44.14z"/><path fill="#ff492e" d="M82,66.07V69c0,3-1.02,5.76-2.73,7.96c-1.53,1.99-3.62,3.51-6.05,4.34h-0.01 C71.89,81.75,70.47,82,69,82H31c-2.4,0-4.65-0.65-6.58-1.8c-2.23-1.29-4.03-3.25-5.15-5.58C18.46,72.92,18,71.01,18,69V54.54 C25.38,48.57,34.77,45,45,45C60.74,45,74.5,53.45,82,66.07z"/><path fill="#ff7a02" d="M79.27,76.96c-1.53,1.99-3.62,3.51-6.05,4.34h-0.01C71.89,81.75,70.47,82,69,82H31 c-2.4,0-4.65-0.65-6.58-1.8c-2.23-1.29-4.03-3.25-5.15-5.58C18.46,72.92,18,71.01,18,69v-4.81C24.6,56.72,34.25,52,45,52 C61.03,52,74.61,62.48,79.27,76.96z"/><path fill="#ffa823" d="M73.21,81.3C71.89,81.75,70.47,82,69,82H31c-2.4,0-4.65-0.65-6.58-1.8 c-2.23-1.29-4.03-3.25-5.15-5.58C24.1,65.34,33.81,59,45,59C58.71,59,70.2,68.51,73.21,81.3z"/><path fill="#ffca58" d="M66.17,82H31c-2.4,0-4.65-0.65-6.58-1.8C27.57,71.9,35.6,66,45,66C55.07,66,63.56,72.77,66.17,82z"/><path fill="#ffdb73" d="M58.75,82h-27.5c2.32-5.3,7.6-9,13.75-9S56.43,76.7,58.75,82z"/><path fill="#fff" d="M60,26.5H40c-7.444,0-13.5,6.056-13.5,13.5v20c0,7.444,6.056,13.5,13.5,13.5h20 c7.444,0,13.5-6.056,13.5-13.5V40C73.5,32.556,67.444,26.5,60,26.5z M69.5,60c0,5.238-4.262,9.5-9.5,9.5H40 c-5.238,0-9.5-4.262-9.5-9.5V40c0-5.238,4.262-9.5,9.5-9.5h20c5.238,0,9.5,4.262,9.5,9.5V60z M50,61.5 c-6.341,0-11.5-5.159-11.5-11.5S43.659,38.5,50,38.5S61.5,43.659,61.5,50S56.341,61.5,50,61.5z M50,42.5 c-4.136,0-7.5,3.365-7.5,7.5s3.364,7.5,7.5,7.5s7.5-3.365,7.5-7.5S54.136,42.5,50,42.5z M65.5,37.5c0,1.657-1.343,3-3,3 s-3-1.343-3-3s1.343-3,3-3S65.5,35.843,65.5,37.5z"/><path fill="#1f212b" d="M60,74H40c-7.72,0-14-6.28-14-14V40c0-7.72,6.28-14,14-14h20c7.72,0,14,6.28,14,14v20	C74,67.72,67.72,74,60,74z M40,27c-7.168,0-13,5.832-13,13v20c0,7.168,5.832,13,13,13h20c7.168,0,13-5.832,13-13V40	c0-7.168-5.832-13-13-13H40z M60,70H40c-5.514,0-10-4.486-10-10V40c0-5.514,4.486-10,10-10h20c5.514,0,10,4.486,10,10v20	C70,65.514,65.514,70,60,70z M40,31c-4.963,0-9,4.037-9,9v20c0,4.963,4.037,9,9,9h20c4.963,0,9-4.037,9-9V40c0-4.963-4.037-9-9-9H40	z M50,62c-6.617,0-12-5.383-12-12s5.383-12,12-12s12,5.383,12,12S56.617,62,50,62z M50,39c-6.065,0-11,4.935-11,11s4.935,11,11,11	s11-4.935,11-11S56.065,39,50,39z M50,58c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S54.411,58,50,58z M50,43	c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S53.859,43,50,43z M62.5,41c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5	s3.5,1.57,3.5,3.5S64.43,41,62.5,41z M62.5,35c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S63.879,35,62.5,35z M69,83H31c-7.72,0-14-6.28-14-14V31c0-7.72,6.28-14,14-14h38c7.72,0,14,6.28,14,14v38C83,76.72,76.72,83,69,83z M31,19	c-6.617,0-12,5.383-12,12v38c0,6.617,5.383,12,12,12h38c6.617,0,12-5.383,12-12V31c0-6.617-5.383-12-12-12H31z"/></svg></a>

          

        </section>
      </footer>
    </div>
  )
}
