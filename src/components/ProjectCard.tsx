import React from 'react';

export default function ProjectCard() {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold mb-2">Project Title</h2>
      <p className="mb-2">Short project description goes here.</p>
      <div className="flex gap-2 text-sm text-gray-500">Tech1, Tech2</div>
    </div>
  );
} 