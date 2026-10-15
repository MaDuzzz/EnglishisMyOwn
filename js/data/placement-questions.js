// ==============================================================================
// NGÂN HÀNG CÂU HỎI PLACEMENT TEST CEFR (A1 - B2)
// Mỗi cấp độ gồm 15 câu hỏi thực chiến chuẩn Oxford/Cambridge
// Bao gồm ngữ pháp, từ vựng công sở, công nghệ, phrasal verbs và collocations
// ==============================================================================

export const PLACEMENT_QUESTION_POOL = [
  // ========================== CẤP ĐỘ A1 (15 CÂU) ==========================
  {
    id: "a1_1",
    level: "A1",
    category: "Thì Hiện tại đơn",
    question: "She usually ______ coffee in the morning before starting work.",
    options: ["drinks", "drink", "is drink", "drinking"],
    correctIndex: 0,
    explanation: "Chủ ngữ ngôi thứ 3 số ít ('She') đi với thì Hiện tại đơn diễn tả thói quen (có từ nhận biết 'usually') thì động từ thêm -s: 'drinks'."
  },
  {
    id: "a1_2",
    level: "A1",
    category: "Giới từ chỉ thời gian",
    question: "Our daily team meeting starts ______ 9:00 AM every morning.",
    options: ["in", "on", "at", "for"],
    correctIndex: 2,
    explanation: "Dùng giới từ 'at' trước mốc giờ cụ thể ('at 9:00 AM'). 'In' dùng cho tháng/năm/buổi, 'On' dùng cho thứ/ngày."
  },
  {
    id: "a1_3",
    level: "A1",
    category: "Trợ động từ câu hỏi",
    question: "Where ______ you work as a software tester?",
    options: ["do", "does", "are", "is"],
    correctIndex: 0,
    explanation: "Trong câu hỏi thì Hiện tại đơn với động từ thường ('work') và chủ ngữ 'you', ta dùng trợ động từ 'do'."
  },
  {
    id: "a1_4",
    level: "A1",
    category: "Tính từ sở hữu",
    question: "This is my new colleague. ______ name is David.",
    options: ["His", "Him", "He", "He's"],
    correctIndex: 0,
    explanation: "'His' là tính từ sở hữu đứng trước danh từ ('His name' = tên của anh ấy)."
  },
  {
    id: "a1_5",
    level: "A1",
    category: "Cấu trúc There is / There are",
    question: "There ______ three computers on the main office desk.",
    options: ["is", "are", "have", "has"],
    correctIndex: 1,
    explanation: "'There are' dùng với danh từ đếm được số nhiều ('three computers')."
  },
  {
    id: "a1_6",
    level: "A1",
    category: "Lượng từ Some / Any",
    question: "I don't have ______ questions about the project instructions.",
    options: ["some", "any", "a", "an"],
    correctIndex: 1,
    explanation: "'Any' dùng trong câu phủ định ('don't have any questions') và câu nghi vấn."
  },
  {
    id: "a1_7",
    level: "A1",
    category: "Phủ định Hiện tại đơn",
    question: "My brother ______ like working on weekends.",
    options: ["doesn't", "don't", "isn't", "aren't"],
    correctIndex: 0,
    explanation: "Chủ ngữ ngôi thứ 3 số ít ('My brother') dùng trợ động từ phủ định 'doesn't + V-inf'."
  },
  {
    id: "a1_8",
    level: "A1",
    category: "Động từ thường ngày",
    question: "What time do you usually ______ home after work?",
    options: ["gets", "got", "get", "getting"],
    correctIndex: 2,
    explanation: "Sau trợ động từ 'do' trong câu hỏi, động từ chính luôn ở dạng nguyên mẫu không 'to' ('get')."
  },
  {
    id: "a1_9",
    level: "A1",
    category: "Mạo từ A / An",
    question: "We need to buy ______ new keyboard for the new workstation.",
    options: ["a", "an", "the", "some"],
    correctIndex: 0,
    explanation: "Dùng mạo từ 'a' trước danh từ đếm được số ít bắt đầu bằng một phụ âm ('a new keyboard')."
  },
  {
    id: "a1_10",
    level: "A1",
    category: "Đại từ tân ngữ",
    question: "Can you help ______ with this software installation, please?",
    options: ["I", "my", "me", "mine"],
    correctIndex: 2,
    explanation: "Đứng sau động từ 'help' cần một đại từ tân ngữ (object pronoun) là 'me'."
  },
  {
    id: "a1_11",
    level: "A1",
    category: "Động từ To Be",
    question: "They ______ in Tokyo for an international conference right now.",
    options: ["is", "are", "am", "be"],
    correctIndex: 1,
    explanation: "Chủ ngữ số nhiều 'They' đi với động từ to be ở thì hiện tại là 'are'."
  },
  {
    id: "a1_12",
    level: "A1",
    category: "How many / How much",
    question: "How ______ monitors do you have on your office desk?",
    options: ["much", "many", "any", "some"],
    correctIndex: 1,
    explanation: "'How many' dùng để hỏi số lượng cho danh từ đếm được số nhiều ('monitors')."
  },
  {
    id: "a1_13",
    level: "A1",
    category: "Trạng từ chỉ tần suất",
    question: "He ______ checks his work email first thing in the morning.",
    options: ["always", "hardly", "ever", "yet"],
    correctIndex: 0,
    explanation: "'Always' (luôn luôn) đứng trước động từ thường 'checks' để diễn tả thói quen đều đặn hàng ngày."
  },
  {
    id: "a1_14",
    level: "A1",
    category: "Từ để hỏi sở hữu",
    question: "______ laptop is this on the meeting table?",
    options: ["Who", "Whose", "Which", "Where"],
    correctIndex: 1,
    explanation: "'Whose' dùng để hỏi quyền sở hữu ('Laptop này của ai?'). 'Who' chỉ người làm chủ ngữ."
  },
  {
    id: "a1_15",
    level: "A1",
    category: "Từ vựng nghề nghiệp & nơi chốn",
    question: "Anna is a software engineer. She works for a tech ______ in Da Nang.",
    options: ["hospital", "station", "company", "supermarket"],
    correctIndex: 2,
    explanation: "'Tech company' (công ty công nghệ) là nơi làm việc phù hợp với kỹ sư phần mềm."
  },

  // ========================== CẤP ĐỘ A2 (15 CÂU) ==========================
  {
    id: "a2_1",
    level: "A2",
    category: "Thì Quá khứ đơn",
    question: "Yesterday afternoon, I ______ an email to the client regarding the requirements.",
    options: ["send", "sent", "have sent", "was sent"],
    correctIndex: 1,
    explanation: "Có mốc thời gian rõ ràng trong quá khứ ('Yesterday afternoon') nên dùng Quá khứ đơn: dạng quá khứ của 'send' là 'sent'."
  },
  {
    id: "a2_2",
    level: "A2",
    category: "Động từ khuyết thiếu (Modals)",
    question: "You ______ turn off your microphone when the presenter is speaking.",
    options: ["should", "might", "would", "shall"],
    correctIndex: 0,
    explanation: "'Should' (nên) dùng để đưa ra lời khuyên hoặc quy tắc lịch sự trong cuộc họp trực tuyến."
  },
  {
    id: "a2_3",
    level: "A2",
    category: "So sánh hơn (Comparatives)",
    question: "This new database query is much ______ than the previous one.",
    options: ["fast", "faster", "more fast", "fastest"],
    correctIndex: 1,
    explanation: "So sánh hơn với tính từ ngắn 'fast' là 'faster' (có từ nhận biết 'than' và 'much' để nhấn mạnh mức độ)."
  },
  {
    id: "a2_4",
    level: "A2",
    category: "Tương lai gần (Be going to)",
    question: "We ______ to launch the marketing campaign next Monday.",
    options: ["go", "are going", "went", "have gone"],
    correctIndex: 1,
    explanation: "Cấu trúc 'be going to + V' dùng để diễn tả kế hoạch hoặc dự định cụ thể đã lên lịch trước trong tương lai gần."
  },
  {
    id: "a2_5",
    level: "A2",
    category: "Quá khứ tiếp diễn & Quá khứ đơn",
    question: "I was writing the weekly report when the power suddenly ______ out.",
    options: ["was going", "has gone", "went", "goes"],
    correctIndex: 2,
    explanation: "Hành động đang diễn ra (chia Quá khứ tiếp diễn 'was writing') thì có hành động ngắn khác xen vào (chia Quá khứ đơn 'went out')."
  },
  {
    id: "a2_6",
    level: "A2",
    category: "Lượng từ Much / Many",
    question: "We don't have ______ time left before the presentation starts.",
    options: ["many", "few", "much", "a few"],
    correctIndex: 2,
    explanation: "'Time' là danh từ không đếm được, trong câu phủ định dùng 'much time' (không còn nhiều thời gian)."
  },
  {
    id: "a2_7",
    level: "A2",
    category: "Hiện tại hoàn thành với Yet",
    question: "I haven't received your feedback document ______ . Could you resend it?",
    options: ["already", "yet", "still", "just"],
    correctIndex: 1,
    explanation: "'Yet' đứng cuối câu phủ định ở thì Hiện tại hoàn thành để diễn tả việc 'chưa' xảy ra tính đến thời điểm này."
  },
  {
    id: "a2_8",
    level: "A2",
    category: "Từ nối nguyên nhân (Connectors)",
    question: "He decided to work from home ______ he was feeling unwell.",
    options: ["although", "because", "so", "but"],
    correctIndex: 1,
    explanation: "'Because' (bởi vì) dùng để nêu lý do, nguyên nhân giải thích cho quyết định ở mệnh đề trước."
  },
  {
    id: "a2_9",
    level: "A2",
    category: "Trải nghiệm (Have you ever...)",
    question: "Have you ever ______ to Singapore for a tech conference?",
    options: ["gone", "went", "been", "be"],
    correctIndex: 2,
    explanation: "Cấu trúc 'Have you ever been to...' dùng để hỏi về trải nghiệm từng đến một nơi nào đó và đã trở về."
  },
  {
    id: "a2_10",
    level: "A2",
    category: "So sánh nhất (Superlatives)",
    question: "Who is the ______ employee in your frontend development team?",
    options: ["youngest", "younger", "most young", "more young"],
    correctIndex: 0,
    explanation: "So sánh nhất với tính từ ngắn 'young' có cấu trúc 'the + adj-est' -> 'the youngest'."
  },
  {
    id: "a2_11",
    level: "A2",
    category: "Câu điều kiện loại 1",
    question: "If the client agrees today, we ______ signing the contract tomorrow.",
    options: ["started", "start", "will start", "would start"],
    correctIndex: 2,
    explanation: "Câu điều kiện loại 1: Mệnh đề If dùng Hiện tại đơn ('agrees'), mệnh đề chính dùng 'will + V' ('will start')."
  },
  {
    id: "a2_12",
    level: "A2",
    category: "Yêu cầu lịch sự (Could you...)",
    question: "Could you please ______ me the PDF document attachment?",
    options: ["forward", "forwarding", "forwarded", "to forward"],
    correctIndex: 0,
    explanation: "Sau cấu trúc yêu cầu lịch sự 'Could you please + V-inf', động từ giữ nguyên mẫu không 'to'."
  },
  {
    id: "a2_13",
    level: "A2",
    category: "Giới từ đi với tính từ",
    question: "She is very interested ______ learning cloud architecture and DevOps.",
    options: ["on", "in", "at", "about"],
    correctIndex: 1,
    explanation: "Cụm tính từ cố định: 'interested in something/doing something' (quan tâm, hứng thú với điều gì)."
  },
  {
    id: "a2_14",
    level: "A2",
    category: "Hiện tại hoàn thành với Since",
    question: "We ______ each other since our university graduation in 2020.",
    options: ["know", "have known", "knew", "are knowing"],
    correctIndex: 1,
    explanation: "Hành động bắt đầu trong quá khứ và kéo dài đến hiện tại (có 'since + mốc thời gian') dùng Hiện tại hoàn thành: 'have known'."
  },
  {
    id: "a2_15",
    level: "A2",
    category: "Thì Hiện tại tiếp diễn",
    question: "I'm busy right now; I ______ on the quarterly performance report.",
    options: ["work", "worked", "am working", "have worked"],
    correctIndex: 2,
    explanation: "Có cụm từ 'right now' diễn tả hành động đang diễn ra tại thời điểm nói, chia Hiện tại tiếp diễn: 'am working'."
  },

  // ========================== CẤP ĐỘ B1 (15 CÂU) ==========================
  {
    id: "b1_1",
    level: "B1",
    category: "Hiện tại hoàn thành tiếp diễn",
    question: "Our engineering team ______ this microservices project for over six months.",
    options: ["developed", "is developing", "has been developing", "develops"],
    correctIndex: 2,
    explanation: "Dùng thì Hiện tại hoàn thành tiếp diễn ('has been developing') diễn tả hành động bắt đầu trong quá khứ, kéo dài liên tục đến hiện tại (có 'for over six months')."
  },
  {
    id: "b1_2",
    level: "B1",
    category: "Câu điều kiện loại 1",
    question: "If we don't fix this memory leak now, the server ______ crash under heavy load.",
    options: ["would", "will", "would have", "is"],
    correctIndex: 1,
    explanation: "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại/tương lai: Mệnh đề If dùng Hiện tại đơn ('don't fix'), mệnh đề chính dùng 'will + V'."
  },
  {
    id: "b1_3",
    level: "B1",
    category: "Cụm động từ (Phrasal Verbs)",
    question: "We need to ______ the deployment because we detected a critical bug in staging.",
    options: ["put off", "put on", "take off", "look up"],
    correctIndex: 0,
    explanation: "Cụm động từ (Phrasal Verb) 'put off' có nghĩa là 'trì hoãn, lùi lại' (= delay/postpone). Rất phổ biến trong công việc IT."
  },
  {
    id: "b1_4",
    level: "B1",
    category: "Thể bị động (Passive Voice)",
    question: "The security flaw ______ by our QA engineer before the production release.",
    options: ["was discovered", "discovered", "has discovered", "is discovering"],
    correctIndex: 0,
    explanation: "Lỗi bảo mật được phát hiện bởi kỹ sư QA: chia Bị động quá khứ đơn 'was discovered by...'."
  },
  {
    id: "b1_5",
    level: "B1",
    category: "Câu điều kiện loại 2",
    question: "If I ______ more free time, I would contribute to open-source projects.",
    options: ["have", "had", "would have", "will have"],
    correctIndex: 1,
    explanation: "Câu điều kiện loại 2 diễn tả điều kiện giả định không có thật ở hiện tại: Mệnh đề If dùng Quá khứ đơn ('had'), mệnh đề chính dùng 'would + V'."
  },
  {
    id: "b1_6",
    level: "B1",
    category: "Mệnh đề quan hệ (Relative Clauses)",
    question: "The product manager, ______ designed the new user flow, just joined the call.",
    options: ["who", "which", "whom", "whose"],
    correctIndex: 0,
    explanation: "Đại từ quan hệ 'who' thay thế cho danh từ chỉ người ('The product manager') làm chủ ngữ cho mệnh đề sau."
  },
  {
    id: "b1_7",
    level: "B1",
    category: "Giới từ sau Look forward to",
    question: "I'm looking forward to ______ with your team on this upcoming AI feature.",
    options: ["collaborate", "collaborated", "collaborating", "be collaborated"],
    correctIndex: 2,
    explanation: "Cấu trúc cố định: 'look forward to + V-ing' (mong đợi, trông chờ điều gì trong tương lai)."
  },
  {
    id: "b1_8",
    level: "B1",
    category: "Thì Quá khứ hoàn thành",
    question: "The build failed because someone ______ the configuration file incorrectly.",
    options: ["had edited", "has edited", "was editing", "edits"],
    correctIndex: 0,
    explanation: "Hành động chỉnh sửa file xảy ra TRƯỚC việc build thất bại trong quá khứ, chia Quá khứ hoàn thành: 'had edited'."
  },
  {
    id: "b1_9",
    level: "B1",
    category: "Động từ khuyết thiếu suy đoán",
    question: "The server CPU usage is at 99%. There ______ be an infinite loop in the code.",
    options: ["can't", "must", "need", "ought"],
    correctIndex: 1,
    explanation: "'Must be' dùng để đưa ra suy đoán chắc chắn tới 90-95% dựa trên chứng cứ rõ ràng (CPU chạm 99%)."
  },
  {
    id: "b1_10",
    level: "B1",
    category: "Thói quen quá khứ (Used to)",
    question: "She used to ______ as a QA tester before transitioning into product management.",
    options: ["work", "working", "worked", "works"],
    correctIndex: 0,
    explanation: "Cấu trúc 'used to + V-inf' diễn tả một thói quen hoặc trạng thái từng xảy ra trong quá khứ và nay không còn nữa."
  },
  {
    id: "b1_11",
    level: "B1",
    category: "Phân biệt Remind & Remember",
    question: "Could you please ______ me to submit the timesheet before 5 PM?",
    options: ["remember", "remind", "recall", "recognize"],
    correctIndex: 1,
    explanation: "'Remind someone to do something' = nhắc nhở ai làm gì. Trong khi 'remember to do' = tự mình nhớ làm gì."
  },
  {
    id: "b1_12",
    level: "B1",
    category: "Cấu trúc So... that",
    question: "The new mobile update was ______ popular that our download servers struggled.",
    options: ["so", "such", "very", "too"],
    correctIndex: 0,
    explanation: "Cấu trúc: 'so + adj + that + clause' ('quá ... đến nỗi mà'). 'Such' phải đi kèm với cụm danh từ ('such a popular update that...')."
  },
  {
    id: "b1_13",
    level: "B1",
    category: "Collocation công sở (Take responsibility)",
    question: "We need a senior lead who can ______ full responsibility for the data migration.",
    options: ["make", "give", "take", "do"],
    correctIndex: 2,
    explanation: "Cụm từ chuẩn (collocation): 'take responsibility for' có nghĩa là nhận/chịu trách nhiệm cho công việc gì."
  },
  {
    id: "b1_14",
    level: "B1",
    category: "Cụm động từ liên lạc (Get through)",
    question: "I tried calling technical support several times, but I couldn't get ______ .",
    options: ["over", "through", "away", "off"],
    correctIndex: 1,
    explanation: "Phrasal verb: 'get through (to someone)' nghĩa là kết nối điện thoại thành công với ai đó."
  },
  {
    id: "b1_15",
    level: "B1",
    category: "Mệnh đề nhượng bộ (Although)",
    question: "______ the budget was limited, the team completed the prototype on time.",
    options: ["Although", "Despite", "In spite of", "Because"],
    correctIndex: 0,
    explanation: "'Although' đi với một mệnh đề (S + V: 'the budget was limited'). 'Despite / In spite of' chỉ đi với danh từ hoặc V-ing."
  },

  // ========================== CẤP ĐỘ B2 (15 CÂU) ==========================
  {
    id: "b2_1",
    level: "B2",
    category: "Liên từ tương phản (Despite)",
    question: "______ the tight sprint deadline, the backend developers managed to deliver all features.",
    options: ["Although", "Despite", "Because of", "Even though"],
    correctIndex: 1,
    explanation: "'Despite' (+ Noun phrase: 'the tight sprint deadline') có nghĩa là 'Mặc dù/Bất chấp'. 'Although/Even though' phải đi với mệnh đề (S + V)."
  },
  {
    id: "b2_2",
    level: "B2",
    category: "Dạng động từ theo sau Recommend",
    question: "The security audit recommends ______ all default passwords immediately after setup.",
    options: ["to change", "changing", "change", "changed"],
    correctIndex: 1,
    explanation: "Cấu trúc động từ: 'recommend + V-ing' (khuyên làm gì khi không có tân ngữ chỉ người phía sau). Ví dụ: 'recommend changing passwords'."
  },
  {
    id: "b2_3",
    level: "B2",
    category: "Câu điều kiện loại 3 (Third Conditional)",
    question: "If we had run automated regression tests, we ______ the payment gateway outage.",
    options: ["would have prevented", "will prevent", "prevented", "would prevent"],
    correctIndex: 0,
    explanation: "Câu điều kiện loại 3 diễn tả giả định trái ngược với quá khứ: If + had + V3/ed, S + would/could + have + V3/ed."
  },
  {
    id: "b2_4",
    level: "B2",
    category: "Cấu trúc đảo ngữ (Inversion)",
    question: "Hardly ______ the code into production when the monitoring alert went off.",
    options: ["we had deployed", "did we deploy", "had we deployed", "we deployed"],
    correctIndex: 2,
    explanation: "Cấu trúc đảo ngữ chỉ vừa mới... thì: 'Hardly had + S + V3/ed... when + S + V2/ed'."
  },
  {
    id: "b2_5",
    level: "B2",
    category: "Thể giả định (Subjunctive Mood)",
    question: "The CTO insisted that every engineer ______ two-factor authentication by Friday.",
    options: ["enables", "enable", "enabled", "will enable"],
    correctIndex: 1,
    explanation: "Thể giả định sau động từ yêu cầu ('insist that + S + (should) V-inf'): động từ luôn ở dạng nguyên mẫu không chia."
  },
  {
    id: "b2_6",
    level: "B2",
    category: "Động từ theo sau Help",
    question: "The new distributed caching strategy helped ______ latency by more than forty percent.",
    options: ["reduce", "reducing", "reduced", "to reducing"],
    correctIndex: 0,
    explanation: "Cấu trúc: 'help + (to) V-inf' (giúp làm điều gì). Ở đây dạng nguyên mẫu không 'to' là 'reduce'."
  },
  {
    id: "b2_7",
    level: "B2",
    category: "Thành ngữ (Idiom)",
    question: "The two tech leads didn't see ______ on how to architect the microservices layer.",
    options: ["face to face", "hand in hand", "eye to eye", "mind to mind"],
    correctIndex: 2,
    explanation: "Thành ngữ 'see eye to eye (with someone) on something' có nghĩa là đồng thuận, cùng chung quan điểm."
  },
  {
    id: "b2_8",
    level: "B2",
    category: "Cụm động từ chuyển nghĩa (Bring about)",
    question: "The digital transformation initiative has ______ about dramatic improvements in productivity.",
    options: ["taken", "brought", "made", "given"],
    correctIndex: 1,
    explanation: "Cụm động từ: 'bring about something' có nghĩa là gây ra, mang lại hoặc dẫn đến (sự thay đổi tích cực, cải tiến)."
  },
  {
    id: "b2_9",
    level: "B2",
    category: "Đảo ngữ với cụm từ phủ định",
    question: "Under no circumstances ______ share your production database credentials with external parties.",
    options: ["should you", "you should", "you must", "you ought"],
    correctIndex: 0,
    explanation: "Khi cụm từ phủ định 'Under no circumstances' (trong bất kỳ hoàn cảnh nào cũng không) đứng đầu câu, mệnh đề phải đảo ngữ: Trợ động từ + S + V."
  },
  {
    id: "b2_10",
    level: "B2",
    category: "Mệnh đề phòng ngừa (In case)",
    question: "We need a contingency plan in case the vendor ______ to deliver the hardware on time.",
    options: ["fails", "will fail", "failed", "is failing"],
    correctIndex: 0,
    explanation: "Sau liên từ 'in case' (phòng khi) ta dùng thì Hiện tại đơn để chỉ tình huống giả định trong tương lai: 'in case the vendor fails'."
  },
  {
    id: "b2_11",
    level: "B2",
    category: "Từ nối trang trọng (Albeit)",
    question: "The architectural refactor was a success, ______ a costly and time-consuming one.",
    options: ["whereas", "nonetheless", "albeit", "despite"],
    correctIndex: 2,
    explanation: "'Albeit' (= although it was) là từ nối học thuật, trang trọng đi kèm với tính từ hoặc ngữ danh từ ('albeit a costly...')."
  },
  {
    id: "b2_12",
    level: "B2",
    category: "Cụm động từ nâng cao (Pull off)",
    question: "The team succeeded in ______ the complex legacy migration ahead of schedule.",
    options: ["pulling off", "taking up", "putting down", "making out"],
    correctIndex: 0,
    explanation: "'Pull off something' là thành ngữ/phrasal verb có nghĩa là thực hiện thành công một việc vô cùng khó khăn và thách thức."
  },
  {
    id: "b2_13",
    level: "B2",
    category: "Cấu trúc bị động nhận định (Regard as)",
    question: "She is widely regarded ______ one of the foremost experts in distributed systems.",
    options: ["like", "as", "to be", "for"],
    correctIndex: 1,
    explanation: "Cấu trúc cố định: 'be regarded as + noun' (được công nhận, đánh giá là ai/cái gì)."
  },
  {
    id: "b2_14",
    level: "B2",
    category: "Collocation thành ngữ (Cut corners)",
    question: "The executive board agreed that we must not ______ corners when it comes to user privacy.",
    options: ["break", "turn", "make", "cut"],
    correctIndex: 3,
    explanation: "Thành ngữ: 'cut corners' nghĩa là làm tắt, bớt xén quy trình hoặc làm việc thiếu trách nhiệm để tiết kiệm thời gian/tiền bạc."
  },
  {
    id: "b2_15",
    level: "B2",
    category: "Đảo ngữ câu điều kiện loại 3",
    question: "Had the team tested the migration script in staging, they ______ the data corruption error.",
    options: ["could have caught", "can catch", "caught", "would catch"],
    correctIndex: 0,
    explanation: "Đảo ngữ câu điều kiện loại 3 (bỏ If): 'Had + S + V3/ed, S + could/would + have + V3/ed'."
  }
];

// Thuật toán xáo trộn mảng Fisher-Yates shuffle
function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Trích xuất ngẫu nhiên bộ câu hỏi thi Placement Test từ ngân hàng câu hỏi
 * @param {number} countPerLevel Số câu hỏi rút ngẫu nhiên cho mỗi cấp độ (Mặc định: 3 câu/level x 4 level = 12 câu)
 * @returns {Array} Danh sách câu hỏi đã được xáo trộn câu và xáo trộn vị trí đáp án (A, B, C, D)
 */
export function getRandomPlacementQuestions(countPerLevel = 3) {
  const levels = ["A1", "A2", "B1", "B2"];
  const testQuestions = [];

  levels.forEach((lvl) => {
    const poolForLevel = PLACEMENT_QUESTION_POOL.filter(q => q.level === lvl);
    const sampled = shuffleArray(poolForLevel).slice(0, countPerLevel);

    sampled.forEach((q) => {
      const correctOptionText = q.options[q.correctIndex];
      const randomizedOptions = shuffleArray(q.options);
      const newCorrectIndex = randomizedOptions.indexOf(correctOptionText);

      testQuestions.push({
        ...q,
        options: randomizedOptions,
        correctIndex: newCorrectIndex
      });
    });
  });

  return testQuestions;
}

/**
 * Tính toán xếp lớp CEFR dựa trên điểm số và tổng số câu
 * @param {number} score Số câu trả lời đúng
 * @param {number} total Tổng số câu hỏi (mặc định 12)
 */
export function calculateLevel(score, total = 12) {
  const percent = Math.round((score / total) * 100);

  if (score <= 4) {
    return {
      level: "A1",
      label: "A1 - Beginner (Mới bắt đầu)",
      description: "Bạn phù hợp bắt đầu với các từ vựng nền tảng và các mẫu câu giao tiếp đơn giản hàng ngày. Lộ trình học sẽ bắt đầu từ các chủ đề thiết thực nhất.",
      score,
      total,
      percent
    };
  }
  if (score <= 7) {
    return {
      level: "A2",
      label: "A2 - Elementary (Sơ cấp)",
      description: "Bạn đã có nền tảng ngữ pháp căn bản, cần trau dồi thêm từ vựng công sở, email và diễn đạt tình huống thông dụng trong môi trường làm việc.",
      score,
      total,
      percent
    };
  }
  if (score <= 10) {
    return {
      level: "B1",
      label: "B1 - Intermediate (Trung cấp)",
      description: "Trình độ rất tốt! Bạn đã sẵn sàng luyện các từ vựng chuyên ngành, phrasal verbs, collocations và thảo luận công việc tự tin, trôi chảy.",
      score,
      total,
      percent
    };
  }
  return {
    level: "B2",
    label: "B2 - Upper-Intermediate (Trung cao cấp)",
    description: "Xuất sắc! Bạn có nền tảng tiếng Anh học thuật & thực chiến vững chắc. Bạn sẽ tập trung vào các từ vựng chuyên sâu, thành ngữ và phản xạ giao tiếp tự nhiên như người bản xứ.",
    score,
    total,
    percent
  };
}

// Giữ lại alias để tương thích ngược nếu có module khác tham chiếu
export const PLACEMENT_QUESTIONS = PLACEMENT_QUESTION_POOL;
