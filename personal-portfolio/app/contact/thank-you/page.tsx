// app/contact/thank-you/page.tsx
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-8">
      <h1 className="text-4xl font-bold">Thank You!</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">
        Your message has been sent. I will get back to you as soon as possible.
      </p>
      <Link href="/" className="mt-8 text-brand-pink hover:underline">
        ← Back to Home
      </Link>
    </main>
  );
}