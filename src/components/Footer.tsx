import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-4 text-gray-500 text-sm bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      © {new Date().getFullYear()} Saswat Saubhagya Rout. All rights reserved.
    </footer>
  );
} 