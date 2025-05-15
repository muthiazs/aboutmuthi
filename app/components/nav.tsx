'use client'
import React from 'react';
import Link from 'next/link';
import Lanyard from "./lanyard/Lanyard";

export default function Navigation() {
  return (
     <header className="mb-6">
        <nav className="flex items-center">
        {/* <div className="bg-pink-100 border border-pink-500 text-pink-700 font-bold rounded-lg p-1">
          🎀@devgurlll💗
        </div> */}
        <div className="mx-auto flex space-x-4 w-fit">
          <Link href="/" className="text-pink-300 hover:text-pink-500 font-bold">Home</Link>
          <Link href="/project" className="text-pink-300 hover:text-pink-500 font-bold">Project</Link>
          <Link href="/experience" className="text-pink-300 hover:text-pink-500 font-bold">Experience</Link>
        </div>
        {/* <div className="ml-auto flex space-x-4">
        <Link href="/contact" className="text-pink-300 hover:text-pink-500 font-bold">Contact</Link>
        </div> */}
        </nav>
      </header> 
  );
}