// app/contact/page.tsx
import { redirect } from 'next/navigation';

export default function ContactPage() {
  async function submitForm(formData: FormData) {
    "use server";
    // Here you would typically send an email or save to a database.
    const name = formData.get('name');
    const email = formData.get('email');
    console.log("New message from:", name, email);
    redirect('/contact/thank-you');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 text-center pt-24 bg-black">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold">Let's Work Together</h1>
        <p className="mt-4 text-lg text-gray-400">
          Have a project in mind? I'd love to hear from you.
        </p>
        <form action={submitForm} className="mt-10 w-full max-w-lg mx-auto text-left space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
            <input 
              required 
              type="text" 
              id="name" 
              name="name" 
              className="mt-1 block w-full p-3 rounded-md bg-[#1a191e] border-transparent text-white focus:ring-2 focus:ring-razzmatazz focus:border-transparent" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
            <input 
              required 
              type="email" 
              id="email" 
              name="email" 
              className="mt-1 block w-full p-3 rounded-md bg-[#1a191e] border-transparent text-white focus:ring-2 focus:ring-razzmatazz focus:border-transparent" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea 
              required 
              id="message" 
              name="message" 
              rows={5} 
              className="mt-1 block w-full p-3 rounded-md bg-[#1a191e] border-transparent text-white focus:ring-2 focus:ring-razzmatazz focus:border-transparent"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#df0303] text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}