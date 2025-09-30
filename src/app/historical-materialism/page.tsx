'use client'

import Link from 'next/link'
import './historical-materialism.css'

export default function HistoricalMaterialismPage() {
  return (
    <div className="historical-materialism-page">
      {/* Main Content */}
      <main className="main-content">
        <div className="container-main">
          {/* Title Section */}
          <div className="title-section">
            <h1 className="page-title">
              Chủ nghĩa Duy vật Lịch sử
            </h1>
            <p className="page-subtitle">
              Chủ nghĩa Duy vật Biện chứng về Xã hội - Nghiên cứu những quy luật phổ biến nhất 
              của sự vận động và phát triển của xã hội loài người
            </p>
          </div>

          {/* Overview Section */}
          <section className="section">
            <div className="content-card">
              <h2 className="section-title">I. Khái quát về Chủ nghĩa Duy vật Lịch sử</h2>
              
              <div className="concept-items">
                <div className="concept-item red-border">
                  <h3 className="concept-subtitle">Định nghĩa</h3>
                  <p className="concept-text">
                    Chủ nghĩa duy vật lịch sử (CNDVLS) là <strong>sự vận dụng và mở rộng</strong> chủ nghĩa duy vật biện chứng 
                    vào lĩnh vực nghiên cứu đời sống xã hội. Đây là học thuyết triết học nghiên cứu về xã hội, 
                    chỉ ra <strong>những quy luật phổ biến nhất của sự vận động và phát triển</strong> của xã hội loài người và của tư duy.
                  </p>
                </div>
                
                <div className="concept-item orange-border">
                  <h3 className="concept-subtitle">Ý nghĩa lịch sử</h3>
                  <p className="concept-text">
                    CNDVLS là <strong>thành tựu vĩ đại nhất của tư tưởng khoa học</strong> trong triết học về xã hội. 
                    Nó đã <strong>khắc phục triệt để chủ nghĩa duy tâm</strong> trong việc giải thích lịch sử. 
                    Lần đầu tiên trong lịch sử tư tưởng triết học, CNDVLS đã 
                    <strong>chỉ ra những quy luật và động lực phát triển xã hội</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Foundation Principle */}
          <section className="section">
            <div className="content-card">
              <h2 className="section-title">II. Nguyên lý nền tảng: Tồn tại xã hội và Ý thức xã hội</h2>
              
              <div className="principle-grid">
                <div className="principle-card social-being">
                  <h3 className="principle-title">🌍 Tồn tại xã hội (Social Being)</h3>
                  <p className="principle-desc">
                    Là toàn bộ <strong>những điều kiện sinh hoạt vật chất</strong> của xã hội, bao gồm: 
                    phương thức sản xuất vật chất, điều kiện tự nhiên, hoàn cảnh địa lý, dân số và mật độ dân số.
                  </p>
                  <div className="principle-note">
                    <p>
                      <strong>Phương thức sản xuất đời sống vật chất</strong> là yếu tố cơ bản nhất, 
                      quyết định nhất trong Tồn tại xã hội.
                    </p>
                  </div>
                </div>

                <div className="principle-card social-consciousness">
                  <h3 className="principle-title">🧠 Ý thức xã hội (Social Consciousness)</h3>
                  <p className="principle-desc">
                    Là sự <strong>phản ánh</strong> của tồn tại xã hội trong đời sống tinh thần của xã hội.
                  </p>
                  <div className="principle-note">
                    <p>• <strong>Tâm lý xã hội:</strong> phản ánh trực tiếp, tự phát cuộc sống hằng ngày</p>
                    <p>• <strong>Hệ tư tưởng:</strong> nhận thức lý luận, đi sâu vào bản chất các quan hệ xã hội</p>
                  </div>
                </div>
              </div>

              <div className="fundamental-principle">
                <h3 className="fundamental-title">⚖️ Nguyên lý cơ bản</h3>
                <div className="fundamental-content">
                  <p className="fundamental-text">
                    <strong>Tồn tại xã hội quyết định ý thức xã hội</strong>
                  </p>
                  <p className="fundamental-quote">
                    "Không phải ý thức của con người quyết định tồn tại của họ; trái lại, 
                    tồn tại xã hội của họ quyết định ý thức của họ."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Economic-Social Formation */}
          <section className="section">
            <div className="content-card">
              <h2 className="section-title">III. Học thuyết Hình thái Kinh tế – Xã hội</h2>
              
              <div className="formation-timeline">
                <h3 className="timeline-title">Tiến trình lịch sử của các Hình thái Kinh tế - Xã hội</h3>
                <div className="timeline-container">
                  <div className="timeline-item">
                    <div className="timeline-icon">🏕️</div>
                    <p>Cộng sản nguyên thủy</p>
                  </div>
                  <div className="timeline-arrow">→</div>
                  <div className="timeline-item">
                    <div className="timeline-icon">⛓️</div>
                    <p>Chiếm hữu nô lệ</p>
                  </div>
                  <div className="timeline-arrow">→</div>
                  <div className="timeline-item">
                    <div className="timeline-icon">🏰</div>
                    <p>Phong kiến</p>
                  </div>
                  <div className="timeline-arrow">→</div>
                  <div className="timeline-item">
                    <div className="timeline-icon">🏭</div>
                    <p>Tư bản chủ nghĩa</p>
                  </div>
                  <div className="timeline-arrow">→</div>
                  <div className="timeline-item">
                    <div className="timeline-icon">🌟</div>
                    <p>Xã hội chủ nghĩa</p>
                  </div>
                </div>
              </div>

              <div className="dialectics-grid">
                <div className="dialectics-section">
                  <h3 className="dialectics-title">1. Biện chứng Lực lượng sản xuất - Quan hệ sản xuất</h3>
                  
                  <div className="dialectics-card force-production">
                    <h4 className="card-title">🔧 Lực lượng Sản xuất (FoP)</h4>
                    <p className="card-desc">
                      Sự kết hợp giữa <strong>Người lao động</strong> (với kỹ năng, kinh nghiệm) 
                      và <strong>Tư liệu sản xuất</strong> (công cụ và đối tượng lao động).
                    </p>
                    <div className="card-note">
                      <p>
                        <strong>Người lao động</strong> là nhân tố hàng đầu, giữ vai trò quyết định. 
                        <strong>Công cụ lao động</strong> là yếu tố động nhất, cách mạng nhất.
                      </p>
                    </div>
                  </div>

                  <div className="dialectics-card production-relations">
                    <h4 className="card-title">🤝 Quan hệ Sản xuất (RoP)</h4>
                    <p className="card-desc">
                      Những quan hệ tất yếu giữa người với người trong quá trình sản xuất vật chất.
                    </p>
                    <div className="card-note">
                      <p>• Quan hệ sở hữu tư liệu sản xuất</p>
                      <p>• Quan hệ tổ chức quản lý sản xuất</p>
                      <p>• Quan hệ phân phối sản phẩm</p>
                    </div>
                  </div>
                </div>

                <div className="dialectics-section">
                  <h3 className="dialectics-title">2. Biện chứng Cơ sở hạ tầng - Kiến trúc thượng tầng</h3>
                  
                  <div className="dialectics-card infrastructure">
                    <h4 className="card-title">🏗️ Cơ sở hạ tầng</h4>
                    <p className="card-desc">
                      <strong>Toàn bộ các quan hệ sản xuất</strong> (quan hệ vật chất) 
                      hợp thành cơ cấu kinh tế hiện thực của xã hội.
                    </p>
                  </div>

                  <div className="dialectics-card superstructure">
                    <h4 className="card-title">🏛️ Kiến trúc thượng tầng</h4>
                    <p className="card-desc">
                      Toàn bộ những <strong>quan điểm tư tưởng</strong> cùng với những 
                      <strong>thiết chế xã hội</strong> tương ứng.
                    </p>
                    <div className="card-note">
                      <p>• Tư tưởng: chính trị, pháp quyền, đạo đức, tôn giáo...</p>
                      <p>• Thiết chế: Nhà nước, đảng phái, giáo hội...</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fundamental-law">
                <h3 className="law-title">⚡ Quy luật vận động cơ bản</h3>
                <div className="law-content">
                  <p className="law-text">
                    Lực lượng sản xuất → Quyết định → Quan hệ sản xuất
                  </p>
                  <p className="law-text">
                    Cơ sở hạ tầng → Quyết định → Kiến trúc thượng tầng
                  </p>
                  <div className="law-explanation">
                    <p>
                      Khi lực lượng sản xuất phát triển, nó mâu thuẫn với quan hệ sản xuất cũ 
                      (từ "hình thức phù hợp" trở thành <strong>"xiềng xích"</strong>), 
                      dẫn đến <strong>thời đại cách mạng xã hội</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Class and Class Struggle */}
          <section className="section">
            <div className="content-card">
              <h2 className="section-title">IV. Giai cấp và Đấu tranh Giai cấp</h2>
              
              <div className="class-grid">
                <div className="class-section">
                  <div className="class-item red-border">
                    <h3 className="class-subtitle">👥 Nguồn gốc Giai cấp</h3>
                    <p className="class-text">
                      Giai cấp xuất hiện do <strong>sự phát triển của lực lượng sản xuất</strong> 
                      (tạo ra "của dư"), dẫn đến sự xuất hiện <strong>chế độ tư hữu về tư liệu sản xuất</strong>.
                    </p>
                  </div>

                  <div className="class-item orange-border">
                    <h3 className="class-subtitle">📋 Định nghĩa Giai cấp</h3>
                    <p className="class-text">
                      Giai cấp là những tập đoàn người to lớn khác nhau về <strong>địa vị trong một hệ thống sản xuất xã hội nhất định</strong>, 
                      được quy định bởi quan hệ sở hữu tư liệu sản xuất, quan hệ tổ chức quản lý và quan hệ phân phối.
                    </p>
                  </div>
                </div>

                <div className="class-section">
                  <div className="class-item blue-border">
                    <h3 className="class-subtitle">⚔️ Đấu tranh Giai cấp</h3>
                    <p className="class-text">
                      Là quy luật tất yếu của xã hội có đối kháng giai cấp, do <strong>sự đối lập về lợi ích căn bản không thể điều hòa được</strong>.
                    </p>
                    <div className="class-note">
                      <p>
                        <strong>Vai trò:</strong> Đấu tranh giai cấp là <strong>động lực trực tiếp và quan trọng</strong> 
                        của sự phát triển xã hội trong xã hội có giai cấp.
                      </p>
                    </div>
                  </div>

                  <div className="class-item green-border">
                    <h3 className="class-subtitle">🎯 Mục đích cao nhất</h3>
                    <p className="class-text">
                      <strong>Giải phóng lực lượng sản xuất</strong> khỏi sự kìm hãm của quan hệ sản xuất đã lỗi thời.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* State and Social Revolution */}
          <section className="section">
            <div className="content-card">
              <h2 className="section-title">V. Nhà nước và Cách mạng Xã hội</h2>
              
              <div className="state-revolution-grid">
                <div className="state-section">
                  <h3 className="subsection-title">🏛️ Nhà nước</h3>
                  
                  <div className="state-card origin">
                    <h4 className="state-subtitle">Nguồn gốc ra đời</h4>
                    <p className="state-text">
                      Nhà nước là sản phẩm của xã hội phát triển tới giai đoạn nhất định, 
                      nơi mà <strong>mâu thuẫn giai cấp gay gắt không thể điều hòa được</strong>.
                    </p>
                  </div>

                  <div className="state-card nature">
                    <h4 className="state-subtitle">Bản chất</h4>
                    <p className="state-text">
                      Nhà nước là <strong>một tổ chức chính trị của một giai cấp thống trị</strong> 
                      về mặt kinh tế, nhằm bảo vệ trật tự hiện hành và <strong>đàn áp</strong> 
                      sự phản kháng của các giai cấp khác.
                    </p>
                  </div>

                  <div className="state-card characteristics">
                    <h4 className="state-subtitle">Ba đặc trưng cơ bản</h4>
                    <div className="characteristics-list">
                      <p>1. Quản lý cư dân trên <strong>lãnh thổ</strong> nhất định</p>
                      <p>2. Có <strong>quyền lực công cộng đặc biệt</strong> (quân đội, cảnh sát)</p>
                      <p>3. Có hệ thống <strong>thuế khóa</strong> nuôi bộ máy nhà nước</p>
                    </div>
                  </div>
                </div>

                <div className="revolution-section">
                  <h3 className="subsection-title">🔥 Cách mạng xã hội</h3>
                  
                  <div className="revolution-card concept">
                    <h4 className="revolution-subtitle">Khái niệm</h4>
                    <p className="revolution-text">
                      Là <strong>sự thay đổi căn bản về chất</strong> toàn bộ các lĩnh vực của đời sống xã hội. 
                      Theo nghĩa hẹp, là đỉnh cao của đấu tranh giai cấp.
                    </p>
                  </div>

                  <div className="revolution-card situation">
                    <h4 className="revolution-subtitle">Tình thế Cách mạng (V.I. Lênin)</h4>
                    <div className="situation-list">
                      <p>1. Giai cấp thống trị không thể duy trì nền thống trị</p>
                      <p>2. Sự khốn khổ của giai cấp bị áp bức trở nên gay gắt</p>
                      <p>3. Quần chúng nhân dân bị đẩy đến chỗ phải hành động độc lập</p>
                    </div>
                  </div>

                  <div className="revolution-card methods">
                    <h4 className="revolution-subtitle">Phương pháp Cách mạng</h4>
                    <div className="methods-list">
                      <div className="method-item">
                        <span className="method-icon">⚔️</span>
                        <div>
                          <p className="method-name">Bạo lực</p>
                          <p className="method-desc">Hình thức tất yếu, vì giai cấp thống trị không tự nguyện từ bỏ địa vị</p>
                        </div>
                      </div>
                      <div className="method-item">
                        <span className="method-icon">🕊️</span>
                        <div>
                          <p className="method-name">Hòa bình</p>
                          <p className="method-desc">Chỉ khi giai cấp thống trị mất ý chí chống lại và lực lượng cách mạng áp đảo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="navigation-section">
            <Link href="/" className="back-home-btn">
              Quay về trang chủ
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}