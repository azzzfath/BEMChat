import React from "react";

const Navbar = () => {
    return(
  <nav class="fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mt-4 mx-auto px-12 py-4 flex justify-between items-center bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-xl">

      <div class="text-xl font-bold">
        BEM Chat!
      </div>

      <ul class="flex text-white space-x-10 font-medium">
        <li><a href="#" class="hover:text-secondary">Home</a></li>
        <li><a href="#layanan" class="hover:text-secondary">Layanan Unggulan</a></li>
        <li><a href="#kontak" class="hover:text-secondary">Kontak</a></li>
        <li><a href="#chatt" class="hover:text-secondary">Chat</a></li>
      </ul>
    </div>
  </nav>
    )
}


export default Navbar