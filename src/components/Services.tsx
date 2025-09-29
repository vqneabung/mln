'use client'

export function PhilosophyConcepts() {
  const concepts = [
    {
      icon: "🤔",
      title: "Nhận thức luận",
      description:
        "Nghiên cứu về bản chất của kiến thức, sự hiểu biết và cách chúng ta biết được những gì chúng ta biết.",
      details: "Khám phá các câu hỏi về chân lý, niềm tin và sự chắc chắn",
    },
    {
      icon: "⚖️",
      title: "Đạo đức học",
      description:
        "Tìm hiểu về đúng và sai, tốt và xấu, cũng như các nguyên tắc đạo đức hướng dẫn hành vi của chúng ta.",
      details: "Các lý thuyết về đạo đức từ cổ đại đến hiện đại",
    },
    {
      icon: "🌌",
      title: "Siêu hình học",
      description:
        "Nghiên cứu về bản chất của thực tại, tồn tại và mối quan hệ giữa tâm trí và vật chất.",
      details: "Khám phá ý nghĩa của sự tồn tại và thực tại",
    },
    {
      icon: "🎨",
      title: "Mỹ học",
      description:
        "Triết học về cái đẹp, nghệ thuật và trải nghiệm thẩm mỹ trong cuộc sống và văn hóa.",
      details: "Tìm hiểu về bản chất của cái đẹp và nghệ thuật",
    },
    {
      icon: "�️",
      title: "Triết học chính trị",
      description:
        "Nghiên cứu về chính phủ, công lý, quyền lực và các mối quan hệ xã hội.",
      details: "Các lý thuyết về nhà nước, công lý và quyền con người",
    },
    {
      icon: "🧠",
      title: "Triết học tâm trí",
      description:
        "Khám phá bản chất của ý thức, tâm trí và mối quan hệ giữa tinh thần và thể xác.",
      details: "Nghiên cứu về ý thức và bản chất của tâm trí",
    },
  ];

  return (
    <section id="concepts" className="philosophy-concepts">
      <div className="container-main">
        <h2 className="section-title">
          Các Khái niệm Chủ nghĩa Duy vật Lịch sử
        </h2>
        <p className="section-subtitle">
          Tìm hiểu những quy luật khách quan và các khái niệm cơ bản của chủ
          nghĩa duy vật lịch sử trong việc giải thích sự phát triển xã hội loài
          người
        </p>
        <div className="concepts-grid">
          {concepts.map((concept, index) => (
            <div key={index} className="concept-card">
              <div className="concept-icon">{concept.icon}</div>
              <h3 className="concept-title">{concept.title}</h3>
              <p className="concept-description">{concept.description}</p>
              <p className="concept-details">{concept.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
