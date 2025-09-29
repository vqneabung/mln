'use client'

export function PhilosophyConcepts() {
  const concepts = [
    {
      icon: "",
      title: "Mối quan hệ Giai cấp - Dân tộc - Nhân loại",
      description:
        "Quan hệ biện chứng giữa ba cộng đồng xã hội. Lợi ích nhân loại là nền tảng chung cho sự tồn tại và phát triển của giai cấp và dân tộc.",
      details:
        "Giai cấp công nhân có lợi ích thống nhất với dân tộc và nhân loại",
    },
    {
      icon: "",
      title: "Nhà nước - Nguồn gốc và Bản chất",
      description:
        "Nhà nước là cơ quan thống trị giai cấp, công cụ áp bức của giai cấp này đối với giai cấp khác. Ra đời khi xã hội phân chia thành giai cấp đối kháng.",
      details:
        "Nguyên nhân sâu xa: phát triển lực lượng sản xuất, ra đời chế độ tư hữu",
    },
    {
      icon: "",
      title: "Đặc trưng và Kiểu Nhà nước",
      description:
        "Ba đặc trưng: Quản lý theo lãnh thổ, quyền lực công cộng đặc biệt, hệ thống thuế khóa. Các kiểu nhà nước qua lịch sử.",
      details: "Từ chủ nô, phong kiến, tư sản đến xã hội chủ nghĩa",
    },
    {
      icon: "",
      title: "Cách mạng xã hội - Bản chất",
      description:
        "Thay thế chế độ xã hội cũ lỗi thời bằng chế độ mới tiến bộ hơn. Nguyên nhân: mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất.",
      details: "Đỉnh cao là lật đổ chính quyền giai cấp thống trị",
    },
    {
      icon: "",
      title: "Điều kiện Cách mạng xã hội",
      description:
        "Điều kiện khách quan: giai cấp thống trị khủng hoảng, quần chúng khổ sở, tính tích cực tăng cao. Nhân tố chủ quan: giác ngộ, tổ chức.",
      details:
        "Thời cơ cách mạng khi hội tụ đủ điều kiện khách quan và chủ quan",
    },
    {
      icon: "",
      title: "Cách mạng xã hội hiện nay",
      description:
        "Xu thế đấu tranh vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội. Các dân tộc đi lên xã hội tốt đẹp hơn theo con đường riêng.",
      details:
        "Chịu ảnh hưởng của cách mạng KHCN, toàn cầu hóa và các vấn đề toàn cầu",
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
};
