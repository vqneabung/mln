'use client'

import { useEffect } from 'react';
import { Hero } from "@/components/Hero";
import { PhilosophyConcepts } from "@/components/PhilosophyConcepts";
import { Quiz } from "@/components/quiz";

export default function Home() {
  useEffect(() => {
    // Xử lý scroll đến section khi có hash trong URL
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1); // Loại bỏ dấu #
        
        // Retry logic để đảm bảo element đã render
        const scrollToElement = (retries = 0) => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const headerHeight = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else if (retries < 5) {
            // Retry sau 200ms nếu element chưa render
            setTimeout(() => scrollToElement(retries + 1), 200);
          }
        };
        
        // Delay nhỏ để đảm bảo trang đã load xong
        setTimeout(() => scrollToElement(), 100);
      }
    };

    // Xử lý khi trang load lần đầu
    handleHashScroll();

    // Xử lý khi hash thay đổi
    const handleHashChange = () => handleHashScroll();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main className="main-content">
      <Hero />
      <PhilosophyConcepts />
      <Quiz />
    </main>
  );
}
