// app/contact/page.tsx
import { redirect } from 'next/navigation';

export default function ContactPage() {
  async function submitForm(formData: FormData) {
    "use server";
    // Here you would typically send an email or save to a database.
    // For now, we'll just log the data and redirect.
    const name = formData.get('name');
    const email = formData.get('email');
    console.log("New message from:", name, email);

    redirect('/contact/thank-you');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 text-center pt-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold">Let's Work Together</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">
          Have a project in mind? I'd love to hear from you.
        </p>
        <form action={submitForm} className="mt-10 w-full max-w-lg mx-auto text-left space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
            <input required type="text" id="name" name="name" className="mt-1 block w-full p-3 rounded-md bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-brand-red focus:border-brand-red" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
            <input required type="email" id="email" name="email" className="mt-1 block w-full p-3 rounded-md bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-brand-red focus:border-brand-red" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea required id="message" name="message" rows={5} className="mt-1 block w-full p-3 rounded-md bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-brand-red focus:border-brand-red"></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-red text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}