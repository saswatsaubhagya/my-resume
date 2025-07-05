import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar placeholder */}
      <header className="bg-white dark:bg-gray-900 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </header>
      <main className="flex-1 container mx-auto py-8">{children}</main>
      <Footer />
    </div>
  );
} 