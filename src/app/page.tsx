import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-12">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <Image
          src="/me.jpg"
          alt="Profile photo"
          width={300}
          height={300}
          className="rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h1 className="text-4xl font-bold mb-2">Saswat Saubhagya Rout</h1>
        <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">Full Stack Developer</h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-6">
          Welcome to my portfolio! I build modern, performant web and mobile apps with a focus on clean design and great user experience. Explore my work and get in touch!
        </p>
        <Link href="/projects">
          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">View Projects</button>
        </Link>
      </div>

      {/* Skills/Tech Logos */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <Image src="/next.svg" alt="Next.js" width={48} height={48} />
        <Image src="/vercel.svg" alt="Vercel" width={48} height={48} />
        <Image src="/globe.svg" alt="Web" width={48} height={48} />
        {/* Add more tech logos as needed */}
      </div>

      {/* Featured Projects Placeholder */}
      <div className="w-full max-w-3xl">
        {/* <h3 className="text-2xl font-semibold mb-6 text-center">Featured Projects</h3> */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* <div className="border rounded-lg p-4 shadow bg-white dark:bg-gray-800">
            <h4 className="text-lg font-bold mb-2">Project One</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Short description of your project goes here.</p>
            <Link href="/projects">
              <span className="text-blue-600 hover:underline">Learn more →</span>
            </Link>
          </div> */}
          {/* <div className="border rounded-lg p-4 shadow bg-white dark:bg-gray-800">
            <h4 className="text-lg font-bold mb-2">Project Two</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Short description of your project goes here.</p>
            <Link href="/projects">
              <span className="text-blue-600 hover:underline">Learn more →</span>
            </Link>
          </div> */}
          {/* Add more featured projects as needed */}
        </div>
      </div>
    </section>
  );
}
