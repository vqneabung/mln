'use client'

import { useState, useEffect } from "react";

export function PhilosopherSlider() {
  const philosophers = [
    {
      id: 1,
      name: "Socrates",
      period: "469-399 TCN",
      image: "/socrates.jpg",
      quote: "Cuộc sống chưa được suy ngẫm không xứng đáng để sống",
      description:
        "Nhà triết học cổ đại Hy Lạp, được coi là cha đẻ của triết học phương Tây",
    },
    {
      id: 2,
      name: "Plato",
      period: "428-348 TCN",
      image: "/plato.avif",
      quote: "Khôn ngoan bắt đầu từ việc tự ngạc nhiên",
      description:
        "Học trò của Socrates, nhà triết học lý tưởng với thuyết Lý tưởng nổi tiếng",
    },
    {
      id: 3,
      name: "Aristotle",
      period: "384-322 TCN",
      image: "/aristotle.jpg",
      quote:
        "Chúng ta là những gì chúng ta lặp đi lặp lại. Sự xuất sắc không phải là một hành động mà là một thói quen",
      description:
        "Học trò của Plato, nhà triết học toàn diện với những đóng góp to lớn cho logic và khoa học",
    },
    {
      id: 4,
      name: "Confucius",
      period: "551-479 TCN",
      image: "/confucius.avif",
      quote: "Học mà không nghĩ thì vô ích, nghĩ mà không học thì nguy hiểm",
      description: "Nhà tư tưởng vĩ đại Trung Quốc, người sáng lập ra Nho giáo",
    },
    {
      id: 5,
      name: "Lao Tzu",
      period: "6th century TCN",
      image: "/laotzu.jpg",
      quote: "Hành trình ngàn dặm bắt đầu từ một bước chân",
      description: "Nhà triết học Trung Quốc cổ đại, người sáng lập Đạo giáo",
    },
    {
      id: 6,
      name: "Immanuel Kant",
      period: "1724-1804",
      image: "/immanuelKant.jpg",
      quote: "Hãy có can đảm để sử dụng trí tuệ của chính mình",
      description: "Nhà triết học Đức vĩ đại của thời kỳ Khai sáng",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % philosophers.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [philosophers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % philosophers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + philosophers.length) % philosophers.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="philosopher-slider">
      <div className="slider-container">
        <div className="slide-wrapper">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {philosophers.map((philosopher) => (
              <div key={philosopher.id} className="slide">
                <div className="slide-content">
                  <div className="philosopher-image">
                    <img
                      src={philosopher.image}
                      alt={philosopher.name}
                      className="philosopher-img"
                    />
                  </div>
                  <div className="philosopher-info">
                    <h3 className="philosopher-name">{philosopher.name}</h3>
                    <p className="philosopher-period">{philosopher.period}</p>
                    <blockquote className="philosopher-quote">
                      "{philosopher.quote}"
                    </blockquote>
                    <p className="philosopher-description">
                      {philosopher.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          ❮
        </button>
        <button className="slider-btn next-btn" onClick={nextSlide}>
          ❯
        </button>

        {/* Dots indicator */}
        <div className="slider-dots">
          {philosophers.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};