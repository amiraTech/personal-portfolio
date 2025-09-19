// app/contact/thank-you/page.tsx
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-8 bg-[#000000]">
      <h1 className="text-4xl font-bold">Thank You!</h1>
      <p className="mt-4 text-lg text-gray-400">
        Your message has been sent. I'll get back to you as soon as possible.
      </p>
      <Link href="/" className="mt-8 text-razzmatazz hover:underline">
        ← Back to Home
      </Link>
    </main>
  );
}