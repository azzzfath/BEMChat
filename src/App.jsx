import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div class="relative">

        <section class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-900 ">
            <ul class="blobs">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

          <div class="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

            <h1 class="mb-2 text-4xl pt-24 font-extrabold tracking-tight leading-none md:text-8xl lg:text-10xl text-white">BEM Chat!</h1>

            <p class="mb-8 text-xl font-light text-white tracking-widest lg:text-xl sm:px-16 xl:px-48">Ngobrol, koordinasi, dan kolaborasi <br></br>Semua jadi satu</p>

            <a href="#" class="inline-flex justify-between items-center py-2 px-4 mb-7 text-sm text-white rounded-full hover:bg-red-400 bg-primary" role="alert"> <span class="text-lg font-medium">Lets Try!</span> 
              <svg class="h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>

          </div>


        </section>





        <section class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-800 to-pink-900 text-white">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-100 sm:text-lg ">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-100">Apa itu BEM Chat?</h2>
              <p class="mb-4">BEM Chat merupakan ruang obrolan khusus untuk anak-anak BEM  supaya koordinasi kegiatan, rapat divisi, atau ngobrol santai bisa berjalan lebih lancar dan menyenangkan. ✌️</p>
            </div>
            <div class="mt-8">
             
            </div>
          </div>
        </section>







</div>

    </>
  )
}

export default App
