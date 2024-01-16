'use client';
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';
import Button from './Button';

export default function Navigation() {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;

      if (scrollY > 0)
        setScrolled(true);
      else
        setScrolled(false);
    });
  }, []);
  
  return (
    <nav className={`px-24 py-5 w-full fixed top-0 left-0 flex items-center gap-5 z-50 transition duration-200 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <figure className="flex gap-2">
        <img src="/tech/asyncbase.svg" alt="" />

        <figcaption className="font-semibold">asyncbase</figcaption>
      </figure>

      <ul className="flex items-center gap-4 *:text-zinc-600">
        <li><a href="#">Docs</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Changelog</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>

      <div className="flex items-center gap-4 ml-auto">
        <button className="flex items-center gap-3">
          <img src="icon/star.svg" alt="" />
          <span>Star on Github</span>
        </button>
        <Button type="primary">Start Your Project</Button>
      </div>
    </nav>
  )
}