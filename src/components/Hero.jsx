'use client'

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Khám Phá{" "}
            <span className="highlight">Chủ Nghĩa Duy Vật Lịch Sử</span>
          </h1>
          <p className="hero-description">
            Tìm hiểu những quy luật khách quan của sự phát triển xã hội loài
            người. Từ mối quan hệ giai cấp - dân tộc - nhân loại, bản chất nhà
            nước, đến quy luật cách mạng xã hội - những kiến thức cơ bản của chủ
            nghĩa duy vật lịch sử sẽ giúp bạn hiểu rõ hơn về xã hội và con đường
            phát triển của nhân loại.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("concepts")}
            >
              Khám phá lý thuyết
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("about")}
            >
              Tìm hiểu duy vật lịch sử
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/philosophy.png" alt="Philosophy" className="hero-img" />
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <h3>5</h3>
          <p>Khái niệm cơ bản</p>
        </div>
        <div className="stat">
          <h3>3</h3>
          <p>Mối quan hệ biện chứng</p>
        </div>
        <div className="stat">
          <h3>∞</h3>
          <p>Quy luật phát triển</p>
        </div>
      </div>
    </section>
  );
}

