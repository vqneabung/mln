"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === "/") {
      // Nếu đang ở trang chủ, scroll lên đầu
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Nếu đang ở trang khác, navigate về trang chủ
      router.push("/");
    }
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    // Nếu đang ở trang chủ, scroll đến section
    if (pathname === "/") {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // Nếu đang ở trang khác, navigate về trang chủ với hash
      router.push(`/#${targetId}`);
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container-main">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Triết Học Đương Đại</h3>
            <p>Khám phá những câu hỏi lớn của cuộc sống cùng chúng tôi.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Liên kết nhanh</h4>
            <ul className="footer-links">
              <li>
                <a href="/#home" onClick={handleHomeClick}>
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="/#concepts"
                  onClick={(e) => handleSmoothScroll(e, "concepts")}
                >
                  Các Khái niệm
                </a>
              </li>
              <li>
                <Link href="/historical-materialism">
                  Chủ nghĩa duy vật lịch sử
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Liên hệ</h4>
            <div className="contact-info">
              <p>philosophy@gmail.com</p>
              <p>Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Group Seven Copyright.</p>
        </div>
      </div>
    </footer>
  );
}
