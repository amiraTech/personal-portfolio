// app/providers.tsx
"use client";
import { ThemeProvider } from 'next-themes';

// In your providers.tsx or layout.tsx file
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      {children}
    </ThemeProvider>
  );
}