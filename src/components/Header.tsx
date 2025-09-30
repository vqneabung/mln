'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Nếu đang ở trang chủ, scroll đến section
    if (pathname === '/') {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Nếu đang ở trang khác, navigate về trang chủ với hash
      router.push(`/#${targetId}`);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (pathname === '/') {
      // Nếu đang ở trang chủ, scroll lên đầu
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Nếu đang ở trang khác, navigate về trang chủ
      router.push('/');
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="nav-brand">
          <img
            src="https://tulieuvankien.dangcongsan.vn/Uploads/2019/9/6/16/loi-thoi.jpg"
            alt="Marx-Lenin Philosophy"
            className="nav-logo"
          />
          <h1 className="nav-title">Triết Học Mác - Lênin</h1>
        </Link>
        <ul className="nav-menu">
          <li>
            <a 
              href="/#home" 
              className="nav-link"
              onClick={handleHomeClick}
            >
              Trang chủ
            </a>
          </li>
          <li>
            <Link href="/historical-materialism" className="nav-link">
              Chủ nghĩa duy vật lịch sử
            </Link>
          </li>
          <li>
            <a 
              href="/#concepts" 
              className="nav-link"
              onClick={(e) => handleSmoothScroll(e, 'concepts')}
            >
              Các khái niệm
            </a>
          </li>
          <li>
            <a 
              href="/#quiz" 
              className="nav-link"
              onClick={(e) => handleSmoothScroll(e, 'quiz')}
            >
              Quiz
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

