// app/contact/page.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function ContactPage() {
  const [result, setResult] = useState(""); 
  const router = useRouter(); 

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "ba5ca62b-b12a-4940-b7b7-ba6d66dac77b"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Form Submitted Successfully", data);
      setResult(data.message);
      router.push('/contact/thank-you'); 
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 text-center pt-24 bg-black">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold">Let's Work Together</h1>
        <p className="mt-4 text-lg text-gray-400">
          Have a project in mind? I'd love to hear from you.
        </p>
        
        {/* Form Input Section */}
        <form onSubmit={onSubmit} className="mt-10 w-full max-w-lg mx-auto text-left space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
            <input required type="text" id="name" name="name" className="mt-1 block w-full p-3 rounded-md bg-[#1a191e] border-transparent text-white focus:ring-2 focus:ring-razzmatazz focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
            <input required type="email" id="email" name="email" className="mt-1 block w-full p-3 rounded-md bg-[#1a191e] border-transparent text-white focus:ring-2 focus:ring-razzmatazz focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea required id="message" name="message" rows={5} className="mt-1 block w-full p-3 rounded-md bg-[#1a191e] border-transparent text-white focus:ring-2 focus:ring-razzmatazz focus:border-transparent"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#df0303] text-white font-bold py-3 px-8 rounded-lg cursor-pointer hover:bg-opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
        <span className="mt-4 text-gray-400">{result}</span>
      </div>
    </main>
  );
}