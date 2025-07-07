import React from 'react';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        {/* Introduction Card */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I design & develop. I'm enthusiastic about AI and love Software Development, specializing in 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> clean architecture</span>, 
            <span className="font-semibold text-indigo-600 dark:text-indigo-400"> data-driven solutions</span>, and 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> robust backends</span>. 
            I focus on performance optimization, data-driven pipelines, and testing-first builds.
          </p>
        </div>
        
        {/* Experience Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg mr-3"></div>
            Experience
          </h2>
          <div className="space-y-6">
            <div className="relative pl-8 pb-6 border-l-2 border-blue-200 dark:border-blue-800 last:border-l-0">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-800"></div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Software Developer</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">Tech9 • Dec 2022 – Present</p>
                <p className="text-gray-600 dark:text-gray-400">Remote</p>
              </div>
            </div>
            <div className="relative pl-8 pb-6 border-l-2 border-blue-200 dark:border-blue-800">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white dark:border-gray-800"></div>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Product Developer</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold">Milk Mantra • Apr 2021 – Dec 2022</p>
                <p className="text-gray-600 dark:text-gray-400">Bhubaneswar, Odisha</p>
              </div>
            </div>
            <div className="relative pl-8 pb-6 border-l-2 border-blue-200 dark:border-blue-800">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full border-2 border-white dark:border-gray-800"></div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Application Developer</h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold">KBC inc • Dec 2020 – Apr 2021</p>
                <p className="text-gray-600 dark:text-gray-400">Remote</p>
              </div>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-600 rounded-full border-2 border-white dark:border-gray-800"></div>
              <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-lg p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Software Engineer</h3>
                <p className="text-pink-600 dark:text-pink-400 font-semibold">SPARC Pvt Ltd • Jan 2017 – Oct 2020</p>
                <p className="text-gray-600 dark:text-gray-400">Odisha, India</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg mr-3"></div>
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Trident Academy of Technology (TAT), Bhubaneswar</h3>
              <p className="text-green-600 dark:text-green-400 font-semibold">Master's in Computer Application</p>
              <p className="text-gray-600 dark:text-gray-400">2014 – 2017</p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ravenshaw University, Cuttack</h3>
              <p className="text-teal-600 dark:text-teal-400 font-semibold">B.Sc. in Information Technology Management</p>
              <p className="text-gray-600 dark:text-gray-400">2011 – 2014</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 