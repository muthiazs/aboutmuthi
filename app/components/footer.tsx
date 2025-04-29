'use client'
import React from 'react';
import Link from 'next/link';
import Lanyard from "./lanyard/Lanyard";

export default function Footer() {
  return (
        <footer className="bg-pink-100 dark:bg-pink-200 text-black py-6 mt-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <p className="text-lg font-semibold mb-2">✨ Let’s make something cool together!</p>
                <p className="mb-4">Whether it’s a collab, a project, or just a friendly hello—don’t be shy 👋</p>
                <a
                href="https://www.linkedin.com/in/muthia-zhafira-670279205/"
                className="inline-block bg-pink-300 hover:bg-pink-400 text-black font-bold py-2 px-4 rounded-full transition duration-300"
                >
                Let's Connect
                </a>
                <p className="text-sm text-gray-600 mt-6">© {new Date().getFullYear()} Muthia. Made with 💖 and React.</p>
            </div>
        </footer>

  );
}