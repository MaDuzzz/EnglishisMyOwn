// Kho Từ Vựng & Cụm Từ Phân Nhóm Chuẩn CEFR (A1 -> B2)
// Nguồn tham chiếu: Oxford 3000/5000, Cambridge English Vocabulary Profile, Business & Tech Native Corpora
// Bao gồm: Từ vựng đơn lẻ, Phrasal Verbs, Collocations thông dụng đời sống và môi trường làm việc/IT.

export const VOCAB_GROUPS = [
  // =========================================================================
  // 1. GIAO TIẾP HÀNG NGÀY & PHẢN XẠ (Daily Conversation & Small Talk)
  // =========================================================================
  {
    groupId: "daily_conversation",
    name: "Giao Tiếp Thường Nhật & Phản Xạ",
    icon: "💬",
    category: "daily", // "daily" | "work" | "tech"
    level: "A2",
    description: "Các cụm từ cửa miệng, phrasal verbs và cách nói tự nhiên người bản xứ dùng mỗi ngày.",
    words: [
      {
        id: "daily_01",
        word: "catch up",
        level: "A2",
        type: "phrasal verb",
        ipa: "/kætʃ ʌp/",
        meaningVi: "hàn huyên, cập nhật tin tức sau thời gian xa cách",
        collocations: "catch up with friends, catch up on news, grab a coffee and catch up",
        example: "Let's grab a coffee this Sunday and catch up!",
        exampleVi: "Chủ nhật này đi cà phê rồi hàn huyên tâm sự nhé!",
        optionsVi: ["hàn huyên, cập nhật tin tức", "bỏ cuộc giữa chừng", "tranh cãi gay gắt", "từ chối lời mời"]
      },
      {
        id: "daily_02",
        word: "run into",
        level: "A2",
        type: "phrasal verb",
        ipa: "/rʌn ˈɪn.tuː/",
        meaningVi: "tình cờ bắt gặp, chạm mặt ai đó",
        collocations: "run into an old friend, run into trouble, unexpectedly run into",
        example: "I ran into my former colleague at the supermarket yesterday.",
        exampleVi: "Hôm qua tôi tình cờ gặp lại đồng nghiệp cũ ở siêu thị.",
        optionsVi: ["tình cờ bắt gặp", "chủ động hẹn gặp", "tránh mặt ai đó", "gọi điện thoại"]
      },
      {
        id: "daily_03",
        word: "make sense",
        level: "A2",
        type: "collocation",
        ipa: "/meɪk sens/",
        meaningVi: "hợp lý, có lý, dễ hiểu",
        collocations: "that makes sense, make complete sense, doesn't make any sense",
        example: "That explanation makes a lot of sense to me.",
        exampleVi: "Lời giải thích đó đối với tôi rất hợp lý và dễ hiểu.",
        optionsVi: ["hợp lý, có lý, dễ hiểu", "vô lý, ngớ ngẩn", "khó chấp nhận", "gây hiểu lầm"]
      },
      {
        id: "daily_04",
        word: "figure out",
        level: "B1",
        type: "phrasal verb",
        ipa: "/ˈfɪɡ.jər aʊt/",
        meaningVi: "nghĩ ra, tìm ra cách giải quyết, hiểu ra vấn đề",
        collocations: "figure out a solution, figure out how it works, can't figure it out",
        example: "Don't worry, we will figure out a way together.",
        exampleVi: "Đừng lo, chúng ta sẽ cùng nhau tìm ra cách giải quyết.",
        optionsVi: ["nghĩ ra, tìm ra cách giải quyết", "lờ đi, bỏ qua", "làm hỏng việc", "trì hoãn xử lý"]
      },
      {
        id: "daily_05",
        word: "take your time",
        level: "A1",
        type: "idiomatic phrase",
        ipa: "/teɪk jɔːr taɪm/",
        meaningVi: "cứ từ từ, thong thả, không cần phải vội",
        collocations: "take your time doing it, no rush take your time",
        example: "There is no rush, please take your time to read the menu.",
        exampleVi: "Không vội đâu, bạn cứ thong thả xem thực đơn nhé.",
        optionsVi: ["cứ từ từ, thong thả", "làm gấp lên", "hết giờ rồi", "đừng làm nữa"]
      },
      {
        id: "daily_06",
        word: "keep in touch",
        level: "A2",
        type: "collocation",
        ipa: "/kiːp ɪn tʌtʃ/",
        meaningVi: "giữ liên lạc, duy trì mối quan hệ",
        collocations: "keep in touch with someone, stay in touch, let's keep in touch",
        example: "It was great seeing you! Let's keep in touch via Zalo.",
        exampleVi: "Rất vui được gặp bạn! Hãy giữ liên lạc qua Zalo nhé.",
        optionsVi: ["giữ liên lạc", "cắt đứt quan hệ", "chặn tin nhắn", "quên mặt nhau"]
      },
      {
        id: "daily_07",
        word: "give a hand",
        level: "A2",
        type: "idiom",
        ipa: "/ɡɪv eɪ hænd/",
        meaningVi: "giúp đỡ một tay, phụ giúp",
        collocations: "give someone a hand, lend a helping hand, need a hand",
        example: "Can you give me a hand with moving this heavy desk?",
        exampleVi: "Bạn có thể phụ tôi một tay chuyển chiếc bàn nặng này không?",
        optionsVi: ["giúp đỡ một tay", "vỗ tay khen ngợi", "bắt tay chào hỏi", "từ chối giúp"]
      },
      {
        id: "daily_08",
        word: "by the way",
        level: "A1",
        type: "phrase",
        ipa: "/baɪ ðə weɪ/",
        meaningVi: "nhân tiện, tiện thể nhắc đến",
        collocations: "by the way have you heard, by the way did you know",
        example: "By the way, do you know what time the movie starts tonight?",
        exampleVi: "Nhân tiện, bạn có biết tối nay phim bắt đầu lúc mấy giờ không?",
        optionsVi: ["nhân tiện, tiện thể", "tất nhiên rồi", "ngoài ra", "ngược lại hoàn toàn"]
      },
      {
        id: "daily_09",
        word: "appreciate",
        level: "B1",
        type: "verb",
        ipa: "/əˈpriː.ʃi.eɪt/",
        meaningVi: "trân trọng, cảm kích, đánh giá cao",
        collocations: "really appreciate your help, highly appreciate, I'd appreciate it if",
        example: "I truly appreciate your advice when I faced difficulties.",
        exampleVi: "Tôi thực sự cảm kích lời khuyên của bạn khi tôi gặp khó khăn.",
        optionsVi: ["trân trọng, cảm kích", "phàn nàn, chỉ trích", "coi thường", "lãng quên"]
      },
      {
        id: "daily_10",
        word: "hang out",
        level: "A2",
        type: "phrasal verb",
        ipa: "/hæŋ aʊt/",
        meaningVi: "đi chơi, tụ tập giải trí cùng bạn bè",
        collocations: "hang out with friends, hang out downtown, places to hang out",
        example: "Do you want to hang out after work this Friday evening?",
        exampleVi: "Tối thứ Sáu này tan làm bạn có muốn đi chơi tụ tập không?",
        optionsVi: ["đi chơi, tụ tập", "ở nhà làm thêm", "đi công tác xa", "ngủ một mình"]
      },
      {
        id: "daily_11",
        word: "cheer up",
        level: "A2",
        type: "phrasal verb",
        ipa: "/tʃɪər ʌp/",
        meaningVi: "phấn chấn lên, vui vẻ lên, lấy lại tinh thần",
        collocations: "cheer someone up, cheer up everything will be fine",
        example: "Cheer up! Tomorrow is going to be a brand new day.",
        exampleVi: "Vui vẻ lên nào! Ngày mai sẽ là một ngày hoàn toàn mới.",
        optionsVi: ["phấn chấn lên, vui lên", "thất vọng tràn trề", "tức giận", "lo lắng tột độ"]
      },
      {
        id: "daily_12",
        word: "as soon as possible",
        level: "A2",
        type: "phrase",
        ipa: "/æz suːn æz ˈpɒs.ə.bəl/",
        meaningVi: "càng sớm càng tốt, ngay khi có thể (ASAP)",
        collocations: "please reply as soon as possible, finish ASAP",
        example: "Please call me back as soon as possible, it is quite urgent.",
        exampleVi: "Vui lòng gọi lại cho tôi càng sớm càng tốt, việc này khá gấp.",
        optionsVi: ["càng sớm càng tốt", "khi nào rảnh thì làm", "không cần gấp", "sang tuần sau"]
      }
    ]
  },

  // =========================================================================
  // 2. NHÀ HÀNG, MUA SẮM & ĂN UỐNG (Social, Dining & Shopping)
  // =========================================================================
  {
    groupId: "social_dining_shopping",
    name: "Nhà Hàng, Ẩm Thực & Mua Sắm",
    icon: "🍽️",
    category: "daily",
    level: "A1",
    description: "Gọi món ăn, thanh toán chia tiền, hỏi giá cả và mua sắm trong đời sống.",
    words: [
      {
        id: "dining_01",
        word: "split the bill",
        level: "A2",
        type: "collocation",
        ipa: "/splɪt ðə bɪl/",
        meaningVi: "chia tiền hóa đơn, cưa đôi / chia đều tiền ăn",
        collocations: "split the bill evenly, let's split the bill, go Dutch",
        example: "The dinner was delicious! Shall we split the bill?",
        exampleVi: "Bữa tối ngon quá! Chúng mình chia đều tiền hóa đơn nhé?",
        optionsVi: ["chia tiền hóa đơn", "để tôi bao trọn", "quên mang ví", "xin giảm giá"]
      },
      {
        id: "dining_02",
        word: "recommend",
        level: "A2",
        type: "verb",
        ipa: "/ˌrek.əˈmend/",
        meaningVi: "gợi ý, tiến cử, khuyên nên thử",
        collocations: "highly recommend, can you recommend a dish, recommend to someone",
        example: "What do you recommend for someone who loves spicy food?",
        exampleVi: "Bạn có gợi ý món nào cho người thích ăn cay không?",
        optionsVi: ["gợi ý, tiến cử", "cấm đoán", "chê bai món ăn", "từ chối phục vụ"]
      },
      {
        id: "dining_03",
        word: "takeaway",
        level: "A1",
        type: "noun / adjective",
        ipa: "/ˈteɪk.ə.weɪ/",
        meaningVi: "đồ ăn mang về (Mỹ dùng to-go)",
        collocations: "order takeaway, takeaway food, for here or takeaway",
        example: "I am too tired to cook tonight, let's grab some takeaway pizza.",
        exampleVi: "Tối nay mệt quá không muốn nấu, mình mua bánh pizza mang về ăn đi.",
        optionsVi: ["đồ ăn mang về", "ăn tại quán", "đồ ăn tự nấu", "thực phẩm ôi thiu"]
      },
      {
        id: "dining_04",
        word: "receipt",
        level: "A2",
        type: "noun",
        ipa: "/rɪˈsiːt/",
        meaningVi: "hóa đơn, biên lai thu tiền",
        collocations: "keep the receipt, sales receipt, receipt for payment",
        example: "Please keep your receipt in case you want an exchange.",
        exampleVi: "Vui lòng giữ lại biên lai để phòng khi bạn muốn đổi hàng.",
        optionsVi: ["hóa đơn, biên lai", "phiếu giảm giá", "vé vào cửa", "danh thiếp"]
      },
      {
        id: "dining_05",
        word: "out of stock",
        level: "B1",
        type: "collocation",
        ipa: "/aʊt əv stɒk/",
        meaningVi: "hết hàng, tạm thời không còn trong kho",
        collocations: "item is out of stock, temporarily out of stock, back in stock",
        example: "I am sorry, this shirt size is currently out of stock.",
        exampleVi: "Rất tiếc, kích cỡ áo này hiện tại đang tạm hết hàng.",
        optionsVi: ["hết hàng, hết kho", "đang giảm giá mạnh", "hàng mới về", "hàng tồn kho lâu ngày"]
      },
      {
        id: "dining_06",
        word: "refund",
        level: "B1",
        type: "noun / verb",
        ipa: "/ˈriː.fʌnd/",
        meaningVi: "tiền hoàn trả; hoàn lại tiền cho khách",
        collocations: "full refund, request a refund, refund policy",
        example: "The store offered a full refund because the item was damaged.",
        exampleVi: "Cửa hàng đã hoàn lại toàn bộ tiền vì sản phẩm bị lỗi hỏng.",
        optionsVi: ["hoàn lại tiền", "phạt thêm tiền", "thu thêm phí", "đổi sang hàng đắt hơn"]
      },
      {
        id: "dining_07",
        word: "vegetarian",
        level: "A2",
        type: "noun / adjective",
        ipa: "/ˌvedʒ.ɪˈteə.ri.ən/",
        meaningVi: "đồ chay, người ăn chay",
        collocations: "vegetarian diet, vegetarian options, strictly vegetarian",
        example: "Does this Vietnamese restaurant have any vegetarian dishes?",
        exampleVi: "Nhà hàng Việt Nam này có món ăn chay nào không?",
        optionsVi: ["món ăn chay", "món thịt nướng", "món hải sản tươi sống", "món ăn cay nóng"]
      },
      {
        id: "dining_08",
        word: "discount",
        level: "A1",
        type: "noun / verb",
        ipa: "/ˈdɪs.kaʊnt/",
        meaningVi: "khoản giảm giá, chiết khấu",
        collocations: "special discount, 20% discount, discount code",
        example: "Members get a 10% discount on all purchases today.",
        exampleVi: "Hội viên được giảm giá 10% cho tất cả đơn hàng hôm nay.",
        optionsVi: ["khoản giảm giá", "phí vận chuyển", "tiền tip bồi bàn", "giá niêm yết gốc"]
      }
    ]
  },

  // =========================================================================
  // 3. DU LỊCH, DI CHUYỂN & HỎI ĐƯỜNG (Travel, Transit & Directions)
  // =========================================================================
  {
    groupId: "travel_transit_directions",
    name: "Du Lịch, Di Chuyển & Hỏi Đường",
    icon: "✈️",
    category: "daily",
    level: "A2",
    description: "Sân bay, khách sạn, ga tàu điện, bắt taxi và cách hỏi đường khi đi xa.",
    words: [
      {
        id: "travel_01",
        word: "boarding pass",
        level: "A2",
        type: "noun",
        ipa: "/ˈbɔː.dɪŋ ˌpɑːs/",
        meaningVi: "thẻ lên máy bay, thẻ lên tàu",
        collocations: "print boarding pass, show your boarding pass, digital boarding pass",
        example: "Please have your passport and boarding pass ready at the gate.",
        exampleVi: "Vui lòng chuẩn bị sẵn hộ chiếu và thẻ lên máy bay tại cửa khởi hành.",
        optionsVi: ["thẻ lên máy bay", "hóa đơn mua vé", "bảo hiểm du lịch", "thẻ căn cước công dân"]
      },
      {
        id: "travel_02",
        word: "book in advance",
        level: "B1",
        type: "collocation",
        ipa: "/bʊk ɪn ədˈvɑːns/",
        meaningVi: "đặt chỗ trước, đặt vé trước",
        collocations: "book tickets in advance, strongly advised to book in advance",
        example: "Hotel rooms fill up quickly in peak season, so book in advance.",
        exampleVi: "Phòng khách sạn kín rất nhanh vào mùa cao điểm, vì vậy hãy đặt trước.",
        optionsVi: ["đặt chỗ trước", "đến nơi mới mua vé", "hủy chuyến đi", "trả phòng trễ"]
      },
      {
        id: "travel_03",
        word: "go straight ahead",
        level: "A1",
        type: "phrase",
        ipa: "/ɡəʊ streɪt əˈhed/",
        meaningVi: "đi thẳng về phía trước",
        collocations: "go straight ahead for 200 meters, then turn left",
        example: "Go straight ahead until you see the bank on your left side.",
        exampleVi: "Cứ đi thẳng về phía trước cho đến khi bạn thấy ngân hàng ở bên tay trái.",
        optionsVi: ["đi thẳng về phía trước", "quay đầu xe lại", "rẽ phải ngay lập tức", "dừng xe bên đường"]
      },
      {
        id: "travel_04",
        word: "delay",
        level: "A2",
        type: "noun / verb",
        ipa: "/dɪˈleɪ/",
        meaningVi: "trì hoãn, trễ chuyến, chậm trễ",
        collocations: "flight delay, delayed by two hours, without delay",
        example: "Our flight to Tokyo was delayed due to heavy storms.",
        exampleVi: "Chuyến bay tới Tokyo của chúng tôi bị hoãn do bão lớn.",
        optionsVi: ["trì hoãn, chậm trễ", "khởi hành sớm hơn", "hạ cánh an toàn", "bay đúng giờ"]
      },
      {
        id: "travel_05",
        word: "luggage",
        level: "A2",
        type: "noun",
        ipa: "/ˈlʌɡ.ɪdʒ/",
        meaningVi: "hành lý, vali túi xách du lịch",
        collocations: "carry-on luggage, check-in luggage, lost luggage",
        example: "You are allowed one piece of carry-on luggage inside the cabin.",
        exampleVi: "Bạn được phép mang một kiện hành lý xách tay vào khoang máy bay.",
        optionsVi: ["hành lý xách tay / vali", "hàng cứu trợ", "giấy tờ xuất nhập cảnh", "quà lưu niệm"]
      },
      {
        id: "travel_06",
        word: "check in",
        level: "A1",
        type: "phrasal verb",
        ipa: "/tʃek ɪn/",
        meaningVi: "làm thủ tục nhận phòng hoặc lên máy bay",
        collocations: "check in online, hotel check-in time, check in at the desk",
        example: "We can check in to our hotel room starting at 2:00 PM.",
        exampleVi: "Chúng tôi có thể làm thủ tục nhận phòng khách sạn bắt đầu từ 2 giờ chiều.",
        optionsVi: ["làm thủ tục nhận phòng", "thanh toán trả phòng", "đặt cọc giữ chỗ", "gọi dịch vụ dọn phòng"]
      },
      {
        id: "travel_07",
        word: "destination",
        level: "B1",
        type: "noun",
        ipa: "/ˌdes.tɪˈneɪ.ʃən/",
        meaningVi: "điểm đến, nơi dự định tới",
        collocations: "final destination, tourist destination, reach the destination",
        example: "Da Nang is one of the most popular travel destinations in Vietnam.",
        exampleVi: "Đà Nẵng là một trong những điểm đến du lịch nổi tiếng nhất ở Việt Nam.",
        optionsVi: ["điểm đến", "nơi xuất phát ban đầu", "trạm trung chuyển", "bản đồ chỉ đường"]
      }
    ]
  },

  // =========================================================================
  // 4. LÀM VIỆC NHÓM & VĂN PHÒNG (Office Work & Team Collaboration)
  // =========================================================================
  {
    groupId: "office_work_collab",
    name: "Làm Việc Nhóm & Văn Phòng",
    icon: "💼",
    category: "work",
    level: "B1",
    description: "Deadline, phối hợp đồng nghiệp, họp hành, phân chia nhiệm vụ và xử lý công việc.",
    words: [
      {
        id: "office_01",
        word: "meet the deadline",
        level: "B1",
        type: "collocation",
        ipa: "/miːt ðə ˈded.laɪn/",
        meaningVi: "hoàn thành đúng hạn chót, kịp tiến độ",
        collocations: "struggle to meet the deadline, ensure we meet the deadline, tight deadline",
        example: "The whole team worked hard to meet the client's deadline.",
        exampleVi: "Toàn bộ nhóm đã làm việc cật lực để kịp hạn chót của khách hàng.",
        optionsVi: ["hoàn thành đúng hạn chót", "bị trễ tiến độ", "hủy bỏ dự án", "xin gia hạn thêm thời gian"]
      },
      {
        id: "office_02",
        word: "collaborate",
        level: "B1",
        type: "verb",
        ipa: "/kəˈlæb.ə.reɪt/",
        meaningVi: "hợp tác, phối hợp chặt chẽ cùng làm việc",
        collocations: "collaborate closely, collaborate on a project, collaborate with colleagues",
        example: "Designers and developers need to collaborate closely on this feature.",
        exampleVi: "Đội ngũ thiết kế và lập trình viên cần phối hợp chặt chẽ trong tính năng này.",
        optionsVi: ["hợp tác, phối hợp", "làm việc độc lập", "cạnh tranh gay gắt", "đổ lỗi cho nhau"]
      },
      {
        id: "office_03",
        word: "constructive feedback",
        level: "B2",
        type: "collocation",
        ipa: "/kənˈstrʌk.tɪv ˈfiːd.bæk/",
        meaningVi: "góp ý mang tính xây dựng và tích cực",
        collocations: "provide constructive feedback, open to constructive feedback",
        example: "Constructive feedback from mentors helps junior engineers improve rapidly.",
        exampleVi: "Góp ý mang tính xây dựng từ người hướng dẫn giúp các kỹ sư trẻ tiến bộ rất nhanh.",
        optionsVi: ["góp ý mang tính xây dựng", "lời chỉ trích cay nghiệt", "báo cáo đánh giá KPI", "lời khen ngợi sáo rỗng"]
      },
      {
        id: "office_04",
        word: "prioritize",
        level: "B1",
        type: "verb",
        ipa: "/praɪˈɒr.ɪ.taɪz/",
        meaningVi: "ưu tiên việc quan trọng trước",
        collocations: "prioritize urgent tasks, need to prioritize, prioritize customer satisfaction",
        example: "We should prioritize fixing security vulnerabilities before releasing the app.",
        exampleVi: "Chúng ta nên ưu tiên vá các lỗ hổng bảo mật trước khi phát hành ứng dụng.",
        optionsVi: ["ưu tiên xử lý trước", "trì hoãn vô thời hạn", "làm ngơ, bỏ qua", "chia đều thời gian"]
      },
      {
        id: "office_05",
        word: "delegate",
        level: "B2",
        type: "verb",
        ipa: "/ˈdel.ɪ.ɡeɪt/",
        meaningVi: "ủy quyền, giao phó trách nhiệm cho người khác",
        collocations: "delegate responsibilities, delegate tasks to team members",
        example: "A great leader knows how to delegate tasks effectively.",
        exampleVi: "Một người lãnh đạo giỏi là người biết cách giao việc cho cấp dưới hiệu quả.",
        optionsVi: ["ủy quyền, giao phó", "tự ôm đồm hết việc", "né tránh trách nhiệm", "thu hồi quyền hạn"]
      },
      {
        id: "office_06",
        word: "brainstorm",
        level: "B1",
        type: "verb",
        ipa: "/ˈbreɪn.stɔːm/",
        meaningVi: "động não, hội ý tìm kiếm ý tưởng mới",
        collocations: "brainstorm ideas, brainstorm solutions, brainstorming session",
        example: "Let's gather in the meeting room to brainstorm new marketing ideas.",
        exampleVi: "Hãy cùng vào phòng họp để cùng động não nghĩ ra các ý tưởng tiếp thị mới.",
        optionsVi: ["động não tìm ý tưởng", "nghỉ ngơi thư giãn", "báo cáo tài chính", "tranh luận cá nhân"]
      },
      {
        id: "office_07",
        word: "workload",
        level: "B1",
        type: "noun",
        ipa: "/ˈwɜːk.ləʊd/",
        meaningVi: "khối lượng công việc cần hoàn thành",
        collocations: "heavy workload, manage workload, reduce the workload",
        example: "She has been feeling stressed recently because of a heavy workload.",
        exampleVi: "Gần đây cô ấy cảm thấy căng thẳng do khối lượng công việc quá nặng.",
        optionsVi: ["khối lượng công việc", "tiền lương làm thêm giờ", "nơi làm việc", "lịch trình công tác"]
      },
      {
        id: "office_08",
        word: "handle",
        level: "B1",
        type: "verb",
        ipa: "/ˈhæn.dəl/",
        meaningVi: "xử lý, giải quyết, cáng đáng công việc",
        collocations: "handle pressure, handle customer complaints, handle requests",
        example: "Can you handle this support ticket while I am in the meeting?",
        exampleVi: "Bạn có thể xử lý phiếu hỗ trợ này giúp tôi trong lúc tôi đi họp không?",
        optionsVi: ["xử lý, giải quyết", "bỏ qua không làm", "chuyển sang ngày mai", "từ chối tiếp nhận"]
      }
    ]
  },

  // =========================================================================
  // 5. VIẾT EMAIL & GIAO TIẾP CÔNG SỞ (Business Email & Professional Chat)
  // =========================================================================
  {
    groupId: "business_email_chat",
    name: "Viết Email & Chat Công Việc",
    icon: "✉️",
    category: "work",
    level: "B1",
    description: "Cụm từ chuẩn chuyên nghiệp dùng khi gửi Email, nhắn tin Slack/Teams cho sếp và đối tác.",
    words: [
      {
        id: "email_01",
        word: "reach out to",
        level: "B1",
        type: "phrasal verb",
        ipa: "/riːtʃ aʊt tuː/",
        meaningVi: "chủ động liên hệ, kết nối với ai để xin trợ giúp hoặc hợp tác",
        collocations: "reach out to support, feel free to reach out, reach out to partners",
        example: "Feel free to reach out to me if you have any questions.",
        exampleVi: "Đừng ngần ngại liên hệ với tôi nếu bạn có bất kỳ câu hỏi nào nhé.",
        optionsVi: ["chủ động liên hệ, kết nối", "cắt đứt liên lạc", "tránh mặt người khác", "từ chối trả lời"]
      },
      {
        id: "email_02",
        word: "touch base",
        level: "B2",
        type: "business idiom",
        ipa: "/tʌtʃ beɪs/",
        meaningVi: "trao đổi nhanh, liên lạc để cập nhật tình hình công việc",
        collocations: "touch base with someone, touch base next week, just wanted to touch base",
        example: "I just wanted to touch base with you regarding our project schedule.",
        exampleVi: "Tôi chỉ muốn trao đổi nhanh với bạn về tiến độ lịch trình dự án.",
        optionsVi: ["trao đổi nhanh, cập nhật tin", "ký kết hợp đồng lớn", "hủy bỏ dự án", "yêu cầu sa thải"]
      },
      {
        id: "email_03",
        word: "keep someone in the loop",
        level: "B2",
        type: "business idiom",
        ipa: "/kiːp sʌm.wʌn ɪn ðə luːp/",
        meaningVi: "luôn cập nhật thông tin diễn biến cho ai đó nắm rõ",
        collocations: "please keep me in the loop, stay in the loop, loop someone in",
        example: "Please keep me in the loop on any major updates from the client.",
        exampleVi: "Vui lòng giữ tôi trong luồng thông tin nếu có bất kỳ cập nhật lớn nào từ khách hàng.",
        optionsVi: ["luôn cập nhật thông tin cho biết", "giấu kín thông tin", "không cho ai tham gia", "loại khỏi nhóm chat"]
      },
      {
        id: "email_04",
        word: "as per our discussion",
        level: "B2",
        type: "formal phrase",
        ipa: "/æz pɜːr aʊər dɪˈskʌʃ.ən/",
        meaningVi: "theo như những gì chúng ta đã thảo luận / thống nhất",
        collocations: "as per our phone call, as per our agreement, as per our conversation",
        example: "As per our discussion yesterday, I have attached the updated contract.",
        exampleVi: "Như chúng ta đã thống nhất hôm qua, tôi xin gửi đính kèm hợp đồng đã cập nhật.",
        optionsVi: ["theo như đã thảo luận", "trái ngược với cam kết", "bỏ qua cuộc họp", "không liên quan thảo luận"]
      },
      {
        id: "email_05",
        word: "look forward to",
        level: "B1",
        type: "phrasal verb",
        ipa: "/lʊk ˈfɔː.wəd tuː/",
        meaningVi: "rất mong đợi, mong chờ (kết thúc email trang trọng)",
        collocations: "look forward to hearing from you, look forward to seeing you",
        example: "I look forward to hearing from you soon.",
        exampleVi: "Tôi rất mong sớm nhận được phản hồi từ bạn.",
        optionsVi: ["rất mong đợi, trông ngóng", "lo sợ điều gì đó xảy ra", "từ chối gặp mặt", "kết thúc vĩnh viễn"]
      },
      {
        id: "email_06",
        word: "clarify",
        level: "B1",
        type: "verb",
        ipa: "/ˈklær.ɪ.faɪ/",
        meaningVi: "làm rõ, giải thích tường minh để tránh hiểu lầm",
        collocations: "clarify requirements, clarify the situation, seek clarification",
        example: "Could you please clarify what you mean by 'Phase 2 deliverables'?",
        exampleVi: "Bạn có thể vui lòng làm rõ ý bạn về 'các sản phẩm bàn giao ở Giai đoạn 2' không?",
        optionsVi: ["làm rõ, giải thích tường minh", "làm cho phức tạp hơn", "giấu kín chi tiết", "đoán mò ý kiến"]
      },
      {
        id: "email_07",
        word: "action item",
        level: "B2",
        type: "collocation",
        ipa: "/ˈæk.ʃən ˌaɪ.təm/",
        meaningVi: "đầu việc cụ thể cần thực hiện sau cuộc họp",
        collocations: "assign action items, review action items, list of action items",
        example: "Here is the summary of the meeting along with key action items.",
        exampleVi: "Đây là tóm tắt cuộc họp kèm theo danh sách các đầu việc cụ thể cần làm.",
        optionsVi: ["đầu việc cụ thể cần làm", "mục giải trí ngoài giờ", "ý kiến thảo luận lan man", "quy định kỷ luật"]
      }
    ]
  },

  // =========================================================================
  // 6. AGILE, SCRUM & DAILY STANDUP (IT Teamwork & Sprint Planning)
  // =========================================================================
  {
    groupId: "it_agile_standup",
    name: "Agile, Scrum & Daily Standup",
    icon: "🏃",
    category: "tech",
    level: "B1",
    description: "Báo cáo trong cuộc họp Daily Standup 15 phút, Sprint, Backlog, Blocker và Retrospective.",
    words: [
      {
        id: "agile_01",
        word: "blocker",
        level: "B1",
        type: "noun",
        ipa: "/ˈblɒk.ər/",
        meaningVi: "vướng mắc, rào cản cản trở tiến độ công việc",
        collocations: "hit a blocker, resolve blockers, any blockers today",
        example: "I don't have any blockers today; I am working on the payment screen.",
        exampleVi: "Hôm nay tôi không gặp vướng mắc gì; tôi đang làm tiếp màn hình thanh toán.",
        optionsVi: ["vướng mắc, rào cản tiến độ", "mục tiêu hoàn thành", "người hỗ trợ kỹ thuật", "tài liệu hướng dẫn"]
      },
      {
        id: "agile_02",
        word: "backlog",
        level: "B1",
        type: "noun",
        ipa: "/ˈbæk.lɒɡ/",
        meaningVi: "danh sách công việc tồn đọng cần làm trong sản phẩm",
        collocations: "product backlog, backlog grooming, prioritize the backlog",
        example: "The Product Owner is refining user stories in the product backlog.",
        exampleVi: "Product Owner đang rà soát và làm rõ các user story trong danh sách backlog.",
        optionsVi: ["danh sách công việc tồn đọng", "mã nguồn đã xóa", "nhật ký lỗi hệ thống", "báo cáo tài chính"]
      },
      {
        id: "agile_03",
        word: "sprint",
        level: "A2",
        type: "noun",
        ipa: "/sprɪnt/",
        meaningVi: "chu kỳ phát triển ngắn (thường 1-2 tuần) trong Scrum",
        collocations: "two-week sprint, sprint planning, sprint goal, end of sprint",
        example: "Our main sprint goal is to deliver the biometric login feature.",
        exampleVi: "Mục tiêu sprint chính lần này là bàn giao tính năng đăng nhập sinh trắc học.",
        optionsVi: ["chu kỳ phát triển 1-2 tuần", "chạy bộ đường dài", "dự án kéo dài cả năm", "hợp đồng thử việc"]
      },
      {
        id: "agile_04",
        word: "retrospective",
        level: "B2",
        type: "noun",
        ipa: "/ˌret.rəˈspek.tɪv/",
        meaningVi: "buổi họp nhìn lại, rút kinh nghiệm cuối mỗi Sprint",
        collocations: "sprint retrospective, action items from retrospective",
        example: "In the retrospective, we discussed how to improve our code review quality.",
        exampleVi: "Trong buổi họp rút kinh nghiệm, chúng tôi thảo luận cách cải thiện chất lượng review code.",
        optionsVi: ["buổi họp nhìn lại, rút kinh nghiệm", "buổi phỏng vấn tuyển dụng", "lễ ra mắt sản phẩm", "kỳ thi sát hạch"]
      },
      {
        id: "agile_05",
        word: "acceptance criteria",
        level: "B2",
        type: "collocation",
        ipa: "/əkˈsep.təns kraɪˈtɪə.ri.ə/",
        meaningVi: "tiêu chí nghiệm thu (điều kiện để tính năng được coi là xong)",
        collocations: "meet acceptance criteria, define acceptance criteria",
        example: "Make sure all acceptance criteria are covered by automated tests.",
        exampleVi: "Hãy đảm bảo tất cả các tiêu chí nghiệm thu đều được kiểm thử tự động bao phủ.",
        optionsVi: ["tiêu chí nghiệm thu tính năng", "hồ sơ xin việc", "điều khoản thanh toán", "quy tắc bảo mật"]
      },
      {
        id: "agile_06",
        word: "impediment",
        level: "B2",
        type: "noun",
        ipa: "/ɪmˈped.ɪ.mənt/",
        meaningVi: "trở ngại, khó khăn cản trở sự phát triển của nhóm",
        collocations: "remove impediments, face serious impediments",
        example: "The Scrum Master is responsible for removing team impediments.",
        exampleVi: "Scrum Master có trách nhiệm tháo gỡ các trở ngại cho cả nhóm phát triển.",
        optionsVi: ["trở ngại, khó khăn cản trở", "cơ hội thăng tiến", "phần thưởng thành tích", "kế hoạch tương lai"]
      }
    ]
  },

  // =========================================================================
  // 7. LẬP TRÌNH & PHÁT TRIỂN PHẦN MỀM (Software Engineering & Code Review)
  // =========================================================================
  {
    groupId: "it_software_dev",
    name: "Lập Trình & Phát Triển Phần Mềm",
    icon: "💻",
    category: "tech",
    level: "B1",
    description: "Viết mã, Debug, Code Review, Refactor, xử lý lỗi và xây dựng API.",
    words: [
      {
        id: "dev_01",
        word: "debug",
        level: "A2",
        type: "verb",
        ipa: "/diːˈbʌɡ/",
        meaningVi: "tìm kiếm và sửa lỗi trong chương trình",
        collocations: "debug the code, debugging tool, spend hours debugging",
        example: "I spent all morning debugging a weird memory leak issue.",
        exampleVi: "Tôi đã dành cả buổi sáng để tìm và sửa một lỗi rò rỉ bộ nhớ kỳ lạ.",
        optionsVi: ["tìm và sửa lỗi mã nguồn", "viết thêm mã độc", "xóa cơ sở dữ liệu", "thiết kế giao diện"]
      },
      {
        id: "dev_02",
        word: "refactor",
        level: "B1",
        type: "verb",
        ipa: "/ˌriːˈfæk.tər/",
        meaningVi: "tái cấu trúc code (giúp code sạch hơn mà không đổi hành vi)",
        collocations: "refactor legacy code, refactor for performance, continuous refactoring",
        example: "We should refactor this function to make it easier to test.",
        exampleVi: "Chúng ta nên tái cấu trúc lại hàm này để dễ viết unit test hơn.",
        optionsVi: ["tái cấu trúc mã nguồn", "xóa bỏ hoàn toàn dự án", "chuyển sang ngôn ngữ khác", "tạo thêm lỗi mới"]
      },
      {
        id: "dev_03",
        word: "pull request",
        level: "A2",
        type: "collocation",
        ipa: "/pʊl rɪˈkwest/",
        meaningVi: "yêu cầu xem xét và gộp mã nguồn vào nhánh chính (PR)",
        collocations: "open a pull request, review a PR, merge the pull request",
        example: "I have created a pull request; could you please take a look?",
        exampleVi: "Tôi đã tạo một pull request rồi; bạn vui lòng vào xem qua giúp tôi nhé?",
        optionsVi: ["yêu cầu gộp mã nguồn (PR)", "yêu cầu xin nghỉ phép", "khiếu nại khách hàng", "báo cáo tài chính"]
      },
      {
        id: "dev_04",
        word: "deprecated",
        level: "B2",
        type: "adjective",
        ipa: "/ˈdep.rə.keɪ.tɪd/",
        meaningVi: "lỗi thời, không còn được khuyến khích sử dụng (sắp bị loại bỏ)",
        collocations: "deprecated API, deprecated library, mark as deprecated",
        example: "This method is deprecated in version 3.0 and will be removed soon.",
        exampleVi: "Phương thức này đã bị coi là lỗi thời ở phiên bản 3.0 và sẽ sớm bị xóa bỏ.",
        optionsVi: ["lỗi thời, không khuyên dùng", "mới cập nhật hiện đại", "tốc độ nhanh nhất", "bắt buộc phải dùng"]
      },
      {
        id: "dev_05",
        word: "reproduce",
        level: "B1",
        type: "verb",
        ipa: "/ˌriː.prəˈdjuːs/",
        meaningVi: "tái hiện lại lỗi (để xác nhận nguyên nhân bug)",
        collocations: "reproduce the bug, steps to reproduce, hard to reproduce",
        example: "Can you provide the exact steps to reproduce this crash on Android?",
        exampleVi: "Bạn có thể cung cấp các bước chính xác để tái hiện lại lỗi văng ứng dụng này trên Android không?",
        optionsVi: ["tái hiện lại lỗi", "che giấu lỗi phần mềm", "sửa lỗi tức thì", "báo cáo lên giám đốc"]
      },
      {
        id: "dev_06",
        word: "endpoint",
        level: "B1",
        type: "noun",
        ipa: "/ˈend.pɔɪnt/",
        meaningVi: "điểm cuối API (URL tiếp nhận request)",
        collocations: "RESTful endpoint, secure endpoint, API endpoint documentation",
        example: "The frontend sends a POST request to the authentication endpoint.",
        exampleVi: "Phía frontend gửi một yêu cầu POST tới endpoint xác thực người dùng.",
        optionsVi: ["điểm cuối API", "dây cáp mạng", "điểm kết thúc dự án", "hạn chót bàn giao"]
      },
      {
        id: "dev_07",
        word: "seamless",
        level: "B2",
        type: "adjective",
        ipa: "/ˈsiːm.ləs/",
        meaningVi: "liền mạch, trơn tru, không có vết gãy nối",
        collocations: "seamless user experience, seamless integration, seamless transition",
        example: "The update provides a seamless user experience across all devices.",
        exampleVi: "Bản cập nhật mang đến trải nghiệm người dùng liền mạch trên mọi thiết bị.",
        optionsVi: ["liền mạch, mượt mà trơn tru", "chắp vá, gián đoạn", "chậm chạp, giật lag", "phức tạp khó dùng"]
      }
    ]
  },

  // =========================================================================
  // 8. DEVOPS, HẠ TẦNG CLOUD & CI/CD (Cloud Infrastructure & Reliability)
  // =========================================================================
  {
    groupId: "it_devops_cloud",
    name: "DevOps, Hạ Tầng Cloud & CI/CD",
    icon: "☁️",
    category: "tech",
    level: "B1",
    description: "Triển khai hệ thống, Docker, Kubernetes, CI/CD pipeline, giám sát và phục hồi lỗi.",
    words: [
      {
        id: "devops_01",
        word: "deploy",
        level: "B1",
        type: "verb",
        ipa: "/dɪˈplɔɪ/",
        meaningVi: "triển khai phần mềm lên môi trường máy chủ",
        collocations: "deploy to production, automated deployment, deploy a hotfix",
        example: "We are ready to deploy the new version to the production server.",
        exampleVi: "Chúng tôi đã sẵn sàng triển khai phiên bản mới lên máy chủ thực tế (production).",
        optionsVi: ["triển khai lên máy chủ", "xóa bỏ mã nguồn", "sao lưu dữ liệu", "khởi động lại máy tính"]
      },
      {
        id: "devops_02",
        word: "pipeline",
        level: "B1",
        type: "noun",
        ipa: "/ˈpaɪp.laɪn/",
        meaningVi: "luồng tự động hóa xây dựng và kiểm thử phần mềm (CI/CD)",
        collocations: "CI/CD pipeline, build pipeline failed, pipeline triggers",
        example: "The deployment pipeline failed because one unit test did not pass.",
        exampleVi: "Luồng triển khai CI/CD bị thất bại do có một bài kiểm thử unit test không vượt qua.",
        optionsVi: ["luồng tự động hóa CI/CD", "đường ống nước", "cơ sở dữ liệu", "màn hình hiển thị"]
      },
      {
        id: "devops_03",
        word: "downtime",
        level: "B1",
        type: "noun",
        ipa: "/ˈdaʊn.taɪm/",
        meaningVi: "thời gian chết (hệ thống tạm ngừng hoạt động vì lỗi hoặc bảo trì)",
        collocations: "zero downtime, unplanned downtime, minimize downtime",
        example: "Our goal this quarter is to achieve zero downtime during database upgrades.",
        exampleVi: "Mục tiêu quý này của chúng tôi là đạt mức không có thời gian chết khi nâng cấp cơ sở dữ liệu.",
        optionsVi: ["thời gian chết của hệ thống", "thời gian làm thêm giờ", "kỳ nghỉ phép năm", "giờ cao điểm truy cập"]
      },
      {
        id: "devops_04",
        word: "scalability",
        level: "B2",
        type: "noun",
        ipa: "/ˌskeɪ.ləˈbɪl.ə.ti/",
        meaningVi: "khả năng mở rộng chịu tải của hệ thống khi người dùng tăng vọt",
        collocations: "high scalability, cloud scalability, horizontal scalability",
        example: "Microservices architecture improves the scalability of our web application.",
        exampleVi: "Kiến trúc Microservices giúp cải thiện khả năng mở rộng chịu tải cho ứng dụng web của chúng ta.",
        optionsVi: ["khả năng mở rộng chịu tải", "độ an toàn mật khẩu", "dung lượng bộ nhớ RAM", "tốc độ gõ phím"]
      },
      {
        id: "devops_05",
        word: "rollback",
        level: "B1",
        type: "verb / noun",
        ipa: "/ˈrəʊl.bæk/",
        meaningVi: "quay lui, phục hồi về phiên bản ổn định trước đó",
        collocations: "rollback the release, rollback to previous commit, database rollback",
        example: "Because of a critical payment bug, we had to roll back the release immediately.",
        exampleVi: "Do một lỗi nghiêm trọng trong thanh toán, chúng tôi đã phải quay lui phiên bản ngay lập tức.",
        optionsVi: ["quay lui về bản trước đó", "tiến hành nâng cấp tiếp", "khóa tài khoản khách", "xóa toàn bộ log"]
      },
      {
        id: "devops_06",
        word: "high availability",
        level: "B2",
        type: "collocation",
        ipa: "/haɪ əˌveɪ.ləˈbɪl.ə.ti/",
        meaningVi: "tính sẵn sàng cao (hệ thống luôn chạy liên tục, có dự phòng)",
        collocations: "design for high availability, high availability clusters",
        example: "Cloud architecture ensures high availability even if one data center fails.",
        exampleVi: "Kiến trúc đám mây đảm bảo tính sẵn sàng cao ngay cả khi một trung tâm dữ liệu gặp sự cố.",
        optionsVi: ["tính sẵn sàng cao", "tính bảo mật tuyệt đối", "giá thành rẻ nhất", "dễ sử dụng cho người mới"]
      }
    ]
  },

  // =========================================================================
  // 9. CẢM XÚC, TÍNH CÁCH & Ý KIẾN (Emotions, Personality & Stances)
  // =========================================================================
  {
    groupId: "emotions_stances",
    name: "Cảm Xúc, Tính Cách & Nêu Quan Điểm",
    icon: "💡",
    category: "daily",
    level: "B1",
    description: "Diễn đạt suy nghĩ, đồng tình, phản đối, chia sẻ tâm trạng và cách đánh giá tính cách.",
    words: [
      {
        id: "emo_01",
        word: "reliable",
        level: "A2",
        type: "adjective",
        ipa: "/rɪˈlaɪ.ə.bəl/",
        meaningVi: "đáng tin cậy, chắc chắn, có thể an tâm dựa vào",
        collocations: "reliable person, highly reliable, reliable source of information",
        example: "He is a reliable teammate; he always delivers his promises on time.",
        exampleVi: "Anh ấy là một đồng đội đáng tin cậy; anh ấy luôn giữ đúng lời hứa đúng hạn.",
        optionsVi: ["đáng tin cậy", "thất thường khó đoán", "thiếu trung thực", "lười biếng"]
      },
      {
        id: "emo_02",
        word: "frustrated",
        level: "B1",
        type: "adjective",
        ipa: "/frʌsˈtreɪ.tɪd/",
        meaningVi: "bực bội, bất lực, ức chế vì bế tắc",
        collocations: "feel frustrated, frustrated with delays, deeply frustrated",
        example: "I felt frustrated when the internet connection kept dropping during my presentation.",
        exampleVi: "Tôi cảm thấy rất bực bội khi mạng internet liên tục bị mất lúc tôi đang thuyết trình.",
        optionsVi: ["bực bội, bất lực, ức chế", "vui sướng hân hoan", "bình thản thư giãn", "ngạc nhiên thú vị"]
      },
      {
        id: "emo_03",
        word: "in my opinion",
        level: "A2",
        type: "phrase",
        ipa: "/ɪn maɪ əˈpɪn.jən/",
        meaningVi: "theo quan điểm / ý kiến cá nhân của tôi",
        collocations: "in my honest opinion, in my humble opinion (IMHO)",
        example: "In my opinion, we should focus on user experience before marketing.",
        exampleVi: "Theo quan điểm của tôi, chúng ta nên tập trung vào trải nghiệm người dùng trước khi tiếp thị.",
        optionsVi: ["theo ý kiến của tôi", "mọi người đều nghĩ rằng", "chắc chắn là sai", "theo số đông"]
      },
      {
        id: "emo_04",
        word: "confident",
        level: "A2",
        type: "adjective",
        ipa: "/ˈkɒn.fɪ.dənt/",
        meaningVi: "tự tin vào khả năng của bản thân",
        collocations: "feel confident, confident about the interview, highly confident",
        example: "Practicing English every day makes me feel much more confident when speaking.",
        exampleVi: "Luyện tiếng Anh mỗi ngày giúp tôi cảm thấy tự tin hơn rất nhiều khi nói.",
        optionsVi: ["tự tin", "rụt rè, e ngại", "chủ quan khinh địch", "lo sợ thất bại"]
      },
      {
        id: "emo_05",
        word: "deal with",
        level: "B1",
        type: "phrasal verb",
        ipa: "/diːl wɪð/",
        meaningVi: "đối phó, xử lý, đương đầu với tình huống khó khăn",
        collocations: "deal with pressure, deal with difficult clients, how to deal with stress",
        example: "Learning how to deal with unexpected bugs is an essential engineering skill.",
        exampleVi: "Học cách đương đầu với những lỗi phần mềm bất ngờ là một kỹ năng quan trọng của kỹ sư.",
        optionsVi: ["đối phó, xử lý, đương đầu", "trốn tránh thực tế", "bỏ cuộc sớm", "khiếu nại lên cấp trên"]
      },
      {
        id: "emo_06",
        word: "flexible",
        level: "B1",
        type: "adjective",
        ipa: "/ˈflek.sə.bəl/",
        meaningVi: "linh hoạt, dễ thích ứng với sự thay đổi",
        collocations: "flexible working hours, flexible mindset, highly flexible",
        example: "Our company offers flexible working hours for software engineers.",
        exampleVi: "Công ty của chúng tôi áp dụng thời gian làm việc linh hoạt cho các kỹ sư phần mềm.",
        optionsVi: ["linh hoạt, dễ thích nghi", "cứng nhắc, bảo thủ", "nghiêm khắc kỷ luật", "bắt buộc cố định"]
      }
    ]
  },

  // =========================================================================
  // 10. TỪ VỰNG NỀN TẢNG CÔNG NGHỆ & CÔNG SỞ (Core Tech & Office Essentials)
  // =========================================================================
  {
    groupId: "core_tech_office",
    name: "Nền Tảng CNTT & Công Sở Cơ Bản",
    icon: "🎯",
    category: "work",
    level: "A1-B2",
    description: "Bộ 40 từ vựng cốt lõi chuẩn hóa cấp độ A1 đến B2 phục vụ công việc hàng ngày trong môi trường công nghệ.",
    words: [
      {
        id: "a1_01",
        word: "schedule",
        level: "A1",
        ipa: "/ˈskedʒ.uːl/",
        type: "noun / verb",
        meaningVi: "lịch trình, thời gian biểu; lên lịch",
        collocations: "tight schedule, schedule a meeting, on schedule",
        example: "Let's check the team schedule for today.",
        exampleVi: "Chúng ta cùng kiểm tra lịch trình của nhóm cho ngày hôm nay nhé.",
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
        exampleVi: "Tôi sẽ để lại tin nhắn trên kênh Slack của chúng ta.",
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
        exampleVi: "Hiện tại chúng ta đang gặp một trục trặc kết nối nhỏ.",
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
        exampleVi: "Khách hàng đang yêu cầu cập nhật về tính năng này.",
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
        exampleVi: "Vui lòng kiểm thử ứng dụng trên các thiết bị di động khác nhau.",
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
        exampleVi: "Tôi thường đến văn phòng vào lúc 8 giờ 30 sáng.",
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
        exampleVi: "Bạn có thể vui lòng chia sẻ màn hình với cả nhóm được không?",
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
        exampleVi: "Chúng ta cần một giải pháp đơn giản để khắc phục lỗi này.",
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
        exampleVi: "Nhấp vào nút màu xanh để gửi biểu mẫu của bạn.",
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
        exampleVi: "Tôi sẽ hoàn thành nhiệm vụ này trước giờ ăn trưa.",
        optionsVi: ["hoàn thành, kết thúc", "bắt đầu, khởi tạo", "tạm hoãn", "thay đổi"]
      },
      {
        id: "a2_01",
        word: "deadline",
        level: "A2",
        ipa: "/ˈded.laɪn/",
        type: "noun",
        meaningVi: "hạn chót, thời hạn hoàn thành",
        collocations: "meet the deadline, miss the deadline, tight deadline",
        example: "We must work extra hours to meet the project deadline.",
        exampleVi: "Chúng tôi phải làm thêm giờ để kịp hạn chót của dự án.",
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
        exampleVi: "Tôi sẽ cập nhật ticket ngay khi viết xong mã nguồn.",
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
        exampleVi: "Vui lòng xác nhận bạn có thể tham gia buổi demo ngày mai hay không.",
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
        exampleVi: "Khách hàng đã gửi phản hồi rất tích cực về thiết kế mới.",
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
        exampleVi: "Tôi vừa tạo một pull request cho mô-đun đăng nhập.",
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
        exampleVi: "Anh ấy cần 15 phút để chuẩn bị các slide thuyết trình.",
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
        exampleVi: "Bạn có thể chia sẻ tiến độ hiện tại của sprint được không?",
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
        exampleVi: "Bạn có thể giải thích luồng xác thực này hoạt động thế nào không?",
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
        exampleVi: "Luôn tạo bản sao lưu cơ sở dữ liệu trước khi chạy migration.",
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
        exampleVi: "Hôm nay tôi sẽ không thể tham dự buổi họp standup được.",
        optionsVi: ["tham gia, có mặt", "chủ trì, tổ chức", "rời khỏi", "hoãn lại"]
      },
      {
        id: "b1_01",
        word: "bottleneck",
        level: "B1",
        ipa: "/ˈbɒt.əl.nek/",
        type: "noun",
        meaningVi: "điểm nghẽn, nút thắt cổ chai",
        collocations: "performance bottleneck, clear a bottleneck, identify bottlenecks",
        example: "The database query is currently the main bottleneck in our system.",
        exampleVi: "Truy vấn cơ sở dữ liệu hiện đang là điểm nghẽn chính trong hệ thống của chúng ta.",
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
        exampleVi: "Chúng tôi đã làm việc xuyên đêm để khắc phục sự cố sập hệ thống thực tế.",
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
        exampleVi: "Chúng tôi dự kiến triển khai microservice mới tối nay vào lúc 10 giờ.",
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
        exampleVi: "Đội ngũ DevOps đang điều tra nguyên nhân gây mức sử dụng CPU tăng cao.",
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
        exampleVi: "Lập trình viên và kiểm thử viên phải phối hợp chặt chẽ trong mỗi sprint.",
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
        exampleVi: "Chúng ta nên ưu tiên vá các lỗ hổng bảo mật trước tiên.",
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
        exampleVi: "Việc duy trì mã nguồn sạch và tài liệu rõ ràng là vô cùng cần thiết.",
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
        exampleVi: "Do sự cố máy chủ, chúng tôi quyết định hoãn ngày phát hành.",
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
        exampleVi: "Đảm bảo rằng bản hiện thực hóa đáp ứng đầy đủ yêu cầu của khách hàng.",
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
        exampleVi: "Chúng tôi cần hai ngày để lập trình tính năng xác thực OAuth 2.0.",
        optionsVi: ["hiện thực hóa, thi hành", "đánh giá thiết kế", "bãi bỏ quy trình", "tìm kiếm tài liệu"]
      },
      {
        id: "b2_01",
        word: "scalability",
        level: "B2",
        ipa: "/ˌskeɪ.ləˈbɪl.ə.ti/",
        type: "noun",
        meaningVi: "khả năng mở rộng (hệ thống chịu tải)",
        collocations: "system scalability, horizontal scalability, ensure scalability",
        example: "Kubernetes provides outstanding scalability for containerized workloads.",
        exampleVi: "Kubernetes mang lại khả năng mở rộng vượt trội cho các ứng dụng container.",
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
        exampleVi: "Chúng tôi đã cấu hình dự phòng đa khu vực để loại bỏ các điểm lỗi đơn lẻ.",
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
        exampleVi: "Chuyển sang bộ xử lý AWS Graviton đã giúp tối ưu hóa ngân sách đám mây của chúng tôi.",
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
        exampleVi: "Triển khai sao lưu tự động giúp giảm thiểu rủi ro mất mát dữ liệu.",
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
        exampleVi: "Tất cả các dịch vụ đều phải tuân thủ các tiêu chuẩn bảo mật GDPR.",
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
        exampleVi: "Có một sự sai lệch đáng chú ý giữa nhật ký log và các bản ghi cơ sở dữ liệu.",
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
        exampleVi: "Chúng tôi đã xây dựng đường ống CI/CD để tinh gọn quy trình phát hành phần mềm.",
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
        exampleVi: "Không bao giờ được đánh đổi an ninh phần mềm chỉ vì mục đích đẩy nhanh bàn giao.",
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
        exampleVi: "Chúng tôi đã tiến hành nghiên cứu tính khả thi trước khi áp dụng framework đám mây mới.",
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
        exampleVi: "Trong thiết kế hệ thống, chọn tính nhất quán thay vì tính sẵn sàng là một sự đánh đổi kinh điển.",
        optionsVi: ["sự đánh đổi", "sự cân bằng hoàn hảo", "thỏa thuận thương mại", "lợi nhuận ròng"]
      }
    ]
  }
];

