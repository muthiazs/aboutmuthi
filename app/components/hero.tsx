import React from 'react';
import Link from 'next/link';
import Lanyard from "../components/lanyard/Lanyard";

export default function Hero() {
  return (
    <main className="container mx-auto px-4 py-6 relative">
      {/* Lanyard component positioned in the top right */}
      <div className="absolute top-0 right-0 w-[150px] md:w-[200px] h-[200px] md:h-[250px] z-10">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      <section className="flex flex-col md:flex-row items-start mt-8 mb-12">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold mb-2">Hi, I'm Muthi 👋🏼</h1>
          <p className="text-sm mb-6">
            Enthusiastic Computer Science (Informatics) student at
            Diponegoro University with strong communication skills and
            a passion for learning. Proficient in team collaboration,
            seeking opportunities to develop skills and gain new
            experiences, actively exploring UI/UX Design, web and app
            development, and interested in scholarships and career
            opportunities. I am dedicated to contributing effectively to
            any team and constantly improving my knowledge.
          </p>
          
          <div className="mt-6 mb-8">
            <h2 className="font-bold mb-2">Get to know me from here!!👇</h2>
            <div className="flex space-x-3 my-4">
              <Link href="https://github.com/muthiazs" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="GitHub" className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/muthia-zhafira" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/muthiaaazs/" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
              </Link>
              <Link href="https://www.threads.com/thiaanyaa/" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/threads.svg" alt="threads" className="w-5 h-5" />
              </Link>
              <Link href="https://www.tiktok.com/@devgurlll?_t=ZS-8vvFLJU9ftc&_r=1" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg" alt="TikTok" className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-gray-500">Find out more about me and my personal life on social media.</p>
          </div>
        </div>
        
        {/* We don't need a separate div for Lanyard here since we're positioning it absolutely */}
      </section>
    </main>
  );
}