'use client';
import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // On mount, check localStorage or system preference
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
      console.log('Dark mode enabled on mount');
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
      console.log('Light mode enabled on mount');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
      console.log('Switched to light mode, HTML classes:', document.documentElement.className);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
      console.log('Switched to dark mode, HTML classes:', document.documentElement.className);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 transition"
        aria-label="Toggle dark mode"
        disabled
      >
        ☀️
      </button>
    );
  }

  return (
    <button
      className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 transition"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
} 