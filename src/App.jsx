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
              <p class="mb-4">BEM Chat merupakan ruang obrolan khusus untuk anak-anak BEM  supaya koordinasi kegiatan, rapat divisi, atau ngobrol santai bisa berjalan lebih lancar dan menyenangkan.</p>
            </div>
            <div class="mt-8">
             
            </div>
          </div>
        </section>




        <section class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-900 to-sky-900">

          <div class="py-8 px-4 mx-auto max-w-screen-xl items-center  justify-center sm:py-20 lg:px-8">

              <div class="text-center mb-6 mt-8 lg:mb-12">
                  <h2 class="mb-6 text-5xl tracking-tight font-extrabold bg-primary py-4 mx-26 text-white">Koordinasi Lebih Cepat, Kerja Jadi Hebat! </h2>
                  
              </div>

              <div class="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-14 md:space-y-0">

                  <div class="flex flex-col items-center text-center bg-white/10 backdrop-blur-xl py-10 px-4 rounded-md">
                    <svg class="w-10 h-10 text-cyan-300 lg:w-14 lg:h-12 dark:text-center " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" clip-rule="evenodd"></path></svg>
                    <h3 class="my-2 text-xl font-bold text-white">Instan dan Cepat</h3>
                    <p class=" text-cyan-100 mx-2">Mulai obrolan, koordinasi kegiatan, atau tanya info rapat. Semua bisa dilakukan seketika, tanpa loading panjang.</p>
                  </div>



                  <div class="flex flex-col items-center text-center bg-white/10 backdrop-blur-xl py-10 px-4 rounded-md">
                    <svg class="w-10 h-10 text-cyan-300 lg:w-14 lg:h-12 text-center" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"></path></svg>

                    <h3 class="my-2 text-xl font-bold text-white">Terkoneksi Antar Sesama</h3>
                    <p class=" text-cyan-100 mx-2">Tiap divisi, tiap anggota, langsung terkoneksi dalam satu ruang. Gak ada lagi info nyasar atau chat tercecer.</p>
                  </div>



                  <div class="flex flex-col items-center text-center bg-white/10 backdrop-blur-xl py-10 px-4 rounded-md">
                    <svg class="w-10 h-10 text-cyan-300 lg:w-14 lg:h-12 text-center " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" /></svg>                    
                    <h3 class="my-2 text-xl font-bold text-white">Serunya Sharing KJ & Tugas</h3>
                    <p class=" text-cyan-100 mx-2">Buat thread bareng, kirim KJ rame-rame, bantu jawab bareng. Belajar dan diskusi makin hidup dan seru!</p>
                  </div>
                  
              </div>

          </div>
          
        </section>






</div>

    </>
  )
}

export default App
