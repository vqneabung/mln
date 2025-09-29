'use client'

export function Footer() {
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
                <a href="#home">Trang chủ</a>
              </li>
              <li>
                <a href="#about">Giới thiệu</a>
              </li>
              <li>
                <a href="#philosophy">Triết học</a>
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
