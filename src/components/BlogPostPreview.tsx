import React from 'react';

export default function BlogPostPreview() {
  return (
    <div className="border rounded-lg p-4 shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Blog Post Title</h2>
      <p className="mb-2 text-gray-600">Short summary of the blog post goes here.</p>
      <span className="text-xs text-gray-400">Date</span>
    </div>
  );
} 