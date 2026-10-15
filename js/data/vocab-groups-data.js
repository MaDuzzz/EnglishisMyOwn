// Kho nhóm từ vựng chuẩn hoá phân cấp A1 -> B2
// TỰ ĐỘNG TẠO BỞI build-vocab.mjs - KHÔNG SỬA TRỰC TIẾP FILE NÀY
// Để thêm từ mới, hãy tạo file .json hoặc .js mới trong thư mục: data/vocab/
// Tổng cộng: 22 nhóm chủ đề, 700 từ vựng và cụm từ.
// Phân bố chủ đề: {"daily":240,"work":180,"tech":180,"marketing":100}
// Phân bố trình độ: {"A2":156,"B1":268,"A1":57,"B2":219}

export const VOCAB_GROUPS = [
  {
    "groupId": "daily_conversation",
    "name": "Giao Tiếp Thường Nhật & Phản Xạ",
    "icon": "💬",
    "category": "daily",
    "level": "A2",
    "description": "Cụm từ cửa miệng, phrasal verbs và cách nói tự nhiên người bản xứ dùng mỗi ngày.",
    "words": [
      {
        "id": "daily_01",
        "word": "catch up",
        "level": "A2",
        "type": "phrasal verb",
        "ipa": "/kætʃ ʌp/",
        "meaningVi": "hàn huyên, cập nhật tin tức",
        "collocations": "catch up with friends, catch up on news, grab a coffee and catch up",
        "example": "Let's grab a coffee this Sunday and catch up!",
        "exampleVi": "Chủ nhật này đi cà phê rồi hàn huyên tâm sự nhé!",
        "optionsVi": [
          "hàn huyên, cập nhật tin tức",
          "bỏ cuộc giữa chừng",
          "tranh cãi gay gắt",
          "từ chối lời mời"
        ]
      },
      {
        "id": "daily_02",
        "word": "run into",
        "level": "A2",
        "type": "phrasal verb",
        "ipa": "/rʌn ˈɪn.tuː/",
        "meaningVi": "tình cờ bắt gặp",
        "collocations": "run into an old friend, run into trouble, unexpectedly run into",
        "example": "I ran into my former classmate at the supermarket yesterday.",
        "exampleVi": "Hôm qua tôi tình cờ gặp lại bạn học cũ ở siêu thị.",
        "optionsVi": [
          "tình cờ bắt gặp",
          "chủ động hẹn gặp",
          "tránh mặt ai đó",
          "gọi điện thoại"
        ]
      },
      {
        "id": "daily_03",
        "word": "make sense",
        "level": "A2",
        "type": "collocation",
        "ipa": "/meɪk sens/",
        "meaningVi": "hợp lý, có lý, dễ hiểu",
        "collocations": "that makes sense, make complete sense, doesn't make any sense",
        "example": "That explanation makes a lot of sense to me.",
        "exampleVi": "Lời giải thích đó đối với tôi rất hợp lý và dễ hiểu.",
        "optionsVi": [
          "hợp lý, có lý, dễ hiểu",
          "vô lý, ngớ ngẩn",
          "khó chấp nhận",
          "gây hiểu lầm"
        ]
      },
      {
        "id": "daily_04",
        "word": "figure out",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/ˈfɪɡ.jər aʊt/",
        "meaningVi": "nghĩ ra, tìm ra cách giải quyết",
        "collocations": "figure out a solution, figure out how it works, can't figure it out",
        "example": "Don't worry, we will figure out a way together.",
        "exampleVi": "Đừng lo, chúng ta sẽ cùng nhau tìm ra cách giải quyết.",
        "optionsVi": [
          "nghĩ ra, tìm ra cách giải quyết",
          "lờ đi, bỏ qua",
          "làm hỏng việc",
          "trì hoãn xử lý"
        ]
      },
      {
        "id": "daily_05",
        "word": "take your time",
        "level": "A1",
        "type": "phrase",
        "ipa": "/teɪk jɔːr taɪm/",
        "meaningVi": "cứ từ từ, thong thả",
        "collocations": "take your time doing it, no rush take your time",
        "example": "There is no rush, please take your time to read the menu.",
        "exampleVi": "Không vội đâu, bạn cứ thong thả xem thực đơn nhé.",
        "optionsVi": [
          "cứ từ từ, thong thả",
          "làm gấp lên",
          "hết giờ rồi",
          "đừng làm nữa"
        ]
      },
      {
        "id": "daily_06",
        "word": "keep in touch",
        "level": "A2",
        "type": "collocation",
        "ipa": "/kiːp ɪn tʌtʃ/",
        "meaningVi": "giữ liên lạc",
        "collocations": "keep in touch with someone, stay in touch, let's keep in touch",
        "example": "It was great seeing you! Let's keep in touch via Zalo.",
        "exampleVi": "Rất vui được gặp bạn! Hãy giữ liên lạc qua Zalo nhé.",
        "optionsVi": [
          "giữ liên lạc",
          "cắt đứt quan hệ",
          "chặn tin nhắn",
          "quên mặt nhau"
        ]
      },
      {
        "id": "daily_07",
        "word": "give a hand",
        "level": "A2",
        "type": "idiom",
        "ipa": "/ɡɪv eɪ hænd/",
        "meaningVi": "giúp đỡ một tay",
        "collocations": "give someone a hand, lend a helping hand, need a hand",
        "example": "Can you give me a hand with moving this heavy desk?",
        "exampleVi": "Bạn có thể phụ tôi một tay chuyển chiếc bàn nặng này không?",
        "optionsVi": [
          "giúp đỡ một tay",
          "vỗ tay khen ngợi",
          "bắt tay chào hỏi",
          "từ chối giúp"
        ]
      },
      {
        "id": "daily_08",
        "word": "by the way",
        "level": "A1",
        "type": "phrase",
        "ipa": "/baɪ ðə weɪ/",
        "meaningVi": "nhân tiện, tiện thể",
        "collocations": "by the way have you heard, by the way did you know",
        "example": "By the way, do you know what time the movie starts tonight?",
        "exampleVi": "Nhân tiện, bạn có biết tối nay phim bắt đầu lúc mấy giờ không?",
        "optionsVi": [
          "nhân tiện, tiện thể",
          "tất nhiên rồi",
          "ngoài ra",
          "ngược lại hoàn toàn"
        ]
      },
      {
        "id": "daily_09",
        "word": "appreciate",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈpriː.ʃi.eɪt/",
        "meaningVi": "trân trọng, cảm kích",
        "collocations": "really appreciate your help, highly appreciate, I'd appreciate it if",
        "example": "I truly appreciate your advice when I faced difficulties.",
        "exampleVi": "Tôi thực sự cảm kích lời khuyên của bạn khi tôi gặp khó khăn.",
        "optionsVi": [
          "trân trọng, cảm kích",
          "phàn nàn, chỉ trích",
          "coi thường",
          "lãng quên"
        ]
      },
      {
        "id": "daily_10",
        "word": "hang out",
        "level": "A2",
        "type": "phrasal verb",
        "ipa": "/hæŋ aʊt/",
        "meaningVi": "đi chơi, tụ tập",
        "collocations": "hang out with friends, hang out downtown, places to hang out",
        "example": "Do you want to hang out after work this Friday evening?",
        "exampleVi": "Tối thứ Sáu này tan làm bạn có muốn đi chơi tụ tập không?",
        "optionsVi": [
          "đi chơi, tụ tập",
          "ở nhà làm thêm",
          "đi công tác xa",
          "ngủ một mình"
        ]
      },
      {
        "id": "daily_11",
        "word": "cheer up",
        "level": "A2",
        "type": "phrasal verb",
        "ipa": "/tʃɪər ʌp/",
        "meaningVi": "phấn chấn lên, vui lên",
        "collocations": "cheer someone up, cheer up everything will be fine",
        "example": "Cheer up! Tomorrow is going to be a brand new day.",
        "exampleVi": "Vui vẻ lên nào! Ngày mai sẽ là một ngày hoàn toàn mới.",
        "optionsVi": [
          "phấn chấn lên, vui lên",
          "thất vọng tràn trề",
          "tức giận",
          "lo lắng tột độ"
        ]
      },
      {
        "id": "daily_12",
        "word": "as soon as possible",
        "level": "A2",
        "type": "phrase",
        "ipa": "/æz suːn æz ˈpɒs.ə.bəl/",
        "meaningVi": "càng sớm càng tốt",
        "collocations": "please reply as soon as possible, finish ASAP",
        "example": "Please call me back as soon as possible, it is quite urgent.",
        "exampleVi": "Vui lòng gọi lại cho tôi càng sớm càng tốt, việc này khá gấp.",
        "optionsVi": [
          "càng sớm càng tốt",
          "khi nào rảnh thì làm",
          "không cần gấp",
          "sang tuần sau"
        ]
      },
      {
        "id": "daily_13",
        "word": "look forward to",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/lʊk ˈfɔː.wəd tuː/",
        "meaningVi": "háo hức mong đợi",
        "collocations": "look forward to seeing you, look forward to the weekend",
        "example": "I really look forward to our upcoming summer trip.",
        "exampleVi": "Tôi thực sự rất mong đợi chuyến du lịch hè sắp tới của chúng mình.",
        "optionsVi": [
          "háo hức mong đợi",
          "lo sợ điều xảy ra",
          "quên mất lịch hẹn",
          "từ chối tham gia"
        ]
      },
      {
        "id": "daily_14",
        "word": "get along with",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/ɡet əˈlɒŋ wɪð/",
        "meaningVi": "hòa hợp, ăn ý",
        "collocations": "get along well with someone, easily get along",
        "example": "I get along very well with all my neighbors.",
        "exampleVi": "Tôi rất hòa thuận và ăn ý với tất cả hàng xóm của mình.",
        "optionsVi": [
          "hòa hợp, ăn ý",
          "xung đột cãi vã",
          "tránh mặt hoàn toàn",
          "cạnh tranh ganh đua"
        ]
      },
      {
        "id": "daily_15",
        "word": "drop by",
        "level": "A2",
        "type": "phrasal verb",
        "ipa": "/drɒp baɪ/",
        "meaningVi": "tạt qua, ghé thăm",
        "collocations": "drop by my place, feel free to drop by",
        "example": "Feel free to drop by my house anytime you are in Hanoi.",
        "exampleVi": "Cứ thoải mái tạt qua nhà tôi bất cứ lúc nào bạn ở Hà Nội nhé.",
        "optionsVi": [
          "tạt qua, ghé thăm",
          "ở lại dài ngày",
          "hủy chuyến đi",
          "chuyển nhà đi nơi khác"
        ]
      },
      {
        "id": "daily_16",
        "word": "never mind",
        "level": "A1",
        "type": "phrase",
        "ipa": "/ˈnev.ər maɪnd/",
        "meaningVi": "đừng bận tâm, không sao",
        "collocations": "never mind about that, it doesn't matter never mind",
        "example": "Never mind, I already found my car keys under the sofa.",
        "exampleVi": "Đừng bận tâm nữa, tôi đã tìm thấy chìa khóa xe dưới ghế sofa rồi.",
        "optionsVi": [
          "đừng bận tâm, không sao",
          "chú ý cẩn thận",
          "bắt buộc phải nhớ",
          "rất quan trọng"
        ]
      },
      {
        "id": "daily_17",
        "word": "make yourself at home",
        "level": "A2",
        "type": "idiom",
        "ipa": "/meɪk jɔːˈself æt həʊm/",
        "meaningVi": "cứ tự nhiên như ở nhà",
        "collocations": "please come in and make yourself at home",
        "example": "Please come in, have a seat, and make yourself at home!",
        "exampleVi": "Mời bạn vào nhà, ngồi xuống và cứ tự nhiên như ở nhà nhé!",
        "optionsVi": [
          "cứ tự nhiên như ở nhà",
          "giữ khoảng cách phép tắc",
          "dọn dẹp nhà cửa giúp",
          "ra về sớm"
        ]
      },
      {
        "id": "daily_18",
        "word": "hit the road",
        "level": "A2",
        "type": "idiom",
        "ipa": "/hɪt ðə rəʊd/",
        "meaningVi": "lên đường, khởi hành",
        "collocations": "time to hit the road, let's hit the road early",
        "example": "It's already 6 AM, let's hit the road before the traffic gets heavy.",
        "exampleVi": "Đã 6 giờ sáng rồi, chúng ta lên đường thôi kẻo tắc đường.",
        "optionsVi": [
          "lên đường, khởi hành",
          "va chạm giao thông",
          "quay xe trở về",
          "dừng xe bên đường"
        ]
      },
      {
        "id": "daily_19",
        "word": "so far so good",
        "level": "A2",
        "type": "phrase",
        "ipa": "/səʊ fɑːr səʊ ɡʊd/",
        "meaningVi": "mọi việc đến giờ vẫn ổn",
        "collocations": "how is it going? - so far so good",
        "example": "How is your new job? - So far so good, thanks!",
        "exampleVi": "Công việc mới thế nào rồi? - Đến giờ mọi thứ vẫn rất ổn, cảm ơn bạn!",
        "optionsVi": [
          "mọi việc đến giờ vẫn ổn",
          "rất tồi tệ và bế tắc",
          "quá xa xôi",
          "không thể tiến bộ"
        ]
      },
      {
        "id": "daily_20",
        "word": "call it a day",
        "level": "B1",
        "type": "idiom",
        "ipa": "/kɔːl ɪt eɪ deɪ/",
        "meaningVi": "nghỉ tay kết thúc công việc",
        "collocations": "let's call it a day, ready to call it a day",
        "example": "We have achieved our goal today; let's call it a day!",
        "exampleVi": "Hôm nay chúng ta đã đạt mục tiêu rồi; hãy nghỉ tay thôi nào!",
        "optionsVi": [
          "nghỉ tay kết thúc công việc",
          "tiếp tục làm thêm ca đêm",
          "bắt đầu ngày mới",
          "lên lịch làm việc"
        ]
      },
      {
        "id": "daily_21",
        "word": "under the weather",
        "level": "B1",
        "type": "idiom",
        "ipa": "/ˈʌn.dər ðə ˈweð.ər/",
        "meaningVi": "hơi khó ở, không khỏe",
        "collocations": "feel a bit under the weather, look under the weather",
        "example": "I'm feeling a bit under the weather today, so I will stay home.",
        "exampleVi": "Hôm nay tôi thấy trong người hơi khó ở nên tôi sẽ ở nhà nghỉ ngơi.",
        "optionsVi": [
          "hơi khó ở, không khỏe",
          "thời tiết đẹp",
          "tâm trạng hào hứng",
          "chuẩn bị đi dã ngoại"
        ]
      },
      {
        "id": "daily_22",
        "word": "keep an eye on",
        "level": "A2",
        "type": "idiom",
        "ipa": "/kiːp ən aɪ ɒn/",
        "meaningVi": "để mắt tới, trông chừng",
        "collocations": "keep an eye on my bag, keep an eye on the kids",
        "example": "Could you please keep an eye on my laptop while I go to the restroom?",
        "exampleVi": "Bạn có thể để mắt trông giúp laptop của tôi lúc tôi đi vệ sinh được không?",
        "optionsVi": [
          "để mắt tới, trông chừng",
          "nhìn chằm chằm khiêu khích",
          "mượn đồ dùng tạm",
          "giấu đồ đi nơi khác"
        ]
      },
      {
        "id": "daily_23",
        "word": "on the tip of my tongue",
        "level": "B1",
        "type": "idiom",
        "ipa": "/ɒn ðə tɪp əv maɪ tʌŋ/",
        "meaningVi": "nhớ mang máng sắp nhớ ra",
        "collocations": "his name is on the tip of my tongue",
        "example": "Her name is on the tip of my tongue, but I can't quite remember it.",
        "exampleVi": "Tên của cô ấy ngay trên đầu lưỡi tôi rồi mà chưa kịp nhớ ra.",
        "optionsVi": [
          "nhớ mang máng sắp nhớ ra",
          "hoàn toàn không biết",
          "không muốn nhắc tới",
          "nói năng lưu loát"
        ]
      },
      {
        "id": "daily_24",
        "word": "out of the blue",
        "level": "B1",
        "type": "idiom",
        "ipa": "/aʊt əv ðə bluː/",
        "meaningVi": "bất ngờ, đột ngột",
        "collocations": "call out of the blue, appeared out of the blue",
        "example": "She called me yesterday completely out of the blue after three years.",
        "exampleVi": "Hôm qua cô ấy bất ngờ gọi điện cho tôi sau suốt 3 năm bặt vô âm tín.",
        "optionsVi": [
          "bất ngờ, đột ngột",
          "được lên lịch từ trước",
          "chậm trễ nhiều ngày",
          "trong dự đoán"
        ]
      },
      {
        "id": "daily_25",
        "word": "bear in mind",
        "level": "B1",
        "type": "collocation",
        "ipa": "/beər ɪn maɪnd/",
        "meaningVi": "ghi nhớ, lưu tâm",
        "collocations": "bear in mind that, keep in mind, always bear in mind",
        "example": "Please bear in mind that the museum closes at 5 PM on weekdays.",
        "exampleVi": "Xin hãy ghi nhớ rằng bảo tàng đóng cửa lúc 5 giờ chiều vào các ngày trong tuần.",
        "optionsVi": [
          "ghi nhớ, lưu tâm",
          "bỏ ngoài tai",
          "nghi ngờ tính chính xác",
          "quên đi nhanh chóng"
        ]
      },
      {
        "id": "daily_26",
        "word": "ring a bell",
        "level": "B1",
        "type": "idiom",
        "ipa": "/rɪŋ eɪ bel/",
        "meaningVi": "nghe quen quen, gợi nhớ",
        "collocations": "that name rings a bell, does it ring a bell?",
        "example": "The cafe's name rings a bell, but I don't remember visiting it.",
        "exampleVi": "Tên quán cà phê đó nghe quen quen nhưng tôi không nhớ đã ghé chưa.",
        "optionsVi": [
          "nghe quen quen, gợi nhớ",
          "rung chuông báo động",
          "lạ lẫm hoàn toàn",
          "ầm ĩ chói tai"
        ]
      },
      {
        "id": "daily_27",
        "word": "safe and sound",
        "level": "A2",
        "type": "idiom",
        "ipa": "/seɪf ænd saʊnd/",
        "meaningVi": "bình an vô sự",
        "collocations": "arrive home safe and sound, safe and sound",
        "example": "We arrived at our hotel safe and sound after the stormy flight.",
        "exampleVi": "Chúng tôi đã đến khách sạn bình an vô sự sau chuyến bay gặp bão.",
        "optionsVi": [
          "bình an vô sự",
          "bị mất hết hành lý",
          "bị ốm nặng",
          "bị trễ chuyến"
        ]
      },
      {
        "id": "daily_28",
        "word": "take it easy",
        "level": "A1",
        "type": "phrase",
        "ipa": "/teɪk ɪt ˈiː.zi/",
        "meaningVi": "nghỉ ngơi thư giãn",
        "collocations": "just take it easy, take it easy this weekend",
        "example": "You have worked hard all week; just take it easy this Sunday.",
        "exampleVi": "Bạn đã làm việc vất vả cả tuần rồi; chủ nhật này cứ nghỉ ngơi thư giãn đi nhé.",
        "optionsVi": [
          "nghỉ ngơi thư giãn",
          "làm việc tăng ca",
          "lo lắng tột độ",
          "tập luyện quá sức"
        ]
      },
      {
        "id": "daily_29",
        "word": "no wonder",
        "level": "A2",
        "type": "phrase",
        "ipa": "/nəʊ ˈwʌn.dər/",
        "meaningVi": "thảo nào, hèn chi",
        "collocations": "no wonder you are tired, no wonder it failed",
        "example": "You didn't sleep all night? No wonder you look so exhausted!",
        "exampleVi": "Bạn thức trắng cả đêm ư? Thảo nào trông bạn kiệt sức đến thế!",
        "optionsVi": [
          "thảo nào, hèn chi",
          "thật là kỳ lạ",
          "không thể tin nổi",
          "hoàn toàn vô lý"
        ]
      },
      {
        "id": "daily_30",
        "word": "speak of the devil",
        "level": "B1",
        "type": "idiom",
        "ipa": "/spiːk əv ðə ˈdev.əl/",
        "meaningVi": "vừa nhắc tào tháo đến luôn",
        "collocations": "speak of the devil, here he comes!",
        "example": "We were just talking about David and, speak of the devil, here he comes!",
        "exampleVi": "Chúng tôi vừa mới nhắc đến David thì vừa nhắc tào tháo, anh ấy đến luôn!",
        "optionsVi": [
          "vừa nhắc tào tháo đến luôn",
          "nói xấu sau lưng",
          "kể chuyện ma quỷ",
          "tránh gặp mặt"
        ]
      }
    ]
  },
  {
    "groupId": "social_dining_food",
    "name": "Nhà Hàng, Ẩm Thực & Cà Phê",
    "icon": "🍽️",
    "category": "daily",
    "level": "A1",
    "description": "Gọi món, hương vị, thanh toán chia tiền và văn hóa giao tiếp bàn ăn.",
    "words": [
      {
        "id": "dining_01",
        "word": "split the bill",
        "level": "A2",
        "type": "collocation",
        "ipa": "/splɪt ðə bɪl/",
        "meaningVi": "chia tiền hóa đơn",
        "collocations": "split the bill evenly, let's split the bill, go Dutch",
        "example": "The dinner was delicious! Shall we split the bill?",
        "exampleVi": "Bữa tối ngon quá! Chúng mình chia đều tiền hóa đơn nhé?",
        "optionsVi": [
          "chia tiền hóa đơn",
          "để tôi bao trọn",
          "quên mang ví",
          "xin giảm giá"
        ]
      },
      {
        "id": "dining_02",
        "word": "recommend",
        "level": "A2",
        "type": "verb",
        "ipa": "/ˌrek.əˈmend/",
        "meaningVi": "gợi ý, tiến cử",
        "collocations": "highly recommend, can you recommend a dish, recommend to someone",
        "example": "What do you recommend for someone who loves spicy food?",
        "exampleVi": "Bạn có gợi ý món nào cho người thích ăn cay không?",
        "optionsVi": [
          "gợi ý, tiến cử",
          "cấm đoán",
          "chê bai món ăn",
          "từ chối phục vụ"
        ]
      },
      {
        "id": "dining_03",
        "word": "takeaway",
        "level": "A1",
        "type": "noun / adjective",
        "ipa": "/ˈteɪk.ə.weɪ/",
        "meaningVi": "đồ ăn mang về",
        "collocations": "order takeaway, takeaway food, for here or takeaway",
        "example": "I am too tired to cook tonight, let's grab some takeaway pizza.",
        "exampleVi": "Tối nay mệt quá không muốn nấu, mình mua bánh pizza mang về ăn đi.",
        "optionsVi": [
          "đồ ăn mang về",
          "ăn tại quán",
          "đồ ăn tự nấu",
          "thực phẩm ôi thiu"
        ]
      },
      {
        "id": "dining_04",
        "word": "receipt",
        "level": "A2",
        "type": "noun",
        "ipa": "/rɪˈsiːt/",
        "meaningVi": "hóa đơn, biên lai",
        "collocations": "keep the receipt, sales receipt, receipt for payment",
        "example": "Please keep your receipt in case you want an exchange.",
        "exampleVi": "Vui lòng giữ lại biên lai để phòng khi bạn muốn đổi hàng.",
        "optionsVi": [
          "hóa đơn, biên lai",
          "phiếu giảm giá",
          "vé vào cửa",
          "danh thiếp"
        ]
      },
      {
        "id": "dining_05",
        "word": "out of stock",
        "level": "B1",
        "type": "collocation",
        "ipa": "/aʊt əv stɒk/",
        "meaningVi": "hết hàng, hết kho",
        "collocations": "item is out of stock, temporarily out of stock, back in stock",
        "example": "I am sorry, this shirt size is currently out of stock.",
        "exampleVi": "Rất tiếc, kích cỡ áo này hiện tại đang tạm hết hàng.",
        "optionsVi": [
          "hết hàng, hết kho",
          "đang giảm giá mạnh",
          "hàng mới về",
          "hàng tồn kho lâu ngày"
        ]
      },
      {
        "id": "dining_06",
        "word": "refund",
        "level": "B1",
        "type": "noun / verb",
        "ipa": "/ˈriː.fʌnd/",
        "meaningVi": "hoàn lại tiền",
        "collocations": "full refund, request a refund, refund policy",
        "example": "The store offered a full refund because the item was damaged.",
        "exampleVi": "Cửa hàng đã hoàn lại toàn bộ tiền vì sản phẩm bị lỗi hỏng.",
        "optionsVi": [
          "hoàn lại tiền",
          "phạt thêm tiền",
          "thu thêm phí",
          "đổi sang hàng đắt hơn"
        ]
      },
      {
        "id": "dining_07",
        "word": "vegetarian",
        "level": "A2",
        "type": "noun / adjective",
        "ipa": "/ˌvedʒ.ɪˈteə.ri.ən/",
        "meaningVi": "món ăn chay",
        "collocations": "vegetarian diet, vegetarian options, strictly vegetarian",
        "example": "Does this Vietnamese restaurant have any vegetarian dishes?",
        "exampleVi": "Nhà hàng Việt Nam này có món ăn chay nào không?",
        "optionsVi": [
          "món ăn chay",
          "món thịt nướng",
          "món hải sản tươi sống",
          "món ăn cay nóng"
        ]
      },
      {
        "id": "dining_08",
        "word": "discount",
        "level": "A1",
        "type": "noun / verb",
        "ipa": "/ˈdɪs.kaʊnt/",
        "meaningVi": "khoản giảm giá",
        "collocations": "special discount, 20% discount, discount code",
        "example": "Members get a 10% discount on all purchases today.",
        "exampleVi": "Hội viên được giảm giá 10% cho tất cả đơn hàng hôm nay.",
        "optionsVi": [
          "khoản giảm giá",
          "phí vận chuyển",
          "tiền tip bồi bàn",
          "giá niêm yết gốc"
        ]
      },
      {
        "id": "dining_09",
        "word": "book a table",
        "level": "A1",
        "type": "collocation",
        "ipa": "/bʊk eɪ ˈteɪ.bəl/",
        "meaningVi": "đặt bàn trước",
        "collocations": "book a table for four, reserve a table in advance",
        "example": "I'd like to book a table for two tonight at 7:30 PM.",
        "exampleVi": "Tôi muốn đặt một bàn cho 2 người tối nay vào lúc 7 giờ 30.",
        "optionsVi": [
          "đặt bàn trước",
          "mua bàn ghế mới",
          "dọn dẹp bàn ăn",
          "hủy đơn đặt hàng"
        ]
      },
      {
        "id": "dining_10",
        "word": "appetizer",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈæp.ə.taɪ.zər/",
        "meaningVi": "món khai vị",
        "collocations": "order an appetizer, popular appetizers, light appetizer",
        "example": "We ordered spring rolls as an appetizer before the steak.",
        "exampleVi": "Chúng tôi gọi nem cuốn làm món khai vị trước khi dùng món bò bít tết.",
        "optionsVi": [
          "món khai vị",
          "món tráng miệng",
          "nước ngọt giải khát",
          "món ăn chính"
        ]
      },
      {
        "id": "dining_11",
        "word": "main course",
        "level": "A2",
        "type": "noun",
        "ipa": "/meɪn kɔːs/",
        "meaningVi": "món ăn chính",
        "collocations": "delicious main course, choose a main course",
        "example": "For the main course, I will have grilled salmon with vegetables.",
        "exampleVi": "Cho món chính, tôi sẽ dùng cá hồi nướng kèm rau củ.",
        "optionsVi": [
          "món ăn chính",
          "đồ uống có cồn",
          "bánh ngọt tráng miệng",
          "súp khai vị"
        ]
      },
      {
        "id": "dining_12",
        "word": "dessert",
        "level": "A1",
        "type": "noun",
        "ipa": "/dɪˈzɜːt/",
        "meaningVi": "món tráng miệng",
        "collocations": "dessert menu, have dessert, chocolate dessert",
        "example": "Would you like some ice cream or fruit for dessert?",
        "exampleVi": "Bạn có muốn dùng kem hay hoa quả cho món tráng miệng không?",
        "optionsVi": [
          "món tráng miệng",
          "sa mạc khô cằn",
          "bữa ăn trưa",
          "đồ ăn nhanh"
        ]
      },
      {
        "id": "dining_13",
        "word": "on the house",
        "level": "B1",
        "type": "idiom",
        "ipa": "/ɒn ðə haʊs/",
        "meaningVi": "quán chiêu đãi miễn phí",
        "collocations": "drinks are on the house, dessert on the house",
        "example": "Because it's your birthday, these two glasses of wine are on the house!",
        "exampleVi": "Vì hôm nay là sinh nhật bạn, hai ly rượu vang này là nhà hàng chiêu đãi miễn phí!",
        "optionsVi": [
          "quán chiêu đãi miễn phí",
          "tính thêm tiền dịch vụ",
          "mang về nhà ăn",
          "phải trả gấp đôi"
        ]
      },
      {
        "id": "dining_14",
        "word": "beverage",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈbev.ər.ɪdʒ/",
        "meaningVi": "đồ uống, thức uống",
        "collocations": "hot beverages, alcoholic beverage, beverage menu",
        "example": "A wide variety of cold beverages is served at the pool bar.",
        "exampleVi": "Rất nhiều loại thức uống mát lạnh được phục vụ tại quầy bar cạnh hồ bơi.",
        "optionsVi": [
          "đồ uống, thức uống",
          "thức ăn nhanh",
          "bàn ghế nội thất",
          "khăn trải bàn"
        ]
      },
      {
        "id": "dining_15",
        "word": "dine in",
        "level": "A2",
        "type": "phrasal verb",
        "ipa": "/daɪn ɪn/",
        "meaningVi": "ăn tại chỗ",
        "collocations": "dine in or take away, prefer to dine in",
        "example": "Will you be dining in or taking the food away?",
        "exampleVi": "Bạn sẽ dùng bữa tại quán hay mang đồ ăn về ạ?",
        "optionsVi": [
          "ăn tại chỗ",
          "mang về nhà",
          "giao hàng tận nơi",
          "tự nấu ăn"
        ]
      },
      {
        "id": "dining_16",
        "word": "refill",
        "level": "A2",
        "type": "noun / verb",
        "ipa": "/ˌriːˈfɪl/",
        "meaningVi": "làm đầy lại, châm thêm",
        "collocations": "free refill, get a refill, coffee refill",
        "example": "Iced tea comes with free refills at this diner.",
        "exampleVi": "Trà đá tại quán ăn này được châm thêm nước miễn phí.",
        "optionsVi": [
          "làm đầy lại, châm thêm",
          "thanh toán hóa đơn",
          "đổi loại nước khác",
          "trả lại ly"
        ]
      },
      {
        "id": "dining_17",
        "word": "savory",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈseɪ.vər.i/",
        "meaningVi": "đậm đà, mặn mà",
        "collocations": "savory snack, savory pies, sweet and savory",
        "example": "I prefer savory dishes like garlic chicken over sweet pastries.",
        "exampleVi": "Tôi thích các món mặn đậm đà như gà nướng tỏi hơn là bánh ngọt.",
        "optionsVi": [
          "đậm đà, mặn mà",
          "ngọt lịm",
          "đắng ngắt",
          "nhạt nhẽo vô vị"
        ]
      },
      {
        "id": "dining_18",
        "word": "spicy",
        "level": "A1",
        "type": "adjective",
        "ipa": "/ˈspaɪ.si/",
        "meaningVi": "cay nồng",
        "collocations": "spicy soup, extremely spicy, not too spicy",
        "example": "Can you make my noodle soup less spicy, please?",
        "exampleVi": "Bạn có thể làm món phở của tôi bớt cay đi một chút được không?",
        "optionsVi": [
          "cay nồng",
          "ngọt bùi",
          "chua gắt",
          "lạnh buốt"
        ]
      },
      {
        "id": "dining_19",
        "word": "allergy",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈæl.ə.dʒi/",
        "meaningVi": "sự dị ứng thực phẩm",
        "collocations": "food allergy, allergic to seafood, peanut allergy",
        "example": "Please let the server know if you have any peanut allergies.",
        "exampleVi": "Xin vui lòng báo cho nhân viên phục vụ nếu bạn bị dị ứng đậu phộng.",
        "optionsVi": [
          "sự dị ứng thực phẩm",
          "sở thích ăn uống",
          "thói quen dùng bữa",
          "chứng đói bụng"
        ]
      },
      {
        "id": "dining_20",
        "word": "culinary",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈkʌl.ɪ.nər.i/",
        "meaningVi": "thuộc ẩm thực, nấu nướng",
        "collocations": "culinary skills, culinary arts, culinary experience",
        "example": "Hue is widely famous for its rich and royal culinary traditions.",
        "exampleVi": "Huế nổi tiếng rộng khắp với truyền thống ẩm thực cung đình phong phú.",
        "optionsVi": [
          "thuộc ẩm thực, nấu nướng",
          "thuộc thể thao",
          "nghệ thuật hội họa",
          "kiến trúc cổ đại"
        ]
      },
      {
        "id": "dining_21",
        "word": "sparkling water",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈspɑː.klɪŋ ˌwɔː.tər/",
        "meaningVi": "nước khoáng có ga",
        "collocations": "sparkling or still water, bottle of sparkling water",
        "example": "Would you like still or sparkling water with your lunch?",
        "exampleVi": "Bạn muốn dùng nước khoáng thường hay nước có ga cho bữa trưa?",
        "optionsVi": [
          "nước khoáng có ga",
          "nước ép hoa quả",
          "rượu vang đỏ",
          "trà thảo mộc nóng"
        ]
      },
      {
        "id": "dining_22",
        "word": "chef's special",
        "level": "A2",
        "type": "noun",
        "ipa": "/ʃefs ˈspeʃ.əl/",
        "meaningVi": "món đặc biệt của bếp trưởng",
        "collocations": "order the chef's special, today's chef special",
        "example": "Tonight's chef special is pan-seared sea bass with saffron sauce.",
        "exampleVi": "Món đặc biệt của bếp trưởng tối nay là cá vược áp chảo sốt nhụy nghệ tây.",
        "optionsVi": [
          "món đặc biệt của bếp trưởng",
          "món ăn giá rẻ nhất",
          "đồ ăn thừa của bếp",
          "món ăn tự phục vụ"
        ]
      },
      {
        "id": "dining_23",
        "word": "bill please",
        "level": "A1",
        "type": "phrase",
        "ipa": "/bɪl pliːz/",
        "meaningVi": "cho xin hóa đơn tính tiền",
        "collocations": "could we have the bill please?",
        "example": "Excuse me, could we have the bill, please?",
        "exampleVi": "Xin lỗi cho chúng tôi xin hóa đơn thanh toán nhé!",
        "optionsVi": [
          "cho xin hóa đơn tính tiền",
          "cho xin thêm thực đơn",
          "gọi thêm món nữa",
          "yêu cầu gặp quản lý"
        ]
      },
      {
        "id": "dining_24",
        "word": "tip the waiter",
        "level": "A2",
        "type": "collocation",
        "ipa": "/tɪp ðə ˈweɪ.tər/",
        "meaningVi": "cho tiền boa nhân viên",
        "collocations": "leave a tip, generous tip, tip 15 percent",
        "example": "The service was wonderful, so we decided to tip the waiter generously.",
        "exampleVi": "Dịch vụ quá tuyệt vời nên chúng tôi quyết định boa hậu hĩnh cho nhân viên.",
        "optionsVi": [
          "cho tiền boa nhân viên",
          "khiếu nại nhân viên",
          "yêu cầu hoàn tiền",
          "bỏ trốn không trả tiền"
        ]
      },
      {
        "id": "dining_25",
        "word": "mild",
        "level": "A2",
        "type": "adjective",
        "ipa": "/maɪld/",
        "meaningVi": "cay nhẹ, dịu",
        "collocations": "mild flavor, mild curry, mild chili",
        "example": "If you don't like hot spices, choose the mild curry option.",
        "exampleVi": "Nếu bạn không ăn được cay nồng, hãy chọn món cà ri vị cay nhẹ nhé.",
        "optionsVi": [
          "cay nhẹ, dịu",
          "cay xé lưỡi",
          "mặn chát",
          "ngọt lịm"
        ]
      },
      {
        "id": "dining_26",
        "word": "cutlery",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈkʌt.lər.i/",
        "meaningVi": "bộ dao thìa dĩa",
        "collocations": "set of cutlery, stainless steel cutlery",
        "example": "Could you bring us an extra set of cutlery, please?",
        "exampleVi": "Bạn có thể mang cho chúng tôi thêm một bộ dao thìa dĩa được không?",
        "optionsVi": [
          "bộ dao thìa dĩa",
          "ly uống rượu",
          "khăn giấy ướt",
          "khay đựng thức ăn"
        ]
      },
      {
        "id": "dining_27",
        "word": "seasoning",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈsiː.zən.ɪŋ/",
        "meaningVi": "gia vị nêm nếm",
        "collocations": "add some seasoning, special seasoning, natural seasonings",
        "example": "A little bit of black pepper seasoning enhances the soup's flavor.",
        "exampleVi": "Nêm thêm một chút tiêu đen sẽ làm dậy hương vị của món súp.",
        "optionsVi": [
          "gia vị nêm nếm",
          "thời tiết các mùa",
          "dụng cụ làm bếp",
          "nước đá lạnh"
        ]
      },
      {
        "id": "dining_28",
        "word": "go Dutch",
        "level": "B1",
        "type": "idiom",
        "ipa": "/ɡəʊ dʌtʃ/",
        "meaningVi": "tiền ai nấy trả / cưa đôi",
        "collocations": "let's go Dutch tonight",
        "example": "When dining with colleagues, we usually go Dutch.",
        "exampleVi": "Khi đi ăn cùng đồng nghiệp, chúng tôi thường cưa đôi ai nấy tự trả phần mình.",
        "optionsVi": [
          "tiền ai nấy trả / cưa đôi",
          "nhờ một người bao",
          "quán mời miễn phí",
          "thanh toán bằng ngoại tệ"
        ]
      },
      {
        "id": "dining_29",
        "word": "portion",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈpɔː.ʃən/",
        "meaningVi": "khẩu phần, suất ăn",
        "collocations": "generous portion, small portion, portion size",
        "example": "The portions at this family restaurant are very generous.",
        "exampleVi": "Khẩu phần ăn tại nhà hàng gia đình này rất đầy đặn.",
        "optionsVi": [
          "khẩu phần, suất ăn",
          "giá niêm yết",
          "tên món ăn",
          "cách chế biến"
        ]
      },
      {
        "id": "dining_30",
        "word": "dietary restrictions",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈdaɪ.ə.tər.i rɪˈstrɪk.ʃənz/",
        "meaningVi": "chế độ kiêng khem ăn uống",
        "collocations": "have dietary restrictions, accommodate dietary restrictions",
        "example": "Please inform our catering staff in advance if you have any dietary restrictions.",
        "exampleVi": "Xin vui lòng thông báo trước cho đội ngũ bếp nếu bạn có chế độ kiêng khem ăn uống nào.",
        "optionsVi": [
          "chế độ kiêng khem ăn uống",
          "thói quen ăn vặt",
          "yêu cầu hóa đơn đỏ",
          "dịch vụ giao hàng"
        ]
      }
    ]
  },
  {
    "groupId": "shopping_services",
    "name": "Mua Sắm, Thanh Toán & Dịch Vụ",
    "icon": "🛍️",
    "category": "daily",
    "level": "A2",
    "description": "Giá cả, trả giá, đổi trả hàng, thanh toán online, thẻ tín dụng và dịch vụ khách hàng.",
    "words": [
      {
        "id": "shop_01",
        "word": "bargain",
        "level": "B1",
        "type": "noun / verb",
        "ipa": "/ˈbɑː.ɡɪn/",
        "meaningVi": "món hời giá rẻ / mặc cả",
        "collocations": "real bargain, bargain hunter, bargain for a better price",
        "example": "At only ten dollars, this leather jacket was a real bargain!",
        "exampleVi": "Chỉ có 10 đô, chiếc áo khoác da này đúng là một món hời lớn!",
        "optionsVi": [
          "món hời giá rẻ / mặc cả",
          "mặt hàng đắt đỏ",
          "hàng kém chất lượng",
          "hàng cấm nhập khẩu"
        ]
      },
      {
        "id": "shop_02",
        "word": "warranty",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈwɒr.ən.ti/",
        "meaningVi": "chế độ bảo hành",
        "collocations": "two-year warranty, under warranty, extended warranty",
        "example": "This smartphone comes with a 12-month manufacturer warranty.",
        "exampleVi": "Chiếc điện thoại thông minh này đi kèm chế độ bảo hành 12 tháng từ nhà sản xuất.",
        "optionsVi": [
          "chế độ bảo hành",
          "hướng dẫn lắp đặt",
          "hóa đơn thanh toán",
          "phí vận chuyển"
        ]
      },
      {
        "id": "shop_03",
        "word": "customer service",
        "level": "A2",
        "type": "collocation",
        "ipa": "/ˈkʌs.tə.mər ˈsɜː.vɪs/",
        "meaningVi": "chăm sóc khách hàng",
        "collocations": "excellent customer service, contact customer service, customer service hotline",
        "example": "Their customer service team resolved my issue within ten minutes.",
        "exampleVi": "Đội ngũ chăm sóc khách hàng của họ đã giải quyết trục trặc của tôi trong vòng 10 phút.",
        "optionsVi": [
          "chăm sóc khách hàng",
          "phòng kinh doanh",
          "bộ phận kiểm toán",
          "đội ngũ kỹ thuật viên"
        ]
      },
      {
        "id": "shop_04",
        "word": "fitting room",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈfɪt.ɪŋ ˌruːm/",
        "meaningVi": "phòng thử đồ",
        "collocations": "where is the fitting room, try it on in the fitting room",
        "example": "Excuse me, where are the fitting rooms located?",
        "exampleVi": "Xin lỗi cho tôi hỏi phòng thử đồ nằm ở vị trí nào ạ?",
        "optionsVi": [
          "phòng thử đồ",
          "quầy thanh toán",
          "nhà kho chứa hàng",
          "phòng nhân viên"
        ]
      },
      {
        "id": "shop_05",
        "word": "exchange policy",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ɪksˈtʃeɪndʒ ˈpɒl.ə.si/",
        "meaningVi": "chính sách đổi hàng",
        "collocations": "store exchange policy, 30-day exchange policy",
        "example": "According to their exchange policy, items can be exchanged within 14 days.",
        "exampleVi": "Theo chính sách đổi hàng, các sản phẩm có thể được đổi trong vòng 14 ngày.",
        "optionsVi": [
          "chính sách đổi hàng",
          "quy định giảm giá",
          "điều khoản bảo mật",
          "phương thức thanh toán"
        ]
      },
      {
        "id": "shop_06",
        "word": "clearance sale",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈklɪə.rəns seɪl/",
        "meaningVi": "đợt bán xả hàng",
        "collocations": "massive clearance sale, end of season clearance",
        "example": "I bought these designer shoes at 70% off during their clearance sale.",
        "exampleVi": "Tôi đã mua đôi giày hàng hiệu này giảm 70% trong đợt bán xả kho.",
        "optionsVi": [
          "đợt bán xả hàng",
          "hàng mới ra mắt",
          "đợt tăng giá đồng loạt",
          "hàng đấu giá đặc biệt"
        ]
      },
      {
        "id": "shop_07",
        "word": "in stock",
        "level": "A2",
        "type": "collocation",
        "ipa": "/ɪn stɒk/",
        "meaningVi": "còn hàng sẵn",
        "collocations": "currently in stock, check if in stock, plenty in stock",
        "example": "We have this camera model in stock in both black and silver colors.",
        "exampleVi": "Chúng tôi còn sẵn mẫu máy ảnh này trong kho ở cả hai màu đen và bạc.",
        "optionsVi": [
          "còn hàng sẵn",
          "hết hàng hoàn toàn",
          "ngừng sản xuất",
          "đang bị thu hồi"
        ]
      },
      {
        "id": "shop_08",
        "word": "cash on delivery",
        "level": "B1",
        "type": "collocation",
        "ipa": "/kæʃ ɒn dɪˈlɪv.ər.i/",
        "meaningVi": "thanh toán khi nhận hàng (COD)",
        "collocations": "pay via cash on delivery, choose COD option",
        "example": "Many online shoppers in Vietnam still prefer cash on delivery.",
        "exampleVi": "Nhiều người mua sắm trực tuyến ở Việt Nam vẫn chuộng hình thức trả tiền mặt khi nhận hàng.",
        "optionsVi": [
          "thanh toán khi nhận hàng (COD)",
          "chuyển khoản trả trước",
          "mua trả góp không lãi",
          "thanh toán bằng ví điện tử"
        ]
      },
      {
        "id": "shop_09",
        "word": "tracking number",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈtræk.ɪŋ ˌnʌm.bər/",
        "meaningVi": "mã vận đơn tra cứu",
        "collocations": "parcel tracking number, check tracking number online",
        "example": "You can track the shipment status using this 10-digit tracking number.",
        "exampleVi": "Bạn có thể theo dõi tình trạng kiện hàng bằng mã vận đơn gồm 10 chữ số này.",
        "optionsVi": [
          "mã vận đơn tra cứu",
          "mã giảm giá voucher",
          "số tài khoản ngân hàng",
          "mã số thuế cá nhân"
        ]
      },
      {
        "id": "shop_10",
        "word": "promotional code",
        "level": "A2",
        "type": "noun",
        "ipa": "/prəˈməʊ.ʃən.əl kəʊd/",
        "meaningVi": "mã khuyến mãi giảm giá",
        "collocations": "apply promotional code, enter promo code at checkout",
        "example": "Enter the promotional code 'SUMMER20' to get 20% off your cart.",
        "exampleVi": "Nhập mã khuyến mãi 'SUMMER20' để được giảm 20% giỏ hàng của bạn.",
        "optionsVi": [
          "mã khuyến mãi giảm giá",
          "mã bảo mật OTP",
          "mật khẩu đăng nhập",
          "mã số bưu điện"
        ]
      },
      {
        "id": "shop_11",
        "word": "installment",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪnˈstɔːl.mənt/",
        "meaningVi": "trả góp định kỳ",
        "collocations": "monthly installment, pay in installments, zero interest installment",
        "example": "I bought the MacBook through a 6-month zero-interest installment plan.",
        "exampleVi": "Tôi đã mua chiếc MacBook thông qua chương trình trả góp 6 tháng lãi suất 0%.",
        "optionsVi": [
          "trả góp định kỳ",
          "thanh toán toàn bộ một lần",
          "đặt cọc giữ chỗ",
          "vay mượn nợ xấu"
        ]
      },
      {
        "id": "shop_12",
        "word": "checkout counter",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈtʃek.aʊt ˈkaʊn.tər/",
        "meaningVi": "quầy thanh toán thu ngân",
        "collocations": "head to checkout counter, line at the checkout counter",
        "example": "Please bring your items to the checkout counter to pay.",
        "exampleVi": "Xin vui lòng mang đồ của bạn ra quầy thu ngân để thanh toán.",
        "optionsVi": [
          "quầy thanh toán thu ngân",
          "quầy thông tin",
          "cửa thoát hiểm",
          "khu vực bảo vệ"
        ]
      },
      {
        "id": "shop_13",
        "word": "brand new",
        "level": "A2",
        "type": "adjective",
        "ipa": "/brænd njuː/",
        "meaningVi": "mới toanh, nguyên kiện",
        "collocations": "brand new car, 100% brand new, brand new condition",
        "example": "She bought a brand new laptop for her university studies.",
        "exampleVi": "Cô ấy đã mua một chiếc laptop mới toanh để phục vụ việc học đại học.",
        "optionsVi": [
          "mới toanh, nguyên kiện",
          "đã qua sử dụng",
          "hàng tồn kho cũ",
          "hàng nhái thương hiệu"
        ]
      },
      {
        "id": "shop_14",
        "word": "second-hand",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˌsek.əndˈhænd/",
        "meaningVi": "đồ cũ đã qua sử dụng",
        "collocations": "second-hand bookstore, buy second-hand, second-hand clothes",
        "example": "You can save a lot of money by buying second-hand textbooks.",
        "exampleVi": "Bạn có thể tiết kiệm rất nhiều tiền bằng cách mua sách giáo khoa cũ.",
        "optionsVi": [
          "đồ cũ đã qua sử dụng",
          "hàng đắt tiền chính hãng",
          "hàng sản xuất thủ công",
          "đồ dùng bị cấm"
        ]
      },
      {
        "id": "shop_15",
        "word": "counterfeit",
        "level": "B2",
        "type": "adjective / noun",
        "ipa": "/ˈkaʊn.tə.fɪt/",
        "meaningVi": "hàng giả, hàng nhái",
        "collocations": "counterfeit goods, spot counterfeit products, beware of counterfeits",
        "example": "Always buy from authorized retailers to avoid buying counterfeit goods.",
        "exampleVi": "Hãy luôn mua từ các đại lý ủy quyền để tránh mua phải hàng giả hàng nhái.",
        "optionsVi": [
          "hàng giả, hàng nhái",
          "hàng nhập khẩu chính ngạch",
          "hàng xách tay",
          "hàng thủ công mỹ nghệ"
        ]
      },
      {
        "id": "shop_16",
        "word": "grocery store",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈɡrəʊ.sər.i stɔːr/",
        "meaningVi": "cửa hàng tạp hóa",
        "collocations": "local grocery store, run to the grocery store",
        "example": "I need to stop by the grocery store to pick up milk and eggs.",
        "exampleVi": "Tôi cần tạt qua cửa hàng tạp hóa để mua một ít sữa và trứng gà.",
        "optionsVi": [
          "cửa hàng tạp hóa",
          "tiệm may quần áo",
          "tiệm vàng bạc",
          "hiệu thuốc tây"
        ]
      },
      {
        "id": "shop_17",
        "word": "delivery fee",
        "level": "A2",
        "type": "noun",
        "ipa": "/dɪˈlɪv.ər.i fiː/",
        "meaningVi": "phí vận chuyển giao hàng",
        "collocations": "free delivery fee, delivery fee included, standard delivery fee",
        "example": "Orders over 500,000 VND enjoy free delivery fee nationwide.",
        "exampleVi": "Đơn hàng trên 500.000 VNĐ được miễn phí giao hàng trên toàn quốc.",
        "optionsVi": [
          "phí vận chuyển giao hàng",
          "tiền đóng bảo hiểm",
          "thuế giá trị gia tăng",
          "tiền phạt chậm nộp"
        ]
      },
      {
        "id": "shop_18",
        "word": "loyalty points",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈlɔɪ.əl.ti pɔɪnts/",
        "meaningVi": "điểm tích lũy thành viên",
        "collocations": "accumulate loyalty points, redeem loyalty points",
        "example": "You can redeem your loyalty points for a free movie ticket.",
        "exampleVi": "Bạn có thể đổi điểm tích lũy thành viên để lấy một vé xem phim miễn phí.",
        "optionsVi": [
          "điểm tích lũy thành viên",
          "khoản tiền phạt vi phạm",
          "điểm tín nhiệm ngân hàng",
          "tiền hoa hồng đại lý"
        ]
      },
      {
        "id": "shop_19",
        "word": "retail price",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈriː.teɪl praɪs/",
        "meaningVi": "giá bán lẻ niêm yết",
        "collocations": "suggested retail price, below retail price",
        "example": "The suggested retail price of the new gaming console is $499.",
        "exampleVi": "Giá bán lẻ đề xuất của máy chơi game mới là 499 đô la.",
        "optionsVi": [
          "giá bán lẻ niêm yết",
          "giá nhập buôn sỉ",
          "chi phí sản xuất",
          "thuế hải quan"
        ]
      },
      {
        "id": "shop_20",
        "word": "wholesale",
        "level": "B2",
        "type": "noun / adjective",
        "ipa": "/ˈhəʊl.seɪl/",
        "meaningVi": "bán buôn, bán sỉ",
        "collocations": "wholesale price, wholesale market, buy wholesale",
        "example": "We purchase raw coffee beans at wholesale prices directly from Dak Lak farmers.",
        "exampleVi": "Chúng tôi mua hạt cà phê thô theo giá bán buôn trực tiếp từ nông dân Đắk Lắk.",
        "optionsVi": [
          "bán buôn, bán sỉ",
          "bán lẻ từng chiếc",
          "bán thanh lý lỗ vốn",
          "bán trả góp"
        ]
      },
      {
        "id": "shop_21",
        "word": "department store",
        "level": "A2",
        "type": "noun",
        "ipa": "/dɪˈpɑːt.mənt stɔːr/",
        "meaningVi": "trung tâm thương mại",
        "collocations": "luxury department store, shop at the department store",
        "example": "Vincom Center is one of the largest department stores in the city.",
        "exampleVi": "Vincom Center là một trong những trung tâm thương mại lớn nhất thành phố.",
        "optionsVi": [
          "trung tâm thương mại",
          "chợ cóc dân sinh",
          "tiệm đồ cũ",
          "nhà kho hải quan"
        ]
      },
      {
        "id": "shop_22",
        "word": "shopping cart",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈʃɒp.ɪŋ kɑːt/",
        "meaningVi": "xe đẩy / giỏ hàng",
        "collocations": "add to shopping cart, empty shopping cart, push a shopping cart",
        "example": "Click the button to add this book to your digital shopping cart.",
        "exampleVi": "Bấm nút để thêm cuốn sách này vào giỏ hàng trực tuyến của bạn.",
        "optionsVi": [
          "xe đẩy / giỏ hàng",
          "phiếu thu tiền",
          "quầy thanh toán",
          "kệ trưng bày sản phẩm"
        ]
      },
      {
        "id": "shop_23",
        "word": "cash back",
        "level": "B1",
        "type": "noun",
        "ipa": "/kæʃ bæk/",
        "meaningVi": "tiền hoàn lại chi tiêu",
        "collocations": "5% cash back, credit card with cash back",
        "example": "This credit card gives you 3% cash back on all supermarket groceries.",
        "exampleVi": "Chiếc thẻ tín dụng này hoàn tiền 3% cho mọi chi tiêu tại siêu thị.",
        "optionsVi": [
          "tiền hoàn lại chi tiêu",
          "tiền phạt chậm nộp",
          "phí rút tiền mặt",
          "khoản vay tín chấp"
        ]
      },
      {
        "id": "shop_24",
        "word": "transaction",
        "level": "B2",
        "type": "noun",
        "ipa": "/trænˈzæk.ʃən/",
        "meaningVi": "giao dịch thanh toán",
        "collocations": "secure transaction, transaction history, complete the transaction",
        "example": "Your transaction was successful; an email receipt has been sent.",
        "exampleVi": "Giao dịch của bạn đã thành công; biên lai qua email đã được gửi.",
        "optionsVi": [
          "giao dịch thanh toán",
          "khiếu nại bồi thường",
          "báo cáo tài chính",
          "hợp đồng thuê nhà"
        ]
      },
      {
        "id": "shop_25",
        "word": "expired",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ɪkˈspaɪəd/",
        "meaningVi": "hết hạn sử dụng",
        "collocations": "expired product, expired coupon, passport has expired",
        "example": "Do not drink this milk carton; the expiration date was last week.",
        "exampleVi": "Đừng uống hộp sữa này; hạn sử dụng của nó đã hết từ tuần trước rồi.",
        "optionsVi": [
          "hết hạn sử dụng",
          "vẫn còn mới toanh",
          "đang được giảm giá",
          "vừa mới sản xuất"
        ]
      },
      {
        "id": "shop_26",
        "word": "try on",
        "level": "A1",
        "type": "phrasal verb",
        "ipa": "/traɪ ɒn/",
        "meaningVi": "mặc thử / đi thử",
        "collocations": "try on a dress, can I try this on?",
        "example": "May I try on these blue jeans in size 32, please?",
        "exampleVi": "Tôi có thể mặc thử chiếc quần bò màu xanh cỡ 32 này được không ạ?",
        "optionsVi": [
          "mặc thử / đi thử",
          "mua ngay không đắn đo",
          "giặt sạch đồ",
          "cắt sửa quần áo"
        ]
      },
      {
        "id": "shop_27",
        "word": "window shopping",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈwɪn.dəʊ ˌʃɒp.ɪŋ/",
        "meaningVi": "đi dạo ngắm đồ không mua",
        "collocations": "go window shopping, enjoy window shopping",
        "example": "We had no money to spend, so we just went window shopping downtown.",
        "exampleVi": "Chúng tôi không có tiền tiêu nên chỉ đi dạo ngắm đồ qua cửa kính ở phố.",
        "optionsVi": [
          "đi dạo ngắm đồ không mua",
          "mua sắm thả ga",
          "lắp đặt cửa kính mới",
          "dọn dẹp cửa hàng"
        ]
      },
      {
        "id": "shop_28",
        "word": "invoice",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈɪn.vɔɪs/",
        "meaningVi": "hóa đơn tài chính VAT",
        "collocations": "issue an invoice, pay the invoice, tax invoice",
        "example": "Please issue a company tax invoice under this business tax ID.",
        "exampleVi": "Vui lòng xuất hóa đơn thuế giá trị gia tăng theo mã số thuế doanh nghiệp này.",
        "optionsVi": [
          "hóa đơn tài chính VAT",
          "phiếu bảo hành",
          "hợp đồng thử việc",
          "giấy chứng nhận xuất xứ"
        ]
      },
      {
        "id": "shop_29",
        "word": "price tag",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈpraɪs tæɡ/",
        "meaningVi": "mác giá, tem giá",
        "collocations": "check the price tag, remove the price tag",
        "example": "I liked the handbag until I saw its hefty $800 price tag.",
        "exampleVi": "Tôi rất thích chiếc túi xách đó cho đến khi nhìn thấy mác giá đắt đỏ 800 đô la.",
        "optionsVi": [
          "mác giá, tem giá",
          "nhãn hiệu thời trang",
          "thẻ giảm giá",
          "phiếu thu tiền"
        ]
      },
      {
        "id": "shop_30",
        "word": "overpriced",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˌəʊ.vəˈpraɪst/",
        "meaningVi": "quá đắt đỏ, bị đẩy giá",
        "collocations": "grossly overpriced, overpriced coffee, avoid overpriced tourist traps",
        "example": "Ten dollars for a simple bottle of water at the airport is totally overpriced.",
        "exampleVi": "Mười đô la cho một chai nước lọc ở sân bay là mức giá quá đắt đỏ bất hợp lý.",
        "optionsVi": [
          "quá đắt đỏ, bị đẩy giá",
          "giá rẻ bất ngờ",
          "chất lượng vượt trội",
          "được giảm giá mạnh"
        ]
      }
    ]
  },
  {
    "groupId": "travel_transit_directions",
    "name": "Du Lịch, Di Chuyển & Hỏi Đường",
    "icon": "✈️",
    "category": "daily",
    "level": "A2",
    "description": "Sân bay, ga tàu, đặt phòng khách sạn, taxi và các mẫu câu hỏi chỉ đường tự tin.",
    "words": [
      {
        "id": "travel_01",
        "word": "boarding pass",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈbɔː.dɪŋ ˌpɑːs/",
        "meaningVi": "thẻ lên máy bay",
        "collocations": "print boarding pass, show your boarding pass, digital boarding pass",
        "example": "Please have your passport and boarding pass ready at the gate.",
        "exampleVi": "Vui lòng chuẩn bị sẵn hộ chiếu và thẻ lên máy bay tại cửa khởi hành.",
        "optionsVi": [
          "thẻ lên máy bay",
          "hóa đơn mua vé",
          "bảo hiểm du lịch",
          "thẻ căn cước công dân"
        ]
      },
      {
        "id": "travel_02",
        "word": "book in advance",
        "level": "B1",
        "type": "collocation",
        "ipa": "/bʊk ɪn ədˈvɑːns/",
        "meaningVi": "đặt chỗ trước",
        "collocations": "book tickets in advance, strongly advised to book in advance",
        "example": "Hotel rooms fill up quickly in peak season, so book in advance.",
        "exampleVi": "Phòng khách sạn kín rất nhanh vào mùa cao điểm, vì vậy hãy đặt trước.",
        "optionsVi": [
          "đặt chỗ trước",
          "đến nơi mới mua vé",
          "hủy chuyến đi",
          "trả phòng trễ"
        ]
      },
      {
        "id": "travel_03",
        "word": "go straight ahead",
        "level": "A1",
        "type": "phrase",
        "ipa": "/ɡəʊ streɪt əˈhed/",
        "meaningVi": "đi thẳng về phía trước",
        "collocations": "go straight ahead for 200 meters, then turn left",
        "example": "Go straight ahead until you see the bank on your left side.",
        "exampleVi": "Cứ đi thẳng về phía trước cho đến khi bạn thấy ngân hàng ở bên tay trái.",
        "optionsVi": [
          "đi thẳng về phía trước",
          "quay đầu xe lại",
          "rẽ phải ngay lập tức",
          "dừng xe bên đường"
        ]
      },
      {
        "id": "travel_04",
        "word": "delay",
        "level": "A2",
        "type": "noun / verb",
        "ipa": "/dɪˈleɪ/",
        "meaningVi": "trì hoãn, chậm trễ",
        "collocations": "flight delay, delayed by two hours, without delay",
        "example": "Our flight to Tokyo was delayed due to heavy storms.",
        "exampleVi": "Chuyến bay tới Tokyo của chúng tôi bị hoãn do bão lớn.",
        "optionsVi": [
          "trì hoãn, chậm trễ",
          "khởi hành sớm hơn",
          "hạ cánh an toàn",
          "bay đúng giờ"
        ]
      },
      {
        "id": "travel_05",
        "word": "luggage",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈlʌɡ.ɪdʒ/",
        "meaningVi": "hành lý xách tay / vali",
        "collocations": "carry-on luggage, check-in luggage, lost luggage",
        "example": "You are allowed one piece of carry-on luggage inside the cabin.",
        "exampleVi": "Bạn được phép mang một kiện hành lý xách tay vào khoang máy bay.",
        "optionsVi": [
          "hành lý xách tay / vali",
          "hàng cứu trợ",
          "giấy tờ xuất nhập cảnh",
          "quà lưu niệm"
        ]
      },
      {
        "id": "travel_06",
        "word": "check in",
        "level": "A1",
        "type": "phrasal verb",
        "ipa": "/tʃek ɪn/",
        "meaningVi": "làm thủ tục nhận phòng",
        "collocations": "check in online, hotel check-in time, check in at the desk",
        "example": "We can check in to our hotel room starting at 2:00 PM.",
        "exampleVi": "Chúng tôi có thể làm thủ tục nhận phòng khách sạn bắt đầu từ 2 giờ chiều.",
        "optionsVi": [
          "làm thủ tục nhận phòng",
          "thanh toán trả phòng",
          "đặt cọc giữ chỗ",
          "gọi dịch vụ dọn phòng"
        ]
      },
      {
        "id": "travel_07",
        "word": "destination",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌdes.tɪˈneɪ.ʃən/",
        "meaningVi": "điểm đến",
        "collocations": "final destination, tourist destination, reach the destination",
        "example": "Da Nang is one of the most popular travel destinations in Vietnam.",
        "exampleVi": "Đà Nẵng là một trong những điểm đến du lịch nổi tiếng nhất ở Việt Nam.",
        "optionsVi": [
          "điểm đến",
          "nơi xuất phát ban đầu",
          "trạm trung chuyển",
          "bản đồ chỉ đường"
        ]
      },
      {
        "id": "travel_08",
        "word": "take off",
        "level": "A2",
        "type": "phrasal verb",
        "ipa": "/teɪk ɒf/",
        "meaningVi": "cất cánh bay lên",
        "collocations": "plane takes off, take off on time, ready for take off",
        "example": "The aircraft is scheduled to take off at 9:15 AM sharp.",
        "exampleVi": "Máy bay dự kiến sẽ cất cánh đúng vào lúc 9 giờ 15 phút sáng.",
        "optionsVi": [
          "cất cánh bay lên",
          "hạ cánh khẩn cấp",
          "quay đầu hạ cánh",
          "bị hủy chuyến"
        ]
      },
      {
        "id": "travel_09",
        "word": "landing",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈlæn.dɪŋ/",
        "meaningVi": "sự hạ cánh tiếp đất",
        "collocations": "smooth landing, emergency landing, landing gear",
        "example": "The pilot made a remarkably smooth landing despite the crosswinds.",
        "exampleVi": "Cơ trưởng đã thực hiện cú hạ cánh êm ái đáng kinh ngạc dù có gió tạt ngang.",
        "optionsVi": [
          "sự hạ cánh tiếp đất",
          "lúc cất cánh",
          "bay qua vùng nhiễu động",
          "quá cảnh sân bay"
        ]
      },
      {
        "id": "travel_10",
        "word": "transfer",
        "level": "B1",
        "type": "verb / noun",
        "ipa": "/trænsˈfɜːr/",
        "meaningVi": "chuyển tuyến / nối chuyến",
        "collocations": "transfer flights, transfer to Line 2, airport transfer",
        "example": "We have to transfer to the central subway line at City Hall Station.",
        "exampleVi": "Chúng tôi phải đổi sang tuyến tàu điện ngầm trung tâm tại ga City Hall.",
        "optionsVi": [
          "chuyển tuyến / nối chuyến",
          "xuống ga cuối cùng",
          "mua thêm vé mới",
          "ngồi yên trên tàu"
        ]
      },
      {
        "id": "travel_11",
        "word": "subway station",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈsʌb.weɪ ˌsteɪ.ʃən/",
        "meaningVi": "ga tàu điện ngầm",
        "collocations": "nearest subway station, subway station entrance",
        "example": "My apartment is just a 3-minute walk from the nearest subway station.",
        "exampleVi": "Căn hộ của tôi chỉ cách ga tàu điện ngầm gần nhất 3 phút đi bộ.",
        "optionsVi": [
          "ga tàu điện ngầm",
          "bến xe buýt liên tỉnh",
          "sân bay quốc tế",
          "bến cảng phà"
        ]
      },
      {
        "id": "travel_12",
        "word": "platform",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈplæt.fɔːm/",
        "meaningVi": "sân ga chờ tàu",
        "collocations": "platform 3, wait on the platform, mind the gap between the train and platform",
        "example": "The express train to Osaka departs from platform number 4.",
        "exampleVi": "Chuyến tàu tốc hành đi Osaka sẽ khởi hành từ sân ga số 4.",
        "optionsVi": [
          "sân ga chờ tàu",
          "phòng bán vé",
          "khu vực gửi đồ",
          "quán cà phê ga"
        ]
      },
      {
        "id": "travel_13",
        "word": "round trip",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˌraʊnd ˈtrɪp/",
        "meaningVi": "vé / chuyến đi khứ hồi",
        "collocations": "round-trip ticket, round-trip flight, cost of round trip",
        "example": "A round-trip ticket to Singapore is usually cheaper than two one-way tickets.",
        "exampleVi": "Vé khứ hồi đi Singapore thường rẻ hơn mua hai chiếc vé một chiều.",
        "optionsVi": [
          "vé / chuyến đi khứ hồi",
          "vé đi một chiều",
          "chuyến tham quan vòng tròn",
          "chuyến bay thuê riêng"
        ]
      },
      {
        "id": "travel_14",
        "word": "one-way ticket",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˌwʌn.weɪ ˈtɪk.ɪt/",
        "meaningVi": "vé một chiều",
        "collocations": "buy a one-way ticket, single one-way ticket",
        "example": "He bought a one-way ticket to London to start his master's degree.",
        "exampleVi": "Anh ấy đã mua vé một chiều đến Luân Đôn để bắt đầu khóa học thạc sĩ.",
        "optionsVi": [
          "vé một chiều",
          "vé khứ hồi cả về",
          "vé xem phim",
          "vé tháng xe buýt"
        ]
      },
      {
        "id": "travel_15",
        "word": "lost and found",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˌlɒst ænd ˈfaʊnd/",
        "meaningVi": "bộ phận đồ thất lạc",
        "collocations": "lost and found office, check the lost and found",
        "example": "If you forgot your backpack on the train, check with the lost and found office.",
        "exampleVi": "Nếu bạn để quên ba lô trên tàu hỏa, hãy liên hệ phòng tiếp nhận đồ thất lạc nhé.",
        "optionsVi": [
          "bộ phận đồ thất lạc",
          "quầy bán đồ lưu niệm",
          "phòng cấp cứu y tế",
          "phòng an ninh sân bay"
        ]
      },
      {
        "id": "travel_16",
        "word": "customs clearance",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈkʌs.təmz ˌklɪə.rəns/",
        "meaningVi": "thủ tục thông quan hải quan",
        "collocations": "pass customs clearance, customs clearance inspection",
        "example": "All international passengers must undergo customs clearance upon arrival.",
        "exampleVi": "Tất cả hành khách quốc tế đều phải làm thủ tục thông quan hải quan khi hạ cánh.",
        "optionsVi": [
          "thủ tục thông quan hải quan",
          "kiểm tra vé máy bay",
          "lấy hành lý ký gửi",
          "đổi ngoại tệ"
        ]
      },
      {
        "id": "travel_17",
        "word": "baggage claim",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈbæɡ.ɪdʒ kleɪm/",
        "meaningVi": "khu vực lấy hành lý",
        "collocations": "baggage claim area, carousel at baggage claim",
        "example": "Proceed to baggage claim carousel 3 to pick up your suitcases.",
        "exampleVi": "Xin mời di chuyển đến băng chuyền số 3 tại khu vực lấy hành lý để nhận vali.",
        "optionsVi": [
          "khu vực lấy hành lý",
          "cửa kiểm tra an ninh",
          "quầy bán vé máy bay",
          "khu vực miễn thuế"
        ]
      },
      {
        "id": "travel_18",
        "word": "traffic jam",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈtræf.ɪk dʒæm/",
        "meaningVi": "ùn tắc giao thông",
        "collocations": "stuck in a traffic jam, heavy traffic jam, avoid traffic jams",
        "example": "Sorry I'm late; I got completely stuck in a terrible traffic jam.",
        "exampleVi": "Xin lỗi tôi đến muộn; tôi bị kẹt cứng trong một vụ tắc đường kinh hoàng.",
        "optionsVi": [
          "ùn tắc giao thông",
          "tai nạn xe cộ",
          "sửa chữa đường xá",
          "đèn tín hiệu giao thông"
        ]
      },
      {
        "id": "travel_19",
        "word": "roundabout",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈraʊnd.ə.baʊt/",
        "meaningVi": "vòng xuyến, bùng binh",
        "collocations": "take the second exit at the roundabout, enter the roundabout",
        "example": "At the roundabout, take the third exit towards the city center.",
        "exampleVi": "Tại vòng xuyến, hãy đi theo lối ra thứ ba hướng về phía trung tâm thành phố.",
        "optionsVi": [
          "vòng xuyến, bùng binh",
          "ngã tư có đèn đỏ",
          "hầm chui dân sinh",
          "cầu vượt vượt sông"
        ]
      },
      {
        "id": "travel_20",
        "word": "intersection",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌɪn.təˈsek.ʃən/",
        "meaningVi": "ngã tư, giao lộ",
        "collocations": "busy intersection, turn right at the next intersection",
        "example": "Turn left at the next intersection, right past the post office.",
        "exampleVi": "Hãy rẽ trái ở ngã tư tiếp theo, ngay sau khi đi qua bưu điện.",
        "optionsVi": [
          "ngã tư, giao lộ",
          "đường cụt",
          "đường một chiều",
          "trạm thu phí"
        ]
      },
      {
        "id": "travel_21",
        "word": "pedestrian crossing",
        "level": "A2",
        "type": "noun",
        "ipa": "/pəˈdes.tri.ən ˌkrɒs.ɪŋ/",
        "meaningVi": "vạch kẻ qua đường cho người đi bộ",
        "collocations": "use the pedestrian crossing, zebra crossing",
        "example": "Drivers in this country always stop for people waiting at pedestrian crossings.",
        "exampleVi": "Tài xế ở quốc gia này luôn dừng xe nhường đường cho người ở vạch đi bộ.",
        "optionsVi": [
          "vạch kẻ qua đường cho người đi bộ",
          "vỉa hè đi dạo",
          "lối thoát hiểm",
          "cầu thang cuốn"
        ]
      },
      {
        "id": "travel_22",
        "word": "sightseeing",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈsaɪtˌsiː.ɪŋ/",
        "meaningVi": "đi tham quan ngắm cảnh",
        "collocations": "go sightseeing, sightseeing tour, popular sightseeing spots",
        "example": "We spent the entire afternoon sightseeing around the ancient town of Hoi An.",
        "exampleVi": "Chúng tôi dành trọn cả buổi chiều để đi ngắm cảnh quanh phố cổ Hội An.",
        "optionsVi": [
          "đi tham quan ngắm cảnh",
          "nghỉ dưỡng trong phòng",
          "mua sắm đồ gia dụng",
          "dọn dẹp hành lý"
        ]
      },
      {
        "id": "travel_23",
        "word": "tour guide",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈtʊə ˌɡaɪd/",
        "meaningVi": "hướng dẫn viên du lịch",
        "collocations": "licensed tour guide, follow the tour guide, experienced tour guide",
        "example": "Our local tour guide shared captivating stories about the temple's history.",
        "exampleVi": "Người hướng dẫn viên địa phương đã kể những câu chuyện lịch sử hấp dẫn về ngôi đền.",
        "optionsVi": [
          "hướng dẫn viên du lịch",
          "tài xế lái xe buýt",
          "nhân viên hải quan",
          "lễ tân khách sạn"
        ]
      },
      {
        "id": "travel_24",
        "word": "itinerary",
        "level": "B2",
        "type": "noun",
        "ipa": "/aɪˈtɪn.ər.ər.i/",
        "meaningVi": "lịch trình chuyến đi",
        "collocations": "travel itinerary, detailed itinerary, plan an itinerary",
        "example": "The travel agency sent us a detailed day-by-day itinerary for Japan.",
        "exampleVi": "Công ty du lịch đã gửi cho chúng tôi lịch trình chi tiết từng ngày cho chuyến đi Nhật.",
        "optionsVi": [
          "lịch trình chuyến đi",
          "hợp đồng bảo hiểm",
          "bản đồ địa lý",
          "hóa đơn khách sạn"
        ]
      },
      {
        "id": "travel_25",
        "word": "flight attendant",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈflaɪt əˌten.dənt/",
        "meaningVi": "tiếp viên hàng không",
        "collocations": "ask the flight attendant, polite flight attendant",
        "example": "The flight attendant kindly offered me a warm blanket and a glass of water.",
        "exampleVi": "Cô tiếp viên hàng không ân cần mang cho tôi một chiếc chăn ấm và một ly nước.",
        "optionsVi": [
          "tiếp viên hàng không",
          "phi công lái máy bay",
          "nhân viên kiểm soát vé",
          "bảo vệ sân bay"
        ]
      },
      {
        "id": "travel_26",
        "word": "passport control",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈpɑːs.pɔːt kənˌtrəʊl/",
        "meaningVi": "kiểm soát hộ chiếu xuất nhập cảnh",
        "collocations": "queue at passport control, passport control officer",
        "example": "There was a very long queue at passport control upon landing at Heathrow.",
        "exampleVi": "Có một hàng dài người xếp hàng tại quầy kiểm tra hộ chiếu khi hạ cánh tại Heathrow.",
        "optionsVi": [
          "kiểm soát hộ chiếu xuất nhập cảnh",
          "quầy làm thủ tục bay",
          "cửa lên máy bay",
          "khu vực đổi ngoại tệ"
        ]
      },
      {
        "id": "travel_27",
        "word": "detour",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈdiː.tʊər/",
        "meaningVi": "đường vòng tránh",
        "collocations": "make a detour, detour route, road closed take detour",
        "example": "Because the bridge was under repair, we had to take a 10-mile detour.",
        "exampleVi": "Vì cây cầu đang được sửa chữa, chúng tôi phải đi đường vòng mất 10 dặm.",
        "optionsVi": [
          "đường vòng tránh",
          "đường cao tốc thẳng",
          "lối đi tắt nhanh nhất",
          "cầu cạn trên cao"
        ]
      },
      {
        "id": "travel_28",
        "word": "rent a car",
        "level": "A2",
        "type": "collocation",
        "ipa": "/rent eɪ kɑːr/",
        "meaningVi": "thuê xe tự lái",
        "collocations": "car rental agency, rent a car for three days",
        "example": "We decided to rent a car so we could explore the countryside flexibly.",
        "exampleVi": "Chúng tôi quyết định thuê một chiếc ô tô tự lái để khám phá vùng nông thôn linh hoạt.",
        "optionsVi": [
          "thuê xe tự lái",
          "mua xe trả góp",
          "đi nhờ xe người khác",
          "gọi xe taxi"
        ]
      },
      {
        "id": "travel_29",
        "word": "taxi fare",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈtæk.si feər/",
        "meaningVi": "tiền cước xe taxi",
        "collocations": "calculate taxi fare, estimated taxi fare, split the taxi fare",
        "example": "How much is the approximate taxi fare from the airport to downtown?",
        "exampleVi": "Tiền cước taxi từ sân bay về trung tâm thành phố ước tính khoảng bao nhiêu?",
        "optionsVi": [
          "tiền cước xe taxi",
          "tiền tip tài xế",
          "tiền phạt giao thông",
          "phí giữ xe qua đêm"
        ]
      },
      {
        "id": "travel_30",
        "word": "check out",
        "level": "A1",
        "type": "phrasal verb",
        "ipa": "/tʃek aʊt/",
        "meaningVi": "trả phòng khách sạn",
        "collocations": "check-out time is 12 PM, check out of the hotel",
        "example": "Hotel check-out time is at noon; remember to return the key card.",
        "exampleVi": "Giờ trả phòng khách sạn là 12 giờ trưa; nhớ gửi lại thẻ khóa phòng nhé.",
        "optionsVi": [
          "trả phòng khách sạn",
          "nhận phòng vào ở",
          "đặt cọc giữ phòng",
          "gọi phục vụ phòng"
        ]
      }
    ]
  },
  {
    "groupId": "daily_routines_home",
    "name": "Đời Sống, Nhà Cửa & Thói Quen",
    "icon": "🏠",
    "category": "daily",
    "level": "A1",
    "description": "Thói quen sinh hoạt, việc nhà, thuê phòng, hóa đơn tiện ích và đời sống đô thị.",
    "words": [
      {
        "id": "home_01",
        "word": "morning routine",
        "level": "A2",
        "type": "collocation",
        "ipa": "/ˈmɔː.nɪŋ ruːˈtiːn/",
        "meaningVi": "thói quen sinh hoạt buổi sáng",
        "collocations": "healthy morning routine, daily morning routine",
        "example": "My morning routine includes ten minutes of stretching and a cup of warm water.",
        "exampleVi": "Thói quen buổi sáng của tôi gồm 10 phút giãn cơ và một cốc nước ấm.",
        "optionsVi": [
          "thói quen sinh hoạt buổi sáng",
          "bữa ăn trưa công sở",
          "lịch họp đầu giờ",
          "thói quen trước khi ngủ"
        ]
      },
      {
        "id": "home_02",
        "word": "commute",
        "level": "B1",
        "type": "verb / noun",
        "ipa": "/kəˈmjuːt/",
        "meaningVi": "việc đi lại đi làm hàng ngày",
        "collocations": "daily commute, long commute, commute by train",
        "example": "I have a 45-minute daily commute by motorbike through crowded streets.",
        "exampleVi": "Hằng ngày tôi mất 45 phút đi làm bằng xe máy qua các con phố đông đúc.",
        "optionsVi": [
          "việc đi lại đi làm hàng ngày",
          "chuyến du lịch nghỉ dưỡng",
          "chuyển hẳn chỗ ở",
          "đi bộ thể dục"
        ]
      },
      {
        "id": "home_03",
        "word": "do laundry",
        "level": "A1",
        "type": "collocation",
        "ipa": "/duː ˈlɔːn.dri/",
        "meaningVi": "giặt giũ quần áo",
        "collocations": "do the laundry on weekends, laundry detergent",
        "example": "I usually do the laundry every Saturday morning.",
        "exampleVi": "Tôi thường giặt giũ quần áo vào mỗi sáng thứ Bảy.",
        "optionsVi": [
          "giặt giũ quần áo",
          "rửa bát chén",
          "lau dọn sàn nhà",
          "nấu bữa tối"
        ]
      },
      {
        "id": "home_04",
        "word": "wash the dishes",
        "level": "A1",
        "type": "collocation",
        "ipa": "/wɒʃ ðə ˈdɪʃ.ɪz/",
        "meaningVi": "rửa bát đĩa",
        "collocations": "take turns washing the dishes, wash the dishes by hand",
        "example": "My roommate cooks dinner and I wash the dishes.",
        "exampleVi": "Bạn cùng phòng của tôi nấu bữa tối còn tôi sẽ rửa bát.",
        "optionsVi": [
          "rửa bát đĩa",
          "đi chợ mua thức ăn",
          "lau bàn ăn",
          "đổ rác"
        ]
      },
      {
        "id": "home_05",
        "word": "tidy up",
        "level": "A2",
        "type": "phrasal verb",
        "ipa": "/ˈtaɪ.di ʌp/",
        "meaningVi": "dọn dẹp ngăn nắp",
        "collocations": "tidy up the room, tidy up your desk",
        "example": "Let's tidy up the living room before our guests arrive.",
        "exampleVi": "Chúng ta hãy dọn dẹp phòng khách cho gọn gàng trước khi khách tới nhé.",
        "optionsVi": [
          "dọn dẹp ngăn nắp",
          "bày bừa ra sàn",
          "sơn lại phòng",
          "chuyển đồ đạc đi"
        ]
      },
      {
        "id": "home_06",
        "word": "vacuum",
        "level": "A2",
        "type": "verb / noun",
        "ipa": "/ˈvæk.juːm/",
        "meaningVi": "hút bụi sàn nhà",
        "collocations": "vacuum the carpet, robot vacuum",
        "example": "I bought a robot vacuum to clean the apartment floors automatically.",
        "exampleVi": "Tôi đã mua một con robot hút bụi để tự động quét dọn sàn căn hộ.",
        "optionsVi": [
          "hút bụi sàn nhà",
          "lau sàn bằng nước",
          "quét sơn tường",
          "sửa bóng đèn"
        ]
      },
      {
        "id": "home_07",
        "word": "apartment rent",
        "level": "A2",
        "type": "collocation",
        "ipa": "/əˈpɑːt.mənt rent/",
        "meaningVi": "tiền thuê căn hộ",
        "collocations": "pay apartment rent, monthly rent",
        "example": "Our monthly apartment rent is due on the 5th of each month.",
        "exampleVi": "Tiền thuê căn hộ hàng tháng của chúng tôi đến hạn vào ngày 5 hàng tháng.",
        "optionsVi": [
          "tiền thuê căn hộ",
          "tiền mua nội thất",
          "phí gửi xe máy",
          "tiền điện sinh hoạt"
        ]
      },
      {
        "id": "home_08",
        "word": "household chores",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈhaʊs.həʊld tʃɔːz/",
        "meaningVi": "công việc nhà nội trợ",
        "collocations": "share household chores, do household chores",
        "example": "Sharing household chores equally makes marriage much happier.",
        "exampleVi": "Chia sẻ việc nhà một cách bình đẳng giúp cuộc sống hôn nhân hạnh phúc hơn nhiều.",
        "optionsVi": [
          "công việc nhà nội trợ",
          "khoản chi tiêu gia đình",
          "quy tắc ứng xử",
          "đồ dùng trong bếp"
        ]
      },
      {
        "id": "home_09",
        "word": "roommate",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈruːm.meɪt/",
        "meaningVi": "bạn cùng phòng",
        "collocations": "find a roommate, college roommate, friendly roommate",
        "example": "I'm looking for a quiet roommate to share a two-bedroom apartment.",
        "exampleVi": "Tôi đang tìm một bạn cùng phòng yên tĩnh để cùng share căn hộ 2 phòng ngủ.",
        "optionsVi": [
          "bạn cùng phòng",
          "chủ nhà cho thuê",
          "người hàng xóm",
          "đồng nghiệp công ty"
        ]
      },
      {
        "id": "home_10",
        "word": "landlord",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈlænd.lɔːd/",
        "meaningVi": "chủ nhà cho thuê",
        "collocations": "contact the landlord, landlord-tenant agreement",
        "example": "Our landlord was very kind and agreed to fix the leaking pipe promptly.",
        "exampleVi": "Chủ nhà của chúng tôi rất tốt bụng và đã đồng ý sửa ống nước rò rỉ ngay lập tức.",
        "optionsVi": [
          "chủ nhà cho thuê",
          "người đi thuê nhà",
          "môi giới bất động sản",
          "nhân viên bảo vệ"
        ]
      },
      {
        "id": "home_11",
        "word": "utility bills",
        "level": "B1",
        "type": "noun",
        "ipa": "/juːˈtɪl.ə.ti bɪlz/",
        "meaningVi": "hóa đơn điện nước sinh hoạt",
        "collocations": "pay utility bills, utility bills included in rent",
        "example": "During hot summer months, our electricity utility bill doubles.",
        "exampleVi": "Trong những tháng hè nóng bức, hóa đơn tiền điện tiện ích của chúng tôi tăng gấp đôi.",
        "optionsVi": [
          "hóa đơn điện nước sinh hoạt",
          "tiền thuế thu nhập",
          "tiền bảo hiểm y tế",
          "hóa đơn ăn uống"
        ]
      },
      {
        "id": "home_12",
        "word": "neighborhood",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈneɪ.bə.hʊd/",
        "meaningVi": "khu dân cư, khu phố",
        "collocations": "quiet neighborhood, friendly neighborhood, safe neighborhood",
        "example": "I love living here because the neighborhood is peaceful and safe.",
        "exampleVi": "Tôi rất thích sống ở đây vì khu phố xung quanh rất yên tĩnh và an ninh.",
        "optionsVi": [
          "khu dân cư, khu phố",
          "trung tâm thương mại",
          "cơ quan làm việc",
          "khu công nghiệp"
        ]
      },
      {
        "id": "home_13",
        "word": "convenience store",
        "level": "A1",
        "type": "noun",
        "ipa": "/kənˈviː.ni.əns stɔːr/",
        "meaningVi": "cửa hàng tiện lợi",
        "collocations": "24-hour convenience store, grab food at a convenience store",
        "example": "There is a 24-hour convenience store right downstairs from my apartment.",
        "exampleVi": "Có một cửa hàng tiện lợi mở 24/7 ngay dưới chân tòa chung cư của tôi.",
        "optionsVi": [
          "cửa hàng tiện lợi",
          "chợ đầu mối",
          "tiệm may đo",
          "nhà hàng cao cấp"
        ]
      },
      {
        "id": "home_14",
        "word": "home appliances",
        "level": "B1",
        "type": "noun",
        "ipa": "/həʊm əˈplaɪ.ən.sɪz/",
        "meaningVi": "thiết bị đồ gia dụng",
        "collocations": "kitchen home appliances, modern home appliances",
        "example": "The apartment comes fully furnished with modern home appliances.",
        "exampleVi": "Căn hộ được trang bị đầy đủ nội thất cùng các thiết bị gia dụng hiện đại.",
        "optionsVi": [
          "thiết bị đồ gia dụng",
          "vật dụng thể thao",
          "dụng cụ làm vườn",
          "văn phòng phẩm"
        ]
      },
      {
        "id": "home_15",
        "word": "balcony",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈbæl.kə.ni/",
        "meaningVi": "ban công",
        "collocations": "stand on the balcony, balcony view, grow plants on the balcony",
        "example": "I enjoy drinking my morning coffee on the balcony overlooking the park.",
        "exampleVi": "Tôi thích nhâm nhi cà phê sáng ngoài ban công nhìn ra công viên.",
        "optionsVi": [
          "ban công",
          "phòng tắm",
          "tầng hầm để xe",
          "hành lang chung"
        ]
      },
      {
        "id": "home_16",
        "word": "air conditioner",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈeə kənˌdɪʃ.ən.ər/",
        "meaningVi": "máy điều hòa nhiệt độ",
        "collocations": "turn on the air conditioner, AC remote control",
        "example": "Please turn off the air conditioner when you leave the bedroom.",
        "exampleVi": "Vui lòng tắt máy điều hòa khi bạn rời khỏi phòng ngủ.",
        "optionsVi": [
          "máy điều hòa nhiệt độ",
          "máy sấy tóc",
          "máy giặt đồ",
          "quạt thông gió"
        ]
      },
      {
        "id": "home_17",
        "word": "power outage",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈpaʊ.ər ˌaʊ.tɪdʒ/",
        "meaningVi": "sự cố mất điện / cúp điện",
        "collocations": "sudden power outage, electricity power outage",
        "example": "A thunderstorm caused a citywide power outage for over two hours.",
        "exampleVi": "Cơn bão kèm sấm sét đã gây ra sự cố mất điện toàn thành phố trong hơn 2 giờ.",
        "optionsVi": [
          "sự cố mất điện / cúp điện",
          "rò rỉ nước sinh hoạt",
          "hỏa hoạn cháy nổ",
          "mất sóng điện thoại"
        ]
      },
      {
        "id": "home_18",
        "word": "garbage disposal",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈɡɑː.bɪdʒ dɪˌspəʊ.zəl/",
        "meaningVi": "xử lý / đổ rác thải",
        "collocations": "garbage disposal area, garbage disposal rules",
        "example": "Residents must sort recyclable waste according to garbage disposal rules.",
        "exampleVi": "Cư dân phải phân loại rác tái chế theo đúng quy định xử lý rác thải.",
        "optionsVi": [
          "xử lý / đổ rác thải",
          "dịch vụ dọn vệ sinh",
          "nước thải sinh hoạt",
          "khu vực để xe"
        ]
      },
      {
        "id": "home_19",
        "word": "lock the door",
        "level": "A1",
        "type": "collocation",
        "ipa": "/lɒk ðə dɔːr/",
        "meaningVi": "khóa cửa cẩn thận",
        "collocations": "remember to lock the door, double lock the door",
        "example": "Always remember to lock the door when leaving the apartment.",
        "exampleVi": "Hãy luôn nhớ khóa cửa cẩn thận khi rời khỏi căn hộ.",
        "optionsVi": [
          "khóa cửa cẩn thận",
          "mở toang cửa sổ",
          "thay khóa mới",
          "gõ cửa gọi người"
        ]
      },
      {
        "id": "home_20",
        "word": "daily routine",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˌdeɪ.li ruːˈtiːn/",
        "meaningVi": "nếp sinh hoạt thường ngày",
        "collocations": "stick to a daily routine, establish a daily routine",
        "example": "Having a consistent daily routine helps improve focus and productivity.",
        "exampleVi": "Có một nếp sinh hoạt thường nhật đều đặn giúp tăng cường sự tập trung và hiệu suất.",
        "optionsVi": [
          "nếp sinh hoạt thường ngày",
          "chuyến đi công tác xa",
          "kế hoạch cuối tuần",
          "lịch thi cử"
        ]
      },
      {
        "id": "home_21",
        "word": "sleep in",
        "level": "A2",
        "type": "phrasal verb",
        "ipa": "/sliːp ɪn/",
        "meaningVi": "ngủ nướng dậy muộn",
        "collocations": "sleep in on Sundays, love to sleep in",
        "example": "On Sunday mornings, I love to sleep in until 9 AM.",
        "exampleVi": "Vào các sáng Chủ nhật, tôi rất thích được ngủ nướng đến tận 9 giờ sáng.",
        "optionsVi": [
          "ngủ nướng dậy muộn",
          "thức trắng đêm",
          "ngủ gật trong giờ",
          "dậy thật sớm"
        ]
      },
      {
        "id": "home_22",
        "word": "furnished",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈfɜː.nɪʃt/",
        "meaningVi": "đã đủ đồ nội thất",
        "collocations": "fully furnished apartment, semi-furnished",
        "example": "The studio apartment is fully furnished with a bed, desk, and sofa.",
        "exampleVi": "Căn hộ studio đã có đầy đủ nội thất bao gồm giường, bàn làm việc và ghế sofa.",
        "optionsVi": [
          "đã đủ đồ nội thất",
          "nhà trống không đồ",
          "căn nhà đang xây",
          "bị hư hỏng nặng"
        ]
      },
      {
        "id": "home_23",
        "word": "renovate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈren.ə.veɪt/",
        "meaningVi": "cải tạo tu sửa nhà",
        "collocations": "renovate the kitchen, recently renovated, renovate an old house",
        "example": "They hired an architect to renovate their 20-year-old townhouse.",
        "exampleVi": "Họ đã thuê một kiến trúc sư để cải tạo lại ngôi nhà phố 20 năm tuổi.",
        "optionsVi": [
          "cải tạo tu sửa nhà",
          "phá dỡ hoàn toàn",
          "bán gấp bất động sản",
          "xây tường rào mới"
        ]
      },
      {
        "id": "home_24",
        "word": "spacious",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈspeɪ.ʃəs/",
        "meaningVi": "rộng rãi thoáng đãng",
        "collocations": "spacious living room, bright and spacious",
        "example": "The new apartment has a spacious kitchen with plenty of natural light.",
        "exampleVi": "Căn hộ mới có một phòng bếp rộng rãi với rất nhiều ánh sáng tự nhiên.",
        "optionsVi": [
          "rộng rãi thoáng đãng",
          "chật chội bí bách",
          "ẩm thấp tối tăm",
          "cũ kỹ bừa bộn"
        ]
      },
      {
        "id": "home_25",
        "word": "cramped",
        "level": "B2",
        "type": "adjective",
        "ipa": "/kræmpt/",
        "meaningVi": "chật chội tù túng",
        "collocations": "cramped room, feel cramped, cramped quarters",
        "example": "Sharing a single bedroom with three people felt very cramped.",
        "exampleVi": "Ở chung một phòng ngủ với 3 người cảm thấy rất chật chội và tù túng.",
        "optionsVi": [
          "chật chội tù túng",
          "rộng rãi bao la",
          "sang trọng quý phái",
          "ấm cúng dễ chịu"
        ]
      },
      {
        "id": "home_26",
        "word": "tap water",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈtæp ˌwɔː.tər/",
        "meaningVi": "nước máy từ vòi",
        "collocations": "drink tap water, boil tap water, filter tap water",
        "example": "In many European cities, it is completely safe to drink tap water directly.",
        "exampleVi": "Ở nhiều thành phố châu Âu, việc uống trực tiếp nước máy từ vòi là hoàn toàn an toàn.",
        "optionsVi": [
          "nước máy từ vòi",
          "nước khoáng đóng chai",
          "nước ngọt có ga",
          "nước mưa tự nhiên"
        ]
      },
      {
        "id": "home_27",
        "word": "water leak",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈwɔː.tər liːk/",
        "meaningVi": "rò rỉ nước",
        "collocations": "fix a water leak, serious water leak in the bathroom",
        "example": "We called a plumber right away because of a water leak under the sink.",
        "exampleVi": "Chúng tôi đã gọi thợ sửa ống nước ngay lập tức vì rò rỉ nước dưới bồn rửa.",
        "optionsVi": [
          "rò rỉ nước",
          "mất nước sinh hoạt",
          "ngập lụt do mưa",
          "nước nhiễm phèn"
        ]
      },
      {
        "id": "home_28",
        "word": "neighbor",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈneɪ.bər/",
        "meaningVi": "người hàng xóm",
        "collocations": "next-door neighbor, friendly neighbors, noisy neighbors",
        "example": "Our next-door neighbor always helps water our plants when we travel.",
        "exampleVi": "Người hàng xóm bên cạnh luôn giúp chúng tôi tưới cây mỗi khi chúng tôi đi vắng.",
        "optionsVi": [
          "người hàng xóm",
          "người họ hàng",
          "đồng nghiệp công ty",
          "khách vãng lai"
        ]
      },
      {
        "id": "home_29",
        "word": "elevator",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈel.ɪ.veɪ.tər/",
        "meaningVi": "thang máy",
        "collocations": "take the elevator, elevator is out of order",
        "example": "Let's take the elevator up to the 18th floor.",
        "exampleVi": "Chúng mình cùng đi thang máy lên tầng 18 nhé.",
        "optionsVi": [
          "thang máy",
          "cầu thang bộ",
          "thang cuốn siêu thị",
          "lối thoát hiểm"
        ]
      },
      {
        "id": "home_30",
        "word": "stairs",
        "level": "A1",
        "type": "noun",
        "ipa": "/steəz/",
        "meaningVi": "cầu thang bộ",
        "collocations": "take the stairs, walk up the stairs, climb the stairs",
        "example": "Taking the stairs instead of the elevator is an easy way to stay active.",
        "exampleVi": "Đi cầu thang bộ thay vì đi thang máy là một cách đơn giản để rèn luyện sức khỏe.",
        "optionsVi": [
          "cầu thang bộ",
          "thang máy",
          "bậc thềm cửa",
          "hành lang"
        ]
      }
    ]
  },
  {
    "groupId": "health_wellness_medical",
    "name": "Sức Khỏe, Thể Thao & Y Tế",
    "icon": "🏥",
    "category": "daily",
    "level": "A2",
    "description": "Bệnh tật thường gặp, mua thuốc tại hiệu thuốc, khám bác sĩ, tập gym và lối sống lành mạnh.",
    "words": [
      {
        "id": "health_01",
        "word": "headache",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈhed.eɪk/",
        "meaningVi": "cơn đau đầu",
        "collocations": "have a terrible headache, headache relief, splitting headache",
        "example": "I've had a bad headache since morning because of staring at screens too long.",
        "exampleVi": "Tôi bị đau đầu từ sáng do nhìn vào màn hình máy tính quá lâu.",
        "optionsVi": [
          "cơn đau đầu",
          "đau bụng cồn cào",
          "đau răng",
          "đau lưng mỏi gối"
        ]
      },
      {
        "id": "health_02",
        "word": "sore throat",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˌsɔː ˈθrəʊt/",
        "meaningVi": "đau rát cổ họng / viêm họng",
        "collocations": "have a sore throat, sore throat lozenges",
        "example": "Drinking warm ginger tea with honey helps soothe a sore throat.",
        "exampleVi": "Uống trà gừng ấm với mật ong giúp làm dịu cổ họng đau rát.",
        "optionsVi": [
          "đau rát cổ họng / viêm họng",
          "chảy máu cam",
          "khó thở tức ngực",
          "nghẹt mũi dị ứng"
        ]
      },
      {
        "id": "health_03",
        "word": "prescription",
        "level": "B1",
        "type": "noun",
        "ipa": "/prɪˈskrɪp.ʃən/",
        "meaningVi": "đơn thuốc của bác sĩ",
        "collocations": "doctor's prescription, fill a prescription, prescription drugs",
        "example": "You cannot buy these antibiotics without a valid doctor's prescription.",
        "exampleVi": "Bạn không thể mua loại thuốc kháng sinh này nếu không có đơn thuốc của bác sĩ.",
        "optionsVi": [
          "đơn thuốc của bác sĩ",
          "hóa đơn viện phí",
          "phiếu xét nghiệm máu",
          "bảo hiểm y tế"
        ]
      },
      {
        "id": "health_04",
        "word": "pharmacy",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈfɑː.mə.si/",
        "meaningVi": "hiệu thuốc tây",
        "collocations": "local pharmacy, 24-hour pharmacy, go to the pharmacy",
        "example": "Is there an all-night pharmacy near this neighborhood?",
        "exampleVi": "Có hiệu thuốc tây mở thâu đêm nào gần khu vực này không?",
        "optionsVi": [
          "hiệu thuốc tây",
          "phòng nha khoa",
          "bệnh viện đa khoa",
          "trạm cấp cứu"
        ]
      },
      {
        "id": "health_05",
        "word": "fever",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈfiː.vər/",
        "meaningVi": "cơn sốt cao",
        "collocations": "run a high fever, reduce a fever, fever thermometer",
        "example": "The little boy has a high fever of 39 degrees Celsius.",
        "exampleVi": "Cậu bé đang bị sốt cao lên tới 39 độ C.",
        "optionsVi": [
          "cơn sốt cao",
          "cơn ớn lạnh",
          "chóng mặt hoa mắt",
          "buồn nôn"
        ]
      },
      {
        "id": "health_06",
        "word": "painkiller",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈpeɪnˌkɪl.ər/",
        "meaningVi": "thuốc giảm đau",
        "collocations": "take a painkiller, mild painkiller, strong painkillers",
        "example": "She took a painkiller to ease her toothache before seeing the dentist.",
        "exampleVi": "Cô ấy đã uống một viên thuốc giảm đau để làm dịu cơn đau răng trước khi đi khám nha sĩ.",
        "optionsVi": [
          "thuốc giảm đau",
          "thuốc kháng sinh",
          "thuốc an thần",
          "vitamin tổng hợp"
        ]
      },
      {
        "id": "health_07",
        "word": "appointment",
        "level": "A2",
        "type": "noun",
        "ipa": "/əˈpɔɪnt.mənt/",
        "meaningVi": "cuộc hẹn khám",
        "collocations": "doctor's appointment, make an appointment, cancel an appointment",
        "example": "I have an appointment with my dentist tomorrow morning at 9 AM.",
        "exampleVi": "Tôi có một cuộc hẹn khám với nha sĩ vào 9 giờ sáng ngày mai.",
        "optionsVi": [
          "cuộc hẹn khám",
          "lịch tiêm phòng",
          "buổi tư vấn tâm lý",
          "bảng kết quả xét nghiệm"
        ]
      },
      {
        "id": "health_08",
        "word": "workout",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈwɜːk.aʊt/",
        "meaningVi": "buổi tập thể dục",
        "collocations": "morning workout, intense workout, daily workout routine",
        "example": "A 30-minute cardio workout every day boosts your energy levels significantly.",
        "exampleVi": "Một buổi tập cardio 30 phút mỗi ngày giúp tăng cường năng lượng đáng kể.",
        "optionsVi": [
          "buổi tập thể dục",
          "ngày nghỉ phép",
          "buổi khám tổng quát",
          "chế độ ăn kiêng"
        ]
      },
      {
        "id": "health_09",
        "word": "stay hydrated",
        "level": "B1",
        "type": "collocation",
        "ipa": "/steɪ haɪˈdreɪ.tɪd/",
        "meaningVi": "uống đủ nước",
        "collocations": "remember to stay hydrated, essential to stay hydrated",
        "example": "Remember to stay hydrated by drinking at least two liters of water daily.",
        "exampleVi": "Hãy nhớ uống đủ nước bằng cách uống tối thiểu 2 lít nước mỗi ngày.",
        "optionsVi": [
          "uống đủ nước",
          "ăn nhiều rau xanh",
          "ngủ đủ giấc",
          "hạn chế đồ ngọt"
        ]
      },
      {
        "id": "health_10",
        "word": "balanced diet",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈbæl.ənst ˈdaɪ.ət/",
        "meaningVi": "chế độ ăn cân bằng dinh dưỡng",
        "collocations": "maintain a balanced diet, eat a balanced diet",
        "example": "A balanced diet rich in vegetables and proteins prevents many chronic diseases.",
        "exampleVi": "Một chế độ ăn uống cân bằng giàu rau xanh và chất đạm giúp phòng tránh nhiều bệnh mãn tính.",
        "optionsVi": [
          "chế độ ăn cân bằng dinh dưỡng",
          "chế độ nhịn ăn gián đoạn",
          "chế độ ăn kiêng chất béo",
          "chế độ ăn thuần chay"
        ]
      },
      {
        "id": "health_11",
        "word": "relieve stress",
        "level": "B1",
        "type": "collocation",
        "ipa": "/rɪˈliːv stres/",
        "meaningVi": "giải tỏa căng thẳng áp lực",
        "collocations": "effective ways to relieve stress, relieve work stress",
        "example": "Practicing yoga and meditation is a great way to relieve stress.",
        "exampleVi": "Tập yoga và thiền là phương pháp tuyệt vời để giải tỏa căng thẳng.",
        "optionsVi": [
          "giải tỏa căng thẳng áp lực",
          "tăng thêm âu lo",
          "làm việc quá tải",
          "mất ngủ kéo dài"
        ]
      },
      {
        "id": "health_12",
        "word": "insomnia",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪnˈsɒm.ni.ə/",
        "meaningVi": "chứng mất ngủ",
        "collocations": "suffer from insomnia, chronic insomnia, cure insomnia",
        "example": "Drinking coffee late in the evening can easily trigger insomnia.",
        "exampleVi": "Uống cà phê vào buổi tối muộn có thể dễ dàng gây ra chứng mất ngủ.",
        "optionsVi": [
          "chứng mất ngủ",
          "chứng ngủ nhiều",
          "bệnh mộng du",
          "chứng hay quên"
        ]
      },
      {
        "id": "health_13",
        "word": "blood pressure",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈblʌd ˌpreʃ.ər/",
        "meaningVi": "huyết áp",
        "collocations": "high blood pressure, check blood pressure, normal blood pressure",
        "example": "Regular physical exercise helps keep your blood pressure at healthy levels.",
        "exampleVi": "Tập thể dục đều đặn giúp giữ huyết áp của bạn ở mức khỏe mạnh bình thường.",
        "optionsVi": [
          "huyết áp",
          "nhịp tim đập",
          "chỉ số đường huyết",
          "lượng mỡ trong máu"
        ]
      },
      {
        "id": "health_14",
        "word": "emergency room",
        "level": "A2",
        "type": "noun",
        "ipa": "/ɪˈmɜː.dʒən.si ˌruːm/",
        "meaningVi": "phòng cấp cứu",
        "collocations": "rush to the emergency room, emergency room doctor",
        "example": "He was rushed directly to the emergency room after the traffic accident.",
        "exampleVi": "Anh ấy đã được đưa gấp thẳng tới phòng cấp cứu sau tai nạn giao thông.",
        "optionsVi": [
          "phòng cấp cứu",
          "phòng mổ cách ly",
          "nhà thuốc bệnh viện",
          "khu hồi sức sau mổ"
        ]
      },
      {
        "id": "health_15",
        "word": "first aid kit",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˌfɜːst ˈeɪd ˌkɪt/",
        "meaningVi": "hộp dụng cụ sơ cứu",
        "collocations": "keep a first aid kit at home, emergency first aid kit",
        "example": "Every household and car should have a well-equipped first aid kit.",
        "exampleVi": "Mỗi gia đình và xe hơi đều nên trang bị một bộ dụng cụ sơ cứu đầy đủ.",
        "optionsVi": [
          "hộp dụng cụ sơ cứu",
          "túi đựng mỹ phẩm",
          "hộp sửa chữa xe",
          "vali đựng quần áo"
        ]
      },
      {
        "id": "health_16",
        "word": "immune system",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪˈmjuːn ˌsɪs.təm/",
        "meaningVi": "hệ thống miễn dịch",
        "collocations": "boost immune system, weak immune system, strengthen immunity",
        "example": "Vitamin C and good sleep play a key role in boosting your immune system.",
        "exampleVi": "Vitamin C và giấc ngủ ngon đóng vai trò quan trọng trong việc tăng cường hệ miễn dịch.",
        "optionsVi": [
          "hệ thống miễn dịch",
          "hệ thống tuần hoàn máu",
          "hệ tiêu hóa",
          "hệ thần kinh trung ương"
        ]
      },
      {
        "id": "health_17",
        "word": "symptom",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈsɪmp.təm/",
        "meaningVi": "triệu chứng bệnh",
        "collocations": "common symptoms, flu symptoms, early symptoms",
        "example": "A high temperature and persistent dry cough are key symptoms of the flu.",
        "exampleVi": "Sốt cao và ho khan dai dẳng là những triệu chứng chính của bệnh cảm cúm.",
        "optionsVi": [
          "triệu chứng bệnh",
          "phương pháp điều trị",
          "nguyên nhân di truyền",
          "đơn thuốc kê toa"
        ]
      },
      {
        "id": "health_18",
        "word": "catch a cold",
        "level": "A1",
        "type": "collocation",
        "ipa": "/kætʃ eɪ kəʊld/",
        "meaningVi": "bị cảm lạnh",
        "collocations": "easy to catch a cold in winter, catch a bad cold",
        "example": "Put on a warm jacket, or you will catch a cold outside!",
        "exampleVi": "Mặc áo khoác ấm vào đi, không là bạn sẽ bị cảm lạnh ngoài trời đấy!",
        "optionsVi": [
          "bị cảm lạnh",
          "bị bỏng nhiệt",
          "bị say nắng",
          "bị trẹo khớp chân"
        ]
      },
      {
        "id": "health_19",
        "word": "gym membership",
        "level": "A2",
        "type": "collocation",
        "ipa": "/dʒɪm ˈmem.bə.ʃɪp/",
        "meaningVi": "thẻ tập gym",
        "collocations": "annual gym membership, renew gym membership",
        "example": "I signed up for a 1-year gym membership to motivate myself to exercise.",
        "exampleVi": "Tôi đã đăng ký thẻ tập gym 1 năm để tự tạo động lực rèn luyện thân thể.",
        "optionsVi": [
          "thẻ tập gym",
          "thẻ bảo hiểm",
          "vé vào bể bơi",
          "thẻ thành viên siêu thị"
        ]
      },
      {
        "id": "health_20",
        "word": "recovery",
        "level": "B1",
        "type": "noun",
        "ipa": "/rɪˈkʌv.ər.i/",
        "meaningVi": "sự hồi phục sức khỏe",
        "collocations": "full recovery, speedy recovery, wish you a speedy recovery",
        "example": "The doctor says he will make a full recovery in about two weeks.",
        "exampleVi": "Bác sĩ cho biết anh ấy sẽ hồi phục hoàn toàn trong khoảng 2 tuần nữa.",
        "optionsVi": [
          "sự hồi phục sức khỏe",
          "tình trạng bệnh tái phát",
          "chấn thương nặng thêm",
          "thời gian nằm viện"
        ]
      },
      {
        "id": "health_21",
        "word": "check-up",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈtʃek.ʌp/",
        "meaningVi": "khám sức khỏe định kỳ",
        "collocations": "annual health check-up, medical check-up",
        "example": "It is strongly recommended to get a routine check-up once a year.",
        "exampleVi": "Mọi người được khuyến cáo nên đi kiểm tra sức khỏe định kỳ mỗi năm một lần.",
        "optionsVi": [
          "khám sức khỏe định kỳ",
          "phẫu thuật khẩn cấp",
          "cấp cứu lưu động",
          "mua thuốc bổ"
        ]
      },
      {
        "id": "health_22",
        "word": "stomachache",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈstʌm.ək.eɪk/",
        "meaningVi": "đau bụng / đau dạ dày",
        "collocations": "have a stomachache, severe stomachache",
        "example": "Eating too much spicy street food gave him a bad stomachache.",
        "exampleVi": "Ăn quá nhiều đồ ăn đường phố cay nóng khiến anh ấy bị đau bụng dữ dội.",
        "optionsVi": [
          "đau bụng / đau dạ dày",
          "đau khớp tay",
          "chóng mặt",
          "đau nhức răng"
        ]
      },
      {
        "id": "health_23",
        "word": "mental health",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈmen.təl helθ/",
        "meaningVi": "sức khỏe tinh thần",
        "collocations": "look after your mental health, mental health awareness",
        "example": "Taking breaks from social media can do wonders for your mental health.",
        "exampleVi": "Tạm rời xa mạng xã hội có thể mang lại lợi ích tuyệt vời cho sức khỏe tinh thần của bạn.",
        "optionsVi": [
          "sức khỏe tinh thần",
          "sức mạnh cơ bắp",
          "thể lực dẻo dai",
          "chế độ dinh dưỡng"
        ]
      },
      {
        "id": "health_24",
        "word": "sprain",
        "level": "B1",
        "type": "verb / noun",
        "ipa": "/spreɪn/",
        "meaningVi": "bong gân, trẹo khớp",
        "collocations": "sprain an ankle, wrist sprain",
        "example": "He sprained his left ankle while playing basketball yesterday.",
        "exampleVi": "Anh ấy bị bong gân mắt cá chân trái khi chơi bóng rổ hôm qua.",
        "optionsVi": [
          "bong gân, trẹo khớp",
          "gãy xương",
          "bỏng da",
          "trầy xước nhẹ"
        ]
      },
      {
        "id": "health_25",
        "word": "sneeze",
        "level": "A2",
        "type": "verb / noun",
        "ipa": "/sniːz/",
        "meaningVi": "hắt hơi",
        "collocations": "sneeze repeatedly, bless you after a sneeze",
        "example": "Flower pollen during springtime makes her sneeze constantly.",
        "exampleVi": "Phấn hoa vào mùa xuân khiến cô ấy hắt hơi liên tục.",
        "optionsVi": [
          "hắt hơi",
          "ho khan",
          "nấc cụt",
          "ngáp ngủ"
        ]
      },
      {
        "id": "health_26",
        "word": "cough",
        "level": "A1",
        "type": "verb / noun",
        "ipa": "/kɒf/",
        "meaningVi": "ho, cơn ho",
        "collocations": "dry cough, persistent cough, cough syrup",
        "example": "Take this herbal cough syrup three times a day after meals.",
        "exampleVi": "Hãy uống siro ho thảo dược này 3 lần một ngày sau bữa ăn.",
        "optionsVi": [
          "ho, cơn ho",
          "sốt cao",
          "ngứa da",
          "chảy nước mắt"
        ]
      },
      {
        "id": "health_27",
        "word": "antibiotics",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌæn.ti.baɪˈɒt.ɪks/",
        "meaningVi": "thuốc kháng sinh",
        "collocations": "course of antibiotics, take antibiotics, antibiotic resistance",
        "example": "Make sure you finish the entire course of antibiotics as prescribed.",
        "exampleVi": "Hãy đảm bảo rằng bạn uống hết toàn bộ liều kháng sinh theo đúng chỉ định.",
        "optionsVi": [
          "thuốc kháng sinh",
          "thuốc cảm cúm thông thường",
          "vitamin làm đẹp",
          "thuốc sát trùng ngoài da"
        ]
      },
      {
        "id": "health_28",
        "word": "dentist",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈden.tɪst/",
        "meaningVi": "bác sĩ nha khoa",
        "collocations": "visit the dentist, dentist clinic, fear of the dentist",
        "example": "You should visit the dentist every six months for teeth cleaning.",
        "exampleVi": "Bạn nên đi khám nha sĩ 6 tháng một lần để lấy cao răng và kiểm tra.",
        "optionsVi": [
          "bác sĩ nha khoa",
          "bác sĩ nhãn khoa",
          "dược sĩ bán thuốc",
          "bác sĩ phẫu thuật"
        ]
      },
      {
        "id": "health_29",
        "word": "treatment",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈtriːt.mənt/",
        "meaningVi": "phác đồ điều trị",
        "collocations": "medical treatment, undergo treatment, response to treatment",
        "example": "Early diagnosis allows for much more effective medical treatment.",
        "exampleVi": "Chẩn đoán sớm cho phép quá trình điều trị y tế đạt hiệu quả cao hơn nhiều.",
        "optionsVi": [
          "phác đồ điều trị",
          "bảo hiểm bồi thường",
          "nguyên nhân gây bệnh",
          "sự chuẩn đoán nhầm"
        ]
      },
      {
        "id": "health_30",
        "word": "exhausted",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ɪɡˈzɔː.stɪd/",
        "meaningVi": "kiệt sức, mệt lả",
        "collocations": "completely exhausted, physically exhausted",
        "example": "After running the 21km half-marathon, she felt totally exhausted but happy.",
        "exampleVi": "Sau khi chạy xong giải bán marathon 21km, cô ấy cảm thấy hoàn toàn kiệt sức nhưng rất vui.",
        "optionsVi": [
          "kiệt sức, mệt lả",
          "tràn đầy năng lượng",
          "tỉnh táo khỏe khoắn",
          "hồi hộp lo lắng"
        ]
      }
    ]
  },
  {
    "groupId": "emotions_personality",
    "name": "Cảm Xúc, Tính Cách & Mối Quan Hệ",
    "icon": "💡",
    "category": "daily",
    "level": "B1",
    "description": "Diễn đạt tâm trạng, tính cách con người, đồng cảm, bất đồng và kết nối các mối quan hệ.",
    "words": [
      {
        "id": "emo_01",
        "word": "reliable",
        "level": "A2",
        "type": "adjective",
        "ipa": "/rɪˈlaɪ.ə.bəl/",
        "meaningVi": "đáng tin cậy",
        "collocations": "reliable person, highly reliable, reliable source of information",
        "example": "He is a reliable teammate; he always delivers his promises on time.",
        "exampleVi": "Anh ấy là một đồng đội đáng tin cậy; anh ấy luôn giữ đúng lời hứa đúng hạn.",
        "optionsVi": [
          "đáng tin cậy",
          "thất thường khó đoán",
          "thiếu trung thực",
          "lười biếng"
        ]
      },
      {
        "id": "emo_02",
        "word": "frustrated",
        "level": "B1",
        "type": "adjective",
        "ipa": "/frʌsˈtreɪ.tɪd/",
        "meaningVi": "bực bội, bất lực, ức chế",
        "collocations": "feel frustrated, frustrated with delays, deeply frustrated",
        "example": "I felt frustrated when the internet connection kept dropping during my presentation.",
        "exampleVi": "Tôi cảm thấy rất bực bội khi mạng internet liên tục bị mất lúc tôi đang thuyết trình.",
        "optionsVi": [
          "bực bội, bất lực, ức chế",
          "vui sướng hân hoan",
          "bình thản thư giãn",
          "ngạc nhiên thú vị"
        ]
      },
      {
        "id": "emo_03",
        "word": "in my opinion",
        "level": "A2",
        "type": "phrase",
        "ipa": "/ɪn maɪ əˈpɪn.jən/",
        "meaningVi": "theo ý kiến của tôi",
        "collocations": "in my honest opinion, in my humble opinion (IMHO)",
        "example": "In my opinion, we should focus on user experience before marketing.",
        "exampleVi": "Theo quan điểm của tôi, chúng ta nên tập trung vào trải nghiệm người dùng trước khi tiếp thị.",
        "optionsVi": [
          "theo ý kiến của tôi",
          "mọi người đều nghĩ rằng",
          "chắc chắn là sai",
          "theo số đông"
        ]
      },
      {
        "id": "emo_04",
        "word": "confident",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈkɒn.fɪ.dənt/",
        "meaningVi": "tự tin",
        "collocations": "feel confident, confident about the interview, highly confident",
        "example": "Practicing English every day makes me feel much more confident when speaking.",
        "exampleVi": "Luyện tiếng Anh mỗi ngày giúp tôi cảm thấy tự tin hơn rất nhiều khi nói.",
        "optionsVi": [
          "tự tin",
          "rụt rè, e ngại",
          "chủ quan khinh địch",
          "lo sợ thất bại"
        ]
      },
      {
        "id": "emo_05",
        "word": "deal with",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/diːl wɪð/",
        "meaningVi": "đối phó, xử lý, đương đầu",
        "collocations": "deal with pressure, deal with difficult clients, how to deal with stress",
        "example": "Learning how to deal with unexpected bugs is an essential engineering skill.",
        "exampleVi": "Học cách đương đầu với những lỗi phần mềm bất ngờ là một kỹ năng quan trọng của kỹ sư.",
        "optionsVi": [
          "đối phó, xử lý, đương đầu",
          "trốn tránh thực tế",
          "bỏ cuộc sớm",
          "khiếu nại lên cấp trên"
        ]
      },
      {
        "id": "emo_06",
        "word": "flexible",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈflek.sə.bəl/",
        "meaningVi": "linh hoạt, dễ thích nghi",
        "collocations": "flexible working hours, flexible mindset, highly flexible",
        "example": "Our company offers flexible working hours for software engineers.",
        "exampleVi": "Công ty của chúng tôi áp dụng thời gian làm việc linh hoạt cho các kỹ sư phần mềm.",
        "optionsVi": [
          "linh hoạt, dễ thích nghi",
          "cứng nhắc, bảo thủ",
          "nghiêm khắc kỷ luật",
          "bắt buộc cố định"
        ]
      },
      {
        "id": "emo_07",
        "word": "ambitious",
        "level": "B1",
        "type": "adjective",
        "ipa": "/æmˈbɪʃ.əs/",
        "meaningVi": "có hoài bão khát vọng",
        "collocations": "ambitious plan, highly ambitious, ambitious goals",
        "example": "She is an ambitious engineer who dreams of founding her own AI startup.",
        "exampleVi": "Cô ấy là một kỹ sư đầy hoài bão luôn mơ ước tự thành lập startup AI của riêng mình.",
        "optionsVi": [
          "có hoài bão khát vọng",
          "an phận thủ thường",
          "lười biếng thụ động",
          "nhút nhát sợ sệt"
        ]
      },
      {
        "id": "emo_08",
        "word": "open-minded",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˌəʊ.pənˈmaɪn.dɪd/",
        "meaningVi": "cởi mở, dễ tiếp thu",
        "collocations": "stay open-minded, open-minded attitude",
        "example": "Being open-minded helps you learn faster from different viewpoints.",
        "exampleVi": "Giữ tư duy cởi mở giúp bạn học hỏi nhanh hơn từ các góc nhìn khác nhau.",
        "optionsVi": [
          "cởi mở, dễ tiếp thu",
          "hẹp hòi, bảo thủ",
          "vô tâm thờ ơ",
          "dễ bị kích động"
        ]
      },
      {
        "id": "emo_09",
        "word": "enthusiastic",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ɪnˌθjuː.ziˈæs.tɪk/",
        "meaningVi": "nhiệt huyết, hăng hái",
        "collocations": "enthusiastic about the project, show enthusiasm",
        "example": "The whole team was enthusiastic about building the new mobile app.",
        "exampleVi": "Cả nhóm đều rất nhiệt huyết và hào hứng với việc xây dựng ứng dụng di động mới.",
        "optionsVi": [
          "nhiệt huyết, hăng hái",
          "thờ ơ lạnh nhạt",
          "mệt mỏi chán chường",
          "miễn cưỡng làm việc"
        ]
      },
      {
        "id": "emo_10",
        "word": "generous",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈdʒen.ər.əs/",
        "meaningVi": "hào phóng, rộng lượng",
        "collocations": "generous offer, generous donation, very generous of you",
        "example": "It was very generous of him to pay for everyone's dinner.",
        "exampleVi": "Anh ấy thật hào phóng khi đã trả tiền bữa tối cho tất cả mọi người.",
        "optionsVi": [
          "hào phóng, rộng lượng",
          "keo kiệt bủn xỉn",
          "nghi ngờ cảnh giác",
          "tự cao tự đại"
        ]
      },
      {
        "id": "emo_11",
        "word": "patient",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈpeɪ.ʃənt/",
        "meaningVi": "kiên nhẫn, nhẫn nại",
        "collocations": "be patient with someone, have patience, highly patient",
        "example": "Our senior mentor is always patient when explaining complex code to interns.",
        "exampleVi": "Người hướng dẫn cấp cao luôn kiên nhẫn khi giảng giải code phức tạp cho thực tập sinh.",
        "optionsVi": [
          "kiên nhẫn, nhẫn nại",
          "nóng nảy vội vàng",
          "nghiêm khắc gay gắt",
          "lơ đãng mất tập trung"
        ]
      },
      {
        "id": "emo_12",
        "word": "stubborn",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈstʌb.ən/",
        "meaningVi": "bướng bỉnh, cứng đầu",
        "collocations": "stubborn attitude, as stubborn as a mule",
        "example": "He was too stubborn to admit that his architectural approach had flaws.",
        "exampleVi": "Anh ấy quá bướng bỉnh cứng đầu đến mức không chịu thừa nhận cách tiếp cận kiến trúc của mình có lỗ hổng.",
        "optionsVi": [
          "bướng bỉnh, cứng đầu",
          "khiêm tốn biết lắng nghe",
          "dễ tính xuề xòa",
          "nhút nhát sợ hãi"
        ]
      },
      {
        "id": "emo_13",
        "word": "easygoing",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˌiː.ziˈɡəʊ.ɪŋ/",
        "meaningVi": "dễ tính, hòa nhã",
        "collocations": "easygoing personality, easygoing manager",
        "example": "Our new engineering manager has a relaxed and easygoing personality.",
        "exampleVi": "Quản lý kỹ thuật mới của chúng tôi có tính cách rất thoải mái và dễ tính.",
        "optionsVi": [
          "dễ tính, hòa nhã",
          "khó tính khắt khe",
          "nóng nảy cáu gắt",
          "nghiêm trang cứng nhắc"
        ]
      },
      {
        "id": "emo_14",
        "word": "optimistic",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˌɒp.tɪˈmɪs.tɪk/",
        "meaningVi": "lạc quan yêu đời",
        "collocations": "optimistic about the future, remain optimistic",
        "example": "Despite the market downturn, our CEO remains deeply optimistic about our growth.",
        "exampleVi": "Dù thị trường suy thoái, CEO của chúng tôi vẫn giữ thái độ vô cùng lạc quan về sự tăng trưởng.",
        "optionsVi": [
          "lạc quan yêu đời",
          "bi quan thất vọng",
          "lo âu thấp thỏm",
          "nghi ngờ dè chừng"
        ]
      },
      {
        "id": "emo_15",
        "word": "pessimistic",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˌpes.ɪˈmɪs.tɪk/",
        "meaningVi": "bi quan, nhìn nhận tiêu cực",
        "collocations": "pessimistic view, overly pessimistic",
        "example": "Don't be so pessimistic; we still have two weeks before the final release.",
        "exampleVi": "Đừng bi quan như vậy; chúng ta vẫn còn tới hai tuần nữa trước ngày ra mắt chính thức mà.",
        "optionsVi": [
          "bi quan, nhìn nhận tiêu cực",
          "lạc quan tin tưởng",
          "hào hứng đón nhận",
          "bình thản ung dung"
        ]
      },
      {
        "id": "emo_16",
        "word": "trustworthy",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈtrʌstˌwɜː.ði/",
        "meaningVi": "đáng tin cậy, giữ chữ tín",
        "collocations": "trustworthy partner, highly trustworthy, trustworthy friend",
        "example": "She is a trustworthy friend; you can safely tell her any secret.",
        "exampleVi": "Cô ấy là một người bạn rất đáng tin cậy; bạn có thể yên tâm chia sẻ bất kỳ bí mật nào.",
        "optionsVi": [
          "đáng tin cậy, giữ chữ tín",
          "dễ phản bội",
          "nguy hiểm lừa lọc",
          "thất hứa thường xuyên"
        ]
      },
      {
        "id": "emo_17",
        "word": "overwhelmed",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˌəʊ.vəˈwelmd/",
        "meaningVi": "quá tải, choáng ngợp",
        "collocations": "feel overwhelmed, overwhelmed by work, emotionally overwhelmed",
        "example": "I felt overwhelmed by the hundreds of unread emails waiting in my inbox.",
        "exampleVi": "Tôi cảm thấy choáng ngợp và quá tải trước hàng trăm email chưa đọc trong hộp thư.",
        "optionsVi": [
          "quá tải, choáng ngợp",
          "rảnh rỗi thảnh thơi",
          "vui vẻ phấn chấn",
          "hài lòng tuyệt đối"
        ]
      },
      {
        "id": "emo_18",
        "word": "thrilled",
        "level": "B1",
        "type": "adjective",
        "ipa": "/θrɪld/",
        "meaningVi": "vô cùng phấn khích",
        "collocations": "thrilled to announce, absolutely thrilled",
        "example": "We are thrilled to announce that our app reached 100,000 active users.",
        "exampleVi": "Chúng tôi vô cùng phấn khích thông báo ứng dụng đã cán mốc 100.000 người dùng tích cực.",
        "optionsVi": [
          "vô cùng phấn khích",
          "thất vọng tột cùng",
          "sợ hãi kinh hoàng",
          "nghi ngờ hoang mang"
        ]
      },
      {
        "id": "emo_19",
        "word": "anxious",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈæŋk.ʃəs/",
        "meaningVi": "lo lắng bồn chồn",
        "collocations": "feel anxious, anxious about exam, reduce anxiety",
        "example": "It is completely natural to feel anxious before a major job interview.",
        "exampleVi": "Cảm thấy bồn chồn lo lắng trước một buổi phỏng vấn xin việc quan trọng là điều hoàn toàn tự nhiên.",
        "optionsVi": [
          "lo lắng bồn chồn",
          "bình thản tự tin",
          "phấn khởi hào hứng",
          "vô tâm không màng"
        ]
      },
      {
        "id": "emo_20",
        "word": "awkward",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈɔː.kwəd/",
        "meaningVi": "ngượng ngùng, khó xử",
        "collocations": "awkward silence, awkward situation, feel awkward",
        "example": "There was an awkward silence when no one could answer the director's question.",
        "exampleVi": "Đã có một sự im lặng ngượng ngùng khó xử khi không ai trả lời được câu hỏi của giám đốc.",
        "optionsVi": [
          "ngượng ngùng, khó xử",
          "thoải mái tự nhiên",
          "hài hước dí dỏm",
          "nghiêm túc trang trọng"
        ]
      },
      {
        "id": "emo_21",
        "word": "embarrassed",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ɪmˈbær.əst/",
        "meaningVi": "xấu hổ đỏ mặt",
        "collocations": "feel embarrassed, deeply embarrassed, embarrassed by mistakes",
        "example": "He felt embarrassed when he forgot his mic was still unmuted during the all-hands meeting.",
        "exampleVi": "Anh ấy cảm thấy xấu hổ đỏ mặt khi quên chưa tắt mic trong cuộc họp toàn thể công ty.",
        "optionsVi": [
          "xấu hổ đỏ mặt",
          "tự hào kiêu hãnh",
          "tức giận bùng nổ",
          "thờ ơ không quan tâm"
        ]
      },
      {
        "id": "emo_22",
        "word": "empathetic",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˌem.pəˈθet.ɪk/",
        "meaningVi": "biết thấu cảm đồng cảm",
        "collocations": "empathetic listener, empathetic leader",
        "example": "An empathetic leader always listens attentively to their team's struggles.",
        "exampleVi": "Một nhà lãnh đạo biết thấu cảm luôn chăm chú lắng nghe những khó khăn của đội ngũ.",
        "optionsVi": [
          "biết thấu cảm đồng cảm",
          "lạnh lùng vô cảm",
          "ích kỷ hẹp hòi",
          "nịnh bợ lấy lòng"
        ]
      },
      {
        "id": "emo_23",
        "word": "proud of",
        "level": "A2",
        "type": "collocation",
        "ipa": "/praʊd əv/",
        "meaningVi": "tự hào hãnh diện",
        "collocations": "proud of your achievements, be proud of yourself",
        "example": "Your parents must be exceptionally proud of your graduation honors.",
        "exampleVi": "Bố mẹ bạn ắt hẳn phải vô cùng tự hào về thành tích tốt nghiệp xuất sắc của bạn.",
        "optionsVi": [
          "tự hào hãnh diện",
          "thất vọng chán nản",
          "lo lắng thấp thỏm",
          "ghen tị đố kỵ"
        ]
      },
      {
        "id": "emo_24",
        "word": "disappointed",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˌdɪs.əˈpɔɪn.tɪd/",
        "meaningVi": "thất vọng hụt hẫng",
        "collocations": "deeply disappointed, disappointed with results",
        "example": "We were deeply disappointed that our favorite coffee shop closed down.",
        "exampleVi": "Chúng tôi đã rất hụt hẫng thất vọng khi quán cà phê yêu thích của mình đóng cửa.",
        "optionsVi": [
          "thất vọng hụt hẫng",
          "vui mừng bất ngờ",
          "tự tin ngút ngàn",
          "không quan tâm"
        ]
      },
      {
        "id": "emo_25",
        "word": "curious",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈkjʊə.ri.əs/",
        "meaningVi": "tò mò, ham tìm tòi",
        "collocations": "curious about technology, stay curious, naturally curious",
        "example": "Great engineers remain curious about how underlying systems actually work.",
        "exampleVi": "Những kỹ sư giỏi luôn giữ tính tò mò muốn biết cách các hệ thống bên dưới thực sự vận hành.",
        "optionsVi": [
          "tò mò, ham tìm tòi",
          "thờ ơ buông xuôi",
          "tự mãn kiêu ngạo",
          "ngại học hỏi"
        ]
      },
      {
        "id": "emo_26",
        "word": "jealous",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈdʒel.əs/",
        "meaningVi": "ghen tị đố kỵ",
        "collocations": "feel jealous of someone, jealous behavior",
        "example": "Instead of feeling jealous of others' success, learn from their habits.",
        "exampleVi": "Thay vì ghen tị với thành công của người khác, hãy học hỏi từ các thói quen của họ.",
        "optionsVi": [
          "ghen tị đố kỵ",
          "ngưỡng mộ chân thành",
          "chia vui thật lòng",
          "ủng hộ nhiệt tình"
        ]
      },
      {
        "id": "emo_27",
        "word": "supportive",
        "level": "B1",
        "type": "adjective",
        "ipa": "/səˈpɔː.tɪv/",
        "meaningVi": "luôn ủng hộ giúp đỡ",
        "collocations": "supportive family, highly supportive environment",
        "example": "Having a supportive partner makes overcoming career obstacles much easier.",
        "exampleVi": "Có một người bạn đời luôn ủng hộ giúp việc vượt qua các trở ngại sự nghiệp dễ dàng hơn nhiều.",
        "optionsVi": [
          "luôn ủng hộ giúp đỡ",
          "cản trở phá hoại",
          "chỉ trích cay nghiệt",
          "bỏ rơi lúc khó khăn"
        ]
      },
      {
        "id": "emo_28",
        "word": "introverted",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈɪn.trə.vɜː.tɪd/",
        "meaningVi": "hướng nội",
        "collocations": "introverted person, recharge alone as an introvert",
        "example": "Many gifted software developers are naturally introverted and thrive in quiet focus.",
        "exampleVi": "Nhiều lập trình viên tài năng có tính cách hướng nội bẩm sinh và làm việc rất tốt khi tập trung yên tĩnh.",
        "optionsVi": [
          "hướng nội",
          "hướng ngoại thích tiệc tùng",
          "nói nhiều ba hoa",
          "thích gây chú ý"
        ]
      },
      {
        "id": "emo_29",
        "word": "extroverted",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈek.strə.vɜː.tɪd/",
        "meaningVi": "hướng ngoại",
        "collocations": "extroverted personality, outgoing and extroverted",
        "example": "Sales representatives are typically extroverted people who love meeting strangers.",
        "exampleVi": "Đại diện bán hàng thường là những người hướng ngoại rất thích gặp gỡ người lạ.",
        "optionsVi": [
          "hướng ngoại",
          "hướng nội trầm lắng",
          "nhút nhát sợ giao tiếp",
          "thích ở một mình"
        ]
      },
      {
        "id": "emo_30",
        "word": "sensitive",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈsen.sɪ.tɪv/",
        "meaningVi": "nhạy cảm, tế nhị",
        "collocations": "sensitive topic, highly sensitive, sensitive skin",
        "example": "Salary discussion is often considered a sensitive topic in Asian cultures.",
        "exampleVi": "Thảo luận về tiền lương thường được coi là một chủ đề tế nhị nhạy cảm trong văn hóa châu Á.",
        "optionsVi": [
          "nhạy cảm, tế nhị",
          "vô tâm bộc trực",
          "thô lỗ cộc cằn",
          "bình thường hiển nhiên"
        ]
      }
    ]
  },
  {
    "groupId": "leisure_hobbies_entertainment",
    "name": "Sở Thích, Giải Trí & Nghệ Thuật",
    "icon": "🎨",
    "category": "daily",
    "level": "A2",
    "description": "Phim ảnh, âm nhạc, cắm trại dã ngoại, sách, thể thao điện tử và nghệ thuật cuối tuần.",
    "words": [
      {
        "id": "leisure_01",
        "word": "binge-watch",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈbɪndʒ wɒtʃ/",
        "meaningVi": "cày phim liên tục nhiều tập",
        "collocations": "binge-watch a series on Netflix, weekend binge-watching",
        "example": "I binge-watched the entire season of Stranger Things in one weekend.",
        "exampleVi": "Tôi đã cày sạch cả mùa phim Stranger Things chỉ trong một dịp cuối tuần.",
        "optionsVi": [
          "cày phim liên tục nhiều tập",
          "tắt tivi đi ngủ sớm",
          "xem tin tức thời sự",
          "xóa tài khoản xem phim"
        ]
      },
      {
        "id": "leisure_02",
        "word": "streaming service",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈstriː.mɪŋ ˌsɜː.vɪs/",
        "meaningVi": "dịch vụ phát trực tuyến",
        "collocations": "subscribe to a streaming service, popular streaming services",
        "example": "Most households now subscribe to at least one streaming service for movies.",
        "exampleVi": "Hầu hết các gia đình hiện nay đều đăng ký ít nhất một dịch vụ phát trực tuyến để xem phim.",
        "optionsVi": [
          "dịch vụ phát trực tuyến",
          "đài truyền hình cáp cũ",
          "đầu đĩa CD truyền thống",
          "dịch vụ bưu chính"
        ]
      },
      {
        "id": "leisure_03",
        "word": "blockbuster",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈblɒkˌbʌs.tər/",
        "meaningVi": "bom tấn điện ảnh ăn khách",
        "collocations": "Hollywood blockbuster, summer blockbuster movie",
        "example": "Avatar was an international blockbuster that shattered box office records.",
        "exampleVi": "Avatar là một bom tấn quốc tế đã phá vỡ mọi kỷ lục phòng vé.",
        "optionsVi": [
          "bom tấn điện ảnh ăn khách",
          "bộ phim tài liệu ngắn",
          "bộ phim bị cấm chiếu",
          "phim hoạt hình thiếu nhi"
        ]
      },
      {
        "id": "leisure_04",
        "word": "soundtrack",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈsaʊnd.træk/",
        "meaningVi": "nhạc phim",
        "collocations": "original motion picture soundtrack, listen to the soundtrack",
        "example": "The emotional soundtrack contributed greatly to the movie's success.",
        "exampleVi": "Nhạc phim đầy cảm xúc đã đóng góp rất lớn vào thành công của bộ phim.",
        "optionsVi": [
          "nhạc phim",
          "lời thoại kịch bản",
          "hình ảnh kỹ xảo",
          "danh sách diễn viên"
        ]
      },
      {
        "id": "leisure_05",
        "word": "live concert",
        "level": "A2",
        "type": "noun",
        "ipa": "/laɪv ˈkɒn.sət/",
        "meaningVi": "buổi hòa nhạc trực tiếp",
        "collocations": "attend a live concert, stadium live concert, buy concert tickets",
        "example": "Experiencing the electric atmosphere of a live concert is unforgettable.",
        "exampleVi": "Trải nghiệm bầu không khí bùng nổ của một buổi hòa nhạc trực tiếp là không thể nào quên.",
        "optionsVi": [
          "buổi hòa nhạc trực tiếp",
          "phòng thu âm kín",
          "chương trình radio",
          "lớp học thanh nhạc"
        ]
      },
      {
        "id": "leisure_06",
        "word": "go hiking",
        "level": "A2",
        "type": "collocation",
        "ipa": "/ɡəʊ ˈhaɪ.kɪŋ/",
        "meaningVi": "đi leo núi dã ngoại",
        "collocations": "go hiking in the mountains, hiking trail, hiking gear",
        "example": "We are planning to go hiking in Sapa to admire the terraced rice fields.",
        "exampleVi": "Chúng tôi đang lên kế hoạch đi leo núi dã ngoại ở Sa Pa để ngắm ruộng bậc thang.",
        "optionsVi": [
          "đi leo núi dã ngoại",
          "đi bơi ngoài biển",
          "đi mua sắm phố xá",
          "ngồi cà phê trò chuyện"
        ]
      },
      {
        "id": "leisure_07",
        "word": "board games",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈbɔːd ˌɡeɪmz/",
        "meaningVi": "trò chơi cờ bàn",
        "collocations": "play board games with friends, board game cafe",
        "example": "Playing board games with friends on a rainy evening is our favorite pastime.",
        "exampleVi": "Chơi board game cùng bạn bè trong một buổi tối mưa là trò tiêu khiển yêu thích của chúng tôi.",
        "optionsVi": [
          "trò chơi cờ bàn",
          "game đối kháng trên điện thoại",
          "trò chơi mạo hiểm",
          "môn thể thao ngoài trời"
        ]
      },
      {
        "id": "leisure_08",
        "word": "photography",
        "level": "A2",
        "type": "noun",
        "ipa": "/fəˈtɒɡ.rə.fi/",
        "meaningVi": "bộ môn nhiếp ảnh",
        "collocations": "landscape photography, passion for photography, amateur photography",
        "example": "He took up street photography as a creative hobby during college.",
        "exampleVi": "Anh ấy đã bắt đầu theo đuổi môn nhiếp ảnh đường phố như một sở thích sáng tạo thời đại học.",
        "optionsVi": [
          "bộ môn nhiếp ảnh",
          "nghệ thuật điêu khắc",
          "viết văn sáng tạo",
          "khiêu vũ thể thao"
        ]
      },
      {
        "id": "leisure_09",
        "word": "exhibition",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌek.sɪˈbɪʃ.ən/",
        "meaningVi": "cuộc triển lãm nghệ thuật",
        "collocations": "art exhibition, photo exhibition, visit an exhibition",
        "example": "The contemporary art exhibition attracted thousands of young visitors this weekend.",
        "exampleVi": "Triển lãm nghệ thuật đương đại đã thu hút hàng nghìn bạn trẻ ghé thăm cuối tuần này.",
        "optionsVi": [
          "cuộc triển lãm nghệ thuật",
          "buổi chiếu phim miễn phí",
          "hội chợ nông sản",
          "cuộc thi chạy bộ"
        ]
      },
      {
        "id": "leisure_10",
        "word": "pastime",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈpɑːs.taɪm/",
        "meaningVi": "thú vui tiêu khiển lúc rảnh",
        "collocations": "favorite pastime, popular pastime, outdoor pastimes",
        "example": "Reading mystery novels by the fireplace is my favorite winter pastime.",
        "exampleVi": "Đọc tiểu thuyết trinh thám bên lò sưởi là thú tiêu khiển yêu thích nhất vào mùa đông của tôi.",
        "optionsVi": [
          "thú vui tiêu khiển lúc rảnh",
          "công việc chính kiếm sống",
          "bổn phận gia đình",
          "nhiệm vụ bắt buộc"
        ]
      },
      {
        "id": "leisure_11",
        "word": "genre",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈʒɑ̃ː.rə/",
        "meaningVi": "thể loại phim / nhạc / sách",
        "collocations": "musical genre, literary genre, favorite film genre",
        "example": "Science fiction is undoubtedly my favorite movie genre.",
        "exampleVi": "Khoa học viễn tưởng chắc chắn là thể loại phim yêu thích nhất của tôi.",
        "optionsVi": [
          "thể loại phim / nhạc / sách",
          "tên tác giả sáng tác",
          "thời lượng phát sóng",
          "giải thưởng nghệ thuật"
        ]
      },
      {
        "id": "leisure_12",
        "word": "artwork",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈɑːt.wɜːk/",
        "meaningVi": "tác phẩm nghệ thuật",
        "collocations": "original artwork, display artwork, priceless artworks",
        "example": "The Louvre museum houses thousands of priceless historic artworks.",
        "exampleVi": "Bảo tàng Louvre lưu giữ hàng nghìn tác phẩm nghệ thuật lịch sử vô giá.",
        "optionsVi": [
          "tác phẩm nghệ thuật",
          "văn phòng phẩm",
          "bản thiết kế kỹ thuật",
          "vật tư xây dựng"
        ]
      },
      {
        "id": "leisure_13",
        "word": "outdoor activity",
        "level": "A2",
        "type": "collocation",
        "ipa": "/ˌaʊtˈdɔːr ækˈtɪv.ə.ti/",
        "meaningVi": "hoạt động ngoài trời",
        "collocations": "enjoy outdoor activities, outdoor activity gear",
        "example": "Kayaking and camping are exciting outdoor activities for youth.",
        "exampleVi": "Chèo thuyền kayak và cắm trại là những hoạt động ngoài trời đầy hào hứng cho giới trẻ.",
        "optionsVi": [
          "hoạt động ngoài trời",
          "trò chơi trong nhà",
          "học tập trực tuyến",
          "nghỉ ngơi tĩnh dưỡng"
        ]
      },
      {
        "id": "leisure_14",
        "word": "sports fan",
        "level": "A1",
        "type": "noun",
        "ipa": "/spɔːts fæn/",
        "meaningVi": "người hâm mộ thể thao",
        "collocations": "passionate sports fan, huge soccer fan",
        "example": "He is a die-hard sports fan who never misses a Manchester United match.",
        "exampleVi": "Anh ấy là một người hâm mộ thể thao cuồng nhiệt không bao giờ bỏ lỡ trận đấu nào của Man United.",
        "optionsVi": [
          "người hâm mộ thể thao",
          "vận động viên chuyên nghiệp",
          "trọng tài điều khiển trận đấu",
          "huấn luyện viên trưởng"
        ]
      },
      {
        "id": "leisure_15",
        "word": "amateur",
        "level": "B1",
        "type": "adjective / noun",
        "ipa": "/ˈæm.ə.tər/",
        "meaningVi": "nghiệp dư, không chuyên",
        "collocations": "amateur photographer, amateur tournament",
        "example": "Although he is just an amateur painter, his oil portraits are breathtaking.",
        "exampleVi": "Dù chỉ là một họa sĩ nghiệp dư nhưng những bức tranh chân dung sơn dầu của anh ấy đẹp đến nghẹt thở.",
        "optionsVi": [
          "nghiệp dư, không chuyên",
          "chuyên nghiệp đỉnh cao",
          "giảng viên đại học",
          "người mới học việc"
        ]
      },
      {
        "id": "leisure_16",
        "word": "recreation",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌrek.riˈeɪ.ʃən/",
        "meaningVi": "sự giải trí phục hồi sức",
        "collocations": "parks and recreation, recreation center, outdoor recreation",
        "example": "The community recreation center offers swimming, badminton, and yoga classes.",
        "exampleVi": "Trung tâm sinh hoạt giải trí cộng đồng cung cấp các lớp bơi lội, cầu lông và yoga.",
        "optionsVi": [
          "sự giải trí phục hồi sức",
          "lao động công ích",
          "nghiên cứu khoa học",
          "khám chữa bệnh"
        ]
      },
      {
        "id": "leisure_17",
        "word": "play an instrument",
        "level": "A2",
        "type": "collocation",
        "ipa": "/pleɪ ən ˈɪn.strə.mənt/",
        "meaningVi": "chơi một nhạc cụ",
        "collocations": "learn to play an instrument, musical instrument",
        "example": "Learning to play a musical instrument stimulates brain development.",
        "exampleVi": "Học chơi một nhạc cụ giúp kích thích phát triển trí não rất tốt.",
        "optionsVi": [
          "chơi một nhạc cụ",
          "hát karaoke",
          "nghe nhạc qua tai nghe",
          "khiêu vũ theo nhạc"
        ]
      },
      {
        "id": "leisure_18",
        "word": "audience",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈɔː.di.əns/",
        "meaningVi": "khán giả, người xem",
        "collocations": "cheering audience, huge audience, audience applause",
        "example": "The entire audience stood up and applauded loudly at the end of the play.",
        "exampleVi": "Toàn bộ khán giả đã đứng dậy vỗ tay vang dội khi vở kịch kết thúc.",
        "optionsVi": [
          "khán giả, người xem",
          "diễn viên trên sân khấu",
          "nhân viên hậu đài",
          "ban tổ chức sự kiện"
        ]
      },
      {
        "id": "leisure_19",
        "word": "creative",
        "level": "A2",
        "type": "adjective",
        "ipa": "/kriˈeɪ.tɪv/",
        "meaningVi": "sáng tạo, mới mẻ",
        "collocations": "creative thinking, creative ideas, highly creative",
        "example": "Cooking without following strict recipes encourages you to be more creative.",
        "exampleVi": "Nấu ăn mà không rập khuôn theo công thức gò bó sẽ khuyến khích bạn sáng tạo hơn.",
        "optionsVi": [
          "sáng tạo, mới mẻ",
          "rập khuôn cứng nhắc",
          "bắt chước sao chép",
          "nhàm chán đơn điệu"
        ]
      },
      {
        "id": "leisure_20",
        "word": "relaxing",
        "level": "A1",
        "type": "adjective",
        "ipa": "/rɪˈlæk.sɪŋ/",
        "meaningVi": "thư giãn, dễ chịu",
        "collocations": "relaxing music, relaxing weekend, deeply relaxing",
        "example": "Listening to instrumental jazz is a deeply relaxing experience after work.",
        "exampleVi": "Nghe nhạc jazz không lời là một trải nghiệm vô cùng thư giãn sau giờ làm.",
        "optionsVi": [
          "thư giãn, dễ chịu",
          "căng thẳng mệt mỏi",
          "ồn ào náo loạn",
          "áp lực nặng nề"
        ]
      },
      {
        "id": "leisure_21",
        "word": "gallery",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈɡæl.ər.i/",
        "meaningVi": "phòng tranh triển lãm",
        "collocations": "art gallery, visit a gallery, contemporary gallery",
        "example": "We visited an independent art gallery showcasing paintings by young Hanoi artists.",
        "exampleVi": "Chúng tôi đã ghé thăm một phòng trưng bày nghệ thuật độc lập trưng bày tranh của các nghệ sĩ trẻ Hà Nội.",
        "optionsVi": [
          "phòng tranh triển lãm",
          "rạp chiếu phim",
          "sân vận động thể thao",
          "trung tâm hội nghị"
        ]
      },
      {
        "id": "leisure_22",
        "word": "festival",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈfes.tɪ.vəl/",
        "meaningVi": "lễ hội, liên hoan",
        "collocations": "music festival, film festival, annual festival",
        "example": "Da Nang International Fireworks Festival attracts hundreds of thousands of tourists annually.",
        "exampleVi": "Lễ hội pháo hoa quốc tế Đà Nẵng thu hút hàng trăm nghìn du khách hàng năm.",
        "optionsVi": [
          "lễ hội, liên hoan",
          "kỳ thi sát hạch",
          "buổi hội thảo khoa học",
          "cuộc họp nội bộ"
        ]
      },
      {
        "id": "leisure_23",
        "word": "camping",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈkæm.pɪŋ/",
        "meaningVi": "đi cắm trại",
        "collocations": "go camping, camping tent, camping gear",
        "example": "We set up our camping tent near the lake and grilled food over the campfire.",
        "exampleVi": "Chúng tôi dựng lều cắm trại gần hồ và nướng đồ ăn bên bếp lửa trại.",
        "optionsVi": [
          "đi cắm trại",
          "nghỉ tại khách sạn 5 sao",
          "đi xem ca nhạc",
          "ở nhà ngủ nghỉ"
        ]
      },
      {
        "id": "leisure_24",
        "word": "passion",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈpæʃ.ən/",
        "meaningVi": "niềm đam mê cháy bỏng",
        "collocations": "pursue your passion, lifelong passion, have a passion for",
        "example": "He left his corporate banking job to pursue his lifelong passion for baking.",
        "exampleVi": "Anh ấy đã từ bỏ công việc ngân hàng để theo đuổi niềm đam mê làm bánh suốt đời của mình.",
        "optionsVi": [
          "niềm đam mê cháy bỏng",
          "nỗi sợ hãi ám ảnh",
          "sự ép buộc miễn cưỡng",
          "thói quen vô thức"
        ]
      },
      {
        "id": "leisure_25",
        "word": "pottery",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈpɒt.ər.i/",
        "meaningVi": "nghề làm gốm sứ",
        "collocations": "pottery workshop, handmade pottery, pottery making",
        "example": "Taking a weekend pottery workshop in Bat Trang village was deeply therapeutic.",
        "exampleVi": "Tham gia workshop làm gốm cuối tuần ở làng Bát Tràng giúp chữa lành tâm hồn rất tốt.",
        "optionsVi": [
          "nghề làm gốm sứ",
          "nghề dệt vải",
          "nghề mộc thủ công",
          "nghề rèn kim loại"
        ]
      },
      {
        "id": "leisure_26",
        "word": "cinema ticket",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈsɪn.ə.mə ˈtɪk.ɪt/",
        "meaningVi": "vé vào rạp xem phim",
        "collocations": "book cinema tickets online, buy two cinema tickets",
        "example": "You can book cinema tickets in advance via mobile banking apps.",
        "exampleVi": "Bạn có thể đặt vé xem phim trước qua các ứng dụng ngân hàng di động.",
        "optionsVi": [
          "vé vào rạp xem phim",
          "vé máy bay",
          "vé tàu hỏa",
          "vé giữ xe"
        ]
      },
      {
        "id": "leisure_27",
        "word": "video game",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈvɪd.i.əʊ ɡeɪm/",
        "meaningVi": "trò chơi điện tử",
        "collocations": "play video games, video game console",
        "example": "Playing multiplayer video games online keeps me connected with high school friends.",
        "exampleVi": "Chơi game trực tuyến nhiều người giúp tôi giữ kết nối với bạn bè thời cấp ba.",
        "optionsVi": [
          "trò chơi điện tử",
          "phim hoạt hình",
          "chương trình truyền hình",
          "video ca nhạc"
        ]
      },
      {
        "id": "leisure_28",
        "word": "talent",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈtæl.ənt/",
        "meaningVi": "tài năng thiên bẩm",
        "collocations": "natural talent, musical talent, show your talent",
        "example": "She has a natural talent for playing the acoustic guitar without formal training.",
        "exampleVi": "Cô ấy có năng khiếu thiên bẩm chơi đàn guitar acoustic dù không qua trường lớp đào tạo.",
        "optionsVi": [
          "tài năng thiên bẩm",
          "sự may mắn ngẫu nhiên",
          "tiền bạc của cải",
          "tấm bằng khen"
        ]
      },
      {
        "id": "leisure_29",
        "word": "read novels",
        "level": "A2",
        "type": "collocation",
        "ipa": "/riːd ˈnɒv.əlz/",
        "meaningVi": "đọc tiểu thuyết văn học",
        "collocations": "love to read novels, mystery novels",
        "example": "Reading novels before sleeping helps calm your racing thoughts.",
        "exampleVi": "Đọc tiểu thuyết trước khi đi ngủ giúp làm dịu những suy nghĩ miên man trong đầu.",
        "optionsVi": [
          "đọc tiểu thuyết văn học",
          "đọc báo tài chính",
          "lướt mạng xã hội",
          "viết nhật ký"
        ]
      },
      {
        "id": "leisure_30",
        "word": "museum",
        "level": "A1",
        "type": "noun",
        "ipa": "/mjuːˈziː.əm/",
        "meaningVi": "bảo tàng lịch sử",
        "collocations": "visit a museum, national museum, history museum",
        "example": "Vietnam Museum of Ethnology is a must-visit cultural attraction in Hanoi.",
        "exampleVi": "Bảo tàng Dân tộc học Việt Nam là một điểm đến văn hóa không thể bỏ qua tại Hà Nội.",
        "optionsVi": [
          "bảo tàng lịch sử",
          "công viên giải trí",
          "trung tâm thể thao",
          "rạp xiếc thành phố"
        ]
      }
    ]
  },
  {
    "groupId": "office_teamwork_collab",
    "name": "Làm Việc Nhóm, Họp Hành & Quản Lý",
    "icon": "💼",
    "category": "work",
    "level": "B1",
    "description": "Deadline, phối hợp đồng nghiệp, họp hành, phân chia nhiệm vụ, giải quyết xung đột và hiệu suất.",
    "words": [
      {
        "id": "office_01",
        "word": "meet the deadline",
        "level": "B1",
        "type": "collocation",
        "ipa": "/miːt ðə ˈded.laɪn/",
        "meaningVi": "hoàn thành đúng hạn chót",
        "collocations": "struggle to meet the deadline, ensure we meet the deadline, tight deadline",
        "example": "The whole team worked hard to meet the client's deadline.",
        "exampleVi": "Toàn bộ nhóm đã làm việc cật lực để kịp hạn chót của khách hàng.",
        "optionsVi": [
          "hoàn thành đúng hạn chót",
          "bị trễ tiến độ",
          "hủy bỏ dự án",
          "xin gia hạn thêm thời gian"
        ]
      },
      {
        "id": "office_02",
        "word": "collaborate",
        "level": "B1",
        "type": "verb",
        "ipa": "/kəˈlæb.ə.reɪt/",
        "meaningVi": "hợp tác, phối hợp",
        "collocations": "collaborate closely, collaborate on a project, collaborate with colleagues",
        "example": "Designers and developers need to collaborate closely on this feature.",
        "exampleVi": "Đội ngũ thiết kế và lập trình viên cần phối hợp chặt chẽ trong tính năng này.",
        "optionsVi": [
          "hợp tác, phối hợp",
          "làm việc độc lập",
          "cạnh tranh gay gắt",
          "đổ lỗi cho nhau"
        ]
      },
      {
        "id": "office_03",
        "word": "constructive feedback",
        "level": "B2",
        "type": "collocation",
        "ipa": "/kənˈstrʌk.tɪv ˈfiːd.bæk/",
        "meaningVi": "góp ý mang tính xây dựng",
        "collocations": "provide constructive feedback, open to constructive feedback",
        "example": "Constructive feedback from mentors helps junior engineers improve rapidly.",
        "exampleVi": "Góp ý mang tính xây dựng từ người hướng dẫn giúp các kỹ sư trẻ tiến bộ rất nhanh.",
        "optionsVi": [
          "góp ý mang tính xây dựng",
          "lời chỉ trích cay nghiệt",
          "báo cáo đánh giá KPI",
          "lời khen ngợi sáo rỗng"
        ]
      },
      {
        "id": "office_04",
        "word": "prioritize",
        "level": "B1",
        "type": "verb",
        "ipa": "/praɪˈɒr.ɪ.taɪz/",
        "meaningVi": "ưu tiên xử lý trước",
        "collocations": "prioritize urgent tasks, need to prioritize, prioritize customer satisfaction",
        "example": "We should prioritize fixing security vulnerabilities before releasing the app.",
        "exampleVi": "Chúng ta nên ưu tiên vá các lỗ hổng bảo mật trước khi phát hành ứng dụng.",
        "optionsVi": [
          "ưu tiên xử lý trước",
          "trì hoãn vô thời hạn",
          "làm ngơ, bỏ qua",
          "chia đều thời gian"
        ]
      },
      {
        "id": "office_05",
        "word": "delegate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈdel.ɪ.ɡeɪt/",
        "meaningVi": "ủy quyền, giao phó",
        "collocations": "delegate responsibilities, delegate tasks to team members",
        "example": "A great leader knows how to delegate tasks effectively.",
        "exampleVi": "Một người lãnh đạo giỏi là người biết cách giao việc cho cấp dưới hiệu quả.",
        "optionsVi": [
          "ủy quyền, giao phó",
          "tự ôm đồm hết việc",
          "né tránh trách nhiệm",
          "thu hồi quyền hạn"
        ]
      },
      {
        "id": "office_06",
        "word": "brainstorm",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈbreɪn.stɔːm/",
        "meaningVi": "động não tìm ý tưởng",
        "collocations": "brainstorm ideas, brainstorm solutions, brainstorming session",
        "example": "Let's gather in the meeting room to brainstorm new marketing ideas.",
        "exampleVi": "Hãy cùng vào phòng họp để cùng động não nghĩ ra các ý tưởng tiếp thị mới.",
        "optionsVi": [
          "động não tìm ý tưởng",
          "nghỉ ngơi thư giãn",
          "báo cáo tài chính",
          "tranh luận cá nhân"
        ]
      },
      {
        "id": "office_07",
        "word": "workload",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈwɜːk.ləʊd/",
        "meaningVi": "khối lượng công việc",
        "collocations": "heavy workload, manage workload, reduce the workload",
        "example": "She has been feeling stressed recently because of a heavy workload.",
        "exampleVi": "Gần đây cô ấy cảm thấy căng thẳng do khối lượng công việc quá nặng.",
        "optionsVi": [
          "khối lượng công việc",
          "tiền lương làm thêm giờ",
          "nơi làm việc",
          "lịch trình công tác"
        ]
      },
      {
        "id": "office_08",
        "word": "handle",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈhæn.dəl/",
        "meaningVi": "xử lý, giải quyết",
        "collocations": "handle pressure, handle customer complaints, handle requests",
        "example": "Can you handle this support ticket while I am in the meeting?",
        "exampleVi": "Bạn có thể xử lý phiếu hỗ trợ này giúp tôi trong lúc tôi đi họp không?",
        "optionsVi": [
          "xử lý, giải quyết",
          "bỏ qua không làm",
          "chuyển sang ngày mai",
          "từ chối tiếp nhận"
        ]
      },
      {
        "id": "office_09",
        "word": "agenda",
        "level": "B1",
        "type": "noun",
        "ipa": "/əˈdʒen.də/",
        "meaningVi": "chương trình cuộc họp",
        "collocations": "meeting agenda, top item on the agenda, adhere to the agenda",
        "example": "Please review the meeting agenda sent via email before joining the call.",
        "exampleVi": "Vui lòng xem qua chương trình cuộc họp gửi qua email trước khi tham gia cuộc gọi.",
        "optionsVi": [
          "chương trình cuộc họp",
          "biên bản xử phạt",
          "bản báo cáo tài chính",
          "danh sách khách mời"
        ]
      },
      {
        "id": "office_10",
        "word": "minute taker",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈmɪn.ɪt ˌteɪ.kər/",
        "meaningVi": "người ghi biên bản họp",
        "collocations": "act as the minute taker, meeting minutes",
        "example": "Who will be the minute taker for today's retrospective meeting?",
        "exampleVi": "Ai sẽ là người ghi chép biên bản cho cuộc họp rút kinh nghiệm hôm nay?",
        "optionsVi": [
          "người ghi biên bản họp",
          "người chủ trì cuộc họp",
          "diễn giả chính",
          "người bấm giờ cuộc họp"
        ]
      },
      {
        "id": "office_11",
        "word": "align with",
        "level": "B2",
        "type": "phrasal verb",
        "ipa": "/əˈlaɪn wɪð/",
        "meaningVi": "thống nhất, ăn khớp với",
        "collocations": "align with company goals, ensure team alignment",
        "example": "Our quarterly development plan must strictly align with business objectives.",
        "exampleVi": "Kế hoạch phát triển theo quý của chúng ta phải ăn khớp chặt chẽ với mục tiêu kinh doanh.",
        "optionsVi": [
          "thống nhất, ăn khớp với",
          "đi ngược lại hoàn toàn",
          "cạnh tranh trực tiếp",
          "loại bỏ mục tiêu"
        ]
      },
      {
        "id": "office_12",
        "word": "consensus",
        "level": "B2",
        "type": "noun",
        "ipa": "/kənˈsen.səs/",
        "meaningVi": "sự đồng thuận nhất trí",
        "collocations": "reach a consensus, broad consensus, general consensus",
        "example": "After two hours of intense debate, the board finally reached a consensus.",
        "exampleVi": "Sau 2 giờ tranh luận gay gắt, ban giám đốc cuối cùng đã đạt được sự đồng thuận.",
        "optionsVi": [
          "sự đồng thuận nhất trí",
          "sự bất đồng sâu sắc",
          "quyết định đơn phương",
          "việc bỏ phiếu kín"
        ]
      },
      {
        "id": "office_13",
        "word": "stakeholder",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈsteɪkˌhəʊl.dər/",
        "meaningVi": "bên liên quan dự án",
        "collocations": "key stakeholders, stakeholder management, meet with stakeholders",
        "example": "We held a demo session to collect feedback from key project stakeholders.",
        "exampleVi": "Chúng tôi đã tổ chức buổi demo để thu thập phản hồi từ các bên liên quan trọng yếu của dự án.",
        "optionsVi": [
          "bên liên quan dự án",
          "đối thủ cạnh tranh",
          "người đứng ngoài cuộc",
          "nhân viên bảo vệ tòa nhà"
        ]
      },
      {
        "id": "office_14",
        "word": "milestone",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈmaɪl.stəʊn/",
        "meaningVi": "cột mốc tiến độ quan trọng",
        "collocations": "project milestone, reach a major milestone, milestone achieved",
        "example": "Completing the database migration marks a critical milestone for our team.",
        "exampleVi": "Hoàn thành việc chuyển đổi cơ sở dữ liệu đánh dấu một cột mốc quan trọng của đội ngũ.",
        "optionsVi": [
          "cột mốc tiến độ quan trọng",
          "sự cố rủi ro",
          "khoản chi phí phát sinh",
          "cuộc họp khẩn"
        ]
      },
      {
        "id": "office_15",
        "word": "deliverable",
        "level": "B2",
        "type": "noun",
        "ipa": "/dɪˈlɪv.ər.ə.bəl/",
        "meaningVi": "sản phẩm bàn giao",
        "collocations": "key deliverables, project deliverables, deliverable deadline",
        "example": "The final deliverables include full API documentation and automated test suites.",
        "exampleVi": "Các sản phẩm bàn giao cuối cùng gồm tài liệu API đầy đủ và các bộ kiểm thử tự động.",
        "optionsVi": [
          "sản phẩm bàn giao",
          "hóa đơn thanh toán",
          "kế hoạch dự toán ngân sách",
          "đơn khiếu nại"
        ]
      },
      {
        "id": "office_16",
        "word": "benchmark",
        "level": "B2",
        "type": "noun / verb",
        "ipa": "/ˈbentʃ.mɑːk/",
        "meaningVi": "tiêu chuẩn so chuẩn hiệu năng",
        "collocations": "performance benchmark, benchmark against competitors",
        "example": "We benchmarked our website loading speed against top e-commerce competitors.",
        "exampleVi": "Chúng tôi đã đo chuẩn tốc độ tải trang web của mình so với các đối thủ thương mại điện tử hàng đầu.",
        "optionsVi": [
          "tiêu chuẩn so chuẩn hiệu năng",
          "bản nháp sơ thảo",
          "lỗi phát sinh",
          "giá thành sản phẩm"
        ]
      },
      {
        "id": "office_17",
        "word": "productivity",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌprɒd.ʌkˈtɪv.ə.ti/",
        "meaningVi": "năng suất làm việc",
        "collocations": "boost productivity, high productivity, employee productivity",
        "example": "Dual monitor setups can boost programmer productivity by up to 25%.",
        "exampleVi": "Thiết lập màn hình kép có thể tăng năng suất của lập trình viên lên tới 25%.",
        "optionsVi": [
          "năng suất làm việc",
          "chi phí vận hành",
          "sự mất tập trung",
          "thời gian nghỉ giải lao"
        ]
      },
      {
        "id": "office_18",
        "word": "efficiency",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪˈfɪʃ.ən.si/",
        "meaningVi": "tính hiệu quả, hiệu suất",
        "collocations": "improve efficiency, operational efficiency, cost efficiency",
        "example": "Automating routine deployment tasks improved our overall team efficiency.",
        "exampleVi": "Tự động hóa các tác vụ triển khai thông thường đã nâng cao hiệu suất tổng thể của nhóm.",
        "optionsVi": [
          "tính hiệu quả, hiệu suất",
          "sự lãng phí tài nguyên",
          "sự phức tạp rườm rà",
          "tính bảo mật"
        ]
      },
      {
        "id": "office_19",
        "word": "workflow",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈwɜːk.fləʊ/",
        "meaningVi": "quy trình luồng làm việc",
        "collocations": "smooth workflow, streamline workflow, workflow automation",
        "example": "Using Jira and GitHub together creates a seamless engineering workflow.",
        "exampleVi": "Sử dụng Jira kết hợp cùng GitHub tạo nên một quy trình làm việc kỹ thuật rất trơn tru.",
        "optionsVi": [
          "quy trình luồng làm việc",
          "kế hoạch tài chính",
          "nội quy kỷ luật",
          "mức lương thưởng"
        ]
      },
      {
        "id": "office_20",
        "word": "team player",
        "level": "A2",
        "type": "idiom",
        "ipa": "/ˈtiːm ˌpleɪ.ər/",
        "meaningVi": "người có tinh thần đồng đội",
        "collocations": "great team player, be a good team player",
        "example": "He is not just a skilled programmer; he is also an exceptional team player.",
        "exampleVi": "Anh ấy không chỉ là một lập trình viên giỏi mà còn là một đồng đội có tinh thần hợp tác tuyệt vời.",
        "optionsVi": [
          "người có tinh thần đồng đội",
          "người làm việc ích kỷ",
          "người quản lý khắt khe",
          "người thích tranh cãi"
        ]
      },
      {
        "id": "office_21",
        "word": "take the lead",
        "level": "B1",
        "type": "idiom",
        "ipa": "/teɪk ðə liːd/",
        "meaningVi": "đứng ra dẫn dắt, chủ trì",
        "collocations": "take the lead on this project, ready to take the lead",
        "example": "Sarah volunteered to take the lead on redesigning the checkout funnel.",
        "exampleVi": "Sarah đã xung phong đứng ra dẫn dắt việc thiết kế lại phễu thanh toán.",
        "optionsVi": [
          "đứng ra dẫn dắt, chủ trì",
          "rút lui khỏi dự án",
          "làm theo người khác",
          "từ chối nhận việc"
        ]
      },
      {
        "id": "office_22",
        "word": "multitask",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˌmʌl.tiˈtɑːsk/",
        "meaningVi": "làm nhiều việc cùng lúc",
        "collocations": "ability to multitask, multitask effectively",
        "example": "Trying to multitask while coding often leads to subtle logic errors.",
        "exampleVi": "Cố gắng làm nhiều việc cùng lúc khi đang viết mã thường dẫn đến các lỗi logic tiềm ẩn.",
        "optionsVi": [
          "làm nhiều việc cùng lúc",
          "tập trung vào một việc duy nhất",
          "nghỉ ngơi thư giãn",
          "giao việc cho người khác"
        ]
      },
      {
        "id": "office_23",
        "word": "resolve conflict",
        "level": "B2",
        "type": "collocation",
        "ipa": "/rɪˈzɒlv ˈkɒn.flɪkt/",
        "meaningVi": "giải quyết xung đột",
        "collocations": "resolve conflicts peacefully, skills to resolve conflict",
        "example": "A good manager knows how to resolve conflicts before they harm team morale.",
        "exampleVi": "Một người quản lý giỏi biết cách tháo gỡ xung đột trước khi chúng làm tổn hại tinh thần nhóm.",
        "optionsVi": [
          "giải quyết xung đột",
          "thổi bùng tranh cãi",
          "đổ thêm dầu vào lửa",
          "tránh né sự thật"
        ]
      },
      {
        "id": "office_24",
        "word": "supervise",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈsuː.pə.vaɪz/",
        "meaningVi": "giám sát, đôn đốc",
        "collocations": "supervise employees, closely supervise, supervise the process",
        "example": "Senior engineers supervise interns during their first three months.",
        "exampleVi": "Các kỹ sư cấp cao sẽ theo dõi đôn đốc các bạn thực tập sinh trong 3 tháng đầu.",
        "optionsVi": [
          "giám sát, đôn đốc",
          "bỏ mặc tự làm",
          "học việc từ đầu",
          "khiếu nại cấp trên"
        ]
      },
      {
        "id": "office_25",
        "word": "proposal",
        "level": "B1",
        "type": "noun",
        "ipa": "/prəˈpəʊ.zəl/",
        "meaningVi": "bản đề xuất dự án",
        "collocations": "submit a proposal, approve a proposal, project proposal",
        "example": "The committee approved our proposal to migrate our services to Google Cloud.",
        "exampleVi": "Hội đồng đã phê duyệt bản đề xuất chuyển đổi dịch vụ sang Google Cloud của chúng tôi.",
        "optionsVi": [
          "bản đề xuất dự án",
          "hợp đồng thanh lý",
          "quy định kỷ luật",
          "bản báo cáo doanh thu"
        ]
      },
      {
        "id": "office_26",
        "word": "follow up",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/ˈfɒl.əʊ ʌp/",
        "meaningVi": "theo dõi tiếp tiến độ",
        "collocations": "follow up on an issue, send a follow-up email",
        "example": "I will follow up with the vendor tomorrow to ensure on-time delivery.",
        "exampleVi": "Tôi sẽ liên hệ tiếp với nhà cung cấp vào ngày mai để đảm bảo giao hàng đúng hẹn.",
        "optionsVi": [
          "theo dõi tiếp tiến độ",
          "bỏ qua không quan tâm",
          "hủy bỏ thỏa thuận",
          "bắt đầu từ con số không"
        ]
      },
      {
        "id": "office_27",
        "word": "wrap up",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/ræp ʌp/",
        "meaningVi": "gói gọn kết thúc cuộc họp",
        "collocations": "wrap up the meeting, wrap up the discussion",
        "example": "Let's wrap up this meeting so everyone can get back to their development tasks.",
        "exampleVi": "Chúng ta hãy gói gọn cuộc họp ở đây để mọi người có thể quay lại với công việc lập trình.",
        "optionsVi": [
          "gói gọn kết thúc cuộc họp",
          "bắt đầu tranh luận mới",
          "kéo dài cuộc họp thêm giờ",
          "hoãn cuộc họp sang hôm khác"
        ]
      },
      {
        "id": "office_28",
        "word": "execute",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈek.sɪ.kjuːt/",
        "meaningVi": "thi hành, triển khai thực tế",
        "collocations": "execute a plan, execute strategies, execute with precision",
        "example": "Having a great plan is useless unless the team can execute it flawlessly.",
        "exampleVi": "Có một kế hoạch tuyệt vời cũng vô ích trừ khi cả nhóm có thể triển khai nó một cách chuẩn xác.",
        "optionsVi": [
          "thi hành, triển khai thực tế",
          "vẽ kế hoạch trên giấy",
          "hủy bỏ mục tiêu",
          "trì hoãn vô thời hạn"
        ]
      },
      {
        "id": "office_29",
        "word": "goal setting",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɡəʊl ˈset.ɪŋ/",
        "meaningVi": "thiết lập mục tiêu",
        "collocations": "effective goal setting, goal setting framework",
        "example": "Effective goal setting helps software teams stay focused on delivering actual value.",
        "exampleVi": "Thiết lập mục tiêu hiệu quả giúp các đội ngũ phần mềm duy trì tập trung vào việc tạo ra giá trị thực sự.",
        "optionsVi": [
          "thiết lập mục tiêu",
          "đánh giá kỷ luật",
          "khiếu nại quy trình",
          "phân bổ ngân sách"
        ]
      },
      {
        "id": "office_30",
        "word": "time management",
        "level": "A2",
        "type": "noun",
        "ipa": "/taɪm ˈmæn.ɪdʒ.mənt/",
        "meaningVi": "quản lý thời gian",
        "collocations": "good time management, time management skills",
        "example": "Good time management prevents burnout when dealing with multiple sprint tasks.",
        "exampleVi": "Kỹ năng quản lý thời gian tốt giúp phòng tránh kiệt sức khi phải giải quyết nhiều đầu việc trong sprint.",
        "optionsVi": [
          "quản lý thời gian",
          "tiết kiệm tiền bạc",
          "quản lý nhân sự",
          "chấm công vân tay"
        ]
      },
      {
        "id": "office_31",
        "word": "assign task",
        "level": "A2",
        "type": "collocation",
        "ipa": "/əˈsaɪn tɑːsk/",
        "meaningVi": "phân chia nhiệm vụ",
        "collocations": "assign tasks to engineers, assign high-priority tasks",
        "example": "The team lead assigns tasks based on each member's expertise.",
        "exampleVi": "Trưởng nhóm phân chia nhiệm vụ dựa trên chuyên môn của từng thành viên.",
        "optionsVi": [
          "phân chia nhiệm vụ",
          "tự làm hết mọi việc",
          "hủy bỏ đầu việc",
          "phạt lỗi nhân viên"
        ]
      },
      {
        "id": "office_32",
        "word": "conference call",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈkɒn.fər.əns kɔːl/",
        "meaningVi": "cuộc họp gọi trực tuyến",
        "collocations": "join a conference call, set up a conference call",
        "example": "We have an international conference call with our Australian partners at 2 PM.",
        "exampleVi": "Chúng tôi có một cuộc gọi họp trực tuyến quốc tế với đối tác Úc lúc 2 giờ chiều.",
        "optionsVi": [
          "cuộc họp gọi trực tuyến",
          "cuộc gọi điện thoại riêng",
          "gửi tin nhắn tự động",
          "bản thu âm podcast"
        ]
      },
      {
        "id": "office_33",
        "word": "department head",
        "level": "B1",
        "type": "noun",
        "ipa": "/dɪˈpɑːt.mənt hed/",
        "meaningVi": "trưởng phòng bộ phận",
        "collocations": "meet the department head, report to department head",
        "example": "Please obtain written approval from your department head before purchasing new software.",
        "exampleVi": "Vui lòng xin phê duyệt bằng văn bản từ trưởng bộ phận của bạn trước khi mua phần mềm mới.",
        "optionsVi": [
          "trưởng phòng bộ phận",
          "nhân viên học việc",
          "khách hàng đối tác",
          "chuyên viên tư vấn"
        ]
      },
      {
        "id": "office_34",
        "word": "on the same page",
        "level": "B1",
        "type": "idiom",
        "ipa": "/ɒn ðə seɪm peɪdʒ/",
        "meaningVi": "cùng hiểu chung một ý",
        "collocations": "make sure we are on the same page, be on the same page",
        "example": "Let's review the requirements once more to ensure everyone is on the same page.",
        "exampleVi": "Hãy cùng xem lại các yêu cầu một lần nữa để đảm bảo mọi người đều hiểu chung một ý thống nhất.",
        "optionsVi": [
          "cùng hiểu chung một ý",
          "đọc chung một cuốn sách",
          "bất đồng quan điểm",
          "tranh cãi dữ dội"
        ]
      },
      {
        "id": "office_35",
        "word": "burnout",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈbɜːn.aʊt/",
        "meaningVi": "hội chứng kiệt quệ tinh thần",
        "collocations": "suffer from burnout, prevent employee burnout, signs of burnout",
        "example": "Constant overtime and unrealistic deadlines are leading causes of developer burnout.",
        "exampleVi": "Liên tục làm thêm giờ và các hạn chót phi thực tế là nguyên nhân hàng đầu gây kiệt quệ cho lập trình viên.",
        "optionsVi": [
          "hội chứng kiệt quệ tinh thần",
          "cháy nổ thiết bị",
          "thăng tiến nhanh chóng",
          "năng suất đỉnh cao"
        ]
      }
    ]
  },
  {
    "groupId": "business_email_comm",
    "name": "Viết Email & Chat Công Việc",
    "icon": "✉️",
    "category": "work",
    "level": "B1",
    "description": "Mẫu câu chuẩn chuyên nghiệp dùng khi gửi Email, viết tin nhắn Slack/Teams cho sếp và đối tác.",
    "words": [
      {
        "id": "email_01",
        "word": "reach out to",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/riːtʃ aʊt tuː/",
        "meaningVi": "chủ động liên hệ, kết nối",
        "collocations": "reach out to support, feel free to reach out, reach out to partners",
        "example": "Feel free to reach out to me if you have any questions.",
        "exampleVi": "Đừng ngần ngại liên hệ với tôi nếu bạn có bất kỳ câu hỏi nào nhé.",
        "optionsVi": [
          "chủ động liên hệ, kết nối",
          "cắt đứt liên lạc",
          "tránh mặt người khác",
          "từ chối trả lời"
        ]
      },
      {
        "id": "email_02",
        "word": "touch base",
        "level": "B2",
        "type": "business idiom",
        "ipa": "/tʌtʃ beɪs/",
        "meaningVi": "trao đổi nhanh, cập nhật tin",
        "collocations": "touch base with someone, touch base next week, just wanted to touch base",
        "example": "I just wanted to touch base with you regarding our project schedule.",
        "exampleVi": "Tôi chỉ muốn trao đổi nhanh với bạn về tiến độ lịch trình dự án.",
        "optionsVi": [
          "trao đổi nhanh, cập nhật tin",
          "ký kết hợp đồng lớn",
          "hủy bỏ dự án",
          "yêu cầu sa thải"
        ]
      },
      {
        "id": "email_03",
        "word": "keep someone in the loop",
        "level": "B2",
        "type": "business idiom",
        "ipa": "/kiːp sʌm.wʌn ɪn ðə luːp/",
        "meaningVi": "luôn cập nhật thông tin cho biết",
        "collocations": "please keep me in the loop, stay in the loop, loop someone in",
        "example": "Please keep me in the loop on any major updates from the client.",
        "exampleVi": "Vui lòng giữ tôi trong luồng thông tin nếu có bất kỳ cập nhật lớn nào từ khách hàng.",
        "optionsVi": [
          "luôn cập nhật thông tin cho biết",
          "giấu kín thông tin",
          "không cho ai tham gia",
          "loại khỏi nhóm chat"
        ]
      },
      {
        "id": "email_04",
        "word": "as per our discussion",
        "level": "B2",
        "type": "formal phrase",
        "ipa": "/æz pɜːr aʊər dɪˈskʌʃ.ən/",
        "meaningVi": "theo như đã thảo luận",
        "collocations": "as per our phone call, as per our agreement, as per our conversation",
        "example": "As per our discussion yesterday, I have attached the updated contract.",
        "exampleVi": "Như chúng ta đã thống nhất hôm qua, tôi xin gửi đính kèm hợp đồng đã cập nhật.",
        "optionsVi": [
          "theo như đã thảo luận",
          "trái ngược với cam kết",
          "bỏ qua cuộc họp",
          "không liên quan thảo luận"
        ]
      },
      {
        "id": "email_05",
        "word": "look forward to",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/lʊk ˈfɔː.wəd tuː/",
        "meaningVi": "rất mong đợi, trông ngóng",
        "collocations": "look forward to hearing from you, look forward to seeing you",
        "example": "I look forward to hearing from you soon.",
        "exampleVi": "Tôi rất mong sớm nhận được phản hồi từ bạn.",
        "optionsVi": [
          "rất mong đợi, trông ngóng",
          "lo sợ điều gì đó xảy ra",
          "từ chối gặp mặt",
          "kết thúc vĩnh viễn"
        ]
      },
      {
        "id": "email_06",
        "word": "clarify",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈklær.ɪ.faɪ/",
        "meaningVi": "làm rõ, giải thích tường minh",
        "collocations": "clarify requirements, clarify the situation, seek clarification",
        "example": "Could you please clarify what you mean by 'Phase 2 deliverables'?",
        "exampleVi": "Bạn có thể vui lòng làm rõ ý bạn về 'các sản phẩm bàn giao ở Giai đoạn 2' không?",
        "optionsVi": [
          "làm rõ, giải thích tường minh",
          "làm cho phức tạp hơn",
          "giấu kín chi tiết",
          "đoán mò ý kiến"
        ]
      },
      {
        "id": "email_07",
        "word": "action item",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈæk.ʃən ˌaɪ.təm/",
        "meaningVi": "đầu việc cụ thể cần làm",
        "collocations": "assign action items, review action items, list of action items",
        "example": "Here is the summary of the meeting along with key action items.",
        "exampleVi": "Đây là tóm tắt cuộc họp kèm theo danh sách các đầu việc cụ thể cần làm.",
        "optionsVi": [
          "đầu việc cụ thể cần làm",
          "mục giải trí ngoài giờ",
          "ý kiến thảo luận lan man",
          "quy định kỷ luật"
        ]
      },
      {
        "id": "email_08",
        "word": "please find attached",
        "level": "B1",
        "type": "phrase",
        "ipa": "/pliːz faɪnd əˈtætʃt/",
        "meaningVi": "vui lòng xem tệp đính kèm",
        "collocations": "please find attached the invoice, please find attached report",
        "example": "Please find attached the financial report for the third quarter.",
        "exampleVi": "Vui lòng xem bản báo cáo tài chính quý 3 được đính kèm trong thư.",
        "optionsVi": [
          "vui lòng xem tệp đính kèm",
          "hãy xóa email này đi",
          "vui lòng gửi thư giấy",
          "không có tệp nào đính kèm"
        ]
      },
      {
        "id": "email_09",
        "word": "for your information",
        "level": "A2",
        "type": "phrase",
        "ipa": "/fɔːr jɔːr ˌɪn.fəˈmeɪ.ʃən/",
        "meaningVi": "gửi để bạn nắm thông tin",
        "collocations": "sharing this FYI, just for your information",
        "example": "I forwarded the client's email to you for your information (FYI).",
        "exampleVi": "Tôi đã chuyển tiếp email của khách hàng cho bạn để bạn nắm thông tin.",
        "optionsVi": [
          "gửi để bạn nắm thông tin",
          "yêu cầu bạn làm ngay",
          "báo cáo tài chính bí mật",
          "thư mời họp khẩn"
        ]
      },
      {
        "id": "email_10",
        "word": "circle back",
        "level": "B2",
        "type": "business idiom",
        "ipa": "/ˈsɜː.kəl bæk/",
        "meaningVi": "quay lại bàn tiếp sau",
        "collocations": "circle back next week, let's circle back on this later",
        "example": "Let's circle back on this topic after we have the complete data.",
        "exampleVi": "Chúng ta hãy quay lại bàn tiếp về chủ đề này sau khi có đủ số liệu hoàn chỉnh nhé.",
        "optionsVi": [
          "quay lại bàn tiếp sau",
          "chấm dứt vĩnh viễn",
          "đi vòng tròn quanh phòng",
          "đồng ý thực hiện ngay"
        ]
      },
      {
        "id": "email_11",
        "word": "kindly remind",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈkaɪnd.li rɪˈmaɪnd/",
        "meaningVi": "nhẹ nhàng nhắc nhở",
        "collocations": "kindly remind you of the deadline, just a gentle reminder",
        "example": "I would like to kindly remind you that timesheet submission closes at 5 PM.",
        "exampleVi": "Tôi xin phép được nhắc nhở bạn rằng cổng nộp bảng chấm công sẽ đóng lúc 5 giờ chiều.",
        "optionsVi": [
          "nhẹ nhàng nhắc nhở",
          "nghiêm khắc phê bình",
          "thông báo thưởng nóng",
          "yêu cầu hủy bỏ"
        ]
      },
      {
        "id": "email_12",
        "word": "on behalf of",
        "level": "B1",
        "type": "phrase",
        "ipa": "/ɒn bɪˈhɑːf əv/",
        "meaningVi": "thay mặt, đại diện cho",
        "collocations": "on behalf of our team, on behalf of the company",
        "example": "On behalf of the entire engineering team, thank you for your wonderful support.",
        "exampleVi": "Thay mặt cho toàn thể đội ngũ kỹ thuật, xin cảm ơn sự hỗ trợ tuyệt vời của bạn.",
        "optionsVi": [
          "thay mặt, đại diện cho",
          "phản đối quyết định của",
          "không liên quan tới",
          "chỉ trích cá nhân"
        ]
      },
      {
        "id": "email_13",
        "word": "reply promptly",
        "level": "B1",
        "type": "collocation",
        "ipa": "/rɪˈplaɪ ˈprɒmpt.li/",
        "meaningVi": "phản hồi nhanh chóng",
        "collocations": "appreciate your prompt reply, reply promptly to inquiries",
        "example": "Thank you for replying so promptly to our urgent server alert.",
        "exampleVi": "Cảm ơn bạn đã phản hồi rất nhanh chóng trước cảnh báo sự cố máy chủ khẩn cấp của chúng tôi.",
        "optionsVi": [
          "phản hồi nhanh chóng",
          "chậm trễ nhiều ngày",
          "từ chối trả lời",
          "gửi nhầm người nhận"
        ]
      },
      {
        "id": "email_14",
        "word": "CC someone",
        "level": "A2",
        "type": "verb",
        "ipa": "/siː siː/",
        "meaningVi": "đồng gửi email cho cùng đọc",
        "collocations": "please CC me on this email, CC the project manager",
        "example": "Please CC the project manager whenever you reply to the client.",
        "exampleVi": "Vui lòng CC quản lý dự án bất cứ khi nào bạn trả lời email cho khách hàng nhé.",
        "optionsVi": [
          "đồng gửi email cho cùng đọc",
          "gửi email ẩn danh",
          "chặn người nhận",
          "xóa địa chỉ thư"
        ]
      },
      {
        "id": "email_15",
        "word": "out of office",
        "level": "A2",
        "type": "phrase",
        "ipa": "/aʊt əv ˈɒf.ɪs/",
        "meaningVi": "nghỉ phép vắng mặt",
        "collocations": "set out-of-office autoreply, I am out of office until Monday",
        "example": "I will be out of office until next Monday with limited access to email.",
        "exampleVi": "Tôi sẽ nghỉ phép vắng mặt cho đến thứ Hai tuần tới và hạn chế kiểm tra email.",
        "optionsVi": [
          "nghỉ phép vắng mặt",
          "đang ngồi làm việc ở văn phòng",
          "đã bị sa thải",
          "tăng ca làm đêm"
        ]
      },
      {
        "id": "email_16",
        "word": "at your earliest convenience",
        "level": "B2",
        "type": "formal phrase",
        "ipa": "/æt jɔːr ˈɜː.li.ɪst kənˈviː.ni.əns/",
        "meaningVi": "ngay khi thuận tiện nhất",
        "collocations": "please review at your earliest convenience",
        "example": "Could you please sign and return the NDA document at your earliest convenience?",
        "exampleVi": "Bạn có thể vui lòng ký và gửi lại thỏa thuận bảo mật NDA ngay khi thuận tiện nhất được không?",
        "optionsVi": [
          "ngay khi thuận tiện nhất",
          "đợi đến cuối năm",
          "làm bất cứ lúc nào tùy thích",
          "không cần làm"
        ]
      },
      {
        "id": "email_17",
        "word": "apologize for the inconvenience",
        "level": "B1",
        "type": "formal phrase",
        "ipa": "/əˈpɒl.ə.dʒaɪz fɔːr ðə ˌɪn.kənˈviː.ni.əns/",
        "meaningVi": "xin lỗi vì sự bất tiện",
        "collocations": "sincerely apologize for the inconvenience caused",
        "example": "We sincerely apologize for any inconvenience caused by the scheduled maintenance.",
        "exampleVi": "Chúng tôi thành thật xin lỗi vì bất kỳ sự bất tiện nào phát sinh do đợt bảo trì định kỳ.",
        "optionsVi": [
          "xin lỗi vì sự bất tiện",
          "cảm ơn vì sự hợp tác",
          "từ chối giải quyết lỗi",
          "yêu cầu khách bồi thường"
        ]
      },
      {
        "id": "email_18",
        "word": "best regards",
        "level": "A1",
        "type": "phrase",
        "ipa": "/best rɪˈɡɑːdz/",
        "meaningVi": "lời chào trân trọng cuối thư",
        "collocations": "best regards, kind regards, warm regards",
        "example": "Best regards, Dung Tran - Lead Software Engineer.",
        "exampleVi": "Trân trọng, Trần Dũng - Kỹ sư phần mềm trưởng.",
        "optionsVi": [
          "lời chào trân trọng cuối thư",
          "lời mở đầu bức thư",
          "chủ đề bức thư",
          "tệp đính kèm thư"
        ]
      },
      {
        "id": "email_19",
        "word": "recap",
        "level": "B1",
        "type": "verb / noun",
        "ipa": "/ˈriː.kæp/",
        "meaningVi": "tóm tắt điểm chính",
        "collocations": "quick recap of the meeting, let's recap",
        "example": "To recap our discussion: team A handles the frontend and team B builds the API.",
        "exampleVi": "Để tóm tắt lại nội dung trao đổi: nhóm A phụ trách frontend và nhóm B xây dựng API.",
        "optionsVi": [
          "tóm tắt điểm chính",
          "tranh luận chi tiết",
          "hủy bỏ thỏa thuận",
          "ký kết hợp đồng"
        ]
      },
      {
        "id": "email_20",
        "word": "inquiry",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪnˈkwaɪə.ri/",
        "meaningVi": "yêu cầu tìm hiểu thông tin",
        "collocations": "customer inquiry, respond to inquiries, send an inquiry",
        "example": "We received an inquiry regarding enterprise pricing for our cloud service.",
        "exampleVi": "Chúng tôi vừa nhận được một yêu cầu tìm hiểu về bảng giá doanh nghiệp cho dịch vụ đám mây.",
        "optionsVi": [
          "yêu cầu tìm hiểu thông tin",
          "đơn kiện chính thức",
          "hóa đơn đòi nợ",
          "thư khen ngợi dịch vụ"
        ]
      },
      {
        "id": "email_21",
        "word": "draft",
        "level": "A2",
        "type": "noun / verb",
        "ipa": "/drɑːft/",
        "meaningVi": "bản nháp sơ bộ",
        "collocations": "draft email, save as draft, initial draft",
        "example": "I saved the announcement as a draft so my manager can review it first.",
        "exampleVi": "Tôi đã lưu thông báo dưới dạng bản nháp để quản lý xem qua trước.",
        "optionsVi": [
          "bản nháp sơ bộ",
          "bản in chính thức",
          "hợp đồng đóng dấu",
          "tài liệu mật"
        ]
      },
      {
        "id": "email_22",
        "word": "subject line",
        "level": "A1",
        "type": "noun",
        "ipa": "/ˈsʌb.dʒɪkt laɪn/",
        "meaningVi": "tiêu đề email",
        "collocations": "clear subject line, catchy subject line",
        "example": "A clear and concise subject line increases the email open rate dramatically.",
        "exampleVi": "Một dòng tiêu đề rõ ràng súc tích sẽ làm tăng đáng kể tỷ lệ mở email.",
        "optionsVi": [
          "tiêu đề email",
          "chữ ký cuối thư",
          "địa chỉ người gửi",
          "hộp thư rác spam"
        ]
      },
      {
        "id": "email_23",
        "word": "bullet points",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈbʊl.ɪt pɔɪnts/",
        "meaningVi": "dấu đầu dòng liệt kê ý",
        "collocations": "use bullet points, summarized in bullet points",
        "example": "Writing email updates in bullet points makes them much easier to scan.",
        "exampleVi": "Viết email cập nhật bằng các dấu đầu dòng giúp người đọc lướt nhanh dễ dàng hơn nhiều.",
        "optionsVi": [
          "dấu đầu dòng liệt kê ý",
          "đoạn văn dài dòng",
          "chữ ký số điện tử",
          "tiêu đề thư"
        ]
      },
      {
        "id": "email_24",
        "word": "sign off",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/saɪn ɒf/",
        "meaningVi": "kết thúc bức thư",
        "collocations": "sign off an email, sign off with warm regards",
        "example": "She usually signs off her professional emails with 'Kind regards'.",
        "exampleVi": "Cô ấy thường kết thư email công việc của mình bằng lời chào 'Kind regards'.",
        "optionsVi": [
          "kết thúc bức thư",
          "viết phần mở đầu",
          "chuyển tiếp thư",
          "xóa bức thư"
        ]
      },
      {
        "id": "email_25",
        "word": "thank you in advance",
        "level": "A2",
        "type": "phrase",
        "ipa": "/θæŋk juː ɪn ədˈvɑːns/",
        "meaningVi": "xin cảm ơn bạn trước",
        "collocations": "thank you in advance for your cooperation",
        "example": "Thank you in advance for your time and assistance with this request.",
        "exampleVi": "Xin cảm ơn bạn trước vì đã dành thời gian và hỗ trợ cho yêu cầu này.",
        "optionsVi": [
          "xin cảm ơn bạn trước",
          "từ chối sự giúp đỡ",
          "không cần hỗ trợ",
          "xin lỗi vì làm phiền"
        ]
      },
      {
        "id": "email_26",
        "word": "further details",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈfɜː.ðər ˈdiː.teɪlz/",
        "meaningVi": "thông tin chi tiết thêm",
        "collocations": "for further details, provide further details upon request",
        "example": "Please do not hesitate to contact us should you require any further details.",
        "exampleVi": "Xin đừng ngần ngại liên hệ với chúng tôi nếu bạn cần thêm bất kỳ thông tin chi tiết nào.",
        "optionsVi": [
          "thông tin chi tiết thêm",
          "kết luận chung chung",
          "tài liệu mật không được xem",
          "hóa đơn thanh toán"
        ]
      },
      {
        "id": "email_27",
        "word": "confirm receipt",
        "level": "B1",
        "type": "collocation",
        "ipa": "/kənˈfɜːm rɪˈsiːt/",
        "meaningVi": "xác nhận đã nhận được",
        "collocations": "please confirm receipt of this email",
        "example": "Could you please confirm receipt of the attached design files?",
        "exampleVi": "Bạn có thể vui lòng gửi xác nhận đã nhận được các tệp thiết kế đính kèm được không?",
        "optionsVi": [
          "xác nhận đã nhận được",
          "từ chối tiếp nhận",
          "yêu cầu gửi lại",
          "báo cáo tệp bị lỗi"
        ]
      },
      {
        "id": "email_28",
        "word": "urgent matter",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈɜː.dʒənt ˈmæt.ər/",
        "meaningVi": "việc khẩn cấp",
        "collocations": "handle an urgent matter, this is an urgent matter",
        "example": "I'm calling because we have an urgent matter that requires your immediate attention.",
        "exampleVi": "Tôi gọi điện vì chúng ta có một việc khẩn cấp đòi hỏi bạn phải giải quyết ngay lập tức.",
        "optionsVi": [
          "việc khẩn cấp",
          "công việc rảnh rỗi",
          "kế hoạch sang năm",
          "chuyện phiếm ngoài giờ"
        ]
      },
      {
        "id": "email_29",
        "word": "schedule a call",
        "level": "A2",
        "type": "collocation",
        "ipa": "/ˈskedʒ.uːl eɪ kɔːl/",
        "meaningVi": "lên lịch cuộc gọi",
        "collocations": "schedule a quick call, find time to schedule a call",
        "example": "Are you available tomorrow afternoon to schedule a quick 15-minute call?",
        "exampleVi": "Chiều mai bạn có rảnh để lên lịch một cuộc gọi nhanh 15 phút không?",
        "optionsVi": [
          "lên lịch cuộc gọi",
          "hủy cuộc gọi",
          "gọi điện làm phiền",
          "tắt máy điện thoại"
        ]
      },
      {
        "id": "email_30",
        "word": "brief overview",
        "level": "B1",
        "type": "collocation",
        "ipa": "/briːf ˈəʊ.və.vjuː/",
        "meaningVi": "bản tóm lược ngắn gọn",
        "collocations": "give a brief overview, provide a brief overview",
        "example": "Here is a brief overview of our architectural migration plan.",
        "exampleVi": "Dưới đây là bản tóm lược ngắn gọn về kế hoạch chuyển đổi kiến trúc hệ thống của chúng tôi.",
        "optionsVi": [
          "bản tóm lược ngắn gọn",
          "bản đặc tả chi tiết 100 trang",
          "khiếu nại kỹ thuật",
          "hóa đơn chi phí"
        ]
      },
      {
        "id": "email_31",
        "word": "reference number",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈref.ər.əns ˌnʌm.bər/",
        "meaningVi": "mã số tham chiếu hồ sơ",
        "collocations": "quote the reference number, ticket reference number",
        "example": "Please quote this reference number in all future email correspondence.",
        "exampleVi": "Vui lòng trích dẫn mã số tham chiếu này trong tất cả các thư trao đổi tiếp theo.",
        "optionsVi": [
          "mã số tham chiếu hồ sơ",
          "mã số thuế cá nhân",
          "số điện thoại bàn",
          "mã giảm giá"
        ]
      },
      {
        "id": "email_32",
        "word": "formal invitation",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈfɔː.məl ˌɪn.vɪˈteɪ.ʃən/",
        "meaningVi": "thư mời trang trọng",
        "collocations": "send a formal invitation, receive a formal invitation",
        "example": "We sent a formal invitation to the keynote speaker for our annual tech summit.",
        "exampleVi": "Chúng tôi đã gửi thư mời chính thức tới diễn giả chính cho hội nghị thượng đỉnh công nghệ thường niên.",
        "optionsVi": [
          "thư mời trang trọng",
          "thư từ chối nhận việc",
          "thông báo kỷ luật",
          "hóa đơn thu tiền"
        ]
      },
      {
        "id": "email_33",
        "word": "take note of",
        "level": "B1",
        "type": "collocation",
        "ipa": "/teɪk nəʊt əv/",
        "meaningVi": "chú ý ghi nhận",
        "collocations": "please take note of the changes, take note that",
        "example": "Please take note of the updated API authentication headers effective next week.",
        "exampleVi": "Vui lòng chú ý ghi nhận các header xác thực API mới sẽ có hiệu lực từ tuần sau.",
        "optionsVi": [
          "chú ý ghi nhận",
          "bỏ qua không đọc",
          "tẩy xóa thông tin",
          "phản bác ý kiến"
        ]
      },
      {
        "id": "email_34",
        "word": "thread",
        "level": "A2",
        "type": "noun",
        "ipa": "/θred/",
        "meaningVi": "luồng tin nhắn thảo luận",
        "collocations": "email thread, reply in thread, start a new thread",
        "example": "Please reply in this Slack thread to keep the main channel tidy.",
        "exampleVi": "Vui lòng trả lời trong luồng tin nhắn thread này để giữ kênh chat chính gọn gàng.",
        "optionsVi": [
          "luồng tin nhắn thảo luận",
          "sợi chỉ may vá",
          "bức ảnh đại diện",
          "đường link độc hại"
        ]
      },
      {
        "id": "email_35",
        "word": "mute notifications",
        "level": "A2",
        "type": "collocation",
        "ipa": "/mjuːt ˌnəʊ.tɪ.fɪˈkeɪ.ʃənz/",
        "meaningVi": "tắt chuông thông báo",
        "collocations": "mute notifications for 1 hour, mute chat channel",
        "example": "I muted notifications on Teams during my deep focus coding session.",
        "exampleVi": "Tôi đã tắt thông báo trên Teams trong lúc tập trung cao độ viết code.",
        "optionsVi": [
          "tắt chuông thông báo",
          "bật loa ngoài",
          "xóa tài khoản chat",
          "gửi tin nhắn hàng loạt"
        ]
      }
    ]
  },
  {
    "groupId": "job_interview_career",
    "name": "Phỏng Vấn, Tuyển Dụng & Sự Nghiệp",
    "icon": "🎯",
    "category": "work",
    "level": "B1",
    "description": "CV, thư ứng tuyển, đàm phán lương, thử việc, phúc lợi, thăng tiến và phát triển năng lực.",
    "words": [
      {
        "id": "career_01",
        "word": "curriculum vitae",
        "level": "B1",
        "type": "noun",
        "ipa": "/kəˌrɪk.jə.ləm ˈviː.taɪ/",
        "meaningVi": "sơ yếu lý lịch CV",
        "collocations": "submit your CV, update curriculum vitae, tailored CV",
        "example": "Make sure your curriculum vitae highlights your relevant engineering achievements.",
        "exampleVi": "Hãy chắc chắn rằng sơ yếu lý lịch CV của bạn làm nổi bật các thành tích kỹ thuật liên quan.",
        "optionsVi": [
          "sơ yếu lý lịch CV",
          "đơn xin nghỉ phép",
          "bản kiểm điểm",
          "hợp đồng bảo hiểm"
        ]
      },
      {
        "id": "career_02",
        "word": "cover letter",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈkʌv.ə ˌlet.ər/",
        "meaningVi": "thư xin việc",
        "collocations": "compelling cover letter, attach cover letter",
        "example": "A personalized cover letter explains why you are the ideal fit for the position.",
        "exampleVi": "Một bức thư xin việc mang dấu ấn cá nhân sẽ giải thích vì sao bạn là người phù hợp nhất cho vị trí đó.",
        "optionsVi": [
          "thư xin việc",
          "thư từ chức",
          "giấy giới thiệu",
          "thư mời phỏng vấn"
        ]
      },
      {
        "id": "career_03",
        "word": "job description",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈdʒɒb dɪˌskrɪp.ʃən/",
        "meaningVi": "bản mô tả công việc (JD)",
        "collocations": "read the job description carefully, match the JD",
        "example": "Please read the job description carefully to understand key role responsibilities.",
        "exampleVi": "Vui lòng đọc kỹ bản mô tả công việc JD để hiểu rõ các trách nhiệm chính của vị trí.",
        "optionsVi": [
          "bản mô tả công việc (JD)",
          "hợp đồng lao động",
          "bảng lương nhân viên",
          "nội quy công ty"
        ]
      },
      {
        "id": "career_04",
        "word": "hiring manager",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈhaɪə.rɪŋ ˌmæn.ɪ.dʒər/",
        "meaningVi": "người quản lý tuyển dụng",
        "collocations": "interview with the hiring manager, impress the hiring manager",
        "example": "The final interview round will be conducted by the technical hiring manager.",
        "exampleVi": "Vòng phỏng vấn cuối cùng sẽ được thực hiện bởi người quản lý tuyển dụng kỹ thuật.",
        "optionsVi": [
          "người quản lý tuyển dụng",
          "chuyên viên thực tập",
          "nhân viên hành chính",
          "chủ tịch công đoàn"
        ]
      },
      {
        "id": "career_05",
        "word": "candidate",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈkæn.dɪ.dət/",
        "meaningVi": "ứng viên ứng tuyển",
        "collocations": "ideal candidate, qualified candidates, shortlisted candidates",
        "example": "They shortlisted five strong candidates for the senior frontend position.",
        "exampleVi": "Họ đã chọn lọc được 5 ứng viên sáng giá vào danh sách rút gọn cho vị trí frontend senior.",
        "optionsVi": [
          "ứng viên ứng tuyển",
          "nhân viên thử việc",
          "người bị sa thải",
          "khách hàng tiềm năng"
        ]
      },
      {
        "id": "career_06",
        "word": "salary negotiation",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈsæl.ər.i nɪˌɡəʊ.ʃiˈeɪ.ʃən/",
        "meaningVi": "đàm phán lương",
        "collocations": "successful salary negotiation, prepare for salary negotiation",
        "example": "Do thorough research on market compensation rates before salary negotiation.",
        "exampleVi": "Hãy nghiên cứu kỹ mức đãi ngộ trên thị trường trước khi bước vào đàm phán lương.",
        "optionsVi": [
          "đàm phán lương",
          "trừ lương phạt",
          "tính thuế thu nhập",
          "thanh toán viện phí"
        ]
      },
      {
        "id": "career_07",
        "word": "probation period",
        "level": "B1",
        "type": "noun",
        "ipa": "/prəˈbeɪ.ʃən ˌpɪə.ri.əd/",
        "meaningVi": "thời gian thử việc",
        "collocations": "two-month probation period, pass the probation period",
        "example": "New employees receive 85% of full salary during their 2-month probation period.",
        "exampleVi": "Nhân viên mới nhận 85% lương chính thức trong thời gian 2 tháng thử việc.",
        "optionsVi": [
          "thời gian thử việc",
          "thời gian nghỉ phép năm",
          "hạn hợp đồng chính thức",
          "thời gian thực tập không lương"
        ]
      },
      {
        "id": "career_08",
        "word": "employee benefits",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪmˈplɔɪ.iː ˌben.ɪ.fɪts/",
        "meaningVi": "chế độ phúc lợi nhân viên",
        "collocations": "attractive employee benefits, full benefits package",
        "example": "Their employee benefits include private health insurance and an annual gym stipend.",
        "exampleVi": "Phúc lợi nhân viên của họ gồm bảo hiểm sức khỏe tư nhân và hỗ trợ phí tập gym hàng năm.",
        "optionsVi": [
          "chế độ phúc lợi nhân viên",
          "mức phạt đi muộn",
          "chi phí đào tạo",
          "ngân sách phòng ban"
        ]
      },
      {
        "id": "career_09",
        "word": "career path",
        "level": "A2",
        "type": "noun",
        "ipa": "/kəˈrɪər pɑːθ/",
        "meaningVi": "lộ trình sự nghiệp",
        "collocations": "clear career path, choose a career path, tech career path",
        "example": "The company offers a transparent dual career path: management or technical specialist.",
        "exampleVi": "Công ty đưa ra lộ trình sự nghiệp kép minh bạch: theo hướng quản lý hoặc chuyên gia kỹ thuật.",
        "optionsVi": [
          "lộ trình sự nghiệp",
          "bảng đánh giá KPI",
          "hồ sơ nhân sự",
          "chuyến đi công tác"
        ]
      },
      {
        "id": "career_10",
        "word": "promotion",
        "level": "A2",
        "type": "noun",
        "ipa": "/prəˈməʊ.ʃən/",
        "meaningVi": "sự thăng chức đề bạt",
        "collocations": "deserve a promotion, get promoted, promotion opportunities",
        "example": "He received a well-deserved promotion to Tech Lead after delivering the banking platform.",
        "exampleVi": "Anh ấy đã được thăng chức xứng đáng lên vị trí Tech Lead sau khi bàn giao nền tảng ngân hàng.",
        "optionsVi": [
          "sự thăng chức đề bạt",
          "việc sa thải nhân viên",
          "sự điều chuyển công tác",
          "cắt giảm biên chế"
        ]
      },
      {
        "id": "career_11",
        "word": "resign",
        "level": "B1",
        "type": "verb",
        "ipa": "/rɪˈzaɪn/",
        "meaningVi": "từ chức, xin thôi việc",
        "collocations": "tender your resignation, resign from your post",
        "example": "She decided to resign and spend six months studying AI in Germany.",
        "exampleVi": "Cô ấy quyết định nộp đơn xin thôi việc và dành 6 tháng sang Đức theo học về AI.",
        "optionsVi": [
          "từ chức, xin thôi việc",
          "ký hợp đồng làm tiếp",
          "khiếu nại quản lý",
          "xin tăng lương"
        ]
      },
      {
        "id": "career_12",
        "word": "offer letter",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈɒf.ər ˌlet.ər/",
        "meaningVi": "thư mời nhận việc",
        "collocations": "receive an offer letter, sign the offer letter, accept an offer",
        "example": "I was thrilled to receive a formal offer letter from a top tech company.",
        "exampleVi": "Tôi vô cùng phấn khích khi nhận được thư mời làm việc chính thức từ công ty công nghệ hàng đầu.",
        "optionsVi": [
          "thư mời nhận việc",
          "thư từ chối ứng tuyển",
          "thư cảnh cáo kỷ luật",
          "thông báo nghỉ lễ"
        ]
      },
      {
        "id": "career_13",
        "word": "strengths and weaknesses",
        "level": "A2",
        "type": "phrase",
        "ipa": "/streŋθs ænd ˈwiːk.nəs.ɪz/",
        "meaningVi": "điểm mạnh và điểm yếu",
        "collocations": "discuss your strengths and weaknesses, analyze strengths",
        "example": "'What are your biggest strengths and weaknesses?' is a classic interview question.",
        "exampleVi": "'Điểm mạnh và điểm yếu lớn nhất của bạn là gì?' là một câu hỏi phỏng vấn kinh điển.",
        "optionsVi": [
          "điểm mạnh và điểm yếu",
          "mức lương mong muốn",
          "bằng cấp chuyên môn",
          "mối quan hệ cá nhân"
        ]
      },
      {
        "id": "career_14",
        "word": "working environment",
        "level": "A2",
        "type": "collocation",
        "ipa": "/ˈwɜː.kɪŋ ɪnˌvaɪ.rən.mənt/",
        "meaningVi": "môi trường làm việc",
        "collocations": "friendly working environment, healthy work environment",
        "example": "A flexible and supportive working environment attracts top software talent.",
        "exampleVi": "Một môi trường làm việc linh hoạt và giàu tính tương trợ sẽ thu hút những nhân tài phần mềm hàng đầu.",
        "optionsVi": [
          "môi trường làm việc",
          "khu dân cư sinh sống",
          "thời tiết khí hậu",
          "mạng lưới nội bộ"
        ]
      },
      {
        "id": "career_15",
        "word": "professional development",
        "level": "B2",
        "type": "noun",
        "ipa": "/prəˌfeʃ.ən.əl dɪˈvel.əp.mənt/",
        "meaningVi": "phát triển chuyên môn nghề nghiệp",
        "collocations": "invest in professional development, continuous professional development",
        "example": "The company allocates $1,000 per employee each year for professional development courses.",
        "exampleVi": "Công ty cấp 1.000 đô la cho mỗi nhân viên mỗi năm dành cho các khóa học phát triển chuyên môn.",
        "optionsVi": [
          "phát triển chuyên môn nghề nghiệp",
          "hoạt động teambuilding",
          "chăm sóc khách hàng",
          "du lịch nghỉ dưỡng"
        ]
      },
      {
        "id": "career_16",
        "word": "mentor",
        "level": "B1",
        "type": "noun / verb",
        "ipa": "/ˈmen.tɔːr/",
        "meaningVi": "người hướng dẫn dìu dắt",
        "collocations": "career mentor, find a mentor, mentor junior staff",
        "example": "Having a senior mentor helped me accelerate my programming growth immensely.",
        "exampleVi": "Có một người hướng dẫn cấp cao đã giúp tôi đẩy nhanh sự tiến bộ lập trình vô cùng nhiều.",
        "optionsVi": [
          "người hướng dẫn dìu dắt",
          "nhân viên cấp dưới",
          "khách hàng khó tính",
          "đối thủ cạnh tranh"
        ]
      },
      {
        "id": "career_17",
        "word": "performance appraisal",
        "level": "B2",
        "type": "noun",
        "ipa": "/pəˈfɔː.məns əˌpreɪ.zəl/",
        "meaningVi": "kỳ đánh giá công việc định kỳ",
        "collocations": "annual performance appraisal, performance appraisal criteria",
        "example": "Your salary increment is heavily based on your year-end performance appraisal.",
        "exampleVi": "Mức tăng lương của bạn phụ thuộc rất lớn vào kỳ đánh giá hiệu quả công việc cuối năm.",
        "optionsVi": [
          "kỳ đánh giá công việc định kỳ",
          "kỳ thi tuyển dụng",
          "buổi tiệc tất niên",
          "khóa đào tạo nội bộ"
        ]
      },
      {
        "id": "career_18",
        "word": "annual bonus",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈæn.ju.əl ˈbəʊ.nəs/",
        "meaningVi": "tiền thưởng hàng năm",
        "collocations": "receive an annual bonus, generous annual bonus",
        "example": "Employees who exceed their KPIs receive a generous annual bonus.",
        "exampleVi": "Những nhân viên vượt chỉ tiêu KPI sẽ nhận được một khoản thưởng hàng năm hậu hĩnh.",
        "optionsVi": [
          "tiền thưởng hàng năm",
          "tiền bảo hiểm bắt buộc",
          "khoản phạt vi phạm",
          "thuế thu nhập trừ lương"
        ]
      },
      {
        "id": "career_19",
        "word": "job opening",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈdʒɒb ˌəʊ.pən.ɪŋ/",
        "meaningVi": "vị trí việc làm đang tuyển",
        "collocations": "current job openings, job opening for backend developers",
        "example": "We have three immediate job openings for experienced DevOps specialists.",
        "exampleVi": "Chúng tôi đang có 3 vị trí việc làm tuyển dụng ngay cho các chuyên viên DevOps có kinh nghiệm.",
        "optionsVi": [
          "vị trí việc làm đang tuyển",
          "sự cắt giảm nhân sự",
          "hồ sơ nhân viên cũ",
          "ngày lễ mở cửa"
        ]
      },
      {
        "id": "career_20",
        "word": "referral",
        "level": "B1",
        "type": "noun",
        "ipa": "/rɪˈfɜː.rəl/",
        "meaningVi": "sự giới thiệu nhân sự",
        "collocations": "employee referral, referral bonus, get hired via referral",
        "example": "I got hired through an internal employee referral from my former university peer.",
        "exampleVi": "Tôi đã được tuyển dụng nhờ sự giới thiệu nội bộ từ bạn học đại học cũ của mình.",
        "optionsVi": [
          "sự giới thiệu nhân sự",
          "quảng cáo đại trà",
          "hồ sơ xin việc tự do",
          "đơn khiếu nại tuyển dụng"
        ]
      },
      {
        "id": "career_21",
        "word": "onboarding",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈɒnˌbɔː.dɪŋ/",
        "meaningVi": "quy trình hội nhập nhân viên mới",
        "collocations": "onboarding process, smooth onboarding, complete onboarding tasks",
        "example": "A well-structured onboarding process helps new hires become productive much faster.",
        "exampleVi": "Quy trình hội nhập bài bản giúp nhân viên mới bắt nhịp làm việc hiệu quả nhanh hơn nhiều.",
        "optionsVi": [
          "quy trình hội nhập nhân viên mới",
          "thủ tục thanh lý hợp đồng",
          "kỳ thi sát hạch cuối năm",
          "buổi phỏng vấn xin việc"
        ]
      },
      {
        "id": "career_22",
        "word": "remote work",
        "level": "A2",
        "type": "noun",
        "ipa": "/rɪˈməʊt wɜːk/",
        "meaningVi": "làm việc từ xa tại nhà",
        "collocations": "work remotely, 100% remote work, remote work culture",
        "example": "Remote work allows engineers to avoid stressful commutes and live in beautiful coastal towns.",
        "exampleVi": "Làm việc từ xa giúp các kỹ sư tránh được cảnh kẹt xe mệt mỏi và có thể sống ở các thành phố biển xinh đẹp.",
        "optionsVi": [
          "làm việc từ xa tại nhà",
          "làm việc tại văn phòng cố định",
          "làm việc ngoài trời nắng",
          "nghỉ việc không lương"
        ]
      },
      {
        "id": "career_23",
        "word": "hybrid work",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈhaɪ.brɪd wɜːk/",
        "meaningVi": "mô hình làm việc kết hợp",
        "collocations": "hybrid work model, adopt hybrid work",
        "example": "Our team operates under a hybrid work model: two days at the office and three days remote.",
        "exampleVi": "Nhóm chúng tôi áp dụng mô hình làm việc kết hợp: 2 ngày lên công ty và 3 ngày làm từ xa.",
        "optionsVi": [
          "mô hình làm việc kết hợp",
          "làm ca đêm liên tục",
          "làm thêm giờ không lương",
          "nghỉ hưu non"
        ]
      },
      {
        "id": "career_24",
        "word": "soft skills",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈsɒft skɪlz/",
        "meaningVi": "kỹ năng mềm",
        "collocations": "essential soft skills, develop soft skills",
        "example": "Technical excellence combined with strong soft skills produces world-class leaders.",
        "exampleVi": "Chuyên môn kỹ thuật xuất sắc kết hợp cùng kỹ năng mềm vững vàng tạo nên những nhà lãnh đạo tầm cỡ.",
        "optionsVi": [
          "kỹ năng mềm",
          "chuyên môn kỹ thuật",
          "kỹ năng viết code",
          "bằng lái xe"
        ]
      },
      {
        "id": "career_25",
        "word": "hard skills",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈhɑːd skɪlz/",
        "meaningVi": "kỹ năng cứng chuyên môn",
        "collocations": "technical hard skills, learn hard skills",
        "example": "Proficiency in Python and Cloud Architecture are in-demand hard skills today.",
        "exampleVi": "Thành thạo Python và kiến trúc đám mây là những kỹ năng cứng rất được săn đón hiện nay.",
        "optionsVi": [
          "kỹ năng cứng chuyên môn",
          "kỹ năng giao tiếp xã hội",
          "sức khỏe thể lực",
          "tính cách bẩm sinh"
        ]
      },
      {
        "id": "career_26",
        "word": "severance pay",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈsev.ər.əns ˌpeɪ/",
        "meaningVi": "trợ cấp thôi việc",
        "collocations": "receive severance pay, generous severance package",
        "example": "Laid-off workers received three months of severance pay and healthcare coverage.",
        "exampleVi": "Những nhân sự bị cắt giảm đã nhận được 3 tháng trợ cấp thôi việc kèm bảo hiểm y tế.",
        "optionsVi": [
          "trợ cấp thôi việc",
          "tiền thưởng tháng 13",
          "tiền phạt vi phạm nội quy",
          "lương ứng trước"
        ]
      },
      {
        "id": "career_27",
        "word": "career advancement",
        "level": "B2",
        "type": "collocation",
        "ipa": "/kəˈrɪər ədˌvɑːns.mənt/",
        "meaningVi": "sự thăng tiến sự nghiệp",
        "collocations": "opportunities for career advancement, rapid career advancement",
        "example": "Young professionals prioritize companies that offer genuine opportunities for career advancement.",
        "exampleVi": "Người trẻ ưu tiên các công ty mang lại những cơ hội thăng tiến sự nghiệp thực chất.",
        "optionsVi": [
          "sự thăng tiến sự nghiệp",
          "việc đổi ngành nghề",
          "nguy cơ thất nghiệp",
          "việc chuyển công ty"
        ]
      },
      {
        "id": "career_28",
        "word": "freelance",
        "level": "A2",
        "type": "adjective / verb",
        "ipa": "/ˈfriː.lɑːns/",
        "meaningVi": "làm nghề tự do",
        "collocations": "freelance developer, freelance work, go freelance",
        "example": "He decided to quit corporate life and work as a freelance mobile app developer.",
        "exampleVi": "Anh ấy quyết định rời bỏ môi trường công sở để làm lập trình viên ứng dụng di động tự do.",
        "optionsVi": [
          "làm nghề tự do",
          "nhân viên biên chế nhà nước",
          "giám đốc điều hành",
          "thực tập sinh không lương"
        ]
      },
      {
        "id": "career_29",
        "word": "full-time contract",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˌfʊl.taɪm ˈkɒn.trækt/",
        "meaningVi": "hợp đồng toàn thời gian",
        "collocations": "sign a full-time contract, offer a full-time contract",
        "example": "After a successful internship, she was offered a permanent full-time contract.",
        "exampleVi": "Sau kỳ thực tập thành công, cô ấy được đề nghị ký hợp đồng lao động toàn thời gian chính thức.",
        "optionsVi": [
          "hợp đồng toàn thời gian",
          "hợp đồng cộng tác bán thời gian",
          "hợp đồng thời vụ ngắn hạn",
          "thỏa thuận bảo mật"
        ]
      },
      {
        "id": "career_30",
        "word": "talent acquisition",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈtæl.ənt ˌæk.wɪˈzɪʃ.ən/",
        "meaningVi": "chiến lược thu hút nhân tài",
        "collocations": "head of talent acquisition, talent acquisition specialist",
        "example": "Our talent acquisition team focuses on recruiting senior machine learning experts.",
        "exampleVi": "Đội ngũ tuyển mộ nhân tài của chúng tôi tập trung săn đón các chuyên gia học máy cấp cao.",
        "optionsVi": [
          "chiến lược thu hút nhân tài",
          "bộ phận đào tạo nội bộ",
          "phòng hành chính kế toán",
          "ban kiểm soát chất lượng"
        ]
      },
      {
        "id": "career_31",
        "word": "lay off",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/leɪ ɒf/",
        "meaningVi": "cắt giảm nhân sự vì kinh tế",
        "collocations": "lay off workers, mass layoffs in tech",
        "example": "Due to falling revenues, the company was forced to lay off 10% of its workforce.",
        "exampleVi": "Do doanh thu sụt giảm, công ty buộc phải cắt giảm 10% lực lượng lao động.",
        "optionsVi": [
          "cắt giảm nhân sự vì kinh tế",
          "thăng chức hàng loạt",
          "tuyển dụng ồ ạt",
          "khen thưởng cuối năm"
        ]
      },
      {
        "id": "career_32",
        "word": "headhunter",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈhedˌhʌn.tər/",
        "meaningVi": "chuyên gia săn đầu người",
        "collocations": "contacted by a headhunter, executive headhunter",
        "example": "A headhunter reached out to him on LinkedIn offering a director of engineering role.",
        "exampleVi": "Một chuyên gia săn đầu người đã liên hệ với anh ấy trên LinkedIn mời vào vị trí giám đốc kỹ thuật.",
        "optionsVi": [
          "chuyên gia săn đầu người",
          "nhân viên thử việc",
          "thanh tra lao động",
          "luật sư bảo vệ người lao động"
        ]
      },
      {
        "id": "career_33",
        "word": "sick leave",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈsɪk ˌliːv/",
        "meaningVi": "nghỉ phép ốm",
        "collocations": "take sick leave, paid sick leave, on sick leave",
        "example": "He is currently on paid sick leave recovering from back surgery.",
        "exampleVi": "Hiện tại anh ấy đang trong đợt nghỉ phép ốm có lương để hồi phục sau ca phẫu thuật lưng.",
        "optionsVi": [
          "nghỉ phép ốm",
          "nghỉ phép năm",
          "nghỉ thai sản",
          "nghỉ không lương"
        ]
      },
      {
        "id": "career_34",
        "word": "KPI",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌkeɪ.piːˈaɪ/",
        "meaningVi": "chỉ số đánh giá hiệu quả công việc",
        "collocations": "meet your KPI, quarterly KPI, track KPIs",
        "example": "Code quality and delivery speed are essential KPIs for our development squad.",
        "exampleVi": "Chất lượng mã nguồn và tốc độ bàn giao là những chỉ số KPI thiết yếu của nhóm phát triển.",
        "optionsVi": [
          "chỉ số đánh giá hiệu quả công việc",
          "quy định an toàn lao động",
          "thời gian làm thêm giờ",
          "chứng chỉ chuyên môn"
        ]
      },
      {
        "id": "career_35",
        "word": "resignation letter",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌrez.ɪɡˈneɪ.ʃən ˌlet.ər/",
        "meaningVi": "đơn xin thôi việc",
        "collocations": "submit a resignation letter, hand in your resignation letter",
        "example": "He submitted his formal resignation letter giving one month's notice.",
        "exampleVi": "Anh ấy đã nộp đơn xin thôi việc chính thức kèm thông báo trước một tháng.",
        "optionsVi": [
          "đơn xin thôi việc",
          "đơn xin nghỉ ốm",
          "đơn đề xuất tăng lương",
          "thư giới thiệu bản thân"
        ]
      }
    ]
  },
  {
    "groupId": "business_finance_marketing",
    "name": "Kinh Doanh, Marketing & Tài Chính",
    "icon": "📈",
    "category": "work",
    "level": "B2",
    "description": "Doanh thu, lợi nhuận, chiến dịch quảng cáo, đàm phán hợp đồng và dòng tiền doanh nghiệp.",
    "words": [
      {
        "id": "biz_01",
        "word": "revenue",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈrev.ən.juː/",
        "meaningVi": "tổng doanh thu",
        "collocations": "annual revenue, generate revenue, revenue growth",
        "example": "The company's annual recurring revenue crossed 10 million dollars this quarter.",
        "exampleVi": "Doanh thu định kỳ hàng năm của công ty đã vượt qua mốc 10 triệu đô la trong quý này.",
        "optionsVi": [
          "tổng doanh thu",
          "tiền lỗ ròng",
          "chi phí phát sinh",
          "tiền lãi suất vay"
        ]
      },
      {
        "id": "biz_02",
        "word": "profit margin",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈprɒf.ɪt ˌmɑː.dʒɪn/",
        "meaningVi": "tỷ suất lợi nhuận",
        "collocations": "high profit margin, improve profit margins, net profit margin",
        "example": "Software companies usually enjoy very high profit margins compared to manufacturing.",
        "exampleVi": "Các công ty phần mềm thường sở hữu tỷ suất lợi nhuận rất cao so với ngành sản xuất.",
        "optionsVi": [
          "tỷ suất lợi nhuận",
          "chi phí nhân công",
          "tiền đóng thuế",
          "mức chiết khấu"
        ]
      },
      {
        "id": "biz_03",
        "word": "return on investment",
        "level": "B2",
        "type": "noun",
        "ipa": "/rɪˈtɜːn ɒn ɪnˈvest.mənt/",
        "meaningVi": "tỷ suất hoàn vốn đầu tư (ROI)",
        "collocations": "positive return on investment, calculate ROI, high ROI",
        "example": "Migrating to microservices yielded a massive return on investment in system reliability.",
        "exampleVi": "Chuyển sang kiến trúc microservices mang lại tỷ suất hoàn vốn đầu tư khổng lồ về độ tin cậy hệ thống.",
        "optionsVi": [
          "tỷ suất hoàn vốn đầu tư (ROI)",
          "khoản tiền vay thế chấp",
          "chi phí bảo trì định kỳ",
          "tiền đền bù rủi ro"
        ]
      },
      {
        "id": "biz_04",
        "word": "market share",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈmɑː.kɪt ʃeər/",
        "meaningVi": "thị phần chiếm lĩnh",
        "collocations": "gain market share, dominate market share, lose market share",
        "example": "Our payment gateway captured 35% of the domestic market share within two years.",
        "exampleVi": "Cổng thanh toán của chúng tôi đã chiếm lĩnh 35% thị phần nội địa trong vòng hai năm.",
        "optionsVi": [
          "thị phần chiếm lĩnh",
          "giá cổ phiếu niêm yết",
          "chi phí quảng cáo",
          "vốn điều lệ"
        ]
      },
      {
        "id": "biz_05",
        "word": "target audience",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈtɑː.ɡɪt ˈɔː.di.əns/",
        "meaningVi": "đối tượng mục tiêu",
        "collocations": "identify target audience, reach target audience",
        "example": "Our target audience consists of young tech-savvy professionals aged 22 to 35.",
        "exampleVi": "Khách hàng mục tiêu của chúng tôi gồm những người trẻ am hiểu công nghệ trong độ tuổi 22 đến 35.",
        "optionsVi": [
          "đối tượng mục tiêu",
          "đối thủ cạnh tranh",
          "cổ đông công ty",
          "đại lý phân phối"
        ]
      },
      {
        "id": "biz_06",
        "word": "brand awareness",
        "level": "B2",
        "type": "noun",
        "ipa": "/brænd əˈweə.nəs/",
        "meaningVi": "độ nhận diện thương hiệu",
        "collocations": "build brand awareness, increase brand awareness",
        "example": "Sponsoring hackathons is an effective tactic to boost brand awareness among coders.",
        "exampleVi": "Tài trợ cho các cuộc thi hackathon là chiến thuật hiệu quả để nâng cao độ nhận diện thương hiệu với giới coder.",
        "optionsVi": [
          "độ nhận diện thương hiệu",
          "chất lượng dịch vụ",
          "giá bán sản phẩm",
          "quy mô nhân sự"
        ]
      },
      {
        "id": "biz_07",
        "word": "conversion rate",
        "level": "B2",
        "type": "noun",
        "ipa": "/kənˈvɜː.ʒən reɪt/",
        "meaningVi": "tỷ lệ chuyển đổi mua hàng",
        "collocations": "high conversion rate, improve conversion rate, track conversion rates",
        "example": "Redesigning the landing page increased our sign-up conversion rate by 18%.",
        "exampleVi": "Thiết kế lại trang đích landing page đã làm tăng tỷ lệ chuyển đổi đăng ký lên 18%.",
        "optionsVi": [
          "tỷ lệ chuyển đổi mua hàng",
          "tốc độ tải trang web",
          "tỷ lệ thoát trang",
          "chi phí cho mỗi lượt nhấp"
        ]
      },
      {
        "id": "biz_08",
        "word": "customer retention",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈkʌs.tə.mər rɪˈten.ʃən/",
        "meaningVi": "việc giữ chân khách hàng",
        "collocations": "customer retention rate, boost retention, customer retention strategy",
        "example": "Providing proactive tech support is vital for maintaining high customer retention.",
        "exampleVi": "Hỗ trợ kỹ thuật chủ động là điều tối quan trọng để duy trì tỷ lệ giữ chân khách hàng cao.",
        "optionsVi": [
          "việc giữ chân khách hàng",
          "tìm kiếm khách hàng mới",
          "thu hồi nợ xấu",
          "thanh lý hợp đồng"
        ]
      },
      {
        "id": "biz_09",
        "word": "cash flow",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈkæʃ ˌfləʊ/",
        "meaningVi": "dòng tiền lưu động",
        "collocations": "positive cash flow, manage cash flow, healthy cash flow",
        "example": "Maintaining a positive cash flow is essential for startups to survive early years.",
        "exampleVi": "Duy trì dòng tiền dương là điều sống còn để các startup tồn tại trong những năm đầu.",
        "optionsVi": [
          "dòng tiền lưu động",
          "tài sản cố định",
          "khoản vay ngân hàng",
          "vốn đầu tư mạo hiểm"
        ]
      },
      {
        "id": "biz_10",
        "word": "budget allocation",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈbʌdʒ.ɪt ˌæl.əˈkeɪ.ʃən/",
        "meaningVi": "phân bổ ngân sách",
        "collocations": "annual budget allocation, approve budget allocation",
        "example": "The executive committee approved a 30% budget allocation increase for R&D.",
        "exampleVi": "Ban điều hành đã phê duyệt tăng 30% ngân sách phân bổ cho phòng Nghiên cứu & Phát triển.",
        "optionsVi": [
          "phân bổ ngân sách",
          "cắt giảm chi phí",
          "thanh tra tài chính",
          "thu hồi công nợ"
        ]
      },
      {
        "id": "biz_11",
        "word": "competitive advantage",
        "level": "B2",
        "type": "noun",
        "ipa": "/kəmˈpet.ɪ.tɪv ədˈvɑːn.tɪdʒ/",
        "meaningVi": "lợi thế cạnh tranh",
        "collocations": "gain competitive advantage, sustainable competitive advantage",
        "example": "Proprietary AI algorithms provide our company with a strong competitive advantage.",
        "exampleVi": "Các thuật toán AI độc quyền mang lại cho công ty chúng tôi một lợi thế cạnh tranh rất mạnh.",
        "optionsVi": [
          "lợi thế cạnh tranh",
          "nguy cơ tụt hậu",
          "chi phí sản xuất cao",
          "rào cản gia nhập thị trường"
        ]
      },
      {
        "id": "biz_12",
        "word": "pitch presentation",
        "level": "B1",
        "type": "noun",
        "ipa": "/pɪtʃ ˌprez.ənˈteɪ.ʃən/",
        "meaningVi": "buổi thuyết trình gọi vốn",
        "collocations": "deliver a pitch presentation, pitch deck, elevator pitch",
        "example": "The founders delivered an inspiring pitch presentation that secured $2 million in seed funding.",
        "exampleVi": "Những người sáng lập đã có buổi thuyết trình gọi vốn truyền cảm hứng giúp huy động thành công 2 triệu đô.",
        "optionsVi": [
          "buổi thuyết trình gọi vốn",
          "buổi báo cáo nội bộ",
          "kỳ thi tay nghề",
          "cuộc họp kỷ luật"
        ]
      },
      {
        "id": "biz_13",
        "word": "business model",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈbɪz.nɪs ˌmɒd.əl/",
        "meaningVi": "mô hình kinh doanh",
        "collocations": "subscription business model, sustainable business model",
        "example": "Switching from one-time license fees to a SaaS subscription business model doubled their valuation.",
        "exampleVi": "Chuyển từ bán bản quyền trọn gói sang mô hình thuê bao SaaS đã tăng gấp đôi định giá công ty.",
        "optionsVi": [
          "mô hình kinh doanh",
          "cơ cấu tổ chức nhân sự",
          "dây chuyền sản xuất",
          "chiến lược marketing"
        ]
      },
      {
        "id": "biz_14",
        "word": "partnership",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈpɑːt.nə.ʃɪp/",
        "meaningVi": "quan hệ đối tác",
        "collocations": "strategic partnership, form a partnership, partnership agreement",
        "example": "Google announced a strategic partnership with university research labs.",
        "exampleVi": "Google đã công bố mối quan hệ đối tác chiến lược với các phòng nghiên cứu trường đại học.",
        "optionsVi": [
          "quan hệ đối tác",
          "sự thâu tóm đối thủ",
          "cạnh tranh không lành mạnh",
          "việc tách rời công ty"
        ]
      },
      {
        "id": "biz_15",
        "word": "contract negotiation",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈkɒn.trækt nɪˌɡəʊ.ʃiˈeɪ.ʃən/",
        "meaningVi": "đàm phán hợp đồng",
        "collocations": "enter contract negotiations, tough contract negotiation",
        "example": "After weeks of intense contract negotiations, both sides signed the multi-year SLA.",
        "exampleVi": "Sau nhiều tuần đàm phán hợp đồng căng thẳng, cả hai bên đã ký cam kết chất lượng SLA nhiều năm.",
        "optionsVi": [
          "đàm phán hợp đồng",
          "đơn phương chấm dứt hợp đồng",
          "khởi kiện ra tòa",
          "ký kết tự động"
        ]
      },
      {
        "id": "biz_16",
        "word": "terms and conditions",
        "level": "B1",
        "type": "phrase",
        "ipa": "/tɜːmz ænd kənˈdɪʃ.ənz/",
        "meaningVi": "điều khoản và điều kiện",
        "collocations": "agree to terms and conditions, read the terms and conditions",
        "example": "Please read through all terms and conditions before confirming your subscription.",
        "exampleVi": "Vui lòng đọc kỹ toàn bộ điều khoản và điều kiện trước khi xác nhận gói thuê bao.",
        "optionsVi": [
          "điều khoản và điều kiện",
          "hướng dẫn cài đặt",
          "bản báo giá sơ bộ",
          "danh sách khách hàng"
        ]
      },
      {
        "id": "biz_17",
        "word": "breach of contract",
        "level": "B2",
        "type": "collocation",
        "ipa": "/briːtʃ əv ˈkɒn.trækt/",
        "meaningVi": "vi phạm hợp đồng",
        "collocations": "sue for breach of contract, constitute a breach of contract",
        "example": "Leaking proprietary client source code constitutes a severe breach of contract.",
        "exampleVi": "Làm rò rỉ mã nguồn độc quyền của khách hàng cấu thành hành vi vi phạm hợp đồng nghiêm trọng.",
        "optionsVi": [
          "vi phạm hợp đồng",
          "gia hạn hợp đồng",
          "hoàn thành hợp đồng",
          "thanh lý hợp đồng"
        ]
      },
      {
        "id": "biz_18",
        "word": "mutual benefit",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈmjuː.tʃu.əl ˈben.ɪ.fɪt/",
        "meaningVi": "đôi bên cùng có lợi (win-win)",
        "collocations": "for mutual benefit, mutual benefit partnership",
        "example": "We look forward to a fruitful collaboration for our mutual benefit.",
        "exampleVi": "Chúng tôi rất mong đợi sự hợp tác thành công mang lại lợi ích chung cho cả hai bên.",
        "optionsVi": [
          "đôi bên cùng có lợi (win-win)",
          "thiệt hại nặng nề",
          "đơn phương hưởng lợi",
          "cạnh tranh gay gắt"
        ]
      },
      {
        "id": "biz_19",
        "word": "liability",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌlaɪ.əˈbɪl.ə.ti/",
        "meaningVi": "trách nhiệm pháp lý",
        "collocations": "legal liability, accept liability, limit liability",
        "example": "The clause limits the cloud vendor's financial liability in case of unexpected service outages.",
        "exampleVi": "Điều khoản này giới hạn trách nhiệm pháp lý tài chính của nhà cung cấp đám mây trong trường hợp sập mạng bất ngờ.",
        "optionsVi": [
          "trách nhiệm pháp lý",
          "quyền sở hữu trí tuệ",
          "khoản tiền thưởng",
          "chứng nhận chất lượng"
        ]
      },
      {
        "id": "biz_20",
        "word": "audit",
        "level": "B2",
        "type": "noun / verb",
        "ipa": "/ˈɔː.dɪt/",
        "meaningVi": "kiểm toán, kiểm tra độc lập",
        "collocations": "security audit, financial audit, pass an audit",
        "example": "All financial transactions must undergo a rigorous annual external audit.",
        "exampleVi": "Mọi giao dịch tài chính đều phải trải qua đợt kiểm toán độc lập nghiêm ngặt hàng năm.",
        "optionsVi": [
          "kiểm toán, kiểm tra độc lập",
          "đầu tư mạo hiểm",
          "quảng cáo tiếp thị",
          "sáp nhập doanh nghiệp"
        ]
      },
      {
        "id": "biz_21",
        "word": "turnover",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈtɜːnˌəʊ.vər/",
        "meaningVi": "doanh số / tỷ lệ nghỉ việc",
        "collocations": "annual turnover, high staff turnover, employee turnover rate",
        "example": "Improving company culture significantly reduced employee turnover last year.",
        "exampleVi": "Cải thiện văn hóa công ty đã giúp giảm rõ rệt tỷ lệ nghỉ việc biến động nhân sự trong năm qua.",
        "optionsVi": [
          "doanh số / tỷ lệ nghỉ việc",
          "tiền lương cơ bản",
          "mức thưởng quý",
          "chi phí thuê văn phòng"
        ]
      },
      {
        "id": "biz_22",
        "word": "value proposition",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈvæl.juː ˌprɒp.əˈzɪʃ.ən/",
        "meaningVi": "tuyên ngôn giá trị cốt lõi",
        "collocations": "unique value proposition (UVP), clear value proposition",
        "example": "Our value proposition is delivering enterprise-grade database security at one-tenth the cost.",
        "exampleVi": "Tuyên ngôn giá trị của chúng tôi là mang lại độ bảo mật cơ sở dữ liệu cấp doanh nghiệp với chi phí chỉ bằng 1/10.",
        "optionsVi": [
          "tuyên ngôn giá trị cốt lõi",
          "bảng báo giá chi tiết",
          "điều khoản bảo hành",
          "hợp đồng liên doanh"
        ]
      },
      {
        "id": "biz_23",
        "word": "break-even point",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌbreɪkˈiː.vən pɔɪnt/",
        "meaningVi": "điểm hòa vốn",
        "collocations": "reach break-even point, calculate break-even",
        "example": "The SaaS startup expects to reach its break-even point within eighteen months.",
        "exampleVi": "Startup phần mềm SaaS kỳ vọng sẽ đạt điểm hòa vốn trong vòng 18 tháng.",
        "optionsVi": [
          "điểm hòa vốn",
          "thời điểm phá sản",
          "giai đoạn siêu lợi nhuận",
          "lúc bắt đầu gọi vốn"
        ]
      },
      {
        "id": "biz_24",
        "word": "expenditure",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪkˈspen.dɪ.tʃər/",
        "meaningVi": "khoản chi tiêu, chi phí",
        "collocations": "capital expenditure (CapEx), operational expenditure (OpEx), reduce expenditure",
        "example": "Moving workloads to serverless architecture lowered our monthly operational expenditure.",
        "exampleVi": "Chuyển các luồng công việc sang kiến trúc serverless đã làm giảm chi tiêu vận hành hàng tháng của chúng tôi.",
        "optionsVi": [
          "khoản chi tiêu, chi phí",
          "tổng doanh thu bán hàng",
          "tiền lãi ròng",
          "vốn góp ban đầu"
        ]
      },
      {
        "id": "biz_25",
        "word": "assets",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈæs.ets/",
        "meaningVi": "tài sản doanh nghiệp",
        "collocations": "total assets, liquid assets, intangible assets",
        "example": "Patents and proprietary codebase are the company's most valuable intellectual assets.",
        "exampleVi": "Các bằng sáng chế và mã nguồn độc quyền là tài sản trí tuệ có giá trị nhất của công ty.",
        "optionsVi": [
          "tài sản doanh nghiệp",
          "khoản nợ phải trả",
          "tiền thuế còn nợ",
          "khoản chi phí hao hụt"
        ]
      },
      {
        "id": "biz_26",
        "word": "dividend",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈdɪv.ɪ.dend/",
        "meaningVi": "cổ tức chia cho cổ đông",
        "collocations": "pay dividends, quarterly dividend, cash dividend",
        "example": "The board voted to distribute a cash dividend of $1.50 per share to shareholders.",
        "exampleVi": "Hội đồng quản trị đã bỏ phiếu thông qua việc chia cổ tức bằng tiền mặt 1,50 đô la mỗi cổ phiếu.",
        "optionsVi": [
          "cổ tức chia cho cổ đông",
          "lãi suất vay ngân hàng",
          "tiền lương nhân viên",
          "phí phát hành cổ phiếu"
        ]
      },
      {
        "id": "biz_27",
        "word": "supply chain",
        "level": "B1",
        "type": "noun",
        "ipa": "/səˈplaɪ tʃeɪn/",
        "meaningVi": "chuỗi cung ứng hàng hóa",
        "collocations": "global supply chain, supply chain disruption, supply chain management",
        "example": "Global chip shortages caused widespread disruptions across the automotive supply chain.",
        "exampleVi": "Tình trạng thiếu hụt chip toàn cầu đã gây ra sự gián đoạn diện rộng trong chuỗi cung ứng ô tô.",
        "optionsVi": [
          "chuỗi cung ứng hàng hóa",
          "dây chuyền lắp ráp",
          "hệ thống bán lẻ",
          "kênh thanh toán trực tuyến"
        ]
      },
      {
        "id": "biz_28",
        "word": "procurement",
        "level": "B2",
        "type": "noun",
        "ipa": "/prəˈkjʊə.mənt/",
        "meaningVi": "mua sắm đấu thầu thiết bị",
        "collocations": "procurement process, procurement department, public procurement",
        "example": "The procurement department negotiates bulk server hardware discounts with Dell.",
        "exampleVi": "Bộ phận mua sắm đấu thầu đang đàm phán giảm giá phần cứng máy chủ số lượng lớn với Dell.",
        "optionsVi": [
          "mua sắm đấu thầu thiết bị",
          "quảng cáo bán hàng",
          "tuyển dụng nhân sự",
          "dịch vụ hậu mãi"
        ]
      },
      {
        "id": "biz_29",
        "word": "logistics",
        "level": "B1",
        "type": "noun",
        "ipa": "/ləˈdʒɪs.tɪks/",
        "meaningVi": "hậu cần vận chuyển kho bãi",
        "collocations": "logistics network, third-party logistics, logistics costs",
        "example": "Building an in-house logistics network enabled same-day delivery across the country.",
        "exampleVi": "Xây dựng mạng lưới hậu cần logistics nội bộ đã cho phép giao hàng ngay trong ngày trên toàn quốc.",
        "optionsVi": [
          "hậu cần vận chuyển kho bãi",
          "sản xuất chế tạo",
          "marketing truyền thông",
          "chăm sóc khách hàng"
        ]
      },
      {
        "id": "biz_30",
        "word": "acquisition",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌæk.wɪˈzɪʃ.ən/",
        "meaningVi": "thương vụ mua lại công ty",
        "collocations": "mergers and acquisitions (M&A), major acquisition",
        "example": "Microsoft's acquisition of GitHub provided it with deep developer community ties.",
        "exampleVi": "Thương vụ Microsoft mua lại GitHub đã mang lại cho hãng sự gắn kết sâu sắc với cộng đồng lập trình viên.",
        "optionsVi": [
          "thương vụ mua lại công ty",
          "sự phá sản giải thể",
          "chia tách doanh nghiệp",
          "ký kết hợp đồng lao động"
        ]
      },
      {
        "id": "biz_31",
        "word": "monetize",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈmʌn.ɪ.taɪz/",
        "meaningVi": "thương mại hóa kiếm tiền",
        "collocations": "monetize an app, monetize traffic, ways to monetize content",
        "example": "They started monetizing their free mobile app through non-intrusive in-app advertisements.",
        "exampleVi": "Họ bắt đầu kiếm tiền từ ứng dụng di động miễn phí thông qua các quảng cáo không gây khó chịu.",
        "optionsVi": [
          "thương mại hóa kiếm tiền",
          "miễn phí vĩnh viễn",
          "xóa ứng dụng",
          "chặn người dùng"
        ]
      },
      {
        "id": "biz_32",
        "word": "launch campaign",
        "level": "B1",
        "type": "collocation",
        "ipa": "/lɔːntʃ kæmˈpeɪn/",
        "meaningVi": "chiến dịch ra mắt sản phẩm",
        "collocations": "product launch campaign, launch a marketing campaign",
        "example": "We partnered with influential tech YouTubers for our nationwide launch campaign.",
        "exampleVi": "Chúng tôi hợp tác với các YouTuber công nghệ có tầm ảnh hưởng cho chiến dịch ra mắt trên toàn quốc.",
        "optionsVi": [
          "chiến dịch ra mắt sản phẩm",
          "kế hoạch đóng cửa dịch vụ",
          "chiến dịch giảm biên chế",
          "đợt thu hồi sản phẩm"
        ]
      },
      {
        "id": "biz_33",
        "word": "niche market",
        "level": "B2",
        "type": "noun",
        "ipa": "/niːʃ ˈmɑː.kɪt/",
        "meaningVi": "thị trường ngách hẹp",
        "collocations": "profitable niche market, target a niche market",
        "example": "Targeting a specialized niche market allowed the small software firm to become profitable quickly.",
        "exampleVi": "Nhắm vào một thị trường ngách chuyên biệt đã giúp công ty phần mềm nhỏ có lãi rất nhanh chóng.",
        "optionsVi": [
          "thị trường ngách hẹp",
          "thị trường đại trà khổng lồ",
          "chợ đen phi pháp",
          "thị trường độc quyền nhà nước"
        ]
      },
      {
        "id": "biz_34",
        "word": "churn rate",
        "level": "B2",
        "type": "noun",
        "ipa": "/tʃɜːn reɪt/",
        "meaningVi": "tỷ lệ rời bỏ dịch vụ",
        "collocations": "low churn rate, reduce customer churn rate, monthly churn rate",
        "example": "By improving product onboarding, we successfully reduced our monthly churn rate below 2%.",
        "exampleVi": "Bằng cách cải thiện hướng dẫn làm quen sản phẩm, chúng tôi đã giảm thành công tỷ lệ rời bỏ dịch vụ hàng tháng xuống dưới 2%.",
        "optionsVi": [
          "tỷ lệ rời bỏ dịch vụ",
          "tỷ lệ tăng trưởng doanh thu",
          "tỷ lệ nhấp chuột",
          "tỷ lệ lợi nhuận gộp"
        ]
      },
      {
        "id": "biz_35",
        "word": "due diligence",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌdʒuː ˈdɪl.ɪ.dʒəns/",
        "meaningVi": "thẩm định năng lực toàn diện",
        "collocations": "conduct due diligence, due diligence process",
        "example": "The venture capital firm conducted three months of technical and financial due diligence.",
        "exampleVi": "Quỹ đầu tư mạo hiểm đã tiến hành thẩm định kỹ thuật và tài chính toàn diện trong suốt 3 tháng.",
        "optionsVi": [
          "thẩm định năng lực toàn diện",
          "ký kết thỏa thuận sơ bộ",
          "giao dịch chuyển khoản",
          "từ chối giải quyết"
        ]
      }
    ]
  },
  {
    "groupId": "core_tech_office",
    "name": "Từ vựng Nền tảng Công sở & CNTT (Core Essentials)",
    "description": "40 từ vựng cốt lõi A1 - B2 cho người đi làm và dân IT (bảo toàn dữ liệu lịch sử học)",
    "level": "A1-B2",
    "icon": "⭐",
    "badge": "Core / Essential",
    "words": [
      {
        "id": "a1_01",
        "word": "schedule",
        "level": "A1",
        "ipa": "/ˈskedʒ.uːl/",
        "type": "noun / verb",
        "meaningVi": "lịch trình, thời gian biểu",
        "collocations": "tight schedule, schedule a meeting, on schedule",
        "example": "Let's check the team schedule for today.",
        "optionsVi": [
          "lịch trình, thời gian biểu",
          "kế hoạch ngân sách",
          "bản báo cáo tuần",
          "hợp đồng làm việc"
        ],
        "exampleVi": ""
      },
      {
        "id": "a1_02",
        "word": "message",
        "level": "A1",
        "ipa": "/ˈmes.ɪdʒ/",
        "type": "noun",
        "meaningVi": "tin nhắn, thông điệp",
        "collocations": "send a message, leave a message, instant message",
        "example": "I will leave a message in our Slack channel.",
        "optionsVi": [
          "tin nhắn, thông điệp",
          "thư mời làm việc",
          "cuộc họp trực tuyến",
          "tài liệu đính kèm"
        ],
        "exampleVi": ""
      },
      {
        "id": "a1_03",
        "word": "problem",
        "level": "A1",
        "ipa": "/ˈprɒb.ləm/",
        "type": "noun",
        "meaningVi": "vấn đề, trục trặc",
        "collocations": "solve a problem, face a problem, technical problem",
        "example": "We have a small connection problem right now.",
        "optionsVi": [
          "vấn đề, trục trặc",
          "cơ hội mới",
          "giải pháp phần mềm",
          "quy trình vận hành"
        ],
        "exampleVi": ""
      },
      {
        "id": "a1_04",
        "word": "customer",
        "level": "A1",
        "ipa": "/ˈkʌs.tə.mər/",
        "type": "noun",
        "meaningVi": "khách hàng",
        "collocations": "customer service, satisfy customers, loyal customer",
        "example": "The customer is asking for an update on this feature.",
        "optionsVi": [
          "khách hàng",
          "nhà phát triển",
          "đối tác cung ứng",
          "quản lý dự án"
        ],
        "exampleVi": ""
      },
      {
        "id": "a1_05",
        "word": "device",
        "level": "A1",
        "ipa": "/dɪˈvaɪs/",
        "type": "noun",
        "meaningVi": "thiết bị (điện tử, máy móc)",
        "collocations": "mobile device, connect a device, input device",
        "example": "Please test the app on different mobile devices.",
        "optionsVi": [
          "thiết bị (điện tử, máy móc)",
          "phần mềm quản lý",
          "mạng nội bộ",
          "dây cáp kết nối"
        ],
        "exampleVi": ""
      },
      {
        "id": "a1_06",
        "word": "office",
        "level": "A1",
        "ipa": "/ˈɒf.ɪs/",
        "type": "noun",
        "meaningVi": "văn phòng làm việc",
        "collocations": "office hours, work at the office, home office",
        "example": "I usually arrive at the office at 8:30 AM.",
        "optionsVi": [
          "văn phòng làm việc",
          "nhà kho",
          "phòng thí nghiệm",
          "khu vực ăn uống"
        ],
        "exampleVi": ""
      },
      {
        "id": "a1_07",
        "word": "share",
        "level": "A1",
        "ipa": "/ʃeər/",
        "type": "verb",
        "meaningVi": "chia sẻ (màn hình, tài liệu)",
        "collocations": "share screen, share a link, share files",
        "example": "Can you please share your screen with the team?",
        "optionsVi": [
          "chia sẻ (màn hình, tài liệu)",
          "khoá màn hình",
          "tải xuống",
          "xoá bỏ"
        ],
        "exampleVi": ""
      },
      {
        "id": "a1_08",
        "word": "simple",
        "level": "A1",
        "ipa": "/ˈsɪm.pəl/",
        "type": "adjective",
        "meaningVi": "đơn giản, dễ hiểu",
        "collocations": "simple solution, simple task, keep it simple",
        "example": "We need a simple solution to fix this error.",
        "optionsVi": [
          "đơn giản, dễ hiểu",
          "phức tạp, rắc rối",
          "khẩn cấp",
          "tốn kém"
        ],
        "exampleVi": ""
      },
      {
        "id": "a1_09",
        "word": "click",
        "level": "A1",
        "ipa": "/klɪk/",
        "type": "verb / noun",
        "meaningVi": "nhấp chuột, bấm nút",
        "collocations": "click here, double click, right-click",
        "example": "Click the blue button to submit your form.",
        "optionsVi": [
          "nhấp chuột, bấm nút",
          "kéo thả",
          "cuộn trang",
          "gõ phím"
        ],
        "exampleVi": ""
      },
      {
        "id": "a1_10",
        "word": "finish",
        "level": "A1",
        "ipa": "/ˈfɪn.ɪʃ/",
        "type": "verb",
        "meaningVi": "hoàn thành, kết thúc",
        "collocations": "finish a task, finish on time, almost finish",
        "example": "I will finish this task before lunchtime.",
        "optionsVi": [
          "hoàn thành, kết thúc",
          "bắt đầu, khởi tạo",
          "tạm hoãn",
          "thay đổi"
        ],
        "exampleVi": ""
      },
      {
        "id": "a2_01",
        "word": "deadline",
        "level": "A2",
        "ipa": "/ˈded.laɪn/",
        "type": "noun",
        "meaningVi": "hạn chót, thời hạn hoàn thành",
        "collocations": "meet the deadline, miss the deadline, tight deadline",
        "example": "We must work extra hours to meet the project deadline.",
        "optionsVi": [
          "hạn chót, thời hạn hoàn thành",
          "mục tiêu dài hạn",
          "cuộc họp khẩn",
          "thời gian nghỉ"
        ],
        "exampleVi": ""
      },
      {
        "id": "a2_02",
        "word": "update",
        "level": "A2",
        "ipa": "/ʌpˈdeɪt/",
        "type": "verb / noun",
        "meaningVi": "cập nhật (thông tin, phiên bản)",
        "collocations": "status update, update software, keep someone updated",
        "example": "I will update the ticket as soon as I finish the code.",
        "optionsVi": [
          "cập nhật (thông tin, phiên bản)",
          "khôi phục dữ liệu",
          "xoá bỏ cài đặt",
          "tạm dừng"
        ],
        "exampleVi": ""
      },
      {
        "id": "a2_03",
        "word": "confirm",
        "level": "A2",
        "ipa": "/kənˈfɜːm/",
        "type": "verb",
        "meaningVi": "xác nhận, khẳng định lại",
        "collocations": "confirm an appointment, confirm the details, please confirm",
        "example": "Please confirm your availability for tomorrow's demo.",
        "optionsVi": [
          "xác nhận, khẳng định lại",
          "huỷ bỏ lịch hẹn",
          "từ chối yêu cầu",
          "thương lượng giá"
        ],
        "exampleVi": ""
      },
      {
        "id": "a2_04",
        "word": "feedback",
        "level": "A2",
        "ipa": "/ˈfiːd.bæk/",
        "type": "noun",
        "meaningVi": "ý kiến phản hồi, nhận xét",
        "collocations": "positive feedback, give feedback, receive feedback",
        "example": "The client gave us very positive feedback on the new design.",
        "optionsVi": [
          "ý kiến phản hồi, nhận xét",
          "khiếu nại chính thức",
          "báo cáo tài chính",
          "hướng dẫn sử dụng"
        ],
        "exampleVi": ""
      },
      {
        "id": "a2_05",
        "word": "request",
        "level": "A2",
        "ipa": "/rɪˈkwest/",
        "type": "noun / verb",
        "meaningVi": "yêu cầu, đề nghị",
        "collocations": "pull request, send a request, make a request",
        "example": "I just created a pull request for the login module.",
        "optionsVi": [
          "yêu cầu, đề nghị",
          "thông báo huỷ",
          "khen thưởng",
          "bản nháp"
        ],
        "exampleVi": ""
      },
      {
        "id": "a2_06",
        "word": "prepare",
        "level": "A2",
        "ipa": "/prɪˈpeər/",
        "type": "verb",
        "meaningVi": "chuẩn bị",
        "collocations": "prepare for a meeting, prepare slides, prepare documentation",
        "example": "He needs 15 minutes to prepare his presentation slides.",
        "optionsVi": [
          "chuẩn bị",
          "trình bày",
          "huỷ bỏ",
          "sao chép"
        ],
        "exampleVi": ""
      },
      {
        "id": "a2_07",
        "word": "progress",
        "level": "A2",
        "ipa": "/ˈprəʊ.ɡres/",
        "type": "noun",
        "meaningVi": "tiến độ, sự tiến triển",
        "collocations": "track progress, make progress, in progress",
        "example": "Can you share the current progress of the sprint?",
        "optionsVi": [
          "tiến độ, sự tiến triển",
          "nguồn lực",
          "chi phí",
          "nguy cơ tiềm ẩn"
        ],
        "exampleVi": ""
      },
      {
        "id": "a2_08",
        "word": "explain",
        "level": "A2",
        "ipa": "/ɪkˈspleɪn/",
        "type": "verb",
        "meaningVi": "giải thích, trình bày rõ",
        "collocations": "explain clearly, explain the reason, explain how it works",
        "example": "Could you please explain how this authentication flow works?",
        "optionsVi": [
          "giải thích, trình bày rõ",
          "chỉ trích",
          "thống kê",
          "phê duyệt"
        ],
        "exampleVi": ""
      },
      {
        "id": "a2_09",
        "word": "backup",
        "level": "A2",
        "ipa": "/ˈbæk.ʌp/",
        "type": "noun / verb",
        "meaningVi": "sao lưu dự phòng",
        "collocations": "backup data, automatic backup, create a backup",
        "example": "Always create a database backup before running migrations.",
        "optionsVi": [
          "sao lưu dự phòng",
          "dọn dẹp bộ nhớ",
          "khởi động lại hệ thống",
          "quét virus"
        ],
        "exampleVi": ""
      },
      {
        "id": "a2_10",
        "word": "attend",
        "level": "A2",
        "ipa": "/əˈtend/",
        "type": "verb",
        "meaningVi": "tham gia, có mặt (cuộc họp, sự kiện)",
        "collocations": "attend a meeting, attend a workshop, unable to attend",
        "example": "I won't be able to attend the standup meeting today.",
        "optionsVi": [
          "tham gia, có mặt (cuộc họp, sự kiện)",
          "chủ trì, tổ chức",
          "rời khỏi",
          "hoãn lại"
        ],
        "exampleVi": ""
      },
      {
        "id": "b1_01",
        "word": "bottleneck",
        "level": "B1",
        "ipa": "/ˈbɒt.əl.nek/",
        "type": "noun",
        "meaningVi": "điểm nghẽn, nút thắt cổ chai",
        "collocations": "performance bottleneck, clear a bottleneck, identify bottlenecks",
        "example": "The database query is currently the main bottleneck in our system.",
        "optionsVi": [
          "điểm nghẽn, nút thắt cổ chai",
          "băng thông mạng",
          "cơ chế đồng bộ",
          "lỗi cú pháp"
        ],
        "exampleVi": ""
      },
      {
        "id": "b1_02",
        "word": "resolve",
        "level": "B1",
        "ipa": "/rɪˈzɒlv/",
        "type": "verb",
        "meaningVi": "giải quyết, xử lý dứt điểm",
        "collocations": "resolve an issue, resolve conflicts, resolve quickly",
        "example": "We worked through the night to resolve the production outage.",
        "optionsVi": [
          "giải quyết, xử lý dứt điểm",
          "trì hoãn xử lý",
          "báo cáo cấp trên",
          "tạo thêm sự cố"
        ],
        "exampleVi": ""
      },
      {
        "id": "b1_03",
        "word": "deploy",
        "level": "B1",
        "ipa": "/dɪˈplɔɪ/",
        "type": "verb",
        "meaningVi": "triển khai (hệ thống, phần mềm)",
        "collocations": "deploy to production, deploy changes, automated deployment",
        "example": "We plan to deploy the new microservice tonight at 10 PM.",
        "optionsVi": [
          "triển khai (hệ thống, phần mềm)",
          "thu hồi bản vá",
          "viết tài liệu",
          "kiểm thử hồi quy"
        ],
        "exampleVi": ""
      },
      {
        "id": "b1_04",
        "word": "investigate",
        "level": "B1",
        "ipa": "/ɪnˈves.tɪ.ɡeɪt/",
        "type": "verb",
        "meaningVi": "điều tra, tìm hiểu nguyên nhân gốc rễ",
        "collocations": "investigate a bug, investigate the root cause, investigate complaints",
        "example": "The DevOps team is currently investigating the high CPU usage.",
        "optionsVi": [
          "điều tra, tìm hiểu nguyên nhân gốc rễ",
          "thay thế phần cứng",
          "chấp nhận lỗi",
          "đóng vé hỗ trợ"
        ],
        "exampleVi": ""
      },
      {
        "id": "b1_05",
        "word": "collaborate",
        "level": "B1",
        "ipa": "/kəˈlæb.ə.reɪt/",
        "type": "verb",
        "meaningVi": "hợp tác, phối hợp làm việc",
        "collocations": "collaborate with other teams, closely collaborate, collaborate remotely",
        "example": "Developers and testers must collaborate closely during each sprint.",
        "optionsVi": [
          "hợp tác, phối hợp làm việc",
          "cạnh tranh độc lập",
          "giao phó hoàn toàn",
          "tranh luận gay gắt"
        ],
        "exampleVi": ""
      },
      {
        "id": "b1_06",
        "word": "prioritize",
        "level": "B1",
        "ipa": "/praɪˈɒr.ɪ.taɪz/",
        "type": "verb",
        "meaningVi": "ưu tiên, sắp xếp theo thứ tự",
        "collocations": "prioritize tasks, prioritize features, high priority",
        "example": "We should prioritize fixing security vulnerabilities first.",
        "optionsVi": [
          "ưu tiên, sắp xếp theo thứ tự",
          "loại bỏ khỏi danh sách",
          "ủy quyền cho người khác",
          "ghi nhận tạm thời"
        ],
        "exampleVi": ""
      },
      {
        "id": "b1_07",
        "word": "maintain",
        "level": "B1",
        "ipa": "/meɪnˈteɪn/",
        "type": "verb",
        "meaningVi": "duy trì, bảo trì hệ thống",
        "collocations": "maintain code quality, maintain servers, maintain documentation",
        "example": "It is essential to maintain clean code and clear documentation.",
        "optionsVi": [
          "duy trì, bảo trì hệ thống",
          "nâng cấp toàn diện",
          "tháo gỡ cài đặt",
          "bỏ qua cảnh báo"
        ],
        "exampleVi": ""
      },
      {
        "id": "b1_08",
        "word": "postpone",
        "level": "B1",
        "ipa": "/pəʊstˈpəʊn/",
        "type": "verb",
        "meaningVi": "hoãn lại, dời sang thời điểm khác",
        "collocations": "postpone the release, postpone a meeting, postpone indefinitely",
        "example": "Due to server issues, we decided to postpone the release date.",
        "optionsVi": [
          "hoãn lại, dời sang thời điểm khác",
          "đẩy nhanh tiến độ",
          "công bố chính thức",
          "phân tích dữ liệu"
        ],
        "exampleVi": ""
      },
      {
        "id": "b1_09",
        "word": "requirement",
        "level": "B1",
        "ipa": "/rɪˈkwaɪə.mənt/",
        "type": "noun",
        "meaningVi": "yêu cầu (kỹ thuật, nghiệp vụ)",
        "collocations": "business requirements, technical requirements, satisfy requirements",
        "example": "Make sure the implementation meets all client requirements.",
        "optionsVi": [
          "yêu cầu (kỹ thuật, nghiệp vụ)",
          "ngân sách dự kiến",
          "hạn chế thời gian",
          "bản quyền phần mềm"
        ],
        "exampleVi": ""
      },
      {
        "id": "b1_10",
        "word": "implement",
        "level": "B1",
        "ipa": "/ˈɪm.plɪ.ment/",
        "type": "verb",
        "meaningVi": "thi hành, hiện thực hóa, viết code",
        "collocations": "implement a feature, implement an algorithm, implement changes",
        "example": "We need two days to implement OAuth 2.0 authentication.",
        "optionsVi": [
          "thi hành, hiện thực hóa, viết code",
          "đánh giá thiết kế",
          "bãi bỏ quy trình",
          "tìm kiếm tài liệu"
        ],
        "exampleVi": ""
      },
      {
        "id": "b2_01",
        "word": "scalability",
        "level": "B2",
        "ipa": "/ˌskeɪ.ləˈbɪl.ə.ti/",
        "type": "noun",
        "meaningVi": "khả năng mở rộng (hệ thống chịu tải)",
        "collocations": "system scalability, horizontal scalability, ensure scalability",
        "example": "Kubernetes provides outstanding scalability for containerized workloads.",
        "optionsVi": [
          "khả năng mở rộng (hệ thống chịu tải)",
          "tính bảo mật dữ liệu",
          "chi phí vận hành",
          "độ trễ đường truyền"
        ],
        "exampleVi": ""
      },
      {
        "id": "b2_02",
        "word": "redundancy",
        "level": "B2",
        "ipa": "/rɪˈdʌn.dən.si/",
        "type": "noun",
        "meaningVi": "tính dự phòng, nhân bản chống sập",
        "collocations": "data redundancy, hardware redundancy, high availability and redundancy",
        "example": "We configured multi-region redundancy to prevent single points of failure.",
        "optionsVi": [
          "tính dự phòng, nhân bản chống sập",
          "sự dư thừa lãng phí",
          "tốc độ xử lý",
          "tính toàn vẹn"
        ],
        "exampleVi": ""
      },
      {
        "id": "b2_03",
        "word": "optimize",
        "level": "B2",
        "ipa": "/ˈɒp.tɪ.maɪz/",
        "type": "verb",
        "meaningVi": "tối ưu hóa (tốc độ, chi phí)",
        "collocations": "optimize performance, optimize cloud costs, optimize queries",
        "example": "Migrating to AWS Graviton processors helped optimize our cloud budget.",
        "optionsVi": [
          "tối ưu hóa (tốc độ, chi phí)",
          "đơn giản hóa giao diện",
          "nhân bản máy chủ",
          "thay đổi kiến trúc"
        ],
        "exampleVi": ""
      },
      {
        "id": "b2_04",
        "word": "mitigate",
        "level": "B2",
        "ipa": "/ˈmɪt.ɪ.ɡeɪt/",
        "type": "verb",
        "meaningVi": "giảm thiểu rủi ro, xoa dịu thiệt hại",
        "collocations": "mitigate risks, mitigate impact, mitigate security threats",
        "example": "Deploying automated backups helps mitigate the risk of data loss.",
        "optionsVi": [
          "giảm thiểu rủi ro, xoa dịu thiệt hại",
          "phát hiện kịp thời",
          "đẩy nhanh sự cố",
          "lập luận phản bác"
        ],
        "exampleVi": ""
      },
      {
        "id": "b2_05",
        "word": "comply",
        "level": "B2",
        "ipa": "/kəmˈplaɪ/",
        "type": "verb",
        "meaningVi": "tuân thủ theo quy định/tiêu chuẩn",
        "collocations": "comply with regulations, comply with security standards, fail to comply",
        "example": "All services must comply with GDPR privacy standards.",
        "optionsVi": [
          "tuân thủ theo quy định/tiêu chuẩn",
          "phản đối quyết liệt",
          "sửa đổi điều khoản",
          "miễn trừ trách nhiệm"
        ],
        "exampleVi": ""
      },
      {
        "id": "b2_06",
        "word": "discrepancy",
        "level": "B2",
        "ipa": "/dɪˈskrep.ən.si/",
        "type": "noun",
        "meaningVi": "sự sai lệch, bất nhất",
        "collocations": "data discrepancy, notice a discrepancy, resolve discrepancies",
        "example": "There is a notable discrepancy between the logs and the database records.",
        "optionsVi": [
          "sự sai lệch, bất nhất",
          "tính nhất quán cao",
          "tốc độ tăng trưởng",
          "mức độ tương thích"
        ],
        "exampleVi": ""
      },
      {
        "id": "b2_07",
        "word": "streamline",
        "level": "B2",
        "ipa": "/ˈstriːm.laɪn/",
        "type": "verb",
        "meaningVi": "tinh gọn hóa quy trình",
        "collocations": "streamline the deployment, streamline workflow, streamline processes",
        "example": "We built a CI/CD pipeline to streamline our release workflow.",
        "optionsVi": [
          "tinh gọn hóa quy trình",
          "phân tán nguồn lực",
          "tăng thêm bước kiểm duyệt",
          "chấm dứt dự án"
        ],
        "exampleVi": ""
      },
      {
        "id": "b2_08",
        "word": "compromise",
        "level": "B2",
        "ipa": "/ˈkɒm.prə.maɪz/",
        "type": "noun / verb",
        "meaningVi": "làm tổn hại đến an ninh / thỏa hiệp",
        "collocations": "reach a compromise, compromise security, compromised account",
        "example": "Never compromise software security for the sake of speeding up delivery.",
        "optionsVi": [
          "làm tổn hại đến an ninh / thỏa hiệp",
          "bảo đảm tuyệt đối",
          "nâng cao chất lượng",
          "thực hiện cam kết"
        ],
        "exampleVi": ""
      },
      {
        "id": "b2_09",
        "word": "feasibility",
        "level": "B2",
        "ipa": "/ˌfiː.zəˈbɪl.ə.ti/",
        "type": "noun",
        "meaningVi": "tính khả thi, tính thực tế",
        "collocations": "feasibility study, check the feasibility, economic feasibility",
        "example": "We conducted a feasibility study before adopting the new cloud framework.",
        "optionsVi": [
          "tính khả thi, tính thực tế",
          "độ tin cậy",
          "tính phức tạp",
          "khả năng sinh lời"
        ],
        "exampleVi": ""
      },
      {
        "id": "b2_10",
        "word": "trade-off",
        "level": "B2",
        "ipa": "/ˈtreɪd.ɒf/",
        "type": "noun",
        "meaningVi": "sự đánh đổi (tốc độ, chi phí, bảo mật)",
        "collocations": "architectural trade-offs, necessary trade-off, evaluate trade-offs",
        "example": "In system design, choosing consistency over availability is a classic trade-off.",
        "optionsVi": [
          "sự đánh đổi (tốc độ, chi phí, bảo mật)",
          "sự cân bằng hoàn hảo",
          "thỏa thuận thương mại",
          "lợi nhuận ròng"
        ],
        "exampleVi": ""
      }
    ],
    "category": "work"
  },
  {
    "groupId": "it_agile_scrum",
    "name": "Agile, Scrum & Quản Lý Dự Án IT",
    "icon": "🏃",
    "category": "tech",
    "level": "B1",
    "description": "Daily standup, Sprint, Backlog, Blocker, Retrospective, User Story và quản trị phân kỳ sản phẩm.",
    "words": [
      {
        "id": "agile_01",
        "word": "blocker",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈblɒk.ər/",
        "meaningVi": "vướng mắc, rào cản tiến độ",
        "collocations": "hit a blocker, resolve blockers, any blockers today",
        "example": "I don't have any blockers today; I am working on the payment screen.",
        "exampleVi": "Hôm nay tôi không gặp vướng mắc gì; tôi đang làm tiếp màn hình thanh toán.",
        "optionsVi": [
          "vướng mắc, rào cản tiến độ",
          "mục tiêu hoàn thành",
          "người hỗ trợ kỹ thuật",
          "tài liệu hướng dẫn"
        ]
      },
      {
        "id": "agile_02",
        "word": "backlog",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈbæk.lɒɡ/",
        "meaningVi": "danh sách công việc tồn đọng",
        "collocations": "product backlog, backlog grooming, prioritize the backlog",
        "example": "The Product Owner is refining user stories in the product backlog.",
        "exampleVi": "Product Owner đang rà soát và làm rõ các user story trong danh sách backlog.",
        "optionsVi": [
          "danh sách công việc tồn đọng",
          "mã nguồn đã xóa",
          "nhật ký lỗi hệ thống",
          "báo cáo tài chính"
        ]
      },
      {
        "id": "agile_03",
        "word": "sprint",
        "level": "A2",
        "type": "noun",
        "ipa": "/sprɪnt/",
        "meaningVi": "chu kỳ phát triển 1-2 tuần",
        "collocations": "two-week sprint, sprint planning, sprint goal, end of sprint",
        "example": "Our main sprint goal is to deliver the biometric login feature.",
        "exampleVi": "Mục tiêu sprint chính lần này là bàn giao tính năng đăng nhập sinh trắc học.",
        "optionsVi": [
          "chu kỳ phát triển 1-2 tuần",
          "chạy bộ đường dài",
          "dự án kéo dài cả năm",
          "hợp đồng thử việc"
        ]
      },
      {
        "id": "agile_04",
        "word": "retrospective",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌret.rəˈspek.tɪv/",
        "meaningVi": "buổi họp nhìn lại, rút kinh nghiệm",
        "collocations": "sprint retrospective, action items from retrospective",
        "example": "In the retrospective, we discussed how to improve our code review quality.",
        "exampleVi": "Trong buổi họp rút kinh nghiệm, chúng tôi thảo luận cách cải thiện chất lượng review code.",
        "optionsVi": [
          "buổi họp nhìn lại, rút kinh nghiệm",
          "buổi phỏng vấn tuyển dụng",
          "lễ ra mắt sản phẩm",
          "kỳ thi sát hạch"
        ]
      },
      {
        "id": "agile_05",
        "word": "acceptance criteria",
        "level": "B2",
        "type": "collocation",
        "ipa": "/əkˈsep.təns kraɪˈtɪə.ri.ə/",
        "meaningVi": "tiêu chí nghiệm thu tính năng",
        "collocations": "meet acceptance criteria, define acceptance criteria",
        "example": "Make sure all acceptance criteria are covered by automated tests.",
        "exampleVi": "Hãy đảm bảo tất cả các tiêu chí nghiệm thu đều được kiểm thử tự động bao phủ.",
        "optionsVi": [
          "tiêu chí nghiệm thu tính năng",
          "hồ sơ xin việc",
          "điều khoản thanh toán",
          "quy tắc bảo mật"
        ]
      },
      {
        "id": "agile_06",
        "word": "impediment",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪmˈped.ɪ.mənt/",
        "meaningVi": "trở ngại, khó khăn cản trở",
        "collocations": "remove impediments, face serious impediments",
        "example": "The Scrum Master is responsible for removing team impediments.",
        "exampleVi": "Scrum Master có trách nhiệm tháo gỡ các trở ngại cho cả nhóm phát triển.",
        "optionsVi": [
          "trở ngại, khó khăn cản trở",
          "cơ hội thăng tiến",
          "phần thưởng thành tích",
          "kế hoạch tương lai"
        ]
      },
      {
        "id": "agile_07",
        "word": "daily standup",
        "level": "A2",
        "type": "collocation",
        "ipa": "/ˌdeɪ.li ˈstænd.ʌp/",
        "meaningVi": "buổi họp nhanh 15 phút đầu ngày",
        "collocations": "join daily standup, 15-minute daily standup",
        "example": "In our daily standup, each member shares what they did yesterday, what they plan today, and any blockers.",
        "exampleVi": "Trong buổi họp daily standup, mỗi người chia sẻ việc đã làm hôm qua, việc dự định làm hôm nay và vướng mắc nếu có.",
        "optionsVi": [
          "buổi họp nhanh 15 phút đầu ngày",
          "buổi tiệc sinh nhật",
          "họp kỷ luật nhân viên",
          "khóa đào tạo chuyên sâu"
        ]
      },
      {
        "id": "agile_08",
        "word": "sprint planning",
        "level": "B1",
        "type": "collocation",
        "ipa": "/sprɪnt ˈplæn.ɪŋ/",
        "meaningVi": "họp lập kế hoạch sprint",
        "collocations": "conduct sprint planning, sprint planning session",
        "example": "During sprint planning, the squad selects tickets from the backlog and commits to a sprint goal.",
        "exampleVi": "Trong buổi lập kế hoạch sprint, nhóm chọn các ticket từ backlog và cam kết mục tiêu sprint.",
        "optionsVi": [
          "họp lập kế hoạch sprint",
          "buổi tổng kết cuối năm",
          "phỏng vấn nhân sự mới",
          "lập dự toán ngân sách"
        ]
      },
      {
        "id": "agile_09",
        "word": "user story",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈjuː.zər ˌstɔː.ri/",
        "meaningVi": "yêu cầu tính năng theo góc nhìn người dùng",
        "collocations": "write a user story, user story format, acceptance criteria for user story",
        "example": "A standard user story follows: 'As a user, I want X so that I can achieve Y.'",
        "exampleVi": "Một user story tiêu chuẩn có cấu trúc: 'Là người dùng, tôi muốn X để tôi có thể đạt được Y.'",
        "optionsVi": [
          "yêu cầu tính năng theo góc nhìn người dùng",
          "truyện ngắn hư cấu",
          "lịch sử tài khoản cá nhân",
          "bản báo cáo lỗi phần mềm"
        ]
      },
      {
        "id": "agile_10",
        "word": "story points",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈstɔː.ri pɔɪnts/",
        "meaningVi": "điểm ước lượng độ khó công việc",
        "collocations": "estimate story points, Fibonacci story points, 5 story points",
        "example": "We estimated this complex authentication refactor at eight story points.",
        "exampleVi": "Chúng tôi ước lượng việc tái cấu trúc xác thực phức tạp này ở mức 8 story points.",
        "optionsVi": [
          "điểm ước lượng độ khó công việc",
          "điểm thi trắc nghiệm",
          "điểm tích lũy mua hàng",
          "điểm xếp hạng nhân viên"
        ]
      },
      {
        "id": "agile_11",
        "word": "definition of done",
        "level": "B2",
        "type": "phrase",
        "ipa": "/ˌdef.ɪˈnɪʃ.ən əv dʌn/",
        "meaningVi": "định nghĩa hoàn thành tính năng",
        "collocations": "meet the definition of done (DoD), clear definition of done",
        "example": "Our Definition of Done includes unit tests, peer review, and deployment to staging.",
        "exampleVi": "Định nghĩa hoàn thành (DoD) của chúng tôi bao gồm kiểm thử unit test, review code đồng nghiệp và triển khai lên staging.",
        "optionsVi": [
          "định nghĩa hoàn thành tính năng",
          "kết thúc hợp đồng lao động",
          "thời điểm nghỉ hưu",
          "quy định hủy bỏ dự án"
        ]
      },
      {
        "id": "agile_12",
        "word": "velocity",
        "level": "B2",
        "type": "noun",
        "ipa": "/vəˈlɒs.ə.ti/",
        "meaningVi": "tốc độ hoàn thành công việc",
        "collocations": "team velocity, average sprint velocity, track velocity",
        "example": "Our squad maintains a stable velocity of around 40 story points per sprint.",
        "exampleVi": "Đội ngũ của chúng tôi duy trì một tốc độ làm việc ổn định khoảng 40 story points mỗi sprint.",
        "optionsVi": [
          "tốc độ hoàn thành công việc",
          "tốc độ đường truyền mạng",
          "vận tốc máy chủ",
          "thời gian chạy máy"
        ]
      },
      {
        "id": "agile_13",
        "word": "scrum master",
        "level": "B1",
        "type": "noun",
        "ipa": "/skrʌm ˈmɑː.stər/",
        "meaningVi": "người điều phối quy trình Scrum",
        "collocations": "certified scrum master, scrum master facilitates meetings",
        "example": "The Scrum Master facilitated the retrospective and helped remove road blocks.",
        "exampleVi": "Scrum Master đã điều phối buổi họp retrospective và giúp tháo gỡ các vướng mắc của nhóm.",
        "optionsVi": [
          "người điều phối quy trình Scrum",
          "giám đốc điều hành",
          "kỹ sư trưởng lập trình",
          "chuyên viên kiểm thử"
        ]
      },
      {
        "id": "agile_14",
        "word": "product owner",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈprɒd.ʌkt ˌəʊ.nər/",
        "meaningVi": "chủ sở hữu sản phẩm (PO)",
        "collocations": "consult the product owner, product owner clarifies requirements",
        "example": "The Product Owner decided to postpone the dark mode feature to the next release.",
        "exampleVi": "Product Owner đã quyết định lùi tính năng giao diện tối sang đợt phát hành kế tiếp.",
        "optionsVi": [
          "chủ sở hữu sản phẩm (PO)",
          "người mua cổ phần",
          "nhân viên thiết kế đồ họa",
          "kỹ sư bảo trì máy chủ"
        ]
      },
      {
        "id": "agile_15",
        "word": "kanban board",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈkæn.bæn bɔːd/",
        "meaningVi": "bảng Kanban theo dõi việc",
        "collocations": "move cards on Kanban board, digital Kanban board",
        "example": "We track development progress by dragging task cards across the Kanban board.",
        "exampleVi": "Chúng tôi theo dõi tiến độ phát triển bằng cách kéo các thẻ nhiệm vụ trên bảng Kanban.",
        "optionsVi": [
          "bảng Kanban theo dõi việc",
          "bảng đen lớp học",
          "bảng mạch điện tử",
          "bảng thông báo nội bộ"
        ]
      },
      {
        "id": "agile_16",
        "word": "work in progress",
        "level": "B1",
        "type": "collocation",
        "ipa": "/wɜːk ɪn ˈprəʊ.ɡres/",
        "meaningVi": "công việc đang làm dở (WIP)",
        "collocations": "limit work in progress, WIP limit on Kanban",
        "example": "To avoid multitasking burnout, we set a Work in Progress (WIP) limit of three tasks per dev.",
        "exampleVi": "Để tránh kiệt sức vì đa nhiệm, chúng tôi đặt giới hạn công việc đang làm (WIP) tối đa 3 đầu việc mỗi người.",
        "optionsVi": [
          "công việc đang làm dở (WIP)",
          "công việc đã hoàn thành",
          "nhiệm vụ bị hủy bỏ",
          "đầu việc chưa bắt đầu"
        ]
      },
      {
        "id": "agile_17",
        "word": "release notes",
        "level": "A2",
        "type": "noun",
        "ipa": "/rɪˈliːs nəʊts/",
        "meaningVi": "bản ghi chú cập nhật phiên bản",
        "collocations": "publish release notes, read the release notes",
        "example": "Always publish detailed release notes so users know what bugs were fixed.",
        "exampleVi": "Hãy luôn công bố bản ghi chú phát hành chi tiết để người dùng nắm được những lỗi nào đã được sửa.",
        "optionsVi": [
          "bản ghi chú cập nhật phiên bản",
          "hướng dẫn bảo hành",
          "hóa đơn mua phần mềm",
          "quy định sử dụng"
        ]
      },
      {
        "id": "agile_18",
        "word": "epic",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈep.ɪk/",
        "meaningVi": "nhóm tính năng lớn (Epic)",
        "collocations": "break down an epic, complex epic, deliver an epic",
        "example": "The 'Payment Overhaul' epic was broken down into twelve smaller user stories.",
        "exampleVi": "Nhóm tính năng lớn 'Cải tổ Hệ thống Thanh toán' đã được chia nhỏ thành 12 user story.",
        "optionsVi": [
          "nhóm tính năng lớn (Epic)",
          "bài thơ sử thi cổ đại",
          "lỗi hệ thống nghiêm trọng",
          "buổi ra mắt sản phẩm"
        ]
      },
      {
        "id": "agile_19",
        "word": "task breakdown",
        "level": "B1",
        "type": "collocation",
        "ipa": "/tɑːsk ˈbreɪk.daʊn/",
        "meaningVi": "chia nhỏ nhiệm vụ",
        "collocations": "detailed task breakdown, conduct task breakdown",
        "example": "A granular task breakdown helps engineers estimate technical effort accurately.",
        "exampleVi": "Việc phân chia nhiệm vụ chi tiết giúp các kỹ sư ước lượng khối lượng kỹ thuật chính xác.",
        "optionsVi": [
          "chia nhỏ nhiệm vụ",
          "bỏ qua các bước",
          "gộp tất cả làm một",
          "hủy bỏ nhiệm vụ"
        ]
      },
      {
        "id": "agile_20",
        "word": "spike",
        "level": "B2",
        "type": "noun",
        "ipa": "/spaɪk/",
        "meaningVi": "nhiệm vụ nghiên cứu thử nghiệm",
        "collocations": "technical spike, conduct a spike, timebox a spike",
        "example": "We created a 2-day technical spike to evaluate if GraphQL fits our mobile app.",
        "exampleVi": "Chúng tôi đã tạo một nhiệm vụ spike nghiên cứu 2 ngày để đánh giá xem GraphQL có phù hợp với ứng dụng di động không.",
        "optionsVi": [
          "nhiệm vụ nghiên cứu thử nghiệm",
          "lỗi sập máy chủ",
          "tăng đột biến lưu lượng",
          "bài kiểm tra tuyển dụng"
        ]
      },
      {
        "id": "agile_21",
        "word": "scope creep",
        "level": "B2",
        "type": "noun",
        "ipa": "/skəʊp kriːp/",
        "meaningVi": "phình to phạm vi dự án ngoài kế hoạch",
        "collocations": "prevent scope creep, suffer from scope creep",
        "example": "Constantly adding unapproved client requests led to massive scope creep and delayed the launch.",
        "exampleVi": "Liên tục thêm vào các yêu cầu chưa được duyệt từ khách hàng dẫn đến phình to phạm vi dự án và làm chậm ngày ra mắt.",
        "optionsVi": [
          "phình to phạm vi dự án ngoài kế hoạch",
          "thu hẹp dự án",
          "hoàn thành đúng hạn",
          "tiết kiệm chi phí"
        ]
      },
      {
        "id": "agile_22",
        "word": "burndown chart",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈbɜːn.daʊn tʃɑːt/",
        "meaningVi": "biểu đồ tiến độ công việc còn lại",
        "collocations": "inspect burndown chart, ideal burndown line",
        "example": "The sprint burndown chart clearly showed that the team was ahead of schedule.",
        "exampleVi": "Biểu đồ burndown của sprint đã cho thấy rõ ràng rằng cả nhóm đang vượt tiến độ đề ra.",
        "optionsVi": [
          "biểu đồ tiến độ công việc còn lại",
          "báo cáo tài chính lỗ lãi",
          "sơ đồ cấu trúc mạng",
          "bảng lương nhân viên"
        ]
      },
      {
        "id": "agile_23",
        "word": "demo session",
        "level": "A2",
        "type": "collocation",
        "ipa": "/ˈdem.əʊ ˌseʃ.ən/",
        "meaningVi": "buổi trình diễn sản phẩm (Demo)",
        "collocations": "host a demo session, sprint demo session",
        "example": "We showcased the new biometric checkout flow during the Friday sprint demo session.",
        "exampleVi": "Chúng tôi đã trình diễn luồng thanh toán sinh trắc học mới trong buổi demo sprint chiều thứ Sáu.",
        "optionsVi": [
          "buổi trình diễn sản phẩm (Demo)",
          "buổi phỏng vấn xin việc",
          "cuộc họp kỷ luật",
          "kỳ thi lý thuyết"
        ]
      },
      {
        "id": "agile_24",
        "word": "timebox",
        "level": "B2",
        "type": "verb / noun",
        "ipa": "/ˈtaɪm.bɒks/",
        "meaningVi": "giới hạn thời gian cố định",
        "collocations": "timebox the discussion to 15 minutes, strict timebox",
        "example": "Let's timebox our architectural debate to thirty minutes so we can make a timely decision.",
        "exampleVi": "Chúng ta hãy giới hạn thời gian tranh luận kiến trúc trong 30 phút để đưa ra quyết định kịp thời.",
        "optionsVi": [
          "giới hạn thời gian cố định",
          "kéo dài vô thời hạn",
          "hủy bỏ lịch hẹn",
          "chia đều thời gian cho cả năm"
        ]
      },
      {
        "id": "agile_25",
        "word": "iteration",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌɪt.ərˈeɪ.ʃən/",
        "meaningVi": "vòng lặp cải tiến",
        "collocations": "next iteration, rapid iterations, iterative development",
        "example": "Agile software engineering relies on rapid iterations based on user feedback.",
        "exampleVi": "Kỹ thuật phần mềm Agile dựa trên các vòng lặp cải tiến nhanh dựa trên phản hồi của người dùng.",
        "optionsVi": [
          "vòng lặp cải tiến",
          "sự chấm dứt vĩnh viễn",
          "sự sao chép mã nguồn",
          "lỗi vòng lặp vô tận"
        ]
      },
      {
        "id": "agile_26",
        "word": "continuous feedback",
        "level": "B2",
        "type": "collocation",
        "ipa": "/kənˈtɪn.ju.əs ˈfiːd.bæk/",
        "meaningVi": "sự phản hồi liên tục",
        "collocations": "embrace continuous feedback, continuous feedback loop",
        "example": "Establishing a continuous feedback loop between QA and developers eliminates release defects.",
        "exampleVi": "Thiết lập luồng phản hồi liên tục giữa QA và lập trình viên giúp loại bỏ các lỗi khi phát hành.",
        "optionsVi": [
          "sự phản hồi liên tục",
          "đánh giá một lần duy nhất",
          "sự im lặng tuyệt đối",
          "khiếu nại chính thức"
        ]
      },
      {
        "id": "agile_27",
        "word": "roadmap",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈrəʊd.mæp/",
        "meaningVi": "lộ trình phát triển sản phẩm",
        "collocations": "product roadmap, technology roadmap, quarterly roadmap",
        "example": "The CPO unveiled the 2027 product roadmap highlighting generative AI features.",
        "exampleVi": "Giám đốc Sản phẩm đã công bố lộ trình sản phẩm 2027 với điểm nhấn là các tính năng GenAI.",
        "optionsVi": [
          "lộ trình phát triển sản phẩm",
          "bản đồ chỉ đường giao thông",
          "sơ đồ mặt bằng văn phòng",
          "hướng dẫn cài đặt"
        ]
      },
      {
        "id": "agile_28",
        "word": "refinement",
        "level": "B2",
        "type": "noun",
        "ipa": "/rɪˈfaɪn.mənt/",
        "meaningVi": "buổi rà soát làm rõ backlog",
        "collocations": "backlog refinement session, continuous refinement",
        "example": "During backlog refinement, engineers ask clarifying questions on acceptance criteria.",
        "exampleVi": "Trong buổi rà soát backlog, các kỹ sư đặt câu hỏi làm rõ các tiêu chí nghiệm thu.",
        "optionsVi": [
          "buổi rà soát làm rõ backlog",
          "buổi kiểm tra an ninh",
          "lễ khánh thành dự án",
          "buổi tiệc công ty"
        ]
      },
      {
        "id": "agile_29",
        "word": "increment",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈɪŋ.krə.mənt/",
        "meaningVi": "phần sản phẩm gia tăng hoàn chỉnh",
        "collocations": "shippable product increment, deliver an increment",
        "example": "Each sprint must culminate in a usable, thoroughly tested product increment.",
        "exampleVi": "Mỗi sprint phải mang lại một phần sản phẩm gia tăng có thể sử dụng được và đã qua kiểm thử kỹ lưỡng.",
        "optionsVi": [
          "phần sản phẩm gia tăng hoàn chỉnh",
          "bản báo cáo lý thuyết",
          "đoạn code chưa chạy được",
          "kế hoạch trên giấy"
        ]
      },
      {
        "id": "agile_30",
        "word": "standup update",
        "level": "A2",
        "type": "collocation",
        "ipa": "/ˈstænd.ʌp ʌpˌdeɪt/",
        "meaningVi": "báo cáo nhanh trong họp standup",
        "collocations": "give standup update, concise standup update",
        "example": "Keep your standup update concise: focus on achievements, plan, and obstacles.",
        "exampleVi": "Hãy giữ báo cáo standup thật ngắn gọn: tập trung vào kết quả đã làm, kế hoạch và trở ngại.",
        "optionsVi": [
          "báo cáo nhanh trong họp standup",
          "báo cáo tài chính quý",
          "bản đề xuất lương",
          "đơn khiếu nại khách hàng"
        ]
      }
    ]
  },
  {
    "groupId": "it_software_dev",
    "name": "Lập Trình & Phát Triển Phần Mềm",
    "icon": "💻",
    "category": "tech",
    "level": "B1",
    "description": "Viết mã, Debug, Code Review, Refactor, Clean Code, giải thuật và các mẫu thiết kế hướng đối tượng.",
    "words": [
      {
        "id": "dev_01",
        "word": "debug",
        "level": "A2",
        "type": "verb",
        "ipa": "/diːˈbʌɡ/",
        "meaningVi": "tìm và sửa lỗi mã nguồn",
        "collocations": "debug the code, debugging tool, spend hours debugging",
        "example": "I spent all morning debugging a weird memory leak issue.",
        "exampleVi": "Tôi đã dành cả buổi sáng để tìm và sửa một lỗi rò rỉ bộ nhớ kỳ lạ.",
        "optionsVi": [
          "tìm và sửa lỗi mã nguồn",
          "viết thêm mã độc",
          "xóa cơ sở dữ liệu",
          "thiết kế giao diện"
        ]
      },
      {
        "id": "dev_02",
        "word": "refactor",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˌriːˈfæk.tər/",
        "meaningVi": "tái cấu trúc mã nguồn",
        "collocations": "refactor legacy code, refactor for performance, continuous refactoring",
        "example": "We should refactor this function to make it easier to test.",
        "exampleVi": "Chúng ta nên tái cấu trúc lại hàm này để dễ viết unit test hơn.",
        "optionsVi": [
          "tái cấu trúc mã nguồn",
          "xóa bỏ hoàn toàn dự án",
          "chuyển sang ngôn ngữ khác",
          "tạo thêm lỗi mới"
        ]
      },
      {
        "id": "dev_03",
        "word": "pull request",
        "level": "A2",
        "type": "collocation",
        "ipa": "/pʊl rɪˈkwest/",
        "meaningVi": "yêu cầu gộp mã nguồn (PR)",
        "collocations": "open a pull request, review a PR, merge the pull request",
        "example": "I have created a pull request; could you please take a look?",
        "exampleVi": "Tôi đã tạo một pull request rồi; bạn vui lòng vào xem qua giúp tôi nhé?",
        "optionsVi": [
          "yêu cầu gộp mã nguồn (PR)",
          "yêu cầu xin nghỉ phép",
          "khiếu nại khách hàng",
          "báo cáo tài chính"
        ]
      },
      {
        "id": "dev_04",
        "word": "deprecated",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈdep.rə.keɪ.tɪd/",
        "meaningVi": "lỗi thời, không khuyên dùng",
        "collocations": "deprecated API, deprecated library, mark as deprecated",
        "example": "This method is deprecated in version 3.0 and will be removed soon.",
        "exampleVi": "Phương thức này đã bị coi là lỗi thời ở phiên bản 3.0 và sẽ sớm bị xóa bỏ.",
        "optionsVi": [
          "lỗi thời, không khuyên dùng",
          "mới cập nhật hiện đại",
          "tốc độ nhanh nhất",
          "bắt buộc phải dùng"
        ]
      },
      {
        "id": "dev_05",
        "word": "reproduce",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˌriː.prəˈdjuːs/",
        "meaningVi": "tái hiện lại lỗi",
        "collocations": "reproduce the bug, steps to reproduce, hard to reproduce",
        "example": "Can you provide the exact steps to reproduce this crash on Android?",
        "exampleVi": "Bạn có thể cung cấp các bước chính xác để tái hiện lại lỗi văng ứng dụng này trên Android không?",
        "optionsVi": [
          "tái hiện lại lỗi",
          "che giấu lỗi phần mềm",
          "sửa lỗi tức thì",
          "báo cáo lên giám đốc"
        ]
      },
      {
        "id": "dev_06",
        "word": "endpoint",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈend.pɔɪnt/",
        "meaningVi": "điểm cuối API",
        "collocations": "RESTful endpoint, secure endpoint, API endpoint documentation",
        "example": "The frontend sends a POST request to the authentication endpoint.",
        "exampleVi": "Phía frontend gửi một yêu cầu POST tới endpoint xác thực người dùng.",
        "optionsVi": [
          "điểm cuối API",
          "dây cáp mạng",
          "điểm kết thúc dự án",
          "hạn chót bàn giao"
        ]
      },
      {
        "id": "dev_07",
        "word": "seamless",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈsiːm.ləs/",
        "meaningVi": "liền mạch, mượt mà trơn tru",
        "collocations": "seamless user experience, seamless integration, seamless transition",
        "example": "The update provides a seamless user experience across all devices.",
        "exampleVi": "Bản cập nhật mang đến trải nghiệm người dùng liền mạch trên mọi thiết bị.",
        "optionsVi": [
          "liền mạch, mượt mà trơn tru",
          "chắp vá, gián đoạn",
          "chậm chạp, giật lag",
          "phức tạp khó dùng"
        ]
      },
      {
        "id": "dev_08",
        "word": "algorithm",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈæl.ɡə.rɪ.ðəm/",
        "meaningVi": "thuật toán logic",
        "collocations": "sorting algorithm, efficient algorithm, machine learning algorithm",
        "example": "The recommendation algorithm suggests movies tailored to your past preferences.",
        "exampleVi": "Thuật toán gợi ý sẽ đề xuất những bộ phim phù hợp với sở thích trước đây của bạn.",
        "optionsVi": [
          "thuật toán logic",
          "ngôn ngữ lập trình",
          "bảng cơ sở dữ liệu",
          "thiết bị phần cứng"
        ]
      },
      {
        "id": "dev_09",
        "word": "repository",
        "level": "A2",
        "type": "noun",
        "ipa": "/rɪˈpɒz.ɪ.tər.i/",
        "meaningVi": "kho lưu trữ mã nguồn (Repo)",
        "collocations": "Git repository, clone a repository, public repository",
        "example": "Clone the GitHub repository to your local computer to start developing.",
        "exampleVi": "Hãy sao chép (clone) kho mã nguồn GitHub về máy tính cá nhân để bắt đầu lập trình.",
        "optionsVi": [
          "kho lưu trữ mã nguồn (Repo)",
          "nhà kho chứa thiết bị",
          "hộp thư điện tử",
          "thư mục ảnh"
        ]
      },
      {
        "id": "dev_10",
        "word": "merge conflict",
        "level": "B1",
        "type": "noun",
        "ipa": "/mɜːdʒ ˈkɒn.flɪkt/",
        "meaningVi": "xung đột mã nguồn khi gộp",
        "collocations": "resolve merge conflicts, avoid merge conflicts",
        "example": "I spent thirty minutes resolving a tricky merge conflict in the config file.",
        "exampleVi": "Tôi đã mất 30 phút để tháo gỡ một xung đột merge conflict hóc búa trong file cấu hình.",
        "optionsVi": [
          "xung đột mã nguồn khi gộp",
          "sự cố mất mạng",
          "lỗi cú pháp biên dịch",
          "xung đột tính cách đồng nghiệp"
        ]
      },
      {
        "id": "dev_11",
        "word": "code review",
        "level": "A2",
        "type": "collocation",
        "ipa": "/kəʊd rɪˈvjuː/",
        "meaningVi": "kiểm duyệt mã nguồn (Code Review)",
        "collocations": "conduct a code review, thorough code review, code review guidelines",
        "example": "Careful code review prevents security flaws from reaching production environments.",
        "exampleVi": "Rà soát code cẩn thận giúp ngăn ngừa các lỗ hổng bảo mật lọt vào môi trường thực tế.",
        "optionsVi": [
          "kiểm duyệt mã nguồn (Code Review)",
          "viết tài liệu kỹ thuật",
          "chấm điểm nhân viên",
          "thử việc lập trình viên"
        ]
      },
      {
        "id": "dev_12",
        "word": "asynchronous",
        "level": "B2",
        "type": "adjective",
        "ipa": "/eɪˈsɪŋ.krə.nəs/",
        "meaningVi": "bất đồng bộ (Async)",
        "collocations": "asynchronous programming, async await, asynchronous HTTP request",
        "example": "JavaScript uses an event loop to handle asynchronous I/O operations smoothly.",
        "exampleVi": "JavaScript sử dụng event loop để xử lý các tác vụ vào/ra bất đồng bộ một cách mượt mà.",
        "optionsVi": [
          "bất đồng bộ (Async)",
          "đồng bộ tuần tự",
          "xử lý song song bằng CPU",
          "chạy đơn luồng bị khóa"
        ]
      },
      {
        "id": "dev_13",
        "word": "middleware",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈmɪd.əl.weər/",
        "meaningVi": "phần mềm trung gian (Middleware)",
        "collocations": "authentication middleware, logging middleware, custom middleware",
        "example": "We added an authentication middleware to verify JWT tokens on every incoming API request.",
        "exampleVi": "Chúng tôi đã thêm một middleware xác thực để kiểm tra JWT token trên mọi request API gửi tới.",
        "optionsVi": [
          "phần mềm trung gian (Middleware)",
          "phần mềm độc hại",
          "hệ điều hành máy chủ",
          "trình duyệt web"
        ]
      },
      {
        "id": "dev_14",
        "word": "dependency",
        "level": "B1",
        "type": "noun",
        "ipa": "/dɪˈpen.dən.si/",
        "meaningVi": "thư viện phụ thuộc (Dependency)",
        "collocations": "install dependencies, update dependencies, circular dependency",
        "example": "Run 'npm install' to download all project dependencies specified in package.json.",
        "exampleVi": "Chạy lệnh 'npm install' để tải về tất cả các thư viện phụ thuộc được chỉ định trong package.json.",
        "optionsVi": [
          "thư viện phụ thuộc (Dependency)",
          "mã nguồn tự viết",
          "cơ sở dữ liệu",
          "bản vá bảo mật"
        ]
      },
      {
        "id": "dev_15",
        "word": "memory leak",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈmem.ər.i liːk/",
        "meaningVi": "lỗi rò rỉ bộ nhớ RAM",
        "collocations": "detect memory leaks, fix memory leak, cause a memory leak",
        "example": "Unclosed database connections caused a severe memory leak that crashed the server.",
        "exampleVi": "Các kết nối cơ sở dữ liệu không được đóng đã gây rò rỉ bộ nhớ nghiêm trọng làm sập máy chủ.",
        "optionsVi": [
          "lỗi rò rỉ bộ nhớ RAM",
          "mất nguồn điện máy chủ",
          "cháy chip xử lý",
          "hỏng ổ đĩa cứng"
        ]
      },
      {
        "id": "dev_16",
        "word": "clean code",
        "level": "B1",
        "type": "noun",
        "ipa": "/kliːn kəʊd/",
        "meaningVi": "mã nguồn sạch dễ đọc",
        "collocations": "write clean code, clean code principles, readable and clean code",
        "example": "Writing clean code is a sign of professionalism and respect for your teammates.",
        "exampleVi": "Viết mã nguồn sạch là dấu hiệu của sự chuyên nghiệp và tôn trọng đồng nghiệp.",
        "optionsVi": [
          "mã nguồn sạch dễ đọc",
          "mã nguồn đã bị xóa",
          "mã được mã hóa bí mật",
          "mã độc không chứa virus"
        ]
      },
      {
        "id": "dev_17",
        "word": "design pattern",
        "level": "B2",
        "type": "noun",
        "ipa": "/dɪˈzaɪn ˌpæt.ən/",
        "meaningVi": "mẫu thiết kế kiến trúc phần mềm",
        "collocations": "Singleton design pattern, Factory pattern, implement design patterns",
        "example": "The Observer design pattern is widely used in event-driven user interfaces.",
        "exampleVi": "Mẫu thiết kế Observer được sử dụng rộng rãi trong các giao diện người dùng hướng sự kiện.",
        "optionsVi": [
          "mẫu thiết kế kiến trúc phần mềm",
          "giao diện đồ họa người dùng",
          "mẫu hoa văn trang trí",
          "bản vẽ kỹ thuật"
        ]
      },
      {
        "id": "dev_18",
        "word": "inheritance",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪnˈher.ɪ.təns/",
        "meaningVi": "tính kế thừa trong OOP",
        "collocations": "class inheritance, multiple inheritance, object-oriented inheritance",
        "example": "Inheritance allows a subclass to reuse properties and methods from a parent class.",
        "exampleVi": "Tính kế thừa cho phép một lớp con tái sử dụng các thuộc tính và phương thức từ lớp cha.",
        "optionsVi": [
          "tính kế thừa trong OOP",
          "tính bao đóng dữ liệu",
          "tính đa hình",
          "sự phân tán dữ liệu"
        ]
      },
      {
        "id": "dev_19",
        "word": "encapsulation",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪnˌkæp.sjʊˈleɪ.ʃən/",
        "meaningVi": "tính bao đóng giấu dữ liệu",
        "collocations": "data encapsulation, principle of encapsulation",
        "example": "Encapsulation prevents unauthorized external access to an object's internal state.",
        "exampleVi": "Tính bao đóng ngăn chặn sự truy cập trái phép từ bên ngoài vào trạng thái nội bộ của đối tượng.",
        "optionsVi": [
          "tính bao đóng giấu dữ liệu",
          "tính kế thừa thuộc tính",
          "thuật toán đệ quy",
          "cơ chế bất đồng bộ"
        ]
      },
      {
        "id": "dev_20",
        "word": "polymorphism",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌpɒl.iˈmɔː.fɪ.zəm/",
        "meaningVi": "tính đa hình trong OOP",
        "collocations": "runtime polymorphism, compile-time polymorphism",
        "example": "Polymorphism enables us to treat different drawing shapes uniformly in the canvas code.",
        "exampleVi": "Tính đa hình cho phép chúng tôi xử lý các hình vẽ khác nhau theo cách đồng nhất trong mã canvas.",
        "optionsVi": [
          "tính đa hình trong OOP",
          "tính đơn luồng",
          "tính năng mở rộng",
          "tính bảo mật cấp cao"
        ]
      },
      {
        "id": "dev_21",
        "word": "boilerplate code",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈbɔɪ.lə.pleɪt kəʊd/",
        "meaningVi": "mã soạn sẵn lặp lại",
        "collocations": "reduce boilerplate code, eliminate boilerplate, framework boilerplate",
        "example": "Modern frameworks like Next.js significantly reduce boilerplate code for routing.",
        "exampleVi": "Các framework hiện đại như Next.js giúp giảm bớt rất nhiều mã soạn sẵn rườm rà cho phần định tuyến.",
        "optionsVi": [
          "mã soạn sẵn lặp lại",
          "mã nguồn độc quyền",
          "thuật toán phức tạp",
          "mã đã bị lỗi thời"
        ]
      },
      {
        "id": "dev_22",
        "word": "syntax error",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈsɪn.tæks ˌer.ər/",
        "meaningVi": "lỗi cú pháp câu lệnh",
        "collocations": "fix syntax error, unexpected syntax error, syntax error at line 42",
        "example": "The compiler stopped execution due to a missing semicolon syntax error on line 42.",
        "exampleVi": "Trình biên dịch đã ngừng thực thi do một lỗi cú pháp thiếu dấu chấm phẩy ở dòng 42.",
        "optionsVi": [
          "lỗi cú pháp câu lệnh",
          "lỗi logic nghiệp vụ",
          "lỗi sập máy chủ",
          "lỗi mạng không phản hồi"
        ]
      },
      {
        "id": "dev_23",
        "word": "compile",
        "level": "B1",
        "type": "verb",
        "ipa": "/kəmˈpaɪl/",
        "meaningVi": "biên dịch mã nguồn",
        "collocations": "compile TypeScript into JavaScript, compile successfully",
        "example": "The project compiles in less than two seconds thanks to the Rust-based bundler.",
        "exampleVi": "Dự án biên dịch chưa đến 2 giây nhờ vào bộ đóng gói viết bằng ngôn ngữ Rust.",
        "optionsVi": [
          "biên dịch mã nguồn",
          "giải mã bảo mật",
          "xóa tệp tin rác",
          "chạy kiểm thử tự động"
        ]
      },
      {
        "id": "dev_24",
        "word": "runtime error",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈrʌn.taɪm ˌer.ər/",
        "meaningVi": "lỗi khi đang chạy chương trình",
        "collocations": "catch runtime errors, unexpected runtime error",
        "example": "Null pointer exceptions are the most frequent runtime error in legacy Java applications.",
        "exampleVi": "Lỗi ngoại lệ con trỏ rỗng là lỗi thời gian chạy thường gặp nhất trong các ứng dụng Java cũ.",
        "optionsVi": [
          "lỗi khi đang chạy chương trình",
          "lỗi cú pháp khi viết code",
          "lỗi mất kết nối mạng",
          "lỗi phần cứng máy tính"
        ]
      },
      {
        "id": "dev_25",
        "word": "commit message",
        "level": "A2",
        "type": "noun",
        "ipa": "/kəˈmɪt ˌmes.ɪdʒ/",
        "meaningVi": "thông điệp mô tả commit",
        "collocations": "meaningful commit message, write clear commit messages",
        "example": "Always write meaningful commit messages following the Conventional Commits specification.",
        "exampleVi": "Hãy luôn viết thông điệp commit có ý nghĩa rõ ràng theo chuẩn Conventional Commits.",
        "optionsVi": [
          "thông điệp mô tả commit",
          "tin nhắn trò chuyện nội bộ",
          "email báo cáo lỗi",
          "tiêu đề bản cập nhật"
        ]
      },
      {
        "id": "dev_26",
        "word": "branch",
        "level": "A2",
        "type": "noun / verb",
        "ipa": "/brɑːntʃ/",
        "meaningVi": "nhánh mã nguồn (Git Branch)",
        "collocations": "feature branch, switch to a new branch, merge branch",
        "example": "Create a new feature branch before making any changes to the authentication logic.",
        "exampleVi": "Hãy tạo một nhánh tính năng mới trước khi thực hiện bất kỳ sửa đổi nào đối với logic xác thực.",
        "optionsVi": [
          "nhánh mã nguồn (Git Branch)",
          "thư mục máy tính",
          "kho dữ liệu đám mây",
          "đường dẫn URL"
        ]
      },
      {
        "id": "dev_27",
        "word": "naming convention",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈneɪ.mɪŋ kənˌven.ʃən/",
        "meaningVi": "quy ước đặt tên",
        "collocations": "follow naming conventions, consistent naming convention",
        "example": "Following consistent naming conventions makes a shared codebase intuitive to navigate.",
        "exampleVi": "Tuân thủ các quy ước đặt tên nhất quán giúp kho mã nguồn chung dễ hiểu và dễ điều hướng hơn.",
        "optionsVi": [
          "quy ước đặt tên",
          "quy định bảo mật",
          "tiêu chuẩn kiểm thử",
          "hướng dẫn cài đặt"
        ]
      },
      {
        "id": "dev_28",
        "word": "parameter",
        "level": "B1",
        "type": "noun",
        "ipa": "/pəˈræm.ɪ.tər/",
        "meaningVi": "tham số đầu vào của hàm",
        "collocations": "function parameter, optional parameters, pass parameters",
        "example": "This helper function accepts two parameters: the user ID and the target role.",
        "exampleVi": "Hàm trợ giúp này nhận hai tham số đầu vào: mã định danh người dùng và vai trò mục tiêu.",
        "optionsVi": [
          "tham số đầu vào của hàm",
          "giá trị trả về của hàm",
          "tên biến cục bộ",
          "lỗi logic vòng lặp"
        ]
      },
      {
        "id": "dev_29",
        "word": "return value",
        "level": "A2",
        "type": "noun",
        "ipa": "/rɪˈtɜːn ˌvæl.juː/",
        "meaningVi": "giá trị trả về của hàm",
        "collocations": "expected return value, check the return value",
        "example": "The return value of the validatePassword function is a boolean true or false.",
        "exampleVi": "Giá trị trả về của hàm validatePassword là một giá trị boolean đúng (true) hoặc sai (false).",
        "optionsVi": [
          "giá trị trả về của hàm",
          "tham số đầu vào",
          "biến môi trường hệ thống",
          "thông báo lỗi cú pháp"
        ]
      },
      {
        "id": "dev_30",
        "word": "event loop",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪˈvent luːp/",
        "meaningVi": "vòng lặp sự kiện (Event Loop)",
        "collocations": "block the event loop, understanding event loop",
        "example": "Never run CPU-heavy computational algorithms on the main Node.js event loop thread.",
        "exampleVi": "Không bao giờ được chạy các thuật toán tính toán nặng ngốn CPU trên luồng event loop chính của Node.js.",
        "optionsVi": [
          "vòng lặp sự kiện (Event Loop)",
          "vòng lặp for thông thường",
          "hàm đệ quy gọi chính nó",
          "luồng xử lý đa luồng"
        ]
      },
      {
        "id": "dev_31",
        "word": "payload",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈpeɪ.ləʊd/",
        "meaningVi": "phần dữ liệu thực của gói tin",
        "collocations": "JSON payload, request payload, payload size limit",
        "example": "Ensure the JSON payload sent in the POST request includes all required profile fields.",
        "exampleVi": "Hãy đảm bảo gói dữ liệu payload JSON gửi trong request POST chứa đầy đủ các trường hồ sơ bắt buộc.",
        "optionsVi": [
          "phần dữ liệu thực của gói tin",
          "tiêu đề gói tin header",
          "mã trạng thái status code",
          "địa chỉ IP máy chủ"
        ]
      },
      {
        "id": "dev_32",
        "word": "legacy code",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈleɡ.ə.si kəʊd/",
        "meaningVi": "mã nguồn cũ kế thừa",
        "collocations": "maintain legacy code, migrate legacy code to TypeScript",
        "example": "A large portion of the banking system is still powered by COBOL legacy code.",
        "exampleVi": "Một phần lớn hệ thống ngân hàng hiện vẫn đang được vận hành bởi mã nguồn cũ kỹ COBOL.",
        "optionsVi": [
          "mã nguồn cũ kế thừa",
          "mã nguồn viết mới tinh",
          "mã nguồn mở miễn phí",
          "thư viện thương mại"
        ]
      },
      {
        "id": "dev_33",
        "word": "concurrency",
        "level": "B2",
        "type": "noun",
        "ipa": "/kənˈkʌr.ən.si/",
        "meaningVi": "tính đồng thời xử lý",
        "collocations": "high concurrency, concurrency control, handle concurrency",
        "example": "Go's goroutines provide lightweight primitives to handle thousands of concurrent requests.",
        "exampleVi": "Các goroutine của Go cung cấp cơ chế siêu nhẹ để xử lý hàng nghìn yêu cầu đồng thời.",
        "optionsVi": [
          "tính đồng thời xử lý",
          "tính đơn luồng tuần tự",
          "sự sao chép dữ liệu",
          "khả năng tương thích"
        ]
      },
      {
        "id": "dev_34",
        "word": "idempotent",
        "level": "B2",
        "type": "adjective",
        "ipa": "/aɪˈdem.pəʊ.tənt/",
        "meaningVi": "tính chất luân đẳng (idempotent)",
        "collocations": "idempotent API, idempotent PUT request, ensure idempotency",
        "example": "Payment webhooks must be idempotent to prevent charging users multiple times upon retry.",
        "exampleVi": "Webhook thanh toán phải có tính luân đẳng để tránh việc trừ tiền khách nhiều lần khi gửi lại.",
        "optionsVi": [
          "tính chất luân đẳng (idempotent)",
          "tính bất biến",
          "tính bảo mật cao",
          "tính ngẫu nhiên"
        ]
      },
      {
        "id": "dev_35",
        "word": "thread-safe",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈθred.seɪf/",
        "meaningVi": "an toàn đa luồng",
        "collocations": "thread-safe data structure, ensure thread safety",
        "example": "ConcurrentHashMap is a thread-safe collection designed for multi-threaded Java systems.",
        "exampleVi": "ConcurrentHashMap là một cấu trúc dữ liệu an toàn đa luồng được thiết kế cho các hệ thống Java nhiều thread.",
        "optionsVi": [
          "an toàn đa luồng",
          "chạy đơn luồng",
          "khóa toàn bộ máy chủ",
          "không an toàn dữ liệu"
        ]
      }
    ]
  },
  {
    "groupId": "it_testing_qa",
    "name": "Kiểm thử & Đảm bảo chất lượng (QA & Testing)",
    "description": "25 thuật ngữ kiểm thử phần mềm, kịch bản test, bẫy lỗi và đảm bảo chất lượng hệ thống",
    "level": "B1-B2",
    "icon": "🧪",
    "badge": "QA / Testing",
    "words": [
      {
        "id": "qa_01",
        "word": "regression testing",
        "level": "B1",
        "ipa": "/rɪˈɡreʃ.ən ˌtes.tɪŋ/",
        "type": "noun",
        "meaningVi": "kiểm thử hồi quy",
        "collocations": "automated regression testing, regression test suite, run regression testing",
        "example": "We run automated regression testing before every major release to catch unintended bugs.",
        "optionsVi": [
          "kiểm thử hồi quy",
          "kiểm thử tải cao",
          "kiểm tra phần cứng",
          "cài đặt cơ sở dữ liệu"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_02",
        "word": "unit test",
        "level": "A2",
        "ipa": "/ˈjuː.nɪt ˌtest/",
        "type": "noun",
        "meaningVi": "kiểm thử đơn vị",
        "collocations": "write unit tests, pass unit tests, unit test coverage",
        "example": "Each developer must write unit tests for their helper functions before opening a PR.",
        "optionsVi": [
          "kiểm thử đơn vị",
          "hướng dẫn người dùng",
          "biên dịch dự án",
          "họp đánh giá code"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_03",
        "word": "integration test",
        "level": "B1",
        "ipa": "/ˌɪn.tɪˈɡreɪ.ʃən ˌtest/",
        "type": "noun",
        "meaningVi": "kiểm thử tích hợp",
        "collocations": "run integration tests, database integration test, continuous integration test",
        "example": "Integration tests verify that our payment gateway communicates properly with third-party APIs.",
        "optionsVi": [
          "kiểm thử tích hợp",
          "thiết kế giao diện",
          "quét virus định kỳ",
          "tối ưu hóa bộ nhớ"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_04",
        "word": "bug triage",
        "level": "B2",
        "ipa": "/bʌɡ ˈtriː.ɑːʒ/",
        "type": "noun",
        "meaningVi": "sàng lọc và phân loại lỗi",
        "collocations": "bug triage meeting, daily triage, triage incoming defects",
        "example": "The QA lead conducts a daily bug triage to prioritize high-severity tickets for the sprint.",
        "optionsVi": [
          "sàng lọc và phân loại lỗi",
          "xóa toàn bộ log",
          "đổi tên nhánh git",
          "sao chép mã nguồn"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_05",
        "word": "reproduce",
        "level": "B1",
        "ipa": "/ˌriː.prəˈdʒuːs/",
        "type": "verb",
        "meaningVi": "tái hiện lỗi",
        "collocations": "reproduce a bug, steps to reproduce, easily reproduced",
        "example": "Please provide detailed steps to reproduce the crash on iOS 16 devices.",
        "optionsVi": [
          "tái hiện lỗi",
          "bỏ qua sự cố",
          "cấp chứng chỉ số",
          "triển khai máy chủ"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_06",
        "word": "test case",
        "level": "A2",
        "ipa": "/ˈtest ˌkeɪs/",
        "type": "noun",
        "meaningVi": "ca kiểm thử, kịch bản thử",
        "collocations": "write test cases, execute test cases, negative test case",
        "example": "Make sure you include negative test cases to check how the system handles invalid input.",
        "optionsVi": [
          "ca kiểm thử, kịch bản thử",
          "hợp đồng bản quyền",
          "thư mời họp",
          "khóa bảo mật"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_07",
        "word": "assertion",
        "level": "B1",
        "ipa": "/əˈsɜː.ʃən/",
        "type": "noun",
        "meaningVi": "câu lệnh khẳng định kỳ vọng",
        "collocations": "assertion failed, assert equal, test assertions",
        "example": "The test failed because the assertion expected HTTP 200 but received HTTP 500.",
        "optionsVi": [
          "câu lệnh khẳng định kỳ vọng",
          "hàm lặp vô hạn",
          "lệnh thoát khẩn cấp",
          "tài khoản thử nghiệm"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_08",
        "word": "mock",
        "level": "B1",
        "ipa": "/mɒk/",
        "type": "noun / verb",
        "meaningVi": "giả lập đối tượng / dữ liệu",
        "collocations": "mock API response, mock object, mock server",
        "example": "We mock the payment provider API so we can test checkout flows without charging real credit cards.",
        "optionsVi": [
          "giả lập đối tượng / dữ liệu",
          "kích hoạt giao dịch thật",
          "xóa bản ghi",
          "nén tệp tin"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_09",
        "word": "code coverage",
        "level": "B2",
        "ipa": "/kəʊd ˈkʌv.ər.ɪdʒ/",
        "type": "noun",
        "meaningVi": "độ bao phủ kiểm thử mã",
        "collocations": "80% code coverage, measure code coverage, branch coverage",
        "example": "Our CI pipeline requires at least 85% code coverage before any PR can be merged.",
        "optionsVi": [
          "độ bao phủ kiểm thử mã",
          "dung lượng tệp nhị phân",
          "tốc độ tải trang",
          "số lượng lập trình viên"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_10",
        "word": "edge case",
        "level": "B1",
        "ipa": "/edʒ keɪs/",
        "type": "noun",
        "meaningVi": "trường hợp biên hiếm gặp",
        "collocations": "handle edge cases, rare edge case, overlook an edge case",
        "example": "Handling edge cases like leap years or timezone shifts prevents unexpected server failures.",
        "optionsVi": [
          "trường hợp biên hiếm gặp",
          "lộ trình sản phẩm",
          "giao diện người dùng",
          "thư mục mặc định"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_11",
        "word": "flaky test",
        "level": "B2",
        "ipa": "/ˈfleɪ.ki test/",
        "type": "noun",
        "meaningVi": "kiểm thử chập chờn thất thường",
        "collocations": "eliminate flaky tests, identify flaky tests, flaky test suite",
        "example": "A flaky test passed on local machines but failed randomly on the build server due to network timing.",
        "optionsVi": [
          "kiểm thử chập chờn thất thường",
          "kiểm thử tải cao",
          "kiểm thử giao diện",
          "kiểm thử bảo mật"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_12",
        "word": "smoke test",
        "level": "B1",
        "ipa": "/sməʊk test/",
        "type": "noun",
        "meaningVi": "kiểm tra nhanh tính năng cốt lõi",
        "collocations": "perform a smoke test, automated smoke test, post-deployment smoke test",
        "example": "After deploying to staging, we run a quick smoke test to verify basic login and navigation work.",
        "optionsVi": [
          "kiểm tra nhanh tính năng cốt lõi",
          "kiểm thử xâm nhập sâu",
          "kiểm toán tài chính",
          "hồi phục dữ liệu cũ"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_13",
        "word": "sanity check",
        "level": "B1",
        "ipa": "/ˈsæn.ə.ti tʃek/",
        "type": "noun",
        "meaningVi": "kiểm tra nhanh tính hợp lý",
        "collocations": "quick sanity check, do a sanity check, basic sanity check",
        "example": "Let's do a quick sanity check on the calculated totals before sending the report to the CEO.",
        "optionsVi": [
          "kiểm tra nhanh tính hợp lý",
          "kiểm tra tải trọng nặng",
          "đổi mật khẩu quản trị",
          "thay đổi cấu trúc bảng"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_14",
        "word": "load testing",
        "level": "B2",
        "ipa": "/ləʊd ˈtes.tɪŋ/",
        "type": "noun",
        "meaningVi": "kiểm thử khả năng chịu tải",
        "collocations": "conduct load testing, peak load testing, load testing tool",
        "example": "We performed load testing simulating 50,000 concurrent users ahead of Black Friday sales.",
        "optionsVi": [
          "kiểm thử khả năng chịu tải",
          "kiểm thử chính tả",
          "kiểm tra kiểu dữ liệu",
          "thiết kế sơ đồ lớp"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_15",
        "word": "test harness",
        "level": "B2",
        "ipa": "/test ˈhɑː.nəs/",
        "type": "noun",
        "meaningVi": "khung môi trường chạy kiểm thử",
        "collocations": "automated test harness, configure the test harness, test harness framework",
        "example": "The test harness automates test execution and compiles summary metrics into our dashboard.",
        "optionsVi": [
          "khung môi trường chạy kiểm thử",
          "dây cáp kết nối mạng",
          "bàn phím cơ lập trình",
          "tài khoản người dùng VIP"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_16",
        "word": "false positive",
        "level": "B2",
        "ipa": "/fɔːls ˈpɒz.ə.tɪv/",
        "type": "noun",
        "meaningVi": "báo động giả, cảnh báo sai",
        "collocations": "false positive alert, reduce false positives, distinguish false positives",
        "example": "The security scanner flagged a false positive on our internal logging library.",
        "optionsVi": [
          "báo động giả, cảnh báo sai",
          "kết quả chính xác 100%",
          "thành công ngoài dự kiến",
          "lỗi nghiêm trọng mức 1"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_17",
        "word": "user acceptance testing",
        "level": "B1",
        "ipa": "/ˌjuː.zər əkˈsep.təns ˌtes.tɪŋ/",
        "type": "noun",
        "meaningVi": "kiểm thử chấp nhận người dùng",
        "collocations": "UAT phase, conduct UAT, sign off on UAT",
        "example": "The banking client completed UAT and officially signed off on the release candidate.",
        "optionsVi": [
          "kiểm thử chấp nhận người dùng",
          "kiểm tra mã nguồn tự động",
          "bảo trì phần cứng",
          "cài đặt hệ điều hành"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_18",
        "word": "end-to-end testing",
        "level": "B2",
        "ipa": "/ˌend.tuːˈend ˌtes.tɪŋ/",
        "type": "noun",
        "meaningVi": "kiểm thử toàn trình E2E",
        "collocations": "E2E testing suite, automated end-to-end testing, Cypress E2E testing",
        "example": "End-to-end testing with Playwright verifies the entire journey from cart checkout to order confirmation.",
        "optionsVi": [
          "kiểm thử toàn trình E2E",
          "kiểm tra hàm đơn lẻ",
          "quét cổng mạng",
          "nén video trực tuyến"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_19",
        "word": "defect density",
        "level": "B2",
        "ipa": "/ˈdiː.fekt ˌden.sə.ti/",
        "type": "noun",
        "meaningVi": "mật độ lỗi trên lượng mã",
        "collocations": "measure defect density, low defect density, defects per KLOC",
        "example": "Our defect density dropped significantly after introducing strict peer code reviews.",
        "optionsVi": [
          "mật độ lỗi trên lượng mã",
          "tốc độ đường truyền",
          "mức tiêu hao pin",
          "thời gian chạy vòng lặp"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_20",
        "word": "boundary value",
        "level": "B1",
        "ipa": "/ˈbaʊn.dər.i ˌvæl.juː/",
        "type": "noun",
        "meaningVi": "giá trị biên trong kiểm thử",
        "collocations": "boundary value analysis, test boundary values, upper boundary",
        "example": "Boundary value analysis checks how the input field behaves with 0, 1, 99, and 100 characters.",
        "optionsVi": [
          "giá trị biên trong kiểm thử",
          "giá trị trung bình cộng",
          "khoảng cách vật lý",
          "tần số quét màn hình"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_21",
        "word": "test suite",
        "level": "A2",
        "ipa": "/test swiːt/",
        "type": "noun",
        "meaningVi": "bộ bài kiểm thử phần mềm",
        "collocations": "comprehensive test suite, run the test suite, green test suite",
        "example": "The complete test suite takes approximately twelve minutes to run in Docker containers.",
        "optionsVi": [
          "bộ bài kiểm thử phần mềm",
          "phòng khách sạn cao cấp",
          "bộ công cụ thiết kế đồ họa",
          "danh sách bảng dữ liệu"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_22",
        "word": "test automation",
        "level": "B1",
        "ipa": "/test ˌɔː.təˈmeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "tự động hóa kiểm thử",
        "collocations": "test automation engineer, implement test automation, test automation framework",
        "example": "Investing in test automation freed our QA team to focus on exploratory testing.",
        "optionsVi": [
          "tự động hóa kiểm thử",
          "hỗ trợ khách hàng 24/7",
          "tự động sao lưu đĩa cứng",
          "biên tập video tự động"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_23",
        "word": "black-box testing",
        "level": "B2",
        "ipa": "/ˈblæk.bɒks ˌtes.tɪŋ/",
        "type": "noun",
        "meaningVi": "kiểm thử hộp đen",
        "collocations": "black-box testing technique, functional black-box testing, conduct black-box tests",
        "example": "Black-box testing focuses purely on inputs and expected outputs without inspecting the internal source code.",
        "optionsVi": [
          "kiểm thử hộp đen",
          "kiểm thử hộp trắng",
          "kiểm tra bộ nhớ RAM",
          "dò tìm cáp quang đứt"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_24",
        "word": "stub",
        "level": "B2",
        "ipa": "/stʌb/",
        "type": "noun",
        "meaningVi": "đối tượng giả trả về kết quả cố định",
        "collocations": "create a stub, stub methods, test stub",
        "example": "We used a test stub to return hardcoded user profiles whenever the user service was invoked.",
        "optionsVi": [
          "đối tượng giả trả về kết quả cố định",
          "hàm đệ quy phức tạp",
          "lệnh xóa cơ sở dữ liệu",
          "khóa công khai"
        ],
        "exampleVi": ""
      },
      {
        "id": "qa_25",
        "word": "benchmark",
        "level": "B2",
        "ipa": "/ˈbentʃ.mɑːk/",
        "type": "noun / verb",
        "meaningVi": "đo đạc đối chuẩn hiệu năng",
        "collocations": "performance benchmark, benchmark results, set a benchmark",
        "example": "The engineers ran benchmarks comparing PostgreSQL against SQLite under concurrent write workloads.",
        "optionsVi": [
          "đo đạc đối chuẩn hiệu năng",
          "chấm dứt hợp đồng lao động",
          "thay đổi địa chỉ IP",
          "khóa tài khoản người dùng"
        ],
        "exampleVi": ""
      }
    ],
    "category": "tech"
  },
  {
    "groupId": "it_devops_cloud",
    "name": "DevOps & Điện toán đám mây (DevOps & Cloud)",
    "description": "30 thuật ngữ CI/CD, hạ tầng đám mây AWS/GCP, Docker, Kubernetes và giám sát hệ thống",
    "level": "B1-B2",
    "icon": "☁️",
    "badge": "DevOps / Cloud",
    "words": [
      {
        "id": "devops_01",
        "word": "continuous integration",
        "level": "B1",
        "ipa": "/kənˈtɪn.ju.əs ˌɪn.tɪˈɡreɪ.ʃən/",
        "type": "noun",
        "meaningVi": "tích hợp liên tục (CI)",
        "collocations": "CI server, practice continuous integration, GitHub Actions CI",
        "example": "Continuous integration automatically builds and tests code commits every time someone pushes to GitHub.",
        "optionsVi": [
          "tích hợp liên tục (CI)",
          "triển khai thủ công",
          "bảo mật phần cứng",
          "sao lưu cơ sở dữ liệu"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_02",
        "word": "continuous delivery",
        "level": "B1",
        "ipa": "/kənˈtɪn.ju.əs dɪˈlɪv.ər.i/",
        "type": "noun",
        "meaningVi": "chuyển giao liên tục (CD)",
        "collocations": "CI/CD pipeline, continuous delivery workflow, automated delivery",
        "example": "Continuous delivery ensures that code passing automated tests is immediately ready for deployment.",
        "optionsVi": [
          "chuyển giao liên tục (CD)",
          "bán hàng trực tuyến",
          "họp nội bộ hàng ngày",
          "đổi tên máy chủ"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_03",
        "word": "pipeline",
        "level": "B1",
        "ipa": "/ˈpaɪp.laɪn/",
        "type": "noun",
        "meaningVi": "đường ống tự động hóa CI/CD",
        "collocations": "build pipeline, deployment pipeline, pipeline failed",
        "example": "The deployment pipeline triggered automatically when the PR was merged into the main branch.",
        "optionsVi": [
          "đường ống tự động hóa CI/CD",
          "đường ống dẫn nước",
          "dây cáp mạng",
          "hàng đợi cuộc gọi"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_04",
        "word": "containerization",
        "level": "B2",
        "ipa": "/kənˌteɪ.nər.aɪˈzeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "đóng gói ứng dụng vào container",
        "collocations": "app containerization, Docker containerization, benefits of containerization",
        "example": "Containerization allows our application to run identically across development, staging, and production servers.",
        "optionsVi": [
          "đóng gói ứng dụng vào container",
          "đóng thùng carton",
          "lắp ráp máy tính bàn",
          "nén file zip"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_05",
        "word": "Docker image",
        "level": "B1",
        "ipa": "/ˈdɒk.ər ˈɪm.ɪdʒ/",
        "type": "noun",
        "meaningVi": "ảnh môi trường Docker",
        "collocations": "build a Docker image, lightweight Docker image, base image",
        "example": "We used an Alpine Linux base image to keep our Docker image size under 50 megabytes.",
        "optionsVi": [
          "ảnh môi trường Docker",
          "hình chụp màn hình",
          "ảnh biểu tượng ứng dụng",
          "tập tin đồ họa vector"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_06",
        "word": "Kubernetes cluster",
        "level": "B2",
        "ipa": "/ˌkuː.bərˈne.tiːz ˈklʌs.tər/",
        "type": "noun",
        "meaningVi": "cụm máy chủ điều phối Kubernetes",
        "collocations": "manage a Kubernetes cluster, multi-node cluster, Kubernetes pod",
        "example": "Our production workload runs across a managed Kubernetes cluster on Google Cloud Platform.",
        "optionsVi": [
          "cụm máy chủ điều phối Kubernetes",
          "mạng máy in văn phòng",
          "danh sách email nội bộ",
          "ổ đĩa cứng gắn ngoài"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_07",
        "word": "orchestration",
        "level": "B2",
        "ipa": "/ˌɔː.kɪˈstreɪ.ʃən/",
        "type": "noun",
        "meaningVi": "điều phối tự động container",
        "collocations": "container orchestration, service orchestration, orchestration platform",
        "example": "Kubernetes is the industry standard for container orchestration at scale.",
        "optionsVi": [
          "điều phối tự động container",
          "hòa âm phối khí nhạc",
          "sắp xếp lịch công tác",
          "lắp ráp vi mạch"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_08",
        "word": "infrastructure as code",
        "level": "B2",
        "ipa": "/ˈɪn.frəˌstrʌk.tʃər æz kəʊd/",
        "type": "noun",
        "meaningVi": "hạ tầng quản lý bằng mã nguồn",
        "collocations": "adopt IaC, Terraform infrastructure as code, IaC templates",
        "example": "With infrastructure as code tools like Terraform, spinning up an entire cloud VPC takes minutes.",
        "optionsVi": [
          "hạ tầng quản lý bằng mã nguồn",
          "hướng dẫn lắp đặt dây cáp",
          "mã độc tống tiền",
          "bảng báo giá thiết bị"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_09",
        "word": "provisioning",
        "level": "B2",
        "ipa": "/prəˈvɪʒ.ən.ɪŋ/",
        "type": "noun",
        "meaningVi": "cấp phát tài nguyên máy chủ",
        "collocations": "server provisioning, cloud provisioning, automated provisioning",
        "example": "Ansible automates server provisioning, installing all necessary packages without manual intervention.",
        "optionsVi": [
          "cấp phát tài nguyên máy chủ",
          "mua sắm văn phòng phẩm",
          "thanh toán lương tháng",
          "thu hồi thẻ ra vào"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_10",
        "word": "serverless",
        "level": "B1",
        "ipa": "/ˈsɜː.və.ləs/",
        "type": "adjective",
        "meaningVi": "kiến trúc không máy chủ",
        "collocations": "serverless architecture, serverless functions, AWS Lambda serverless",
        "example": "Going serverless enabled the startup to scale effortlessly without maintaining physical or virtual servers.",
        "optionsVi": [
          "kiến trúc không máy chủ",
          "không có mạng internet",
          "thiết bị không dây",
          "phần mềm mã nguồn đóng"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_11",
        "word": "load balancer",
        "level": "B1",
        "ipa": "/ləʊd ˈbæl.ən.sər/",
        "type": "noun",
        "meaningVi": "bộ cân bằng tải",
        "collocations": "configure a load balancer, distribute traffic via load balancer, Application Load Balancer",
        "example": "The load balancer distributes incoming HTTPS traffic evenly across five EC2 instances.",
        "optionsVi": [
          "bộ cân bằng tải",
          "đồng hồ đo điện thế",
          "bộ lưu điện UPS",
          "cục phát sóng WiFi"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_12",
        "word": "reverse proxy",
        "level": "B2",
        "ipa": "/rɪˈvɜːs ˈprɒk.si/",
        "type": "noun",
        "meaningVi": "máy chủ ủy nhiệm ngược",
        "collocations": "Nginx reverse proxy, setup reverse proxy, forward requests through reverse proxy",
        "example": "Nginx acts as a reverse proxy, handling SSL termination and caching static assets.",
        "optionsVi": [
          "máy chủ ủy nhiệm ngược",
          "phần mềm diệt virus",
          "cổng giao tiếp USB",
          "bàn điều khiển trung tâm"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_13",
        "word": "auto-scaling",
        "level": "B2",
        "ipa": "/ˈɔː.təʊ ˌskeɪ.lɪŋ/",
        "type": "noun",
        "meaningVi": "tự động co giãn tài nguyên",
        "collocations": "auto-scaling group, enable auto-scaling, horizontal auto-scaling",
        "example": "During flash sales, auto-scaling automatically adds more server nodes to handle peak traffic.",
        "optionsVi": [
          "tự động co giãn tài nguyên",
          "tự động thu nhỏ ảnh",
          "tự cân chỉnh góc quay",
          "tự cập nhật hệ điều hành"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_14",
        "word": "high availability",
        "level": "B2",
        "ipa": "/haɪ əˌveɪ.ləˈbɪl.ə.ti/",
        "type": "noun",
        "meaningVi": "tính sẵn sàng cao",
        "collocations": "ensure high availability, HA architecture, 99.99% high availability",
        "example": "Our banking system is engineered for high availability with 99.99% guaranteed uptime.",
        "optionsVi": [
          "tính sẵn sàng cao",
          "tính bảo mật cấp cao",
          "tốc độ xử lý đỉnh cao",
          "tính dễ sử dụng"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_15",
        "word": "disaster recovery",
        "level": "B2",
        "ipa": "/dɪˈzɑː.stər rɪˌkʌv.ər.i/",
        "type": "noun",
        "meaningVi": "khắc phục thảm họa sau sự cố",
        "collocations": "disaster recovery plan, DR drill, disaster recovery site",
        "example": "The disaster recovery plan ensures business continuity even if an entire AWS datacenter goes offline.",
        "optionsVi": [
          "khắc phục thảm họa sau sự cố",
          "cứu hỏa khẩn cấp",
          "phục hồi mật khẩu",
          "sửa chữa điện lưới"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_16",
        "word": "blue-green deployment",
        "level": "B2",
        "ipa": "/bluː ɡriːn dɪˈplɔɪ.mənt/",
        "type": "noun",
        "meaningVi": "triển khai xanh - lam không gián đoạn",
        "collocations": "switch traffic in blue-green deployment, zero-downtime blue-green deployment",
        "example": "Blue-green deployment minimizes risk by routing traffic to the new green environment only after thorough validation.",
        "optionsVi": [
          "triển khai xanh - lam không gián đoạn",
          "phối màu giao diện",
          "tiết kiệm năng lượng",
          "quét mã độc phần mềm"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_17",
        "word": "canary release",
        "level": "B2",
        "ipa": "/kəˈneə.ri rɪˌliːs/",
        "type": "noun",
        "meaningVi": "phát hành thử nghiệm cho nhóm nhỏ",
        "collocations": "canary deployment, roll out a canary release, monitor canary metrics",
        "example": "We deployed a canary release to 5% of active users to verify there were no memory leaks.",
        "optionsVi": [
          "phát hành thử nghiệm cho nhóm nhỏ",
          "nuôi chim cảnh",
          "công bố phần mềm hoàn chỉnh",
          "chạy thử nghiệm trong phòng lab"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_18",
        "word": "rollback",
        "level": "B1",
        "ipa": "/ˈrəʊl.bæk/",
        "type": "noun / verb",
        "meaningVi": "quay lui phiên bản trước",
        "collocations": "perform a rollback, instant rollback, rollback release",
        "example": "When the error rate spiked past 2%, the DevOps engineer executed an immediate rollback.",
        "optionsVi": [
          "quay lui phiên bản trước",
          "tiến hành nâng cấp",
          "đóng băng tài khoản",
          "lưu trữ vĩnh viễn"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_19",
        "word": "telemetry",
        "level": "B2",
        "ipa": "/təˈlem.ə.tri/",
        "type": "noun",
        "meaningVi": "dữ liệu đo lường từ xa",
        "collocations": "collect telemetry, telemetry data, OpenTelemetry standard",
        "example": "OpenTelemetry helps capture traces and metrics across all our microservices.",
        "optionsVi": [
          "dữ liệu đo lường từ xa",
          "kính viễn vọng quang học",
          "đài truyền hình vệ tinh",
          "thiết bị đo nhiệt độ"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_20",
        "word": "latency",
        "level": "B1",
        "ipa": "/ˈleɪ.tən.si/",
        "type": "noun",
        "meaningVi": "độ trễ phản hồi",
        "collocations": "low latency, network latency, reduce latency",
        "example": "Deploying our API closer to users via Cloudflare Workers cut server latency to under 20 milliseconds.",
        "optionsVi": [
          "độ trễ phản hồi",
          "tốc độ tải lên",
          "băng thông tối đa",
          "độ phân giải màn hình"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_21",
        "word": "throughput",
        "level": "B2",
        "ipa": "/ˈθruː.pʊt/",
        "type": "noun",
        "meaningVi": "thông lượng xử lý",
        "collocations": "high throughput, transaction throughput, maximize throughput",
        "example": "The payment engine achieves a peak throughput of 10,000 transactions per second.",
        "optionsVi": [
          "thông lượng xử lý",
          "dung lượng ổ cứng",
          "thời gian chờ rảnh",
          "khoảng cách vật lý"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_22",
        "word": "monitoring",
        "level": "A2",
        "ipa": "/ˈmɒn.ɪ.tər.ɪŋ/",
        "type": "noun",
        "meaningVi": "giám sát hoạt động hệ thống",
        "collocations": "server monitoring, real-time monitoring, monitoring tool",
        "example": "Datadog provides real-time monitoring and sends Slack alerts when memory usage exceeds 90%.",
        "optionsVi": [
          "giám sát hoạt động hệ thống",
          "điều khiển từ xa",
          "lắp ráp máy tính",
          "thu thập ý kiến khách hàng"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_23",
        "word": "alert threshold",
        "level": "B2",
        "ipa": "/əˈlɜːt ˈθreʃ.həʊld/",
        "type": "noun",
        "meaningVi": "ngưỡng kích hoạt cảnh báo",
        "collocations": "set alert threshold, exceed alert threshold, trigger alert threshold",
        "example": "We set an alert threshold to notify on-call engineers if API error rates exceed 1%.",
        "optionsVi": [
          "ngưỡng kích hoạt cảnh báo",
          "giá trần chứng khoán",
          "hạn mức chi tiêu thẻ",
          "tốc độ quạt tản nhiệt"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_24",
        "word": "log aggregation",
        "level": "B2",
        "ipa": "/lɒɡ ˌæɡ.rɪˈɡeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "tập hợp và gom log tập trung",
        "collocations": "centralized log aggregation, log aggregation pipeline, ELK log aggregation",
        "example": "Log aggregation tools like Elasticsearch and Grafana Loki allow us to search millions of log lines instantly.",
        "optionsVi": [
          "tập hợp và gom log tập trung",
          "xóa nhật ký truy cập",
          "ghi âm cuộc gọi",
          "khóa cổng mạng"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_25",
        "word": "virtual machine",
        "level": "A2",
        "ipa": "/ˌvɜː.tʃu.əl məˈʃiːn/",
        "type": "noun",
        "meaningVi": "máy ảo (VM)",
        "collocations": "provision a virtual machine, cloud virtual machine, VM instance",
        "example": "Developers spin up a Linux virtual machine to test code in an isolated environment.",
        "optionsVi": [
          "máy ảo (VM)",
          "kính thực tế ảo",
          "máy in 3D",
          "máy bán hàng tự động"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_26",
        "word": "multi-region",
        "level": "B2",
        "ipa": "/ˈmʌl.ti ˈriː.dʒən/",
        "type": "adjective",
        "meaningVi": "đa vùng địa lý",
        "collocations": "multi-region deployment, multi-region replication, multi-region failover",
        "example": "A multi-region database setup ensures lightning-fast queries for users in both Asia and North America.",
        "optionsVi": [
          "đa vùng địa lý",
          "nội hạt thành phố",
          "chỉ dành cho khách nội địa",
          "không có kết nối ngoài"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_27",
        "word": "zero downtime",
        "level": "B2",
        "ipa": "/ˈzɪə.rəʊ ˈdaʊn.taɪm/",
        "type": "noun",
        "meaningVi": "không thời gian chết / không gián đoạn",
        "collocations": "zero downtime deployment, achieve zero downtime, zero downtime migration",
        "example": "Rolling deployments allow us to release new updates with zero downtime for active users.",
        "optionsVi": [
          "không thời gian chết / không gián đoạn",
          "tắt máy bảo dưỡng",
          "ngừng hoạt động hoàn toàn",
          "chậm tiến độ dự án"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_28",
        "word": "secret management",
        "level": "B2",
        "ipa": "/ˈsiː.krət ˈmæn.ɪdʒ.mənt/",
        "type": "noun",
        "meaningVi": "quản lý khóa bí mật và chứng chỉ",
        "collocations": "cloud secret management, HashiCorp Vault secret management, rotate secrets",
        "example": "Never commit API keys to Git; always use a secret management service like AWS Secrets Manager.",
        "optionsVi": [
          "quản lý khóa bí mật và chứng chỉ",
          "giấu thông tin nội bộ",
          "điều tra nhân viên",
          "bảo vệ bản quyền phần mềm"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_29",
        "word": "health check",
        "level": "B1",
        "ipa": "/helθ tʃek/",
        "type": "noun",
        "meaningVi": "thăm dò trạng thái sống còn dịch vụ",
        "collocations": "HTTP health check, health check endpoint, failing health check",
        "example": "The load balancer removes any pod that fails three consecutive HTTP health checks.",
        "optionsVi": [
          "thăm dò trạng thái sống còn dịch vụ",
          "khám sức khỏe định kỳ",
          "kiểm tra pin máy tính",
          "đo nhiệt độ phòng máy"
        ],
        "exampleVi": ""
      },
      {
        "id": "devops_30",
        "word": "artifact repository",
        "level": "B2",
        "ipa": "/ˈɑː.tɪ.fækt rɪˈpɒz.ɪ.tər.i/",
        "type": "noun",
        "meaningVi": "kho lưu trữ gói phần mềm biên dịch",
        "collocations": "publish to artifact repository, Nexus artifact repository, container artifact repository",
        "example": "Compiled JAR files and npm packages are pushed to our private artifact repository during the build.",
        "optionsVi": [
          "kho lưu trữ gói phần mềm biên dịch",
          "bảo tàng đồ cổ",
          "thùng rác hệ thống",
          "thư mục ảnh người dùng"
        ],
        "exampleVi": ""
      }
    ],
    "category": "tech"
  },
  {
    "groupId": "it_database_system_design",
    "name": "Cơ sở dữ liệu & Thiết kế hệ thống (Database & System Design)",
    "description": "30 thuật ngữ cơ sở dữ liệu quan hệ/NoSQL, tối ưu truy vấn, caching và kiến trúc phân tán",
    "level": "B1-B2",
    "icon": "🗄️",
    "badge": "Database / Architecture",
    "words": [
      {
        "id": "db_01",
        "word": "relational database",
        "level": "B1",
        "ipa": "/rɪˈleɪ.ʃən.əl ˈdeɪ.tə.beɪs/",
        "type": "noun",
        "meaningVi": "cơ sở dữ liệu quan hệ",
        "collocations": "relational database management system, SQL relational database",
        "example": "PostgreSQL and MySQL are two of the most popular open-source relational databases in production.",
        "optionsVi": [
          "cơ sở dữ liệu quan hệ",
          "kho lưu file ảnh",
          "hệ điều hành mạng",
          "bộ nhớ tạm RAM"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_02",
        "word": "NoSQL",
        "level": "B1",
        "ipa": "/nəʊ ˈes kjuː el/",
        "type": "noun",
        "meaningVi": "cơ sở dữ liệu phi quan hệ",
        "collocations": "NoSQL database, MongoDB NoSQL, document-based NoSQL",
        "example": "We chose a NoSQL database to store flexible, unstructured JSON documents with high write velocity.",
        "optionsVi": [
          "cơ sở dữ liệu phi quan hệ",
          "không có câu lệnh truy vấn",
          "ngôn ngữ lập trình mới",
          "phần cứng máy chủ"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_03",
        "word": "schema migration",
        "level": "B2",
        "ipa": "/ˈskiː.mə maɪˈɡreɪ.ʃən/",
        "type": "noun",
        "meaningVi": "nâng cấp cấu trúc lược đồ dữ liệu",
        "collocations": "run schema migrations, database migration tool, migration rollback",
        "example": "Always test schema migrations on a staging replica before running them in production.",
        "optionsVi": [
          "nâng cấp cấu trúc lược đồ dữ liệu",
          "chuyển văn phòng làm việc",
          "xuất file PDF",
          "cài đặt trình duyệt"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_04",
        "word": "indexing",
        "level": "B1",
        "ipa": "/ˈɪn.deks.ɪŋ/",
        "type": "noun",
        "meaningVi": "đánh chỉ mục dữ liệu",
        "collocations": "database indexing, B-tree indexing, proper indexing",
        "example": "Proper indexing on the email column reduced query execution time from 800ms down to 4ms.",
        "optionsVi": [
          "đánh chỉ mục dữ liệu",
          "đếm số trang sách",
          "sắp xếp thư mục máy tính",
          "đặt tên biến ngẫu nhiên"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_05",
        "word": "query optimization",
        "level": "B2",
        "ipa": "/ˈkwɪə.ri ˌɒp.tɪ.maɪˈzeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "tối ưu hóa câu lệnh truy vấn",
        "collocations": "SQL query optimization, query execution plan, optimize slow queries",
        "example": "Through query optimization and removing unnecessary JOINs, we cut database CPU load in half.",
        "optionsVi": [
          "tối ưu hóa câu lệnh truy vấn",
          "tăng số lượng bảng",
          "xóa toàn bộ cơ sở dữ liệu",
          "khóa quyền truy cập"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_06",
        "word": "primary key",
        "level": "A2",
        "ipa": "/ˈpraɪ.mər.i kiː/",
        "type": "noun",
        "meaningVi": "khóa chính định danh bản ghi",
        "collocations": "unique primary key, auto-incrementing primary key, composite primary key",
        "example": "Every table in our database must have a unique UUID as its primary key.",
        "optionsVi": [
          "khóa chính định danh bản ghi",
          "mật khẩu quản trị",
          "khóa phòng máy chủ",
          "khóa mã hóa tệp tin"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_07",
        "word": "foreign key",
        "level": "A2",
        "ipa": "/ˈfɒr.ən kiː/",
        "type": "noun",
        "meaningVi": "khóa ngoại liên kết bảng",
        "collocations": "foreign key constraint, define a foreign key, cascade delete foreign key",
        "example": "The foreign key in the orders table references the primary key in the users table.",
        "optionsVi": [
          "khóa ngoại liên kết bảng",
          "chìa khóa dự phòng",
          "mã truy cập quốc tế",
          "mã vùng điện thoại"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_08",
        "word": "transaction",
        "level": "B1",
        "ipa": "/trænˈzæk.ʃən/",
        "type": "noun",
        "meaningVi": "giao dịch cơ sở dữ liệu",
        "collocations": "database transaction, rollback transaction, commit transaction",
        "example": "If either the debit or credit operation fails, the entire transaction is immediately rolled back.",
        "optionsVi": [
          "giao dịch cơ sở dữ liệu",
          "buôn bán chứng khoán",
          "hợp đồng thương mại",
          "hóa đơn bán lẻ"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_09",
        "word": "ACID properties",
        "level": "B2",
        "ipa": "/ˈæs.ɪd ˈprɒp.ə.tiz/",
        "type": "noun",
        "meaningVi": "thuộc tính bảo đảm giao dịch ACID",
        "collocations": "ACID compliance, ACID transactions, relational ACID guarantees",
        "example": "Financial institutions require ACID compliance to guarantee data integrity during money transfers.",
        "optionsVi": [
          "thuộc tính bảo đảm giao dịch ACID",
          "nồng độ axit hóa chất",
          "chỉ số độ bền cơ học",
          "tiêu chuẩn bảo vệ môi trường"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_10",
        "word": "eventual consistency",
        "level": "B2",
        "ipa": "/ɪˈven.tʃu.əl kənˈsɪs.tən.si/",
        "type": "noun",
        "meaningVi": "tính nhất quán cuối cùng",
        "collocations": "guarantee eventual consistency, eventual consistency model, strong vs eventual consistency",
        "example": "In distributed databases like Cassandra, eventual consistency means replicas sync up after a short propagation delay.",
        "optionsVi": [
          "tính nhất quán cuối cùng",
          "tính nhất quán tức thì",
          "lỗi mất dữ liệu vĩnh viễn",
          "sự cố xung đột phần cứng"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_11",
        "word": "CAP theorem",
        "level": "B2",
        "ipa": "/kæp ˈθɪə.rəm/",
        "type": "noun",
        "meaningVi": "định lý CAP trong hệ phân tán",
        "collocations": "CAP theorem trade-offs, explain CAP theorem, CAP theorem constraints",
        "example": "The CAP theorem states that a distributed data store can simultaneously provide at most two out of three guarantees.",
        "optionsVi": [
          "định lý CAP trong hệ phân tán",
          "quy tắc viết hoa ký tự",
          "tiêu chuẩn giới hạn băng thông",
          "nguyên lý nhiệt động lực học"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_12",
        "word": "sharding",
        "level": "B2",
        "ipa": "/ˈʃɑː.dɪŋ/",
        "type": "noun",
        "meaningVi": "phân mảnh dữ liệu ngang",
        "collocations": "database sharding, horizontal sharding, sharding key",
        "example": "We implemented database sharding based on customer region to keep query latency low at immense scale.",
        "optionsVi": [
          "phân mảnh dữ liệu ngang",
          "chia nhỏ màn hình",
          "cắt tỉa mã nguồn",
          "chia sẻ tài nguyên dùng chung"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_13",
        "word": "replication",
        "level": "B1",
        "ipa": "/ˌrep.lɪˈkeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "nhân bản dữ liệu",
        "collocations": "database replication, master-slave replication, real-time replication",
        "example": "Asynchronous replication keeps our standby database updated within seconds of primary writes.",
        "optionsVi": [
          "nhân bản dữ liệu",
          "tái chế phần cứng",
          "sao chép tài liệu giấy",
          "khôi phục hệ thống"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_14",
        "word": "read replica",
        "level": "B2",
        "ipa": "/riːd ˈrep.lɪ.kə/",
        "type": "noun",
        "meaningVi": "bản sao chỉ dùng để đọc",
        "collocations": "create a read replica, route queries to read replica, read replica lag",
        "example": "Heavy reporting queries are routed to read replicas to avoid locking tables on the master database.",
        "optionsVi": [
          "bản sao chỉ dùng để đọc",
          "mô hình đồ chơi",
          "tập tin văn bản sao chép",
          "máy chủ ghi dữ liệu chính"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_15",
        "word": "connection pool",
        "level": "B2",
        "ipa": "/kəˈnek.ʃən puːl/",
        "type": "noun",
        "meaningVi": "hồ kết nối dùng chung",
        "collocations": "database connection pool, pool size, exhausted connection pool",
        "example": "Using a connection pool prevents the overhead of establishing a new TCP connection on every API request.",
        "optionsVi": [
          "hồ kết nối dùng chung",
          "bể bơi cơ quan",
          "mạng cáp nội bộ",
          "nhóm hỗ trợ khách hàng"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_16",
        "word": "caching",
        "level": "B1",
        "ipa": "/ˈkæʃ.ɪŋ/",
        "type": "noun",
        "meaningVi": "lưu trữ bộ nhớ đệm",
        "collocations": "in-memory caching, caching layer, Redis caching",
        "example": "Adding a Redis caching layer reduced load on our SQL database by more than 70%.",
        "optionsVi": [
          "lưu trữ bộ nhớ đệm",
          "thanh toán bằng tiền mặt",
          "dọn dẹp ổ đĩa",
          "xóa tài khoản vĩnh viễn"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_17",
        "word": "cache invalidation",
        "level": "B2",
        "ipa": "/kæʃ ɪnˌvæl.ɪˈdeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "vô hiệu hóa bộ đệm",
        "collocations": "cache invalidation strategy, purge cache, invalidation problem",
        "example": "There are only two hard things in Computer Science: cache invalidation and naming things.",
        "optionsVi": [
          "vô hiệu hóa bộ đệm",
          "hết hạn thẻ tín dụng",
          "tắt máy chủ khẩn cấp",
          "cấp phát địa chỉ mới"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_18",
        "word": "message queue",
        "level": "B1",
        "ipa": "/ˈmes.ɪdʒ kjuː/",
        "type": "noun",
        "meaningVi": "hàng đợi tin nhắn bất đồng bộ",
        "collocations": "RabbitMQ message queue, asynchronous message queue, consume message queue",
        "example": "When a customer places an order, the event is pushed to a message queue for async invoice generation.",
        "optionsVi": [
          "hàng đợi tin nhắn bất đồng bộ",
          "danh sách người xếp hàng",
          "tin nhắn chưa đọc",
          "lịch sử gửi email"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_19",
        "word": "pub/sub pattern",
        "level": "B2",
        "ipa": "/pʌb sʌb ˈpæt.ən/",
        "type": "noun",
        "meaningVi": "mô hình xuất bản - nhận tin",
        "collocations": "implement pub/sub pattern, publish messages, topic subscribers",
        "example": "Google Cloud Pub/Sub enables decoupled microservices to broadcast and receive events seamlessly.",
        "optionsVi": [
          "mô hình xuất bản - nhận tin",
          "đăng ký báo giấy",
          "mua phần mềm bản quyền",
          "kênh quảng cáo công khai"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_20",
        "word": "event-driven architecture",
        "level": "B2",
        "ipa": "/ɪˈvent ˌdrɪv.ən ˈɑː.kɪ.tek.tʃər/",
        "type": "noun",
        "meaningVi": "kiến trúc hệ thống hướng sự kiện",
        "collocations": "adopt event-driven architecture, event-driven microservices, event streaming",
        "example": "An event-driven architecture with Apache Kafka allows multiple services to react to user actions independently.",
        "optionsVi": [
          "kiến trúc hệ thống hướng sự kiện",
          "tổ chức sự kiện công ty",
          "lịch trình diễn kịch",
          "thiết kế giao diện sự kiện"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_21",
        "word": "distributed system",
        "level": "B2",
        "ipa": "/dɪˈstrɪb.juː.tɪd ˈsɪs.təm/",
        "type": "noun",
        "meaningVi": "hệ thống phân tán",
        "collocations": "design distributed systems, distributed consensus, fault-tolerant distributed system",
        "example": "Building a reliable distributed system requires handling network partitions and clock drift gracefully.",
        "optionsVi": [
          "hệ thống phân tán",
          "mạng phân phối hàng hóa",
          "bảng phân công công việc",
          "hệ điều hành đơn nhân"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_22",
        "word": "rate limiting",
        "level": "B1",
        "ipa": "/reɪt ˈlɪm.ɪ.tɪŋ/",
        "type": "noun",
        "meaningVi": "giới hạn tần suất gọi API",
        "collocations": "API rate limiting, rate limiting algorithm, token bucket rate limiting",
        "example": "We enforce rate limiting of 100 requests per minute per IP to protect our login endpoint from abuse.",
        "optionsVi": [
          "giới hạn tần suất gọi API",
          "hạn chế tốc độ xe cộ",
          "hạn ngạch nhập khẩu",
          "giới hạn thời gian làm việc"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_23",
        "word": "circuit breaker",
        "level": "B2",
        "ipa": "/ˈsɜː.kɪt ˌbreɪ.kər/",
        "type": "noun",
        "meaningVi": "ngắt mạch chống sập dây chuyền",
        "collocations": "circuit breaker pattern, trip the circuit breaker, circuit breaker open",
        "example": "The circuit breaker tripped when third-party SMS service timeouts climbed, preventing our app from freezing.",
        "optionsVi": [
          "ngắt mạch chống sập dây chuyền",
          "cầu dao điện trong nhà",
          "cắt đứt đường truyền cáp quang",
          "phanh xe khẩn cấp"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_24",
        "word": "idempotency",
        "level": "B2",
        "ipa": "/ˌaɪ.dəmˈpəʊ.tən.si/",
        "type": "noun",
        "meaningVi": "tính lũy đẳng (kết quả không đổi khi gọi lại)",
        "collocations": "ensure idempotency, idempotency key, idempotent API design",
        "example": "Stripe uses an idempotency key so that retrying a payment request will never double-charge the client.",
        "optionsVi": [
          "tính lũy đẳng (kết quả không đổi khi gọi lại)",
          "tính bảo mật nhiều lớp",
          "tính ngẫu nhiên của khóa",
          "tính tương thích ngược"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_25",
        "word": "normalization",
        "level": "B1",
        "ipa": "/ˌnɔː.məl.aɪˈzeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "chuẩn hóa dữ liệu giảm trùng lặp",
        "collocations": "database normalization, 3rd normal form, avoid data duplication",
        "example": "Database normalization breaks large tables into smaller related tables to eliminate redundant data.",
        "optionsVi": [
          "chuẩn hóa dữ liệu giảm trùng lặp",
          "bình thường hóa quan hệ ngoại giao",
          "tiêu chuẩn hóa thiết bị",
          "khôi phục dữ liệu ban đầu"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_26",
        "word": "denormalization",
        "level": "B2",
        "ipa": "/diːˌnɔː.məl.aɪˈzeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "phi chuẩn hóa tăng tốc đọc",
        "collocations": "denormalization for read performance, strategic denormalization",
        "example": "We applied deliberate denormalization to our product catalog table to avoid costly joins during high-traffic sales.",
        "optionsVi": [
          "phi chuẩn hóa tăng tốc đọc",
          "phá hoại cơ sở dữ liệu",
          "làm sai lệch số liệu",
          "xóa định dạng văn bản"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_27",
        "word": "partition key",
        "level": "B2",
        "ipa": "/pɑːˈtɪʃ.ən kiː/",
        "type": "noun",
        "meaningVi": "khóa phân vùng dữ liệu",
        "collocations": "choose a partition key, uniform partition key, partition key skew",
        "example": "Choosing the right partition key in DynamoDB ensures data is evenly distributed across physical storage nodes.",
        "optionsVi": [
          "khóa phân vùng dữ liệu",
          "vách ngăn văn phòng",
          "chìa khóa tủ đựng hồ sơ",
          "mã phân chia công việc"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_28",
        "word": "deadlock",
        "level": "B2",
        "ipa": "/ˈded.lɒk/",
        "type": "noun",
        "meaningVi": "khóa chết / bế tắc tiến trình",
        "collocations": "database deadlock, detect deadlocks, resolve a deadlock",
        "example": "The database detected a deadlock when two concurrent transactions were each waiting for the other's lock to release.",
        "optionsVi": [
          "khóa chết / bế tắc tiến trình",
          "ổ khóa cửa bị kẹt",
          "mất kết nối internet",
          "hết pin máy tính"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_29",
        "word": "write-ahead log",
        "level": "B2",
        "ipa": "/raɪt əˈhed lɒɡ/",
        "type": "noun",
        "meaningVi": "nhật ký ghi trước đảm bảo phục hồi (WAL)",
        "collocations": "PostgreSQL WAL, write-ahead logging mechanism, replay WAL files",
        "example": "Changes are recorded in the write-ahead log on disk before being applied to in-memory pages.",
        "optionsVi": [
          "nhật ký ghi trước đảm bảo phục hồi (WAL)",
          "sổ đăng ký khách ra vào",
          "nhật ký công tác hàng ngày",
          "bảng kế hoạch tuần"
        ],
        "exampleVi": ""
      },
      {
        "id": "db_30",
        "word": "data warehouse",
        "level": "B1",
        "ipa": "/ˈdeɪ.tə ˌweə.haʊs/",
        "type": "noun",
        "meaningVi": "kho dữ liệu phân tích tập trung",
        "collocations": "cloud data warehouse, Snowflake data warehouse, query data warehouse",
        "example": "Transactional data is extracted every midnight and loaded into the BigQuery data warehouse for BI reporting.",
        "optionsVi": [
          "kho dữ liệu phân tích tập trung",
          "nhà kho chứa thiết bị vi tính",
          "tủ hồ sơ lưu trữ",
          "cửa hàng bán linh kiện"
        ],
        "exampleVi": ""
      }
    ],
    "category": "tech"
  },
  {
    "groupId": "it_cybersecurity_network",
    "name": "An toàn thông tin & Mạng máy tính (Security & Networking)",
    "description": "30 thuật ngữ an ninh mạng, xác thực OAuth/JWT, mã hóa dữ liệu và phòng chống tấn công",
    "level": "B1-B2",
    "icon": "🛡️",
    "badge": "Security / Network",
    "words": [
      {
        "id": "sec_01",
        "word": "authentication",
        "level": "B1",
        "ipa": "/ɔːˌθen.tɪˈkeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "xác thực danh tính",
        "collocations": "user authentication, biometric authentication, authentication failed",
        "example": "Authentication verifies the identity of a user before granting access to internal resources.",
        "optionsVi": [
          "xác thực danh tính",
          "phân quyền truy cập",
          "mã hóa đường truyền",
          "khóa tài khoản"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_02",
        "word": "authorization",
        "level": "B1",
        "ipa": "/ˌɔː.θər.aɪˈzeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "cấp quyền truy cập",
        "collocations": "authorization header, access authorization, unauthorized access",
        "example": "Once authenticated, authorization rules dictate whether the user can edit or merely view documents.",
        "optionsVi": [
          "cấp quyền truy cập",
          "kiểm tra mật khẩu",
          "sao lưu dữ liệu",
          "kích hoạt tài khoản"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_03",
        "word": "multi-factor authentication",
        "level": "B1",
        "ipa": "/ˌmʌl.ti ˈfæk.tər ɔːˌθen.tɪˈkeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "xác thực đa yếu tố (MFA)",
        "collocations": "enable MFA, mandatory multi-factor authentication, MFA token",
        "example": "Our company requires multi-factor authentication with an authenticator app for all VPN logins.",
        "optionsVi": [
          "xác thực đa yếu tố (MFA)",
          "đổi mật khẩu thường xuyên",
          "quét vân tay ra vào",
          "xác minh giấy tờ tùy thân"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_04",
        "word": "OAuth token",
        "level": "B1",
        "ipa": "/əʊ ˈɔːθ ˈtəʊ.kən/",
        "type": "noun",
        "meaningVi": "mã thông báo ủy quyền OAuth",
        "collocations": "OAuth access token, refresh token, revoke OAuth token",
        "example": "The mobile app sends an OAuth token in the Authorization header with every request.",
        "optionsVi": [
          "mã thông báo ủy quyền OAuth",
          "thẻ nhân viên điện tử",
          "mã giảm giá dịch vụ",
          "số tài khoản ngân hàng"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_05",
        "word": "JSON Web Token",
        "level": "B1",
        "ipa": "/ˈdʒeɪ.sən web ˈtəʊ.kən/",
        "type": "noun",
        "meaningVi": "chuỗi mã hóa phiên làm việc (JWT)",
        "collocations": "sign a JWT, verify JWT signature, JWT expiration",
        "example": "A JWT contains cryptographically signed claims verifying the user's role and expiration timestamp.",
        "optionsVi": [
          "chuỗi mã hóa phiên làm việc (JWT)",
          "file văn bản ghi nhớ",
          "ảnh đại diện người dùng",
          "chứng chỉ tiếng Anh"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_06",
        "word": "encryption",
        "level": "B1",
        "ipa": "/ɪnˈkrɪp.ʃən/",
        "type": "noun",
        "meaningVi": "mã hóa dữ liệu",
        "collocations": "end-to-end encryption, 256-bit encryption, data encryption at rest",
        "example": "All credit card numbers must be stored using strong AES-256 encryption at rest.",
        "optionsVi": [
          "mã hóa dữ liệu",
          "xóa vĩnh viễn tệp tin",
          "sao chép sang ổ cứng",
          "nén tệp dung lượng lớn"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_07",
        "word": "decryption",
        "level": "B1",
        "ipa": "/diːˈkrɪp.ʃən/",
        "type": "noun",
        "meaningVi": "giải mã dữ liệu",
        "collocations": "decryption key, automatic decryption, decrypt the payload",
        "example": "Only the recipient possessing the corresponding private key can perform decryption.",
        "optionsVi": [
          "giải mã dữ liệu",
          "khóa thiết bị",
          "tạo mật khẩu mới",
          "truyền file qua mạng"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_08",
        "word": "public key",
        "level": "B1",
        "ipa": "/ˈpʌb.lɪk kiː/",
        "type": "noun",
        "meaningVi": "khóa công khai",
        "collocations": "public key cryptography, share public key, public and private key pair",
        "example": "You can freely distribute your public key to anyone who needs to send you encrypted messages.",
        "optionsVi": [
          "khóa công khai",
          "chìa khóa cổng công cộng",
          "mật mã chung của phòng",
          "tài khoản dùng thử"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_09",
        "word": "SSL/TLS handshake",
        "level": "B2",
        "ipa": "/ˌes.esˈel tiː.elˈes ˈhænd.ʃeɪk/",
        "type": "noun",
        "meaningVi": "quá trình bắt tay thiết lập kênh bảo mật TLS",
        "collocations": "TLS handshake failure, secure handshake, complete TLS handshake",
        "example": "During the TLS handshake, client and server negotiate cipher suites and verify server certificates.",
        "optionsVi": [
          "quá trình bắt tay thiết lập kênh bảo mật TLS",
          "ký kết hợp đồng kinh doanh",
          "bắt tay chào hỏi xã giao",
          "kiểm tra đường dây cáp"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_10",
        "word": "firewall",
        "level": "A2",
        "ipa": "/ˈfaɪə.wɔːl/",
        "type": "noun",
        "meaningVi": "tường lửa kiểm soát mạng",
        "collocations": "configure firewall, firewall rules, block by firewall",
        "example": "The corporate firewall blocks all incoming connections except port 443 and 80.",
        "optionsVi": [
          "tường lửa kiểm soát mạng",
          "vách ngăn chống cháy",
          "cửa thoát hiểm",
          "bình chữa cháy"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_11",
        "word": "vulnerability",
        "level": "B1",
        "ipa": "/ˌvʌl.nər.əˈbɪl.ə.ti/",
        "type": "noun",
        "meaningVi": "lỗ hổng bảo mật",
        "collocations": "security vulnerability, patch a vulnerability, critical vulnerability",
        "example": "A critical vulnerability was discovered in the third-party PDF rendering library.",
        "optionsVi": [
          "lỗ hổng bảo mật",
          "tính dễ vỡ của kính",
          "điểm yếu tâm lý",
          "sai sót hóa đơn"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_12",
        "word": "penetration testing",
        "level": "B2",
        "ipa": "/ˌpen.ɪˈtreɪ.ʃən ˌtes.tɪŋ/",
        "type": "noun",
        "meaningVi": "kiểm thử xâm nhập bảo mật (Pen-test)",
        "collocations": "conduct penetration testing, pen-test report, third-party pen testing",
        "example": "We hired ethical hackers to perform penetration testing against our web portals prior to launch.",
        "optionsVi": [
          "kiểm thử xâm nhập bảo mật (Pen-test)",
          "đo độ sâu mũi khoan",
          "thử nghiệm vật liệu chịu lực",
          "kiểm tra độ dẫn điện"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_13",
        "word": "cross-site scripting",
        "level": "B2",
        "ipa": "/krɒs saɪt ˈskrɪp.tɪŋ/",
        "type": "noun",
        "meaningVi": "tấn công chèn mã độc XSS",
        "collocations": "stored XSS, prevent cross-site scripting, XSS vulnerability",
        "example": "Sanitizing all user input before rendering it in the DOM effectively prevents cross-site scripting attacks.",
        "optionsVi": [
          "tấn công chèn mã độc XSS",
          "viết kịch bản phim",
          "dịch kịch bản sang ngôn ngữ khác",
          "tạo liên kết ngoài"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_14",
        "word": "SQL injection",
        "level": "B1",
        "ipa": "/ˌes.kjuːˈel ɪnˈdʒek.ʃən/",
        "type": "noun",
        "meaningVi": "tấn công chèn mã SQL độc hại",
        "collocations": "prevent SQL injection, parameterized queries avoid SQL injection, SQL injection vulnerability",
        "example": "Using parameterized queries completely protects the application against SQL injection attempts.",
        "optionsVi": [
          "tấn công chèn mã SQL độc hại",
          "tiêm vắc xin định kỳ",
          "chèn thêm cột vào bảng",
          "sao chép câu lệnh truy vấn"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_15",
        "word": "brute force attack",
        "level": "B1",
        "ipa": "/bruːt fɔːs əˈtæk/",
        "type": "noun",
        "meaningVi": "tấn công dò quét vét cạn mật khẩu",
        "collocations": "mitigate brute force attacks, password brute forcing, brute force protection",
        "example": "Account lockouts and CAPTCHA challenges stop automated brute force attacks on the login page.",
        "optionsVi": [
          "tấn công dò quét vét cạn mật khẩu",
          "tấn công bằng vũ lực",
          "phá hoại máy chủ vật lý",
          "tập kích bất ngờ"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_16",
        "word": "denial of service",
        "level": "B1",
        "ipa": "/dɪˈnaɪ.əl əv ˈsɜː.vɪs/",
        "type": "noun",
        "meaningVi": "tấn công từ chối dịch vụ",
        "collocations": "Distributed Denial of Service (DDoS), DDoS mitigation, withstand DoS attack",
        "example": "Cloudflare absorbs distributed denial of service attacks by filtering bad bot traffic at edge nodes.",
        "optionsVi": [
          "tấn công từ chối dịch vụ",
          "từ chối phục vụ khách hàng",
          "chấm dứt hợp đồng dịch vụ",
          "hết hạn bảo hành sản phẩm"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_17",
        "word": "phishing",
        "level": "A2",
        "ipa": "/ˈfɪʃ.ɪŋ/",
        "type": "noun",
        "meaningVi": "lừa đảo giả mạo trực tuyến",
        "collocations": "phishing email, victim of phishing, phishing simulation",
        "example": "Never enter your corporate password on links received via suspicious phishing emails.",
        "optionsVi": [
          "lừa đảo giả mạo trực tuyến",
          "câu cá giải trí",
          "bắt thủy hải sản",
          "quảng cáo bán hàng"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_18",
        "word": "malware",
        "level": "A2",
        "ipa": "/ˈmæl.weər/",
        "type": "noun",
        "meaningVi": "phần mềm độc hại",
        "collocations": "infected by malware, scan for malware, malware detection",
        "example": "Endpoint protection software detected and quarantined the malware before it could encrypt files.",
        "optionsVi": [
          "phần mềm độc hại",
          "linh kiện điện tử",
          "phần cứng bị hỏng",
          "quần áo thời trang"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_19",
        "word": "zero-day exploit",
        "level": "B2",
        "ipa": "/ˌzɪə.rəʊ deɪ ˈek.splɔɪt/",
        "type": "noun",
        "meaningVi": "khai thác lỗ hổng chưa có bản vá",
        "collocations": "zero-day vulnerability, patched against zero-day exploits, zero-day threat",
        "example": "Security researchers uncovered an actively exploited zero-day vulnerability in popular web browsers.",
        "optionsVi": [
          "khai thác lỗ hổng chưa có bản vá",
          "ngày nghỉ phép đầu tiên",
          "ngày khai trương dự án",
          "hạn chót ngày hôm nay"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_20",
        "word": "access control list",
        "level": "B2",
        "ipa": "/ˈæk.ses kənˈtrəʊl lɪst/",
        "type": "noun",
        "meaningVi": "danh sách kiểm soát quyền truy cập",
        "collocations": "configure ACL, network access control list, S3 bucket ACL",
        "example": "The storage bucket's access control list was misconfigured, briefly leaving public read permissions enabled.",
        "optionsVi": [
          "danh sách kiểm soát quyền truy cập",
          "danh sách khách mời hội thảo",
          "danh mục sản phẩm giảm giá",
          "bảng điểm danh nhân viên"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_21",
        "word": "role-based access control",
        "level": "B2",
        "ipa": "/rəʊl beɪst ˈæk.ses kənˈtrəʊl/",
        "type": "noun",
        "meaningVi": "kiểm soát quyền theo vai trò",
        "collocations": "implement RBAC, RBAC permissions, role-based security model",
        "example": "With role-based access control, only users assigned the Admin role can access billing settings.",
        "optionsVi": [
          "kiểm soát quyền theo vai trò",
          "phân công diễn viên kịch",
          "chia đội thi đấu thể thao",
          "tổ chức bầu cử nội bộ"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_22",
        "word": "data breach",
        "level": "B1",
        "ipa": "/ˈdeɪ.tə briːtʃ/",
        "type": "noun",
        "meaningVi": "sự cố rò rỉ dữ liệu nhạy cảm",
        "collocations": "suffer a data breach, report a data breach, massive data breach",
        "example": "The company was fined under GDPR after failing to promptly disclose a customer data breach.",
        "optionsVi": [
          "sự cố rò rỉ dữ liệu nhạy cảm",
          "mất nguồn điện dự phòng",
          "vỡ đường ống dẫn nước",
          "thất bại trong đàm phán"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_23",
        "word": "security patch",
        "level": "B1",
        "ipa": "/sɪˈkjʊə.rə.ti pætʃ/",
        "type": "noun",
        "meaningVi": "bản vá an ninh phần mềm",
        "collocations": "apply security patches, release a security patch, critical security patch",
        "example": "System administrators applied the critical security patch across all production servers over the weekend.",
        "optionsVi": [
          "bản vá an ninh phần mềm",
          "miếng dán vết thương",
          "phù hiệu bảo vệ",
          "chứng nhận tham dự khóa học"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_24",
        "word": "hash function",
        "level": "B2",
        "ipa": "/hæʃ ˈfʌŋk.ʃən/",
        "type": "noun",
        "meaningVi": "hàm băm mã hóa một chiều",
        "collocations": "cryptographic hash function, SHA-256 hash function, hash collision",
        "example": "Passwords must never be stored in plain text; always use a salted, cryptographic hash function like bcrypt.",
        "optionsVi": [
          "hàm băm mã hóa một chiều",
          "hàm tính tổng thông thường",
          "hàm vẽ đồ thị",
          "lệnh xóa bản ghi"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_25",
        "word": "digital signature",
        "level": "B1",
        "ipa": "/ˌdɪdʒ.ɪ.təl ˈsɪɡ.nə.tʃər/",
        "type": "noun",
        "meaningVi": "chữ ký số điện tử",
        "collocations": "verify digital signature, sign with digital signature, digital certificate and signature",
        "example": "The operating system refuses to install device drivers lacking a valid digital signature.",
        "optionsVi": [
          "chữ ký số điện tử",
          "chữ ký tay trên giấy",
          "dấu vân tay quét mực",
          "con dấu tròn doanh nghiệp"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_26",
        "word": "session hijacking",
        "level": "B2",
        "ipa": "/ˈseʃ.ən ˌhaɪ.dʒæk.ɪŋ/",
        "type": "noun",
        "meaningVi": "chiếm đoạt phiên đăng nhập",
        "collocations": "prevent session hijacking, cookie theft and session hijacking, session hijacking vulnerability",
        "example": "Using HttpOnly and Secure cookie flags helps protect users against session hijacking via XSS.",
        "optionsVi": [
          "chiếm đoạt phiên đăng nhập",
          "không tặc cướp máy bay",
          "lấy trộm điện thoại",
          "hủy cuộc họp giữa chừng"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_27",
        "word": "IP spoofing",
        "level": "B2",
        "ipa": "/aɪ ˈpiː ˌspuː.fɪŋ/",
        "type": "noun",
        "meaningVi": "giả mạo địa chỉ IP nguồn",
        "collocations": "IP spoofing attack, detect IP spoofing, block IP spoofing",
        "example": "Attackers used IP spoofing to disguise their true location while launching network reflection attacks.",
        "optionsVi": [
          "giả mạo địa chỉ IP nguồn",
          "đổi nhà mạng cung cấp",
          "cấp phát IP động",
          "chia sẻ mạng WiFi"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_28",
        "word": "DNS lookup",
        "level": "B1",
        "ipa": "/diː.enˈes ˈlʊk.ʌp/",
        "type": "noun",
        "meaningVi": "tra cứu phân giải tên miền DNS",
        "collocations": "DNS lookup time, perform DNS lookup, reverse DNS lookup",
        "example": "A slow DNS lookup can delay page rendering even before the browser connects to the web server.",
        "optionsVi": [
          "tra cứu phân giải tên miền DNS",
          "tìm kiếm danh bạ điện thoại",
          "tra cứu mã bưu chính",
          "xem bản đồ vệ tinh"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_29",
        "word": "subnet mask",
        "level": "B2",
        "ipa": "/ˈsʌb.net mɑːsk/",
        "type": "noun",
        "meaningVi": "mặt nạ mạng phân tách dải IP",
        "collocations": "default subnet mask, configure subnet mask, calculate subnet mask",
        "example": "The subnet mask 255.255.255.0 defines the boundary between the network ID and host ID.",
        "optionsVi": [
          "mặt nạ mạng phân tách dải IP",
          "khẩu trang y tế phòng dịch",
          "mặt nạ dưỡng da",
          "kính chống chói màn hình"
        ],
        "exampleVi": ""
      },
      {
        "id": "sec_30",
        "word": "least privilege",
        "level": "B2",
        "ipa": "/liːst ˈprɪv.əl.ɪdʒ/",
        "type": "noun",
        "meaningVi": "nguyên tắc trao quyền tối thiểu",
        "collocations": "principle of least privilege, enforce least privilege, least privilege access model",
        "example": "Applying the principle of least privilege ensures services only have access to resources strictly necessary for their function.",
        "optionsVi": [
          "nguyên tắc trao quyền tối thiểu",
          "chế độ đãi ngộ thấp nhất",
          "quyền ưu tiên khẩn cấp",
          "miễn trừ trách nhiệm hình sự"
        ],
        "exampleVi": ""
      }
    ],
    "category": "tech"
  },
  {
    "groupId": "marketing_digital_performance",
    "name": "Digital Marketing & Quảng cáo Hiệu suất (Performance Marketing)",
    "description": "35 thuật ngữ chuyên sâu B1-B2 về chuyển đổi số, SEO/SEM, quảng cáo Ads, CPA/ROAS và tối ưu phễu",
    "level": "B1-B2",
    "icon": "🚀",
    "badge": "Digital / Performance",
    "category": "marketing",
    "words": [
      {
        "id": "mkt_perf_01",
        "word": "conversion rate",
        "level": "B1",
        "ipa": "/kənˈvɜː.ʒən reɪt/",
        "type": "noun",
        "meaningVi": "tỷ lệ chuyển đổi khách hàng",
        "collocations": "boost conversion rate, high conversion rate, e-commerce conversion rate",
        "example": "Redesigning the checkout page improved our conversion rate from 1.8% to 3.2%.",
        "optionsVi": [
          "tỷ lệ chuyển đổi khách hàng",
          "tỷ lệ hoàn trả hàng",
          "chi phí quảng cáo",
          "lượng truy cập tự nhiên"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_02",
        "word": "click-through rate",
        "level": "B1",
        "ipa": "/klɪk θruː reɪt/",
        "type": "noun",
        "meaningVi": "tỷ lệ nhấp chuột vào quảng cáo",
        "collocations": "average click-through rate, improve CTR, CTR benchmark",
        "example": "The catchy video thumbnail doubled our click-through rate on YouTube Ads.",
        "optionsVi": [
          "tỷ lệ nhấp chuột vào quảng cáo",
          "chi phí trên mỗi lượt nhấp",
          "tổng số lượt xem trang",
          "thời gian người dùng ở lại"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_03",
        "word": "cost per click",
        "level": "B1",
        "ipa": "/kɒst pɜː klɪk/",
        "type": "noun",
        "meaningVi": "chi phí mỗi lượt nhấp chuột",
        "collocations": "lower cost per click, high CPC keyword, average CPC",
        "example": "Targeting long-tail keywords helped the agency reduce the average cost per click significantly.",
        "optionsVi": [
          "chi phí mỗi lượt nhấp chuột",
          "tỷ lệ chuyển đổi đơn hàng",
          "tổng ngân sách chiến dịch",
          "số lượt hiển thị quảng cáo"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_04",
        "word": "cost per acquisition",
        "level": "B2",
        "ipa": "/kɒst pɜː ˌæk.wɪˈzɪʃ.ən/",
        "type": "noun",
        "meaningVi": "chi phí để có một khách hàng",
        "collocations": "target cost per acquisition, acceptable CPA, reduce CPA",
        "example": "Our primary goal for this quarter is keeping cost per acquisition under 15 dollars per subscriber.",
        "optionsVi": [
          "chi phí để có một khách hàng",
          "giá bán buôn sản phẩm",
          "thu nhập trung bình người dùng",
          "tiền hoa hồng đại lý"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_05",
        "word": "return on ad spend",
        "level": "B2",
        "ipa": "/rɪˈtɜːn ɒn æd spend/",
        "type": "noun",
        "meaningVi": "tỷ suất lợi nhuận trên chi tiêu quảng cáo",
        "collocations": "target ROAS, calculate ROAS, generate 4x ROAS",
        "example": "The Black Friday campaign delivered a 500% return on ad spend for our e-commerce client.",
        "optionsVi": [
          "tỷ suất lợi nhuận trên chi tiêu quảng cáo",
          "tổng doanh số bán hàng",
          "khoản chi phí hoa hồng",
          "thuế giá trị gia tăng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_06",
        "word": "bounce rate",
        "level": "B1",
        "ipa": "/baʊns reɪt/",
        "type": "noun",
        "meaningVi": "tỷ lệ thoát trang ngay khi vào",
        "collocations": "high bounce rate, decrease bounce rate, analyze bounce rate",
        "example": "A slow loading speed was the main culprit behind the homepage's 75% bounce rate.",
        "optionsVi": [
          "tỷ lệ thoát trang ngay khi vào",
          "tỷ lệ khách hàng mua lại",
          "số lượng chia sẻ bài viết",
          "tỷ lệ gửi email thành công"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_07",
        "word": "retargeting",
        "level": "B1",
        "ipa": "/riːˈtɑː.ɡɪ.tɪŋ/",
        "type": "noun",
        "meaningVi": "tiếp thị nhắm lại người đã truy cập",
        "collocations": "retargeting campaign, Facebook retargeting, dynamic retargeting",
        "example": "We launched a retargeting campaign offering a 10% discount to shoppers who abandoned their carts.",
        "optionsVi": [
          "tiếp thị nhắm lại người đã truy cập",
          "tiếp thị qua người ảnh hưởng",
          "khảo sát thị trường mới",
          "bán hàng trực tiếp tại quầy"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_08",
        "word": "A/B testing",
        "level": "B1",
        "ipa": "/eɪ biː ˈtes.tɪŋ/",
        "type": "noun",
        "meaningVi": "thử nghiệm phân tách đối chứng",
        "collocations": "conduct A/B testing, A/B testing headline, statistically significant A/B testing",
        "example": "Through rigorous A/B testing, we proved that green CTA buttons outperformed red ones by 14%.",
        "optionsVi": [
          "thử nghiệm phân tách đối chứng",
          "kiểm tra độ bền sản phẩm",
          "phỏng vấn nhân viên mới",
          "định giá sản phẩm"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_09",
        "word": "landing page",
        "level": "B1",
        "ipa": "/ˈlæn.dɪŋ peɪdʒ/",
        "type": "noun",
        "meaningVi": "trang đích chuyển đổi khách hàng",
        "collocations": "optimize landing page, high-converting landing page, responsive landing page",
        "example": "A dedicated landing page with clear benefits converts visitors far better than sending them to the homepage.",
        "optionsVi": [
          "trang đích chuyển đổi khách hàng",
          "bảng điều khiển quản trị",
          "trang danh bạ công ty",
          "thông báo lỗi máy chủ"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_10",
        "word": "call to action",
        "level": "B1",
        "ipa": "/kɔːl tuː ˈæk.ʃən/",
        "type": "noun",
        "meaningVi": "lời kêu gọi hành động (CTA)",
        "collocations": "compelling call to action, clear CTA button, placement of call to action",
        "example": "Every promotional email must feature a prominent call to action above the fold.",
        "optionsVi": [
          "lời kêu gọi hành động (CTA)",
          "bản hợp đồng kinh tế",
          "biên bản cuộc họp",
          "lời chào mừng khách hàng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_11",
        "word": "organic reach",
        "level": "B2",
        "ipa": "/ɔːˈɡæn.ɪk riːtʃ/",
        "type": "noun",
        "meaningVi": "lượng tiếp cận tự nhiên không trả tiền",
        "collocations": "decline in organic reach, maximize organic reach, organic reach on social media",
        "example": "Publishing insightful technical articles helped boost our organic reach on LinkedIn.",
        "optionsVi": [
          "lượng tiếp cận tự nhiên không trả tiền",
          "lượng tiếp cận qua quảng cáo",
          "số người theo dõi ảo",
          "chi phí tiếp thị truyền thống"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_12",
        "word": "search engine optimization",
        "level": "B1",
        "ipa": "/sɜːtʃ ˈen.dʒɪn ˌɒp.tɪ.maɪˈzeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "tối ưu hóa công cụ tìm kiếm",
        "collocations": "on-page SEO, invest in search engine optimization, technical SEO",
        "example": "Effective search engine optimization allows our blog posts to rank on the first page of Google.",
        "optionsVi": [
          "tối ưu hóa công cụ tìm kiếm",
          "lắp ráp máy chủ web",
          "thiết kế logo công ty",
          "quản trị hệ cơ sở dữ liệu"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_13",
        "word": "search engine marketing",
        "level": "B1",
        "ipa": "/sɜːtʃ ˈen.dʒɪn ˈmɑː.kɪ.tɪŋ/",
        "type": "noun",
        "meaningVi": "tiếp thị tìm kiếm có trả phí",
        "collocations": "Google Ads SEM, SEM campaign budget, integrate SEO and SEM",
        "example": "While SEO takes months to yield results, search engine marketing brings immediate qualified traffic.",
        "optionsVi": [
          "tiếp thị tìm kiếm có trả phí",
          "viết bài cộng tác báo chí",
          "tổ chức sự kiện ra mắt",
          "tiếp thị truyền miệng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_14",
        "word": "lead generation",
        "level": "B2",
        "ipa": "/liːd ˌdʒen.əˈreɪ.ʃən/",
        "type": "noun",
        "meaningVi": "thu hút khách hàng tiềm năng",
        "collocations": "B2B lead generation, lead generation strategy, qualified lead generation",
        "example": "Offering a free e-book download is an established lead generation tactic for SaaS companies.",
        "optionsVi": [
          "thu hút khách hàng tiềm năng",
          "tuyển dụng nhân sự cấp cao",
          "sản xuất hàng loạt",
          "thanh lý hàng tồn kho"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_15",
        "word": "impression",
        "level": "B1",
        "ipa": "/ɪmˈpreʃ.ən/",
        "type": "noun",
        "meaningVi": "lượt hiển thị quảng cáo",
        "collocations": "ad impressions, cost per thousand impressions, generate impressions",
        "example": "Our banner campaign generated over 2 million impressions across top tech publications.",
        "optionsVi": [
          "lượt hiển thị quảng cáo",
          "lượt bấm vào giỏ hàng",
          "ấn tượng phỏng vấn",
          "đánh giá sao sản phẩm"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_16",
        "word": "attribution model",
        "level": "B2",
        "ipa": "/ˌæt.rɪˈbjuː.ʃən ˈmɒd.əl/",
        "type": "noun",
        "meaningVi": "mô hình quy kết chuyển đổi",
        "collocations": "first-click attribution model, multi-touch attribution model, data-driven attribution",
        "example": "Switching to a multi-touch attribution model gave us visibility into how display ads assist Google Search conversions.",
        "optionsVi": [
          "mô hình quy kết chuyển đổi",
          "mô hình thiết kế sản phẩm",
          "quy tắc thanh toán lương",
          "sơ đồ cấu trúc tổ chức"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_17",
        "word": "pixel tracking",
        "level": "B2",
        "ipa": "/ˈpɪk.səl ˈtræk.ɪŋ/",
        "type": "noun",
        "meaningVi": "mã pixel theo dõi hành vi",
        "collocations": "install pixel tracking, Meta pixel tracking, cookie-based pixel tracking",
        "example": "The Meta pixel tracking snippet records purchases and feeds conversion data back to Ads Manager.",
        "optionsVi": [
          "mã pixel theo dõi hành vi",
          "độ phân giải camera",
          "vẽ biểu đồ pixel",
          "chỉnh sửa ảnh đại diện"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_18",
        "word": "sales funnel",
        "level": "B1",
        "ipa": "/seɪlz ˈfʌn.əl/",
        "type": "noun",
        "meaningVi": "phễu bán hàng đa giai đoạn",
        "collocations": "top of the sales funnel, move prospects down the sales funnel, leaky sales funnel",
        "example": "The marketing team guides leads through the sales funnel from brand awareness to final purchase.",
        "optionsVi": [
          "phễu bán hàng đa giai đoạn",
          "bảng kế hoạch doanh thu",
          "ống xả dầu khí",
          "dây chuyền đóng gói"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_19",
        "word": "lookalike audience",
        "level": "B2",
        "ipa": "/ˈlʊk.ə.laɪk ˈɔː.di.əns/",
        "type": "noun",
        "meaningVi": "tệp đối tượng có hành vi tương tự",
        "collocations": "create lookalike audience, 1% lookalike audience, high-value lookalike audience",
        "example": "We uploaded our top 1,000 customers to generate a 1% lookalike audience on Facebook Ads.",
        "optionsVi": [
          "tệp đối tượng có hành vi tương tự",
          "khán giả xem trực tiếp",
          "nhóm diễn viên đóng thế",
          "người dùng thử nghiệm"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_20",
        "word": "ad fatigue",
        "level": "B2",
        "ipa": "/æd fəˈtiːɡ/",
        "type": "noun",
        "meaningVi": "sự nhàm chán quảng cáo vì xem nhiều",
        "collocations": "suffer from ad fatigue, combat ad fatigue, ad fatigue indicators",
        "example": "When frequency reached 5.2 and CTR began dropping, we refreshed our banners to combat ad fatigue.",
        "optionsVi": [
          "sự nhàm chán quảng cáo vì xem nhiều",
          "sự mệt mỏi của nhân viên",
          "lỗi quá tải máy chủ",
          "thời gian hết hạn hợp đồng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_21",
        "word": "cost per mille",
        "level": "B2",
        "ipa": "/kɒst pɜː ˈmɪl/",
        "type": "noun",
        "meaningVi": "chi phí cho 1.000 lượt hiển thị",
        "collocations": "average CPM, bidding on CPM basis, competitive CPM rates",
        "example": "Brand awareness campaigns are usually measured by cost per mille rather than individual clicks.",
        "optionsVi": [
          "chi phí cho 1.000 lượt hiển thị",
          "giá một gói sản phẩm",
          "phí vận chuyển bưu điện",
          "thuế xuất nhập khẩu"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_22",
        "word": "inbound marketing",
        "level": "B1",
        "ipa": "/ˈɪn.baʊnd ˈmɑː.kɪ.tɪŋ/",
        "type": "noun",
        "meaningVi": "tiếp thị thu hút khách hàng tự tìm đến",
        "collocations": "inbound marketing methodology, inbound leads, content-driven inbound marketing",
        "example": "Inbound marketing focuses on attracting customers through valuable content, blogs, and tutorials.",
        "optionsVi": [
          "tiếp thị thu hút khách hàng tự tìm đến",
          "quảng cáo gọi điện chào mời",
          "bán hàng tận nhà",
          "gửi thư quảng cáo rác"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_23",
        "word": "outbound marketing",
        "level": "B1",
        "ipa": "/ˈaʊt.baʊnd ˈmɑː.kɪ.tɪŋ/",
        "type": "noun",
        "meaningVi": "tiếp thị chủ động gửi thông điệp ra ngoài",
        "collocations": "outbound marketing channels, cold calling outbound marketing, outbound email sequence",
        "example": "Traditional outbound marketing includes TV commercials, billboards, and cold telemarketing calls.",
        "optionsVi": [
          "tiếp thị chủ động gửi thông điệp ra ngoài",
          "khách hàng tự giới thiệu",
          "tối ưu hóa bài viết blog",
          "tiếp thị truyền miệng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_24",
        "word": "conversion funnel",
        "level": "B2",
        "ipa": "/kənˈvɜː.ʒən ˈfʌn.əl/",
        "type": "noun",
        "meaningVi": "phễu theo dõi chuyển đổi từng bước",
        "collocations": "analyze conversion funnel, drop-off in conversion funnel, streamline conversion funnel",
        "example": "Analyzing the conversion funnel revealed that 40% of users dropped off on the payment details page.",
        "optionsVi": [
          "phễu theo dõi chuyển đổi từng bước",
          "hộp lọc nước thải",
          "bình chiết hóa chất",
          "sơ đồ mạch điện tử"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_25",
        "word": "programmatic advertising",
        "level": "B2",
        "ipa": "/ˌprəʊ.ɡræmˈæt.ɪk ˈæd.və.taɪ.zɪŋ/",
        "type": "noun",
        "meaningVi": "quảng cáo tự động đấu thầu",
        "collocations": "programmatic advertising platform, real-time programmatic advertising, programmatic DSP",
        "example": "Programmatic advertising automatically purchases digital ad inventory across thousands of websites in milliseconds.",
        "optionsVi": [
          "quảng cáo tự động đấu thầu",
          "lập trình phần mềm ứng dụng",
          "in ấn tờ rơi truyền thống",
          "bảo trì hệ thống máy in"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_26",
        "word": "lead nurturing",
        "level": "B2",
        "ipa": "/liːd ˈnɜː.tʃər.ɪŋ/",
        "type": "noun",
        "meaningVi": "nuôi dưỡng khách hàng tiềm năng",
        "collocations": "automated lead nurturing, email lead nurturing campaign, lead nurturing workflow",
        "example": "Automated drip email sequences play a pivotal role in lead nurturing for high-ticket enterprise software.",
        "optionsVi": [
          "nuôi dưỡng khách hàng tiềm năng",
          "chăm sóc trẻ sơ sinh",
          "đào tạo nhân viên tập sự",
          "gây quỹ từ thiện"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_27",
        "word": "customer acquisition cost",
        "level": "B2",
        "ipa": "/ˈkʌs.tə.mər ˌæk.wɪˈzɪʃ.ən kɒst/",
        "type": "noun",
        "meaningVi": "chi phí để có khách hàng mới (CAC)",
        "collocations": "sustainable customer acquisition cost, lower CAC, CAC to LTV ratio",
        "example": "Investors examine the ratio between customer acquisition cost and lifetime value to gauge business health.",
        "optionsVi": [
          "chi phí để có khách hàng mới (CAC)",
          "chi phí bảo hành sản phẩm",
          "lương nhân viên bán hàng",
          "tiền thuê mặt bằng kinh doanh"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_28",
        "word": "customer lifetime value",
        "level": "B2",
        "ipa": "/ˈkʌs.tə.mər ˈlaɪf.taɪm ˈvæl.juː/",
        "type": "noun",
        "meaningVi": "giá trị trọn đời của khách hàng (LTV)",
        "collocations": "maximize customer lifetime value, calculate LTV, high customer lifetime value",
        "example": "Subscription-based software models strive to extend customer lifetime value through excellent support and upselling.",
        "optionsVi": [
          "giá trị trọn đời của khách hàng (LTV)",
          "tuổi thọ thiết bị máy móc",
          "thời hạn bảo hiểm nhân thọ",
          "khoản vay ngân hàng dài hạn"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_29",
        "word": "keyword bidding",
        "level": "B1",
        "ipa": "/ˈkiː.wɜːd ˈbɪd.ɪŋ/",
        "type": "noun",
        "meaningVi": "đấu thầu từ khóa quảng cáo",
        "collocations": "automated keyword bidding, competitive keyword bidding, keyword bidding strategy",
        "example": "Smart keyword bidding on Google Ads dynamically adjusts bids based on device, location, and time of day.",
        "optionsVi": [
          "đấu thầu từ khóa quảng cáo",
          "đấu giá tranh nghệ thuật",
          "đặt tên cho thương hiệu",
          "dịch từ điển chuyên ngành"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_30",
        "word": "churn rate",
        "level": "B2",
        "ipa": "/tʃɜːn reɪt/",
        "type": "noun",
        "meaningVi": "tỷ lệ khách hàng rời bỏ dịch vụ",
        "collocations": "reduce churn rate, monthly customer churn rate, acceptable churn rate",
        "example": "Lowering our monthly churn rate from 5% to 2% had a dramatic compounding effect on annual revenue.",
        "optionsVi": [
          "tỷ lệ khách hàng rời bỏ dịch vụ",
          "tốc độ quay của máy ly tâm",
          "tỷ lệ nhân viên nghỉ ốm",
          "tỷ lệ hoàn thành nhiệm vụ"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_31",
        "word": "open rate",
        "level": "B1",
        "ipa": "/ˈəʊ.pən reɪt/",
        "type": "noun",
        "meaningVi": "tỷ lệ mở thư email tiếp thị",
        "collocations": "email open rate, 25% open rate, factors affecting open rate",
        "example": "Personalizing the subject line with the recipient's first name raised our email open rate by 22%.",
        "optionsVi": [
          "tỷ lệ mở thư email tiếp thị",
          "tỷ lệ mở cửa hàng bán lẻ",
          "thời gian làm việc của công ty",
          "lượng người đến tham quan"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_32",
        "word": "click-to-open rate",
        "level": "B2",
        "ipa": "/klɪk tuː ˈəʊ.pən reɪt/",
        "type": "noun",
        "meaningVi": "tỷ lệ nhấp trên số email đã mở",
        "collocations": "measure CTOR, strong click-to-open rate, CTOR vs CTR",
        "example": "While open rate reflects subject line appeal, click-to-open rate directly measures how compelling your email body is.",
        "optionsVi": [
          "tỷ lệ nhấp trên số email đã mở",
          "tổng số thư gửi thành công",
          "tỷ lệ thư bị rơi vào hòm rác",
          "thời gian đọc trung bình"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_33",
        "word": "traffic source",
        "level": "B1",
        "ipa": "/ˈtræf.ɪk sɔːs/",
        "type": "noun",
        "meaningVi": "nguồn gốc lưu lượng truy cập",
        "collocations": "top traffic sources, direct traffic source, referral traffic source",
        "example": "Google Analytics breaks down visitor traffic sources into Organic Search, Direct, Social, and Paid Referral.",
        "optionsVi": [
          "nguồn gốc lưu lượng truy cập",
          "nguồn điện cung cấp cho máy chủ",
          "tuyến đường giao thông chính",
          "địa điểm đặt văn phòng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_34",
        "word": "opt-in",
        "level": "B1",
        "ipa": "/ɒpt ɪn/",
        "type": "noun / verb",
        "meaningVi": "đồng ý nhận thông tin tiếp thị",
        "collocations": "double opt-in, opt-in subscriber list, opt-in rate",
        "example": "Using a double opt-in confirmation protects our email sender reputation from spam complaints.",
        "optionsVi": [
          "đồng ý nhận thông tin tiếp thị",
          "từ chối nhận tin nhắn",
          "đổi mật khẩu đăng nhập",
          "xóa tài khoản cá nhân"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_perf_35",
        "word": "unsubscribe rate",
        "level": "B2",
        "ipa": "/ˌʌn.səbˈskraɪb reɪt/",
        "type": "noun",
        "meaningVi": "tỷ lệ hủy đăng ký nhận bản tin",
        "collocations": "low unsubscribe rate, monitor unsubscribe rate, spike in unsubscribe rate",
        "example": "If your unsubscribe rate exceeds 0.5%, your email content is likely irrelevant or sent too frequently.",
        "optionsVi": [
          "tỷ lệ hủy đăng ký nhận bản tin",
          "tỷ lệ thanh toán đúng hạn",
          "số lượng đánh giá tích cực",
          "tỷ lệ hoàn trả tiền hàng"
        ],
        "exampleVi": ""
      }
    ]
  },
  {
    "groupId": "marketing_brand_content",
    "name": "Chiến lược Thương hiệu & Tiếp thị Nội dung (Brand & Content)",
    "description": "35 thuật ngữ B1-B2 về định vị thương hiệu, USP, Buyer Persona, nghệ thuật Storytelling và PR truyền thông",
    "level": "B1-B2",
    "icon": "📢",
    "badge": "Brand / Content",
    "category": "marketing",
    "words": [
      {
        "id": "mkt_brand_01",
        "word": "brand equity",
        "level": "B2",
        "ipa": "/brænd ˈek.wɪ.ti/",
        "type": "noun",
        "meaningVi": "tài sản và giá trị thương hiệu",
        "collocations": "build brand equity, strong brand equity, measure brand equity",
        "example": "Apple commands premium prices across its product lineup largely due to immense brand equity.",
        "optionsVi": [
          "tài sản và giá trị thương hiệu",
          "vốn điều lệ công ty",
          "giá trị cổ phiếu lưu hành",
          "bản quyền tác giả phần mềm"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_02",
        "word": "brand identity",
        "level": "B1",
        "ipa": "/brænd aɪˈden.tɪ.ti/",
        "type": "noun",
        "meaningVi": "bộ nhận diện thương hiệu",
        "collocations": "consistent brand identity, visual brand identity, establish brand identity",
        "example": "The design studio revamped our brand identity with a modern color palette, minimalist logo, and clean typography.",
        "optionsVi": [
          "bộ nhận diện thương hiệu",
          "chứng minh nhân dân giám đốc",
          "giấy phép kinh doanh",
          "bằng sáng chế độc quyền"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_03",
        "word": "brand positioning",
        "level": "B2",
        "ipa": "/brænd pəˈzɪʃ.ən.ɪŋ/",
        "type": "noun",
        "meaningVi": "định vị thương hiệu trong tâm trí",
        "collocations": "clear brand positioning, strategic brand positioning, brand positioning statement",
        "example": "Tesla established distinct brand positioning as an innovative pioneer in sustainable electric luxury.",
        "optionsVi": [
          "định vị thương hiệu trong tâm trí",
          "vị trí địa lý của cửa hàng",
          "chức vụ trong ban giám đốc",
          "thứ hạng tìm kiếm website"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_04",
        "word": "unique selling proposition",
        "level": "B2",
        "ipa": "/juːˈniːk ˈsel.ɪŋ ˌprɒp.əˈzɪʃ.ən/",
        "type": "noun",
        "meaningVi": "điểm bán hàng độc nhất (USP)",
        "collocations": "define your USP, competitive unique selling proposition, compelling USP",
        "example": "Domino's Pizza rose to fame with its memorable USP: 'Fresh hot pizza delivered in 30 minutes or it's free.'",
        "optionsVi": [
          "điểm bán hàng độc nhất (USP)",
          "bảng giá sản phẩm trọn gói",
          "chính sách đổi trả hàng hóa",
          "hóa đơn giá trị gia tăng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_05",
        "word": "buyer persona",
        "level": "B1",
        "ipa": "/ˈbaɪ.ər pəˈsəʊ.nə/",
        "type": "noun",
        "meaningVi": "chân dung khách hàng mục tiêu",
        "collocations": "create buyer personas, detailed buyer persona, target buyer persona",
        "example": "Our marketing copy is tailored specifically to 'Tech-Savvy Tina', a buyer persona representing startup CTOs.",
        "optionsVi": [
          "chân dung khách hàng mục tiêu",
          "hồ sơ nhân sự công ty",
          "diễn viên đại diện thương hiệu",
          "danh sách khách hàng nợ tiền"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_06",
        "word": "tone of voice",
        "level": "B1",
        "ipa": "/təʊn əv vɔɪs/",
        "type": "noun",
        "meaningVi": "văn phong và giọng điệu thương hiệu",
        "collocations": "brand tone of voice, friendly tone of voice, consistent tone of voice",
        "example": "Mailchimp maintains a playful, empathetic tone of voice across all its user interface copy and blogs.",
        "optionsVi": [
          "văn phong và giọng điệu thương hiệu",
          "âm lượng loa thông báo",
          "giọng hát của ca sĩ",
          "âm điệu trong phòng họp"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_07",
        "word": "brand awareness",
        "level": "B1",
        "ipa": "/brænd əˈweə.nəs/",
        "type": "noun",
        "meaningVi": "mức độ nhận biết thương hiệu",
        "collocations": "increase brand awareness, brand awareness campaign, high brand awareness",
        "example": "Sponsoring international esports tournaments boosted our brand awareness among Generation Z consumers.",
        "optionsVi": [
          "mức độ nhận biết thương hiệu",
          "hiểu biết pháp luật kinh doanh",
          "trách nhiệm xã hội doanh nghiệp",
          "chứng nhận tiêu chuẩn chất lượng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_08",
        "word": "content marketing",
        "level": "B1",
        "ipa": "/ˈkɒn.tent ˈmɑː.kɪ.tɪŋ/",
        "type": "noun",
        "meaningVi": "tiếp thị nội dung mang giá trị",
        "collocations": "content marketing strategy, ROI of content marketing, content marketing agency",
        "example": "Content marketing builds trust over time by solving customer problems rather than pitching products directly.",
        "optionsVi": [
          "tiếp thị nội dung mang giá trị",
          "bán tài liệu in ấn",
          "biên tập viên xuất bản sách",
          "dịch vụ photocopy"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_09",
        "word": "thought leadership",
        "level": "B2",
        "ipa": "/θɔːt ˈliː.də.ʃɪp/",
        "type": "noun",
        "meaningVi": "dẫn dắt tư tưởng chuyên môn",
        "collocations": "establish thought leadership, thought leadership content, industry thought leadership",
        "example": "Publishing proprietary research reports positioned the consulting firm as a recognized thought leader.",
        "optionsVi": [
          "dẫn dắt tư tưởng chuyên môn",
          "lãnh đạo tinh thần tôn giáo",
          "huấn luyện kỹ năng mềm",
          "quản trị nhân sự nội bộ"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_10",
        "word": "storytelling",
        "level": "B1",
        "ipa": "/ˈstɔː.riˌtel.ɪŋ/",
        "type": "noun",
        "meaningVi": "nghệ thuật kể chuyện truyền cảm",
        "collocations": "brand storytelling, emotional storytelling, master storytelling",
        "example": "Nike ads rarely mention shoe specifications; they focus entirely on compelling human storytelling about grit and triumph.",
        "optionsVi": [
          "nghệ thuật kể chuyện truyền cảm",
          "kể chuyện cổ tích thiếu nhi",
          "viết kịch bản phim hài",
          "thuyết trình báo cáo kỹ thuật"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_11",
        "word": "user-generated content",
        "level": "B2",
        "ipa": "/ˌjuː.zər ˈdʒen.ə.reɪ.tɪd ˈkɒn.tent/",
        "type": "noun",
        "meaningVi": "nội dung do người dùng tự tạo (UGC)",
        "collocations": "leverage user-generated content, encourage UGC, UGC on Instagram",
        "example": "GoPro built its entire brand community by reposting incredible user-generated content recorded by extreme athletes.",
        "optionsVi": [
          "nội dung do người dùng tự tạo (UGC)",
          "phần mềm do kỹ sư lập trình",
          "bài viết thuê chuyên gia",
          "thông cáo nội bộ nhân viên"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_12",
        "word": "viral marketing",
        "level": "B1",
        "ipa": "/ˈvaɪə.rəl ˈmɑː.kɪ.tɪŋ/",
        "type": "noun",
        "meaningVi": "tiếp thị lan truyền nhanh chóng",
        "collocations": "viral marketing campaign, go viral, elements of viral marketing",
        "example": "The Dollar Shave Club launch video is a legendary example of low-budget, humorous viral marketing.",
        "optionsVi": [
          "tiếp thị lan truyền nhanh chóng",
          "phần mềm gián điệp độc hại",
          "chiến dịch phòng chống dịch bệnh",
          "tiếp thị truyền miệng truyền thống"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_13",
        "word": "influencer marketing",
        "level": "B1",
        "ipa": "/ˈɪn.flu.ən.sər ˈmɑː.kɪ.tɪŋ/",
        "type": "noun",
        "meaningVi": "tiếp thị qua người có ảnh hưởng",
        "collocations": "micro-influencer marketing, influencer marketing platform, sponsored influencer marketing",
        "example": "Partnering with micro-influencers in the specialty coffee niche yielded a higher engagement rate than celebrity endorsements.",
        "optionsVi": [
          "tiếp thị qua người có ảnh hưởng",
          "tuyển dụng nhân vật nổi tiếng",
          "vận động hành lang chính sách",
          "quảng cáo trên truyền hình"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_14",
        "word": "brand advocacy",
        "level": "B2",
        "ipa": "/brænd ˈæd.və.kə.si/",
        "type": "noun",
        "meaningVi": "sự ủng hộ tự nguyện cho thương hiệu",
        "collocations": "foster brand advocacy, customer brand advocacy, employee brand advocacy",
        "example": "Delighting customers turns satisfied buyers into passionate advocates who champion your brand online for free.",
        "optionsVi": [
          "sự ủng hộ tự nguyện cho thương hiệu",
          "dịch vụ tư vấn pháp luật",
          "hoạt động từ thiện công ty",
          "khiếu nại người tiêu dùng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_15",
        "word": "editorial calendar",
        "level": "B1",
        "ipa": "/ˌed.ɪˈtɔː.ri.əl ˈkæl.ən.dər/",
        "type": "noun",
        "meaningVi": "lịch biên tập và kế hoạch nội dung",
        "collocations": "maintain an editorial calendar, quarterly editorial calendar, plan content with editorial calendar",
        "example": "Our content team plans blog articles, social posts, and newsletter themes two months in advance using Notion's editorial calendar.",
        "optionsVi": [
          "lịch biên tập và kế hoạch nội dung",
          "lịch công tác của ban giám đốc",
          "lịch nghỉ lễ hàng năm",
          "thời gian biểu lớp học"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_16",
        "word": "press release",
        "level": "B1",
        "ipa": "/pres rɪˈliːs/",
        "type": "noun",
        "meaningVi": "thông cáo báo chí truyền thông",
        "collocations": "issue a press release, official press release, distribute a press release",
        "example": "The PR agency issued a formal press release announcing the company's 50-million-dollar Series B funding.",
        "optionsVi": [
          "thông cáo báo chí truyền thông",
          "hợp đồng in ấn báo giấy",
          "buổi họp báo trực tiếp",
          "bản tin nội bộ công đoàn"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_17",
        "word": "public relations",
        "level": "B1",
        "ipa": "/ˌpʌb.lɪk rɪˈleɪ.ʃənz/",
        "type": "noun",
        "meaningVi": "quan hệ công chúng (PR)",
        "collocations": "public relations campaign, corporate public relations, PR firm",
        "example": "Effective public relations manages the spread of information to shape a positive public perception of the brand.",
        "optionsVi": [
          "quan hệ công chúng (PR)",
          "quan hệ đối ngoại nhà nước",
          "tuyển dụng nhân sự",
          "chăm sóc khách hàng VIP"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_18",
        "word": "brand loyalty",
        "level": "B1",
        "ipa": "/brænd ˈlɔɪ.əl.ti/",
        "type": "noun",
        "meaningVi": "lòng trung thành với thương hiệu",
        "collocations": "build brand loyalty, customer brand loyalty, foster brand loyalty",
        "example": "Strong brand loyalty prevents customers from defecting to competitors even when cheaper alternatives emerge.",
        "optionsVi": [
          "lòng trung thành với thương hiệu",
          "nghĩa vụ của người lao động",
          "hợp đồng bảo hiểm trọn đời",
          "thỏa thuận giữ bí mật"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_19",
        "word": "brand guideline",
        "level": "B1",
        "ipa": "/brænd ˈɡaɪd.laɪn/",
        "type": "noun",
        "meaningVi": "cẩm nang quy chuẩn thương hiệu",
        "collocations": "follow brand guidelines, comprehensive brand guidelines, corporate brand guideline",
        "example": "The brand guideline specifies exact logo clearance zones, primary hex colors, and permitted font weights.",
        "optionsVi": [
          "cẩm nang quy chuẩn thương hiệu",
          "luật cạnh tranh thương mại",
          "hướng dẫn bảo vệ môi trường",
          "nội quy lao động cơ quan"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_20",
        "word": "brand narrative",
        "level": "B2",
        "ipa": "/brænd ˈnær.ə.tɪv/",
        "type": "noun",
        "meaningVi": "câu chuyện xuyên suốt thương hiệu",
        "collocations": "craft a brand narrative, authentic brand narrative, core brand narrative",
        "example": "Airbnb’s brand narrative revolves around the universal desire to 'Belong Anywhere'.",
        "optionsVi": [
          "câu chuyện xuyên suốt thương hiệu",
          "kịch bản phim tài liệu",
          "tiểu thuyết tự truyện",
          "lời dẫn chương trình sự kiện"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_21",
        "word": "content syndication",
        "level": "B2",
        "ipa": "/ˈkɒn.tent ˌsɪn.dɪˈkeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "tái phân phối nội dung qua đối tác",
        "collocations": "content syndication partner, B2B content syndication, content syndication network",
        "example": "Content syndication on Medium and TechCrunch helped amplify our white paper to an audience of half a million tech leaders.",
        "optionsVi": [
          "tái phân phối nội dung qua đối tác",
          "sao chép tài liệu trái phép",
          "mua bản quyền sách dịch",
          "in ấn tạp chí định kỳ"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_22",
        "word": "evergreen content",
        "level": "B2",
        "ipa": "/ˈev.ə.ɡriːn ˈkɒn.tent/",
        "type": "noun",
        "meaningVi": "nội dung có giá trị lâu dài",
        "collocations": "create evergreen content, evergreen content strategy, evergreen blog posts",
        "example": "How-to guides and fundamental tutorials represent evergreen content that continuously drives organic search traffic for years.",
        "optionsVi": [
          "nội dung có giá trị lâu dài",
          "bài viết về môi trường xanh",
          "tin tức thời sự nóng hổi",
          "quảng cáo theo mùa lễ hội"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_23",
        "word": "infographic",
        "level": "B1",
        "ipa": "/ˈɪn.fəʊˌɡræf.ɪk/",
        "type": "noun",
        "meaningVi": "đồ họa thông tin trực quan",
        "collocations": "design an infographic, viral infographic, informative infographic",
        "example": "Readers shared the visual cybersecurity infographic over 10,000 times on social platforms.",
        "optionsVi": [
          "đồ họa thông tin trực quan",
          "bản vẽ kỹ thuật kiến trúc",
          "bản đồ địa lý vệ tinh",
          "ảnh chụp phong cảnh nghệ thuật"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_24",
        "word": "case study",
        "level": "B1",
        "ipa": "/keɪs ˈstʌd.i/",
        "type": "noun",
        "meaningVi": "nghiên cứu tình huống thực tế",
        "collocations": "client case study, publish a case study, compelling B2B case study",
        "example": "The marketing case study highlighted how a fintech startup achieved 300% user growth within six months using our platform.",
        "optionsVi": [
          "nghiên cứu tình huống thực tế",
          "bài kiểm tra học kỳ",
          "bản án tòa án kinh tế",
          "đề tài luận văn tốt nghiệp"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_25",
        "word": "white paper",
        "level": "B2",
        "ipa": "/waɪt ˈpeɪ.pər/",
        "type": "noun",
        "meaningVi": "báo cáo kỹ thuật chuyên sâu",
        "collocations": "download the white paper, technical white paper, publish an industry white paper",
        "example": "B2B enterprise buyers often review a comprehensive white paper before scheduling a demo with sales engineers.",
        "optionsVi": [
          "báo cáo kỹ thuật chuyên sâu",
          "giấy trắng viết tay thông thường",
          "tờ rơi quảng cáo phát tờ",
          "hợp đồng bảo hiểm trắng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_26",
        "word": "rebranding",
        "level": "B2",
        "ipa": "/riːˈbræn.dɪŋ/",
        "type": "noun",
        "meaningVi": "tái cấu trúc làm mới thương hiệu",
        "collocations": "undergo a rebranding, complete rebranding effort, rebranding campaign",
        "example": "The corporate rebranding from Facebook to Meta signaled a strategic pivot toward spatial computing.",
        "optionsVi": [
          "tái cấu trúc làm mới thương hiệu",
          "đổi tên miền trang web",
          "thay đổi người đại diện pháp luật",
          "thanh lý tài sản cố định"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_27",
        "word": "brand association",
        "level": "B2",
        "ipa": "/brænd əˌsəʊ.siˈeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "liên tưởng trong tâm trí người dùng",
        "collocations": "positive brand association, build strong brand associations, brand association map",
        "example": "Volvo has successfully built an unbreakable brand association with automotive safety for over half a century.",
        "optionsVi": [
          "liên tưởng trong tâm trí người dùng",
          "hiệp hội các nhà sản xuất",
          "câu lạc bộ khách hàng thân thiết",
          "hợp tác kinh doanh liên doanh"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_28",
        "word": "co-branding",
        "level": "B2",
        "ipa": "/kəʊ ˈbræn.dɪŋ/",
        "type": "noun",
        "meaningVi": "hợp tác liên danh giữa 2 thương hiệu",
        "collocations": "co-branding partnership, successful co-branding campaign, co-branding agreement",
        "example": "The Nike and Apple Watch collaboration represents one of the most lucrative co-branding partnerships in tech history.",
        "optionsVi": [
          "hợp tác liên danh giữa 2 thương hiệu",
          "cạnh tranh không lành mạnh",
          "mua lại và sáp nhập doanh nghiệp",
          "nhượng quyền thương mại"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_29",
        "word": "brand touchpoint",
        "level": "B2",
        "ipa": "/brænd ˈtʌtʃ.pɔɪnt/",
        "type": "noun",
        "meaningVi": "điểm chạm thương hiệu với khách",
        "collocations": "every brand touchpoint, digital brand touchpoint, optimize touchpoints",
        "example": "From packaging design to customer service calls, every single brand touchpoint shapes public perception.",
        "optionsVi": [
          "điểm chạm thương hiệu với khách",
          "màn hình cảm ứng thiết bị",
          "nút bấm trên điều khiển",
          "trạm sạc xe điện công cộng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_30",
        "word": "crisis communication",
        "level": "B2",
        "ipa": "/ˈkraɪ.sɪs kəˌmjuː.nɪˈkeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "truyền thông xử lý khủng hoảng",
        "collocations": "crisis communication plan, execute crisis communication, expert in crisis communication",
        "example": "A swift and transparent crisis communication response prevented the product recall from destroying the airline's reputation.",
        "optionsVi": [
          "truyền thông xử lý khủng hoảng",
          "đường dây nóng cấp cứu",
          "hệ thống báo cháy tự động",
          "bảo hiểm rủi ro kinh doanh"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_31",
        "word": "key message",
        "level": "B1",
        "ipa": "/kiː ˈmes.ɪdʒ/",
        "type": "noun",
        "meaningVi": "thông điệp truyền thông then chốt",
        "collocations": "deliver key messages, core key message, memorable key message",
        "example": "The marketing team aligned on three key messages before launching the international campaign tour.",
        "optionsVi": [
          "thông điệp truyền thông then chốt",
          "mã khóa giải mã tin nhắn",
          "mật khẩu hộp thư điện tử",
          "chìa khóa phòng họp"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_32",
        "word": "call-out",
        "level": "B1",
        "ipa": "/kɔːl aʊt/",
        "type": "noun",
        "meaningVi": "đoạn trích điểm nhấn nổi bật",
        "collocations": "visual call-out, customer quote call-out, stat call-out",
        "example": "Use visual call-outs and stat boxes to make long-form blog articles scannable for mobile readers.",
        "optionsVi": [
          "đoạn trích điểm nhấn nổi bật",
          "cuộc gọi điện thoại ra ngoài",
          "lệnh triệu tập khẩn cấp",
          "chuông báo thức buổi sáng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_33",
        "word": "curated content",
        "level": "B2",
        "ipa": "/kjʊəˈreɪ.tɪd ˈkɒn.tent/",
        "type": "noun",
        "meaningVi": "nội dung chọn lọc từ nhiều nguồn",
        "collocations": "share curated content, curated content newsletter, high-quality curated content",
        "example": "Our weekly newsletter delivers curated content highlighting the ten best AI developments from across the web.",
        "optionsVi": [
          "nội dung chọn lọc từ nhiều nguồn",
          "tác phẩm nghệ thuật bảo tàng",
          "nội dung tự động tạo bởi bot",
          "bài viết tự sáng tác"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_34",
        "word": "brand resonance",
        "level": "B2",
        "ipa": "/brænd ˈrez.ən.əns/",
        "type": "noun",
        "meaningVi": "sự gắn kết cộng hưởng sâu sắc",
        "collocations": "achieve brand resonance, level of brand resonance, building brand resonance",
        "example": "True brand resonance occurs when customers feel a profound personal and emotional attachment to the brand.",
        "optionsVi": [
          "sự gắn kết cộng hưởng sâu sắc",
          "độ vang âm thanh trong phòng",
          "tần số sóng radio phát thanh",
          "chấn động địa chấn mặt đất"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_brand_35",
        "word": "sponsorship",
        "level": "B1",
        "ipa": "/ˈspɒn.sə.ʃɪp/",
        "type": "noun",
        "meaningVi": "tài trợ thương hiệu cho sự kiện",
        "collocations": "corporate sponsorship, sports sponsorship, secure a sponsorship deal",
        "example": "Red Bull leverages extreme sports sponsorship to establish an energetic and adventurous brand image worldwide.",
        "optionsVi": [
          "tài trợ thương hiệu cho sự kiện",
          "bảo lãnh vay vốn ngân hàng",
          "chứng nhận người giám hộ",
          "hợp đồng bảo hiểm trách nhiệm"
        ],
        "exampleVi": ""
      }
    ]
  },
  {
    "groupId": "marketing_consumer_analytics",
    "name": "Nghiên cứu Thị trường & Phân tích Khách hàng (Analytics & Insights)",
    "description": "30 thuật ngữ B1-B2 về Target Audience, phân khúc thị trường, phân tích hành vi người tiêu dùng và chỉ số NPS",
    "level": "B1-B2",
    "icon": "📊",
    "badge": "Research / Analytics",
    "category": "marketing",
    "words": [
      {
        "id": "mkt_anal_01",
        "word": "target audience",
        "level": "B1",
        "ipa": "/ˈtɑː.ɡɪt ˈɔː.di.əns/",
        "type": "noun",
        "meaningVi": "đối tượng công chúng mục tiêu",
        "collocations": "define target audience, reach target audience, tailor content to target audience",
        "example": "Understanding your target audience's daily habits is the foundation of any effective advertising strategy.",
        "optionsVi": [
          "đối tượng công chúng mục tiêu",
          "khán giả xem buổi hòa nhạc",
          "ban giám khảo chấm thi",
          "hội đồng cổ đông công ty"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_02",
        "word": "market segmentation",
        "level": "B2",
        "ipa": "/ˈmɑː.kɪt ˌseɡ.menˈteɪ.ʃən/",
        "type": "noun",
        "meaningVi": "phân khúc thị trường",
        "collocations": "geographic market segmentation, behavioral market segmentation, demographic segmentation",
        "example": "Market segmentation enables the brand to customize product messaging for different age and income brackets.",
        "optionsVi": [
          "phân khúc thị trường",
          "sự chia cắt địa lý hành chính",
          "phân tán tài sản đầu tư",
          "chia tách phòng ban nội bộ"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_03",
        "word": "demographic profiling",
        "level": "B2",
        "ipa": "/ˌdem.əˈɡræf.ɪk ˈprəʊ.faɪl.ɪŋ/",
        "type": "noun",
        "meaningVi": "hồ sơ phân tích nhân khẩu học",
        "collocations": "detailed demographic profiling, customer demographic profile, analyze demographics",
        "example": "Demographic profiling revealed that 68% of our app users are urban professionals aged 25 to 34.",
        "optionsVi": [
          "hồ sơ phân tích nhân khẩu học",
          "sổ hộ khẩu gia đình",
          "hồ sơ y tế khám sức khỏe",
          "lý lịch tư pháp cá nhân"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_04",
        "word": "customer journey",
        "level": "B1",
        "ipa": "/ˈkʌs.tə.mər ˈdʒɜː.ni/",
        "type": "noun",
        "meaningVi": "hành trình trải nghiệm của khách",
        "collocations": "map the customer journey, customer journey touchpoints, friction in customer journey",
        "example": "Mapping the customer journey helped the UX team eliminate friction points between registration and checkout.",
        "optionsVi": [
          "hành trình trải nghiệm của khách",
          "chuyến du lịch của khách hàng",
          "lộ trình giao hàng vận chuyển",
          "vé máy bay khứ hồi"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_05",
        "word": "pain point",
        "level": "B1",
        "ipa": "/peɪn pɔɪnt/",
        "type": "noun",
        "meaningVi": "nỗi đau / vấn đề khó khăn của khách",
        "collocations": "identify customer pain points, address pain points, solve a major pain point",
        "example": "Our software directly solves the pain point of spending four hours weekly on manual invoice reconciliations.",
        "optionsVi": [
          "nỗi đau / vấn đề khó khăn của khách",
          "vết thương thể chất người bệnh",
          "điểm yếu trong cấu trúc nhà",
          "điểm số thấp trong bài thi"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_06",
        "word": "Net Promoter Score",
        "level": "B2",
        "ipa": "/net prəˈməʊ.tər skɔːr/",
        "type": "noun",
        "meaningVi": "chỉ số đo lường hài lòng khách (NPS)",
        "collocations": "calculate Net Promoter Score, industry NPS benchmark, improve our NPS",
        "example": "With a Net Promoter Score of +72, the enterprise CRM product ranks in the top tier of customer satisfaction.",
        "optionsVi": [
          "chỉ số đo lường hài lòng khách (NPS)",
          "điểm số tín dụng ngân hàng",
          "điểm trung bình thi đại học",
          "thang đo động đất"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_07",
        "word": "customer retention",
        "level": "B2",
        "ipa": "/ˈkʌs.tə.mər rɪˈten.ʃən/",
        "type": "noun",
        "meaningVi": "duy trì giữ chân khách hàng",
        "collocations": "customer retention rate, retention strategy, improve customer retention",
        "example": "Acquiring a new client costs five times more than investing in customer retention programs.",
        "optionsVi": [
          "duy trì giữ chân khách hàng",
          "giữ lại tiền đặt cọc",
          "giam giữ tài sản thế chấp",
          "khóa tài khoản tạm thời"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_08",
        "word": "market penetration",
        "level": "B2",
        "ipa": "/ˈmɑː.kɪt ˌpen.ɪˈtreɪ.ʃən/",
        "type": "noun",
        "meaningVi": "mức độ thâm nhập thị trường",
        "collocations": "achieve market penetration, rapid market penetration, market penetration strategy",
        "example": "Aggressive promotional pricing allowed the delivery app to achieve deep market penetration within six months.",
        "optionsVi": [
          "mức độ thâm nhập thị trường",
          "sự xâm nhập mạng máy tính",
          "độ thấm nước của vải",
          "đào sâu công trình ngầm"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_09",
        "word": "competitive analysis",
        "level": "B1",
        "ipa": "/kəmˈpet.ɪ.tɪv əˈnæl.ə.sɪs/",
        "type": "noun",
        "meaningVi": "phân tích đối thủ cạnh tranh",
        "collocations": "conduct competitive analysis, thorough competitive analysis, competitive intelligence",
        "example": "The competitive analysis revealed a glaring gap in the market for budget-friendly project management tools.",
        "optionsVi": [
          "phân tích đối thủ cạnh tranh",
          "thi đua khen thưởng nhân viên",
          "bốc thăm chia bảng thi đấu",
          "kiểm tra chất lượng định kỳ"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_10",
        "word": "SWOT analysis",
        "level": "B1",
        "ipa": "/swɒt əˈnæl.ə.sɪs/",
        "type": "noun",
        "meaningVi": "ma trận phân tích SWOT",
        "collocations": "conduct a SWOT analysis, SWOT matrix, strategic SWOT framework",
        "example": "Before launching our flagship model, we prepared a comprehensive SWOT analysis to evaluate market threats.",
        "optionsVi": [
          "ma trận phân tích SWOT",
          "đội đặc nhiệm cảnh sát",
          "phân tích hóa học mẫu nước",
          "thử nghiệm tốc độ mạng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_11",
        "word": "focus group",
        "level": "B1",
        "ipa": "/ˈfəʊ.kəs ɡruːp/",
        "type": "noun",
        "meaningVi": "nhóm phỏng vấn thảo luận tập trung",
        "collocations": "run a focus group, consumer focus group, focus group feedback",
        "example": "Feedback gathered from our consumer focus group led to significant revisions in our new beverage packaging.",
        "optionsVi": [
          "nhóm phỏng vấn thảo luận tập trung",
          "nhóm bạn bè thân thiết",
          "nhóm chat công việc",
          "đội ngũ kỹ thuật viên"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_12",
        "word": "qualitative research",
        "level": "B2",
        "ipa": "/ˈkwɒl.ɪ.tə.tɪv rɪˈsɜːtʃ/",
        "type": "noun",
        "meaningVi": "nghiên cứu định tính về động cơ",
        "collocations": "qualitative research method, qualitative data, conduct qualitative research",
        "example": "Qualitative research such as in-depth interviews uncovered subtle psychological motivations behind luxury purchases.",
        "optionsVi": [
          "nghiên cứu định tính về động cơ",
          "đo lường khối lượng hàng",
          "nghiên cứu định lượng con số",
          "kiểm định chất lượng nước"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_13",
        "word": "quantitative research",
        "level": "B2",
        "ipa": "/ˈkwɒn.tɪ.tə.tɪv rɪˈsɜːtʃ/",
        "type": "noun",
        "meaningVi": "nghiên cứu định lượng số liệu",
        "collocations": "quantitative research findings, quantitative surveys, statistically valid quantitative research",
        "example": "Our quantitative research surveyed 5,000 respondents across five cities to validate market demand.",
        "optionsVi": [
          "nghiên cứu định lượng số liệu",
          "phỏng vấn tâm lý cá nhân",
          "nghiên cứu lịch sử phát triển",
          "đánh giá cảm quan màu sắc"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_14",
        "word": "sentiment analysis",
        "level": "B2",
        "ipa": "/ˈsen.tɪ.mənt əˈnæl.ə.sɪs/",
        "type": "noun",
        "meaningVi": "phân tích cảm xúc người dùng",
        "collocations": "social media sentiment analysis, positive sentiment, sentiment analysis tool",
        "example": "Using natural language processing for sentiment analysis revealed that 85% of tweets about the product launch were positive.",
        "optionsVi": [
          "phân tích cảm xúc người dùng",
          "phân tích tài chính kế toán",
          "đo nhịp tim huyết áp",
          "kiểm tra trắc nghiệm tính cách"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_15",
        "word": "consumer behavior",
        "level": "B1",
        "ipa": "/kənˈsjuː.mər bɪˈheɪ.vjər/",
        "type": "noun",
        "meaningVi": "hành vi và thói quen người tiêu dùng",
        "collocations": "shifts in consumer behavior, study consumer behavior, consumer behavior trends",
        "example": "The pandemic caused long-lasting shifts in consumer behavior toward contactless delivery and remote shopping.",
        "optionsVi": [
          "hành vi và thói quen người tiêu dùng",
          "cách cư xử nơi công cộng",
          "luật bảo vệ quyền lợi người tiêu dùng",
          "đạo đức kinh doanh thương mại"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_16",
        "word": "omnichannel",
        "level": "B2",
        "ipa": "/ˈɒm.nɪˌtʃæn.əl/",
        "type": "adjective / noun",
        "meaningVi": "tiếp thị đa kênh hợp nhất",
        "collocations": "omnichannel customer experience, omnichannel retail, seamless omnichannel strategy",
        "example": "An omnichannel approach allows customers to browse items on their smartphone and pick them up at a brick-and-mortar store.",
        "optionsVi": [
          "tiếp thị đa kênh hợp nhất",
          "kênh truyền hình cáp",
          "đường thủy nội địa",
          "bán hàng tại một điểm duy nhất"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_17",
        "word": "market share",
        "level": "B1",
        "ipa": "/ˈmɑː.kɪt ʃeər/",
        "type": "noun",
        "meaningVi": "thị phần doanh nghiệp chiếm lĩnh",
        "collocations": "gain market share, dominant market share, market share leader",
        "example": "Through aggressive innovation, the brand captured a 28% market share in the smart wearable sector.",
        "optionsVi": [
          "thị phần doanh nghiệp chiếm lĩnh",
          "cổ phần trong công ty",
          "giá cổ phiếu niêm yết",
          "chia sẻ mặt bằng bán hàng"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_18",
        "word": "cross-selling",
        "level": "B1",
        "ipa": "/krɒs ˈsel.ɪŋ/",
        "type": "noun",
        "meaningVi": "bán chéo sản phẩm liên quan",
        "collocations": "effective cross-selling, cross-selling strategy, cross-selling opportunities",
        "example": "Amazon’s 'Customers who bought this also bought' widget is a classic example of automated cross-selling.",
        "optionsVi": [
          "bán chéo sản phẩm liên quan",
          "bán phá giá thị trường",
          "bán hàng xuyên biên giới",
          "bán đấu giá tài sản"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_19",
        "word": "upselling",
        "level": "B1",
        "ipa": "/ʌp ˈsel.ɪŋ/",
        "type": "noun",
        "meaningVi": "bán gói sản phẩm cao cấp hơn",
        "collocations": "upselling technique, encourage upselling, upselling to premium tiers",
        "example": "The hotel desk clerk mastered upselling by offering guests ocean-view suite upgrades for a modest additional fee.",
        "optionsVi": [
          "bán gói sản phẩm cao cấp hơn",
          "tăng giá hàng loạt",
          "bán tháo hàng tồn kho",
          "bán hàng đa cấp"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_20",
        "word": "product-market fit",
        "level": "B2",
        "ipa": "/ˈprɒd.ʌkt ˈmɑː.kɪt fɪt/",
        "type": "noun",
        "meaningVi": "sự phù hợp giữa sản phẩm và thị trường",
        "collocations": "achieve product-market fit, reach product-market fit, signs of product-market fit",
        "example": "Startups should avoid scaling aggressive marketing until they have validated authentic product-market fit.",
        "optionsVi": [
          "sự phù hợp giữa sản phẩm và thị trường",
          "kích thước bao bì sản phẩm",
          "hạn sử dụng của hàng hóa",
          "tiêu chuẩn vệ sinh an toàn thực phẩm"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_21",
        "word": "value proposition",
        "level": "B2",
        "ipa": "/ˈvæl.juː ˌprɒp.əˈzɪʃ.ən/",
        "type": "noun",
        "meaningVi": "tuyên bố giá trị cho khách hàng",
        "collocations": "compelling value proposition, clear value proposition, customer value proposition",
        "example": "Slack’s initial value proposition promised to make team communication simpler, more pleasant, and more productive than email.",
        "optionsVi": [
          "tuyên bố giá trị cho khách hàng",
          "đề xuất tăng vốn đầu tư",
          "báo giá chi phí sản xuất",
          "bảng định giá bất động sản"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_22",
        "word": "go-to-market strategy",
        "level": "B2",
        "ipa": "/ɡəʊ tuː ˈmɑː.kɪt ˈstræt.ə.dʒi/",
        "type": "noun",
        "meaningVi": "chiến lược tung sản phẩm ra thị trường",
        "collocations": "comprehensive go-to-market strategy, B2B GTM strategy, execute GTM plan",
        "example": "Our go-to-market strategy outlines our target segments, direct sales channels, and promotional pricing structure.",
        "optionsVi": [
          "chiến lược tung sản phẩm ra thị trường",
          "đường đi đến chợ đầu mối",
          "kế hoạch mua sắm siêu thị",
          "hướng dẫn xuất khẩu hàng hóa"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_23",
        "word": "growth hacking",
        "level": "B2",
        "ipa": "/ɡrəʊθ ˈhæk.ɪŋ/",
        "type": "noun",
        "meaningVi": "chiến thuật tăng trưởng chi phí thấp",
        "collocations": "growth hacking experiment, viral growth hacking, growth hacking mindset",
        "example": "Dropbox used a famous growth hacking mechanism offering 500MB of free bonus storage for every friend referred.",
        "optionsVi": [
          "chiến thuật tăng trưởng chi phí thấp",
          "hành vi xâm nhập đánh cắp dữ liệu",
          "kỹ thuật trồng cây nhanh lớn",
          "chương trình bẻ khóa phần mềm"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_24",
        "word": "conversion rate optimization",
        "level": "B2",
        "ipa": "/kənˈvɜː.ʒən reɪt ˌɒp.tɪ.maɪˈzeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "tối ưu hóa tỷ lệ chuyển đổi",
        "collocations": "CRO agency, conversion rate optimization process, implement CRO",
        "example": "Investing in conversion rate optimization doubles your revenue from existing web traffic without spending more on ads.",
        "optionsVi": [
          "tối ưu hóa tỷ lệ chuyển đổi",
          "chuyển đổi ngoại tệ ngân hàng",
          "thay đổi định dạng tệp tin",
          "nâng cấp hệ điều hành"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_25",
        "word": "cohort analysis",
        "level": "B2",
        "ipa": "/ˈkəʊ.hɔːt əˈnæl.ə.sɪs/",
        "type": "noun",
        "meaningVi": "phân tích nhóm người dùng theo thời gian",
        "collocations": "monthly cohort analysis, cohort retention, conduct cohort analysis",
        "example": "A cohort analysis showed that users acquired during the June campaign maintained a 40% higher retention rate than January signups.",
        "optionsVi": [
          "phân tích nhóm người dùng theo thời gian",
          "báo cáo tài chính quý",
          "điểm danh lớp học",
          "dự báo thời tiết dài hạn"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_26",
        "word": "customer lifetime",
        "level": "B1",
        "ipa": "/ˈkʌs.tə.mər ˈlaɪf.taɪm/",
        "type": "noun",
        "meaningVi": "thời gian đồng hành của khách hàng",
        "collocations": "average customer lifetime, extend customer lifetime, customer lifetime stages",
        "example": "Providing proactive onboarding support extends the average customer lifetime by over eight months.",
        "optionsVi": [
          "thời gian đồng hành của khách hàng",
          "tuổi thọ con người trung bình",
          "thời hạn hợp đồng lao động",
          "thời gian sử dụng pin"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_27",
        "word": "market saturation",
        "level": "B2",
        "ipa": "/ˈmɑː.kɪt ˌsætʃ.ərˈeɪ.ʃən/",
        "type": "noun",
        "meaningVi": "sự bão hòa của thị trường",
        "collocations": "reach market saturation, signs of market saturation, overcome market saturation",
        "example": "Facing market saturation in domestic cities, the ridesharing company expanded aggressively into Southeast Asia.",
        "optionsVi": [
          "sự bão hòa của thị trường",
          "nước ngập úng mùa mưa",
          "độ ẩm không khí cao",
          "thị trường chứng khoán giảm sâu"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_28",
        "word": "heatmap",
        "level": "B1",
        "ipa": "/ˈhiːt.mæp/",
        "type": "noun",
        "meaningVi": "bản đồ nhiệt theo dõi thao tác người dùng",
        "collocations": "website heatmap, analyze user heatmap, click heatmap",
        "example": "The Hotjar heatmap showed that 80% of clicks congregated on the top-right pricing button.",
        "optionsVi": [
          "bản đồ nhiệt theo dõi thao tác người dùng",
          "bản đồ dự báo nhiệt độ thời tiết",
          "sơ đồ hệ thống lò sưởi",
          "đo nhiệt độ cơ thể"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_29",
        "word": "customer advocacy",
        "level": "B2",
        "ipa": "/ˈkʌs.tə.mər ˈæd.və.kə.si/",
        "type": "noun",
        "meaningVi": "sự ủng hộ giới thiệu của khách",
        "collocations": "customer advocacy program, driving customer advocacy, turn loyalty into advocacy",
        "example": "Strong customer advocacy generates the highest-converting organic leads through word-of-mouth recommendations.",
        "optionsVi": [
          "sự ủng hộ giới thiệu của khách",
          "luật sư bảo vệ thân chủ",
          "chương trình từ thiện xã hội",
          "giải quyết tranh chấp thương mại"
        ],
        "exampleVi": ""
      },
      {
        "id": "mkt_anal_30",
        "word": "benchmark comparison",
        "level": "B2",
        "ipa": "/ˈbentʃ.mɑːk kəmˈpær.ɪ.sən/",
        "type": "noun",
        "meaningVi": "so sánh đối chuẩn với chỉ số ngành",
        "collocations": "industry benchmark comparison, benchmark your metrics, competitive benchmark",
        "example": "Our 4.2% email CTR looks impressive when compared against the SaaS industry benchmark comparison of 2.1%.",
        "optionsVi": [
          "so sánh đối chuẩn với chỉ số ngành",
          "so sánh chiều cao cân nặng",
          "kiểm tra đồng hồ đo điện",
          "đối chiếu sổ sách kế toán"
        ],
        "exampleVi": ""
      }
    ]
  }
];
