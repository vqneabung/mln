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
      title: "Tồn tại xã hội",
      description: "Là toàn bộ những điều kiện sinh hoạt vật chất của xã hội. Tồn tại xã hội là thực tại xã hội khách quan, là một kiểu vật chất xã hội.",
      details: "Phương thức sản xuất vật chất là yếu tố cơ bản và có vai trò quyết định nhất đối với ý thức xã hội. Tồn tại xã hội quyết định sự hình thành, nội dung và hình thức biểu hiện của ý thức xã hội.",
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
    {
      icon: "🕊️",
      title: "Phương pháp hòa bình",
      description: "Là phương pháp đấu tranh không dùng bạo lực cách mạng để giành chính quyền trong điều kiện cho phép.",
      details: "Phương pháp hòa bình chỉ xảy ra khi có đủ hai điều kiện: 1) Giai cấp thống trị không còn bộ máy bạo lực đáng kể hoặc đã mất hết ý chí chống lại lực lượng cách mạng. 2) Lực lượng cách mạng phát triển mạnh, áp đảo kẻ thù.",
    },
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
