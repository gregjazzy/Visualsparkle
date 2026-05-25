import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SmoothScroll } from './SmoothScroll';
import { Cursor } from './Cursor';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
