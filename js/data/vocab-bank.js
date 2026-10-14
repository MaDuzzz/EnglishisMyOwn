// Kho từ vựng chuẩn hoá phân cấp A1 -> B2 cho người đi làm & dân IT
export const VOCAB_BANK = [
  // ====================== CẤP ĐỘ A1 (Căn bản) ======================
  {
    id: "a1_01",
    word: "schedule",
    level: "A1",
    ipa: "/ˈskedʒ.uːl/",
    type: "noun / verb",
    meaningVi: "lịch trình, thời gian biểu; lên lịch",
    collocations: "tight schedule, schedule a meeting, on schedule",
    example: "Let's check the team schedule for today.",
    optionsVi: ["lịch trình, thời gian biểu", "kế hoạch ngân sách", "bản báo cáo tuần", "hợp đồng làm việc"]
  },
  {
    id: "a1_02",
    word: "message",
    level: "A1",
    ipa: "/ˈmes.ɪdʒ/",
    type: "noun",
    meaningVi: "tin nhắn, thông điệp",
    collocations: "send a message, leave a message, instant message",
    example: "I will leave a message in our Slack channel.",
    optionsVi: ["tin nhắn, thông điệp", "thư mời làm việc", "cuộc họp trực tuyến", "tài liệu đính kèm"]
  },
  {
    id: "a1_03",
    word: "problem",
    level: "A1",
    ipa: "/ˈprɒb.ləm/",
    type: "noun",
    meaningVi: "vấn đề, trục trặc",
    collocations: "solve a problem, face a problem, technical problem",
    example: "We have a small connection problem right now.",
    optionsVi: ["vấn đề, trục trặc", "cơ hội mới", "giải pháp phần mềm", "quy trình vận hành"]
  },
  {
    id: "a1_04",
    word: "customer",
    level: "A1",
    ipa: "/ˈkʌs.tə.mər/",
    type: "noun",
    meaningVi: "khách hàng",
    collocations: "customer service, satisfy customers, loyal customer",
    example: "The customer is asking for an update on this feature.",
    optionsVi: ["khách hàng", "nhà phát triển", "đối tác cung ứng", "quản lý dự án"]
  },
  {
    id: "a1_05",
    word: "device",
    level: "A1",
    ipa: "/dɪˈvaɪs/",
    type: "noun",
    meaningVi: "thiết bị (điện tử, máy móc)",
    collocations: "mobile device, connect a device, input device",
    example: "Please test the app on different mobile devices.",
    optionsVi: ["thiết bị điện tử", "phần mềm quản lý", "mạng nội bộ", "dây cáp kết nối"]
  },
  {
    id: "a1_06",
    word: "office",
    level: "A1",
    ipa: "/ˈɒf.ɪs/",
    type: "noun",
    meaningVi: "văn phòng làm việc",
    collocations: "office hours, work at the office, home office",
    example: "I usually arrive at the office at 8:30 AM.",
    optionsVi: ["văn phòng làm việc", "nhà kho", "phòng thí nghiệm", "khu vực ăn uống"]
  },
  {
    id: "a1_07",
    word: "share",
    level: "A1",
    ipa: "/ʃeər/",
    type: "verb",
    meaningVi: "chia sẻ (màn hình, tài liệu)",
    collocations: "share screen, share a link, share files",
    example: "Can you please share your screen with the team?",
    optionsVi: ["chia sẻ", "khoá màn hình", "tải xuống", "xoá bỏ"]
  },
  {
    id: "a1_08",
    word: "simple",
    level: "A1",
    ipa: "/ˈsɪm.pəl/",
    type: "adjective",
    meaningVi: "đơn giản, dễ hiểu",
    collocations: "simple solution, simple task, keep it simple",
    example: "We need a simple solution to fix this error.",
    optionsVi: ["đơn giản, dễ hiểu", "phức tạp, rắc rối", "khẩn cấp", "tốn kém"]
  },
  {
    id: "a1_09",
    word: "click",
    level: "A1",
    ipa: "/klɪk/",
    type: "verb / noun",
    meaningVi: "nhấp chuột, bấm nút",
    collocations: "click here, double click, right-click",
    example: "Click the blue button to submit your form.",
    optionsVi: ["nhấp chuột, bấm nút", "kéo thả", "cuộn trang", "gõ phím"]
  },
  {
    id: "a1_10",
    word: "finish",
    level: "A1",
    ipa: "/ˈfɪn.ɪʃ/",
    type: "verb",
    meaningVi: "hoàn thành, kết thúc",
    collocations: "finish a task, finish on time, almost finish",
    example: "I will finish this task before lunchtime.",
    optionsVi: ["hoàn thành, kết thúc", "bắt đầu, khởi tạo", "tạm hoãn", "thay đổi"]
  },

  // ====================== CẤP ĐỘ A2 (Sơ cấp) ======================
  {
    id: "a2_01",
    word: "deadline",
    level: "A2",
    ipa: "/ˈded.laɪn/",
    type: "noun",
    meaningVi: "hạn chót, thời hạn hoàn thành",
    collocations: "meet the deadline, miss the deadline, tight deadline",
    example: "We must work extra hours to meet the project deadline.",
    optionsVi: ["hạn chót, thời hạn", "mục tiêu dài hạn", "cuộc họp khẩn", "thời gian nghỉ"]
  },
  {
    id: "a2_02",
    word: "update",
    level: "A2",
    ipa: "/ʌpˈdeɪt/",
    type: "verb / noun",
    meaningVi: "cập nhật (thông tin, phiên bản)",
    collocations: "status update, update software, keep someone updated",
    example: "I will update the ticket as soon as I finish the code.",
    optionsVi: ["cập nhật", "khôi phục dữ liệu", "xoá bỏ cài đặt", "tạm dừng"]
  },
  {
    id: "a2_03",
    word: "confirm",
    level: "A2",
    ipa: "/kənˈfɜːm/",
    type: "verb",
    meaningVi: "xác nhận, khẳng định lại",
    collocations: "confirm an appointment, confirm the details, please confirm",
    example: "Please confirm your availability for tomorrow's demo.",
    optionsVi: ["xác nhận, khẳng định", "huỷ bỏ lịch hẹn", "từ chối yêu cầu", "thương lượng giá"]
  },
  {
    id: "a2_04",
    word: "feedback",
    level: "A2",
    ipa: "/ˈfiːd.bæk/",
    type: "noun",
    meaningVi: "ý kiến phản hồi, nhận xét",
    collocations: "positive feedback, give feedback, receive feedback",
    example: "The client gave us very positive feedback on the new design.",
    optionsVi: ["ý kiến phản hồi", "khiếu nại chính thức", "báo cáo tài chính", "hướng dẫn sử dụng"]
  },
  {
    id: "a2_05",
    word: "request",
    level: "A2",
    ipa: "/rɪˈkwest/",
    type: "noun / verb",
    meaningVi: "yêu cầu, đề nghị",
    collocations: "pull request, send a request, make a request",
    example: "I just created a pull request for the login module.",
    optionsVi: ["yêu cầu, đề nghị", "thông báo huỷ", "khen thưởng", "bản nháp"]
  },
  {
    id: "a2_06",
    word: "prepare",
    level: "A2",
    ipa: "/prɪˈpeər/",
    type: "verb",
    meaningVi: "chuẩn bị",
    collocations: "prepare for a meeting, prepare slides, prepare documentation",
    example: "He needs 15 minutes to prepare his presentation slides.",
    optionsVi: ["chuẩn bị", "trình bày", "huỷ bỏ", "sao chép"]
  },
  {
    id: "a2_07",
    word: "progress",
    level: "A2",
    ipa: "/ˈprəʊ.ɡres/",
    type: "noun",
    meaningVi: "tiến độ, sự tiến triển",
    collocations: "track progress, make progress, in progress",
    example: "Can you share the current progress of the sprint?",
    optionsVi: ["tiến độ, sự tiến triển", "nguồn lực", "chi phí", "nguy cơ tiềm ẩn"]
  },
  {
    id: "a2_08",
    word: "explain",
    level: "A2",
    ipa: "/ɪkˈspleɪn/",
    type: "verb",
    meaningVi: "giải thích, trình bày rõ",
    collocations: "explain clearly, explain the reason, explain how it works",
    example: "Could you please explain how this authentication flow works?",
    optionsVi: ["giải thích, làm rõ", "chỉ trích", "thống kê", "phê duyệt"]
  },
  {
    id: "a2_09",
    word: "backup",
    level: "A2",
    ipa: "/ˈbæk.ʌp/",
    type: "noun / verb",
    meaningVi: "sao lưu dự phòng",
    collocations: "backup data, automatic backup, create a backup",
    example: "Always create a database backup before running migrations.",
    optionsVi: ["sao lưu dự phòng", "dọn dẹp bộ nhớ", "khởi động lại hệ thống", "quét virus"]
  },
  {
    id: "a2_10",
    word: "attend",
    level: "A2",
    ipa: "/əˈtend/",
    type: "verb",
    meaningVi: "tham gia, có mặt (cuộc họp, sự kiện)",
    collocations: "attend a meeting, attend a workshop, unable to attend",
    example: "I won't be able to attend the standup meeting today.",
    optionsVi: ["tham gia, có mặt", "chủ trì, tổ chức", "rời khỏi", "hoãn lại"]
  },

  // ====================== CẤP ĐỘ B1 (Trung cấp - Công sở & IT) ======================
  {
    id: "b1_01",
    word: "bottleneck",
    level: "B1",
    ipa: "/ˈbɒt.əl.nek/",
    type: "noun",
    meaningVi: "điểm nghẽn, nút thắt cổ chai",
    collocations: "performance bottleneck, clear a bottleneck, identify bottlenecks",
    example: "The database query is currently the main bottleneck in our system.",
    optionsVi: ["điểm nghẽn, nút thắt", "băng thông mạng", "cơ chế đồng bộ", "lỗi cú pháp"]
  },
  {
    id: "b1_02",
    word: "resolve",
    level: "B1",
    ipa: "/rɪˈzɒlv/",
    type: "verb",
    meaningVi: "giải quyết, xử lý dứt điểm (lỗi, tranh chấp)",
    collocations: "resolve an issue, resolve conflicts, resolve quickly",
    example: "We worked through the night to resolve the production outage.",
    optionsVi: ["giải quyết triệt để", "trì hoãn xử lý", "báo cáo cấp trên", "tạo thêm sự cố"]
  },
  {
    id: "b1_03",
    word: "deploy",
    level: "B1",
    ipa: "/dɪˈplɔɪ/",
    type: "verb",
    meaningVi: "triển khai (hệ thống, phần mềm, tính năng)",
    collocations: "deploy to production, deploy changes, automated deployment",
    example: "We plan to deploy the new microservice tonight at 10 PM.",
    optionsVi: ["triển khai (phần mềm)", "thu hồi bản vá", "viết tài liệu", "kiểm thử hồi quy"]
  },
  {
    id: "b1_04",
    word: "investigate",
    level: "B1",
    ipa: "/ɪnˈves.tɪ.ɡeɪt/",
    type: "verb",
    meaningVi: "điều tra, tìm hiểu nguyên nhân gốc rễ",
    collocations: "investigate a bug, investigate the root cause, investigate complaints",
    example: "The DevOps team is currently investigating the high CPU usage.",
    optionsVi: ["điều tra, tìm nguyên nhân", "thay thế phần cứng", "chấp nhận lỗi", "đóng vé hỗ trợ"]
  },
  {
    id: "b1_05",
    word: "collaborate",
    level: "B1",
    ipa: "/kəˈlæb.ə.reɪt/",
    type: "verb",
    meaningVi: "hợp tác, phối hợp làm việc",
    collocations: "collaborate with other teams, closely collaborate, collaborate remotely",
    example: "Developers and testers must collaborate closely during each sprint.",
    optionsVi: ["hợp tác, phối hợp", "cạnh tranh độc lập", "giao phó hoàn toàn", "tranh luận gay gắt"]
  },
  {
    id: "b1_06",
    word: "prioritize",
    level: "B1",
    ipa: "/praɪˈɒr.ɪ.taɪz/",
    type: "verb",
    meaningVi: "ưu tiên, sắp xếp theo thứ tự ưu tiên",
    collocations: "prioritize tasks, prioritize features, high priority",
    example: "We should prioritize fixing security vulnerabilities first.",
    optionsVi: ["ưu tiên sắp xếp", "loại bỏ khỏi danh sách", "ủy quyền cho người khác", "ghi nhận tạm thời"]
  },
  {
    id: "b1_07",
    word: "maintain",
    level: "B1",
    ipa: "/meɪnˈteɪn/",
    type: "verb",
    meaningVi: "duy trì, bảo trì hệ thống",
    collocations: "maintain code quality, maintain servers, maintain documentation",
    example: "It is essential to maintain clean code and clear documentation.",
    optionsVi: ["duy trì, bảo trì", "nâng cấp toàn diện", "tháo gỡ cài đặt", "bỏ qua cảnh báo"]
  },
  {
    id: "b1_08",
    word: "postpone",
    level: "B1",
    ipa: "/pəʊstˈpəʊn/",
    type: "verb",
    meaningVi: "hoãn lại, dời sang thời điểm khác (= delay / put off)",
    collocations: "postpone the release, postpone a meeting, postpone indefinitely",
    example: "Due to server issues, we decided to postpone the release date.",
    optionsVi: ["hoãn lại, dời lịch", "đẩy nhanh tiến độ", "công bố chính thức", "phân tích dữ liệu"]
  },
  {
    id: "b1_09",
    word: "requirement",
    level: "B1",
    ipa: "/rɪˈkwaɪə.mənt/",
    type: "noun",
    meaningVi: "yêu cầu (kỹ thuật, nghiệp vụ)",
    collocations: "business requirements, technical requirements, satisfy requirements",
    example: "Make sure the implementation meets all client requirements.",
    optionsVi: ["yêu cầu nghiệp vụ", "ngân sách dự kiến", "hạn chế thời gian", "bản quyền phần mềm"]
  },
  {
    id: "b1_10",
    word: "implement",
    level: "B1",
    ipa: "/ˈɪm.plɪ.ment/",
    type: "verb",
    meaningVi: "thi hành, hiện thực hóa, viết code tính năng",
    collocations: "implement a feature, implement an algorithm, implement changes",
    example: "We need two days to implement OAuth 2.0 authentication.",
    optionsVi: ["hiện thực hóa, thi hành", "đánh giá thiết kế", "bãi bỏ quy trình", "tìm kiếm tài liệu"]
  },

  // ====================== CẤP ĐỘ B2 (Trung cao cấp - Chuyên nghiệp) ======================
  {
    id: "b2_01",
    word: "scalability",
    level: "B2",
    ipa: "/ˌskeɪ.ləˈbɪl.ə.ti/",
    type: "noun",
    meaningVi: "khả năng mở rộng (hệ thống chịu tải)",
    collocations: "system scalability, horizontal scalability, ensure scalability",
    example: "Kubernetes provides outstanding scalability for containerized workloads.",
    optionsVi: ["khả năng mở rộng", "tính bảo mật dữ liệu", "chi phí vận hành", "độ trễ đường truyền"]
  },
  {
    id: "b2_02",
    word: "redundancy",
    level: "B2",
    ipa: "/rɪˈdʌn.dən.si/",
    type: "noun",
    meaningVi: "tính dự phòng, cơ chế nhân bản chống sập",
    collocations: "data redundancy, hardware redundancy, high availability and redundancy",
    example: "We configured multi-region redundancy to prevent single points of failure.",
    optionsVi: ["tính dự phòng, sao chép", "sự dư thừa lãng phí", "tốc độ xử lý", "tính toàn vẹn"]
  },
  {
    id: "b2_03",
    word: "optimize",
    level: "B2",
    ipa: "/ˈɒp.tɪ.maɪz/",
    type: "verb",
    meaningVi: "tối ưu hóa (tốc độ, tài nguyên, chi phí)",
    collocations: "optimize performance, optimize cloud costs, optimize queries",
    example: "Migrating to AWS Graviton processors helped optimize our cloud budget.",
    optionsVi: ["tối ưu hóa", "đơn giản hóa giao diện", "nhân bản máy chủ", "thay đổi kiến trúc"]
  },
  {
    id: "b2_04",
    word: "mitigate",
    level: "B2",
    ipa: "/ˈmɪt.ɪ.ɡeɪt/",
    type: "verb",
    meaningVi: "giảm thiểu rủi ro, xoa dịu thiệt hại",
    collocations: "mitigate risks, mitigate impact, mitigate security threats",
    example: "Deploying automated backups helps mitigate the risk of data loss.",
    optionsVi: ["giảm thiểu rủi ro", "phát hiện kịp thời", "đẩy nhanh sự cố", "lập luận phản bác"]
  },
  {
    id: "b2_05",
    word: "comply",
    level: "B2",
    ipa: "/kəmˈplaɪ/",
    type: "verb",
    meaningVi: "tuân thủ theo quy định/tiêu chuẩn (comply with)",
    collocations: "comply with regulations, comply with security standards, fail to comply",
    example: "All services must comply with GDPR privacy standards.",
    optionsVi: ["tuân thủ theo quy định", "phản đối quyết liệt", "sửa đổi điều khoản", "miễn trừ trách nhiệm"]
  },
  {
    id: "b2_06",
    word: "discrepancy",
    level: "B2",
    ipa: "/dɪˈskrep.ən.si/",
    type: "noun",
    meaningVi: "sự sai lệch, bất nhất (giữa 2 nguồn số liệu)",
    collocations: "data discrepancy, notice a discrepancy, resolve discrepancies",
    example: "There is a notable discrepancy between the logs and the database records.",
    optionsVi: ["sự sai lệch, bất nhất", "tính nhất quán cao", "tốc độ tăng trưởng", "mức độ tương thích"]
  },
  {
    id: "b2_07",
    word: "streamline",
    level: "B2",
    ipa: "/ˈstriːm.laɪn/",
    type: "verb",
    meaningVi: "tinh gọn hóa quy trình, tối giản thủ tục",
    collocations: "streamline the deployment, streamline workflow, streamline processes",
    example: "We built a CI/CD pipeline to streamline our release workflow.",
    optionsVi: ["tinh gọn hóa quy trình", "phân tán nguồn lực", "tăng thêm bước kiểm duyệt", "chấm dứt dự án"]
  },
  {
    id: "b2_08",
    word: "compromise",
    level: "B2",
    ipa: "/ˈkɒm.prə.maɪz/",
    type: "noun / verb",
    meaningVi: "thỏa hiệp; làm tổn hại đến (an ninh mạng)",
    collocations: "reach a compromise, compromise security, compromised account",
    example: "Never compromise software security for the sake of speeding up delivery.",
    optionsVi: ["làm tổn hại / thỏa hiệp", "bảo đảm tuyệt đối", "nâng cao chất lượng", "thực hiện cam kết"]
  },
  {
    id: "b2_09",
    word: "feasibility",
    level: "B2",
    ipa: "/ˌfiː.zəˈbɪl.ə.ti/",
    type: "noun",
    meaningVi: "tính khả thi, tính thực tế",
    collocations: "feasibility study, check the feasibility, economic feasibility",
    example: "We conducted a feasibility study before adopting the new cloud framework.",
    optionsVi: ["tính khả thi", "độ tin cậy", "tính phức tạp", "khả năng sinh lời"]
  },
  {
    id: "b2_10",
    word: "trade-off",
    level: "B2",
    ipa: "/ˈtreɪd.ɒf/",
    type: "noun",
    meaningVi: "sự đánh đổi (giữa tốc độ và chi phí, bảo mật và tiện lợi)",
    collocations: "architectural trade-offs, necessary trade-off, evaluate trade-offs",
    example: "In system design, choosing consistency over availability is a classic trade-off.",
    optionsVi: ["sự đánh đổi", "sự cân bằng hoàn hảo", "thỏa thuận thương mại", "lợi nhuận ròng"]
  }
];
