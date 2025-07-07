import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
        {/* Profile Image with enhanced styling */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <Image
            src="/me.jpg"
            alt="Profile photo"
            width={200}
            height={200}
            className="relative rounded-full border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-4 mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
            Saswat Saubhagya Rout
          </h1>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
              Senior Software Developer at Tech9
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-8">
          I design & develop. I'm enthusiastic about AI and love Software Development, specializing in 
          <span className="font-semibold text-blue-600 dark:text-blue-400"> clean architecture</span>, 
          <span className="font-semibold text-indigo-600 dark:text-indigo-400"> data-driven solutions</span>, and 
          <span className="font-semibold text-purple-600 dark:text-purple-400"> robust backends</span>. 
          I focus on performance optimization, data-driven pipelines, and testing-first builds.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400 mb-10">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-lg">Bhubaneswar, Odisha, India</span>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Learn More About Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
