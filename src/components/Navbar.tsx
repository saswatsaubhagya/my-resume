import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex gap-6 items-center justify-between w-full">
      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/resume">Resume</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
} 