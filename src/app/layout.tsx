import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jarvis — AI Pair Programmer & Interview Coach',
  description: 'Voice-first interview preparation for SWE, DS, MLE, and DE candidates.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
