// 10 câu hỏi Placement Test chuẩn CEFR (A1 -> B2)
export const PLACEMENT_QUESTIONS = [
  {
    id: 1,
    level: "A1",
    question: "She usually ______ coffee in the morning before starting work.",
    options: ["drinks", "drink", "is drink", "drinking"],
    correctIndex: 0,
    explanation: "Chủ ngữ ngôi thứ 3 số ít ('She') đi với thì Hiện tại đơn diễn tả thói quen (có từ nhận biết 'usually') thì động từ thêm -s/es: 'drinks'."
  },
  {
    id: 2,
    level: "A1",
    question: "Our daily team meeting starts ______ 9:00 AM every morning.",
    options: ["in", "on", "at", "for"],
    correctIndex: 2,
    explanation: "Dùng giới từ 'at' trước mốc giờ cụ thể ('at 9:00 AM'). 'In' dùng cho tháng/năm/buổi, 'On' dùng cho thứ/ngày."
  },
  {
    id: 3,
    level: "A2",
    question: "Yesterday afternoon, I ______ an email to the client regarding the new requirements.",
    options: ["send", "sent", "have sent", "was sent"],
    correctIndex: 1,
    explanation: "Có mốc thời gian rõ ràng trong quá khứ ('Yesterday afternoon') nên dùng Quá khứ đơn (Past Simple): dạng quá khứ của 'send' là 'sent'."
  },
  {
    id: 4,
    level: "A2",
    question: "You ______ turn off your microphone when the presenter is speaking.",
    options: ["should", "might", "would", "shall"],
    correctIndex: 0,
    explanation: "'Should' (nên) dùng để đưa ra lời khuyên hoặc quy tắc lịch sự trong cuộc họp trực tuyến."
  },
  {
    id: 5,
    level: "A2",
    question: "This new database query is much ______ than the previous one.",
    options: ["fast", "faster", "more fast", "fastest"],
    correctIndex: 1,
    explanation: "So sánh hơn với tính từ ngắn 'fast' là 'faster' (có từ nhận biết 'than' và 'much' để nhấn mạnh mức độ)."
  },
  {
    id: 6,
    level: "B1",
    question: "Our engineering team ______ this microservices project for over six months.",
    options: ["developed", "is developing", "has been developing", "develops"],
    correctIndex: 2,
    explanation: "Dùng thì Hiện tại hoàn thành tiếp diễn ('has been developing') diễn tả hành động bắt đầu trong quá khứ, kéo dài liên tục đến hiện tại (có 'for over six months')."
  },
  {
    id: 7,
    level: "B1",
    question: "If we don't fix this memory leak now, the server ______ crash under heavy load.",
    options: ["would", "will", "would have", "is"],
    correctIndex: 1,
    explanation: "Câu điều kiện loại 1 (First Conditional) diễn tả sự việc có thể xảy ra ở hiện tại/tương lai: Mệnh đề If dùng Hiện tại đơn ('don't fix'), mệnh đề chính dùng 'will + V'."
  },
  {
    id: 8,
    level: "B1",
    question: "We need to ______ the deployment because we detected a critical bug in staging.",
    options: ["put off", "put on", "take off", "look up"],
    correctIndex: 0,
    explanation: "Cụm động từ (Phrasal Verb) 'put off' có nghĩa là 'trì hoãn, lùi lại' (= delay/postpone). Rất phổ biến trong công việc IT."
  },
  {
    id: 9,
    level: "B2",
    question: "______ the tight sprint deadline, the backend developers managed to deliver all features.",
    options: ["Although", "Despite", "Because of", "Even though"],
    correctIndex: 1,
    explanation: "'Despite' (+ Noun phrase: 'the tight sprint deadline') có nghĩa là 'Mặc dù/Bất chấp'. 'Although/Even though' phải đi với mệnh đề (S + V)."
  },
  {
    id: 10,
    level: "B2",
    question: "The security audit recommends ______ all default passwords immediately after setup.",
    options: ["to change", "changing", "change", "changed"],
    correctIndex: 1,
    explanation: "Cấu trúc động từ: 'recommend + V-ing' (khuyên làm gì khi không có tân ngữ chỉ người phía sau). Ví dụ: 'recommend changing passwords'."
  }
];

export function calculateLevel(score) {
  if (score <= 3) return { level: "A1", label: "A1 - Beginner (Mới bắt đầu)", description: "Bạn phù hợp bắt đầu với các từ vựng nền tảng và các mẫu câu giao tiếp đơn giản hàng ngày." };
  if (score <= 6) return { level: "A2", label: "A2 - Elementary (Sơ cấp)", description: "Bạn đã có nền tảng ngữ pháp căn bản, cần trau dồi thêm từ vựng công sở và diễn đạt tình huống thông dụng." };
  if (score <= 8) return { level: "B1", label: "B1 - Intermediate (Trung cấp)", description: "Trình độ tốt! Bạn đã sẵn sàng luyện các từ vựng chuyên ngành IT, phrasal verbs và thảo luận công việc tự tin." };
  return { level: "B2", label: "B2 - Upper-Intermediate (Trung cao cấp)", description: "Xuất sắc! Bạn có nền tảng vững chắc, sẽ tập trung vào các từ vựng chuyên sâu, thành ngữ và phản xạ nói lưu loát." };
}
