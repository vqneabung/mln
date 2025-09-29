'use client'

export function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <img
            src="/philosophy.png"
            alt="Marx-Lenin Philosophy"
            className="nav-logo"
          />
          <h1 className="nav-title">Triết Học Mác - Lênin</h1>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#home" className="nav-link">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              Chủ nghĩa duy vật lịch sử
            </a>
          </li>
          <li>
            <a href="#concepts" className="nav-link">
              Các khái niệm
            </a>
          </li>
          <li>
            <a href="#theory" className="nav-link">
              Lý thuyết
            </a>
          </li>
          <li>
            <a href="#revolution" className="nav-link">
              Cách mạng xã hội
            </a>
          </li>
          <li>
            <a href="#quiz" className="nav-link">
              Quiz
            </a>
          </li>
          <li>
            <a href="#chatbot" className="nav-link">
              Chatbot
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

