import React from 'react';
import Link from 'next/link';
import Lanyard from "../components/lanyard/Lanyard";
import Stack from './stack/stack';
import RotatingText from './RotatingText/RotatingText';


const images = [
  { id: 1, img: "/assets/stack1.jpg" },
  { id: 2, img: "/assets/stack2.jpg" },
  { id: 3, img: "/assets/stack3.jpg" },
  { id: 4, img: "/assets/stack4.jpg" },
  { id: 5, img: "/assets/stack5.jpg" },
  { id: 6, img: "/assets/stack6.jpg" },
  { id: 7, img: "/assets/stack7.jpg" },
  { id: 8, img: "/assets/stack8.jpg" },
  { id: 9, img: "/assets/stack9.jpg" },
  { id: 10, img: "/assets/stack10.jpg" },
  { id: 11, img: "/assets/stack11.jpg" },
  { id: 12, img: "/assets/stack12.jpg" },
  { id: 13, img: "/assets/stack13.jpg" },
  { id: 15,img: "/assets/stack15.jpeg" },
  { id:16,img: "/assets/stack16.jpg" },
  { id:17,img: "/assets/stack17.jpg" }, 
  { id:18,img: "/assets/stack18.jpg" },
  { id:19,img: "/assets/stack19.jpg" },
  { id:20,img: "/assets/stack20.jpg" },
];
  

export default function Hero() {
  return (
    <main className="container mx-auto px-1 py-4 relative">
      {/* Lanyard component positioned in the top right */}
      <div className="absolute top-0 right-20 w-[300px] md:w-[300px] h-[300px] md:h-[300px] z-10 hidden md:block">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      </div>

      <div className="absolute left-20 md:block w-1/1 h-full relative">
              <h1 className='text-pink-700 font-bold'>Each card has a story... swipe to reveal💗💌</h1>
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 200, height: 200 }}
                cardsData={images}
              />
        </div>
      <section className="left-20 flex flex-col md:flex-row items-start mt-8 mb-12">
        <div className="max-w-xl mr-0 md:mr-8 mb-6 md:mb-0">
        <h1 className="text-2xl font-bold mb-4">
        <div className="inline-flex items-center bg-pink-200 rounded-lg px-3 py-1 w-fit space-x-2">
            <span className="text-black">Hi, I'm</span>
            <RotatingText
              texts={['Muthia👋🏻', 'CompSci Student🙆🏻‍♀️', 'Developer👩🏻‍💻']}
              mainClassName="bg-transparent text-pink-700 font-bold text-2xl"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </h1>
          <p className="text-xl font-medium mb-4">
          I’m a Computer Science (Informatics) student at Diponegoro University who’s always curious and open to learning. I’m currently focused on exploring web development and UI/UX design, and I really enjoy being involved in projects that let me grow both personally and professionally. Beyond tech, I have a strong interest in scholarship and career-related initiatives, as well as educational and social programs that create real impact. I find meaning in sharing knowledge, supporting others, and being part of communities that strive to make things better. Whether through mentoring, organizing, or just listening and learning, I’m always excited to contribute and keep improving.
          </p>
          
          <div className="mt-6 mb-8">
            <h2 className="font-bold mb-2">Get to know me from here!!👇</h2>
            <div className="flex space-x-3 my-4">
              <Link href="https://github.com/muthiazs" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="GitHub" className="w-5 h-5 [filter:invert(73%)_sepia(26%)_saturate(4406%)_hue-rotate(300deg)_brightness(95%)_contrast(98%)]" />
              </Link>
              <Link href="https://www.linkedin.com/in/muthia-zhafira" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 [filter:invert(73%)_sepia(26%)_saturate(4406%)_hue-rotate(300deg)_brightness(95%)_contrast(98%)]" />
              </Link>
              <Link href="https://www.instagram.com/muthiaaazs/" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" className="w-5 h-5 [filter:invert(73%)_sepia(26%)_saturate(4406%)_hue-rotate(300deg)_brightness(95%)_contrast(98%)]" />
              </Link>
              <Link href="https://www.threads.com/thiaanyaa/" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/threads.svg" alt="threads" className="w-5 h-5 [filter:invert(73%)_sepia(26%)_saturate(4406%)_hue-rotate(300deg)_brightness(95%)_contrast(98%)]" />
              </Link>
              <Link href="https://www.tiktok.com/@devgurlll?_t=ZS-8vvFLJU9ftc&_r=1" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg" alt="TikTok" className="w-5 h-5 [filter:invert(73%)_sepia(26%)_saturate(4406%)_hue-rotate(300deg)_brightness(95%)_contrast(98%)]" />
              </Link>
              <Link href="https://www.youtube.com/@thiaanyaa" className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg" alt="Youtube" className="w-5 h-5 [filter:invert(73%)_sepia(26%)_saturate(4406%)_hue-rotate(300deg)_brightness(95%)_contrast(98%)]" />
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