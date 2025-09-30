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
            <a href="/#home" className="nav-link">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="/historical-materialism" className="nav-link">
              Chủ nghĩa duy vật lịch sử
            </a>
          </li>
          <li>
            <a href="/#concepts" className="nav-link">
              Các khái niệm
            </a>
          </li>
          <li>
            <a href="/#quiz" className="nav-link">
              Quizz
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

