import React from 'react';

export default function ContactForm() {
  return (
    <form className="max-w-md mx-auto space-y-4">
      <input className="w-full border p-2 rounded" placeholder="Name" />
      <input className="w-full border p-2 rounded" placeholder="Email" />
      <textarea className="w-full border p-2 rounded" placeholder="Message" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Send</button>
    </form>
  );
} 