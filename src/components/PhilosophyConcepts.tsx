'use client'

export function PhilosophyConcepts() {
  const concepts = [
    {
      icon: "🏛️",
      title: "Nhà nước (The State)",
      description: "Là sản phẩm của một xã hội đã phát triển tới một giai đoạn nhất định, nơi mà các mâu thuẫn giai cấp không thể điều hòa được.",
      details: "Nhà nước là một phạm trù lịch sử. Nguyên nhân sâu xa của sự xuất hiện nhà nước là do sự phát triển của lực lượng sản xuất dẫn đến chế độ tư hữu về tư liệu sản xuất và của cải. Nguyên nhân trực tiếp là do mâu thuẫn giai cấp gay gắt không thể điều hòa được. Nhà nước ra đời từ xã hội nhưng đứng trên xã hội và ngày càng tách rời khỏi xã hội.",
    },
    {
      icon: "⚖️",
      title: "Bản chất của Nhà nước",
      description: "Là một tổ chức chính trị của một giai cấp thống trị về mặt kinh tế nhằm bảo vệ trật tự hiện hành và đàn áp sự phản kháng của các giai cấp khác.",
      details: "Nhà nước là công cụ chuyên chính của một giai cấp; không có nhà nước đứng trên hoặc đứng ngoài giai cấp. Giai cấp thống trị về kinh tế cũng nhờ có nhà nước mà trở thành giai cấp thống trị về mặt chính trị.",
    },
    {
      icon: "🗺️",
      title: "Đặc trưng cơ bản của Nhà nước",
      description: "Những đặc điểm căn bản phân biệt nhà nước với các tổ chức xã hội khác, đặc biệt là các tổ chức dựa trên huyết tộc (thị tộc, bộ lạc).",
      details: "Nhà nước có ba đặc trưng cơ bản: 1. Quản lý cư dân trên một vùng lãnh thổ nhất định (phân chia thần dân theo lãnh thổ, không phải theo huyết tộc). 2. Có một quyền lực công cộng đặc biệt không hòa nhập với dân cư (ví dụ: các cơ quan cưỡng chế, quân đội, cảnh sát). 3. Có hệ thống thuế khóa (thuế mỡ) để nuôi bộ máy nhà nước hoạt động.",
    },
    {
      icon: "🎯",
      title: "Chức năng của Nhà nước",
      description: "Các phương diện hoạt động cơ bản của nhà nước nhằm thực hiện vai trò của mình đối với giai cấp thống trị và toàn xã hội.",
      details: "Nhà nước thực hiện: Chức năng thống trị chính trị (duy trì lợi ích giai cấp thống trị) và Chức năng xã hội (giải quyết các công việc chung để xã hội tồn tại trong \"trật tự\"). Đồng thời là Chức năng đối nội (duy trì trật tự xã hội, giữ vai trò chủ yếu) và Chức năng đối ngoại (giải quyết quan hệ với các thể chế khác).",
    },
    {
      icon: "🌍",
      title: "Chủ nghĩa duy vật",
      description: "Là quan điểm triết học khẳng định vật chất là cơ sở của tất cả hiện thực, vật chất có trước và quyết định ý thức.",
      details: "Chủ nghĩa duy vật Mác-Lênin khẳng định: Vật chất là phạm trù triết học để chỉ thực tại khách quan được con người cảm nhận qua các giác quan, tồn tại không phụ thuộc vào ý thức và được ý thức phản ánh. Vật chất và ý thức có mối quan hệ biện chứng: vật chất quyết định ý thức, nhưng ý thức có tính tích cực, có thể tác động trở lại vật chất.",
    },
    {
      icon: "🔥",
      title: "Cách mạng xã hội",
      description: "Sự thay đổi căn bản về chất toàn bộ các lĩnh vực của đời sống xã hội. Theo nghĩa hẹp, là đỉnh cao của đấu tranh giai cấp.",
      details: "Cách mạng xã hội là bước chuyển từ một hình thái kinh tế - xã hội này lên một hình thái kinh tế - xã hội mới tiến bộ hơn. Trong xã hội có giai cấp, cách mạng xã hội là hình thức thay thế quan hệ sản xuất cũ bằng quan hệ sản xuất mới, dẫn đến sự ra đời của kiến trúc thượng tầng mới.",
    },
    {
      icon: "⚡",
      title: "Tình thế cách mạng",
      description: "Là sự chín muồi của mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất, sự phát triển đến đỉnh cao của đấu tranh giai cấp.",
      details: "Theo V.I. Lênin, tình thế cách mạng có ba dấu hiệu: 1) Các giai cấp thống trị không thể duy trì được nền thống trị của mình. 2) Sự khốn khổ và thiếu thốn của các giai cấp bị áp bức trở nên gay gắt hơn bình thường. 3) Quần chúng nhân dân bị cuộc khủng hoảng đẩy đến chỗ phải hành động độc lập.",
    },
    {
      icon: "🧠",
      title: "Nhân tố chủ quan trong Cách mạng",
      description: "Bao gồm ý chí, niềm tin, trình độ giác ngộ và nhận thức của lực lượng cách mạng về mục tiêu và nhiệm vụ.",
      details: "Khi điều kiện khách quan (tình thế cách mạng) đã chín muồi, nhân tố chủ quan có vai trò quyết định thành bại của cách mạng.",
    },
    {
      icon: "⚔️",
      title: "Cách mạng bạo lực",
      description: "Là hình thức tiến hành cách mạng thông qua bạo lực để giành chính quyền, vượt qua giới hạn luật pháp của giai cấp thống trị hiện thời.",
      details: "Trong xã hội có giai cấp, chính quyền thường chỉ có thể giành được bằng hình thức chiến tranh cách mạng, thông qua bạo lực cách mạng, vì giai cấp thống trị không bao giờ tự nguyện từ bỏ địa vị của mình. V.I. Lênin khẳng định: Nhà nước tư sản bị thay thế bởi nhà nước vô sản không thể bằng con đường \"tiêu vong,\" mà chỉ có thể bằng cách mạng bạo lực theo quy luật chung.",
    },
    // {
    //   icon: "�",
    //   title: "Phương pháp luận duy vật biện chứng",
    //   description: "Là phương pháp nhận thức và cải tạo thế giới, xem xét sự vật, hiện tượng trong mối liên hệ, phát triển và mâu thuẫn.",
    //   details: "Phương pháp luận duy vật biện chứng bao gồm các nguyên lý cơ bản: Nguyên lý về mối liên hệ phổ biến - mọi sự vật đều có mối liên hệ với nhau; Nguyên lý về sự phát triển - mọi sự vật đều trong trạng thái vận động, biến đổi, phát triển; Nguyên lý về mâu thuẫn - mâu thuẫn là động lực của sự phát triển. Áp dụng vào thực tiễn: phân tích cụ thể tình hình cụ thể, nhìn nhận toàn diện và khách quan hiện thực.",
    // },
  ];

  return (
    <section id="concepts" className="philosophy-concepts">
      <div className="container-main">
        <h2 className="section-title">
          Các Khái niệm về Nhà nước và Cách mạng Xã hội
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
