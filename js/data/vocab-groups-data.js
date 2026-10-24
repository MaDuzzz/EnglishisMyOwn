// Kho nhóm từ vựng chuẩn hoá phân cấp A1 -> B2
// TỰ ĐỘNG TẠO BỞI build-vocab.mjs - KHÔNG SỬA TRỰC TIẾP FILE NÀY
// Để thêm từ mới, hãy tạo file .json hoặc .js mới trong thư mục: data/vocab/
// Tổng cộng: 40 nhóm chủ đề, 1450 từ vựng và cụm từ.
// Phân bố chủ đề: {"daily":240,"work":180,"tech":180,"marketing":100,"toeic":350,"pos":400}
// Phân bố trình độ: {"A2":216,"B1":591,"A1":57,"B2":586}

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
  },
  {
    "groupId": "toeic_contracts",
    "name": "Hợp Đồng & Đàm Phán Thương Mại",
    "icon": "📝",
    "category": "toeic",
    "level": "B2",
    "description": "Điều khoản, thương lượng, ký kết hợp đồng, cam kết nghĩa vụ và giải quyết tranh chấp kinh doanh.",
    "words": [
      {
        "id": "toeic_001",
        "word": "negotiate",
        "level": "B1",
        "type": "verb",
        "ipa": "/nəˈɡoʊ.ʃi.eɪt/",
        "meaningVi": "đàm phán, thương lượng",
        "collocations": "negotiate a contract, successfully negotiate, negotiate terms",
        "example": "The procurement team managed to negotiate a 15% discount with the supplier.",
        "exampleVi": "Đội ngũ thu mua đã thương lượng thành công mức chiết khấu 15% với nhà cung ứng.",
        "optionsVi": [
          "đàm phán, thương lượng",
          "hủy bỏ thỏa thuận",
          "áp đặt điều kiện",
          "trì hoãn thanh toán"
        ]
      },
      {
        "id": "toeic_002",
        "word": "binding agreement",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈbaɪn.dɪŋ əˈɡriː.mənt/",
        "meaningVi": "thỏa thuận có tính ràng buộc pháp lý",
        "collocations": "enter into a binding agreement, legally binding agreement, sign a binding agreement",
        "example": "Once signed by both CEOs, the memorandum becomes a legally binding agreement.",
        "exampleVi": "Khi được hai CEO ký kết, bản ghi nhớ sẽ trở thành thỏa thuận ràng buộc về mặt pháp lý.",
        "optionsVi": [
          "thỏa thuận có tính ràng buộc pháp lý",
          "bản ghi nhớ không chính thức",
          "thỏa thuận miệng tạm thời",
          "hợp đồng đã hết hạn sử dụng"
        ]
      },
      {
        "id": "toeic_003",
        "word": "stipulate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈstɪp.jə.leɪt/",
        "meaningVi": "quy định, đặt điều kiện rõ ràng",
        "collocations": "clearly stipulate, stipulate in the clause, as stipulated by law",
        "example": "The contract stipulates that all invoices must be paid within 30 days.",
        "exampleVi": "Hợp đồng quy định rõ rằng mọi hóa đơn phải được thanh toán trong vòng 30 ngày.",
        "optionsVi": [
          "quy định, đặt điều kiện rõ ràng",
          "bỏ qua các chi tiết nhỏ",
          "xin ý kiến hội đồng",
          "phủ nhận trách nhiệm"
        ]
      },
      {
        "id": "toeic_004",
        "word": "clause",
        "level": "B1",
        "type": "noun",
        "ipa": "/klɔːz/",
        "meaningVi": "điều khoản hợp đồng",
        "collocations": "confidentiality clause, penalty clause, insert a clause",
        "example": "Our legal department recommended adding an indemnity clause to the draft.",
        "exampleVi": "Phòng pháp chế khuyến nghị bổ sung một điều khoản bồi thường vào bản dự thảo.",
        "optionsVi": [
          "điều khoản hợp đồng",
          "chữ ký của các bên",
          "khoản phụ phí phát sinh",
          "thông báo đình chỉ công việc"
        ]
      },
      {
        "id": "toeic_005",
        "word": "breach of contract",
        "level": "B2",
        "type": "collocation",
        "ipa": "/briːtʃ əv ˈkɑːn.trækt/",
        "meaningVi": "vi phạm hợp đồng",
        "collocations": "commit a breach of contract, sue for breach of contract, material breach of contract",
        "example": "Failing to deliver the machinery on schedule constitutes a material breach of contract.",
        "exampleVi": "Không giao máy móc đúng lịch trình được xem là hành vi vi phạm hợp đồng nghiêm trọng.",
        "optionsVi": [
          "vi phạm hợp đồng",
          "gia hạn thời hạn hợp đồng",
          "thanh lý xong hợp đồng",
          "chuyển nhượng quyền thực hiện"
        ]
      },
      {
        "id": "toeic_006",
        "word": "obligate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈɑː.blə.ɡeɪt/",
        "meaningVi": "bắt buộc, cam kết nghĩa vụ",
        "collocations": "be legally obligated, obligate the contractor, fulfill obligated duties",
        "example": "The vendor is obligated to provide technical support for twenty-four months.",
        "exampleVi": "Nhà cung cấp có nghĩa vụ phải cung cấp dịch vụ hỗ trợ kỹ thuật trong suốt 24 tháng.",
        "optionsVi": [
          "bắt buộc, cam kết nghĩa vụ",
          "tùy nghi quyết định",
          "được miễn trừ trách nhiệm",
          "từ chối cung cấp dịch vụ"
        ]
      },
      {
        "id": "toeic_007",
        "word": "null and void",
        "level": "B2",
        "type": "collocation",
        "ipa": "/nʌl ænd vɔɪd/",
        "meaningVi": "vô hiệu lực, không có giá trị pháp lý",
        "collocations": "declare null and void, rendered null and void, become null and void",
        "example": "If the tenant alters the structure without written consent, the lease is rendered null and void.",
        "exampleVi": "Nếu bên thuê thay đổi kết cấu công trình mà không có văn bản đồng ý, hợp đồng thuê sẽ bị vô hiệu lực.",
        "optionsVi": [
          "vô hiệu lực, không có giá trị pháp lý",
          "đang có hiệu lực thi hành",
          "tạm hoãn để kiểm tra",
          "đã được công chứng hợp pháp"
        ]
      },
      {
        "id": "toeic_008",
        "word": "party",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈpɑːr.t̬i/",
        "meaningVi": "bên tham gia (hợp đồng)",
        "collocations": "both parties, third party, contracting parties",
        "example": "Both parties must sign at the bottom of each page to validate the agreement.",
        "exampleVi": "Cả hai bên tham gia phải ký ở cuối mỗi trang để xác thực thỏa thuận.",
        "optionsVi": [
          "bên tham gia (hợp đồng)",
          "bữa tiệc chúc mừng",
          "nhân chứng trung lập",
          "cơ quan giám sát thi hành"
        ]
      },
      {
        "id": "toeic_009",
        "word": "terms and conditions",
        "level": "B1",
        "type": "collocation",
        "ipa": "/tɜːrmz ænd kənˈdɪʃ.ənz/",
        "meaningVi": "các điều khoản và điều kiện",
        "collocations": "agree to terms and conditions, review terms and conditions, outline terms and conditions",
        "example": "Please carefully review the warranty terms and conditions before signing the receipt.",
        "exampleVi": "Vui lòng xem xét kỹ các điều khoản và điều kiện bảo hành trước khi ký biên nhận.",
        "optionsVi": [
          "các điều khoản và điều kiện",
          "danh mục sản phẩm bán lẻ",
          "kế hoạch chi trả cổ tức",
          "bảng báo giá sơ bộ"
        ]
      },
      {
        "id": "toeic_010",
        "word": "terminate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈtɜːr.mə.neɪt/",
        "meaningVi": "chấm dứt, hủy bỏ hợp đồng",
        "collocations": "terminate an agreement, terminate employment, right to terminate",
        "example": "Either party reserves the right to terminate the partnership with thirty days of notice.",
        "exampleVi": "Mỗi bên bảo lưu quyền chấm dứt quan hệ đối tác với thông báo trước 30 ngày.",
        "optionsVi": [
          "chấm dứt, hủy bỏ hợp đồng",
          "tái khởi động đàm phán",
          "chấp thuận vô điều kiện",
          "chuyển giao công nghệ"
        ]
      },
      {
        "id": "toeic_011",
        "word": "provision",
        "level": "B2",
        "type": "noun",
        "ipa": "/prəˈvɪʒ.ən/",
        "meaningVi": "điều khoản quy định trong văn bản",
        "collocations": "statutory provision, make provision for, under the provisions of",
        "example": "Under the provisions of Article 4, the distributor has exclusive rights in the region.",
        "exampleVi": "Theo các điều khoản quy định tại Điều 4, nhà phân phối nắm giữ quyền độc quyền tại khu vực.",
        "optionsVi": [
          "điều khoản quy định trong văn bản",
          "khoản chi viện trợ",
          "vật tư tiêu hao",
          "thông báo đình công"
        ]
      },
      {
        "id": "toeic_012",
        "word": "settlement",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈset̬.əl.mənt/",
        "meaningVi": "sự dàn xếp, thỏa thuận hòa giải",
        "collocations": "reach an out-of-court settlement, amicable settlement, financial settlement",
        "example": "The two competing corporations reached an amicable settlement to avoid costly litigation.",
        "exampleVi": "Hai tập đoàn đối thủ đã đạt được thỏa thuận hòa giải êm thấm nhằm tránh kiện tụng tốn kém.",
        "optionsVi": [
          "sự dàn xếp, thỏa thuận hòa giải",
          "sự bất đồng quan điểm",
          "quyết định mở rộng chi nhánh",
          "đơn kháng cáo lên tòa án"
        ]
      },
      {
        "id": "toeic_013",
        "word": "amendment",
        "level": "B2",
        "type": "noun",
        "ipa": "/əˈmend.mənt/",
        "meaningVi": "điều khoản sửa đổi, bổ sung",
        "collocations": "propose an amendment, contract amendment, ratify an amendment",
        "example": "The board drafted an amendment to include eco-friendly packaging standards.",
        "exampleVi": "Hội đồng quản trị đã soạn thảo một điều khoản bổ sung để đưa vào các tiêu chuẩn bao bì thân thiện môi trường.",
        "optionsVi": [
          "điều khoản sửa đổi, bổ sung",
          "biên bản thanh lý tài sản",
          "quyết định bãi nhiệm giám đốc",
          "hóa đơn thanh toán định kỳ"
        ]
      },
      {
        "id": "toeic_014",
        "word": "counteroffer",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈkaʊn.t̬ɚˌɑː.fɚ/",
        "meaningVi": "đề nghị đối ứng, đề xuất giá ngược lại",
        "collocations": "make a counteroffer, reject a counteroffer, consider a counteroffer",
        "example": "The seller declined our initial bid and submitted a counteroffer of $450,000.",
        "exampleVi": "Bên bán đã từ chối mức chào giá ban đầu của chúng tôi và đưa ra đề xuất giá đối ứng là 450.000 USD.",
        "optionsVi": [
          "đề nghị đối ứng, đề xuất giá ngược lại",
          "hợp đồng bảo hiểm trọn gói",
          "chấp thuận mức giá ban đầu",
          "thông báo hủy giao dịch"
        ]
      },
      {
        "id": "toeic_015",
        "word": "preliminary",
        "level": "B2",
        "type": "adjective",
        "ipa": "/prɪˈlɪm.ə.ner.i/",
        "meaningVi": "sơ bộ, bước đầu",
        "collocations": "preliminary discussion, preliminary findings, preliminary approval",
        "example": "After preliminary discussions, both firms agreed to conduct a detailed financial audit.",
        "exampleVi": "Sau các cuộc thảo luận sơ bộ, cả hai công ty đã đồng ý tiến hành kiểm toán tài chính chi tiết.",
        "optionsVi": [
          "sơ bộ, bước đầu",
          "kết luận cuối cùng",
          "chi tiết và toàn diện",
          "đã được chính thức phê duyệt"
        ]
      },
      {
        "id": "toeic_016",
        "word": "concession",
        "level": "B2",
        "type": "noun",
        "ipa": "/kənˈseʃ.ən/",
        "meaningVi": "sự nhượng bộ trong đàm phán",
        "collocations": "make a concession, win concessions, mutual concessions",
        "example": "To close the deal before quarter-end, our team made a concession on delivery timelines.",
        "exampleVi": "Để chốt thương vụ trước cuối quý, đội ngũ chúng tôi đã nhượng bộ về thời hạn giao hàng.",
        "optionsVi": [
          "sự nhượng bộ trong đàm phán",
          "lời cảnh cáo vi phạm",
          "khoản tiền hoa hồng",
          "sự từ chối dứt khoát"
        ]
      },
      {
        "id": "toeic_017",
        "word": "arbitration",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌɑːr.bəˈtreɪ.ʃən/",
        "meaningVi": "sự phân xử của trọng tài thương mại",
        "collocations": "submit to arbitration, commercial arbitration, binding arbitration",
        "example": "Any unresolved trade disputes shall be submitted to the international arbitration court.",
        "exampleVi": "Mọi tranh chấp thương mại chưa giải quyết sẽ được đưa ra tòa án trọng tài quốc tế.",
        "optionsVi": [
          "sự phân xử của trọng tài thương mại",
          "sự hòa giải nội bộ",
          "cuộc họp cổ đông thường niên",
          "thủ tục giải thể doanh nghiệp"
        ]
      },
      {
        "id": "toeic_018",
        "word": "compensate",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈkɑːm.pən.seɪt/",
        "meaningVi": "bồi thường, đền bù",
        "collocations": "compensate for losses, adequately compensate, compensate employees",
        "example": "The airline compensated passengers for the extensive flight delay with meal vouchers.",
        "exampleVi": "Hãng hàng không đã bồi thường cho hành khách bị trễ chuyến bay kéo dài bằng các phiếu ăn uống.",
        "optionsVi": [
          "bồi thường, đền bù",
          "tước đoạt quyền lợi",
          "khiếu nại bồi thường",
          "phạt tiền vi phạm"
        ]
      },
      {
        "id": "toeic_019",
        "word": "renew",
        "level": "B1",
        "type": "verb",
        "ipa": "/rɪˈnuː/",
        "meaningVi": "gia hạn hợp đồng, làm mới",
        "collocations": "renew a contract, renew a subscription, automatically renew",
        "example": "We decided not to renew the software license because of poor customer service.",
        "exampleVi": "Chúng tôi đã quyết định không gia hạn bản quyền phần mềm do dịch vụ chăm sóc khách hàng kém.",
        "optionsVi": [
          "gia hạn hợp đồng, làm mới",
          "hủy ngang hợp đồng",
          "đơn phương chấm dứt",
          "tăng gấp đôi thời hạn"
        ]
      },
      {
        "id": "toeic_020",
        "word": "enforce",
        "level": "B2",
        "type": "verb",
        "ipa": "/ɪnˈfɔːrs/",
        "meaningVi": "thực thi, bắt buộc chấp hành",
        "collocations": "enforce regulations, enforce compliance, strictly enforce",
        "example": "Management will strictly enforce the new workplace safety standards starting next Monday.",
        "exampleVi": "Ban quản lý sẽ thực thi nghiêm ngặt các tiêu chuẩn an toàn lao động mới bắt đầu từ thứ Hai tới.",
        "optionsVi": [
          "thực thi, bắt buộc chấp hành",
          "bỏ qua quy định",
          "sửa đổi quy chuẩn",
          "tạm ngừng áp dụng"
        ]
      },
      {
        "id": "toeic_021",
        "word": "non-disclosure agreement",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌnɑːn.dɪˈskloʊ.ʒɚ əˈɡriː.mənt/",
        "meaningVi": "thỏa thuận bảo mật thông tin (NDA)",
        "collocations": "sign an NDA, mutual non-disclosure agreement, breach an NDA",
        "example": "Before reviewing the technical blueprints, all contractors must sign a non-disclosure agreement.",
        "exampleVi": "Trước khi xem bản vẽ kỹ thuật, tất cả nhà thầu phải ký thỏa thuận bảo mật thông tin.",
        "optionsVi": [
          "thỏa thuận bảo mật thông tin (NDA)",
          "hợp đồng mua bán độc quyền",
          "giấy phép khai thác sáng chế",
          "biên bản bàn giao mặt bằng"
        ]
      },
      {
        "id": "toeic_022",
        "word": "indemnify",
        "level": "B2",
        "type": "verb",
        "ipa": "/ɪnˈdem.nə.faɪ/",
        "meaningVi": "bảo đảm bồi thường thiệt hại",
        "collocations": "indemnify against loss, agree to indemnify, indemnify the client",
        "example": "The manufacturer agreed to indemnify the retailer against any intellectual property claims.",
        "exampleVi": "Nhà sản xuất đồng ý bảo đảm bồi thường cho nhà bán lẻ nếu có bất kỳ khiếu nại nào về quyền sở hữu trí tuệ.",
        "optionsVi": [
          "bảo đảm bồi thường thiệt hại",
          "tuyên bố phá sản",
          "trục xuất khỏi thị trường",
          "kiểm tra tài chính độc lập"
        ]
      },
      {
        "id": "toeic_023",
        "word": "waive",
        "level": "B2",
        "type": "verb",
        "ipa": "/weɪv/",
        "meaningVi": "từ bỏ quyền lợi, miễn trừ phí",
        "collocations": "waive the fee, waive rights, waive the penalty",
        "example": "The landlord agreed to waive the late fee as a courtesy for a long-time tenant.",
        "exampleVi": "Chủ nhà đã đồng ý miễn trừ khoản phí trễ hạn như một sự ưu đãi cho khách thuê lâu năm.",
        "optionsVi": [
          "từ bỏ quyền lợi, miễn trừ phí",
          "yêu cầu thanh toán ngay",
          "tăng gấp đôi mức phạt",
          "áp dụng mức lãi suất cao"
        ]
      },
      {
        "id": "toeic_024",
        "word": "default",
        "level": "B2",
        "type": "verb",
        "ipa": "/dɪˈfɑːlt/",
        "meaningVi": "vỡ nợ, không thực hiện đúng nghĩa vụ thanh toán",
        "collocations": "default on a loan, default on payment, in default of",
        "example": "If the borrower defaults on the payment, the lender has the right to seize the collateral.",
        "exampleVi": "Nếu người vay vỡ nợ không trả đúng hạn, bên cho vay có quyền tịch thu tài sản thế chấp.",
        "optionsVi": [
          "vỡ nợ, không thực hiện đúng nghĩa vụ thanh toán",
          "tất toán toàn bộ khoản vay",
          "nhận thêm vốn tài trợ",
          "đầu tư có lãi lớn"
        ]
      },
      {
        "id": "toeic_025",
        "word": "finalize",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈfaɪ.nəl.aɪz/",
        "meaningVi": "chốt lại, hoàn tất hợp đồng",
        "collocations": "finalize the details, finalize a deal, finalize the contract",
        "example": "The two executive teams met yesterday to finalize the terms of the merger.",
        "exampleVi": "Hai ban điều hành đã gặp gỡ ngày hôm qua để hoàn tất các điều khoản của thương vụ sáp nhập.",
        "optionsVi": [
          "chốt lại, hoàn tất hợp đồng",
          "khởi xướng đàm phán",
          "hủy bỏ thỏa thuận",
          "chuyển giao công việc"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_finance",
    "name": "Tài Chính, Kế Toán & Thuế Doanh Nghiệp",
    "icon": "📊",
    "category": "toeic",
    "level": "B2",
    "description": "Báo cáo tài chính, kiểm toán, ngân sách, cổ tức, tài sản nợ có và quản lý dòng tiền.",
    "words": [
      {
        "id": "toeic_026",
        "word": "audit",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈɑː.dɪt/",
        "meaningVi": "kiểm toán, sự kiểm tra sổ sách kế toán",
        "collocations": "conduct an audit, internal audit, annual financial audit",
        "example": "An external firm was hired to conduct an independent financial audit.",
        "exampleVi": "Một công ty bên ngoài đã được thuê để tiến hành kiểm toán tài chính độc lập.",
        "optionsVi": [
          "kiểm toán, sự kiểm tra sổ sách kế toán",
          "kế hoạch giải ngân vốn",
          "bảng lương nhân viên",
          "báo cáo nghiên cứu thị trường"
        ]
      },
      {
        "id": "toeic_027",
        "word": "budget deficit",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈbʌdʒ.ɪt ˈdef.ə.sɪt/",
        "meaningVi": "thâm hụt ngân sách",
        "collocations": "face a budget deficit, reduce the budget deficit, record budget deficit",
        "example": "Due to unexpected equipment repairs, the branch faces a significant budget deficit this quarter.",
        "exampleVi": "Do các chi phí sửa chữa máy móc ngoài dự kiến, chi nhánh đang đối mặt với mức thâm hụt ngân sách lớn trong quý này.",
        "optionsVi": [
          "thâm hụt ngân sách",
          "thặng dư ngân sách",
          "phân bổ vốn đầu tư",
          "hạn mức tín dụng ngân hàng"
        ]
      },
      {
        "id": "toeic_028",
        "word": "surplus",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈsɜːr.pləs/",
        "meaningVi": "khoản thặng dư, số dư thừa",
        "collocations": "trade surplus, budget surplus, operating surplus",
        "example": "The company reported a cash surplus of two million dollars at the end of the fiscal year.",
        "exampleVi": "Công ty đã báo cáo mức thặng dư tiền mặt 2 triệu USD vào cuối năm tài chính.",
        "optionsVi": [
          "khoản thặng dư, số dư thừa",
          "khoản nợ xấu khó đòi",
          "chi phí khấu hao",
          "mức tổn thất tài sản"
        ]
      },
      {
        "id": "toeic_029",
        "word": "revenue",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈrev.ə.nuː/",
        "meaningVi": "doanh thu, tổng thu nhập",
        "collocations": "generate revenue, boost revenue, annual revenue",
        "example": "Online sales accounted for more than sixty percent of the company's total revenue.",
        "exampleVi": "Doanh số bán hàng trực tuyến chiếm hơn 60% tổng doanh thu của công ty.",
        "optionsVi": [
          "doanh thu, tổng thu nhập",
          "chi phí sản xuất",
          "tiền thuế doanh nghiệp",
          "lãi suất vay ngân hàng"
        ]
      },
      {
        "id": "toeic_030",
        "word": "fiscal year",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈfɪs.kəl jɪr/",
        "meaningVi": "năm tài chính, tài khóa",
        "collocations": "current fiscal year, upcoming fiscal year, end of the fiscal year",
        "example": "Our fiscal year runs from April 1st to March 31st of the following calendar year.",
        "exampleVi": "Năm tài chính của chúng tôi tính từ ngày 1 tháng 4 đến ngày 31 tháng 3 năm dương lịch tiếp theo.",
        "optionsVi": [
          "năm tài chính, tài khóa",
          "năm nhuận theo lịch",
          "chu kỳ kiểm định thiết bị",
          "thời hạn bảo hành 12 tháng"
        ]
      },
      {
        "id": "toeic_031",
        "word": "allocate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈæl.ə.keɪt/",
        "meaningVi": "phân bổ (ngân sách, nguồn lực)",
        "collocations": "allocate funds, allocate resources, allocate budget to",
        "example": "The CFO decided to allocate additional funds to the mobile app development project.",
        "exampleVi": "Giám đốc tài chính đã quyết định phân bổ thêm kinh phí cho dự án phát triển ứng dụng di động.",
        "optionsVi": [
          "phân bổ (ngân sách, nguồn lực)",
          "cắt giảm toàn bộ chi phí",
          "đóng băng tài khoản",
          "rút vốn khỏi thị trường"
        ]
      },
      {
        "id": "toeic_032",
        "word": "asset",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈæs.et/",
        "meaningVi": "tài sản của cá nhân/doanh nghiệp",
        "collocations": "liquid assets, valuable asset, tangible assets",
        "example": "Patents and trademarks are among the corporation's most valuable intangible assets.",
        "exampleVi": "Bằng sáng chế và nhãn hiệu thương mại là những tài sản vô hình có giá trị nhất của tập đoàn.",
        "optionsVi": [
          "tài sản của cá nhân/doanh nghiệp",
          "khoản nợ phải trả",
          "chi phí vận hành",
          "tiền phạt vi phạm"
        ]
      },
      {
        "id": "toeic_033",
        "word": "liability",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌlaɪ.əˈbɪl.ə.t̬i/",
        "meaningVi": "nghĩa vụ nợ, khoản nợ phải trả",
        "collocations": "current liabilities, total liabilities, limit liability",
        "example": "The balance sheet shows that our total assets comfortably exceed our short-term liabilities.",
        "exampleVi": "Bảng cân đối kế toán cho thấy tổng tài sản của chúng ta vượt trội so với các khoản nợ ngắn hạn.",
        "optionsVi": [
          "nghĩa vụ nợ, khoản nợ phải trả",
          "lợi nhuận sau thuế",
          "khoản bảo hiểm chi trả",
          "quỹ dự phòng rủi ro"
        ]
      },
      {
        "id": "toeic_034",
        "word": "depreciation",
        "level": "B2",
        "type": "noun",
        "ipa": "/dɪˌpriː.ʃiˈeɪ.ʃən/",
        "meaningVi": "sự khấu hao tài sản",
        "collocations": "asset depreciation, rate of depreciation, straight-line depreciation",
        "example": "Accountants must factor in machinery depreciation when calculating the net operating profit.",
        "exampleVi": "Kế toán viên phải tính đến khấu hao máy móc khi tính toán lợi nhuận hoạt động ròng.",
        "optionsVi": [
          "sự khấu hao tài sản",
          "sự tăng giá trị thị trường",
          "khoản tiền thưởng cuối năm",
          "chỉ số lạm phát kinh tế"
        ]
      },
      {
        "id": "toeic_035",
        "word": "dividend",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈdɪv.ə.dend/",
        "meaningVi": "cổ tức chia cho cổ đông",
        "collocations": "pay a dividend, annual dividend, quarterly dividend payout",
        "example": "Shareholders were pleased to receive a higher dividend payout following strong sales growth.",
        "exampleVi": "Các cổ đông rất hài lòng khi nhận được mức chi trả cổ tức cao hơn sau đợt tăng trưởng doanh số mạnh mẽ.",
        "optionsVi": [
          "cổ tức chia cho cổ đông",
          "khoản thuế thu nhập cá nhân",
          "phí môi giới chứng khoán",
          "khoản vay nợ ngân hàng"
        ]
      },
      {
        "id": "toeic_036",
        "word": "expenditure",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪkˈspen.də.tʃɚ/",
        "meaningVi": "chi phí tiêu dùng, khoản chi tiêu",
        "collocations": "capital expenditure, cut expenditure, annual expenditure",
        "example": "The executive committee voted to curtail non-essential travel expenditures this year.",
        "exampleVi": "Ủy ban điều hành đã bỏ phiếu cắt giảm các khoản chi tiêu đi lại không thiết yếu trong năm nay.",
        "optionsVi": [
          "chi phí tiêu dùng, khoản chi tiêu",
          "doanh số bán hàng",
          "tiền lãi gửi tiết kiệm",
          "khoản viện trợ không hoàn lại"
        ]
      },
      {
        "id": "toeic_037",
        "word": "reimburse",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˌriː.ɪmˈbɜːrs/",
        "meaningVi": "hoàn trả chi phí, thanh toán lại tiền",
        "collocations": "reimburse travel expenses, promptly reimburse, be fully reimbursed",
        "example": "Employees will be reimbursed for parking and toll charges incurred during business trips.",
        "exampleVi": "Nhân viên sẽ được hoàn trả các chi phí gửi xe và phí cầu đường phát sinh trong các chuyến công tác.",
        "optionsVi": [
          "hoàn trả chi phí, thanh toán lại tiền",
          "khấu trừ lương nhân viên",
          "từ chối giải quyết đơn từ",
          "phạt tiền vi phạm quy chế"
        ]
      },
      {
        "id": "toeic_038",
        "word": "lucrative",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈluː.krə.t̬ɪv/",
        "meaningVi": "sinh lời cao, có lợi nhuận lớn",
        "collocations": "lucrative contract, lucrative market, prove lucrative",
        "example": "Securing the government tender turned out to be a highly lucrative opportunity for our firm.",
        "exampleVi": "Trúng thầu gói thầu chính phủ đã chứng minh là một cơ hội sinh lời rất cao cho công ty chúng tôi.",
        "optionsVi": [
          "sinh lời cao, có lợi nhuận lớn",
          "gây thua lỗ nặng nề",
          "chứa nhiều rủi ro pháp lý",
          "ít được thị trường quan tâm"
        ]
      },
      {
        "id": "toeic_039",
        "word": "quarterly earnings",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈkwɔːr.t̬ɚ.li ˈɜːr.nɪŋz/",
        "meaningVi": "thu nhập lợi nhuận hàng quý",
        "collocations": "quarterly earnings report, release quarterly earnings, exceed quarterly earnings",
        "example": "The tech giant exceeded Wall Street expectations in its latest quarterly earnings report.",
        "exampleVi": "Gã khổng lồ công nghệ đã vượt kỳ vọng của Phố Wall trong báo cáo lợi nhuận hàng quý mới nhất.",
        "optionsVi": [
          "thu nhập lợi nhuận hàng quý",
          "bản kê khai tài sản cố định",
          "khoản chi tiêu hàng tháng",
          "kế hoạch chi lương nhân viên"
        ]
      },
      {
        "id": "toeic_040",
        "word": "portfolio",
        "level": "B1",
        "type": "noun",
        "ipa": "/pɔːrtˈfoʊ.li.oʊ/",
        "meaningVi": "danh mục đầu tư tài chính",
        "collocations": "investment portfolio, diversify a portfolio, manage a portfolio",
        "example": "Financial advisors recommend maintaining a balanced portfolio of stocks and treasury bonds.",
        "exampleVi": "Các chuyên gia tư vấn tài chính khuyến nghị duy trì một danh mục đầu tư cân bằng giữa cổ phiếu và trái phiếu kho bạc.",
        "optionsVi": [
          "danh mục đầu tư tài chính",
          "hồ sơ nhân sự công ty",
          "sổ hộ chiếu công tác",
          "bản thiết kế đồ họa sản phẩm"
        ]
      },
      {
        "id": "toeic_041",
        "word": "invoice",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈɪn.vɔɪs/",
        "meaningVi": "hóa đơn thương mại yêu cầu thanh toán",
        "collocations": "issue an invoice, pay an invoice, outstanding invoice",
        "example": "Please ensure that the purchase order number is clearly printed on every invoice.",
        "exampleVi": "Vui lòng đảm bảo rằng số đơn đặt hàng được in rõ ràng trên mọi hóa đơn thanh toán.",
        "optionsVi": [
          "hóa đơn thương mại yêu cầu thanh toán",
          "biên bản họp giao ban",
          "hợp đồng bảo hiểm nhân thọ",
          "bảng đánh giá thành tích"
        ]
      },
      {
        "id": "toeic_042",
        "word": "ledger",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈledʒ.ɚ/",
        "meaningVi": "sổ cái kế toán",
        "collocations": "general ledger, enter into the ledger, balance the ledger",
        "example": "Every payment receipt must be entered into the general ledger by the close of business.",
        "exampleVi": "Mọi biên lai thu tiền phải được ghi vào sổ cái kế toán trước giờ kết thúc ngày làm việc.",
        "optionsVi": [
          "sổ cái kế toán",
          "sổ tay nhân viên mới",
          "hồ sơ khiếu nại khách hàng",
          "phiếu xuất kho hàng hóa"
        ]
      },
      {
        "id": "toeic_043",
        "word": "curb expenses",
        "level": "B2",
        "type": "collocation",
        "ipa": "/kɜːrb ɪkˈspen.sɪz/",
        "meaningVi": "kiềm chế, thắt chặt chi tiêu",
        "collocations": "curb unnecessary expenses, curb operational costs, measures to curb expenses",
        "example": "In response to declining demand, leadership adopted strict measures to curb corporate expenses.",
        "exampleVi": "Trước nhu cầu thị trường sụt giảm, ban lãnh đạo đã thông qua các biện pháp nghiêm ngặt để kiềm chế chi tiêu doanh nghiệp.",
        "optionsVi": [
          "kiềm chế, thắt chặt chi tiêu",
          "tăng gấp đôi mức chi tiêu",
          "vay nợ thêm từ ngân hàng",
          "thanh lý tài sản cố định"
        ]
      },
      {
        "id": "toeic_044",
        "word": "reconcile",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈrek.ən.saɪl/",
        "meaningVi": "đối chiếu, làm khớp số liệu sổ sách",
        "collocations": "reconcile accounts, reconcile discrepancies, reconcile bank statements",
        "example": "The senior accountant worked late to reconcile the discrepancies between the receipts and bank statements.",
        "exampleVi": "Kế toán trưởng đã làm thêm giờ muộn để đối chiếu các chênh lệch giữa biên lai và sao kê ngân hàng.",
        "optionsVi": [
          "đối chiếu, làm khớp số liệu sổ sách",
          "hủy bỏ các con số sai lệch",
          "chấp nhận sai số không chỉnh sửa",
          "chuyển tiền sang tài khoản mới"
        ]
      },
      {
        "id": "toeic_045",
        "word": "break-even point",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈbreɪkˌiː.vən pɔɪnt/",
        "meaningVi": "điểm hòa vốn",
        "collocations": "reach the break-even point, calculate break-even point, achieve break-even",
        "example": "We estimate that the new production plant will reach its break-even point within eighteen months.",
        "exampleVi": "Chúng tôi ước tính nhà máy sản xuất mới sẽ đạt điểm hòa vốn trong vòng 18 tháng.",
        "optionsVi": [
          "điểm hòa vốn",
          "thời điểm vỡ nợ phá sản",
          "mức lợi nhuận cao kỷ lục",
          "thời điểm giải ngân vốn đầu tư"
        ]
      },
      {
        "id": "toeic_046",
        "word": "liquidity",
        "level": "B2",
        "type": "noun",
        "ipa": "/lɪˈkwɪd.ə.t̬i/",
        "meaningVi": "tính thanh khoản (khả năng đổi ra tiền mặt)",
        "collocations": "high liquidity, maintain liquidity, liquidity crisis",
        "example": "Holding adequate short-term treasury bills helps the firm preserve financial liquidity.",
        "exampleVi": "Nắm giữ đủ tín phiếu kho bạc ngắn hạn giúp công ty duy trì tính thanh khoản tài chính.",
        "optionsVi": [
          "tính thanh khoản (khả năng đổi ra tiền mặt)",
          "mức độ thâm hụt nợ nần",
          "tốc độ tăng trưởng doanh thu",
          "giá trị thị trường của thương hiệu"
        ]
      },
      {
        "id": "toeic_047",
        "word": "outstanding balance",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌaʊtˈstæn.dɪŋ ˈbæl.əns/",
        "meaningVi": "số dư còn nợ chưa thanh toán",
        "collocations": "pay outstanding balance, clear outstanding balance, settle outstanding balance",
        "example": "A late penalty will be applied to your account if the outstanding balance is not settled today.",
        "exampleVi": "Khoản phí phạt chậm sẽ bị tính vào tài khoản của bạn nếu số dư nợ chưa được thanh toán trong hôm nay.",
        "optionsVi": [
          "số dư còn nợ chưa thanh toán",
          "khoản tiền gửi tiết kiệm có kỳ hạn",
          "tiền thưởng đạt chỉ tiêu tháng",
          "khoản hoàn trả thừa từ ngân hàng"
        ]
      },
      {
        "id": "toeic_048",
        "word": "yield",
        "level": "B2",
        "type": "noun",
        "ipa": "/jiːld/",
        "meaningVi": "tỷ suất sinh lời, sản lượng thu hoạch",
        "collocations": "bond yield, high yield, annual yield",
        "example": "Corporate bonds offer a higher annual yield than conventional savings accounts.",
        "exampleVi": "Trái phiếu doanh nghiệp mang lại tỷ suất sinh lời hàng năm cao hơn so với tài khoản tiết kiệm thông thường.",
        "optionsVi": [
          "tỷ suất sinh lời, sản lượng thu hoạch",
          "mức độ rủi ro tín dụng",
          "chi phí quản lý tài khoản",
          "khoản nợ xấu không thể thu hồi"
        ]
      },
      {
        "id": "toeic_049",
        "word": "exempt from tax",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ɪɡˈzempt frəm tæks/",
        "meaningVi": "được miễn thuế",
        "collocations": "tax-exempt status, exempt from income tax, fully exempt from tax",
        "example": "Donations made to the charitable foundation are completely exempt from corporate tax.",
        "exampleVi": "Các khoản quyên góp cho quỹ từ thiện được miễn hoàn toàn thuế thu nhập doanh nghiệp.",
        "optionsVi": [
          "được miễn thuế",
          "phải chịu thuế suất tối đa",
          "bị phạt do trốn thuế",
          "tạm giữ để thanh tra thuế"
        ]
      },
      {
        "id": "toeic_050",
        "word": "collateral",
        "level": "B2",
        "type": "noun",
        "ipa": "/kəˈlæt̬.ɚ.əl/",
        "meaningVi": "tài sản thế chấp cho khoản vay",
        "collocations": "pledge as collateral, secure with collateral, provide collateral",
        "example": "The commercial bank required company real estate as collateral for the multi-million-dollar loan.",
        "exampleVi": "Ngân hàng thương mại đã yêu cầu bất động sản của công ty làm tài sản thế chấp cho khoản vay hàng triệu USD.",
        "optionsVi": [
          "tài sản thế chấp cho khoản vay",
          "khoản lãi suất chi trả định kỳ",
          "hợp đồng bảo lãnh tín dụng",
          "chứng chỉ tiền gửi không kỳ hạn"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_hr",
    "name": "Tuyển Dụng, Lương Thưởng & Quản Trị Nhân Sự",
    "icon": "👥",
    "category": "toeic",
    "level": "B1",
    "description": "Hồ sơ ứng viên, phỏng vấn, chế độ đãi ngộ, đánh giá năng lực, thăng tiến và phúc lợi nhân viên.",
    "words": [
      {
        "id": "toeic_051",
        "word": "recruit",
        "level": "B1",
        "type": "verb",
        "ipa": "/rɪˈkruːt/",
        "meaningVi": "tuyển dụng nhân sự mới",
        "collocations": "recruit qualified candidates, actively recruit, recruit top talent",
        "example": "The HR department is launching a regional campaign to recruit seasoned software engineers.",
        "exampleVi": "Phòng nhân sự đang phát động một chiến dịch khu vực để tuyển dụng các kỹ sư phần mềm dày dạn kinh nghiệm.",
        "optionsVi": [
          "tuyển dụng nhân sự mới",
          "cho thôi việc hàng loạt",
          "luân chuyển vị trí công tác",
          "đào tạo nâng cao tay nghề"
        ]
      },
      {
        "id": "toeic_052",
        "word": "applicant",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈæp.lə.kənt/",
        "meaningVi": "người nộp đơn xin việc, ứng viên",
        "collocations": "successful applicant, qualified applicant, pool of applicants",
        "example": "Over two hundred applicants submitted resumes for the regional sales manager position.",
        "exampleVi": "Hơn hai trăm ứng viên đã nộp hồ sơ xin việc cho vị trí giám đốc kinh doanh khu vực.",
        "optionsVi": [
          "người nộp đơn xin việc, ứng viên",
          "người phỏng vấn nhân sự",
          "nhân viên thử việc",
          "chuyên gia tư vấn ngoài"
        ]
      },
      {
        "id": "toeic_053",
        "word": "probationary period",
        "level": "B2",
        "type": "collocation",
        "ipa": "/proʊˈbeɪ.ʃən.er.i ˈpɪr.i.əd/",
        "meaningVi": "thời gian thử việc",
        "collocations": "complete probationary period, three-month probationary period, undergo a probationary period",
        "example": "New hires receive regular performance reviews during their three-month probationary period.",
        "exampleVi": "Nhân viên mới được đánh giá hiệu suất định kỳ trong suốt thời gian thử việc 3 tháng.",
        "optionsVi": [
          "thời gian thử việc",
          "kỳ nghỉ phép hưởng lương",
          "thời hạn thông báo nghỉ việc",
          "chế độ nghỉ thai sản"
        ]
      },
      {
        "id": "toeic_054",
        "word": "remuneration",
        "level": "B2",
        "type": "noun",
        "ipa": "/rɪˌmjuː.nəˈreɪ.ʃən/",
        "meaningVi": "thù lao, tiền công và chế độ đãi ngộ",
        "collocations": "attractive remuneration package, remuneration commensurate with experience, financial remuneration",
        "example": "We offer a competitive remuneration package including health insurance and annual stock options.",
        "exampleVi": "Chúng tôi cung cấp gói thù lao cạnh tranh bao gồm bảo hiểm sức khỏe và quyền chọn mua cổ phiếu hàng năm.",
        "optionsVi": [
          "thù lao, tiền công và chế độ đãi ngộ",
          "khoản phạt vi phạm hợp đồng",
          "chi phí đào tạo nội bộ",
          "đơn khiếu nại của công đoàn"
        ]
      },
      {
        "id": "toeic_055",
        "word": "credential",
        "level": "B2",
        "type": "noun",
        "ipa": "/krəˈden.ʃəl/",
        "meaningVi": "chứng chỉ, bằng cấp năng lực",
        "collocations": "academic credentials, professional credentials, verify credentials",
        "example": "The selection committee was impressed by the candidate's strong academic credentials.",
        "exampleVi": "Hội đồng tuyển chọn rất ấn tượng với bằng cấp học thuật vững vàng của ứng viên.",
        "optionsVi": [
          "chứng chỉ, bằng cấp năng lực",
          "bản mô tả nhiệm vụ công việc",
          "thư từ chối nhận việc",
          "giấy xác nhận lương"
        ]
      },
      {
        "id": "toeic_056",
        "word": "incentive",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪnˈsen.t̬ɪv/",
        "meaningVi": "chính sách khích lệ, tiền thưởng động viên",
        "collocations": "financial incentive, performance incentive, offer an incentive",
        "example": "The firm introduced performance incentives to motivate sales representatives to reach target quotas.",
        "exampleVi": "Công ty đã đưa ra các chính sách thưởng hiệu suất nhằm khích lệ nhân viên kinh doanh đạt chỉ tiêu.",
        "optionsVi": [
          "chính sách khích lệ, tiền thưởng động viên",
          "hình thức xử lý kỷ luật",
          "quy định kiểm soát giờ làm",
          "biên bản nhắc nhở công việc"
        ]
      },
      {
        "id": "toeic_057",
        "word": "appraisal",
        "level": "B2",
        "type": "noun",
        "ipa": "/əˈpreɪ.zəl/",
        "meaningVi": "sự đánh giá năng lực, hiệu quả công tác",
        "collocations": "performance appraisal, annual appraisal, employee appraisal",
        "example": "Employees set individual development goals during their annual performance appraisal.",
        "exampleVi": "Nhân viên thiết lập các mục tiêu phát triển cá nhân trong đợt đánh giá hiệu suất hàng năm.",
        "optionsVi": [
          "sự đánh giá năng lực, hiệu quả công tác",
          "quyết định điều chuyển công tác",
          "chương trình tặng quà tri ân",
          "hội thảo hướng nghiệp"
        ]
      },
      {
        "id": "toeic_058",
        "word": "severance package",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈsev.ɚ.əns ˈpæk.ɪdʒ/",
        "meaningVi": "gói trợ cấp thôi việc",
        "collocations": "receive a severance package, generous severance package, negotiate a severance package",
        "example": "Laid-off staff members were offered a generous severance package based on years of tenure.",
        "exampleVi": "Những nhân sự bị cắt giảm đã được đề nghị một gói trợ cấp thôi việc hậu hĩnh căn cứ vào số năm cống hiến.",
        "optionsVi": [
          "gói trợ cấp thôi việc",
          "tiền thưởng lễ tết hàng năm",
          "phụ cấp công tác nước ngoài",
          "gói bảo hiểm y tế cao cấp"
        ]
      },
      {
        "id": "toeic_059",
        "word": "turnover rate",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈtɜːrnˌoʊ.vɚ reɪt/",
        "meaningVi": "tỷ lệ luân chuyển nhân sự, tỷ lệ nghỉ việc",
        "collocations": "high turnover rate, reduce employee turnover rate, staff turnover rate",
        "example": "Improving workplace ergonomics and communication helped reduce the high staff turnover rate.",
        "exampleVi": "Cải thiện môi trường làm việc và giao tiếp đã giúp giảm tỷ lệ nghỉ việc cao của nhân viên.",
        "optionsVi": [
          "tỷ lệ luân chuyển nhân sự, tỷ lệ nghỉ việc",
          "tốc độ tăng trưởng doanh thu",
          "tỷ lệ hoàn thành công việc",
          "chỉ số chấm công đúng giờ"
        ]
      },
      {
        "id": "toeic_060",
        "word": "shortlist",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈʃɔːrt.lɪst/",
        "meaningVi": "danh sách rút gọn các ứng viên sáng giá",
        "collocations": "make the shortlist, draw up a shortlist, candidate on the shortlist",
        "example": "Only five candidates made the shortlist for the final interview with the vice president.",
        "exampleVi": "Chỉ có năm ứng viên lọt vào danh sách rút gọn cho vòng phỏng vấn cuối cùng với phó chủ tịch.",
        "optionsVi": [
          "danh sách rút gọn các ứng viên sáng giá",
          "danh sách nhân viên bị kỷ luật",
          "bảng phân công công trực ban",
          "bản liệt kê các câu hỏi phỏng vấn"
        ]
      },
      {
        "id": "toeic_061",
        "word": "headhunt",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈhed.hʌnt/",
        "meaningVi": "săn đầu người, chiêu mộ nhân sự cấp cao",
        "collocations": "be headhunted for a role, headhunt from competitors, headhunt top executives",
        "example": "Our current Chief Technology Officer was headhunted from an internationally renowned rival.",
        "exampleVi": "Giám đốc công nghệ hiện tại của chúng tôi đã được săn đón về từ một đối thủ nổi tiếng quốc tế.",
        "optionsVi": [
          "săn đầu người, chiêu mộ nhân sự cấp cao",
          "sa thải nhân viên không báo trước",
          "tuyển dụng thực tập sinh",
          "kiểm tra lý lịch tư pháp"
        ]
      },
      {
        "id": "toeic_062",
        "word": "pension scheme",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈpen.ʃən skiːm/",
        "meaningVi": "chế độ bảo hiểm hưu trí",
        "collocations": "occupational pension scheme, contribute to a pension scheme, join a pension scheme",
        "example": "The company matches employee contributions up to six percent under the corporate pension scheme.",
        "exampleVi": "Công ty đóng đối ứng khoản đóng góp của nhân viên lên tới 6% theo chế độ hưu trí của doanh nghiệp.",
        "optionsVi": [
          "chế độ bảo hiểm hưu trí",
          "chính sách thưởng hiệu suất",
          "chế độ thanh toán viện phí",
          "kế hoạch đào tạo thạc sĩ"
        ]
      },
      {
        "id": "toeic_063",
        "word": "orientation session",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˌɔːr.i.enˈteɪ.ʃən ˈseʃ.ən/",
        "meaningVi": "buổi đào tạo định hướng nhân viên mới",
        "collocations": "attend orientation session, conduct an orientation session, new employee orientation",
        "example": "All newly hired specialists must attend a mandatory orientation session on their first morning.",
        "exampleVi": "Tất cả chuyên viên mới được tuyển dụng phải tham dự buổi định hướng bắt buộc vào sáng đầu tiên đi làm.",
        "optionsVi": [
          "buổi đào tạo định hướng nhân viên mới",
          "buổi họp kiểm điểm nội bộ",
          "phiên đàm phán mức lương",
          "tiệc chia tay nhân viên về hưu"
        ]
      },
      {
        "id": "toeic_064",
        "word": "fringe benefits",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈfrɪndʒ ˌben.ə.fɪts/",
        "meaningVi": "phúc lợi phụ (ngoài lương cơ bản)",
        "collocations": "comprehensive fringe benefits, receive fringe benefits, tax-free fringe benefits",
        "example": "Aside from a good salary, the firm offers fringe benefits such as a gym pass and free cafeteria meals.",
        "exampleVi": "Bên cạnh mức lương tốt, công ty còn cung cấp các phúc lợi phụ như vé tập gym và bữa ăn miễn phí ở căn tin.",
        "optionsVi": [
          "phúc lợi phụ (ngoài lương cơ bản)",
          "tiền phạt đi muộn về sớm",
          "thuế khấu trừ tại nguồn",
          "chi phí trang phục công sở tự túc"
        ]
      },
      {
        "id": "toeic_065",
        "word": "promote",
        "level": "B1",
        "type": "verb",
        "ipa": "/prəˈmoʊt/",
        "meaningVi": "thăng chức, bổ nhiệm lên vị trí cao hơn",
        "collocations": "be promoted to manager, promote from within, promote internally",
        "example": "After leading three successful marketing campaigns, Sarah was promoted to department director.",
        "exampleVi": "Sau khi dẫn dắt thành công 3 chiến dịch tiếp thị, Sarah đã được thăng chức lên làm giám đốc bộ phận.",
        "optionsVi": [
          "thăng chức, bổ nhiệm lên vị trí cao hơn",
          "hạ bậc lương nhân viên",
          "chuyển công tác sang chi nhánh khác",
          "đình chỉ nhiệm vụ để thanh tra"
        ]
      },
      {
        "id": "toeic_066",
        "word": "workplace morale",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈwɜːrk.pleɪs məˈræl/",
        "meaningVi": "tinh thần làm việc của tập thể",
        "collocations": "boost workplace morale, low workplace morale, maintain high morale",
        "example": "Organizing regular team-building activities noticeably boosted workplace morale across departments.",
        "exampleVi": "Việc tổ chức các hoạt động gắn kết định kỳ đã nâng cao rõ rệt tinh thần làm việc trong toàn bộ các phòng ban.",
        "optionsVi": [
          "tinh thần làm việc của tập thể",
          "quy định an toàn phòng cháy",
          "nội quy trang phục công sở",
          "định mức sản lượng hàng ngày"
        ]
      },
      {
        "id": "toeic_067",
        "word": "curriculum vitae",
        "level": "B1",
        "type": "noun",
        "ipa": "/kəˌrɪk.jə.ləm ˈviː.taɪ/",
        "meaningVi": "sơ yếu lý lịch, bản CV xin việc",
        "collocations": "submit a curriculum vitae, updated curriculum vitae, attached curriculum vitae",
        "example": "Please submit your updated curriculum vitae along with three professional reference letters.",
        "exampleVi": "Vui lòng nộp bản sơ yếu lý lịch mới nhất kèm theo ba thư giới thiệu chuyên môn.",
        "optionsVi": [
          "sơ yếu lý lịch, bản CV xin việc",
          "giấy khám sức khỏe định kỳ",
          "hóa đơn thanh toán học phí",
          "bản cam kết bảo mật thông tin"
        ]
      },
      {
        "id": "toeic_068",
        "word": "hire",
        "level": "B1",
        "type": "verb",
        "ipa": "/haɪr/",
        "meaningVi": "thuê, tuyển dụng người làm",
        "collocations": "hire new staff, decision to hire, freeze hiring",
        "example": "Management implemented a temporary freeze on hiring new personnel until revenues stabilize.",
        "exampleVi": "Ban lãnh đạo đã ban hành quyết định tạm ngừng tuyển dụng nhân sự mới cho đến khi doanh thu ổn định trở lại.",
        "optionsVi": [
          "thuê, tuyển dụng người làm",
          "cho nghỉ việc trước thời hạn",
          "cắt giảm trợ cấp hàng tháng",
          "chấm dứt hợp đồng lao động"
        ]
      },
      {
        "id": "toeic_069",
        "word": "disciplinary action",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈdɪs.ə.plə.ner.i ˈæk.ʃən/",
        "meaningVi": "biện pháp kỷ luật lao động",
        "collocations": "face disciplinary action, take disciplinary action, subject to disciplinary action",
        "example": "Any employee disclosing confidential company data will face immediate disciplinary action.",
        "exampleVi": "Bất kỳ nhân viên nào tiết lộ dữ liệu mật của công ty sẽ phải đối mặt với biện pháp kỷ luật ngay lập tức.",
        "optionsVi": [
          "biện pháp kỷ luật lao động",
          "chính sách khen thưởng đột xuất",
          "quyết định cử đi công tác nước ngoài",
          "chế độ tăng lương trước thời hạn"
        ]
      },
      {
        "id": "toeic_070",
        "word": "eligible for promotion",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈel.ə.dʒə.bəl fər prəˈmoʊ.ʃən/",
        "meaningVi": "đủ điều kiện để được thăng chức",
        "collocations": "become eligible for promotion, deemed eligible for promotion, criteria to be eligible",
        "example": "After completing two full years of continuous service, associates become eligible for promotion.",
        "exampleVi": "Sau khi hoàn thành đủ hai năm làm việc liên tục, các chuyên viên sẽ đủ điều kiện để được xét thăng chức.",
        "optionsVi": [
          "đủ điều kiện để được thăng chức",
          "bị xem xét cho thôi việc",
          "thuộc diện phải đi đào tạo lại",
          "hết hạn hợp đồng lao động"
        ]
      },
      {
        "id": "toeic_071",
        "word": "demote",
        "level": "B2",
        "type": "verb",
        "ipa": "/dɪˈmoʊt/",
        "meaningVi": "giáng chức, hạ bậc vị trí",
        "collocations": "be demoted to assistant, demote for misconduct, face being demoted",
        "example": "The supervisor was demoted to an analyst position following recurring safety breaches.",
        "exampleVi": "Người giám sát đã bị giáng chức xuống vị trí chuyên viên phân tích sau các vi phạm an toàn lặp đi lặp lại.",
        "optionsVi": [
          "giáng chức, hạ bậc vị trí",
          "thăng chức lên giám đốc",
          "khen thưởng danh hiệu xuất sắc",
          "tăng lương gấp đôi"
        ]
      },
      {
        "id": "toeic_072",
        "word": "resignation",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌrez.ɪɡˈneɪ.ʃən/",
        "meaningVi": "sự từ chức, đơn xin thôi việc",
        "collocations": "tender one's resignation, hand in resignation, accept a resignation",
        "example": "The financial director tendered his formal resignation yesterday due to personal reasons.",
        "exampleVi": "Giám đốc tài chính đã chính thức nộp đơn xin từ chức vào hôm qua vì lý do cá nhân.",
        "optionsVi": [
          "sự từ chức, đơn xin thôi việc",
          "đơn xin tăng lương",
          "giấy đề xuất bổ nhiệm",
          "bản cam kết không cạnh tranh"
        ]
      },
      {
        "id": "toeic_073",
        "word": "job description",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈdʒɑːb dɪˌskrɪp.ʃən/",
        "meaningVi": "bản mô tả công việc (JD)",
        "collocations": "detailed job description, outlined in the job description, match the job description",
        "example": "The revised job description emphasizes cross-functional leadership and agile project management.",
        "exampleVi": "Bản mô tả công việc sửa đổi nhấn mạnh kỹ năng lãnh đạo liên phòng ban và quản lý dự án linh hoạt.",
        "optionsVi": [
          "bản mô tả công việc (JD)",
          "hợp đồng bảo hiểm trách nhiệm",
          "thư cảm ơn sau phỏng vấn",
          "bảng kê khai thu nhập cá nhân"
        ]
      },
      {
        "id": "toeic_074",
        "word": "mentorship",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈmen.tɔːr.ʃɪp/",
        "meaningVi": "chương trình hướng dẫn, kèm cặp chuyên môn",
        "collocations": "mentorship program, provide mentorship, benefit from mentorship",
        "example": "Junior analysts are paired with senior partners through our structured mentorship program.",
        "exampleVi": "Các chuyên viên phân tích mới vào nghề được ghép đôi với các đối tác cấp cao thông qua chương trình kèm cặp có hệ thống.",
        "optionsVi": [
          "chương trình hướng dẫn, kèm cặp chuyên môn",
          "kỳ thi sát hạch lý thuyết",
          "cuộc họp công đoàn cơ sở",
          "chương trình tặng quà đối tác"
        ]
      },
      {
        "id": "toeic_075",
        "word": "competence",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈkɑːm.pə.təns/",
        "meaningVi": "năng lực, trình độ chuyên môn vững vàng",
        "collocations": "professional competence, demonstrate competence, core competence",
        "example": "During the interview, the candidate demonstrated exceptional technical competence in data architecture.",
        "exampleVi": "Trong suốt buổi phỏng vấn, ứng viên đã thể hiện năng lực chuyên môn kỹ thuật xuất sắc về kiến trúc dữ liệu.",
        "optionsVi": [
          "năng lực, trình độ chuyên môn vững vàng",
          "sự thiếu hụt kinh nghiệm",
          "thái độ bất hợp tác",
          "tình trạng sức khỏe kém"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_logistics",
    "name": "Chuỗi Cung Ứng, Kho Bãi & Vận Tải Quốc Tế",
    "icon": "🚢",
    "category": "toeic",
    "level": "B2",
    "description": "Vận chuyển hàng hóa, chứng từ xuất nhập khẩu, hải quan, lưu kho và theo dõi hành trình đơn hàng.",
    "words": [
      {
        "id": "toeic_076",
        "word": "freight",
        "level": "B2",
        "type": "noun",
        "ipa": "/freɪt/",
        "meaningVi": "hàng hóa chuyên chở, cước phí vận chuyển",
        "collocations": "air freight, freight charges, freight forwarder",
        "example": "Rising fuel costs have led to an unexpected increase in international air freight charges.",
        "exampleVi": "Giá nhiên liệu tăng cao đã dẫn tới sự gia tăng ngoài dự kiến trong cước phí vận chuyển hàng không quốc tế.",
        "optionsVi": [
          "hàng hóa chuyên chở, cước phí vận chuyển",
          "thủ tục kiểm dịch động vật",
          "bản đồ chỉ dẫn cảng biển",
          "hợp đồng cho thuê kho bãi"
        ]
      },
      {
        "id": "toeic_077",
        "word": "consignment",
        "level": "B2",
        "type": "noun",
        "ipa": "/kənˈsaɪn.mənt/",
        "meaningVi": "lô hàng gửi đi, hàng ký gửi",
        "collocations": "ship a consignment, receive a consignment, consignment of goods",
        "example": "The latest consignment of microchips arrived at the warehouse without any transit damage.",
        "exampleVi": "Lô hàng vi mạch mới nhất đã đến kho chứa mà không gặp bất kỳ hư hại nào trong quá trình vận chuyển.",
        "optionsVi": [
          "lô hàng gửi đi, hàng ký gửi",
          "giấy phép thành lập doanh nghiệp",
          "khoản thuế giá trị gia tăng",
          "thông báo hủy hợp đồng cung ứng"
        ]
      },
      {
        "id": "toeic_078",
        "word": "bill of lading",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌbɪl əv ˈleɪ.dɪŋ/",
        "meaningVi": "vận đơn đường biển/đường bộ",
        "collocations": "original bill of lading, endorse a bill of lading, present the bill of lading",
        "example": "The consignee must present the original bill of lading at the port to collect the container.",
        "exampleVi": "Người nhận hàng phải xuất trình vận đơn gốc tại cảng để làm thủ tục nhận container.",
        "optionsVi": [
          "vận đơn đường biển/đường bộ",
          "hóa đơn thanh toán tiền điện",
          "chứng thư bảo lãnh ngân hàng",
          "bản kê khai xuất xứ hàng hóa"
        ]
      },
      {
        "id": "toeic_079",
        "word": "inventory turnover",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈɪn.vən.tɔːr.i ˈtɜːrnˌoʊ.vɚ/",
        "meaningVi": "vòng quay hàng tồn kho",
        "collocations": "high inventory turnover, improve inventory turnover, inventory turnover ratio",
        "example": "Adopting lean manufacturing practices helped the distributor achieve a higher inventory turnover.",
        "exampleVi": "Áp dụng phương pháp sản xuất tinh gọn đã giúp nhà phân phối đạt được vòng quay hàng tồn kho cao hơn.",
        "optionsVi": [
          "vòng quay hàng tồn kho",
          "tổng số lượng hàng hỏng",
          "diện tích sàn nhà kho",
          "chi phí bốc xếp hàng thủ công"
        ]
      },
      {
        "id": "toeic_080",
        "word": "customs clearance",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈkʌs.təmz ˈklɪr.əns/",
        "meaningVi": "thủ tục thông quan hải quan",
        "collocations": "await customs clearance, grant customs clearance, delay in customs clearance",
        "example": "The imported medical devices were held up at the border pending official customs clearance.",
        "exampleVi": "Các thiết bị y tế nhập khẩu đã bị giữ lại tại cửa khẩu để chờ thông quan hải quan chính thức.",
        "optionsVi": [
          "thủ tục thông quan hải quan",
          "việc kiểm kê kho định kỳ",
          "chính sách đổi trả hàng hóa",
          "hợp đồng thuê mượn container"
        ]
      },
      {
        "id": "toeic_081",
        "word": "warehouse",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈwer.haʊs/",
        "meaningVi": "nhà kho, kho lưu trữ hàng",
        "collocations": "central warehouse, automated warehouse, store in the warehouse",
        "example": "All returned merchandise is routed back to our central warehouse in Chicago for inspection.",
        "exampleVi": "Tất cả hàng hóa bị hoàn trả đều được chuyển về kho trung tâm tại Chicago để kiểm tra.",
        "optionsVi": [
          "nhà kho, kho lưu trữ hàng",
          "cửa hàng bán lẻ ngoài phố",
          "văn phòng đại diện thương mại",
          "phòng trưng bày mẫu sản phẩm"
        ]
      },
      {
        "id": "toeic_082",
        "word": "dispatch",
        "level": "B2",
        "type": "verb",
        "ipa": "/dɪˈspætʃ/",
        "meaningVi": "gửi đi, phái đi nhanh chóng",
        "collocations": "dispatch an order, promptly dispatch, dispatch courier",
        "example": "Orders received before 3:00 PM will be dispatched on the same business day.",
        "exampleVi": "Các đơn hàng nhận trước 3 giờ chiều sẽ được gửi đi ngay trong ngày làm việc hôm đó.",
        "optionsVi": [
          "gửi đi, phái đi nhanh chóng",
          "lưu kho vô thời hạn",
          "hủy đơn đặt hàng của khách",
          "từ chối vận chuyển hàng nặng"
        ]
      },
      {
        "id": "toeic_083",
        "word": "carrier",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈker.i.ɚ/",
        "meaningVi": "đơn vị vận chuyển hàng, hãng vận tải",
        "collocations": "shipping carrier, preferred carrier, international carrier",
        "example": "We partnered with a reliable freight carrier to ensure timely delivery across North America.",
        "exampleVi": "Chúng tôi đã hợp tác với một hãng vận tải uy tín để đảm bảo giao hàng đúng giờ trên khắp Bắc Mỹ.",
        "optionsVi": [
          "đơn vị vận chuyển hàng, hãng vận tải",
          "nhà cung cấp nguyên liệu",
          "đại lý phân phối độc quyền",
          "cơ quan giám định chất lượng"
        ]
      },
      {
        "id": "toeic_084",
        "word": "in transit",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ɪn ˈtræn.zɪt/",
        "meaningVi": "đang trên đường vận chuyển",
        "collocations": "goods in transit, damaged in transit, lost in transit",
        "example": "Customer support confirmed that the replacement parts are currently in transit from Germany.",
        "exampleVi": "Bộ phận chăm sóc khách hàng xác nhận các linh kiện thay thế hiện đang trên đường vận chuyển từ Đức về.",
        "optionsVi": [
          "đang trên đường vận chuyển",
          "đã giao hàng thành công",
          "đang chờ sản xuất tại xưởng",
          "bị tạm giữ do thiếu hóa đơn"
        ]
      },
      {
        "id": "toeic_085",
        "word": "procurement",
        "level": "B2",
        "type": "noun",
        "ipa": "/prəˈkjʊr.mənt/",
        "meaningVi": "hoạt động thu mua vật tư, trang thiết bị",
        "collocations": "procurement department, procurement policy, sustainable procurement",
        "example": "The procurement director negotiated volume discounts on all electronic components.",
        "exampleVi": "Giám đốc thu mua đã đàm phán được mức chiết khấu theo số lượng lớn cho tất cả linh kiện điện tử.",
        "optionsVi": [
          "hoạt động thu mua vật tư, trang thiết bị",
          "chiến dịch quảng bá bán lẻ",
          "quy trình tuyển dụng nhân viên",
          "công tác kiểm toán tài chính"
        ]
      },
      {
        "id": "toeic_086",
        "word": "distributor",
        "level": "B1",
        "type": "noun",
        "ipa": "/dɪˈstrɪb.jə.t̬ɚ/",
        "meaningVi": "nhà phân phối hàng hóa",
        "collocations": "authorized distributor, regional distributor, exclusive distributor",
        "example": "Only products purchased from an authorized distributor qualify for manufacturer warranty coverage.",
        "exampleVi": "Chỉ các sản phẩm được mua từ nhà phân phối được ủy quyền mới đủ điều kiện bảo hành của hãng.",
        "optionsVi": [
          "nhà phân phối hàng hóa",
          "người tiêu dùng cuối cùng",
          "người bốc xếp hàng tại bến",
          "chuyên viên giám định pháp lý"
        ]
      },
      {
        "id": "toeic_087",
        "word": "packaging specification",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈpæk.ɪ.dʒɪŋ ˌspes.ə.fəˈkeɪ.ʃən/",
        "meaningVi": "quy cách đóng gói hàng hóa",
        "collocations": "meet packaging specifications, strict packaging specifications, alter packaging specifications",
        "example": "All export containers must strictly comply with international packaging specifications.",
        "exampleVi": "Tất cả container hàng xuất khẩu phải tuân thủ nghiêm ngặt các quy cách đóng gói quốc tế.",
        "optionsVi": [
          "quy cách đóng gói hàng hóa",
          "hạn mức tín dụng ngân hàng",
          "bảng báo giá chi tiết sản phẩm",
          "chính sách bảo hiểm hàng hải"
        ]
      },
      {
        "id": "toeic_088",
        "word": "tariff",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈter.ɪf/",
        "meaningVi": "thuế quan xuất nhập khẩu",
        "collocations": "impose tariffs, import tariffs, exempt from tariffs",
        "example": "The government announced a ten percent tariff on imported solar panels to support domestic factories.",
        "exampleVi": "Chính phủ đã công bố mức thuế quan 10% đối với các tấm pin năng lượng mặt trời nhập khẩu để hỗ trợ các nhà máy trong nước.",
        "optionsVi": [
          "thuế quan xuất nhập khẩu",
          "cước phí dỡ hàng tại cảng",
          "tiền thuê kho bãi lưu trữ",
          "mức hoa hồng bán buôn"
        ]
      },
      {
        "id": "toeic_089",
        "word": "perishable goods",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈper.ɪ.ʃə.bəl ɡʊdz/",
        "meaningVi": "hàng hóa mau hỏng (thực phẩm, hoa quả)",
        "collocations": "transport perishable goods, perishable goods refrigerated, store perishable goods",
        "example": "Refrigerated freight trucks are indispensable for transporting perishable goods over long distances.",
        "exampleVi": "Xe tải chở hàng đông lạnh là phương tiện không thể thiếu để vận chuyển hàng mau hỏng trên những quãng đường dài.",
        "optionsVi": [
          "hàng hóa mau hỏng (thực phẩm, hoa quả)",
          "máy móc cơ khí hạng nặng",
          "vật liệu xây dựng công nghiệp",
          "hàng hóa đóng gói bằng kim loại"
        ]
      },
      {
        "id": "toeic_090",
        "word": "lead time",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈliːd ˌtaɪm/",
        "meaningVi": "thời gian từ lúc đặt hàng đến khi nhận",
        "collocations": "shorten lead time, average lead time, lead time of two weeks",
        "example": "By sourcing parts locally, the manufacturer managed to cut production lead time by half.",
        "exampleVi": "Bằng cách tìm nguồn linh kiện tại địa phương, nhà sản xuất đã rút ngắn được một nửa thời gian từ lúc đặt đến khi nhận.",
        "optionsVi": [
          "thời gian từ lúc đặt hàng đến khi nhận",
          "thời gian bảo hành của sản phẩm",
          "thời hạn sử dụng in trên bao bì",
          "thời gian họp bàn giao công việc"
        ]
      },
      {
        "id": "toeic_091",
        "word": "replenish",
        "level": "B2",
        "type": "verb",
        "ipa": "/rɪˈplen.ɪʃ/",
        "meaningVi": "bổ sung thêm hàng vào kho",
        "collocations": "replenish stock, replenish inventory, regularly replenish",
        "example": "The retail chain replenishes its shelf inventory twice weekly to prevent stockouts.",
        "exampleVi": "Chuỗi bán lẻ bổ sung thêm hàng lên kệ 2 lần mỗi tuần để tránh tình trạng hết hàng.",
        "optionsVi": [
          "bổ sung thêm hàng vào kho",
          "thanh lý toàn bộ hàng cũ",
          "tiêu hủy hàng quá hạn",
          "kiểm tra tem chống hàng giả"
        ]
      },
      {
        "id": "toeic_092",
        "word": "cargo",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈkɑːr.ɡoʊ/",
        "meaningVi": "hàng hóa trên tàu hoặc máy bay",
        "collocations": "cargo ship, handle cargo, load cargo",
        "example": "Dockworkers worked throughout the night to unload containerized cargo from the vessel.",
        "exampleVi": "Các công nhân bốc vác đã làm việc suốt đêm để bốc dỡ hàng hóa container từ con tàu.",
        "optionsVi": [
          "hàng hóa trên tàu hoặc máy bay",
          "đội ngũ thuyền viên trên tàu",
          "nhiên liệu đốt của phương tiện",
          "vé hành khách đi máy bay"
        ]
      },
      {
        "id": "toeic_093",
        "word": "expedite",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈek.spə.daɪt/",
        "meaningVi": "đẩy nhanh, xúc tiến tiến độ",
        "collocations": "expedite delivery, expedite processing, expedite the shipment",
        "example": "We paid an extra fee to expedite the delivery of urgent surgical equipment.",
        "exampleVi": "Chúng tôi đã trả thêm một khoản phí phụ để đẩy nhanh việc giao thiết bị phẫu thuật khẩn cấp.",
        "optionsVi": [
          "đẩy nhanh, xúc tiến tiến độ",
          "trì hoãn giao hàng",
          "từ chối vận chuyển",
          "hủy bỏ thỏa thuận mua bán"
        ]
      },
      {
        "id": "toeic_094",
        "word": "mishandle",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˌmɪsˈhæn.dəl/",
        "meaningVi": "xử lý sai sót, bốc dỡ hàng ẩu",
        "collocations": "mishandle fragile items, mishandle baggage, mishandle cargo",
        "example": "The fragile glassware shattered because the handling crew mishandled the crate during transit.",
        "exampleVi": "Đồ thủy tinh dễ vỡ đã bị vỡ tan do đội bốc dỡ đã bốc xếp ẩu kiện hàng trong quá trình vận chuyển.",
        "optionsVi": [
          "xử lý sai sót, bốc dỡ hàng ẩu",
          "đóng gói cẩn thận",
          "vận chuyển an toàn tuyệt đối",
          "kiểm tra kỹ trước khi gửi"
        ]
      },
      {
        "id": "toeic_095",
        "word": "tracking number",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈtræk.ɪŋ ˌnʌm.bɚ/",
        "meaningVi": "mã số theo dõi bưu kiện vận chuyển",
        "collocations": "provide a tracking number, enter tracking number, tracking number in confirmation email",
        "example": "Once your order has been dispatched, you will receive an email containing the tracking number.",
        "exampleVi": "Ngay khi đơn hàng của bạn được gửi đi, bạn sẽ nhận được một email chứa mã số theo dõi bưu kiện.",
        "optionsVi": [
          "mã số theo dõi bưu kiện vận chuyển",
          "mã số định danh thuế doanh nghiệp",
          "số tài khoản ngân hàng thụ hưởng",
          "mã số chứng minh nhân dân"
        ]
      },
      {
        "id": "toeic_096",
        "word": "storage facility",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈstɔːr.ɪdʒ fəˌsɪl.ə.t̬i/",
        "meaningVi": "cơ sở kho bãi lưu trữ hàng",
        "collocations": "climate-controlled storage facility, secure storage facility, rent a storage facility",
        "example": "High-end pharmaceuticals require a temperature-controlled storage facility to maintain potency.",
        "exampleVi": "Dược phẩm cao cấp đòi hỏi cơ sở kho bãi có kiểm soát nhiệt độ để duy trì hiệu lực thuốc.",
        "optionsVi": [
          "cơ sở kho bãi lưu trữ hàng",
          "xưởng sản xuất bao bì giấy",
          "văn phòng giao dịch khách hàng",
          "trạm thu phí đường cao tốc"
        ]
      },
      {
        "id": "toeic_097",
        "word": "damaged in transit",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈdæm.ɪdʒd ɪn ˈtræn.zɪt/",
        "meaningVi": "bị hư hỏng trong quá trình vận chuyển",
        "collocations": "items damaged in transit, claim for goods damaged in transit, replace goods damaged in transit",
        "example": "Customers can request an immediate free replacement for any item damaged in transit.",
        "exampleVi": "Khách hàng có thể yêu cầu đổi mới miễn phí ngay lập tức cho bất kỳ mặt hàng nào bị hư hỏng trong quá trình vận chuyển.",
        "optionsVi": [
          "bị hư hỏng trong quá trình vận chuyển",
          "được giao nguyên vẹn an toàn",
          "bị thất lạc tại quầy thủ tục",
          "hết hạn bảo hành từ nhà sản xuất"
        ]
      },
      {
        "id": "toeic_098",
        "word": "supplier",
        "level": "B1",
        "type": "noun",
        "ipa": "/səˈplaɪ.ɚ/",
        "meaningVi": "nhà cung cấp nguyên vật liệu/hàng hóa",
        "collocations": "reliable supplier, foreign supplier, switch suppliers",
        "example": "The auto maker works with dozens of certified parts suppliers across the globe.",
        "exampleVi": "Hãng sản xuất ô tô làm việc với hàng chục nhà cung cấp phụ tùng đã được cấp chứng nhận trên toàn cầu.",
        "optionsVi": [
          "nhà cung cấp nguyên vật liệu/hàng hóa",
          "khách hàng mua buôn",
          "đơn vị kiểm định môi trường",
          "nhân viên bảo trì thiết bị"
        ]
      },
      {
        "id": "toeic_099",
        "word": "fulfill an order",
        "level": "B2",
        "type": "collocation",
        "ipa": "/fʊlˈfɪl ən ˈɔːr.dɚ/",
        "meaningVi": "xử lý và hoàn tất đơn hàng",
        "collocations": "promptly fulfill an order, unable to fulfill an order, warehouse fulfills orders",
        "example": "Automated packing robots enable the fulfillment center to fulfill orders within two hours.",
        "exampleVi": "Robot đóng gói tự động cho phép trung tâm hoàn tất đơn hàng xử lý và gửi đi các đơn trong vòng 2 giờ.",
        "optionsVi": [
          "xử lý và hoàn tất đơn hàng",
          "hủy bỏ đơn mua hàng",
          "khiếu nại về giá thành",
          "hoãn thanh toán tiền hàng"
        ]
      },
      {
        "id": "toeic_100",
        "word": "backorder",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈbækˌɔːr.dɚ/",
        "meaningVi": "đơn hàng chờ xử lý do hết hàng trong kho",
        "collocations": "placed on backorder, item on backorder, backorder backlog",
        "example": "Because the bestselling monitor is currently on backorder, shipping will take up to three weeks.",
        "exampleVi": "Bởi vì chiếc màn hình bán chạy nhất hiện đang tạm hết hàng trong kho, việc giao hàng sẽ mất tối đa 3 tuần.",
        "optionsVi": [
          "đơn hàng chờ xử lý do hết hàng trong kho",
          "đơn hàng bị giao sai địa chỉ",
          "hàng hóa được giảm giá mạnh",
          "phiếu nhận hàng tại cửa hàng"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_mkt",
    "name": "Tiếp Thị, Quảng Cáo & Nghiên Cứu Thị Trường",
    "icon": "📣",
    "category": "toeic",
    "level": "B2",
    "description": "Chiến dịch quảng bá, phân khúc khách hàng, thị phần, ra mắt sản phẩm và quan hệ công chúng.",
    "words": [
      {
        "id": "toeic_101",
        "word": "target audience",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈtɑːr.ɡɪt ˈɑː.di.əns/",
        "meaningVi": "nhóm khách hàng mục tiêu",
        "collocations": "reach the target audience, identify target audience, tailor to target audience",
        "example": "The ad campaign was tailored specifically to appeal to a younger target audience.",
        "exampleVi": "Chiến dịch quảng cáo được điều chỉnh đặc biệt để thu hút nhóm khách hàng mục tiêu trẻ tuổi.",
        "optionsVi": [
          "nhóm khách hàng mục tiêu",
          "hội đồng cổ đông công ty",
          "đội ngũ sáng tạo nội dung",
          "ban giám khảo cuộc thi"
        ]
      },
      {
        "id": "toeic_102",
        "word": "market penetration",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌmɑːr.kɪt ˌpen.əˈtreɪ.ʃən/",
        "meaningVi": "độ thâm nhập thị trường",
        "collocations": "increase market penetration, achieve market penetration, aggressive market penetration",
        "example": "Offering competitive introductory pricing accelerated our market penetration in Southeast Asia.",
        "exampleVi": "Đưa ra mức giá chào hàng cạnh tranh đã thúc đẩy nhanh độ thâm nhập thị trường của chúng tôi tại Đông Nam Á.",
        "optionsVi": [
          "độ thâm nhập thị trường",
          "tỷ lệ hoàn trả sản phẩm",
          "mức độ bảo mật thông tin",
          "chi phí vận chuyển hàng không"
        ]
      },
      {
        "id": "toeic_103",
        "word": "brand awareness",
        "level": "B2",
        "type": "collocation",
        "ipa": "/brænd əˈwer.nəs/",
        "meaningVi": "mức độ nhận diện thương hiệu",
        "collocations": "build brand awareness, raise brand awareness, strong brand awareness",
        "example": "Sponsoring international sporting tournaments helped raise brand awareness across Europe.",
        "exampleVi": "Tài trợ cho các giải đấu thể thao quốc tế đã giúp nâng cao mức độ nhận diện thương hiệu trên khắp châu Âu.",
        "optionsVi": [
          "mức độ nhận diện thương hiệu",
          "chất lượng bao bì sản phẩm",
          "chính sách đổi trả bảo hành",
          "hạn mức tín dụng đại lý"
        ]
      },
      {
        "id": "toeic_104",
        "word": "consumer survey",
        "level": "B1",
        "type": "collocation",
        "ipa": "/kənˈsuː.mɚ ˈsɜːr.veɪ/",
        "meaningVi": "khảo sát ý kiến người tiêu dùng",
        "collocations": "conduct a consumer survey, consumer survey reveals, participate in a consumer survey",
        "example": "A recent consumer survey revealed that customers prioritize product durability over aesthetics.",
        "exampleVi": "Một cuộc khảo sát người tiêu dùng gần đây tiết lộ rằng khách hàng ưu tiên độ bền sản phẩm hơn là tính thẩm mỹ.",
        "optionsVi": [
          "khảo sát ý kiến người tiêu dùng",
          "biên bản thanh tra vệ sinh",
          "bảng kê khai hàng tồn đọng",
          "hóa đơn thanh toán bán buôn"
        ]
      },
      {
        "id": "toeic_105",
        "word": "promotional campaign",
        "level": "B1",
        "type": "collocation",
        "ipa": "/prəˈmoʊ.ʃən.əl kæmˈpeɪn/",
        "meaningVi": "chiến dịch quảng bá, khuyến mãi",
        "collocations": "launch a promotional campaign, intensive promotional campaign, nationwide promotional campaign",
        "example": "The marketing team launched a nationwide promotional campaign featuring buy-one-get-one deals.",
        "exampleVi": "Đội ngũ tiếp thị đã phát động chiến dịch quảng bá toàn quốc với chương trình mua một tặng một.",
        "optionsVi": [
          "chiến dịch quảng bá, khuyến mãi",
          "kế hoạch cắt giảm nhân sự",
          "thủ tục giải thể chi nhánh",
          "quy trình kiểm định kỹ thuật"
        ]
      },
      {
        "id": "toeic_106",
        "word": "endorsement",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪnˈdɔːrs.mənt/",
        "meaningVi": "sự chứng thực quảng cáo của người nổi tiếng",
        "collocations": "celebrity endorsement, seek endorsement, official endorsement",
        "example": "The athletic footwear company signed an exclusive multi-million-dollar endorsement with a tennis star.",
        "exampleVi": "Công ty giày thể thao đã ký hợp đồng quảng cáo độc quyền trị giá hàng triệu USD với một ngôi sao quần vợt.",
        "optionsVi": [
          "sự chứng thực quảng cáo của người nổi tiếng",
          "lời cảnh báo từ người tiêu dùng",
          "biên bản xử phạt hành chính",
          "đơn kiện vi phạm bản quyền"
        ]
      },
      {
        "id": "toeic_107",
        "word": "demographics",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌdem.əˈɡræf.ɪks/",
        "meaningVi": "dữ liệu nhân khẩu học",
        "collocations": "target demographics, analyze demographics, shifting demographics",
        "example": "Marketers must study urban demographics to decide where to open upcoming flagship stores.",
        "exampleVi": "Những người làm tiếp thị phải nghiên cứu dữ liệu nhân khẩu học đô thị để quyết định nơi mở các cửa hàng đầu đàn sắp tới.",
        "optionsVi": [
          "dữ liệu nhân khẩu học",
          "chỉ số biến động chứng khoán",
          "hệ thống giao thông công cộng",
          "thông số kỹ thuật máy móc"
        ]
      },
      {
        "id": "toeic_108",
        "word": "competitive edge",
        "level": "B2",
        "type": "collocation",
        "ipa": "/kəmˈpet̬.ə.t̬ɪv edʒ/",
        "meaningVi": "lợi thế cạnh tranh vượt trội",
        "collocations": "gain a competitive edge, maintain a competitive edge, sharpen competitive edge",
        "example": "Investing in AI-driven analytics gave our firm a decisive competitive edge over local rivals.",
        "exampleVi": "Đầu tư vào phân tích dữ liệu bằng AI đã đem lại cho công ty chúng tôi lợi thế cạnh tranh vượt trội trước các đối thủ địa phương.",
        "optionsVi": [
          "lợi thế cạnh tranh vượt trội",
          "mối đe dọa phá sản",
          "khoản nợ đến hạn thanh toán",
          "sự sụt giảm doanh số bán"
        ]
      },
      {
        "id": "toeic_109",
        "word": "launch",
        "level": "B1",
        "type": "verb",
        "ipa": "/lɑːntʃ/",
        "meaningVi": "ra mắt, tung ra sản phẩm mới",
        "collocations": "launch a new product, product launch, official launch date",
        "example": "The automaker plans to launch three all-electric models before the end of next year.",
        "exampleVi": "Hãng sản xuất ô tô dự định tung ra ba mẫu xe thuần điện trước cuối năm tới.",
        "optionsVi": [
          "ra mắt, tung ra sản phẩm mới",
          "thu hồi sản phẩm bị lỗi",
          "ngừng dây chuyền lắp ráp",
          "giảm giá thanh lý hàng cũ"
        ]
      },
      {
        "id": "toeic_110",
        "word": "niche market",
        "level": "B2",
        "type": "collocation",
        "ipa": "/niːʃ ˈmɑːr.kɪt/",
        "meaningVi": "thị trường ngách, phân khúc hẹp",
        "collocations": "carve out a niche market, serve a niche market, profitable niche market",
        "example": "By focusing exclusively on vegan skincare, the startup successfully captured a profitable niche market.",
        "exampleVi": "Bằng cách tập trung hoàn toàn vào mỹ phẩm thuần chay, công ty khởi nghiệp đã chiếm lĩnh thành công một thị trường ngách đầy lợi nhuận.",
        "optionsVi": [
          "thị trường ngách, phân khúc hẹp",
          "thị trường đại trà giá rẻ",
          "khu chợ truyền thống ngoài trời",
          "trung tâm thương mại sầm uất"
        ]
      },
      {
        "id": "toeic_111",
        "word": "press release",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈpres rɪˌliːs/",
        "meaningVi": "thông cáo báo chí",
        "collocations": "issue a press release, distribute a press release, official press release",
        "example": "The corporate communications office issued a press release denying the merger rumors.",
        "exampleVi": "Văn phòng truyền thông doanh nghiệp đã phát đi thông cáo báo chí bác bỏ những tin đồn sáp nhập.",
        "optionsVi": [
          "thông cáo báo chí",
          "bản tin nội bộ phòng ban",
          "hợp đồng bảo mật thông tin",
          "hóa đơn chi phí tiếp khách"
        ]
      },
      {
        "id": "toeic_112",
        "word": "customer loyalty",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈkʌs.tə.mɚ ˈlɔɪ.əl.t̬i/",
        "meaningVi": "lòng trung thành của khách hàng",
        "collocations": "build customer loyalty, customer loyalty program, reward customer loyalty",
        "example": "Offering personalized discounts and rewards programs is key to strengthening customer loyalty.",
        "exampleVi": "Cung cấp chiết khấu cá nhân hóa và các chương trình tích điểm là chìa khóa để củng cố lòng trung thành của khách hàng.",
        "optionsVi": [
          "lòng trung thành của khách hàng",
          "sự nghi ngờ về chất lượng",
          "thói quen đổi trả sản phẩm",
          "số lượng khiếu nại phát sinh"
        ]
      },
      {
        "id": "toeic_113",
        "word": "commercial",
        "level": "B1",
        "type": "noun",
        "ipa": "/kəˈmɜːr.ʃəl/",
        "meaningVi": "quảng cáo trên truyền hình hoặc đài phát thanh",
        "collocations": "television commercial, radio commercial, 30-second commercial",
        "example": "The brand aired a memorable 30-second commercial during the championship game.",
        "exampleVi": "Thương hiệu đã phát sóng một đoạn quảng cáo 30 giây đáng nhớ trong suốt trận đấu vô địch.",
        "optionsVi": [
          "quảng cáo trên truyền hình hoặc đài phát thanh",
          "bài báo cáo khoa học",
          "bản tin thời sự trực tiếp",
          "chương trình phim tài liệu"
        ]
      },
      {
        "id": "toeic_114",
        "word": "market share",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈmɑːr.kɪt ʃer/",
        "meaningVi": "thị phần của doanh nghiệp",
        "collocations": "gain market share, lose market share, dominate market share",
        "example": "Aggressive advertising helped the beverage manufacturer capture forty percent of the domestic market share.",
        "exampleVi": "Quảng cáo mạnh mẽ đã giúp nhà sản xuất đồ uống chiếm lĩnh 40% thị phần nội địa.",
        "optionsVi": [
          "thị phần của doanh nghiệp",
          "khoản nợ ngân hàng",
          "chi phí mua sắm bao bì",
          "số lượng đại lý giải thể"
        ]
      },
      {
        "id": "toeic_115",
        "word": "flyer",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈflaɪ.ɚ/",
        "meaningVi": "tờ rơi quảng cáo",
        "collocations": "hand out flyers, promotional flyer, design a flyer",
        "example": "Volunteers handed out colorful flyers announcing the grand opening of the new department store.",
        "exampleVi": "Các tình nguyện viên đã phát những tờ rơi đầy màu sắc thông báo ngày khai trương của trung tâm mua sắm mới.",
        "optionsVi": [
          "tờ rơi quảng cáo",
          "cuốn sổ tay nội quy",
          "tấm vé máy bay",
          "hóa đơn đỏ giá trị gia tăng"
        ]
      },
      {
        "id": "toeic_116",
        "word": "brochure",
        "level": "B1",
        "type": "noun",
        "ipa": "/broʊˈʃʊr/",
        "meaningVi": "tập sách giới thiệu sản phẩm/dịch vụ",
        "collocations": "glossy brochure, travel brochure, pick up a brochure",
        "example": "Visitors can pick up a complimentary informational brochure at the reception counter.",
        "exampleVi": "Khách tham quan có thể nhận một tập tài liệu giới thiệu thông tin miễn phí tại quầy tiếp tân.",
        "optionsVi": [
          "tập sách giới thiệu sản phẩm/dịch vụ",
          "hợp đồng cho thuê mặt bằng",
          "phiếu bảo hành có thời hạn",
          "thẻ lên máy bay"
        ]
      },
      {
        "id": "toeic_117",
        "word": "public relations",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌpʌb.lɪk rɪˈleɪ.ʃənz/",
        "meaningVi": "quan hệ công chúng (PR)",
        "collocations": "public relations firm, public relations campaign, head of public relations",
        "example": "The executive hired a prominent public relations firm to rebuild the corporate image after the crisis.",
        "exampleVi": "Ban điều hành đã thuê một công ty quan hệ công chúng uy tín để xây dựng lại hình ảnh doanh nghiệp sau khủng hoảng.",
        "optionsVi": [
          "quan hệ công chúng (PR)",
          "phòng kiểm toán nội bộ",
          "bộ phận xuất nhập khẩu",
          "đội ngũ kỹ thuật phần mềm"
        ]
      },
      {
        "id": "toeic_118",
        "word": "word-of-mouth",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌwɜːrd.əvˈmaʊθ/",
        "meaningVi": "hình thức tiếp thị truyền miệng",
        "collocations": "word-of-mouth recommendation, spread by word-of-mouth, word-of-mouth marketing",
        "example": "The boutique coffee shop relies heavily on word-of-mouth recommendations rather than paid billboard ads.",
        "exampleVi": "Quán cà phê nhỏ dựa nhiều vào lời giới thiệu truyền miệng hơn là các biển quảng cáo trả phí.",
        "optionsVi": [
          "hình thức tiếp thị truyền miệng",
          "thông điệp phát thanh công cộng",
          "quảng cáo trên truyền hình cáp",
          "bản khảo sát trực tuyến tự động"
        ]
      },
      {
        "id": "toeic_119",
        "word": "sponsorship",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈspɑːn.sɚ.ʃɪp/",
        "meaningVi": "sự tài trợ thương mại",
        "collocations": "corporate sponsorship, secure sponsorship, under the sponsorship of",
        "example": "Securing corporate sponsorship from tech leaders allowed the university to build new research labs.",
        "exampleVi": "Có được sự tài trợ từ các tập đoàn công nghệ hàng đầu đã cho phép trường đại học xây dựng các phòng thí nghiệm mới.",
        "optionsVi": [
          "sự tài trợ thương mại",
          "khoản nợ quá hạn chi trả",
          "hành vi can thiệp trái phép",
          "khoản phí bảo trì thiết bị"
        ]
      },
      {
        "id": "toeic_120",
        "word": "discount voucher",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈdɪs.kaʊnt ˈvaʊ.tʃɚ/",
        "meaningVi": "phiếu giảm giá mua hàng",
        "collocations": "redeem a discount voucher, valid discount voucher, apply a discount voucher",
        "example": "Subscribers who fill out the online feedback form will receive a 20% discount voucher.",
        "exampleVi": "Những người đăng ký điền vào phiếu khảo sát trực tuyến sẽ nhận được phiếu giảm giá 20%.",
        "optionsVi": [
          "phiếu giảm giá mua hàng",
          "giấy phép nhập cảnh",
          "phiếu xuất kho phụ tùng",
          "biên lai thu tiền điện"
        ]
      },
      {
        "id": "toeic_121",
        "word": "focus group",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈfoʊ.kəs ˌɡruːp/",
        "meaningVi": "nhóm thảo luận lấy ý kiến chuyên sâu",
        "collocations": "conduct a focus group, focus group participants, feedback from focus groups",
        "example": "Feedback from consumer focus groups helped the software team refine the mobile user interface.",
        "exampleVi": "Ý kiến đóng góp từ các nhóm thảo luận người tiêu dùng đã giúp đội ngũ phần mềm tinh chỉnh giao diện người dùng trên di động.",
        "optionsVi": [
          "nhóm thảo luận lấy ý kiến chuyên sâu",
          "đội thợ sửa chữa lưu động",
          "hội đồng giải quyết tranh chấp",
          "đoàn đại biểu tham quan"
        ]
      },
      {
        "id": "toeic_122",
        "word": "billboard",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈbɪl.bɔːrd/",
        "meaningVi": "biển bảng quảng cáo lớn ngoài trời",
        "collocations": "highway billboard, digital billboard, advertise on billboards",
        "example": "The real estate firm erected massive billboards along major highway intersections to attract homebuyers.",
        "exampleVi": "Công ty bất động sản đã dựng những biển quảng cáo khổng lồ dọc các nút giao cao tốc lớn để thu hút người mua nhà.",
        "optionsVi": [
          "biển bảng quảng cáo lớn ngoài trời",
          "bảng lương bảo mật",
          "bảng thông báo nội bộ",
          "biển báo hạn chế tốc độ"
        ]
      },
      {
        "id": "toeic_123",
        "word": "digital marketing",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈdɪdʒ.ə.t̬əl ˈmɑːr.kɪ.t̬ɪŋ/",
        "meaningVi": "tiếp thị số, tiếp thị trực tuyến",
        "collocations": "digital marketing strategy, digital marketing specialist, invest in digital marketing",
        "example": "Shifting budget from print ads to digital marketing dramatically expanded their consumer reach.",
        "exampleVi": "Chuyển ngân sách từ báo in sang tiếp thị số đã mở rộng đáng kể phạm vi tiếp cận người tiêu dùng của họ.",
        "optionsVi": [
          "tiếp thị số, tiếp thị trực tuyến",
          "kinh doanh vận tải đường thủy",
          "kiểm kê tài sản thủ công",
          "quản lý nhân sự truyền thống"
        ]
      },
      {
        "id": "toeic_124",
        "word": "tagline",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈtæɡ.laɪn/",
        "meaningVi": "khẩu hiệu, câu slogan thương hiệu",
        "collocations": "catchy tagline, memorable tagline, company tagline",
        "example": "The brand's catchy new tagline helped make the product instantly recognizable to shoppers.",
        "exampleVi": "Câu khẩu hiệu mới bắt tai của thương hiệu đã giúp sản phẩm được người mua sắm nhận ra ngay lập tức.",
        "optionsVi": [
          "khẩu hiệu, câu slogan thương hiệu",
          "bản hướng dẫn cài đặt",
          "danh sách nguyên liệu độc hại",
          "thông tin mã vạch sản phẩm"
        ]
      },
      {
        "id": "toeic_125",
        "word": "expand outreach",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ɪkˈspænd ˈaʊt.riːtʃ/",
        "meaningVi": "mở rộng phạm vi tiếp cận cộng đồng/khách hàng",
        "collocations": "expand community outreach, effort to expand outreach, expand outreach to new regions",
        "example": "The non-profit organization partnered with universities to expand outreach to rural students.",
        "exampleVi": "Tổ chức phi lợi nhuận đã hợp tác với các trường đại học để mở rộng tiếp cận tới học sinh vùng nông thôn.",
        "optionsVi": [
          "mở rộng phạm vi tiếp cận cộng đồng/khách hàng",
          "cắt giảm mạng lưới chi nhánh",
          "thu hẹp quy mô hoạt động",
          "ngừng cung cấp dịch vụ miễn phí"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_conferences",
    "name": "Hội Nghị, Hội Thảo & Sự Kiện Doanh Nghiệp",
    "icon": "🎤",
    "category": "toeic",
    "level": "B1",
    "description": "Địa điểm tổ chức, điều phối viên, lịch trình nghị sự, diễn giả, bài thuyết trình và tiệc chiêu đãi.",
    "words": [
      {
        "id": "toeic_126",
        "word": "venue",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈven.juː/",
        "meaningVi": "địa điểm tổ chức sự kiện/hội nghị",
        "collocations": "conference venue, ideal venue, book a venue",
        "example": "The grand ballroom at the Grand Plaza Hotel was selected as the conference venue.",
        "exampleVi": "Hội trường lớn tại khách sạn Grand Plaza đã được chọn làm địa điểm tổ chức hội nghị.",
        "optionsVi": [
          "địa điểm tổ chức sự kiện/hội nghị",
          "thực đơn tiệc trưa",
          "danh sách khách mời VIP",
          "bài phát biểu khai mạc"
        ]
      },
      {
        "id": "toeic_127",
        "word": "keynote speaker",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈkiː.noʊt ˈspiː.kɚ/",
        "meaningVi": "diễn giả chính của buổi hội nghị",
        "collocations": "invite a keynote speaker, keynote speaker delivers address, distinguished keynote speaker",
        "example": "A distinguished artificial intelligence researcher was invited as our keynote speaker.",
        "exampleVi": "Một nhà nghiên cứu trí tuệ nhân tạo lỗi lạc đã được mời làm diễn giả chính của chúng tôi.",
        "optionsVi": [
          "diễn giả chính của buổi hội nghị",
          "người phục vụ tiệc",
          "kỹ thuật viên âm thanh",
          "nhân viên bảo vệ cửa"
        ]
      },
      {
        "id": "toeic_128",
        "word": "agenda",
        "level": "B1",
        "type": "noun",
        "ipa": "/əˈdʒen.də/",
        "meaningVi": "chương trình nghị sự, lịch trình phiên họp",
        "collocations": "on the agenda, item on the agenda, adopt the agenda",
        "example": "The first item on today's agenda is the approval of last month's financial statements.",
        "exampleVi": "Mục đầu tiên trong chương trình nghị sự hôm nay là phê duyệt báo cáo tài chính tháng trước.",
        "optionsVi": [
          "chương trình nghị sự, lịch trình phiên họp",
          "biên bản xử phạt hành chính",
          "giấy mời ăn trưa",
          "bản đồ chỉ dẫn giao thông"
        ]
      },
      {
        "id": "toeic_129",
        "word": "accommodate",
        "level": "B2",
        "type": "verb",
        "ipa": "/əˈkɑː.mə.deɪt/",
        "meaningVi": "chứa được, đáp ứng chỗ ngồi/tiện nghi",
        "collocations": "accommodate guests, accommodate up to 500 people, accommodate special requests",
        "example": "The auditorium can comfortably accommodate up to six hundred delegates.",
        "exampleVi": "Khán phòng có thể đáp ứng chỗ ngồi thoải mái cho tối đa 600 đại biểu.",
        "optionsVi": [
          "chứa được, đáp ứng chỗ ngồi/tiện nghi",
          "từ chối tiếp đón",
          "hủy bỏ đặt chỗ",
          "giảm bớt số lượng ghế"
        ]
      },
      {
        "id": "toeic_130",
        "word": "delegate",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈdel.ə.ɡət/",
        "meaningVi": "đại biểu tham dự hội nghị",
        "collocations": "conference delegate, register delegates, international delegates",
        "example": "Delegates from over thirty different nations attended the clean energy summit.",
        "exampleVi": "Các đại biểu đến từ hơn ba mươi quốc gia khác nhau đã tham dự hội nghị thượng đỉnh năng lượng sạch.",
        "optionsVi": [
          "đại biểu tham dự hội nghị",
          "nhân viên lái xe đưa đón",
          "người phiên dịch cabin",
          "đơn vị tài trợ chính"
        ]
      },
      {
        "id": "toeic_131",
        "word": "registration fee",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˌredʒ.əˈstreɪ.ʃən fiː/",
        "meaningVi": "phí đăng ký tham gia sự kiện",
        "collocations": "pay registration fee, waive the registration fee, early-bird registration fee",
        "example": "Attendees who sign up before August 1st will enjoy a thirty percent discount on the registration fee.",
        "exampleVi": "Những người tham dự đăng ký trước ngày 1 tháng 8 sẽ được giảm 30% phí đăng ký.",
        "optionsVi": [
          "phí đăng ký tham gia sự kiện",
          "tiền phạt hủy đặt phòng",
          "chi phí mua quà lưu niệm",
          "phí gửi hành lý qua đêm"
        ]
      },
      {
        "id": "toeic_132",
        "word": "banquet",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈbæŋ.kwət/",
        "meaningVi": "bữa tiệc lớn chiêu đãi khách",
        "collocations": "annual banquet, banquet hall, host a banquet",
        "example": "The company awards banquet will be held in the rooftop pavilion on Friday evening.",
        "exampleVi": "Bữa tiệc trao giải của công ty sẽ được tổ chức tại sảnh tầng thượng vào tối thứ Sáu.",
        "optionsVi": [
          "bữa tiệc lớn chiêu đãi khách",
          "phiên thảo luận chuyên đề",
          "cuộc họp khẩn của ban giám đốc",
          "buổi kiểm tra tay nghề"
        ]
      },
      {
        "id": "toeic_133",
        "word": "panel discussion",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈpæn.əl dɪˌskʌʃ.ən/",
        "meaningVi": "phiên thảo luận bàn tròn của chuyên gia",
        "collocations": "participate in a panel discussion, panel discussion on climate, moderate a panel discussion",
        "example": "Industry leaders took part in a lively panel discussion regarding supply chain resilience.",
        "exampleVi": "Các nhà lãnh đạo trong ngành đã tham gia vào một phiên thảo luận bàn tròn sôi nổi về khả năng chống chịu của chuỗi cung ứng.",
        "optionsVi": [
          "phiên thảo luận bàn tròn của chuyên gia",
          "bài kiểm tra trắc nghiệm",
          "buổi biểu diễn văn nghệ",
          "cuộc thanh tra tài chính"
        ]
      },
      {
        "id": "toeic_134",
        "word": "reception",
        "level": "B1",
        "type": "noun",
        "ipa": "/rɪˈsep.ʃən/",
        "meaningVi": "buổi tiệc đón tiếp, sự tiếp đón",
        "collocations": "welcome reception, cocktail reception, reception area",
        "example": "An informal welcome reception is scheduled immediately following the opening remarks.",
        "exampleVi": "Một buổi tiệc đón tiếp thân mật được lên lịch ngay sau phần phát biểu khai mạc.",
        "optionsVi": [
          "buổi tiệc đón tiếp, sự tiếp đón",
          "lễ ký kết hợp đồng",
          "cuộc họp nội bộ kín",
          "kỳ thi nâng bậc lương"
        ]
      },
      {
        "id": "toeic_135",
        "word": "moderator",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈmɑː.də.reɪ.t̬ɚ/",
        "meaningVi": "người điều phối phiên thảo luận",
        "collocations": "session moderator, skilled moderator, act as moderator",
        "example": "The moderator ensured that all panelists had equal opportunity to voice their perspectives.",
        "exampleVi": "Người điều phối đã đảm bảo rằng mọi diễn giả tham gia đều có cơ hội bình đẳng để bày tỏ quan điểm.",
        "optionsVi": [
          "người điều phối phiên thảo luận",
          "khán giả tham gia đặt câu hỏi",
          "người phụ trách ánh sáng",
          "nhân viên in ấn tài liệu"
        ]
      },
      {
        "id": "toeic_136",
        "word": "catering service",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈkeɪ.t̬ɚ.ɪŋ ˈsɜːr.vɪs/",
        "meaningVi": "dịch vụ cung cấp tiệc ăn uống",
        "collocations": "hire a catering service, professional catering service, outdoor catering service",
        "example": "We hired an upscale catering service to provide coffee breaks and a gourmet lunch.",
        "exampleVi": "Chúng tôi đã thuê một dịch vụ tiệc cao cấp để phục vụ các bữa giải lao cà phê và bữa trưa thịnh soạn.",
        "optionsVi": [
          "dịch vụ cung cấp tiệc ăn uống",
          "đơn vị cho thuê máy chiếu",
          "dịch vụ bảo vệ an ninh",
          "công ty thiết kế đồ họa"
        ]
      },
      {
        "id": "toeic_137",
        "word": "symposium",
        "level": "B2",
        "type": "noun",
        "ipa": "/sɪmˈpoʊ.zi.əm/",
        "meaningVi": "hội thảo chuyên đề khoa học/kinh tế",
        "collocations": "annual symposium, attend a symposium, international symposium on",
        "example": "Scholars and executives gathered for a three-day international symposium on renewable energy.",
        "exampleVi": "Các học giả và nhà điều hành đã quy tụ tại hội thảo chuyên đề quốc tế kéo dài 3 ngày về năng lượng tái tạo.",
        "optionsVi": [
          "hội thảo chuyên đề khoa học/kinh tế",
          "chuyến dã ngoại công ty",
          "buổi bán đấu giá từ thiện",
          "triển lãm tranh nghệ thuật"
        ]
      },
      {
        "id": "toeic_138",
        "word": "audio-visual equipment",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌɑː.di.oʊˈvɪʒ.u.əl ɪˈkwɪp.mənt/",
        "meaningVi": "thiết bị nghe nhìn (máy chiếu, micro, loa)",
        "collocations": "state-of-the-art audio-visual equipment, set up audio-visual equipment, test audio-visual equipment",
        "example": "Technicians thoroughly tested the audio-visual equipment before the CEO's keynote presentation.",
        "exampleVi": "Các kỹ thuật viên đã kiểm tra kỹ lưỡng thiết bị nghe nhìn trước bài thuyết trình chính của CEO.",
        "optionsVi": [
          "thiết bị nghe nhìn (máy chiếu, micro, loa)",
          "dụng cụ văn phòng phẩm",
          "bàn ghế tiếp khách",
          "hệ thống phòng cháy chữa cháy"
        ]
      },
      {
        "id": "toeic_139",
        "word": "handout",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈhænd.aʊt/",
        "meaningVi": "tài liệu phát tay cho người nghe",
        "collocations": "distribute handouts, conference handouts, refer to the handout",
        "example": "Please refer to page three of the handout for a breakdown of projected quarterly earnings.",
        "exampleVi": "Vui lòng xem trang ba của tài liệu phát tay để biết chi tiết về lợi nhuận dự kiến hàng quý.",
        "optionsVi": [
          "tài liệu phát tay cho người nghe",
          "tấm vé mời vào cổng",
          "hóa đơn thanh toán tiền phòng",
          "chứng nhận tham gia khóa học"
        ]
      },
      {
        "id": "toeic_140",
        "word": "adjourn",
        "level": "B2",
        "type": "verb",
        "ipa": "/əˈdʒɜːrn/",
        "meaningVi": "tạm hoãn, tạm dừng cuộc họp",
        "collocations": "adjourn the meeting, meeting adjourned until tomorrow, adjourn for lunch",
        "example": "The committee chair decided to adjourn the session until 2:00 PM for lunch.",
        "exampleVi": "Chủ tịch ủy ban đã quyết định tạm dừng phiên họp cho đến 2 giờ chiều để nghỉ ăn trưa.",
        "optionsVi": [
          "tạm hoãn, tạm dừng cuộc họp",
          "bắt đầu phiên chất vấn",
          "bỏ phiếu biểu quyết",
          "mở rộng phòng họp"
        ]
      },
      {
        "id": "toeic_141",
        "word": "plenary session",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈpliː.nə.ri ˈseʃ.ən/",
        "meaningVi": "phiên họp toàn thể hội nghị",
        "collocations": "opening plenary session, attend the plenary session, plenary session address",
        "example": "All conference registrants are expected to be seated before the opening plenary session begins.",
        "exampleVi": "Tất cả người đăng ký tham dự hội nghị cần ngồi vào chỗ trước khi phiên họp toàn thể khai mạc bắt đầu.",
        "optionsVi": [
          "phiên họp toàn thể hội nghị",
          "nhóm thảo luận riêng lẻ",
          "tiệc trà giải lao",
          "phỏng vấn ứng viên tuyển dụng"
        ]
      },
      {
        "id": "toeic_142",
        "word": "commence",
        "level": "B2",
        "type": "verb",
        "ipa": "/kəˈmens/",
        "meaningVi": "bắt đầu, khởi sự phiên họp",
        "collocations": "commence promptly at, scheduled to commence, work will commence",
        "example": "The opening ceremony will commence promptly at 9:00 AM in the Grand Ballroom.",
        "exampleVi": "Lễ khai mạc sẽ bắt đầu đúng 9:00 sáng tại Hội trường lớn Grand Ballroom.",
        "optionsVi": [
          "bắt đầu, khởi sự phiên họp",
          "hoãn lại sang tuần sau",
          "kết thúc sớm hơn dự kiến",
          "chuyển đổi địa điểm tổ chức"
        ]
      },
      {
        "id": "toeic_143",
        "word": "name badge",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈneɪm ˌbædʒ/",
        "meaningVi": "thẻ đeo tên người tham dự",
        "collocations": "wear a name badge, collect name badge, display name badge",
        "example": "For security reasons, all participants must wear their name badge throughout the event.",
        "exampleVi": "Vì lý do an ninh, tất cả người tham gia phải đeo thẻ tên trong suốt thời gian diễn ra sự kiện.",
        "optionsVi": [
          "thẻ đeo tên người tham dự",
          "vé đi tàu điện ngầm",
          "phiếu bốc thăm trúng thưởng",
          "hóa đơn tiền taxi"
        ]
      },
      {
        "id": "toeic_144",
        "word": "networking opportunity",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈnet.wɜːr.kɪŋ ˌɑː.pɚˈtuː.nə.t̬i/",
        "meaningVi": "cơ hội giao lưu, kết nối đối tác",
        "collocations": "provide networking opportunities, valuable networking opportunity, take advantage of networking opportunities",
        "example": "The evening reception provides an invaluable networking opportunity for startup founders and investors.",
        "exampleVi": "Buổi tiệc tối đem lại cơ hội giao lưu kết nối vô cùng quý giá cho các nhà sáng lập khởi nghiệp và các nhà đầu tư.",
        "optionsVi": [
          "cơ hội giao lưu, kết nối đối tác",
          "chương trình giảm giá phòng",
          "bài thi đánh giá kiến thức",
          "thời gian nghỉ phép năm"
        ]
      },
      {
        "id": "toeic_145",
        "word": "postpone",
        "level": "B1",
        "type": "verb",
        "ipa": "/poʊstˈpoʊn/",
        "meaningVi": "trì hoãn, lùi lịch lại",
        "collocations": "postpone a conference, postpone until next month, forced to postpone",
        "example": "Organizers decided to postpone the annual trade expo due to severe weather warnings.",
        "exampleVi": "Ban tổ chức đã quyết định hoãn hội chợ thương mại thường niên do các cảnh báo thời tiết khắc nghiệt.",
        "optionsVi": [
          "trì hoãn, lùi lịch lại",
          "đẩy nhanh tiến độ",
          "hủy bỏ vĩnh viễn",
          "tổ chức đúng lịch trình"
        ]
      },
      {
        "id": "toeic_146",
        "word": "convention center",
        "level": "B1",
        "type": "collocation",
        "ipa": "/kənˈven.ʃən ˌsen.t̬ɚ/",
        "meaningVi": "trung tâm hội nghị triển lãm",
        "collocations": "state convention center, hold at the convention center, adjacent to the convention center",
        "example": "The international motor show will be hosted at the downtown convention center next week.",
        "exampleVi": "Triển lãm ô tô quốc tế sẽ được đăng cai tại trung tâm hội nghị trung tâm thành phố vào tuần tới.",
        "optionsVi": [
          "trung tâm hội nghị triển lãm",
          "trung tâm thể dục thể thao",
          "trạm xe buýt đường dài",
          "bệnh viện đa khoa quốc tế"
        ]
      },
      {
        "id": "toeic_147",
        "word": "conclude",
        "level": "B1",
        "type": "verb",
        "ipa": "/kənˈkluːd/",
        "meaningVi": "bế mạc, kết thúc buổi hội nghị",
        "collocations": "conclude the conference, conclude with a speech, successfully conclude",
        "example": "The two-day seminar will conclude with an awards banquet honoring top sales leaders.",
        "exampleVi": "Hội thảo kéo dài 2 ngày sẽ bế mạc bằng một bữa tiệc trao giải tôn vinh các cá nhân bán hàng xuất sắc nhất.",
        "optionsVi": [
          "bế mạc, kết thúc buổi hội nghị",
          "bắt đầu phát biểu khai mạc",
          "tạm ngừng để ăn trưa",
          "mở màn phiên hỏi đáp"
        ]
      },
      {
        "id": "toeic_148",
        "word": "turnout",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈtɜːrn.aʊt/",
        "meaningVi": "số lượng người đến tham dự sự kiện",
        "collocations": "large turnout, high voter turnout, record turnout",
        "example": "Despite heavy rain, the career fair drew a record turnout of over five thousand job seekers.",
        "exampleVi": "Bất chấp trời mưa lớn, ngày hội việc làm đã thu hút lượng người tham gia kỷ lục với hơn 5.000 người tìm việc.",
        "optionsVi": [
          "số lượng người đến tham dự sự kiện",
          "chi phí in ấn tài liệu",
          "thời lượng bài thuyết trình",
          "số lượng quà tặng phát ra"
        ]
      },
      {
        "id": "toeic_149",
        "word": "rsvp",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˌɑːr.es.viːˈpiː/",
        "meaningVi": "phúc đáp xác nhận có tham dự hay không",
        "collocations": "please RSVP by Friday, RSVP to the invitation, failed to RSVP",
        "example": "Please RSVP by Thursday so that the catering department can finalize the head count.",
        "exampleVi": "Vui lòng phúc đáp trước thứ Năm để bộ phận tiệc có thể chốt số lượng người tham dự.",
        "optionsVi": [
          "phúc đáp xác nhận có tham dự hay không",
          "hủy bỏ lời mời tham dự",
          "chuyển tiếp thư cho người khác",
          "khiếu nại về món ăn"
        ]
      },
      {
        "id": "toeic_150",
        "word": "facilitate",
        "level": "B2",
        "type": "verb",
        "ipa": "/fəˈsɪl.ə.teɪt/",
        "meaningVi": "tạo điều kiện thuận lợi, điều phối trơn tru",
        "collocations": "facilitate discussion, facilitate the process, help facilitate",
        "example": "The workshop facilitator used interactive polls to facilitate constructive discussions among attendees.",
        "exampleVi": "Người điều phối hội thảo đã sử dụng các cuộc bình chọn tương tác để thúc đẩy thảo luận mang tính xây dựng giữa những người tham dự.",
        "optionsVi": [
          "tạo điều kiện thuận lợi, điều phối trơn tru",
          "gây khó khăn cản trở",
          "áp đặt quan điểm cá nhân",
          "kết thúc đột ngột phiên họp"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_facilities",
    "name": "Bất Động Sản, Thuê Văn Phòng & Bảo Trì Cơ Sở",
    "icon": "🏢",
    "category": "toeic",
    "level": "B2",
    "description": "Hợp đồng thuê mặt bằng, tu sửa tòa nhà, trang thiết bị, hóa đơn tiện ích và chuyển địa điểm.",
    "words": [
      {
        "id": "toeic_151",
        "word": "lease agreement",
        "level": "B2",
        "type": "collocation",
        "ipa": "/liːs əˈɡriː.mənt/",
        "meaningVi": "hợp đồng thuê bất động sản/văn phòng",
        "collocations": "sign a lease agreement, commercial lease agreement, terms of the lease agreement",
        "example": "The company signed a five-year lease agreement for three floors in the financial district.",
        "exampleVi": "Công ty đã ký hợp đồng thuê 5 năm cho ba tầng tại khu tài chính.",
        "optionsVi": [
          "hợp đồng thuê bất động sản/văn phòng",
          "hợp đồng bảo hiểm tài sản",
          "giấy phép xây dựng cao ốc",
          "biên bản bàn giao thiết bị"
        ]
      },
      {
        "id": "toeic_152",
        "word": "landlord",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈlænd.lɔːrd/",
        "meaningVi": "chủ nhà, chủ cho thuê mặt bằng",
        "collocations": "commercial landlord, notify the landlord, landlord responsibilities",
        "example": "The landlord agreed to replace the worn carpeting before the new tenant moved in.",
        "exampleVi": "Chủ nhà đã đồng ý thay thế thảm trải sàn đã cũ trước khi người thuê mới chuyển đến.",
        "optionsVi": [
          "chủ nhà, chủ cho thuê mặt bằng",
          "người thuê nhà trọ",
          "nhân viên môi giới địa ốc",
          "thợ sửa điện nước"
        ]
      },
      {
        "id": "toeic_153",
        "word": "tenant",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈten.ənt/",
        "meaningVi": "người thuê nhà, đơn vị thuê văn phòng",
        "collocations": "prospective tenant, commercial tenant, tenant obligations",
        "example": "All commercial tenants must adhere to building recycling regulations.",
        "exampleVi": "Tất cả các đơn vị thuê văn phòng thương mại phải tuân thủ quy định tái chế rác của tòa nhà.",
        "optionsVi": [
          "người thuê nhà, đơn vị thuê văn phòng",
          "chủ sở hữu tòa nhà",
          "nhân viên bảo vệ tòa nhà",
          "người kiểm tra an toàn cháy nổ"
        ]
      },
      {
        "id": "toeic_154",
        "word": "renovation",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌren.əˈveɪ.ʃən/",
        "meaningVi": "việc tu sửa, cải tạo công trình",
        "collocations": "undergo renovation, extensive renovation, building renovation",
        "example": "The headquarters will undergo extensive renovations to improve energy efficiency.",
        "exampleVi": "Trụ sở chính sẽ trải qua đợt tu sửa cải tạo quy mô lớn nhằm nâng cao hiệu quả tiết kiệm năng lượng.",
        "optionsVi": [
          "việc tu sửa, cải tạo công trình",
          "kế hoạch phá bỏ toàn bộ",
          "thủ tục bàn giao sổ đỏ",
          "quy trình giải thể công ty"
        ]
      },
      {
        "id": "toeic_155",
        "word": "premises",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈprem.ə.sɪz/",
        "meaningVi": "mặt bằng, cơ ngơi khu nhà",
        "collocations": "on the premises, vacate the premises, commercial premises",
        "example": "Smoking is strictly prohibited everywhere on the company premises.",
        "exampleVi": "Hút thuốc bị nghiêm cấm ở mọi nơi trong toàn bộ khuôn viên cơ ngơi công ty.",
        "optionsVi": [
          "mặt bằng, cơ ngơi khu nhà",
          "chính sách tiền thưởng",
          "bản phân công ca trực",
          "khoản nợ đến hạn trả"
        ]
      },
      {
        "id": "toeic_156",
        "word": "maintenance crew",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈmeɪn.tən.əns kruː/",
        "meaningVi": "đội thợ bảo trì kỹ thuật",
        "collocations": "dispatch maintenance crew, building maintenance crew, notify maintenance crew",
        "example": "The building maintenance crew repaired the broken elevator within forty-five minutes.",
        "exampleVi": "Đội bảo trì tòa nhà đã sửa chữa thang máy bị hỏng trong vòng 45 phút.",
        "optionsVi": [
          "đội thợ bảo trì kỹ thuật",
          "đội ngũ tiếp tân sảnh",
          "ban giám đốc điều hành",
          "đoàn kiểm tra thuế"
        ]
      },
      {
        "id": "toeic_157",
        "word": "utility bill",
        "level": "B1",
        "type": "collocation",
        "ipa": "/juːˈtɪl.ə.t̬i bɪl/",
        "meaningVi": "hóa đơn tiền điện nước, dịch vụ tiện ích",
        "collocations": "pay utility bills, monthly utility bill, cut utility bills",
        "example": "Switching to LED lighting helped the retail store cut its monthly utility bills by twenty percent.",
        "exampleVi": "Chuyển sang chiếu sáng bằng đèn LED đã giúp cửa hàng bán lẻ cắt giảm 20% hóa đơn điện nước hàng tháng.",
        "optionsVi": [
          "hóa đơn tiền điện nước, dịch vụ tiện ích",
          "bản cam kết bảo hành sản phẩm",
          "hóa đơn tiền ăn khách sạn",
          "phiếu đóng bảo hiểm thất nghiệp"
        ]
      },
      {
        "id": "toeic_158",
        "word": "vacate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈveɪ.keɪt/",
        "meaningVi": "dọn đi, trả lại mặt bằng/phòng",
        "collocations": "vacate the office, required to vacate, vacate by the end of the month",
        "example": "Tenants are required to vacate the suites by the end of the month as the lease has expired.",
        "exampleVi": "Người thuê được yêu cầu phải dọn đi và trả lại phòng vào cuối tháng do hợp đồng thuê đã hết hạn.",
        "optionsVi": [
          "dọn đi, trả lại mặt bằng/phòng",
          "gia hạn thêm thời gian thuê",
          "nâng cấp trang thiết bị",
          "sửa chữa tường bị nứt"
        ]
      },
      {
        "id": "toeic_159",
        "word": "security deposit",
        "level": "B2",
        "type": "collocation",
        "ipa": "/səˈkjʊr.ə.t̬i dɪˌpɑː.zɪt/",
        "meaningVi": "tiền đặt cọc bảo đảm/thuê nhà",
        "collocations": "refundable security deposit, forfeit security deposit, require a security deposit",
        "example": "The two months' security deposit will be fully refunded provided there is no structural damage.",
        "exampleVi": "Khoản tiền đặt cọc 2 tháng sẽ được hoàn trả toàn bộ miễn là không có thiệt hại kết cấu nào.",
        "optionsVi": [
          "tiền đặt cọc bảo đảm/thuê nhà",
          "khoản đóng góp từ thiện",
          "tiền trả trước cho luật sư",
          "khoản phạt đỗ xe trái phép"
        ]
      },
      {
        "id": "toeic_160",
        "word": "relocate",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˌriːˈloʊ.keɪt/",
        "meaningVi": "chuyển địa điểm, di dời trụ sở",
        "collocations": "relocate headquarters, plan to relocate, assist employees to relocate",
        "example": "The software corporation plans to relocate its regional headquarters to Singapore next spring.",
        "exampleVi": "Tập đoàn phần mềm dự định chuyển trụ sở khu vực sang Singapore vào mùa xuân tới.",
        "optionsVi": [
          "chuyển địa điểm, di dời trụ sở",
          "đóng cửa vĩnh viễn chi nhánh",
          "tăng gấp đôi diện tích kho",
          "thay mới dàn máy vi tính"
        ]
      },
      {
        "id": "toeic_161",
        "word": "property manager",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈprɑː.pɚ.t̬i ˈmæn.ə.dʒɚ/",
        "meaningVi": "ban quản lý tòa nhà, người quản lý bất động sản",
        "collocations": "contact the property manager, certified property manager, duties of property manager",
        "example": "If heating problems persist, contact the property manager on the first floor immediately.",
        "exampleVi": "Nếu vấn đề hệ thống sưởi vẫn tiếp diễn, hãy liên hệ ngay với ban quản lý tòa nhà ở tầng một.",
        "optionsVi": [
          "ban quản lý tòa nhà, người quản lý bất động sản",
          "chủ tịch hiệp hội cư dân",
          "nhân viên thu tiền điện thoại",
          "kỹ sư thiết kế nội thất"
        ]
      },
      {
        "id": "toeic_162",
        "word": "spacious",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈspeɪ.ʃəs/",
        "meaningVi": "rộng rãi, thoáng đãng",
        "collocations": "spacious office, bright and spacious, spacious layout",
        "example": "The new open-plan design provides a bright and spacious working environment for employees.",
        "exampleVi": "Thiết kế không gian mở mới mang lại môi trường làm việc sáng sủa và rộng rãi cho nhân viên.",
        "optionsVi": [
          "rộng rãi, thoáng đãng",
          "chật chội và ẩm thấp",
          "tối tăm thiếu ánh sáng",
          "cũ kỹ cần sửa chữa"
        ]
      },
      {
        "id": "toeic_163",
        "word": "wear and tear",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌwer ən ˈter/",
        "meaningVi": "hao mòn tự nhiên do sử dụng lâu ngày",
        "collocations": "normal wear and tear, exempt from wear and tear, signs of wear and tear",
        "example": "Tenants are not financially liable for minor scratches caused by normal everyday wear and tear.",
        "exampleVi": "Người thuê không phải chịu trách nhiệm tài chính cho các vết xước nhỏ do hao mòn tự nhiên hàng ngày gây ra.",
        "optionsVi": [
          "hao mòn tự nhiên do sử dụng lâu ngày",
          "sự cố hỏa hoạn nghiêm trọng",
          "hành vi phá hoại cố ý",
          "sai sót trong khâu lắp đặt"
        ]
      },
      {
        "id": "toeic_164",
        "word": "air conditioning unit",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈer kənˌdɪʃ.ən.ɪŋ ˈjuː.nɪt/",
        "meaningVi": "thiết bị máy điều hòa nhiệt độ",
        "collocations": "install air conditioning unit, service air conditioning unit, central air conditioning unit",
        "example": "A technician will visit this afternoon to inspect the malfunctioning air conditioning unit.",
        "exampleVi": "Một kỹ thuật viên sẽ đến chiều nay để kiểm tra chiếc máy điều hòa nhiệt độ đang bị trục trặc.",
        "optionsVi": [
          "thiết bị máy điều hòa nhiệt độ",
          "hệ thống lọc nước uống",
          "bình chữa cháy tự động",
          "máy quét mã vạch bưu phẩm"
        ]
      },
      {
        "id": "toeic_165",
        "word": "eviction notice",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ɪˈvɪk.ʃən ˌnoʊ.t̬ɪs/",
        "meaningVi": "thông báo trục xuất, thu hồi mặt bằng",
        "collocations": "serve an eviction notice, issue an eviction notice, receive an eviction notice",
        "example": "After three consecutive months of unpaid rent, the commercial tenant was served an eviction notice.",
        "exampleVi": "Sau ba tháng liên tiếp không trả tiền thuê, đơn vị thuê thương mại đã bị gửi thông báo trục xuất thu hồi mặt bằng.",
        "optionsVi": [
          "thông báo trục xuất, thu hồi mặt bằng",
          "giấy mời nhận phòng mới",
          "hóa đơn thanh toán tiền rác",
          "thông báo giảm giá thuê"
        ]
      },
      {
        "id": "toeic_166",
        "word": "furnishings",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈfɜːr.nɪ.ʃɪŋz/",
        "meaningVi": "đồ đạc nội thất trang bị",
        "collocations": "office furnishings, modern furnishings, furnish with ergonomic furnishings",
        "example": "The executive suite was equipped with high-quality ergonomic furnishings.",
        "exampleVi": "Phòng điều hành đã được trang bị đồ nội thất công thái học chất lượng cao.",
        "optionsVi": [
          "đồ đạc nội thất trang bị",
          "thiết bị máy chủ dữ liệu",
          "giấy tờ hợp đồng lưu trữ",
          "hệ thống dây điện âm tường"
        ]
      },
      {
        "id": "toeic_167",
        "word": "plumbing issue",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈplʌm.ɪŋ ˈɪʃ.uː/",
        "meaningVi": "sự cố đường ống cấp thoát nước",
        "collocations": "report a plumbing issue, severe plumbing issue, resolve plumbing issue",
        "example": "A serious plumbing issue on the fifth floor caused temporary water shutdowns across the wing.",
        "exampleVi": "Một sự cố đường ống nước nghiêm trọng ở tầng năm đã gây cắt nước tạm thời trên toàn bộ dãy nhà.",
        "optionsVi": [
          "sự cố đường ống cấp thoát nước",
          "lỗi phần mềm máy tính",
          "cháy nổ bóng đèn chiếu sáng",
          "kẹt khóa cửa ra vào"
        ]
      },
      {
        "id": "toeic_168",
        "word": "adjacent to",
        "level": "B2",
        "type": "collocation",
        "ipa": "/əˈdʒeɪ.sənt tuː/",
        "meaningVi": "liền kề, ngay sát cạnh bên",
        "collocations": "located adjacent to, room adjacent to, parcel of land adjacent to",
        "example": "The newly acquired parking structure is situated directly adjacent to the corporate offices.",
        "exampleVi": "Nhà để xe mới mua nằm ngay sát cạnh các văn phòng công ty.",
        "optionsVi": [
          "liền kề, ngay sát cạnh bên",
          "ở xa tít ngoại thành",
          "đối diện bên kia sông",
          "ở tầng hầm sâu nhất"
        ]
      },
      {
        "id": "toeic_169",
        "word": "occupancy rate",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈɑː.kjə.pən.si reɪt/",
        "meaningVi": "tỷ lệ lấp đầy phòng/diện tích thuê",
        "collocations": "high occupancy rate, 90 percent occupancy rate, improve occupancy rate",
        "example": "Commercial towers in the central business district boast an average occupancy rate of 94 percent.",
        "exampleVi": "Các tòa tháp thương mại ở khu trung tâm kinh doanh tự hào có tỷ lệ lấp đầy trung bình đạt 94%.",
        "optionsVi": [
          "tỷ lệ lấp đầy phòng/diện tích thuê",
          "tỷ lệ phế phẩm sản xuất",
          "mức độ ô nhiễm tiếng ồn",
          "chi phí xây dựng thô"
        ]
      },
      {
        "id": "toeic_170",
        "word": "sublease",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈsʌb.liːs/",
        "meaningVi": "cho thuê lại mặt bằng đã thuê",
        "collocations": "sublease excess space, permission to sublease, sublease agreement",
        "example": "To offset operating costs, the consulting firm decided to sublease their unused fourth floor.",
        "exampleVi": "Để bù đắp chi phí vận hành, công ty tư vấn đã quyết định cho thuê lại tầng bốn chưa sử dụng của họ.",
        "optionsVi": [
          "cho thuê lại mặt bằng đã thuê",
          "bán đứt tòa nhà",
          "phá bỏ công trình cũ",
          "tăng gấp ba tiền đặt cọc"
        ]
      },
      {
        "id": "toeic_171",
        "word": "demolish",
        "level": "B2",
        "type": "verb",
        "ipa": "/dɪˈmɑː.lɪʃ/",
        "meaningVi": "phá dỡ công trình cũ",
        "collocations": "demolish the building, slated to be demolished, demolish to make way for",
        "example": "The condemned warehouse will be demolished next month to make way for a modern logistics hub.",
        "exampleVi": "Nhà kho đã xuống cấp sẽ bị phá dỡ vào tháng tới để nhường chỗ cho một trung tâm logistics hiện đại.",
        "optionsVi": [
          "phá dỡ công trình cũ",
          "tân trang phòng họp",
          "sơn lại mặt tiền",
          "lắp đặt điều hòa mới"
        ]
      },
      {
        "id": "toeic_172",
        "word": "ventilation system",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌven.t̬əlˈeɪ.ʃən ˈsɪs.təm/",
        "meaningVi": "hệ thống thông gió tòa nhà",
        "collocations": "upgraded ventilation system, proper ventilation system, ventilation system filters",
        "example": "Installing a modern ventilation system significantly enhanced indoor air quality for office staff.",
        "exampleVi": "Việc lắp đặt hệ thống thông gió hiện đại đã cải thiện đáng kể chất lượng không khí trong nhà cho nhân viên văn phòng.",
        "optionsVi": [
          "hệ thống thông gió tòa nhà",
          "đường dây internet cáp quang",
          "hệ thống thoát nước mưa",
          "hệ thống thang máy tải trọng lớn"
        ]
      },
      {
        "id": "toeic_173",
        "word": "refurbish",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˌriːˈfɜːr.bɪʃ/",
        "meaningVi": "tân trang, làm mới lại phòng ốc/thiết bị",
        "collocations": "refurbish the cafeteria, completely refurbish, refurbished office suites",
        "example": "The cafeteria was completely refurbished with eco-friendly seating and modern lighting fixtures.",
        "exampleVi": "Căn tin đã được tân trang hoàn toàn với ghế ngồi thân thiện môi trường và hệ thống đèn chiếu sáng hiện đại.",
        "optionsVi": [
          "tân trang, làm mới lại phòng ốc/thiết bị",
          "tháo dỡ bán phế liệu",
          "cho thuê dài hạn",
          "chuyển đổi thành bãi đỗ xe"
        ]
      },
      {
        "id": "toeic_174",
        "word": "amenity",
        "level": "B2",
        "type": "noun",
        "ipa": "/əˈmen.ə.t̬i/",
        "meaningVi": "tiện nghi, dịch vụ tiện ích phục vụ người dùng",
        "collocations": "building amenities, modern amenities, access to amenities",
        "example": "On-site amenities include a fitness center, child-care facility, and subsidized cafeteria.",
        "exampleVi": "Các tiện ích tại chỗ bao gồm phòng tập thể hình, khu trông trẻ và căng tin được trợ giá.",
        "optionsVi": [
          "tiện nghi, dịch vụ tiện ích phục vụ người dùng",
          "khoản nợ quá hạn ngân hàng",
          "nghĩa vụ đóng thuế đất",
          "nội quy kiểm tra an ninh cổng"
        ]
      },
      {
        "id": "toeic_175",
        "word": "zoning regulation",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈzoʊ.nɪŋ ˌreɡ.jəˈleɪ.ʃən/",
        "meaningVi": "quy định phân vùng quy hoạch xây dựng",
        "collocations": "comply with zoning regulations, strict zoning regulations, local zoning regulations",
        "example": "The proposed warehouse expansion was halted due to local municipal zoning regulations.",
        "exampleVi": "Dự án mở rộng kho hàng đề xuất đã bị tạm dừng do các quy định phân vùng quy hoạch của chính quyền địa phương.",
        "optionsVi": [
          "quy định phân vùng quy hoạch xây dựng",
          "chính sách giảm giá bán buôn",
          "hạn mức vay vốn ngân hàng",
          "tiêu chuẩn kiểm nghiệm hóa chất"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_legal",
    "name": "Pháp Lý Doanh Nghiệp, Tuân Thủ & Bảo Hiểm",
    "icon": "⚖️",
    "category": "toeic",
    "level": "B2",
    "description": "Tuân thủ pháp luật, sở hữu trí tuệ, kiện tụng thương mại, tranh chấp bản quyền và hợp đồng bảo hiểm.",
    "words": [
      {
        "id": "toeic_176",
        "word": "comply with",
        "level": "B1",
        "type": "phrasal verb",
        "ipa": "/kəmˈplaɪ wɪð/",
        "meaningVi": "tuân thủ nghiêm ngặt (luật lệ, quy định)",
        "collocations": "comply with regulations, strictly comply with, fail to comply with",
        "example": "All export manufacturing operations must comply with federal environmental regulations.",
        "exampleVi": "Mọi hoạt động sản xuất xuất khẩu phải tuân thủ nghiêm ngặt các quy định môi trường liên bang.",
        "optionsVi": [
          "tuân thủ nghiêm ngặt (luật lệ, quy định)",
          "phớt lờ hướng dẫn an toàn",
          "tự ý thay đổi quy trình",
          "khiếu nại lên cấp trên"
        ]
      },
      {
        "id": "toeic_177",
        "word": "liability insurance",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌlaɪ.əˈbɪl.ə.t̬i ɪnˈʃʊr.əns/",
        "meaningVi": "bảo hiểm trách nhiệm pháp lý (bên thứ ba)",
        "collocations": "carry liability insurance, comprehensive liability insurance, liability insurance coverage",
        "example": "Contractors are required to maintain valid liability insurance prior to commencing construction.",
        "exampleVi": "Các nhà thầu bắt buộc phải duy trì bảo hiểm trách nhiệm pháp lý còn hiệu lực trước khi khởi công xây dựng.",
        "optionsVi": [
          "bảo hiểm trách nhiệm pháp lý (bên thứ ba)",
          "bảo hiểm cháy nổ nhà ở tư nhân",
          "chế độ chi trả trợ cấp ốm đau",
          "quỹ học bổng doanh nghiệp"
        ]
      },
      {
        "id": "toeic_178",
        "word": "intellectual property",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌɪn.t̬əlˈek.tʃu.əl ˈprɑː.pɚ.t̬i/",
        "meaningVi": "tài sản sở hữu trí tuệ",
        "collocations": "protect intellectual property, intellectual property rights, intellectual property law",
        "example": "Protecting corporate intellectual property is vital for maintaining our technological leadership.",
        "exampleVi": "Bảo vệ tài sản sở hữu trí tuệ của doanh nghiệp là yếu tố sống còn để duy trì vị thế dẫn đầu công nghệ.",
        "optionsVi": [
          "tài sản sở hữu trí tuệ",
          "bất động sản công nghiệp",
          "tiền mặt trong tài khoản",
          "máy móc cơ khí trong nhà xưởng"
        ]
      },
      {
        "id": "toeic_179",
        "word": "patent infringement",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈpæt.ənt ɪnˈfrɪndʒ.mənt/",
        "meaningVi": "hành vi vi phạm bằng sáng chế độc quyền",
        "collocations": "accuse of patent infringement, sue for patent infringement, allege patent infringement",
        "example": "The smartphone manufacturer filed a multimillion-dollar lawsuit alleging patent infringement.",
        "exampleVi": "Hãng sản xuất điện thoại thông minh đã đệ đơn kiện hàng triệu USD cáo buộc hành vi vi phạm bằng sáng chế.",
        "optionsVi": [
          "hành vi vi phạm bằng sáng chế độc quyền",
          "thủ tục đăng ký nhãn hiệu",
          "hợp đồng mua bán linh kiện",
          "quy trình cấp phép kinh doanh"
        ]
      },
      {
        "id": "toeic_180",
        "word": "lawsuit",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈlɑː.suːt/",
        "meaningVi": "vụ kiện tụng dân sự/thương mại",
        "collocations": "file a lawsuit, settle a lawsuit, drop a lawsuit",
        "example": "The consumer group filed a class-action lawsuit against the automaker over deceptive emissions claims.",
        "exampleVi": "Nhóm người tiêu dùng đã đệ đơn kiện tập thể chống lại hãng xe hơi vì những tuyên bố phát thải gian dối.",
        "optionsVi": [
          "vụ kiện tụng dân sự/thương mại",
          "buổi họp đối thoại nội bộ",
          "chiến dịch quảng bá bán hàng",
          "thủ tục đổi tên thương hiệu"
        ]
      },
      {
        "id": "toeic_181",
        "word": "litigation",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌlɪt̬.əˈɡeɪ.ʃən/",
        "meaningVi": "việc tranh tụng tại tòa án",
        "collocations": "avoid litigation, ongoing litigation, pending litigation",
        "example": "Corporate leaders preferred an out-of-court settlement rather than risking prolonged public litigation.",
        "exampleVi": "Các nhà lãnh đạo doanh nghiệp ưa chuộng hòa giải ngoài tòa hơn là mạo hiểm với việc tranh tụng công khai kéo dài.",
        "optionsVi": [
          "việc tranh tụng tại tòa án",
          "thủ tục bàn giao sổ sách",
          "kế hoạch tổ chức tiệc cuối năm",
          "chương trình tặng quà tri ân"
        ]
      },
      {
        "id": "toeic_182",
        "word": "regulatory agency",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈreɡ.jə.lə.tɔːr.i ˈeɪ.dʒən.si/",
        "meaningVi": "cơ quan quản lý nhà nước có thẩm quyền",
        "collocations": "federal regulatory agency, comply with regulatory agency, regulatory agency investigation",
        "example": "The pharmaceutical firm submitted safety trial data directly to the national regulatory agency.",
        "exampleVi": "Công ty dược phẩm đã nộp dữ liệu thử nghiệm an toàn trực tiếp lên cơ quan quản lý nhà nước.",
        "optionsVi": [
          "cơ quan quản lý nhà nước có thẩm quyền",
          "công ty tư vấn du học",
          "hội từ thiện tư nhân",
          "đại lý phân phối độc quyền"
        ]
      },
      {
        "id": "toeic_183",
        "word": "confidentiality",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌkɑːn.fə.den.ʃiˈæl.ə.t̬i/",
        "meaningVi": "tính bảo mật, sự giữ kín thông tin",
        "collocations": "maintain confidentiality, breach of confidentiality, strict confidentiality",
        "example": "Consultants are bound by strict confidentiality regarding client financial records.",
        "exampleVi": "Các chuyên gia tư vấn bị ràng buộc bởi sự bảo mật nghiêm ngặt đối với hồ sơ tài chính của khách hàng.",
        "optionsVi": [
          "tính bảo mật, sự giữ kín thông tin",
          "sự công khai minh bạch",
          "quyền phát biểu tự do",
          "tinh thần hợp tác công khai"
        ]
      },
      {
        "id": "toeic_184",
        "word": "settle out of court",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈset̬.əl aʊt əv kɔːrt/",
        "meaningVi": "dàn xếp, hòa giải ngoài tòa án",
        "collocations": "agree to settle out of court, decide to settle out of court, settle out of court for an undisclosed sum",
        "example": "Both corporations agreed to settle out of court for an undisclosed sum to avoid damaging publicity.",
        "exampleVi": "Cả hai tập đoàn đã đồng ý hòa giải ngoài tòa với số tiền không được tiết lộ nhằm tránh ảnh hưởng hình ảnh trước công chúng.",
        "optionsVi": [
          "dàn xếp, hòa giải ngoài tòa án",
          "kháng cáo lên tòa án tối cao",
          "yêu cầu mở phiên tòa xét xử",
          "kêu gọi biểu tình phản đối"
        ]
      },
      {
        "id": "toeic_185",
        "word": "trademark",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈtreɪd.mɑːrk/",
        "meaningVi": "nhãn hiệu đã đăng ký độc quyền",
        "collocations": "registered trademark, trademark infringement, protect a trademark",
        "example": "Unauthorized commercial use of our company logo constitutes trademark infringement.",
        "exampleVi": "Việc sử dụng thương mại trái phép logo công ty chúng tôi cấu thành hành vi vi phạm nhãn hiệu độc quyền.",
        "optionsVi": [
          "nhãn hiệu đã đăng ký độc quyền",
          "sổ cái ghi chép thu chi",
          "chữ ký nháy của giám đốc",
          "giấy phép xây dựng nhà xưởng"
        ]
      },
      {
        "id": "toeic_186",
        "word": "indemnity",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪnˈdem.nə.t̬i/",
        "meaningVi": "sự bảo đảm bồi thường thiệt hại",
        "collocations": "indemnity clause, claim indemnity, provide indemnity",
        "example": "The agreement includes an indemnity clause shielding the distributor against defective part claims.",
        "exampleVi": "Thỏa thuận bao gồm một điều khoản bồi thường bảo vệ nhà phân phối trước các khiếu nại về linh kiện lỗi.",
        "optionsVi": [
          "sự bảo đảm bồi thường thiệt hại",
          "khoản phụ phí giao hàng nhanh",
          "tiền cọc thuê hội trường",
          "chính sách giảm giá bán lẻ"
        ]
      },
      {
        "id": "toeic_187",
        "word": "copyright violation",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈkɑː.pi.raɪt ˌvaɪ.əˈleɪ.ʃən/",
        "meaningVi": "vi phạm bản quyền tác giả",
        "collocations": "guilty of copyright violation, accuse of copyright violation, liable for copyright violation",
        "example": "Using proprietary software code without purchasing a commercial license is a serious copyright violation.",
        "exampleVi": "Sử dụng mã nguồn phần mềm có bản quyền mà không mua giấy phép thương mại là vi phạm bản quyền nghiêm trọng.",
        "optionsVi": [
          "vi phạm bản quyền tác giả",
          "chậm nộp tờ khai thuế",
          "vi phạm nội quy trang phục",
          "đỗ xe sai vị trí quy định"
        ]
      },
      {
        "id": "toeic_188",
        "word": "subpoena",
        "level": "B2",
        "type": "noun",
        "ipa": "/səˈpiː.nə/",
        "meaningVi": "trát đòi hầu tòa, lệnh triệu tập",
        "collocations": "issue a subpoena, comply with a subpoena, serve a subpoena on",
        "example": "The financial controller received a court subpoena to produce all internal accounting records.",
        "exampleVi": "Kiểm soát viên tài chính đã nhận được trát đòi của tòa án yêu cầu xuất trình toàn bộ sổ sách kế toán nội bộ.",
        "optionsVi": [
          "trát đòi hầu tòa, lệnh triệu tập",
          "thư cảm ơn của khách hàng",
          "giấy mời tham dự hội thảo",
          "thông báo trúng tuyển việc làm"
        ]
      },
      {
        "id": "toeic_189",
        "word": "verdict",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈvɜːr.dɪkt/",
        "meaningVi": "phán quyết tuyên án của bồi thẩm đoàn",
        "collocations": "deliver a verdict, reach a verdict, unanimous verdict",
        "example": "After three days of deliberation, the federal jury reached a unanimous verdict in favor of the plaintiff.",
        "exampleVi": "Sau 3 ngày nghị án, bồi thẩm đoàn liên bang đã đạt được phán quyết nhất trí ủng hộ nguyên đơn.",
        "optionsVi": [
          "phán quyết tuyên án của bồi thẩm đoàn",
          "lời khai của nhân chứng",
          "bản cáo trạng của viện kiểm sát",
          "đơn xin hoãn phiên xét xử"
        ]
      },
      {
        "id": "toeic_190",
        "word": "testimony",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈtes.tə.moʊ.ni/",
        "meaningVi": "lời khai nhân chứng trước tòa",
        "collocations": "give testimony, hear testimony, sworn testimony",
        "example": "The former engineer gave sworn testimony confirming that safety concerns were repeatedly ignored.",
        "exampleVi": "Cựu kỹ sư đã đưa ra lời khai có tuyên thệ xác nhận rằng các quan ngại an toàn đã liên tục bị phớt lờ.",
        "optionsVi": [
          "lời khai nhân chứng trước tòa",
          "quyết định thành lập công ty",
          "bản kế hoạch tài chính",
          "bài diễn thuyết khai mạc"
        ]
      },
      {
        "id": "toeic_191",
        "word": "negligence",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈneɡ.lə.dʒəns/",
        "meaningVi": "sự sơ suất, bất cẩn gây hậu quả",
        "collocations": "gross negligence, sue for negligence, result of negligence",
        "example": "The factory operator was held liable for gross negligence after skipping required routine inspections.",
        "exampleVi": "Đơn vị vận hành nhà máy bị quy trách nhiệm do sơ suất nghiêm trọng sau khi bỏ qua các đợt kiểm định định kỳ bắt buộc.",
        "optionsVi": [
          "sự sơ suất, bất cẩn gây hậu quả",
          "tinh thần trách nhiệm cao",
          "sự chu đáo cẩn trọng",
          "khả năng ứng phó linh hoạt"
        ]
      },
      {
        "id": "toeic_192",
        "word": "statute",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈstætʃ.uːt/",
        "meaningVi": "đạo luật ban hành, quy chế",
        "collocations": "under the statute, statute of limitations, federal statute",
        "example": "The lawsuit was dismissed because the statute of limitations had already expired.",
        "exampleVi": "Vụ kiện đã bị bác bỏ do thời hiệu khởi kiện theo đạo luật quy định đã hết hạn.",
        "optionsVi": [
          "đạo luật ban hành, quy chế",
          "bản ghi nhớ tạm thời",
          "nội quy phòng họp",
          "hóa đơn thanh toán thuế"
        ]
      },
      {
        "id": "toeic_193",
        "word": "file a claim",
        "level": "B1",
        "type": "collocation",
        "ipa": "/faɪl ə kleɪm/",
        "meaningVi": "nộp đơn yêu cầu bồi thường bảo hiểm",
        "collocations": "file an insurance claim, file a claim for damages, time limit to file a claim",
        "example": "Policyholders must file an insurance claim within thirty days of the water damage incident.",
        "exampleVi": "Chủ sở hữu hợp đồng bảo hiểm phải nộp đơn yêu cầu bồi thường trong vòng 30 ngày kể từ khi xảy ra sự cố ngập nước.",
        "optionsVi": [
          "nộp đơn yêu cầu bồi thường bảo hiểm",
          "hủy bỏ hợp đồng bảo hiểm",
          "thanh toán phí bảo hiểm năm",
          "chuyển nhượng quyền thừa kế"
        ]
      },
      {
        "id": "toeic_194",
        "word": "premium",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈpriː.mi.əm/",
        "meaningVi": "phí bảo hiểm định kỳ",
        "collocations": "monthly insurance premium, pay premiums, premium increase",
        "example": "Companies with proven safety records typically qualify for discounted insurance premiums.",
        "exampleVi": "Các công ty có thành tích an toàn được chứng minh thường đủ điều kiện hưởng mức phí bảo hiểm ưu đãi.",
        "optionsVi": [
          "phí bảo hiểm định kỳ",
          "tiền phạt do vi phạm giao thông",
          "khoản bồi thường bảo hiểm chi trả",
          "thuế thu nhập doanh nghiệp"
        ]
      },
      {
        "id": "toeic_195",
        "word": "deductible",
        "level": "B2",
        "type": "noun",
        "ipa": "/dɪˈdʌk.tə.bəl/",
        "meaningVi": "mức miễn bồi (khoản tiền tự chi trả trước)",
        "collocations": "high deductible, pay the deductible, insurance deductible of $500",
        "example": "The commercial policy features a $1,000 deductible before medical coverage takes effect.",
        "exampleVi": "Hợp đồng thương mại quy định mức miễn bồi 1.000 USD trước khi bảo hiểm y tế bắt đầu chi trả.",
        "optionsVi": [
          "mức miễn bồi (khoản tiền tự chi trả trước)",
          "tổng mức chi trả tối đa",
          "tiền hoa hồng đại lý",
          "khoản lãi suất chậm trả"
        ]
      },
      {
        "id": "toeic_196",
        "word": "policyholder",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈpɑː.lə.siˌhoʊl.dɚ/",
        "meaningVi": "chủ hợp đồng bảo hiểm",
        "collocations": "notify policyholders, protect policyholders, policyholder rights",
        "example": "The insurer sent written notices to all policyholders detailing updates to coverage limits.",
        "exampleVi": "Hãng bảo hiểm đã gửi thông báo bằng văn bản tới tất cả các chủ hợp đồng để nêu chi tiết những cập nhật về hạn mức bảo hiểm.",
        "optionsVi": [
          "chủ hợp đồng bảo hiểm",
          "đại lý môi giới bảo hiểm",
          "chuyên viên giám định tổn thất",
          "bác sĩ chỉ định điều trị"
        ]
      },
      {
        "id": "toeic_197",
        "word": "legal counsel",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈliː.ɡəl ˈkaʊn.səl/",
        "meaningVi": "cố vấn pháp lý, luật sư doanh nghiệp",
        "collocations": "seek legal counsel, consult with legal counsel, retain legal counsel",
        "example": "Before finalizing any international merger, executives should consult experienced legal counsel.",
        "exampleVi": "Trước khi hoàn tất bất kỳ thương vụ sáp nhập quốc tế nào, các nhà điều hành nên tham vấn cố vấn pháp lý giàu kinh nghiệm.",
        "optionsVi": [
          "cố vấn pháp lý, luật sư doanh nghiệp",
          "kế toán viên thuế",
          "chuyên gia quan hệ công chúng",
          "giám đốc kinh doanh vùng"
        ]
      },
      {
        "id": "toeic_198",
        "word": "jurisdiction",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌdʒʊr.ɪsˈdɪk.ʃən/",
        "meaningVi": "quyền tài phán, thẩm quyền pháp lý",
        "collocations": "under the jurisdiction of, fall outside the jurisdiction, legal jurisdiction",
        "example": "Cross-border e-commerce disputes fall under the jurisdiction of the international trade commission.",
        "exampleVi": "Các tranh chấp thương mại điện tử xuyên biên giới thuộc thẩm quyền pháp lý của ủy ban thương mại quốc tế.",
        "optionsVi": [
          "quyền tài phán, thẩm quyền pháp lý",
          "khoản chi tiêu công cộng",
          "quy trình tuyển dụng nhân tài",
          "thời hạn bảo hành thiết bị"
        ]
      },
      {
        "id": "toeic_199",
        "word": "non-compliance penalty",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌnɑːn kəmˈplaɪ.əns ˈpen.əl.t̬i/",
        "meaningVi": "tiền phạt do không tuân thủ quy định",
        "collocations": "face non-compliance penalties, avoid non-compliance penalties, severe non-compliance penalty",
        "example": "Firms that fail to audit their workplace safety face severe non-compliance penalties from regulators.",
        "exampleVi": "Những công ty không kiểm tra an toàn lao động sẽ phải đối mặt với mức phạt không tuân thủ nghiêm khắc từ cơ quan chức năng.",
        "optionsVi": [
          "tiền phạt do không tuân thủ quy định",
          "khoản hoàn thuế giá trị gia tăng",
          "tiền thưởng hoàn thành nhiệm vụ",
          "khoản trợ cấp di dời cơ sở"
        ]
      },
      {
        "id": "toeic_200",
        "word": "binding verdict",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈbaɪn.dɪŋ ˈvɜːr.dɪkt/",
        "meaningVi": "phán quyết có hiệu lực bắt buộc thi hành",
        "collocations": "issue a binding verdict, subject to a binding verdict, accept the binding verdict",
        "example": "Both corporations signed an agreement pledging to honor the arbitrator's binding verdict.",
        "exampleVi": "Cả hai tập đoàn đã ký thỏa thuận cam kết tôn trọng phán quyết mang tính bắt buộc thi hành của trọng tài.",
        "optionsVi": [
          "phán quyết có hiệu lực bắt buộc thi hành",
          "ý kiến tư vấn tham khảo",
          "thông cáo báo chí sơ bộ",
          "biên bản họp hòa giải nội bộ"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_travel",
    "name": "Công Tác, Đặt Vé & Dịch Vụ Khách Sạn",
    "icon": "✈️",
    "category": "toeic",
    "level": "B1",
    "description": "Lịch trình công tác, vé máy bay, thủ tục khách sạn, bồi hoàn chi phí và dịch vụ di chuyển.",
    "words": [
      {
        "id": "toeic_201",
        "word": "itinerary",
        "level": "B1",
        "type": "noun",
        "ipa": "/aɪˈtɪn.ə.rer.i/",
        "meaningVi": "lịch trình chuyến đi công tác chi tiết",
        "collocations": "travel itinerary, detailed itinerary, itinerary includes",
        "example": "The executive assistant prepared a detailed itinerary for the CEO's five-city European tour.",
        "exampleVi": "Trợ lý điều hành đã chuẩn bị một lịch trình chi tiết cho chuyến công du châu Âu qua 5 thành phố của CEO.",
        "optionsVi": [
          "lịch trình chuyến đi công tác chi tiết",
          "hóa đơn thanh toán phòng",
          "hộ chiếu công vụ",
          "thẻ bảo hiểm y tế quốc tế"
        ]
      },
      {
        "id": "toeic_202",
        "word": "per diem",
        "level": "B2",
        "type": "noun",
        "ipa": "/pɜːr ˈdiː.em/",
        "meaningVi": "công tác phí hàng ngày",
        "collocations": "per diem allowance, receive a per diem, daily per diem rate",
        "example": "Employees sent on overseas assignments receive a sixty-dollar daily per diem for meals.",
        "exampleVi": "Nhân viên được cử đi công tác nước ngoài nhận được khoản công tác phí hàng ngày 60 USD cho tiền ăn uống.",
        "optionsVi": [
          "công tác phí hàng ngày",
          "tiền thưởng theo quý",
          "khoản đóng bảo hiểm thất nghiệp",
          "chi phí mua sắm đồng phục"
        ]
      },
      {
        "id": "toeic_203",
        "word": "boarding pass",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈbɔːr.dɪŋ ˌpæs/",
        "meaningVi": "thẻ lên máy bay",
        "collocations": "print boarding pass, mobile boarding pass, show your boarding pass",
        "example": "Passengers can download their mobile boarding pass onto their smartphones after checking in online.",
        "exampleVi": "Hành khách có thể tải thẻ lên máy bay di động về điện thoại sau khi làm thủ tục trực tuyến.",
        "optionsVi": [
          "thẻ lên máy bay",
          "thẻ tín dụng doanh nghiệp",
          "giấy phép nhập cảnh",
          "phiếu nhận hành lý ký gửi"
        ]
      },
      {
        "id": "toeic_204",
        "word": "layover",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈleɪˌoʊ.vɚ/",
        "meaningVi": "thời gian quá cảnh, dừng nối chuyến",
        "collocations": "three-hour layover, layover in Tokyo, long layover",
        "example": "Our flight to London included a convenient two-hour layover at Frankfurt Airport.",
        "exampleVi": "Chuyến bay của chúng tôi tới London có một chặng quá cảnh thuận tiện kéo dài 2 giờ tại sân bay Frankfurt.",
        "optionsVi": [
          "thời gian quá cảnh, dừng nối chuyến",
          "thời gian chờ lấy hành lý",
          "lịch hoãn chuyến bay vì bão",
          "quãng đường bay thẳng"
        ]
      },
      {
        "id": "toeic_205",
        "word": "carry-on luggage",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈker.i.ɑːn ˈlʌɡ.ɪdʒ/",
        "meaningVi": "hành lý xách tay",
        "collocations": "carry-on luggage restrictions, fit in carry-on luggage, carry-on luggage size",
        "example": "Please ensure your carry-on luggage fits within the dimensions allowed in the overhead bin.",
        "exampleVi": "Vui lòng đảm bảo hành lý xách tay của bạn vừa với kích thước cho phép trong ngăn để đồ phía trên.",
        "optionsVi": [
          "hành lý xách tay",
          "hành lý ký gửi quá cước",
          "hàng hóa cấm vận chuyển",
          "bưu kiện gửi chuyển phát nhanh"
        ]
      },
      {
        "id": "toeic_206",
        "word": "concierge",
        "level": "B2",
        "type": "noun",
        "ipa": "/kɑːn.siˈerʒ/",
        "meaningVi": "nhân viên hỗ trợ thông tin khách hàng ở khách sạn",
        "collocations": "hotel concierge, ask the concierge, concierge desk",
        "example": "The hotel concierge assisted the delegation with dinner reservations and limousine rentals.",
        "exampleVi": "Nhân viên hỗ trợ khách sạn đã giúp đỡ phái đoàn đặt bàn ăn tối và thuê xe limousine.",
        "optionsVi": [
          "nhân viên hỗ trợ thông tin khách hàng ở khách sạn",
          "đầu bếp trưởng nhà hàng",
          "nhân viên dọn phòng khách sạn",
          "người quản lý tài chính công ty"
        ]
      },
      {
        "id": "toeic_207",
        "word": "complimentary breakfast",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˌkɑːm.pləˈmen.t̬ɚ.i ˈbrek.fəst/",
        "meaningVi": "bữa sáng miễn phí kèm theo phòng",
        "collocations": "enjoy complimentary breakfast, complimentary breakfast buffet, includes complimentary breakfast",
        "example": "All guest room reservations include a complimentary breakfast buffet served from 6:30 to 10:00 AM.",
        "exampleVi": "Mọi đặt phòng nghỉ đều bao gồm bữa sáng buffet miễn phí được phục vụ từ 6:30 đến 10:00 sáng.",
        "optionsVi": [
          "bữa sáng miễn phí kèm theo phòng",
          "bữa trưa thương gia trả phí",
          "tiệc tối tính thêm tiền",
          "thực đơn ăn kiêng đặc biệt"
        ]
      },
      {
        "id": "toeic_208",
        "word": "check-in counter",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈtʃek.ɪn ˌkaʊn.t̬ɚ/",
        "meaningVi": "quầy làm thủ tục nhận phòng/vé",
        "collocations": "approach check-in counter, airline check-in counter, hotel check-in counter",
        "example": "Business class passengers may proceed directly to the priority check-in counter.",
        "exampleVi": "Hành khách hạng thương gia có thể đi thẳng tới quầy làm thủ tục ưu tiên.",
        "optionsVi": [
          "quầy làm thủ tục nhận phòng/vé",
          "quầy đổi ngoại tệ",
          "cửa soi chiếu an ninh",
          "khu vực nhận lại hành lý"
        ]
      },
      {
        "id": "toeic_209",
        "word": "reservation confirmation",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˌrez.ɚˈveɪ.ʃən ˌkɑːn.fɚˈmeɪ.ʃən/",
        "meaningVi": "giấy/mã xác nhận đặt chỗ trước",
        "collocations": "show reservation confirmation, receive reservation confirmation, reservation confirmation number",
        "example": "Please present your reservation confirmation number upon arrival at the hotel reception.",
        "exampleVi": "Vui lòng xuất trình mã xác nhận đặt phòng khi đến quầy lễ tân khách sạn.",
        "optionsVi": [
          "giấy/mã xác nhận đặt chỗ trước",
          "hóa đơn thanh toán thuế",
          "giấy chứng nhận lưu trú tạm thời",
          "phiếu đánh giá chất lượng dịch vụ"
        ]
      },
      {
        "id": "toeic_210",
        "word": "reimbursement claim",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌriː.ɪmˈbɜːrs.mənt kleɪm/",
        "meaningVi": "đơn yêu cầu hoàn trả chi phí công tác",
        "collocations": "submit reimbursement claim, approve reimbursement claim, reimbursement claim form",
        "example": "Remember to attach all itemized receipts when submitting your travel reimbursement claim.",
        "exampleVi": "Hãy nhớ đính kèm toàn bộ hóa đơn chi tiết khi nộp đơn yêu cầu thanh toán chi phí đi lại.",
        "optionsVi": [
          "đơn yêu cầu hoàn trả chi phí công tác",
          "đơn xin nghỉ phép không lương",
          "phiếu đề xuất tăng lương",
          "giấy báo nợ ngân hàng"
        ]
      },
      {
        "id": "toeic_211",
        "word": "flight cancellation",
        "level": "B1",
        "type": "collocation",
        "ipa": "/flaɪt ˌkæn.səlˈeɪ.ʃən/",
        "meaningVi": "việc hủy chuyến bay",
        "collocations": "due to flight cancellation, compensate for flight cancellation, sudden flight cancellation",
        "example": "Passengers affected by the sudden flight cancellation were rebooked onto the next morning's flight.",
        "exampleVi": "Hành khách bị ảnh hưởng bởi việc hủy chuyến bay đột xuất đã được xếp chỗ lại sang chuyến bay sáng hôm sau.",
        "optionsVi": [
          "việc hủy chuyến bay",
          "thủ tục đổi chỗ ngồi",
          "dịch vụ nâng hạng vé",
          "thông báo hạ cánh an toàn"
        ]
      },
      {
        "id": "toeic_212",
        "word": "frequent flyer miles",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌfriː.kwənt ˈflaɪ.ɚ maɪlz/",
        "meaningVi": "điểm dặm bay tích lũy dành cho khách quen",
        "collocations": "redeem frequent flyer miles, earn frequent flyer miles, frequent flyer miles program",
        "example": "Business consultants often accumulate enough frequent flyer miles to earn complimentary upgrades.",
        "exampleVi": "Các chuyên viên tư vấn kinh doanh thường tích lũy đủ dặm bay khách quen để được nâng hạng ghế miễn phí.",
        "optionsVi": [
          "điểm dặm bay tích lũy dành cho khách quen",
          "khoản phí bảo hiểm hành lý",
          "tiền phụ phí nhiên liệu",
          "hạn mức chi tiêu thẻ ngân hàng"
        ]
      },
      {
        "id": "toeic_213",
        "word": "shuttle service",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈʃʌt̬.əl ˈsɜːr.vɪs/",
        "meaningVi": "tuyến xe buýt đưa đón chặng ngắn (sân bay - khách sạn)",
        "collocations": "complimentary shuttle service, airport shuttle service, hotel operates a shuttle service",
        "example": "The resort provides a complimentary shuttle service operating between the terminal and hotel lobby.",
        "exampleVi": "Khu nghỉ dưỡng cung cấp dịch vụ xe đưa đón miễn phí chạy giữa nhà ga sân bay và sảnh khách sạn.",
        "optionsVi": [
          "tuyến xe buýt đưa đón chặng ngắn (sân bay - khách sạn)",
          "chuyến tàu hỏa liên tỉnh",
          "dịch vụ thuê trực thăng riêng",
          "tuyến phà chở khách qua sông"
        ]
      },
      {
        "id": "toeic_214",
        "word": "jet lag",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈdʒet ˌlæɡ/",
        "meaningVi": "cảm giác mệt mỏi do lệch múi giờ",
        "collocations": "suffer from jet lag, overcome jet lag, severe jet lag",
        "example": "To minimize jet lag, the delegates arrived a day ahead of the international conference.",
        "exampleVi": "Để giảm thiểu cảm giác mệt mỏi do lệch múi giờ, các đại biểu đã đến trước một ngày diễn ra hội nghị quốc tế.",
        "optionsVi": [
          "cảm giác mệt mỏi do lệch múi giờ",
          "say sóng khi đi tàu thủy",
          "dị ứng đồ ăn khách sạn",
          "cảm giác lo sợ khi máy bay cất cánh"
        ]
      },
      {
        "id": "toeic_215",
        "word": "customs declaration",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈkʌs.təmz ˌdek.ləˈreɪ.ʃən/",
        "meaningVi": "tờ khai hải quan nhập cảnh",
        "collocations": "fill out customs declaration, customs declaration form, submit customs declaration",
        "example": "International travelers must complete a customs declaration form before clearing border inspection.",
        "exampleVi": "Khách du lịch quốc tế phải điền vào tờ khai hải quan trước khi qua cửa kiểm tra biên giới.",
        "optionsVi": [
          "tờ khai hải quan nhập cảnh",
          "phiếu khảo sát dịch vụ chuyến bay",
          "giấy chứng nhận tiêm chủng",
          "hợp đồng bảo hiểm du lịch"
        ]
      },
      {
        "id": "toeic_216",
        "word": "baggage allowance",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈbæɡ.ɪdʒ əˌlaʊ.əns/",
        "meaningVi": "định mức hành lý miễn cước được phép mang",
        "collocations": "exceed baggage allowance, checked baggage allowance, generous baggage allowance",
        "example": "Each passenger in economy class is permitted a checked baggage allowance of twenty-three kilograms.",
        "exampleVi": "Mỗi hành khách ở hạng phổ thông được hưởng định mức hành lý ký gửi là 23 kg.",
        "optionsVi": [
          "định mức hành lý miễn cước được phép mang",
          "chi phí lưu kho hành lý qua đêm",
          "tiền bồi thường hành lý thất lạc",
          "khoản phạt mang chất lỏng"
        ]
      },
      {
        "id": "toeic_217",
        "word": "travel agency",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈtræv.əl ˈeɪ.dʒən.si/",
        "meaningVi": "đại lý dịch vụ lữ hành, công ty du lịch",
        "collocations": "book through a travel agency, corporate travel agency, licensed travel agency",
        "example": "Our corporate travel agency managed all airline reservations and hotel accommodations.",
        "exampleVi": "Đại lý du lịch của công ty chúng tôi đã điều phối toàn bộ việc đặt vé máy bay và phòng khách sạn.",
        "optionsVi": [
          "đại lý dịch vụ lữ hành, công ty du lịch",
          "công ty bảo hiểm y tế",
          "trung tâm dịch vụ khách hàng",
          "hãng taxi công nghệ"
        ]
      },
      {
        "id": "toeic_218",
        "word": "deluxe suite",
        "level": "B1",
        "type": "collocation",
        "ipa": "/dɪˈlʌks swiːt/",
        "meaningVi": "phòng khách sạn cao cấp hạng sang",
        "collocations": "book a deluxe suite, upgrade to deluxe suite, deluxe suite with ocean view",
        "example": "Visiting executives were accommodated in deluxe suites overlooking the city harbor.",
        "exampleVi": "Các lãnh đạo đến thăm được sắp xếp nghỉ tại các phòng hạng sang nhìn ra bến cảng thành phố.",
        "optionsVi": [
          "phòng khách sạn cao cấp hạng sang",
          "phòng họp tiêu chuẩn nhỏ",
          "phòng chờ sân bay công cộng",
          "khu vực phục vụ giặt là"
        ]
      },
      {
        "id": "toeic_219",
        "word": "express checkout",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ɪkˈspres ˈtʃek.aʊt/",
        "meaningVi": "dịch vụ trả phòng khách sạn nhanh",
        "collocations": "use express checkout, express checkout service, drop key for express checkout",
        "example": "Guests in a rush can take advantage of express checkout by leaving their room keys in the lobby drop box.",
        "exampleVi": "Khách đang vội có thể sử dụng dịch vụ trả phòng nhanh bằng cách thả chìa khóa phòng vào hộp nhận ở sảnh.",
        "optionsVi": [
          "dịch vụ trả phòng khách sạn nhanh",
          "quầy làm thủ tục nhận phòng vip",
          "dịch vụ gọi xe khẩn cấp",
          "thủ tục đăng ký tạm trú"
        ]
      },
      {
        "id": "toeic_220",
        "word": "currency exchange",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈkɝː.ən.si ɪksˌtʃeɪndʒ/",
        "meaningVi": "dịch vụ đổi ngoại tệ",
        "collocations": "currency exchange booth, currency exchange rate, favorable currency exchange",
        "example": "You can find several currency exchange booths located just outside the international arrivals hall.",
        "exampleVi": "Bạn có thể tìm thấy một vài quầy đổi ngoại tệ nằm ngay bên ngoài sảnh đến quốc tế.",
        "optionsVi": [
          "dịch vụ đổi ngoại tệ",
          "cây rút tiền atm nội địa",
          "quầy hoàn thuế mua sắm",
          "văn phòng công chứng hộ chiếu"
        ]
      },
      {
        "id": "toeic_221",
        "word": "passport validity",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈpæs.pɔːrt vəˈlɪd.ə.t̬i/",
        "meaningVi": "thời hạn còn hiệu lực của hộ chiếu",
        "collocations": "check passport validity, six months passport validity, maintain passport validity",
        "example": "Most international destinations require at least six months of passport validity beyond the travel dates.",
        "exampleVi": "Hầu hết các điểm đến quốc tế đều yêu cầu hộ chiếu phải còn hạn ít nhất sáu tháng sau ngày đi lại.",
        "optionsVi": [
          "thời hạn còn hiệu lực của hộ chiếu",
          "phí làm lại hộ chiếu bị mất",
          "số trang thị thực còn trống",
          "thông tin nơi sinh của đương đơn"
        ]
      },
      {
        "id": "toeic_222",
        "word": "car rental",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈkɑːr ˌren.t̬əl/",
        "meaningVi": "dịch vụ thuê xe ô tô tự lái",
        "collocations": "car rental agency, reserve a car rental, car rental insurance",
        "example": "The sales team reserved an SUV through a local car rental agency for their client visits.",
        "exampleVi": "Đội ngũ kinh doanh đã đặt thuê một chiếc xe SUV qua đại lý cho thuê xe địa phương để đi gặp khách hàng.",
        "optionsVi": [
          "dịch vụ thuê xe ô tô tự lái",
          "bến xe khách liên tỉnh",
          "trạm bảo dưỡng xe ô tô",
          "bãi trông giữ xe ngày đêm"
        ]
      },
      {
        "id": "toeic_223",
        "word": "delayed flight",
        "level": "B1",
        "type": "collocation",
        "ipa": "/dɪˈleɪd flaɪt/",
        "meaningVi": "chuyến bay bị hoãn giờ cất cánh",
        "collocations": "compensation for delayed flight, severely delayed flight, announce a delayed flight",
        "example": "Due to mechanical inspection, the delayed flight departed three hours behind schedule.",
        "exampleVi": "Do kiểm tra kỹ thuật, chuyến bay bị hoãn đã cất cánh chậm 3 tiếng so với lịch trình.",
        "optionsVi": [
          "chuyến bay bị hoãn giờ cất cánh",
          "chuyến bay bị hủy hoàn toàn",
          "chuyến bay hạ cánh khẩn cấp",
          "chuyến bay cất cánh sớm"
        ]
      },
      {
        "id": "toeic_224",
        "word": "travel expense receipt",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈtræv.əl ɪkˈspens rɪˌsiːt/",
        "meaningVi": "hóa đơn biên lai chi phí đi lại",
        "collocations": "keep travel expense receipts, submit travel expense receipt, original travel expense receipt",
        "example": "The finance office requires original travel expense receipts for all meals and ground transportation.",
        "exampleVi": "Phòng tài chính yêu cầu biên lai chi phí đi lại gốc cho tất cả các bữa ăn và phương tiện di chuyển mặt đất.",
        "optionsVi": [
          "hóa đơn biên lai chi phí đi lại",
          "giấy xác nhận của khách sạn",
          "thẻ bảo hiểm du lịch toàn cầu",
          "tờ khai nhập cảnh biên giới"
        ]
      },
      {
        "id": "toeic_225",
        "word": "commute",
        "level": "B1",
        "type": "verb",
        "ipa": "/kəˈmjuːt/",
        "meaningVi": "đi lại hàng ngày giữa nhà và nơi làm việc",
        "collocations": "commute by train, daily commute, long commute",
        "example": "Many employees commute to the downtown headquarters using the high-speed commuter rail.",
        "exampleVi": "Nhiều nhân viên đi lại hàng ngày tới trụ sở trung tâm bằng tuyến tàu điện cao tốc.",
        "optionsVi": [
          "đi lại hàng ngày giữa nhà và nơi làm việc",
          "đi công tác dài ngày ở nước ngoài",
          "chuyển nhà đến thành phố khác",
          "nghỉ phép dưỡng bệnh tại gia"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_strategy",
    "name": "Chiến Lược Doanh Nghiệp, M&A & Mở Rộng Thị Trường",
    "icon": "📈",
    "category": "toeic",
    "level": "B2",
    "description": "Sáp nhập & mua lại, liên doanh, tái cấu trúc tổ chức, đại hội cổ đông và lợi thế cạnh tranh.",
    "words": [
      {
        "id": "toeic_226",
        "word": "merger and acquisition",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈmɜːr.dʒɚ ænd ˌæk.wəˈzɪʃ.ən/",
        "meaningVi": "sáp nhập và mua lại doanh nghiệp (M&A)",
        "collocations": "merger and acquisition deal, advise on merger and acquisition, oversee merger and acquisition",
        "example": "The telecom conglomerate finalized a multibillion-dollar merger and acquisition agreement yesterday.",
        "exampleVi": "Tập đoàn viễn thông đã hoàn tất thỏa thuận sáp nhập và mua lại trị giá hàng tỷ USD vào ngày hôm qua.",
        "optionsVi": [
          "sáp nhập và mua lại doanh nghiệp (M&A)",
          "kế hoạch giải thể công ty con",
          "chương trình thoái vốn nhà nước",
          "chiến dịch tiếp thị đại trà"
        ]
      },
      {
        "id": "toeic_227",
        "word": "joint venture",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌdʒɔɪnt ˈven.tʃɚ/",
        "meaningVi": "công ty liên doanh liên kết",
        "collocations": "form a joint venture, 50-50 joint venture, successful joint venture",
        "example": "The two automakers formed a joint venture to co-develop next-generation electric vehicle batteries.",
        "exampleVi": "Hai hãng sản xuất ô tô đã thành lập một liên doanh để cùng phát triển pin xe điện thế hệ tiếp theo.",
        "optionsVi": [
          "công ty liên doanh liên kết",
          "công ty con sở hữu 100% vốn",
          "doanh nghiệp tư nhân một thành viên",
          "tổ chức phi chính phủ độc lập"
        ]
      },
      {
        "id": "toeic_228",
        "word": "subsidiary",
        "level": "B2",
        "type": "noun",
        "ipa": "/səbˈsɪd.i.er.i/",
        "meaningVi": "công ty con trực thuộc tập đoàn",
        "collocations": "wholly-owned subsidiary, overseas subsidiary, operate as a subsidiary",
        "example": "The Japanese electronics manufacturer established a wholly-owned manufacturing subsidiary in Vietnam.",
        "exampleVi": "Nhà sản xuất điện tử Nhật Bản đã thành lập một công ty con sản xuất 100% vốn tại Việt Nam.",
        "optionsVi": [
          "công ty con trực thuộc tập đoàn",
          "tập đoàn mẹ ở nước ngoài",
          "đơn vị kiểm toán độc lập",
          "đại lý bán lẻ ủy quyền"
        ]
      },
      {
        "id": "toeic_229",
        "word": "parent company",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈper.ənt ˌkʌm.pə.ni/",
        "meaningVi": "công ty mẹ",
        "collocations": "parent company guarantees, owned by parent company, parent company headquarters",
        "example": "All major financial decisions must be approved by the parent company's board of directors.",
        "exampleVi": "Mọi quyết định tài chính lớn đều phải được hội đồng quản trị của công ty mẹ phê duyệt.",
        "optionsVi": [
          "công ty mẹ",
          "chi nhánh bán lẻ",
          "công ty liên kết cấp 2",
          "đối thủ cạnh tranh trực tiếp"
        ]
      },
      {
        "id": "toeic_230",
        "word": "feasibility study",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌfiː.zəˈbɪl.ə.t̬i ˈstʌd.i/",
        "meaningVi": "nghiên cứu tính khả thi của dự án",
        "collocations": "conduct a feasibility study, comprehensive feasibility study, feasibility study reveals",
        "example": "Before committing funds, developers conducted a rigorous feasibility study on the solar farm project.",
        "exampleVi": "Trước khi giải ngân vốn, các chủ đầu tư đã tiến hành nghiên cứu tính khả thi nghiêm ngặt cho dự án trang trại điện mặt trời.",
        "optionsVi": [
          "nghiên cứu tính khả thi của dự án",
          "báo cáo quyết toán thuế năm",
          "bản thảo hợp đồng lao động",
          "biên bản thanh tra chất lượng"
        ]
      },
      {
        "id": "toeic_231",
        "word": "restructure",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˌriːˈstrʌk.tʃɚ/",
        "meaningVi": "tái cơ cấu bộ máy tổ chức",
        "collocations": "restructure corporate debt, plan to restructure, restructure operations",
        "example": "The executive committee voted to restructure operations by merging three regional sales offices.",
        "exampleVi": "Ủy ban điều hành đã bỏ phiếu tái cơ cấu hoạt động bằng việc sáp nhập ba văn phòng kinh doanh khu vực.",
        "optionsVi": [
          "tái cơ cấu bộ máy tổ chức",
          "mở rộng thêm nhân sự",
          "giữ nguyên mô hình cũ",
          "bán thanh lý trụ sở chính"
        ]
      },
      {
        "id": "toeic_232",
        "word": "stakeholder",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈsteɪkˌhoʊl.dɚ/",
        "meaningVi": "các bên liên quan trực tiếp đến lợi ích dự án",
        "collocations": "key stakeholders, stakeholder meeting, consult stakeholders",
        "example": "Company leadership scheduled town hall meetings to consult key stakeholders regarding the planned expansion.",
        "exampleVi": "Ban lãnh đạo công ty đã lên lịch các buổi họp công khai để tham vấn các bên liên quan trọng yếu về kế hoạch mở rộng.",
        "optionsVi": [
          "các bên liên quan trực tiếp đến lợi ích dự án",
          "nhân viên thời vụ bán thời gian",
          "khách hàng mua thử lần đầu",
          "đơn vị dọn dẹp vệ sinh"
        ]
      },
      {
        "id": "toeic_233",
        "word": "diversify",
        "level": "B2",
        "type": "verb",
        "ipa": "/daɪˈvɝː.sə.faɪ/",
        "meaningVi": "đa dạng hóa danh mục sản phẩm/đầu tư",
        "collocations": "diversify product lines, diversify investments, strategy to diversify",
        "example": "To mitigate revenue risks, the agribusiness diversified its offerings into packaged organic snacks.",
        "exampleVi": "Để giảm thiểu rủi ro doanh thu, doanh nghiệp nông nghiệp đã đa dạng hóa các sản phẩm sang đồ ăn nhẹ hữu cơ đóng gói.",
        "optionsVi": [
          "đa dạng hóa danh mục sản phẩm/đầu tư",
          "thu hẹp quy mô sản xuất",
          "tập trung vào một sản phẩm duy nhất",
          "ngừng toàn bộ dây chuyền đóng gói"
        ]
      },
      {
        "id": "toeic_234",
        "word": "strategic alliance",
        "level": "B2",
        "type": "collocation",
        "ipa": "/strəˈtiː.dʒɪk əˈlaɪ.əns/",
        "meaningVi": "liên minh hợp tác chiến lược",
        "collocations": "form a strategic alliance, enter into a strategic alliance, strategic alliance with",
        "example": "The airline entered into a strategic alliance with international carriers to offer seamless connections.",
        "exampleVi": "Hãng hàng không đã tham gia vào một liên minh chiến lược với các hãng bay quốc tế để cung cấp các chuyến nối chuyến liền mạch.",
        "optionsVi": [
          "liên minh hợp tác chiến lược",
          "cuộc cạnh tranh khốc liệt",
          "thương vụ thâu tóm thù địch",
          "hợp đồng thuê ngoài ngắn hạn"
        ]
      },
      {
        "id": "toeic_235",
        "word": "competitive advantage",
        "level": "B2",
        "type": "collocation",
        "ipa": "/kəmˈpet̬.ə.t̬ɪv ədˈvæn.t̬ɪdʒ/",
        "meaningVi": "lợi thế cạnh tranh vượt trội",
        "collocations": "sustainable competitive advantage, gain competitive advantage, lose competitive advantage",
        "example": "Our proprietary logistics software provides a sustainable competitive advantage in fulfillment speed.",
        "exampleVi": "Phần mềm logistics độc quyền của chúng tôi mang lại lợi thế cạnh tranh bền vững về tốc độ xử lý đơn hàng.",
        "optionsVi": [
          "lợi thế cạnh tranh vượt trội",
          "tình trạng thua lỗ kéo dài",
          "khoản nợ quá hạn ngân hàng",
          "tỷ lệ nhân viên thôi việc cao"
        ]
      },
      {
        "id": "toeic_236",
        "word": "downsize",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈdaʊn.saɪz/",
        "meaningVi": "cắt giảm quy mô, tinh giản nhân sự",
        "collocations": "downsize workforce, forced to downsize, downsize operations",
        "example": "Faced with declining global demand, the manufacturer announced plans to downsize its workforce by ten percent.",
        "exampleVi": "Đối mặt với nhu cầu toàn cầu sụt giảm, nhà sản xuất đã công bố kế hoạch cắt giảm 10% lực lượng lao động.",
        "optionsVi": [
          "cắt giảm quy mô, tinh giản nhân sự",
          "tuyển dụng ồ ạt nhân viên mới",
          "tăng gấp đôi diện tích nhà máy",
          "tăng lương đồng loạt toàn công ty"
        ]
      },
      {
        "id": "toeic_237",
        "word": "core competency",
        "level": "B2",
        "type": "collocation",
        "ipa": "/kɔːr ˈkɑːm.pə.tən.si/",
        "meaningVi": "năng lực cạnh tranh cốt lõi",
        "collocations": "identify core competencies, build on core competency, focus on core competencies",
        "example": "Leadership decided to outsource administrative tasks so engineers could focus on their core competencies.",
        "exampleVi": "Ban lãnh đạo đã quyết định thuê ngoài các công việc hành chính để các kỹ sư có thể tập trung vào năng lực cốt lõi của họ.",
        "optionsVi": [
          "năng lực cạnh tranh cốt lõi",
          "kỹ năng giao tiếp cơ bản",
          "các thiếu sót trong quản lý",
          "nhiệm vụ phụ không quan trọng"
        ]
      },
      {
        "id": "toeic_238",
        "word": "monopoly",
        "level": "B2",
        "type": "noun",
        "ipa": "/məˈnɑː.pəl.i/",
        "meaningVi": "tình trạng độc quyền thị trường",
        "collocations": "break up a monopoly, natural monopoly, hold a monopoly over",
        "example": "Antitrust regulators intervened to prevent the software giant from creating an unfair monopoly.",
        "exampleVi": "Các cơ quan quản lý chống độc quyền đã can thiệp để ngăn chặn gã khổng lồ phần mềm tạo ra sự độc quyền không lành mạnh.",
        "optionsVi": [
          "tình trạng độc quyền thị trường",
          "thị trường cạnh tranh hoàn hảo",
          "sự hợp tác giữa các doanh nghiệp nhỏ",
          "chính sách trợ giá nông sản"
        ]
      },
      {
        "id": "toeic_239",
        "word": "hostile takeover",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌhɑː.stəl ˈteɪkˌoʊ.vɚ/",
        "meaningVi": "vụ thâu tóm công ty mang tính thù địch",
        "collocations": "launch a hostile takeover, resist a hostile takeover, victim of a hostile takeover",
        "example": "The board of directors implemented defensive poison-pill strategies to fend off the hostile takeover bid.",
        "exampleVi": "Hội đồng quản trị đã thực hiện các chiến lược phòng vệ để đẩy lùi nỗ lực thâu tóm mang tính thù địch.",
        "optionsVi": [
          "vụ thâu tóm công ty mang tính thù địch",
          "thỏa thuận sáp nhập tự nguyện",
          "chính sách tặng cổ phiếu thưởng",
          "kế hoạch giải ngân vốn đầu tư"
        ]
      },
      {
        "id": "toeic_240",
        "word": "shareholder meeting",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈʃerˌhoʊl.dɚ ˈmiː.t̬ɪŋ/",
        "meaningVi": "đại hội đồng cổ đông",
        "collocations": "annual shareholder meeting, extraordinary shareholder meeting, speak at the shareholder meeting",
        "example": "Shareholders voted to approve the new executive compensation plan during the annual shareholder meeting.",
        "exampleVi": "Các cổ đông đã bỏ phiếu thông qua chế độ đãi ngộ ban điều hành mới trong phiên đại hội cổ đông thường niên.",
        "optionsVi": [
          "đại hội đồng cổ đông",
          "buổi họp giao ban tuần",
          "tiệc kỷ niệm thành lập công ty",
          "hội thảo khoa học quốc tế"
        ]
      },
      {
        "id": "toeic_241",
        "word": "conglomerate",
        "level": "B2",
        "type": "noun",
        "ipa": "/kənˈɡlɑː.mɚ.ət/",
        "meaningVi": "tập đoàn đa ngành quy mô lớn",
        "collocations": "media conglomerate, multinational conglomerate, industrial conglomerate",
        "example": "The South Korean conglomerate operates divisions ranging from shipbuilding to consumer electronics.",
        "exampleVi": "Tập đoàn đa ngành Hàn Quốc vận hành các mảng từ đóng tàu cho tới điện tử tiêu dùng.",
        "optionsVi": [
          "tập đoàn đa ngành quy mô lớn",
          "doanh nghiệp nhỏ mới thành lập",
          "cửa hàng bách hóa tổng hợp",
          "hợp tác xã dịch vụ nông nghiệp"
        ]
      },
      {
        "id": "toeic_242",
        "word": "streamline operations",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈstriːm.laɪn ˌɑː.pəˈreɪ.ʃənz/",
        "meaningVi": "tinh giản hóa quy trình vận hành",
        "collocations": "effort to streamline operations, streamline operations and reduce costs, digitally streamline operations",
        "example": "Automating inventory tracking helped the logistics company streamline warehouse operations.",
        "exampleVi": "Tự động hóa theo dõi hàng tồn kho đã giúp công ty logistics tinh giản quy trình vận hành kho bãi.",
        "optionsVi": [
          "tinh giản hóa quy trình vận hành",
          "gia tăng các khâu thủ tục rườm rà",
          "tuyển dụng thêm nhân sự hành chính",
          "ngừng ứng dụng công nghệ thông tin"
        ]
      },
      {
        "id": "toeic_243",
        "word": "expansion plan",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ɪkˈspæn.ʃən plæn/",
        "meaningVi": "kế hoạch mở rộng chi nhánh/thị trường",
        "collocations": "aggressive expansion plan, announce expansion plans, fund an expansion plan",
        "example": "The retail chain announced ambitious expansion plans to open fifty new outlets across Europe.",
        "exampleVi": "Chuỗi bán lẻ đã công bố các kế hoạch mở rộng đầy tham vọng để khai trương 50 cửa hàng mới trên khắp châu Âu.",
        "optionsVi": [
          "kế hoạch mở rộng chi nhánh/thị trường",
          "chiến lược thu hẹp hoạt động",
          "kế hoạch đóng cửa hàng loạt",
          "bản thảo thanh lý tài sản"
        ]
      },
      {
        "id": "toeic_244",
        "word": "contingency plan",
        "level": "B2",
        "type": "collocation",
        "ipa": "/kənˈtɪn.dʒən.si plæn/",
        "meaningVi": "phương án dự phòng khi có khủng hoảng",
        "collocations": "develop a contingency plan, contingency plan in place, activate a contingency plan",
        "example": "Management put in place a contingency plan in case the port strike disrupted raw material shipments.",
        "exampleVi": "Ban quản lý đã thiết lập một phương án dự phòng phòng trường hợp cuộc đình công ở cảng làm gián đoạn các chuyến vận chuyển nguyên liệu.",
        "optionsVi": [
          "phương án dự phòng khi có khủng hoảng",
          "lịch trình nghỉ mát hè công ty",
          "kế hoạch phát hành cổ phiếu",
          "bảng phân công ca trực bảo vệ"
        ]
      },
      {
        "id": "toeic_245",
        "word": "synergy",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈsɪn.ɚ.dʒi/",
        "meaningVi": "hiệu ứng cộng hưởng sức mạnh",
        "collocations": "create synergies, operational synergy, capitalize on synergies",
        "example": "The merger created significant synergies by pooling research budgets and combining sales forces.",
        "exampleVi": "Thương vụ sáp nhập đã tạo ra sức mạnh cộng hưởng đáng kể bằng việc gộp ngân sách nghiên cứu và kết hợp đội ngũ bán hàng.",
        "optionsVi": [
          "hiệu ứng cộng hưởng sức mạnh",
          "sự xung đột nội bộ kéo dài",
          "khoản thâm hụt sau sáp nhập",
          "sự sụt giảm doanh số bán"
        ]
      },
      {
        "id": "toeic_246",
        "word": "board of directors",
        "level": "B1",
        "type": "collocation",
        "ipa": "/bɔːrd əv dɪˈrek.tɚz/",
        "meaningVi": "hội đồng quản trị công ty",
        "collocations": "seat on the board of directors, chairman of the board of directors, board of directors meets",
        "example": "The board of directors voted unanimously to appoint Ms. Watson as the new chief executive officer.",
        "exampleVi": "Hội đồng quản trị đã bỏ phiếu nhất trí bổ nhiệm bà Watson làm tổng giám đốc điều hành mới.",
        "optionsVi": [
          "hội đồng quản trị công ty",
          "ban chấp hành công đoàn",
          "đội ngũ nhân viên bán hàng",
          "hội cựu chiến binh cơ quan"
        ]
      },
      {
        "id": "toeic_247",
        "word": "market volatility",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈmɑːr.kɪt ˌvɑː.ləˈtɪl.ə.t̬i/",
        "meaningVi": "sự biến động thất thường của thị trường",
        "collocations": "hedge against market volatility, high market volatility, period of market volatility",
        "example": "Investors adopted defensive hedging strategies to safeguard portfolios against market volatility.",
        "exampleVi": "Các nhà đầu tư đã áp dụng các chiến lược phòng vệ để bảo vệ danh mục đầu tư trước sự biến động thất thường của thị trường.",
        "optionsVi": [
          "sự biến động thất thường của thị trường",
          "sự ổn định vững chắc của giá cả",
          "sự tăng trưởng bền vững",
          "quy định kiểm soát giá trần"
        ]
      },
      {
        "id": "toeic_248",
        "word": "benchmarking",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈbentʃˌmɑːr.kɪŋ/",
        "meaningVi": "việc đối chuẩn với tiêu chuẩn hàng đầu trong ngành",
        "collocations": "benchmarking process, competitive benchmarking, industry benchmarking",
        "example": "Regular benchmarking allows the tech startup to assess its software delivery speed against global rivals.",
        "exampleVi": "Việc đối chuẩn định kỳ cho phép công ty khởi nghiệp công nghệ đánh giá tốc độ phát hành phần mềm so với các đối thủ toàn cầu.",
        "optionsVi": [
          "việc đối chuẩn với tiêu chuẩn hàng đầu trong ngành",
          "sự sao chép mã nguồn trái phép",
          "việc bán hạ giá phá giá thị trường",
          "thủ tục đăng ký kinh doanh mới"
        ]
      },
      {
        "id": "toeic_249",
        "word": "leverage assets",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈlev.ɚ.ɪdʒ ˈæs.ets/",
        "meaningVi": "tận dụng tối đa nguồn lực tài sản",
        "collocations": "leverage company assets, strategically leverage assets, leverage assets for growth",
        "example": "The firm was able to leverage existing distribution assets to quickly roll out its new beverage brand.",
        "exampleVi": "Công ty đã có thể tận dụng tối đa hệ thống tài sản phân phối sẵn có để nhanh chóng ra mắt thương hiệu đồ uống mới.",
        "optionsVi": [
          "tận dụng tối đa nguồn lực tài sản",
          "bán tống bán tháo tài sản cố định",
          "thế chấp toàn bộ nhà xưởng",
          "đóng băng nguồn vốn lưu động"
        ]
      },
      {
        "id": "toeic_250",
        "word": "penetrate new markets",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈpen.ə.treɪt nuː ˈmɑːr.kɪts/",
        "meaningVi": "thâm nhập vào các thị trường mới",
        "collocations": "strategy to penetrate new markets, successfully penetrate new markets, struggle to penetrate new markets",
        "example": "Forming alliances with local distributors allowed the e-commerce platform to penetrate new markets rapidly.",
        "exampleVi": "Thiết lập liên minh với các nhà phân phối địa phương đã cho phép nền tảng thương mại điện tử thâm nhập nhanh chóng vào các thị trường mới.",
        "optionsVi": [
          "thâm nhập vào các thị trường mới",
          "rút lui khỏi thị trường quốc tế",
          "thu hẹp số lượng khách hàng",
          "từ bỏ phân khúc bán lẻ"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_support",
    "name": "Chăm Sóc Khách Hàng & Giải Quyết Khiếu Nại",
    "icon": "🎧",
    "category": "toeic",
    "level": "B1",
    "description": "Xử lý phàn nàn, chính sách bảo hành, hoàn tiền, phản hồi khách hàng và bồi thường sự cố.",
    "words": [
      {
        "id": "toeic_251",
        "word": "resolve a complaint",
        "level": "B1",
        "type": "collocation",
        "ipa": "/rɪˈzɑːlv ə kəmˈpleɪnt/",
        "meaningVi": "giải quyết thỏa đáng khiếu nại của khách hàng",
        "collocations": "promptly resolve a complaint, resolve customer complaints, effort to resolve a complaint",
        "example": "The customer care team made every effort to promptly resolve the customer's complaint.",
        "exampleVi": "Đội ngũ chăm sóc khách hàng đã nỗ lực hết mình để giải quyết thỏa đáng khiếu nại của khách hàng trong thời gian sớm nhất.",
        "optionsVi": [
          "giải quyết thỏa đáng khiếu nại của khách hàng",
          "bác bỏ khiếu nại của người dùng",
          "chuyển khiếu nại lên tòa án",
          "từ chối tiếp nhận ý kiến"
        ]
      },
      {
        "id": "toeic_252",
        "word": "customer retention",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈkʌs.tə.mɚ rɪˌten.ʃən/",
        "meaningVi": "việc duy trì và giữ chân khách hàng cũ",
        "collocations": "improve customer retention, customer retention rate, customer retention strategy",
        "example": "Delivering exceptional after-sales support is vital for sustaining a high customer retention rate.",
        "exampleVi": "Cung cấp dịch vụ hậu mãi xuất sắc là yếu tố sống còn để duy trì tỷ lệ giữ chân khách hàng ở mức cao.",
        "optionsVi": [
          "việc duy trì và giữ chân khách hàng cũ",
          "chi phí thu hút khách hàng mới",
          "tỷ lệ mất khách hàng vào tay đối thủ",
          "tổng số lượng giao dịch trực tuyến"
        ]
      },
      {
        "id": "toeic_253",
        "word": "hotline support",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈhɑːt.laɪn səˈpɔːrt/",
        "meaningVi": "dịch vụ hỗ trợ qua đường dây nóng",
        "collocations": "24/7 hotline support, call hotline support, technical hotline support",
        "example": "The bank provides 24/7 toll-free hotline support to help cardholders report lost cards.",
        "exampleVi": "Ngân hàng cung cấp dịch vụ hỗ trợ đường dây nóng miễn phí 24/7 để giúp chủ thẻ báo mất thẻ.",
        "optionsVi": [
          "dịch vụ hỗ trợ qua đường dây nóng",
          "hệ thống gửi thư điện tử tự động",
          "quầy giao dịch trực tiếp tại trụ sở",
          "dịch vụ giao nhận bưu phẩm nhanh"
        ]
      },
      {
        "id": "toeic_254",
        "word": "satisfaction rating",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˌsæt̬.ɪsˈfæk.ʃən ˈreɪ.t̬ɪŋ/",
        "meaningVi": "điểm đánh giá mức độ hài lòng",
        "collocations": "high satisfaction rating, survey satisfaction ratings, boost satisfaction ratings",
        "example": "Our online support agents achieved a record ninety-eight percent customer satisfaction rating.",
        "exampleVi": "Các nhân viên hỗ trợ trực tuyến của chúng tôi đã đạt điểm đánh giá mức độ hài lòng kỷ lục lên tới 98%.",
        "optionsVi": [
          "điểm đánh giá mức độ hài lòng",
          "tỷ lệ phế phẩm trong nhà máy",
          "hạn mức tín dụng cá nhân",
          "chỉ số tiêu thụ năng lượng"
        ]
      },
      {
        "id": "toeic_255",
        "word": "warranty coverage",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈwɔːr.ən.t̬i ˈkʌv.ɚ.ɪdʒ/",
        "meaningVi": "phạm vi và thời hạn bảo hành sản phẩm",
        "collocations": "under warranty coverage, extended warranty coverage, full warranty coverage",
        "example": "Accidental screen damage is not covered under the manufacturer's standard warranty coverage.",
        "exampleVi": "Hư hỏng màn hình do tai nạn không nằm trong phạm vi bảo hành tiêu chuẩn của nhà sản xuất.",
        "optionsVi": [
          "phạm vi và thời hạn bảo hành sản phẩm",
          "chính sách hoàn tiền mặt",
          "chi phí vận chuyển hàng trả về",
          "thời hạn sử dụng in trên vỏ hộp"
        ]
      },
      {
        "id": "toeic_256",
        "word": "refund policy",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈriː.fʌnd ˌpɑː.lə.si/",
        "meaningVi": "chính sách hoàn tiền cho khách",
        "collocations": "strict refund policy, 30-day refund policy, under our refund policy",
        "example": "Under our 30-day refund policy, merchandise must be returned unopened in its original packaging.",
        "exampleVi": "Theo chính sách hoàn tiền trong 30 ngày của chúng tôi, hàng hóa phải được trả lại khi chưa mở hộp trong bao bì nguyên bản.",
        "optionsVi": [
          "chính sách hoàn tiền cho khách",
          "chương trình tặng quà tri ân",
          "quy định bảo mật tài khoản",
          "bảng phí giao hàng hỏa tốc"
        ]
      },
      {
        "id": "toeic_257",
        "word": "inquiry",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪnˈkwaɪr.i/",
        "meaningVi": "câu hỏi thắc mắc, yêu cầu cung cấp thông tin",
        "collocations": "customer inquiry, respond to inquiries, general inquiry",
        "example": "Please allow up to twenty-four hours for a customer representative to reply to your email inquiry.",
        "exampleVi": "Vui lòng đợi tối đa 24 giờ để đại diện chăm sóc khách hàng trả lời yêu cầu thắc mắc qua email của bạn.",
        "optionsVi": [
          "câu hỏi thắc mắc, yêu cầu cung cấp thông tin",
          "hóa đơn thanh toán cước phí",
          "lời khen ngợi chất lượng",
          "đơn đặt hàng xuất khẩu"
        ]
      },
      {
        "id": "toeic_258",
        "word": "prompt response",
        "level": "B1",
        "type": "collocation",
        "ipa": "/prɑːmpt rɪˈspɑːns/",
        "meaningVi": "sự phản hồi nhanh chóng, kịp thời",
        "collocations": "thank you for your prompt response, ensure a prompt response, provide a prompt response",
        "example": "Clients greatly appreciated the support desk's prompt response to technical downtime issues.",
        "exampleVi": "Khách hàng đánh giá rất cao sự phản hồi nhanh chóng của bàn hỗ trợ đối với các sự cố gián đoạn kỹ thuật.",
        "optionsVi": [
          "sự phản hồi nhanh chóng, kịp thời",
          "sự chậm trễ kéo dài nhiều ngày",
          "lời từ chối cung cấp hỗ trợ",
          "câu trả lời tự động chung chung"
        ]
      },
      {
        "id": "toeic_259",
        "word": "compensation voucher",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌkɑːm.pənˈseɪ.ʃən ˈvaʊ.tʃɚ/",
        "meaningVi": "phiếu voucher đền bù thiệt hại",
        "collocations": "issue a compensation voucher, receive compensation voucher, redeem compensation voucher",
        "example": "Passengers whose flights were delayed over four hours received a $100 travel compensation voucher.",
        "exampleVi": "Những hành khách có chuyến bay bị trễ trên 4 tiếng đã nhận được phiếu voucher đền bù du lịch trị giá 100 USD.",
        "optionsVi": [
          "phiếu voucher đền bù thiệt hại",
          "thẻ lên máy bay ưu tiên",
          "biên nhận đóng lệ phí sân bay",
          "phiếu gửi hành lý quá cước"
        ]
      },
      {
        "id": "toeic_260",
        "word": "escalate an issue",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈes.kə.leɪt ən ˈɪʃ.uː/",
        "meaningVi": "chuyển sự cố lên cấp quản lý cao hơn",
        "collocations": "escalate the issue to management, need to escalate an issue, escalate unresolved issues",
        "example": "If the frontline representative cannot solve your billing dispute, they will escalate the issue to a supervisor.",
        "exampleVi": "Nếu nhân viên trực tiếp không thể giải quyết tranh chấp hóa đơn của bạn, họ sẽ chuyển sự cố lên cho cấp giám sát.",
        "optionsVi": [
          "chuyển sự cố lên cấp quản lý cao hơn",
          "tự ý đóng hồ sơ khiếu nại",
          "hủy bỏ dịch vụ của khách hàng",
          "chuyển hướng cuộc gọi sang máy bận"
        ]
      },
      {
        "id": "toeic_261",
        "word": "defective item",
        "level": "B1",
        "type": "collocation",
        "ipa": "/dɪˈfek.tɪv ˈaɪ.t̬əm/",
        "meaningVi": "sản phẩm bị lỗi hỏng do sản xuất",
        "collocations": "return a defective item, replace defective items, inspect defective items",
        "example": "The retailer offered an immediate full refund or brand-new replacement for the defective item.",
        "exampleVi": "Nhà bán lẻ đã đề nghị hoàn tiền đầy đủ ngay lập tức hoặc đổi mới một sản phẩm khác cho món hàng bị lỗi.",
        "optionsVi": [
          "sản phẩm bị lỗi hỏng do sản xuất",
          "mặt hàng bán chạy nhất tháng",
          "sản phẩm được giảm giá 50%",
          "hàng hóa nhập khẩu chính ngạch"
        ]
      },
      {
        "id": "toeic_262",
        "word": "courteous",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈkɝː.t̬i.əs/",
        "meaningVi": "lịch sự, nhã nhặn, tôn trọng khách",
        "collocations": "courteous staff, courteous service, prompt and courteous",
        "example": "Reviewers frequently commended the hotel desk staff for their attentive and courteous service.",
        "exampleVi": "Những người đánh giá thường xuyên khen ngợi nhân viên quầy khách sạn vì dịch vụ chu đáo và lịch sự.",
        "optionsVi": [
          "lịch sự, nhã nhặn, tôn trọng khách",
          "thô lỗ và cộc cằn",
          "thiếu kiên nhẫn khi lắng nghe",
          "lơ đễnh trong công việc"
        ]
      },
      {
        "id": "toeic_263",
        "word": "feedback form",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈfiːd.bæk fɔːrm/",
        "meaningVi": "phiếu lấy ý kiến đóng góp của khách hàng",
        "collocations": "fill out a feedback form, submit a feedback form, online feedback form",
        "example": "Guests are encouraged to fill out a short feedback form before departing the resort.",
        "exampleVi": "Khách nghỉ dưỡng được khuyến khích điền vào một phiếu khảo sát ý kiến ngắn trước khi rời khỏi khu nghỉ dưỡng.",
        "optionsVi": [
          "phiếu lấy ý kiến đóng góp của khách hàng",
          "hóa đơn thanh toán phòng",
          "tờ khai tạm trú tạm vắng",
          "giấy xác nhận đặt cọc"
        ]
      },
      {
        "id": "toeic_264",
        "word": "service outage",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈsɜːr.vɪs ˈaʊ.t̬ɪdʒ/",
        "meaningVi": "sự cố gián đoạn cung cấp dịch vụ",
        "collocations": "unexpected service outage, apologize for service outage, resolve service outage",
        "example": "The internet provider issued a bill credit to compensate subscribers affected by the weekend service outage.",
        "exampleVi": "Nhà cung cấp internet đã trừ tiền cước để bồi thường cho các thuê bao bị ảnh hưởng bởi sự cố mất mạng cuối tuần.",
        "optionsVi": [
          "sự cố gián đoạn cung cấp dịch vụ",
          "đợt nâng cấp tốc độ miễn phí",
          "chương trình khuyến mãi giảm giá",
          "hội thảo hướng dẫn sử dụng"
        ]
      },
      {
        "id": "toeic_265",
        "word": "troubleshooting guide",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈtrʌb.əlˌʃuː.t̬ɪŋ ɡaɪd/",
        "meaningVi": "tài liệu hướng dẫn xử lý sự cố kỹ thuật",
        "collocations": "consult the troubleshooting guide, step-by-step troubleshooting guide, comprehensive troubleshooting guide",
        "example": "Before calling customer support, users should consult the online troubleshooting guide for quick fixes.",
        "exampleVi": "Trước khi gọi cho bộ phận hỗ trợ khách hàng, người dùng nên tham khảo tài liệu hướng dẫn khắc phục sự cố trực tuyến để tìm cách khắc phục nhanh.",
        "optionsVi": [
          "tài liệu hướng dẫn xử lý sự cố kỹ thuật",
          "hợp đồng mua bán thiết bị",
          "phiếu bảo hành có đóng dấu",
          "bảng báo giá linh kiện thay thế"
        ]
      },
      {
        "id": "toeic_266",
        "word": "apologize sincerely",
        "level": "B1",
        "type": "collocation",
        "ipa": "/əˈpɑː.lə.dʒaɪz sɪnˈsɪr.li/",
        "meaningVi": "gửi lời xin lỗi chân thành",
        "collocations": "apologize sincerely for the inconvenience, sincerely apologize on behalf of, write to apologize sincerely",
        "example": "We sincerely apologize for the inconvenience caused by the unexpected shipping delay.",
        "exampleVi": "Chúng tôi chân thành xin lỗi vì sự bất tiện gây ra bởi sự chậm trễ giao hàng ngoài dự kiến.",
        "optionsVi": [
          "gửi lời xin lỗi chân thành",
          "đổ lỗi cho nhà vận chuyển",
          "phủ nhận trách nhiệm của hãng",
          "yêu cầu khách tự chịu chi phí"
        ]
      },
      {
        "id": "toeic_267",
        "word": "client testimonial",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈklaɪ.ənt ˌtes.təˈmoʊ.ni.əl/",
        "meaningVi": "lời nhận xét chứng thực từ khách hàng",
        "collocations": "positive client testimonial, feature client testimonials, video client testimonial",
        "example": "Displaying glowing client testimonials on the website helped boost consumer trust and conversions.",
        "exampleVi": "Trưng bày những lời chứng thực tích cực của khách hàng trên trang web đã giúp nâng cao niềm tin và tỷ lệ chuyển đổi của người tiêu dùng.",
        "optionsVi": [
          "lời nhận xét chứng thực từ khách hàng",
          "bản cáo trạng của viện kiểm sát",
          "hợp đồng bảo mật thông tin",
          "bảng kê khai hàng tồn kho"
        ]
      },
      {
        "id": "toeic_268",
        "word": "exchange policy",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ɪksˈtʃeɪndʒ ˌpɑː.lə.si/",
        "meaningVi": "chính sách đổi sản phẩm khác",
        "collocations": "item exchange policy, fair exchange policy, understand the exchange policy",
        "example": "Our store's flexible exchange policy allows shoppers to swap clothing sizes within fourteen days.",
        "exampleVi": "Chính sách đổi hàng linh hoạt của cửa hàng cho phép người mua sắm đổi kích cỡ quần áo trong vòng 14 ngày.",
        "optionsVi": [
          "chính sách đổi sản phẩm khác",
          "quy định kiểm tra an ninh cổng",
          "nội quy trang phục nhân viên",
          "quy định hoàn trả tiền mặt"
        ]
      },
      {
        "id": "toeic_269",
        "word": "toll-free number",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˌtoʊlˈfriː ˈnʌm.bɚ/",
        "meaningVi": "số điện thoại tổng đài miễn cước gọi",
        "collocations": "call the toll-free number, toll-free number on the back, toll-free customer support",
        "example": "Consumers dial our toll-free number without incurring any long-distance telephone charges.",
        "exampleVi": "Người tiêu dùng gọi đến số điện thoại miễn cước của chúng tôi mà không phải chịu bất kỳ khoản cước viễn thông đường dài nào.",
        "optionsVi": [
          "số điện thoại tổng đài miễn cước gọi",
          "số tài khoản nhận tiền thanh toán",
          "mã số bưu điện quốc gia",
          "số đăng ký kinh doanh"
        ]
      },
      {
        "id": "toeic_270",
        "word": "dedicated representative",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈded.ə.keɪ.t̬ɪd ˌrep.rɪˈzen.t̬ə.t̬ɪv/",
        "meaningVi": "chuyên viên tận tâm phụ trách riêng",
        "collocations": "assigned a dedicated representative, dedicated representative for VIP accounts, work with a dedicated representative",
        "example": "Corporate enterprise accounts are assigned a dedicated representative to manage their orders.",
        "exampleVi": "Các tài khoản doanh nghiệp lớn được chỉ định một chuyên viên phụ trách riêng tận tâm để quản lý các đơn hàng của họ.",
        "optionsVi": [
          "chuyên viên tận tâm phụ trách riêng",
          "nhân viên bảo vệ tòa nhà",
          "tổng đài trả lời tự động bằng robot",
          "người chuyển phát bưu phẩm"
        ]
      },
      {
        "id": "toeic_271",
        "word": "mishap",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈmɪs.hæp/",
        "meaningVi": "sự cố rủi ro ngoài ý muốn",
        "collocations": "minor mishap, avoid mishaps, technical mishap",
        "example": "Despite a minor logistical mishap with the sound equipment, the gala proceeded without interruption.",
        "exampleVi": "Bất chấp một sự cố nhỏ về mặt kỹ thuật với dàn âm thanh, đêm dạ tiệc vẫn diễn ra mà không bị gián đoạn.",
        "optionsVi": [
          "sự cố rủi ro ngoài ý muốn",
          "thành công rực rỡ ngoài mong đợi",
          "kế hoạch chi tiết được duyệt",
          "buổi lễ khai mạc trang trọng"
        ]
      },
      {
        "id": "toeic_272",
        "word": "rectify the mistake",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈrek.tə.faɪ ðə mɪˈsteɪk/",
        "meaningVi": "sửa chữa, khắc phục sai sót kịp thời",
        "collocations": "quickly rectify the mistake, effort to rectify the mistake, step to rectify mistakes",
        "example": "The billing department acted immediately to rectify the billing mistake and refunded the difference.",
        "exampleVi": "Bộ phận hóa đơn đã hành động ngay lập tức để khắc phục sai sót tính tiền và hoàn trả khoản tiền chênh lệch.",
        "optionsVi": [
          "sửa chữa, khắc phục sai sót kịp thời",
          "chối bỏ trách nhiệm về lỗi lầm",
          "yêu cầu bồi thường thêm tiền",
          "đình chỉ hoạt động tài khoản"
        ]
      },
      {
        "id": "toeic_273",
        "word": "user feedback",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈjuː.zɚ ˈfiːd.bæk/",
        "meaningVi": "ý kiến phản hồi đóng góp từ người dùng",
        "collocations": "gather user feedback, positive user feedback, incorporate user feedback",
        "example": "Product developers incorporated user feedback into the latest mobile application update.",
        "exampleVi": "Các nhà phát triển sản phẩm đã đưa những ý kiến đóng góp của người dùng vào bản cập nhật ứng dụng di động mới nhất.",
        "optionsVi": [
          "ý kiến phản hồi đóng góp từ người dùng",
          "chính sách bảo mật mật khẩu",
          "bản điều khoản sử dụng phần mềm",
          "hóa đơn thanh toán định kỳ"
        ]
      },
      {
        "id": "toeic_274",
        "word": "follow-up survey",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈfɑː.loʊ.ʌp ˈsɜːr.veɪ/",
        "meaningVi": "cuộc khảo sát theo dõi sau dịch vụ",
        "collocations": "send a follow-up survey, follow-up survey results, participate in a follow-up survey",
        "example": "Customers received a brief follow-up survey via SMS to rate their technician's service quality.",
        "exampleVi": "Khách hàng đã nhận được một cuộc khảo sát theo dõi ngắn qua tin nhắn để đánh giá chất lượng dịch vụ của kỹ thuật viên.",
        "optionsVi": [
          "cuộc khảo sát theo dõi sau dịch vụ",
          "tin nhắn quảng cáo bán hàng",
          "thông báo cắt dịch vụ vì nợ cước",
          "mã kích hoạt tài khoản mới"
        ]
      },
      {
        "id": "toeic_275",
        "word": "unconditional guarantee",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌʌn.kənˈdɪʃ.ən.əl ˌɡer.ənˈtiː/",
        "meaningVi": "sự bảo đảm chất lượng vô điều kiện",
        "collocations": "backed by unconditional guarantee, offer an unconditional guarantee, 100 percent unconditional guarantee",
        "example": "The brand backs every purchase with a 100% unconditional guarantee of customer satisfaction.",
        "exampleVi": "Thương hiệu cam kết mọi đơn mua hàng bằng sự bảo đảm vô điều kiện 100% về sự hài lòng của khách hàng.",
        "optionsVi": [
          "sự bảo đảm chất lượng vô điều kiện",
          "chính sách từ chối hoàn trả",
          "điều kiện ràng buộc phức tạp",
          "hợp đồng vay vốn lãi suất cao"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_manufacturing",
    "name": "Sản Xuất, Kiểm Định Chất Lượng & An Toàn",
    "icon": "🏭",
    "category": "toeic",
    "level": "B2",
    "description": "Dây chuyền sản xuất, nguyên vật liệu, tỷ lệ lỗi, an toàn lao động và bảo trì thiết bị nhà xưởng.",
    "words": [
      {
        "id": "toeic_276",
        "word": "assembly line",
        "level": "B1",
        "type": "collocation",
        "ipa": "/əˈsem.bli laɪn/",
        "meaningVi": "dây chuyền lắp ráp nhà máy",
        "collocations": "assembly line worker, modern assembly line, shut down the assembly line",
        "example": "Automated robotic arms perform the precision welding along the automotive assembly line.",
        "exampleVi": "Các cánh tay robot tự động thực hiện việc hàn chính xác dọc theo dây chuyền lắp ráp ô tô.",
        "optionsVi": [
          "dây chuyền lắp ráp nhà máy",
          "hàng rào an ninh nhà kho",
          "đường ống dẫn dầu ngầm",
          "dãy bàn làm việc văn phòng"
        ]
      },
      {
        "id": "toeic_277",
        "word": "quality assurance",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈkwɑː.lə.t̬i əˌʃʊr.əns/",
        "meaningVi": "hoạt động bảo đảm chất lượng (QA)",
        "collocations": "quality assurance inspector, quality assurance standards, strict quality assurance",
        "example": "Every finished device undergoes rigorous inspection by the quality assurance department.",
        "exampleVi": "Mỗi thiết bị thành phẩm đều trải qua sự kiểm tra nghiêm ngặt của bộ phận bảo đảm chất lượng.",
        "optionsVi": [
          "hoạt động bảo đảm chất lượng (QA)",
          "chiến dịch quảng bá bán lẻ",
          "dịch vụ vận chuyển hàng nặng",
          "quy trình tuyển mộ công nhân"
        ]
      },
      {
        "id": "toeic_278",
        "word": "raw materials",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˌrɑː məˈtɪr.i.əlz/",
        "meaningVi": "nguồn nguyên liệu thô ban đầu",
        "collocations": "supply of raw materials, cost of raw materials, raw materials shortage",
        "example": "Geopolitical tensions caused a sharp spike in the price of essential raw materials like copper and steel.",
        "exampleVi": "Căng thẳng địa chính trị đã gây ra đợt tăng giá mạnh đối với các nguyên liệu thô thiết yếu như đồng và thép.",
        "optionsVi": [
          "nguồn nguyên liệu thô ban đầu",
          "thành phẩm đã đóng gói sẵn",
          "rác thải công nghiệp đã qua xử lý",
          "dụng cụ văn phòng phẩm tiêu hao"
        ]
      },
      {
        "id": "toeic_279",
        "word": "defect rate",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈdiː.fekt reɪt/",
        "meaningVi": "tỷ lệ sản phẩm lỗi hỏng",
        "collocations": "reduce defect rate, low defect rate, zero-defect rate target",
        "example": "Investing in computer vision sensors helped the plant reduce its defect rate to below 0.1 percent.",
        "exampleVi": "Đầu tư vào cảm biến thị giác máy tính đã giúp nhà máy giảm tỷ lệ sản phẩm lỗi xuống dưới 0,1%.",
        "optionsVi": [
          "tỷ lệ sản phẩm lỗi hỏng",
          "tốc độ quay của máy móc",
          "tỷ lệ hoàn thành định mức",
          "chỉ số tiêu thụ điện năng"
        ]
      },
      {
        "id": "toeic_280",
        "word": "safety regulation",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈseɪf.ti ˌreɡ.jəˈleɪ.ʃən/",
        "meaningVi": "quy chuẩn an toàn lao động",
        "collocations": "enforce safety regulations, strict safety regulations, comply with safety regulations",
        "example": "All factory visitors must strictly adhere to occupational safety regulations, including wearing hard hats.",
        "exampleVi": "Tất cả khách tham quan nhà máy phải tuân thủ nghiêm ngặt các quy định an toàn lao động, bao gồm việc đội mũ bảo hộ.",
        "optionsVi": [
          "quy chuẩn an toàn lao động",
          "quy định giờ nghỉ ăn trưa",
          "bảng lương công nhân theo ca",
          "hợp đồng bảo hiểm tài sản"
        ]
      },
      {
        "id": "toeic_281",
        "word": "plant manager",
        "level": "B2",
        "type": "collocation",
        "ipa": "/plænt ˈmæn.ə.dʒɚ/",
        "meaningVi": "giám đốc quản lý phân xưởng/nhà máy",
        "collocations": "report to plant manager, experienced plant manager, plant manager conducts inspection",
        "example": "The plant manager holds a daily morning briefing with shift supervisors to review output targets.",
        "exampleVi": "Giám đốc nhà máy tổ chức buổi họp giao ban buổi sáng hàng ngày với các trưởng ca để rà soát chỉ tiêu sản lượng.",
        "optionsVi": [
          "giám đốc quản lý phân xưởng/nhà máy",
          "nhân viên bảo vệ cổng chính",
          "chuyên viên kế toán kho",
          "kỹ sư vận hành xe nâng"
        ]
      },
      {
        "id": "toeic_282",
        "word": "mass production",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˌmæs prəˈdʌk.ʃən/",
        "meaningVi": "hoạt động sản xuất hàng loạt",
        "collocations": "enter mass production, techniques of mass production, mass production facility",
        "example": "Once the prototype passed durability tests, the company commenced mass production.",
        "exampleVi": "Khi mẫu thử nghiệm vượt qua các bài kiểm tra độ bền, công ty đã bắt đầu sản xuất hàng loạt.",
        "optionsVi": [
          "hoạt động sản xuất hàng loạt",
          "chế tạo thủ công đơn chiếc",
          "dây chuyền tạm ngừng bảo dưỡng",
          "hoạt động nghiên cứu lý thuyết"
        ]
      },
      {
        "id": "toeic_283",
        "word": "protective gear",
        "level": "B1",
        "type": "collocation",
        "ipa": "/prəˈtek.tɪv ɡɪr/",
        "meaningVi": "đồ bảo hộ lao động cá nhân",
        "collocations": "wear protective gear, personal protective gear, safety protective gear",
        "example": "Workers handling caustic chemicals must wear full protective gear, including face shields and heavy gloves.",
        "exampleVi": "Công nhân xử lý hóa chất ăn mòn phải mặc đầy đủ đồ bảo hộ, bao gồm mặt nạ chắn và găng tay dày.",
        "optionsVi": [
          "đồ bảo hộ lao động cá nhân",
          "đồng phục thể thao công ty",
          "trang phục công sở lịch sự",
          "dụng cụ sửa chữa máy móc"
        ]
      },
      {
        "id": "toeic_284",
        "word": "machinery malfunction",
        "level": "B2",
        "type": "collocation",
        "ipa": "/məˈʃiː.nɚ.i ˌmælˈfʌŋk.ʃən/",
        "meaningVi": "sự cố hỏng hóc máy móc thiết bị",
        "collocations": "unexpected machinery malfunction, caused by machinery malfunction, fix machinery malfunction",
        "example": "Production came to a complete standstill for three hours due to an unexpected machinery malfunction.",
        "exampleVi": "Sản xuất đã ngừng trệ hoàn toàn trong 3 giờ do sự cố hỏng hóc máy móc bất ngờ.",
        "optionsVi": [
          "sự cố hỏng hóc máy móc thiết bị",
          "đợt bảo dưỡng định kỳ hàng tháng",
          "quá trình nâng cấp phần mềm",
          "quy trình hiệu chuẩn dụng cụ"
        ]
      },
      {
        "id": "toeic_285",
        "word": "output quota",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈaʊt.pʊt ˈkwoʊ.t̬ə/",
        "meaningVi": "định mức chỉ tiêu sản lượng",
        "collocations": "meet the output quota, exceed output quota, set daily output quotas",
        "example": "Thanks to automated packaging equipment, the factory consistently exceeds its monthly output quota.",
        "exampleVi": "Nhờ vào thiết bị đóng gói tự động, nhà máy liên tục vượt chỉ tiêu sản lượng hàng tháng.",
        "optionsVi": [
          "định mức chỉ tiêu sản lượng",
          "định mức tiêu hao điện năng",
          "giới hạn số giờ làm thêm ca",
          "tỷ lệ hao hụt nguyên liệu"
        ]
      },
      {
        "id": "toeic_286",
        "word": "routine inspection",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ruːˈtiːn ɪnˈspek.ʃən/",
        "meaningVi": "công tác thanh tra kiểm tra định kỳ",
        "collocations": "conduct a routine inspection, schedule routine inspections, subject to routine inspection",
        "example": "The conveyor belts are halted every Sunday morning for routine inspection and lubrication.",
        "exampleVi": "Các băng chuyền được tạm dừng vào mỗi sáng Chủ nhật để kiểm tra định kỳ và bôi trơn.",
        "optionsVi": [
          "công tác thanh tra kiểm tra định kỳ",
          "đợt thanh tra đột xuất khi có tai nạn",
          "quy trình lắp đặt thiết bị mới",
          "buổi họp kiểm điểm trách nhiệm"
        ]
      },
      {
        "id": "toeic_287",
        "word": "hazardous waste",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈhæz.ɚ.dəs weɪst/",
        "meaningVi": "chất thải độc hại nguy hiểm",
        "collocations": "dispose of hazardous waste, store hazardous waste, hazardous waste management",
        "example": "Facilities must employ certified environmental contractors to safely dispose of industrial hazardous waste.",
        "exampleVi": "Các cơ sở phải thuê nhà thầu môi trường được cấp chứng nhận để xử lý an toàn chất thải độc hại công nghiệp.",
        "optionsVi": [
          "chất thải độc hại nguy hiểm",
          "nước sạch dùng trong sinh hoạt",
          "vật liệu có thể tái chế làm giấy",
          "phế liệu kim loại bán thanh lý"
        ]
      },
      {
        "id": "toeic_288",
        "word": "operational efficiency",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌɑː.pəˈreɪ.ʃən.əl ɪˈfɪʃ.ən.si/",
        "meaningVi": "hiệu quả vận hành sản xuất",
        "collocations": "improve operational efficiency, maximize operational efficiency, high operational efficiency",
        "example": "Upgrading to energy-efficient motors significantly boosted the overall operational efficiency of the plant.",
        "exampleVi": "Nâng cấp lên các động cơ tiết kiệm điện đã nâng cao đáng kể hiệu quả vận hành tổng thể của nhà máy.",
        "optionsVi": [
          "hiệu quả vận hành sản xuất",
          "chi phí sửa chữa phát sinh",
          "thời gian máy ngưng hoạt động",
          "số lượng phế phẩm thải ra"
        ]
      },
      {
        "id": "toeic_289",
        "word": "idle capacity",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈaɪ.dəl kəˈpæs.ə.t̬i/",
        "meaningVi": "công suất máy móc nhàn rỗi chưa khai thác",
        "collocations": "utilize idle capacity, minimize idle capacity, reduction in idle capacity",
        "example": "Securing contract manufacturing orders from overseas allowed the facility to utilize its idle capacity.",
        "exampleVi": "Có được các đơn đặt hàng gia công từ nước ngoài đã cho phép nhà máy tận dụng công suất nhàn rỗi của mình.",
        "optionsVi": [
          "công suất máy móc nhàn rỗi chưa khai thác",
          "công suất tối đa khi quá tải",
          "tốc độ vận hành chuẩn của máy",
          "chi phí tiêu hao năng lượng"
        ]
      },
      {
        "id": "toeic_290",
        "word": "calibrate instruments",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈkæl.ə.breɪt ˈɪn.strə.mənts/",
        "meaningVi": "hiệu chuẩn thiết bị đo lường chính xác",
        "collocations": "regularly calibrate instruments, calibrate instruments before testing, certified to calibrate instruments",
        "example": "Technicians must calibrate optical measurement instruments daily to guarantee millimeter accuracy.",
        "exampleVi": "Kỹ thuật viên phải hiệu chuẩn các dụng cụ đo quang học hàng ngày để đảm bảo độ chính xác tới từng milimét.",
        "optionsVi": [
          "hiệu chuẩn thiết bị đo lường chính xác",
          "vệ sinh bụi bẩn bên ngoài máy",
          "thay mới toàn bộ phụ tùng",
          "tắt nguồn thiết bị sau ca làm"
        ]
      },
      {
        "id": "toeic_291",
        "word": "workplace hazard",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈwɜːrk.pleɪs ˈhæz.ɚd/",
        "meaningVi": "mối nguy hiểm, rủi ro nơi làm việc",
        "collocations": "eliminate workplace hazards, identify workplace hazards, report a workplace hazard",
        "example": "Floor markings and safety barriers were erected to protect workers from potential workplace hazards.",
        "exampleVi": "Các vạch kẻ sàn và rào chắn an toàn đã được dựng lên để bảo vệ công nhân trước các mối nguy hiểm tiềm ẩn tại nơi làm việc.",
        "optionsVi": [
          "mối nguy hiểm, rủi ro nơi làm việc",
          "tiện ích phục vụ giải lao",
          "bản phân công lịch trực tuần",
          "chính sách tiền thưởng theo ca"
        ]
      },
      {
        "id": "toeic_292",
        "word": "standard operating procedure",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌstæn.dɚd ˌɑː.pəˈreɪ.t̬ɪŋ prəˈsiː.dʒɚ/",
        "meaningVi": "quy trình thao tác chuẩn (SOP)",
        "collocations": "follow standard operating procedures, establish a standard operating procedure, documented in the SOP",
        "example": "Following the standard operating procedure ensures consistent product quality and minimizes worker injury.",
        "exampleVi": "Tuân thủ quy trình thao tác chuẩn đảm bảo chất lượng sản phẩm đồng đều và giảm thiểu chấn thương cho công nhân.",
        "optionsVi": [
          "quy trình thao tác chuẩn (SOP)",
          "bản thảo đề xuất tăng lương",
          "hóa đơn thanh toán nguyên liệu",
          "kế hoạch tổ chức tiệc tất niên"
        ]
      },
      {
        "id": "toeic_293",
        "word": "heavy machinery",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈhev.i məˈʃiː.nɚ.i/",
        "meaningVi": "máy móc cơ giới hạng nặng",
        "collocations": "operate heavy machinery, licensed to operate heavy machinery, heavy machinery safety",
        "example": "Only certified operators who completed forty hours of training may operate the heavy machinery.",
        "exampleVi": "Chỉ những người vận hành có chứng chỉ đã hoàn thành 40 giờ đào tạo mới được phép điều khiển máy móc hạng nặng.",
        "optionsVi": [
          "máy móc cơ giới hạng nặng",
          "dụng cụ văn phòng phẩm nhỏ",
          "thiết bị điện tử cầm tay",
          "đồ nội thất bằng gỗ"
        ]
      },
      {
        "id": "toeic_294",
        "word": "factory overhaul",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈfæk.tɚ.i ˈoʊ.vɚ.hɑːl/",
        "meaningVi": "cuộc đại tu, nâng cấp toàn diện nhà máy",
        "collocations": "complete factory overhaul, major factory overhaul, undergo a factory overhaul",
        "example": "The manufacturing plant is closed this week for a planned biennial factory overhaul.",
        "exampleVi": "Nhà máy sản xuất đóng cửa trong tuần này để phục vụ đợt đại tu toàn diện định kỳ hai năm một lần.",
        "optionsVi": [
          "cuộc đại tu, nâng cấp toàn diện nhà máy",
          "đợt kiểm tra vệ sinh đột xuất",
          "kỳ nghỉ phép hè của công nhân",
          "lễ khánh thành phân xưởng mới"
        ]
      },
      {
        "id": "toeic_295",
        "word": "rigorous testing",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈrɪɡ.ɚ.əs ˈtes.tɪŋ/",
        "meaningVi": "việc kiểm thử nghiêm ngặt, khắt khe",
        "collocations": "undergo rigorous testing, subject to rigorous testing, rigorous testing procedures",
        "example": "All prototype airframes undergo rigorous stress testing in specialized wind tunnels.",
        "exampleVi": "Mọi mẫu thân máy bay thử nghiệm đều trải qua quá trình kiểm thử chịu lực nghiêm ngặt trong các đường hầm gió chuyên dụng.",
        "optionsVi": [
          "việc kiểm thử nghiêm ngặt, khắt khe",
          "kiểm tra sơ lược bằng mắt thường",
          "quy trình thử nghiệm tùy chọn",
          "thủ tục bàn giao giấy tờ"
        ]
      },
      {
        "id": "toeic_296",
        "word": "fabricate components",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈfæb.rə.keɪt kəmˈpoʊ.nənts/",
        "meaningVi": "chế tạo, gia công linh kiện",
        "collocations": "fabricate precision components, machine to fabricate components, fabricate electronic components",
        "example": "High-precision CNC laser cutters are utilized to fabricate aluminum components for the fuselage.",
        "exampleVi": "Máy cắt laser CNC độ chính xác cao được sử dụng để gia công các linh kiện nhôm cho thân máy bay.",
        "optionsVi": [
          "chế tạo, gia công linh kiện",
          "tiêu hủy phế liệu kim loại",
          "sơn lại vỏ ngoài sản phẩm",
          "đóng thùng xuất khẩu"
        ]
      },
      {
        "id": "toeic_297",
        "word": "production bottleneck",
        "level": "B2",
        "type": "collocation",
        "ipa": "/prəˈdʌk.ʃən ˈbɑː.t̬əl.nek/",
        "meaningVi": "điểm nghẽn, ách tắc trên dây chuyền sản xuất",
        "collocations": "identify production bottlenecks, eliminate production bottleneck, cause a production bottleneck",
        "example": "A shortage of specialized microchips became the primary production bottleneck for the electronics company.",
        "exampleVi": "Tình trạng thiếu hụt vi mạch chuyên dụng đã trở thành điểm nghẽn sản xuất chính của công ty điện tử.",
        "optionsVi": [
          "điểm nghẽn, ách tắc trên dây chuyền sản xuất",
          "giai đoạn sản xuất trơn tru nhất",
          "khoản chi thưởng vượt định mức",
          "khâu đóng gói bao bì cuối cùng"
        ]
      },
      {
        "id": "toeic_298",
        "word": "spill protocol",
        "level": "B2",
        "type": "collocation",
        "ipa": "/spɪl ˈproʊ.t̬ə.kɑːl/",
        "meaningVi": "quy trình ứng phó rò rỉ hóa chất",
        "collocations": "follow chemical spill protocol, emergency spill protocol, spill protocol training",
        "example": "Workers immediately evacuated the sector and initiated the chemical spill protocol.",
        "exampleVi": "Công nhân đã lập tức sơ tán khỏi khu vực và kích hoạt quy trình ứng phó rò rỉ hóa chất.",
        "optionsVi": [
          "quy trình ứng phó rò rỉ hóa chất",
          "quy định kiểm tra hàng tồn kho",
          "thủ tục xin cấp phép xây dựng",
          "hướng dẫn sử dụng thang máy"
        ]
      },
      {
        "id": "toeic_299",
        "word": "yield rate",
        "level": "B2",
        "type": "collocation",
        "ipa": "/jiːld reɪt/",
        "meaningVi": "tỷ lệ thành phẩm đạt chuẩn chất lượng",
        "collocations": "improve yield rate, high yield rate, wafer yield rate",
        "example": "Fine-tuning the furnace temperature boosted the silicon wafer yield rate from 88 to 96 percent.",
        "exampleVi": "Tinh chỉnh nhiệt độ lò nung đã nâng tỷ lệ thành phẩm tấm bán dẫn silic đạt chuẩn từ 88% lên 96%.",
        "optionsVi": [
          "tỷ lệ thành phẩm đạt chuẩn chất lượng",
          "tỷ lệ công nhân vắng mặt",
          "mức độ tiêu hao nhiên liệu",
          "chi phí khấu hao nhà xưởng"
        ]
      },
      {
        "id": "toeic_300",
        "word": "preventive maintenance",
        "level": "B2",
        "type": "collocation",
        "ipa": "/prɪˈven.t̬ɪv ˈmeɪn.tən.əns/",
        "meaningVi": "bảo trì phòng ngừa định kỳ",
        "collocations": "schedule preventive maintenance, routine preventive maintenance, preventive maintenance program",
        "example": "Performing regular preventive maintenance drastically reduced expensive emergency breakdowns.",
        "exampleVi": "Thực hiện bảo trì phòng ngừa định kỳ đã giúp giảm đáng kể các sự cố hỏng hóc khẩn cấp tốn kém.",
        "optionsVi": [
          "bảo trì phòng ngừa định kỳ",
          "sửa chữa khi máy móc đã hỏng hoàn toàn",
          "thay thế toàn bộ dây chuyền sản xuất",
          "thanh lý máy móc cũ phế liệu"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_admin",
    "name": "Hành Chính, Văn Thư, Thông Báo & Memos",
    "icon": "📋",
    "category": "toeic",
    "level": "B1",
    "description": "Văn bản nội bộ, biên bản họp, thư từ giao dịch chính thức, văn phòng phẩm và phê duyệt giấy tờ.",
    "words": [
      {
        "id": "toeic_301",
        "word": "memorandum",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌmem.əˈræn.dəm/",
        "meaningVi": "thông báo nội bộ công ty (memo)",
        "collocations": "issue a memorandum, internal memorandum, confidential memorandum",
        "example": "The Human Resources department circulated a memorandum outlining the new remote work policy.",
        "exampleVi": "Phòng Nhân sự đã gửi một thông báo nội bộ nêu rõ chính sách làm việc từ xa mới.",
        "optionsVi": [
          "thông báo nội bộ công ty (memo)",
          "hợp đồng mua bán độc quyền",
          "hóa đơn thanh toán tiền điện",
          "bản tường trình tai nạn lao động"
        ]
      },
      {
        "id": "toeic_302",
        "word": "minutes of the meeting",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈmɪn.ɪts əv ðə ˈmiː.t̬ɪŋ/",
        "meaningVi": "biên bản cuộc họp chính thức",
        "collocations": "take the minutes of the meeting, distribute meeting minutes, approve the minutes of the meeting",
        "example": "The administrative secretary recorded and circulated the minutes of the meeting to all board members.",
        "exampleVi": "Thư ký hành chính đã ghi lại và gửi biên bản cuộc họp tới tất cả các thành viên hội đồng quản trị.",
        "optionsVi": [
          "biên bản cuộc họp chính thức",
          "chương trình nghị sự sơ bộ",
          "thư mời tham dự tiệc tối",
          "bản thảo bài phát biểu khai mạc"
        ]
      },
      {
        "id": "toeic_303",
        "word": "confidential filing",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌkɑːn.fəˈden.ʃəl ˈfaɪ.lɪŋ/",
        "meaningVi": "việc lưu trữ hồ sơ tài liệu mật",
        "collocations": "secure confidential filing, confidential filing system, maintain confidential filing",
        "example": "All employee performance reviews are kept locked in a secure confidential filing cabinet.",
        "exampleVi": "Tất cả các bản đánh giá hiệu suất nhân viên đều được cất khóa trong tủ lưu trữ hồ sơ mật an toàn.",
        "optionsVi": [
          "việc lưu trữ hồ sơ tài liệu mật",
          "công tác in ấn tài liệu đại trà",
          "việc gửi thư rác quảng cáo",
          "thủ tục thanh lý giấy tờ cũ"
        ]
      },
      {
        "id": "toeic_304",
        "word": "interoffice memo",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˌɪn.t̬ɚˈɑː.fɪs ˈmem.oʊ/",
        "meaningVi": "thông tri chuyển phát giữa các phòng ban",
        "collocations": "send an interoffice memo, interoffice memo regarding parking, receive an interoffice memo",
        "example": "An interoffice memo was distributed to remind staff of the upcoming annual software audit.",
        "exampleVi": "Một thông tri nội bộ giữa các phòng ban đã được gửi đi để nhắc nhở nhân viên về đợt kiểm tra phần mềm thường niên sắp tới.",
        "optionsVi": [
          "thông tri chuyển phát giữa các phòng ban",
          "thư từ gửi cho khách hàng bên ngoài",
          "thông cáo báo chí cho công chúng",
          "bài viết trên mạng xã hội công ty"
        ]
      },
      {
        "id": "toeic_305",
        "word": "sign-off sheet",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈsaɪn.ɑːf ʃiːt/",
        "meaningVi": "phiếu ký nhận bàn giao/phê duyệt",
        "collocations": "project sign-off sheet, signature on sign-off sheet, complete the sign-off sheet",
        "example": "Before the shipment leaves the facility, the logistics supervisor must sign the sign-off sheet.",
        "exampleVi": "Trước khi lô hàng rời khỏi cơ sở, giám sát logistics phải ký vào phiếu ký nhận bàn giao.",
        "optionsVi": [
          "phiếu ký nhận bàn giao/phê duyệt",
          "bảng kê khai chi phí tiếp khách",
          "phiếu đăng ký đi nghỉ mát",
          "giấy xin nghỉ ốm có hưởng lương"
        ]
      },
      {
        "id": "toeic_306",
        "word": "stationery supplies",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈsteɪ.ʃə.ner.i səˈplaɪz/",
        "meaningVi": "đồ dùng văn phòng phẩm (bút, giấy, kẹp)",
        "collocations": "order stationery supplies, stock stationery supplies, replenish stationery supplies",
        "example": "The office administrator placed a bulk order for printer paper, pens, and other essential stationery supplies.",
        "exampleVi": "Nhân viên quản trị văn phòng đã đặt một đơn hàng số lượng lớn giấy in, bút và các văn phòng phẩm thiết yếu khác.",
        "optionsVi": [
          "đồ dùng văn phòng phẩm (bút, giấy, kẹp)",
          "thiết bị máy chủ dữ liệu lớn",
          "nội thất bàn ghế hội trường",
          "dụng cụ bảo hộ lao động nhà máy"
        ]
      },
      {
        "id": "toeic_307",
        "word": "archive records",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈɑːr.kaɪv ˈrek.ɚdz/",
        "meaningVi": "lưu trữ hồ sơ tài liệu vào kho dữ liệu",
        "collocations": "archive records digitally, retain archive records, access archive records",
        "example": "Tax statutes mandate that corporations safely archive financial records for at least seven years.",
        "exampleVi": "Luật thuế quy định các tập đoàn phải lưu trữ an toàn các hồ sơ tài chính trong ít nhất 7 năm.",
        "optionsVi": [
          "lưu trữ hồ sơ tài liệu vào kho dữ liệu",
          "tiêu hủy hồ sơ bằng máy cắt giấy",
          "công khai tài liệu lên internet",
          "chỉnh sửa số liệu kế toán cũ"
        ]
      },
      {
        "id": "toeic_308",
        "word": "clerical staff",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈkler.ɪ.kəl stæf/",
        "meaningVi": "đội ngũ nhân viên hành chính văn phòng",
        "collocations": "clerical staff duties, clerical staff handles paperwork, support clerical staff",
        "example": "Our clerical staff coordinates meeting rooms, manages incoming postal mail, and organizes records.",
        "exampleVi": "Đội ngũ nhân viên hành chính của chúng tôi điều phối các phòng họp, quản lý thư từ đến và sắp xếp hồ sơ.",
        "optionsVi": [
          "đội ngũ nhân viên hành chính văn phòng",
          "đội ngũ kỹ sư phần mềm cao cấp",
          "các thành viên hội đồng quản trị",
          "lực lượng bảo vệ ca đêm"
        ]
      },
      {
        "id": "toeic_309",
        "word": "forward an email",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈfɔːr.wɚd ən ˈiː.meɪl/",
        "meaningVi": "chuyển tiếp thư điện tử",
        "collocations": "please forward this email, forward an email to the team, forward email attachment",
        "example": "Please forward the client's inquiry email to the accounts manager for immediate action.",
        "exampleVi": "Vui lòng chuyển tiếp email thắc mắc của khách hàng tới người quản lý tài khoản để xử lý ngay.",
        "optionsVi": [
          "chuyển tiếp thư điện tử",
          "xóa thư vĩnh viễn khỏi hộp thư",
          "đánh dấu thư là thư rác",
          "soạn thảo thư mới từ đầu"
        ]
      },
      {
        "id": "toeic_310",
        "word": "bulletin board",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈbʊl.ə.t̬ɪn bɔːrd/",
        "meaningVi": "bảng tin thông báo nội bộ",
        "collocations": "post on the bulletin board, employee bulletin board, electronic bulletin board",
        "example": "Announcements concerning holiday hours are posted on the employee bulletin board in the breakroom.",
        "exampleVi": "Các thông báo liên quan đến lịch nghỉ lễ được dán trên bảng tin nhân viên trong phòng giải lao.",
        "optionsVi": [
          "bảng tin thông báo nội bộ",
          "màn hình chiếu phim sự kiện",
          "bảng lương bảo mật giám đốc",
          "bảng báo giá cho đối tác"
        ]
      },
      {
        "id": "toeic_311",
        "word": "requisition form",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌrek.wəˈzɪʃ.ən fɔːrm/",
        "meaningVi": "phiếu đề xuất cấp phát vật tư/trang thiết bị",
        "collocations": "submit a requisition form, purchase requisition form, approve requisition form",
        "example": "Department heads must approve the equipment requisition form before purchases are made.",
        "exampleVi": "Trưởng bộ phận phải phê duyệt phiếu đề xuất mua sắm trang thiết bị trước khi tiến hành mua hàng.",
        "optionsVi": [
          "phiếu đề xuất cấp phát vật tư/trang thiết bị",
          "đơn xin thôi việc tự nguyện",
          "biên bản phạt vi phạm giao thông",
          "hóa đơn thanh toán tiền phòng khách sạn"
        ]
      },
      {
        "id": "toeic_312",
        "word": "streamline paperwork",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈstriːm.laɪn ˈpeɪ.pɚ.wɜːrk/",
        "meaningVi": "tinh giản thủ tục giấy tờ",
        "collocations": "digital tools to streamline paperwork, effort to streamline paperwork, streamline internal paperwork",
        "example": "Switching to electronic signatures helped streamline administrative paperwork across all branches.",
        "exampleVi": "Chuyển sang sử dụng chữ ký điện tử đã giúp tinh giản các thủ tục giấy tờ hành chính trên khắp các chi nhánh.",
        "optionsVi": [
          "tinh giản thủ tục giấy tờ",
          "tăng thêm các biểu mẫu cần ký",
          "lưu trữ toàn bộ giấy tờ bản cứng",
          "ngừng nhận hồ sơ trực tuyến"
        ]
      },
      {
        "id": "toeic_313",
        "word": "administrative assistant",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ədˈmɪn.ə.strə.t̬ɪv əˈsɪs.tənt/",
        "meaningVi": "trợ lý hành chính văn phòng",
        "collocations": "hire an administrative assistant, administrative assistant duties, executive administrative assistant",
        "example": "The administrative assistant coordinates the Vice President's schedule and screens incoming inquiries.",
        "exampleVi": "Trợ lý hành chính điều phối lịch làm việc của Phó Chủ tịch và tiếp nhận xử lý các thắc mắc gửi đến.",
        "optionsVi": [
          "trợ lý hành chính văn phòng",
          "kỹ sư phần mềm mạng",
          "nhân viên bảo trì thang máy",
          "lái xe cơ quan"
        ]
      },
      {
        "id": "toeic_314",
        "word": "circulate a notice",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈsɜːr.kjə.leɪt ə ˈnoʊ.t̬ɪs/",
        "meaningVi": "luân chuyển, phổ biến thông báo cho mọi người",
        "collocations": "circulate a formal notice, circulate notice among staff, circulate written notice",
        "example": "Management circulated a notice regarding changes to the building's keycard access policies.",
        "exampleVi": "Ban quản lý đã phổ biến một thông báo về những thay đổi đối với chính sách ra vào bằng thẻ từ của tòa nhà.",
        "optionsVi": [
          "luân chuyển, phổ biến thông báo cho mọi người",
          "thu hồi tài liệu mật",
          "hủy bỏ quyết định khen thưởng",
          "từ chối giải quyết đơn thư"
        ]
      },
      {
        "id": "toeic_315",
        "word": "signature required",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈsɪɡ.nə.tʃɚ rɪˈkwaɪərd/",
        "meaningVi": "yêu cầu bắt buộc phải có chữ ký",
        "collocations": "package with signature required, authorized signature required, parent signature required",
        "example": "High-value contracts and certified courier deliveries always have a signature required at delivery.",
        "exampleVi": "Các hợp đồng giá trị cao và bưu kiện chuyển phát bảo đảm luôn bắt buộc phải có chữ ký khi giao nhận.",
        "optionsVi": [
          "yêu cầu bắt buộc phải có chữ ký",
          "miễn phí cước giao hàng",
          "hàng hóa được để trước cửa",
          "không cần xuất trình giấy tờ"
        ]
      },
      {
        "id": "toeic_316",
        "word": "formal correspondence",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈfɔːr.məl ˌkɔːr.əˈspɑːn.dəns/",
        "meaningVi": "thư từ trao đổi giao dịch chính thức",
        "collocations": "conduct formal correspondence, formal correspondence with authorities, draft formal correspondence",
        "example": "All formal correspondence addressed to foreign regulatory authorities must use company letterhead.",
        "exampleVi": "Mọi thư từ giao dịch chính thức gửi tới các cơ quan quản lý nước ngoài phải sử dụng tiêu đề thư của công ty.",
        "optionsVi": [
          "thư từ trao đổi giao dịch chính thức",
          "tin nhắn trò chuyện riêng tư",
          "thông báo dán ở hành lang",
          "email quảng cáo giảm giá"
        ]
      },
      {
        "id": "toeic_317",
        "word": "shred confidential documents",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ʃred ˌkɑːn.fəˈden.ʃəl ˈdɑː.kjə.mənts/",
        "meaningVi": "tiêu hủy tài liệu mật bằng máy cắt giấy",
        "collocations": "policy to shred confidential documents, shred confidential documents daily, machine to shred documents",
        "example": "To prevent identity theft, office personnel must immediately shred all discarded confidential documents.",
        "exampleVi": "Để ngăn chặn hành vi đánh cắp danh tính, nhân viên văn phòng phải tiêu hủy ngay toàn bộ tài liệu mật bỏ đi bằng máy cắt giấy.",
        "optionsVi": [
          "tiêu hủy tài liệu mật bằng máy cắt giấy",
          "đóng dấu lưu trữ vĩnh viễn",
          "gửi tài liệu qua bưu điện thường",
          "in thêm nhiều bản sao"
        ]
      },
      {
        "id": "toeic_318",
        "word": "procure office supplies",
        "level": "B2",
        "type": "collocation",
        "ipa": "/prəˈkjʊr ˈɑː.fɪs səˈplaɪz/",
        "meaningVi": "mua sắm trang thiết bị văn phòng",
        "collocations": "procure office supplies locally, budget to procure office supplies, contract to procure supplies",
        "example": "The facilities team works with an authorized commercial vendor to procure office supplies at bulk rates.",
        "exampleVi": "Đội ngũ cơ sở vật chất làm việc với nhà cung cấp thương mại được ủy quyền để mua sắm vật tư văn phòng với giá bán buôn.",
        "optionsVi": [
          "mua sắm trang thiết bị văn phòng",
          "thanh lý đồ nội thất cũ",
          "thuê mượn mặt bằng kinh doanh",
          "kiểm kê tài sản cố định"
        ]
      },
      {
        "id": "toeic_319",
        "word": "postal courier",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈpoʊ.stəl ˈkʊr.i.ɚ/",
        "meaningVi": "nhân viên chuyển phát thư từ/bưu phẩm",
        "collocations": "deliver by postal courier, dispatched via postal courier, reliable postal courier",
        "example": "Original signed deeds and certificates were sent directly via an insured postal courier.",
        "exampleVi": "Các văn tự và giấy chứng nhận có chữ ký gốc đã được gửi trực tiếp qua nhân viên chuyển phát bưu điện có bảo hiểm.",
        "optionsVi": [
          "nhân viên chuyển phát thư từ/bưu phẩm",
          "nhân viên bán hàng lưu động",
          "người hướng dẫn khách du lịch",
          "chuyên viên kiểm toán thuế"
        ]
      },
      {
        "id": "toeic_320",
        "word": "annual report distribution",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈæn.ju.əl rɪˈpɔːrt ˌdɪs.trɪˈbjuː.ʃən/",
        "meaningVi": "việc phát hành, gửi báo cáo thường niên",
        "collocations": "oversee annual report distribution, electronic annual report distribution, schedule annual report distribution",
        "example": "Shareholder services coordinated the electronic annual report distribution ahead of the yearly general meeting.",
        "exampleVi": "Bộ phận dịch vụ cổ đông đã điều phối việc phát hành báo cáo thường niên điện tử trước kỳ họp đại hội cổ đông.",
        "optionsVi": [
          "việc phát hành, gửi báo cáo thường niên",
          "kế hoạch thu hồi báo cáo cũ",
          "buổi họp báo ra mắt sản phẩm",
          "quy trình kiểm toán nội bộ"
        ]
      },
      {
        "id": "toeic_321",
        "word": "reception desk",
        "level": "B1",
        "type": "collocation",
        "ipa": "/rɪˈsep.ʃən desk/",
        "meaningVi": "bàn tiếp tân ở sảnh văn phòng",
        "collocations": "report to the reception desk, check in at the reception desk, reception desk staff",
        "example": "All external visitors must register and sign in at the front reception desk upon entering the building.",
        "exampleVi": "Tất cả khách từ bên ngoài phải đăng ký và ký tên tại bàn tiếp tân phía trước khi bước vào tòa nhà.",
        "optionsVi": [
          "bàn tiếp tân ở sảnh văn phòng",
          "bàn làm việc của giám đốc",
          "quầy thu ngân nhà ăn",
          "khu vực kiểm tra an ninh cổng sau"
        ]
      },
      {
        "id": "toeic_322",
        "word": "pending approval",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈpen.dɪŋ əˈpruː.vəl/",
        "meaningVi": "văn bản đang chờ xét duyệt",
        "collocations": "application is pending approval, budget pending approval, decisions pending board approval",
        "example": "The proposed budget for our department is currently pending final approval from the CFO.",
        "exampleVi": "Ngân sách đề xuất cho bộ phận chúng tôi hiện đang chờ sự phê duyệt cuối cùng từ Giám đốc tài chính.",
        "optionsVi": [
          "văn bản đang chờ xét duyệt",
          "hồ sơ đã bị từ chối chính thức",
          "văn bản đã có hiệu lực thi hành",
          "tài liệu đã được tiêu hủy"
        ]
      },
      {
        "id": "toeic_323",
        "word": "dispatch a parcel",
        "level": "B2",
        "type": "collocation",
        "ipa": "/dɪˈspætʃ ə ˈpɑːr.səl/",
        "meaningVi": "gửi một bưu kiện hàng qua đường bưu điện",
        "collocations": "promptly dispatch a parcel, dispatch a parcel internationally, prepare to dispatch a parcel",
        "example": "The mailroom team prepared to dispatch an urgent parcel of legal briefs to the foreign ministry.",
        "exampleVi": "Đội ngũ phòng văn thư đã chuẩn bị để gửi một bưu kiện khẩn chứa các bản tóm tắt pháp lý tới Bộ Ngoại giao.",
        "optionsVi": [
          "gửi một bưu kiện hàng qua đường bưu điện",
          "nhận bưu phẩm từ bưu tá",
          "từ chối nhận bưu kiện giao sai",
          "mở hộp kiểm tra đồ đạc"
        ]
      },
      {
        "id": "toeic_324",
        "word": "official announcement",
        "level": "B1",
        "type": "collocation",
        "ipa": "/əˈfɪʃ.əl əˈnaʊns.mənt/",
        "meaningVi": "thông báo chính thức từ ban giám đốc",
        "collocations": "make an official announcement, await an official announcement, official announcement regarding merger",
        "example": "The executive board made an official announcement confirming the opening of a new regional office.",
        "exampleVi": "Ban điều hành đã đưa ra một thông báo chính thức xác nhận việc mở văn phòng khu vực mới.",
        "optionsVi": [
          "thông báo chính thức từ ban giám đốc",
          "tin đồn thất thiệt ngoài hành lang",
          "bản khảo sát nội bộ không chính thức",
          "thư mời tham dự tiệc sinh nhật"
        ]
      },
      {
        "id": "toeic_325",
        "word": "filing cabinet",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈfaɪ.lɪŋ ˌkæb.nət/",
        "meaningVi": "tủ sắt lưu trữ hồ sơ, tài liệu",
        "collocations": "lock the filing cabinet, organize filing cabinets, fireproof filing cabinet",
        "example": "Historical tax audit reports are securely locked in a fireproof filing cabinet in the basement archive.",
        "exampleVi": "Các báo cáo kiểm toán thuế trong quá khứ được cất khóa an toàn trong tủ hồ sơ chống cháy tại kho lưu trữ dưới tầng hầm.",
        "optionsVi": [
          "tủ sắt lưu trữ hồ sơ, tài liệu",
          "tủ để quần áo bảo hộ",
          "giá để sách trong thư viện",
          "thùng chứa rác tái chế"
        ]
      }
    ]
  },
  {
    "groupId": "toeic_it_enterprise",
    "name": "Hạ Tầng CNTT, An Ninh Mạng & Dữ Liệu Doanh Nghiệp",
    "icon": "💻",
    "category": "toeic",
    "level": "B2",
    "description": "An ninh mạng, lưu trữ đám mây, sao lưu dữ liệu, bảo trì máy chủ, khắc phục sự cố và cấp quyền truy cập.",
    "words": [
      {
        "id": "toeic_326",
        "word": "cybersecurity breach",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌsaɪ.bɚ.səˈkjʊr.ə.t̬i briːtʃ/",
        "meaningVi": "sự cố rò rỉ, xâm phạm an ninh mạng",
        "collocations": "prevent a cybersecurity breach, investigate a cybersecurity breach, serious cybersecurity breach",
        "example": "The IT team responded swiftly to contain a potential cybersecurity breach before sensitive data leaked.",
        "exampleVi": "Đội ngũ CNTT đã phản ứng nhanh chóng để khống chế một sự cố an ninh mạng tiềm ẩn trước khi dữ liệu nhạy cảm bị rò rỉ.",
        "optionsVi": [
          "sự cố rò rỉ, xâm phạm an ninh mạng",
          "đợt nâng cấp đường truyền internet",
          "hoạt động bảo trì định kỳ máy chủ",
          "chính sách cấp phát máy tính mới"
        ]
      },
      {
        "id": "toeic_327",
        "word": "data encryption",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈdeɪ.t̬ə ɪnˈkrɪp.ʃən/",
        "meaningVi": "hoạt động mã hóa bảo mật dữ liệu",
        "collocations": "end-to-end data encryption, implement data encryption, data encryption standards",
        "example": "All financial transactions processed on our platform utilize 256-bit end-to-end data encryption.",
        "exampleVi": "Tất cả các giao dịch tài chính được xử lý trên nền tảng của chúng tôi đều sử dụng mã hóa dữ liệu đầu cuối 256-bit.",
        "optionsVi": [
          "hoạt động mã hóa bảo mật dữ liệu",
          "sao chép dữ liệu sang thẻ nhớ",
          "xóa vĩnh viễn tệp tin hỏng",
          "nén dữ liệu để giảm dung lượng"
        ]
      },
      {
        "id": "toeic_328",
        "word": "cloud storage",
        "level": "B1",
        "type": "collocation",
        "ipa": "/klaʊd ˈstɔːr.ɪdʒ/",
        "meaningVi": "dịch vụ lưu trữ dữ liệu đám mây",
        "collocations": "migrate to cloud storage, secure cloud storage, cloud storage provider",
        "example": "Employees can access collaborative work files seamlessly from anywhere via secure cloud storage.",
        "exampleVi": "Nhân viên có thể truy cập các tập tin làm việc cộng tác một cách liền mạch từ mọi nơi thông qua lưu trữ đám mây an toàn.",
        "optionsVi": [
          "dịch vụ lưu trữ dữ liệu đám mây",
          "ổ cứng di động gắn ngoài",
          "phòng máy chủ đặt tại chỗ",
          "tủ lưu trữ hồ sơ giấy"
        ]
      },
      {
        "id": "toeic_329",
        "word": "technical support desk",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈtek.nɪ.kəl səˈpɔːrt desk/",
        "meaningVi": "bàn hỗ trợ kỹ thuật IT nội bộ",
        "collocations": "contact technical support desk, internal technical support desk, open a ticket with support desk",
        "example": "If your workstation experiences software crashes, contact the internal technical support desk immediately.",
        "exampleVi": "Nếu máy trạm của bạn gặp lỗi sập phần mềm, hãy liên hệ ngay với bàn hỗ trợ kỹ thuật nội bộ.",
        "optionsVi": [
          "bàn hỗ trợ kỹ thuật IT nội bộ",
          "quầy lễ tân đón khách",
          "bàn thu ngân nhà ăn",
          "bộ phận bảo vệ cơ quan"
        ]
      },
      {
        "id": "toeic_330",
        "word": "software upgrade",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈsɑːft.wer ˈʌp.ɡreɪd/",
        "meaningVi": "việc nâng cấp phiên bản phần mềm",
        "collocations": "mandatory software upgrade, schedule software upgrade, perform software upgrade",
        "example": "The corporate network will undergo a mandatory software upgrade tonight between midnight and 3:00 AM.",
        "exampleVi": "Mạng doanh nghiệp sẽ trải qua đợt nâng cấp phần mềm bắt buộc vào đêm nay trong khoảng từ nửa đêm đến 3:00 sáng.",
        "optionsVi": [
          "việc nâng cấp phiên bản phần mềm",
          "gỡ cài đặt ứng dụng cũ",
          "mua mới máy in văn phòng",
          "khôi phục mật khẩu tài khoản"
        ]
      },
      {
        "id": "toeic_331",
        "word": "system downtime",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈsɪs.təm ˈdaʊn.taɪm/",
        "meaningVi": "thời gian hệ thống tạm ngưng hoạt động",
        "collocations": "minimize system downtime, scheduled system downtime, unplanned system downtime",
        "example": "Engineers scheduled the database migration during non-business hours to minimize system downtime.",
        "exampleVi": "Các kỹ sư đã lên lịch chuyển đổi cơ sở dữ liệu ngoài giờ làm việc để giảm thiểu thời gian ngưng trệ hệ thống.",
        "optionsVi": [
          "thời gian hệ thống tạm ngưng hoạt động",
          "thời gian khởi động máy tính",
          "tốc độ xử lý của vi xử lý",
          "thời lượng pin sử dụng liên tục"
        ]
      },
      {
        "id": "toeic_332",
        "word": "two-factor authentication",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌtuːˈfæk.tɚ əˌθen.t̬əˈkeɪ.ʃən/",
        "meaningVi": "xác thực bảo mật hai lớp (2FA)",
        "collocations": "enable two-factor authentication, require two-factor authentication, set up two-factor authentication",
        "example": "All remote employees must enable two-factor authentication to access the internal enterprise network.",
        "exampleVi": "Tất cả nhân viên làm việc từ xa phải bật xác thực hai yếu tố để truy cập mạng doanh nghiệp nội bộ.",
        "optionsVi": [
          "xác thực bảo mật hai lớp (2FA)",
          "đăng nhập bằng mật khẩu đơn giản",
          "sử dụng mạng wifi công cộng",
          "chia sẻ tài khoản với đồng nghiệp"
        ]
      },
      {
        "id": "toeic_333",
        "word": "backup database",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈbæk.ʌp ˈdeɪ.t̬ə.beɪs/",
        "meaningVi": "sao lưu cơ sở dữ liệu dự phòng",
        "collocations": "daily backup database, restore from backup database, secure backup database",
        "example": "The server automatically generates a secure backup database every night at 2:00 AM.",
        "exampleVi": "Máy chủ tự động tạo một bản sao lưu cơ sở dữ liệu an toàn vào mỗi đêm lúc 2:00 sáng.",
        "optionsVi": [
          "sao lưu cơ sở dữ liệu dự phòng",
          "xóa sạch dữ liệu người dùng",
          "nâng cấp bộ nhớ ram máy chủ",
          "cài đặt hệ điều hành mới"
        ]
      },
      {
        "id": "toeic_334",
        "word": "unauthorized access",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ʌnˈɑː.θə.raɪzd ˈæk.ses/",
        "meaningVi": "hành vi truy cập trái phép không được cấp quyền",
        "collocations": "prevent unauthorized access, protect against unauthorized access, detect unauthorized access",
        "example": "Strong firewalls and strict access controls are installed to prevent unauthorized access to financial servers.",
        "exampleVi": "Các tường lửa mạnh mẽ và biện pháp kiểm soát truy cập nghiêm ngặt được cài đặt để ngăn chặn hành vi truy cập trái phép vào máy chủ tài chính.",
        "optionsVi": [
          "hành vi truy cập trái phép không được cấp quyền",
          "đăng nhập hợp lệ bằng quyền quản trị",
          "truy cập công khai trên internet",
          "quy trình đổi mật khẩu định kỳ"
        ]
      },
      {
        "id": "toeic_335",
        "word": "network outage",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈnet.wɜːrk ˈaʊ.t̬ɪdʒ/",
        "meaningVi": "sự cố mất kết nối mạng toàn diện",
        "collocations": "widespread network outage, suffer a network outage, resolve the network outage",
        "example": "A severed fiber optic cable resulted in an unexpected four-hour network outage across the campus.",
        "exampleVi": "Một sợi cáp quang bị đứt đã dẫn tới sự cố mất kết nối mạng ngoài dự kiến kéo dài 4 tiếng trong toàn bộ khuôn viên.",
        "optionsVi": [
          "sự cố mất kết nối mạng toàn diện",
          "đợt tăng tốc độ đường truyền",
          "sự cố mất điện tòa nhà",
          "chương trình thử nghiệm đường dây mới"
        ]
      },
      {
        "id": "toeic_336",
        "word": "firewall protection",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈfaɪr.wɑːl prəˈtek.ʃən/",
        "meaningVi": "bức tường lửa bảo vệ máy tính",
        "collocations": "robust firewall protection, bypass firewall protection, enterprise firewall protection",
        "example": "Robust firewall protection prevents external cyber attackers from penetrating the corporate intranet.",
        "exampleVi": "Bức tường lửa bảo vệ mạnh mẽ ngăn chặn những kẻ tấn công mạng từ bên ngoài thâm nhập vào mạng nội bộ công ty.",
        "optionsVi": [
          "bức tường lửa bảo vệ máy tính",
          "thiết bị dập lửa tự động",
          "hệ thống dây điện chống cháy",
          "kính cường lực chắn gió"
        ]
      },
      {
        "id": "toeic_337",
        "word": "server maintenance",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈsɜːr.vɚ ˈmeɪn.tən.əns/",
        "meaningVi": "hoạt động bảo trì máy chủ doanh nghiệp",
        "collocations": "routine server maintenance, scheduled server maintenance, conduct server maintenance",
        "example": "Users were notified twenty-four hours ahead of time about the scheduled weekend server maintenance.",
        "exampleVi": "Người dùng đã được thông báo trước 24 giờ về đợt bảo trì máy chủ theo lịch trình vào cuối tuần.",
        "optionsVi": [
          "hoạt động bảo trì máy chủ doanh nghiệp",
          "mua sắm bàn ghế văn phòng",
          "cài đặt ứng dụng trên điện thoại cá nhân",
          "sơn sửa phòng họp trung tâm"
        ]
      },
      {
        "id": "toeic_338",
        "word": "phishing attempt",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈfɪʃ.ɪŋ əˌtempt/",
        "meaningVi": "vụ lừa đảo đánh cắp thông tin qua email giả mạo",
        "collocations": "recognize a phishing attempt, report a phishing attempt, suspicious phishing attempt",
        "example": "Staff are trained never to click suspicious links that might represent a deceptive phishing attempt.",
        "exampleVi": "Nhân viên được đào tạo để không bao giờ nhấp vào các liên kết đáng ngờ có thể là vụ lừa đảo qua email giả mạo.",
        "optionsVi": [
          "vụ lừa đảo đánh cắp thông tin qua email giả mạo",
          "thư mời tham gia khảo sát",
          "thông báo trúng thưởng hợp pháp",
          "email gửi biên lai thanh toán hàng"
        ]
      },
      {
        "id": "toeic_339",
        "word": "bandwidth limit",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈbænd.wɪtθ ˈlɪm.ɪt/",
        "meaningVi": "giới hạn băng thông đường truyền",
        "collocations": "exceed bandwidth limit, monthly bandwidth limit, unlimited bandwidth",
        "example": "Streaming ultra-high-definition video during work hours can quickly exceed office bandwidth limits.",
        "exampleVi": "Xem video độ phân giải siêu cao trong giờ làm việc có thể nhanh chóng vượt quá giới hạn băng thông của văn phòng.",
        "optionsVi": [
          "giới hạn băng thông đường truyền",
          "dung lượng bộ nhớ ram",
          "kích thước màn hình máy tính",
          "tốc độ quay của ổ cứng"
        ]
      },
      {
        "id": "toeic_340",
        "word": "user permissions",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈjuː.zɚ pɚˈmɪʃ.ənz/",
        "meaningVi": "quyền hạn truy cập của người dùng trên hệ thống",
        "collocations": "configure user permissions, grant user permissions, restrict user permissions",
        "example": "System administrators configured strict user permissions to ensure employees only view authorized records.",
        "exampleVi": "Quản trị viên hệ thống đã cấu hình quyền hạn người dùng nghiêm ngặt để đảm bảo nhân viên chỉ xem những hồ sơ được cho phép.",
        "optionsVi": [
          "quyền hạn truy cập của người dùng trên hệ thống",
          "mật khẩu đăng nhập mặc định",
          "thời gian sử dụng máy tính trong ngày",
          "danh sách thiết bị được cấp phát"
        ]
      },
      {
        "id": "toeic_341",
        "word": "hardware malfunction",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈhɑːrd.wer ˌmælˈfʌŋk.ʃən/",
        "meaningVi": "sự cố hỏng hóc thiết bị phần cứng",
        "collocations": "diagnose hardware malfunction, critical hardware malfunction, replace after hardware malfunction",
        "example": "A serious hardware malfunction in the primary storage array caused database access delays.",
        "exampleVi": "Một sự cố phần cứng nghiêm trọng trong mảng lưu trữ chính đã gây ra sự chậm trễ truy cập cơ sở dữ liệu.",
        "optionsVi": [
          "sự cố hỏng hóc thiết bị phần cứng",
          "lỗi chính tả trong văn bản",
          "nhiễm virus phần mềm độc hại",
          "mất kết nối wifi tạm thời"
        ]
      },
      {
        "id": "toeic_342",
        "word": "migrate data",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈmaɪ.ɡreɪt ˈdeɪ.t̬ə/",
        "meaningVi": "di chuyển, chuyển đổi cơ sở dữ liệu sang hệ thống mới",
        "collocations": "seamlessly migrate data, plan to migrate data, migrate data to the cloud",
        "example": "IT consultants worked through the holiday weekend to migrate data to the modern cloud infrastructure.",
        "exampleVi": "Các chuyên gia tư vấn CNTT đã làm việc suốt kỳ nghỉ cuối tuần để chuyển đổi dữ liệu sang hạ tầng đám mây hiện đại.",
        "optionsVi": [
          "di chuyển, chuyển đổi cơ sở dữ liệu sang hệ thống mới",
          "xóa toàn bộ lịch sử truy cập",
          "khôi phục dữ liệu đã bị xóa",
          "in dữ liệu ra giấy lưu trữ"
        ]
      },
      {
        "id": "toeic_343",
        "word": "troubleshoot connectivity",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈtrʌb.əl.ʃuːt kəˌnekˈtɪv.ə.t̬i/",
        "meaningVi": "dò tìm và khắc phục sự cố kết nối mạng",
        "collocations": "troubleshoot network connectivity, help troubleshoot connectivity, step-by-step to troubleshoot connectivity",
        "example": "Network technicians dispatched to the satellite office helped staff troubleshoot recurring Wi-Fi connectivity problems.",
        "exampleVi": "Các kỹ thuật viên mạng được cử đến văn phòng vệ tinh đã giúp nhân viên khắc phục các sự cố kết nối Wi-Fi lặp đi lặp lại.",
        "optionsVi": [
          "dò tìm và khắc phục sự cố kết nối mạng",
          "ngắt kết nối cáp mạng vĩnh viễn",
          "thay thế toàn bộ máy tính mới",
          "nâng cấp gói cước internet"
        ]
      },
      {
        "id": "toeic_344",
        "word": "proprietary software",
        "level": "B2",
        "type": "collocation",
        "ipa": "/prəˈpraɪə.ter.i ˈsɑːft.wer/",
        "meaningVi": "phần mềm sở hữu độc quyền",
        "collocations": "develop proprietary software, license proprietary software, proprietary software tools",
        "example": "The brokerage firm utilizes custom proprietary software for executing high-frequency algorithmic trades.",
        "exampleVi": "Công ty môi giới sử dụng phần mềm độc quyền được thiết kế riêng để thực hiện các giao dịch thuật toán tần suất cao.",
        "optionsVi": [
          "phần mềm sở hữu độc quyền",
          "phần mềm mã nguồn mở miễn phí",
          "bản dùng thử có thời hạn 30 ngày",
          "trò chơi điện tử trực tuyến"
        ]
      },
      {
        "id": "toeic_345",
        "word": "automated backup",
        "level": "B1",
        "type": "collocation",
        "ipa": "/ˈɑː.t̬ə.meɪ.t̬ɪd ˈbæk.ʌp/",
        "meaningVi": "cơ chế tự động sao lưu dữ liệu dự phòng",
        "collocations": "configure automated backup, automated cloud backup, reliable automated backup",
        "example": "Configuring daily automated backups guarantees that no vital enterprise documents are lost if a drive fails.",
        "exampleVi": "Cấu hình sao lưu tự động hàng ngày đảm bảo rằng không có tài liệu doanh nghiệp quan trọng nào bị mất nếu ổ đĩa bị hỏng.",
        "optionsVi": [
          "cơ chế tự động sao lưu dữ liệu dự phòng",
          "quá trình quét virus thủ công",
          "việc cập nhật ứng dụng tự động",
          "tự động tắt nguồn máy tính"
        ]
      },
      {
        "id": "toeic_346",
        "word": "intranet portal",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈɪn.trə.net ˈpɔːr.t̬əl/",
        "meaningVi": "cổng thông tin nội bộ của công ty",
        "collocations": "log in to intranet portal, company intranet portal, access via intranet portal",
        "example": "Employees can request paid leave and view pay stubs by logging into the corporate intranet portal.",
        "exampleVi": "Nhân viên có thể xin nghỉ phép và xem phiếu lương bằng cách đăng nhập vào cổng thông tin nội bộ của công ty.",
        "optionsVi": [
          "cổng thông tin nội bộ của công ty",
          "trang web thương mại điện tử công khai",
          "trang mạng xã hội cá nhân",
          "cổng tìm kiếm việc làm trực tuyến"
        ]
      },
      {
        "id": "toeic_347",
        "word": "restore files",
        "level": "B1",
        "type": "collocation",
        "ipa": "/rɪˈstɔːr faɪlz/",
        "meaningVi": "khôi phục lại các tập tin dữ liệu đã mất",
        "collocations": "restore files from backup, ability to restore files, successfully restore files",
        "example": "Thanks to our hourly snapshots, the IT administrator was able to restore the accidentally deleted files immediately.",
        "exampleVi": "Nhờ các bản chụp dữ liệu hàng giờ, quản trị viên CNTT đã có thể khôi phục các tệp vô tình bị xóa ngay lập tức.",
        "optionsVi": [
          "khôi phục lại các tập tin dữ liệu đã mất",
          "xóa vĩnh viễn tệp khỏi thùng rác",
          "đổi tên tệp tài liệu lưu trữ",
          "chuyển tệp sang thư mục nén"
        ]
      },
      {
        "id": "toeic_348",
        "word": "malware detection",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˈmæl.wer dɪˈtek.ʃən/",
        "meaningVi": "việc phát hiện phần mềm độc hại",
        "collocations": "real-time malware detection, advanced malware detection, malware detection software",
        "example": "The security software features real-time malware detection that quarantines infected downloads instantly.",
        "exampleVi": "Phần mềm bảo mật có tính năng phát hiện phần mềm độc hại theo thời gian thực để cách ly các tệp tải về bị nhiễm ngay lập tức.",
        "optionsVi": [
          "việc phát hiện phần mềm độc hại",
          "phần mềm gỡ lỗi lập trình",
          "công cụ đo tốc độ tải trang",
          "tiện ích chặn quảng cáo trình duyệt"
        ]
      },
      {
        "id": "toeic_349",
        "word": "IT infrastructure",
        "level": "B2",
        "type": "collocation",
        "ipa": "/ˌaɪˈtiː ˈɪn.frəˌstrʌk.tʃɚ/",
        "meaningVi": "cơ sở hạ tầng công nghệ thông tin",
        "collocations": "modernize IT infrastructure, scalable IT infrastructure, robust IT infrastructure",
        "example": "The bank invested fifty million dollars to modernize its core IT infrastructure to support digital banking.",
        "exampleVi": "Ngân hàng đã đầu tư 50 triệu USD để hiện đại hóa cơ sở hạ tầng CNTT cốt lõi nhằm hỗ trợ ngân hàng số.",
        "optionsVi": [
          "cơ sở hạ tầng công nghệ thông tin",
          "hệ thống giao thông nội bộ nhà máy",
          "chuỗi cung ứng nguyên vật liệu",
          "mạng lưới văn phòng giao dịch"
        ]
      },
      {
        "id": "toeic_350",
        "word": "remote desktop access",
        "level": "B2",
        "type": "collocation",
        "ipa": "/rɪˈmoʊt ˈdesk.tɑːp ˈæk.ses/",
        "meaningVi": "kết nối điều khiển máy tính từ xa",
        "collocations": "secure remote desktop access, enable remote desktop access, configure remote desktop access",
        "example": "Technical specialists used encrypted remote desktop access to troubleshoot software glitches on employee laptops.",
        "exampleVi": "Các chuyên viên kỹ thuật đã sử dụng kết nối điều khiển máy tính từ xa có mã hóa để khắc phục sự cố phần mềm trên máy tính xách tay của nhân viên.",
        "optionsVi": [
          "kết nối điều khiển máy tính từ xa",
          "cài đặt hệ điều hành tại chỗ",
          "thay thế linh kiện bàn phím mới",
          "vệ sinh quạt tản nhiệt máy tính"
        ]
      }
    ]
  },
  {
    "groupId": "pos_nouns",
    "name": "100 Danh Từ Trọng Tâm (Nouns Essentials)",
    "icon": "🏛️",
    "category": "pos",
    "level": "B1",
    "description": "100 danh từ tần suất cao trình độ A2–B2 về đời sống, công việc, tư duy và xã hội.",
    "words": [
      {
        "id": "noun_001",
        "word": "advantage",
        "level": "A2",
        "type": "noun",
        "ipa": "/ədˈvɑːn.tɪdʒ/",
        "meaningVi": "lợi thế, ưu điểm",
        "collocations": "take advantage of, competitive advantage, major advantage",
        "example": "Speaking two languages is a huge advantage in today's job market.",
        "exampleVi": "Biết hai thứ tiếng là một lợi thế rất lớn trên thị trường việc làm hiện nay.",
        "optionsVi": [
          "lợi thế, ưu điểm",
          "sự bất lợi, điểm trừ",
          "sự phản đối kịch liệt",
          "chi phí phát sinh"
        ]
      },
      {
        "id": "noun_002",
        "word": "advice",
        "level": "A2",
        "type": "noun",
        "ipa": "/ədˈvaɪs/",
        "meaningVi": "lời khuyên, ý kiến chỉ dẫn",
        "collocations": "give advice, seek professional advice, take someone's advice",
        "example": "My mentor gave me valuable advice about career development.",
        "exampleVi": "Người cố vấn đã cho tôi lời khuyên quý báu về phát triển sự nghiệp.",
        "optionsVi": [
          "lời khuyên, ý kiến chỉ dẫn",
          "bản báo cáo tài chính",
          "lời cảnh báo nguy hiểm",
          "sự trừng phạt"
        ]
      },
      {
        "id": "noun_003",
        "word": "choice",
        "level": "A2",
        "type": "noun",
        "ipa": "/tʃɔɪs/",
        "meaningVi": "sự lựa chọn, quyền chọn",
        "collocations": "make a choice, have no choice, wide choice",
        "example": "You have the freedom to make your own choice.",
        "exampleVi": "Bạn có quyền tự do đưa ra sự lựa chọn của riêng mình.",
        "optionsVi": [
          "sự lựa chọn, quyền chọn",
          "nghĩa vụ bắt buộc",
          "sự do dự kéo dài",
          "sự ép buộc"
        ]
      },
      {
        "id": "noun_004",
        "word": "decision",
        "level": "A2",
        "type": "noun",
        "ipa": "/dɪˈsɪʒ.ən/",
        "meaningVi": "quyết định, sự phán quyết",
        "collocations": "make a decision, reach a decision, final decision",
        "example": "We need to make a final decision before Friday.",
        "exampleVi": "Chúng ta cần đưa ra quyết định cuối cùng trước thứ Sáu.",
        "optionsVi": [
          "quyết định, sự phán quyết",
          "sự thỏa hiệp tạm thời",
          "kế hoạch dự phòng",
          "sự trì hoãn"
        ]
      },
      {
        "id": "noun_005",
        "word": "difference",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈdɪf.ər.əns/",
        "meaningVi": "sự khác biệt, điểm khác nhau",
        "collocations": "make a difference, tell the difference, significant difference",
        "example": "Regular exercise can make a big difference to your energy levels.",
        "exampleVi": "Tập thể dục đều đặn có thể tạo ra sự khác biệt lớn cho mức năng lượng của bạn.",
        "optionsVi": [
          "sự khác biệt, điểm khác nhau",
          "sự tương đồng hoàn toàn",
          "sự nhầm lẫn tai hại",
          "sự lặp đi lặp lại"
        ]
      },
      {
        "id": "noun_006",
        "word": "experience",
        "level": "A2",
        "type": "noun",
        "ipa": "/ɪkˈspɪə.ri.əns/",
        "meaningVi": "kinh nghiệm, trải nghiệm thực tế",
        "collocations": "gain experience, practical experience, lack of experience",
        "example": "She has five years of practical experience in digital marketing.",
        "exampleVi": "Cô ấy có năm năm kinh nghiệm thực tế trong lĩnh vực tiếp thị số.",
        "optionsVi": [
          "kinh nghiệm, trải nghiệm thực tế",
          "bằng cấp học thuật",
          "sự suy đoán lý thuyết",
          "kỳ nghỉ phép"
        ]
      },
      {
        "id": "noun_007",
        "word": "feeling",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈfiː.lɪŋ/",
        "meaningVi": "cảm giác, cảm xúc",
        "collocations": "have a feeling, hurt someone's feelings, gut feeling",
        "example": "I had a strong feeling that our proposal would be accepted.",
        "exampleVi": "Tôi có một linh cảm mạnh mẽ rằng đề xuất của chúng tôi sẽ được chấp nhận.",
        "optionsVi": [
          "cảm giác, cảm xúc",
          "suy nghĩ logic",
          "quy tắc đạo đức",
          "bằng chứng xác thực"
        ]
      },
      {
        "id": "noun_008",
        "word": "government",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈɡʌv.ən.mənt/",
        "meaningVi": "chính phủ, chính quyền",
        "collocations": "local government, government policy, federal government",
        "example": "The government introduced new incentives for renewable energy.",
        "exampleVi": "Chính phủ đã đưa ra các chính sách khuyến khích mới cho năng lượng tái tạo.",
        "optionsVi": [
          "chính phủ, chính quyền",
          "tổ chức phi chính phủ",
          "doanh nghiệp tư nhân",
          "hội phụ huynh học sinh"
        ]
      },
      {
        "id": "noun_009",
        "word": "information",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˌɪn.fəˈmeɪ.ʃən/",
        "meaningVi": "thông tin, dữ liệu cung cấp",
        "collocations": "gather information, reliable information, confidential information",
        "example": "Please verify all information before submitting the application.",
        "exampleVi": "Vui lòng xác minh mọi thông tin trước khi nộp đơn ứng tuyển.",
        "optionsVi": [
          "thông tin, dữ liệu cung cấp",
          "tin đồn thất thiệt",
          "lời phán xét cá nhân",
          "bản nháp sơ bộ"
        ]
      },
      {
        "id": "noun_010",
        "word": "knowledge",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈnɒl.ɪdʒ/",
        "meaningVi": "kiến thức, sự hiểu biết",
        "collocations": "acquire knowledge, in-depth knowledge, broaden one's knowledge",
        "example": "Reading books is one of the best ways to broaden your knowledge.",
        "exampleVi": "Đọc sách là một trong những cách tốt nhất để mở rộng kiến thức của bạn.",
        "optionsVi": [
          "kiến thức, sự hiểu biết",
          "sự thiếu hiểu biết",
          "sự tưởng tượng viển vông",
          "linh cảm nhất thời"
        ]
      },
      {
        "id": "noun_011",
        "word": "memory",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˈmem.ər.i/",
        "meaningVi": "trí nhớ, kỷ niệm",
        "collocations": "fond memory, short-term memory, keep as a memory",
        "example": "Visiting Da Lat with my best friends is a wonderful memory.",
        "exampleVi": "Chuyến đi Đà Lạt cùng những người bạn thân là một kỷ niệm tuyệt vời.",
        "optionsVi": [
          "trí nhớ, kỷ niệm",
          "nỗi ám ảnh tương lai",
          "kế hoạch công tác",
          "giấc mơ viễn vông"
        ]
      },
      {
        "id": "noun_012",
        "word": "opportunity",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˌɒp.əˈtʃuː.nə.ti/",
        "meaningVi": "cơ hội, thời cơ thuận lợi",
        "collocations": "seize an opportunity, missed opportunity, career opportunity",
        "example": "This internship offers a golden opportunity to learn from industry experts.",
        "exampleVi": "Kỳ thực tập này mang đến một cơ hội vàng để học hỏi từ các chuyên gia trong ngành.",
        "optionsVi": [
          "cơ hội, thời cơ thuận lợi",
          "rào cản nan giải",
          "nguy cơ thất bại",
          "khoản chi phí ẩn"
        ]
      },
      {
        "id": "noun_013",
        "word": "opinion",
        "level": "A2",
        "type": "noun",
        "ipa": "/əˈpɪn.jən/",
        "meaningVi": "ý kiến, quan điểm cá nhân",
        "collocations": "express an opinion, in my opinion, second opinion",
        "example": "In my opinion, teamwork is essential for the project's success.",
        "exampleVi": "Theo quan điểm của tôi, làm việc nhóm là điều thiết yếu cho thành công của dự án.",
        "optionsVi": [
          "ý kiến, quan điểm cá nhân",
          "sự thật hiển nhiên",
          "chỉ thị cấp trên",
          "bản hợp đồng kinh tế"
        ]
      },
      {
        "id": "noun_014",
        "word": "situation",
        "level": "A2",
        "type": "noun",
        "ipa": "/ˌsɪtʃ.uˈeɪ.ʃən/",
        "meaningVi": "tình huống, hoàn cảnh, tình hình",
        "collocations": "current situation, handle a situation, win-win situation",
        "example": "The manager remained calm and handled the difficult situation smoothly.",
        "exampleVi": "Người quản lý vẫn giữ bình tĩnh và xử lý tình huống khó khăn một cách êm đẹp.",
        "optionsVi": [
          "tình huống, hoàn cảnh, tình hình",
          "địa điểm cố định",
          "mốc thời gian cụ thể",
          "kết quả sau cùng"
        ]
      },
      {
        "id": "noun_015",
        "word": "society",
        "level": "A2",
        "type": "noun",
        "ipa": "/səˈsaɪ.ə.ti/",
        "meaningVi": "xã hội, cộng đồng xã hội",
        "collocations": "modern society, contribution to society, civil society",
        "example": "Technology is playing an increasingly vital role in modern society.",
        "exampleVi": "Công nghệ đang đóng một vai trò ngày càng quan trọng trong xã hội hiện đại.",
        "optionsVi": [
          "xã hội, cộng đồng xã hội",
          "doanh nghiệp độc quyền",
          "gia đình hạt nhân",
          "hệ thống máy móc"
        ]
      },
      {
        "id": "noun_016",
        "word": "achievement",
        "level": "B1",
        "type": "noun",
        "ipa": "/əˈtʃiːv.mənt/",
        "meaningVi": "thành tựu, thành tích đáng nể",
        "collocations": "remarkable achievement, sense of achievement, academic achievement",
        "example": "Finishing the marathon was a proud personal achievement for him.",
        "exampleVi": "Hoàn thành cự ly marathon là một thành tích cá nhân đầy tự hào đối với anh ấy.",
        "optionsVi": [
          "thành tựu, thành tích đáng nể",
          "sự thất bại cay đắng",
          "lời hứa suông",
          "gánh nặng trách nhiệm"
        ]
      },
      {
        "id": "noun_017",
        "word": "agreement",
        "level": "B1",
        "type": "noun",
        "ipa": "/əˈɡriː.mənt/",
        "meaningVi": "sự thỏa thuận, hợp đồng cam kết",
        "collocations": "reach an agreement, sign an agreement, mutual agreement",
        "example": "Both parties reached a mutual agreement after two days of negotiation.",
        "exampleVi": "Cả hai bên đã đạt được thỏa thuận chung sau hai ngày đàm phán.",
        "optionsVi": [
          "sự thỏa thuận, hợp đồng cam kết",
          "cuộc tranh chấp pháp lý",
          "sự hiểu lầm kéo dài",
          "sự từ chối dứt khoát"
        ]
      },
      {
        "id": "noun_018",
        "word": "attitude",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈæt.ɪ.tʃuːd/",
        "meaningVi": "thái độ, thái độ sống",
        "collocations": "positive attitude, change in attitude, professional attitude",
        "example": "A positive attitude helps you overcome challenges much faster.",
        "exampleVi": "Một thái độ tích cực giúp bạn vượt qua những thử thách nhanh hơn nhiều.",
        "optionsVi": [
          "thái độ, thái độ sống",
          "năng lực trí tuệ",
          "điều kiện vật chất",
          "vị thế xã hội"
        ]
      },
      {
        "id": "noun_019",
        "word": "audience",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈɔː.di.əns/",
        "meaningVi": "khán giả, thính giả, đối tượng độc giả",
        "collocations": "target audience, capture the audience, live audience",
        "example": "You should tailor your presentation to the needs of the target audience.",
        "exampleVi": "Bạn nên điều chỉnh bài thuyết trình theo nhu cầu của khán giả mục tiêu.",
        "optionsVi": [
          "khán giả, thính giả, đối tượng độc giả",
          "đội ngũ diễn giả",
          "ban tổ chức hội trường",
          "hội đồng giám khảo"
        ]
      },
      {
        "id": "noun_020",
        "word": "behavior",
        "level": "B1",
        "type": "noun",
        "ipa": "/bɪˈheɪ.vjər/",
        "meaningVi": "hành vi, cách ứng xử",
        "collocations": "consumer behavior, acceptable behavior, pattern of behavior",
        "example": "Studying consumer behavior helps companies design better products.",
        "exampleVi": "Nghiên cứu hành vi người tiêu dùng giúp các công ty thiết kế sản phẩm tốt hơn.",
        "optionsVi": [
          "hành vi, cách ứng xử",
          "lý thuyết trừu tượng",
          "sở thích ngẫu nhiên",
          "ngoại hình bên ngoài"
        ]
      },
      {
        "id": "noun_021",
        "word": "benefit",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈben.ɪ.fɪt/",
        "meaningVi": "lợi ích, chế độ đãi ngộ",
        "collocations": "fringe benefits, health benefit, mutual benefit",
        "example": "The company offers competitive salary along with excellent employee benefits.",
        "exampleVi": "Công ty đưa ra mức lương cạnh tranh cùng với chế độ đãi ngộ nhân viên tuyệt vời.",
        "optionsVi": [
          "lợi ích, chế độ đãi ngộ",
          "hình phạt kỷ luật",
          "khoản khấu trừ thuế",
          "nghĩa vụ pháp lý"
        ]
      },
      {
        "id": "noun_022",
        "word": "candidate",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈkæn.dɪ.dət/",
        "meaningVi": "ứng viên, người ứng cử",
        "collocations": "successful candidate, potential candidate, interview candidates",
        "example": "We are interviewing five promising candidates for the project manager role.",
        "exampleVi": "Chúng tôi đang phỏng vấn năm ứng viên triển vọng cho vị trí quản lý dự án.",
        "optionsVi": [
          "ứng viên, người ứng cử",
          "nhà tuyển dụng",
          "khách hàng tiềm năng",
          "đối tác chiến lược"
        ]
      },
      {
        "id": "noun_023",
        "word": "career",
        "level": "B1",
        "type": "noun",
        "ipa": "/kəˈrɪər/",
        "meaningVi": "sự nghiệp, lộ trình nghề nghiệp",
        "collocations": "career advancement, pursue a career, career path",
        "example": "Continuous learning is crucial for long-term career advancement.",
        "exampleVi": "Học hỏi liên tục là điều then chốt cho sự thăng tiến sự nghiệp lâu dài.",
        "optionsVi": [
          "sự nghiệp, lộ trình nghề nghiệp",
          "công việc tạm thời",
          "kỳ nghỉ dưỡng",
          "chuyến công tác ngắn"
        ]
      },
      {
        "id": "noun_024",
        "word": "challenge",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈtʃæl.ɪndʒ/",
        "meaningVi": "thử thách, trở ngại cần vượt qua",
        "collocations": "face a challenge, overcome a challenge, major challenge",
        "example": "Adapting to remote work was a major challenge for many organizations.",
        "exampleVi": "Thích nghi với làm việc từ xa từng là một thử thách lớn đối với nhiều tổ chức.",
        "optionsVi": [
          "thử thách, trở ngại cần vượt qua",
          "sự thuận lợi hiển nhiên",
          "con đường bằng phẳng",
          "kết quả dễ dàng"
        ]
      },
      {
        "id": "noun_025",
        "word": "circumstance",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈsɜː.kəm.stɑːns/",
        "meaningVi": "hoàn cảnh, tình thế thực tế",
        "collocations": "under no circumstances, unforeseen circumstances, financial circumstances",
        "example": "Due to unforeseen circumstances, the conference had to be postponed.",
        "exampleVi": "Do hoàn cảnh bất khả kháng ngoài dự kiến, hội nghị đã phải hoãn lại.",
        "optionsVi": [
          "hoàn cảnh, tình thế thực tế",
          "nguyên tắc đạo đức",
          "mục tiêu định lượng",
          "lời cam kết chính thức"
        ]
      },
      {
        "id": "noun_026",
        "word": "colleague",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈkɒl.iːɡ/",
        "meaningVi": "đồng nghiệp trong cơ quan",
        "collocations": "close colleague, former colleague, respected colleague",
        "example": "I always consult with my senior colleagues when making complex decisions.",
        "exampleVi": "Tôi luôn tham khảo ý kiến các đồng nghiệp thâm niên khi đưa ra các quyết định phức tạp.",
        "optionsVi": [
          "đồng nghiệp trong cơ quan",
          "khách hàng vãng lai",
          "đối thủ cạnh tranh",
          "người trung gian"
        ]
      },
      {
        "id": "noun_027",
        "word": "combination",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌkɒm.bɪˈneɪ.ʃən/",
        "meaningVi": "sự kết hợp, sự phối hợp",
        "collocations": "winning combination, unique combination, combination of factors",
        "example": "Success comes from a combination of hard work and strategic thinking.",
        "exampleVi": "Thành công đến từ sự kết hợp giữa nỗ lực chăm chỉ và tư duy chiến lược.",
        "optionsVi": [
          "sự kết hợp, sự phối hợp",
          "sự tách rời cô lập",
          "sự mâu thuẫn đối kháng",
          "sự thiếu đồng bộ"
        ]
      },
      {
        "id": "noun_028",
        "word": "communication",
        "level": "B1",
        "type": "noun",
        "ipa": "/kəˌmjuː.nɪˈkeɪ.ʃən/",
        "meaningVi": "giao tiếp, sự trao đổi thông tin",
        "collocations": "effective communication, clear communication, lack of communication",
        "example": "Effective communication prevents misunderstandings among team members.",
        "exampleVi": "Giao tiếp hiệu quả giúp ngăn ngừa hiểu lầm giữa các thành viên trong nhóm.",
        "optionsVi": [
          "giao tiếp, sự trao đổi thông tin",
          "sự giữ im lặng",
          "thông điệp bí mật",
          "sự bất đồng quan điểm"
        ]
      },
      {
        "id": "noun_029",
        "word": "community",
        "level": "B1",
        "type": "noun",
        "ipa": "/kəˈmjuː.nə.ti/",
        "meaningVi": "cộng đồng, tập thể gắn kết",
        "collocations": "local community, sense of community, online community",
        "example": "Our project aims to build a stronger and more supportive community.",
        "exampleVi": "Dự án của chúng tôi nhằm mục đích xây dựng một cộng đồng vững mạnh và hỗ trợ lẫn nhau hơn.",
        "optionsVi": [
          "cộng đồng, tập thể gắn kết",
          "cá nhân đơn lẻ",
          "doanh nghiệp độc lập",
          "tổ chức quân sự"
        ]
      },
      {
        "id": "noun_030",
        "word": "competition",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌkɒm.pəˈtɪʃ.ən/",
        "meaningVi": "sự cạnh tranh, cuộc thi đấu",
        "collocations": "fierce competition, enter a competition, market competition",
        "example": "To survive in fierce competition, companies must constantly innovate.",
        "exampleVi": "Để sinh tồn trong sự cạnh tranh khốc liệt, các công ty buộc phải đổi mới liên tục.",
        "optionsVi": [
          "sự cạnh tranh, cuộc thi đấu",
          "sự nhượng bộ hòa bình",
          "sự hợp tác độc quyền",
          "sự tự mãn chủ quan"
        ]
      },
      {
        "id": "noun_031",
        "word": "complaint",
        "level": "B1",
        "type": "noun",
        "ipa": "/kəmˈpleɪnt/",
        "meaningVi": "lời phàn nàn, sự khiếu nại",
        "collocations": "file a complaint, resolve a complaint, customer complaint",
        "example": "The customer service team resolved the complaint within two hours.",
        "exampleVi": "Bộ phận chăm sóc khách hàng đã giải quyết xong lời khiếu nại trong vòng hai giờ.",
        "optionsVi": [
          "lời phàn nàn, sự khiếu nại",
          "lời khen ngợi chân thành",
          "hóa đơn thanh toán",
          "lời cảm ơn sâu sắc"
        ]
      },
      {
        "id": "noun_032",
        "word": "conclusion",
        "level": "B1",
        "type": "noun",
        "ipa": "/kənˈkluː.ʒən/",
        "meaningVi": "kết luận, phần kết bài",
        "collocations": "reach a conclusion, draw a conclusion, in conclusion",
        "example": "Based on the survey data, we can draw a reliable conclusion.",
        "exampleVi": "Dựa vào dữ liệu khảo sát, chúng ta có thể rút ra một kết luận đáng tin cậy.",
        "optionsVi": [
          "kết luận, phần kết bài",
          "lời mở đầu sơ lược",
          "giả thuyết ban đầu",
          "câu hỏi gợi mở"
        ]
      },
      {
        "id": "noun_033",
        "word": "conference",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈkɒn.fər.əns/",
        "meaningVi": "hội nghị, hội thảo chuyên đề",
        "collocations": "attend a conference, annual conference, press conference",
        "example": "Over 500 tech leaders gathered at the annual international conference.",
        "exampleVi": "Hơn 500 nhà lãnh đạo công nghệ đã tề tựu tại hội nghị quốc tế thường niên.",
        "optionsVi": [
          "hội nghị, hội thảo chuyên đề",
          "buổi tiệc gia đình",
          "cuộc gặp ngẫu nhiên",
          "buổi phỏng vấn kín"
        ]
      },
      {
        "id": "noun_034",
        "word": "confidence",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈkɒn.fɪ.dəns/",
        "meaningVi": "sự tự tin, lòng tin cậy",
        "collocations": "build confidence, boost confidence, lack of confidence",
        "example": "Public speaking practice helped him build genuine confidence.",
        "exampleVi": "Luyện tập nói trước đám đông đã giúp anh ấy xây dựng được sự tự tin thực thụ.",
        "optionsVi": [
          "sự tự tin, lòng tin cậy",
          "nỗi sợ hãi mơ hồ",
          "tính nhút nhát rụt rè",
          "sự kiêu ngạo quá mức"
        ]
      },
      {
        "id": "noun_035",
        "word": "consequence",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈkɒn.sɪ.kwəns/",
        "meaningVi": "hệ quả, hậu quả sau hành động",
        "collocations": "face the consequences, unintended consequences, severe consequences",
        "example": "Every rash decision carries long-term consequences for the business.",
        "exampleVi": "Mỗi quyết định vội vàng đều mang lại những hệ quả lâu dài cho doanh nghiệp.",
        "optionsVi": [
          "hệ quả, hậu quả sau hành động",
          "nguyên nhân gốc rễ",
          "kế hoạch dự thảo",
          "sự may mắn ngẫu nhiên"
        ]
      },
      {
        "id": "noun_036",
        "word": "contribution",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌkɒn.trɪˈbjuː.ʃən/",
        "meaningVi": "sự đóng góp, cống hiến",
        "collocations": "make a contribution, valuable contribution, significant contribution",
        "example": "Her innovative ideas made a significant contribution to the project's success.",
        "exampleVi": "Những ý tưởng đổi mới của cô ấy đã đóng góp to lớn vào thành công của dự án.",
        "optionsVi": [
          "sự đóng góp, cống hiến",
          "sự tiêu hao ngân sách",
          "sự cản trở tiến độ",
          "sự bàng quan thờ ơ"
        ]
      },
      {
        "id": "noun_037",
        "word": "criticism",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈkrɪt.ɪ.sɪ.zəm/",
        "meaningVi": "sự phê bình, lời chỉ trích",
        "collocations": "constructive criticism, face criticism, accept criticism",
        "example": "Constructive criticism from your team helps you refine your working style.",
        "exampleVi": "Sự phê bình mang tính xây dựng từ đồng đội giúp bạn hoàn thiện phong cách làm việc.",
        "optionsVi": [
          "sự phê bình, lời chỉ trích",
          "lời tán dương ngọt ngào",
          "sự đồng tình tuyệt đối",
          "giải thưởng vinh danh"
        ]
      },
      {
        "id": "noun_038",
        "word": "culture",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈkʌl.tʃər/",
        "meaningVi": "văn hóa, bản sắc văn hóa",
        "collocations": "corporate culture, cultural diversity, preserve culture",
        "example": "A strong corporate culture motivates employees to perform at their best.",
        "exampleVi": "Một văn hóa doanh nghiệp vững mạnh sẽ thúc đẩy nhân viên cống hiến hết mình.",
        "optionsVi": [
          "văn hóa, bản sắc văn hóa",
          "cơ sở vật chất",
          "quy chế xử phạt",
          "bảng cân đối kế toán"
        ]
      },
      {
        "id": "noun_039",
        "word": "curiosity",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌkjʊə.riˈɒs.ə.ti/",
        "meaningVi": "sự tò mò, tính hiếu kỳ ham học",
        "collocations": "satisfy curiosity, spark curiosity, out of curiosity",
        "example": "Intellectual curiosity drives scientific discoveries and personal growth.",
        "exampleVi": "Sự tò mò về trí tuệ là động lực thúc đẩy các phát minh khoa học và sự phát triển cá nhân.",
        "optionsVi": [
          "sự tò mò, tính hiếu kỳ ham học",
          "tính thờ ơ vô cảm",
          "sự tự mãn bảo thủ",
          "nỗi lo lắng thường trực"
        ]
      },
      {
        "id": "noun_040",
        "word": "deadline",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈded.laɪn/",
        "meaningVi": "hạn chót, thời hạn hoàn thành",
        "collocations": "meet a deadline, miss a deadline, tight deadline",
        "example": "We worked overtime to meet the tight project deadline.",
        "exampleVi": "Chúng tôi đã làm thêm giờ để kịp hạn chót dự án rất gấp rút.",
        "optionsVi": [
          "hạn chót, thời hạn hoàn thành",
          "ngày bắt đầu dự án",
          "khoảng thời gian nghỉ ngơi",
          "kỳ nghỉ lễ dài ngày"
        ]
      },
      {
        "id": "noun_041",
        "word": "demand",
        "level": "B1",
        "type": "noun",
        "ipa": "/dɪˈmɑːnd/",
        "meaningVi": "nhu cầu thị trường, yêu cầu",
        "collocations": "meet demand, in high demand, supply and demand",
        "example": "Skilled data engineers are currently in very high demand worldwide.",
        "exampleVi": "Kỹ sư dữ liệu có tay nghề hiện đang có nhu cầu tuyển dụng rất cao trên toàn cầu.",
        "optionsVi": [
          "nhu cầu thị trường, yêu cầu",
          "nguồn cung ứng dư thừa",
          "sự khan hiếm hàng giả",
          "sự thờ ơ của khách hàng"
        ]
      },
      {
        "id": "noun_042",
        "word": "department",
        "level": "B1",
        "type": "noun",
        "ipa": "/dɪˈpɑːt.mənt/",
        "meaningVi": "phòng ban, bộ phận chuyên môn",
        "collocations": "marketing department, head of department, finance department",
        "example": "Please submit your reimbursement request to the accounting department.",
        "exampleVi": "Vui lòng nộp yêu cầu hoàn tiền cho phòng ban kế toán.",
        "optionsVi": [
          "phòng ban, bộ phận chuyên môn",
          "khách hàng bên ngoài",
          "chi nhánh đối thủ",
          "tòa nhà văn phòng"
        ]
      },
      {
        "id": "noun_043",
        "word": "description",
        "level": "B1",
        "type": "noun",
        "ipa": "/dɪˈskrɪp.ʃən/",
        "meaningVi": "bản mô tả, sự miêu tả",
        "collocations": "job description, accurate description, detailed description",
        "example": "Read the job description carefully before applying for the position.",
        "exampleVi": "Hãy đọc kỹ bản mô tả công việc trước khi nộp hồ sơ ứng tuyển.",
        "optionsVi": [
          "bản mô tả, sự miêu tả",
          "bản hợp đồng lao động",
          "thư mời phỏng vấn",
          "bảng lương nhân viên"
        ]
      },
      {
        "id": "noun_044",
        "word": "development",
        "level": "B1",
        "type": "noun",
        "ipa": "/dɪˈvel.əp.mənt/",
        "meaningVi": "sự phát triển, bước tiến",
        "collocations": "professional development, rapid development, sustainable development",
        "example": "The company invests heavily in the professional development of its staff.",
        "exampleVi": "Công ty đầu tư rất mạnh vào sự phát triển chuyên môn của đội ngũ nhân sự.",
        "optionsVi": [
          "sự phát triển, bước tiến",
          "sự suy thoái đình trệ",
          "sự cắt giảm nhân sự",
          "sự ổn định tĩnh tại"
        ]
      },
      {
        "id": "noun_045",
        "word": "difficulty",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈdɪf.ɪ.kəl.ti/",
        "meaningVi": "sự khó khăn, trở ngại nan giải",
        "collocations": "face difficulties, overcome difficulties, financial difficulty",
        "example": "With perseverance, the team overcame all financial difficulties.",
        "exampleVi": "Bằng sự kiên trì, toàn đội đã vượt qua mọi khó khăn về tài chính.",
        "optionsVi": [
          "sự khó khăn, trở ngại nan giải",
          "sự suôn sẻ may mắn",
          "kết quả mỹ mãn",
          "khoản lợi nhuận ròng"
        ]
      },
      {
        "id": "noun_046",
        "word": "direction",
        "level": "B1",
        "type": "noun",
        "ipa": "/daɪˈrek.ʃən/",
        "meaningVi": "phương hướng, sự chỉ dẫn",
        "collocations": "in the right direction, ask for directions, change of direction",
        "example": "The new CEO set a clear strategic direction for the next five years.",
        "exampleVi": "Tổng giám đốc mới đã đặt ra phương hướng chiến lược rõ ràng cho 5 năm tới.",
        "optionsVi": [
          "phương hướng, sự chỉ dẫn",
          "sự lạc lối mông lung",
          "điểm xuất phát ban đầu",
          "vạch đích cuối cùng"
        ]
      },
      {
        "id": "noun_047",
        "word": "discipline",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈdɪs.ə.plɪn/",
        "meaningVi": "tính kỷ luật, sự tự giác rèn luyện",
        "collocations": "self-discipline, maintain discipline, strict discipline",
        "example": "Self-discipline is the bridge between goals and long-term accomplishment.",
        "exampleVi": "Kỷ luật bản thân là chiếc cầu nối giữa mục tiêu và thành tựu lâu dài.",
        "optionsVi": [
          "tính kỷ luật, sự tự giác rèn luyện",
          "sự ngẫu hứng tùy tiện",
          "thói quen buông thả",
          "sự lười biếng trì hoãn"
        ]
      },
      {
        "id": "noun_048",
        "word": "discovery",
        "level": "B1",
        "type": "noun",
        "ipa": "/dɪˈskʌv.ər.i/",
        "meaningVi": "sự phát hiện, khám phá mới",
        "collocations": "scientific discovery, make a discovery, breakthrough discovery",
        "example": "The discovery of antibiotics revolutionized modern medicine.",
        "exampleVi": "Sự phát hiện ra kháng sinh đã cách mạng hóa nền y học hiện đại.",
        "optionsVi": [
          "sự phát hiện, khám phá mới",
          "sự che giấu thông tin",
          "sai lầm không thể cứu vãn",
          "sự lặp lại lý thuyết"
        ]
      },
      {
        "id": "noun_049",
        "word": "discussion",
        "level": "B1",
        "type": "noun",
        "ipa": "/dɪˈskʌʃ.ən/",
        "meaningVi": "cuộc thảo luận, bàn bạc",
        "collocations": "open discussion, hold a discussion, fruitful discussion",
        "example": "We had a fruitful discussion about budget allocation yesterday.",
        "exampleVi": "Hôm qua chúng tôi đã có một cuộc thảo luận rất hiệu quả về phân bổ ngân sách.",
        "optionsVi": [
          "cuộc thảo luận, bàn bạc",
          "cuộc cãi vã vô ích",
          "sự ra lệnh một chiều",
          "sự bỏ phiếu kín"
        ]
      },
      {
        "id": "noun_050",
        "word": "economy",
        "level": "B1",
        "type": "noun",
        "ipa": "/iˈkɒn.ə.mi/",
        "meaningVi": "nền kinh tế",
        "collocations": "global economy, boost the economy, digital economy",
        "example": "E-commerce is fueling the rapid growth of the digital economy.",
        "exampleVi": "Thương mại điện tử đang tiếp thêm động lực cho sự tăng trưởng nhanh chóng của nền kinh tế số.",
        "optionsVi": [
          "nền kinh tế",
          "hệ thống chính trị",
          "phong tục tập quán",
          "môi trường sinh thái"
        ]
      },
      {
        "id": "noun_051",
        "word": "education",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌedʒ.uˈkeɪ.ʃən/",
        "meaningVi": "nền giáo dục, việc học tập",
        "collocations": "higher education, quality education, pursue education",
        "example": "Quality education empowers young people to build brighter futures.",
        "exampleVi": "Nền giáo dục chất lượng trang bị cho người trẻ năng lực kiến tạo tương lai tươi sáng hơn.",
        "optionsVi": [
          "nền giáo dục, việc học tập",
          "hoạt động giải trí",
          "ngành công nghiệp nặng",
          "thị trường chứng khoán"
        ]
      },
      {
        "id": "noun_052",
        "word": "emotion",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪˈməʊ.ʃən/",
        "meaningVi": "cảm xúc, mối xúc động",
        "collocations": "control one's emotions, express emotions, mixed emotions",
        "example": "Learning to regulate your emotions under stress is a key leadership trait.",
        "exampleVi": "Học cách làm chủ cảm xúc khi chịu áp lực là một tố chất lãnh đạo then chốt.",
        "optionsVi": [
          "cảm xúc, mối xúc động",
          "sự tính toán lý trí",
          "kế hoạch hành động",
          "quy tắc ứng xử văn bản"
        ]
      },
      {
        "id": "noun_053",
        "word": "employee",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪmˈplɔɪ.iː/",
        "meaningVi": "nhân viên, người lao động",
        "collocations": "full-time employee, motivate employees, employee retention",
        "example": "Recognizing high performance is crucial for employee retention.",
        "exampleVi": "Ghi nhận thành tích xuất sắc là yếu tố quan trọng để giữ chân nhân viên.",
        "optionsVi": [
          "nhân viên, người lao động",
          "chủ sở hữu doanh nghiệp",
          "nhà đầu tư vốn",
          "đối tác thương mại"
        ]
      },
      {
        "id": "noun_054",
        "word": "employer",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪmˈplɔɪ.ər/",
        "meaningVi": "người tuyển dụng, người sử dụng lao động",
        "collocations": "prospective employer, attractive employer, employer branding",
        "example": "Companies invest in employer branding to attract top talent.",
        "exampleVi": "Các công ty đầu tư vào thương hiệu nhà tuyển dụng để thu hút nhân tài hàng đầu.",
        "optionsVi": [
          "người tuyển dụng, người sử dụng lao động",
          "thực tập sinh",
          "người tìm việc",
          "khách hàng tiêu dùng"
        ]
      },
      {
        "id": "noun_055",
        "word": "environment",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪnˈvaɪ.rən.mənt/",
        "meaningVi": "môi trường tự nhiên hoặc môi trường sống/làm việc",
        "collocations": "protect the environment, working environment, friendly environment",
        "example": "A supportive working environment fosters creativity and trust.",
        "exampleVi": "Một môi trường làm việc hỗ trợ lẫn nhau sẽ nuôi dưỡng tính sáng tạo và lòng tin cậy.",
        "optionsVi": [
          "môi trường tự nhiên hoặc môi trường sống/làm việc",
          "công nghệ phần mềm",
          "quy trình kiểm toán",
          "thời khóa biểu"
        ]
      },
      {
        "id": "noun_056",
        "word": "equipment",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪˈkwɪp.mənt/",
        "meaningVi": "trang thiết bị, dụng cụ làm việc",
        "collocations": "state-of-the-art equipment, office equipment, safety equipment",
        "example": "The lab was upgraded with state-of-the-art research equipment.",
        "exampleVi": "Phòng thí nghiệm đã được nâng cấp với các trang thiết bị nghiên cứu hiện đại nhất.",
        "optionsVi": [
          "trang thiết bị, dụng cụ làm việc",
          "tài liệu lý thuyết",
          "đội ngũ nhân sự",
          "chính sách nội bộ"
        ]
      },
      {
        "id": "noun_057",
        "word": "evidence",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈev.ɪ.dəns/",
        "meaningVi": "bằng chứng, chứng cứ xác thực",
        "collocations": "clear evidence, empirical evidence, lack of evidence",
        "example": "There is clear evidence showing the benefits of regular meditation.",
        "exampleVi": "Có bằng chứng rõ ràng cho thấy những lợi ích của việc thiền định đều đặn.",
        "optionsVi": [
          "bằng chứng, chứng cứ xác thực",
          "tin đồn vô căn cứ",
          "cảm nhận chủ quan",
          "giả định chưa chứng minh"
        ]
      },
      {
        "id": "noun_058",
        "word": "explanation",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌek.spləˈneɪ.ʃən/",
        "meaningVi": "lời giải thích, sự làm rõ",
        "collocations": "detailed explanation, simple explanation, plausible explanation",
        "example": "The engineer provided a simple explanation of how the algorithm works.",
        "exampleVi": "Kỹ sư đã đưa ra lời giải thích đơn giản về cách thuật toán vận hành.",
        "optionsVi": [
          "lời giải thích, sự làm rõ",
          "sự bí mật thông tin",
          "câu hỏi chất vấn",
          "lời đe dọa xử phạt"
        ]
      },
      {
        "id": "noun_059",
        "word": "expression",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪkˈspreʃ.ən/",
        "meaningVi": "biểu cảm khuôn mặt, cách diễn đạt",
        "collocations": "facial expression, idiomatic expression, free expression",
        "example": "Her facial expression showed that she was pleasantly surprised.",
        "exampleVi": "Biểu cảm khuôn mặt của cô ấy cho thấy cô ấy rất đỗi ngạc nhiên và thích thú.",
        "optionsVi": [
          "biểu cảm khuôn mặt, cách diễn đạt",
          "lối suy nghĩ bảo thủ",
          "hành động bộc phát",
          "tư thế ngồi nghiêm nghị"
        ]
      },
      {
        "id": "noun_060",
        "word": "failure",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈfeɪ.ljər/",
        "meaningVi": "sự thất bại, bài học vấp ngã",
        "collocations": "fear of failure, learn from failure, total failure",
        "example": "Failure is not the opposite of success; it is part of success.",
        "exampleVi": "Thất bại không phải điều đối lập với thành công; nó là một phần của thành công.",
        "optionsVi": [
          "sự thất bại, bài học vấp ngã",
          "chiến thắng vang dội",
          "sự khởi đầu may mắn",
          "kết quả trọn vẹn"
        ]
      },
      {
        "id": "noun_061",
        "word": "feedback",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈfiːd.bæk/",
        "meaningVi": "phản hồi, ý kiến đóng góp",
        "collocations": "constructive feedback, receive feedback, customer feedback",
        "example": "We welcome constructive feedback to improve our application continuously.",
        "exampleVi": "Chúng tôi hoan nghênh những phản hồi mang tính xây dựng để cải tiến ứng dụng liên tục.",
        "optionsVi": [
          "phản hồi, ý kiến đóng góp",
          "lệnh cấm phát biểu",
          "khoản thanh toán trễ",
          "sự phớt lờ ý kiến"
        ]
      },
      {
        "id": "noun_062",
        "word": "generation",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˌdʒen.əˈreɪ.ʃən/",
        "meaningVi": "thế hệ, lứa tuổi",
        "collocations": "future generations, generation gap, younger generation",
        "example": "We must preserve our natural resources for future generations.",
        "exampleVi": "Chúng ta phải bảo tồn các nguồn tài nguyên thiên nhiên cho các thế hệ tương lai.",
        "optionsVi": [
          "thế hệ, lứa tuổi",
          "chu kỳ kinh tế",
          "đội ngũ quản lý",
          "thời kỳ suy thoái"
        ]
      },
      {
        "id": "noun_063",
        "word": "growth",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɡrəʊθ/",
        "meaningVi": "sự tăng trưởng, sự phát triển",
        "collocations": "economic growth, personal growth, rapid growth",
        "example": "Stepping outside your comfort zone is essential for personal growth.",
        "exampleVi": "Bước ra khỏi vùng an toàn là điều thiết yếu cho sự phát triển bản thân.",
        "optionsVi": [
          "sự tăng trưởng, sự phát triển",
          "sự suy thoái tụt lùi",
          "trạng thái giậm chân tại chỗ",
          "sự thu hẹp quy mô"
        ]
      },
      {
        "id": "noun_064",
        "word": "improvement",
        "level": "B1",
        "type": "noun",
        "ipa": "/ɪmˈpruːv.mənt/",
        "meaningVi": "sự cải thiện, sự tiến bộ",
        "collocations": "room for improvement, continuous improvement, noticeable improvement",
        "example": "Her English pronunciation showed noticeable improvement after three months.",
        "exampleVi": "Phát âm tiếng Anh của cô ấy đã có sự tiến bộ rõ rệt sau ba tháng.",
        "optionsVi": [
          "sự cải thiện, sự tiến bộ",
          "sự xuống cấp trầm trọng",
          "sự đình trệ công việc",
          "sự bảo thủ không đổi"
        ]
      },
      {
        "id": "noun_065",
        "word": "influence",
        "level": "B1",
        "type": "noun",
        "ipa": "/ˈɪn.flu.əns/",
        "meaningVi": "sức ảnh hưởng, tầm tác động",
        "collocations": "have an influence on, positive influence, exert influence",
        "example": "Parents have a profound influence on their children's reading habits.",
        "exampleVi": "Cha mẹ có sức ảnh hưởng sâu sắc đến thói quen đọc sách của con cái.",
        "optionsVi": [
          "sức ảnh hưởng, tầm tác động",
          "sự cô lập cách biệt",
          "sự yếu ớt nhu nhược",
          "sự thờ ơ lãnh đạm"
        ]
      },
      {
        "id": "noun_066",
        "word": "accommodation",
        "level": "B2",
        "type": "noun",
        "ipa": "/əˌkɒm.əˈdeɪ.ʃən/",
        "meaningVi": "chỗ ở, nơi lưu trú tiện nghi",
        "collocations": "hotel accommodation, temporary accommodation, book accommodation",
        "example": "The university provides affordable accommodation for international students.",
        "exampleVi": "Trường đại học cung cấp chỗ ở giá cả phải chăng cho sinh viên quốc tế.",
        "optionsVi": [
          "chỗ ở, nơi lưu trú tiện nghi",
          "phương tiện di chuyển",
          "vé vào cửa sự kiện",
          "học phí toàn khóa"
        ]
      },
      {
        "id": "noun_067",
        "word": "acquisition",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌæk.wɪˈzɪʃ.ən/",
        "meaningVi": "sự thâu tóm doanh nghiệp, việc tiếp thu kiến thức",
        "collocations": "language acquisition, merger and acquisition, recent acquisition",
        "example": "Language acquisition happens naturally when learners are immersed in context.",
        "exampleVi": "Việc tiếp thu ngôn ngữ diễn ra tự nhiên khi người học được đắm mình vào ngữ cảnh.",
        "optionsVi": [
          "sự thâu tóm doanh nghiệp, việc tiếp thu kiến thức",
          "sự phá sản hoàn toàn",
          "sự thanh lý tài sản",
          "sự thoái vốn đầu tư"
        ]
      },
      {
        "id": "noun_068",
        "word": "advocacy",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈæd.və.kə.si/",
        "meaningVi": "sự vận động ủng hộ, hành động lên tiếng bảo vệ",
        "collocations": "advocacy group, public advocacy, policy advocacy",
        "example": "Her tireless advocacy for mental health awareness inspired thousands of people.",
        "exampleVi": "Sự vận động không ngừng nghỉ của cô ấy vì nhận thức sức khỏe tinh thần đã truyền cảm hứng cho hàng ngàn người.",
        "optionsVi": [
          "sự vận động ủng hộ, hành động lên tiếng bảo vệ",
          "sự công kích ngầm",
          "hành vi phỉ báng",
          "thái độ dửng dưng"
        ]
      },
      {
        "id": "noun_069",
        "word": "allocation",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌæl.əˈkeɪ.ʃən/",
        "meaningVi": "sự phân bổ nguồn lực, cấp phát ngân sách",
        "collocations": "resource allocation, budget allocation, efficient allocation",
        "example": "Optimal resource allocation is critical to delivering the project on time.",
        "exampleVi": "Phân bổ nguồn lực tối ưu là điều tối quan trọng để bàn giao dự án đúng hạn.",
        "optionsVi": [
          "sự phân bổ nguồn lực, cấp phát ngân sách",
          "sự phung phí tài chính",
          "sự thắt chặt chi tiêu",
          "khoản nợ tồn đọng"
        ]
      },
      {
        "id": "noun_070",
        "word": "ambiguity",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌæm.bɪˈɡjuː.ə.ti/",
        "meaningVi": "sự mơ hồ, tính nước đôi không rõ ràng",
        "collocations": "resolve ambiguity, potential ambiguity, legal ambiguity",
        "example": "The contract was rewritten to eliminate any potential ambiguity.",
        "exampleVi": "Bản hợp đồng đã được viết lại nhằm loại bỏ mọi sự mơ hồ tiềm ẩn.",
        "optionsVi": [
          "sự mơ hồ, tính nước đôi không rõ ràng",
          "sự minh bạch rành mạch",
          "điều khoản ràng buộc",
          "cam kết chắc chắn"
        ]
      },
      {
        "id": "noun_071",
        "word": "analogy",
        "level": "B2",
        "type": "noun",
        "ipa": "/əˈnæl.ə.dʒi/",
        "meaningVi": "phép so sánh loại suy, sự tương tự",
        "collocations": "draw an analogy, by analogy, striking analogy",
        "example": "He drew an analogy between the human brain and a complex computer network.",
        "exampleVi": "Anh ấy đã dùng phép so sánh tương tự giữa bộ não con người và một mạng máy tính phức tạp.",
        "optionsVi": [
          "phép so sánh loại suy, sự tương tự",
          "định nghĩa từ điển",
          "bằng chứng số liệu",
          "sự mâu thuẫn hoàn toàn"
        ]
      },
      {
        "id": "noun_072",
        "word": "anticipation",
        "level": "B2",
        "type": "noun",
        "ipa": "/ænˌtɪs.ɪˈpeɪ.ʃən/",
        "meaningVi": "sự dự đoán trước, niềm mong đợi háo hức",
        "collocations": "in anticipation of, eager anticipation, heightened anticipation",
        "example": "Extra security was arranged in anticipation of a massive turnout.",
        "exampleVi": "Lực lượng an ninh bổ sung đã được bố trí để đón đầu lượng người tham dự đông đảo.",
        "optionsVi": [
          "sự dự đoán trước, niềm mong đợi háo hức",
          "sự bất ngờ không kịp chuẩn bị",
          "nỗi thất vọng tràn trề",
          "sự hối hận muộn màng"
        ]
      },
      {
        "id": "noun_073",
        "word": "apparatus",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌæp.əˈreɪ.təs/",
        "meaningVi": "bộ máy tổ chức, thiết bị máy móc chuyên dụng",
        "collocations": "state apparatus, security apparatus, scientific apparatus",
        "example": "The government overhauled its administrative apparatus to boost public service efficiency.",
        "exampleVi": "Chính phủ đã cải tổ bộ máy hành chính để nâng cao hiệu quả phục vụ người dân.",
        "optionsVi": [
          "bộ máy tổ chức, thiết bị máy móc chuyên dụng",
          "văn bản thông tư",
          "kinh phí dự phòng",
          "kỳ họp quốc hội"
        ]
      },
      {
        "id": "noun_074",
        "word": "breakthrough",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈbreɪk.θruː/",
        "meaningVi": "bước đột phá lớn",
        "collocations": "major breakthrough, scientific breakthrough, technological breakthrough",
        "example": "Researchers made a historic breakthrough in cancer treatment.",
        "exampleVi": "Các nhà nghiên cứu đã tạo ra một bước đột phá lịch sử trong điều trị ung thư.",
        "optionsVi": [
          "bước đột phá lớn",
          "sự bế tắc tạm thời",
          "bước lùi chiến lược",
          "quy trình lặp lại"
        ]
      },
      {
        "id": "noun_075",
        "word": "collaboration",
        "level": "B2",
        "type": "noun",
        "ipa": "/kəˌlæb.əˈreɪ.ʃən/",
        "meaningVi": "sự hợp tác, tinh thần phối hợp đồng đội",
        "collocations": "close collaboration, cross-functional collaboration, in collaboration with",
        "example": "Cross-functional collaboration between engineering and design drove the product's success.",
        "exampleVi": "Sự hợp tác liên phòng ban giữa kỹ thuật và thiết kế đã thúc đẩy thành công của sản phẩm.",
        "optionsVi": [
          "sự hợp tác, tinh thần phối hợp đồng đội",
          "sự tranh chấp nội bộ",
          "lối làm việc riêng lẻ",
          "sự can thiệp tiêu cực"
        ]
      },
      {
        "id": "noun_076",
        "word": "competence",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈkɒm.pɪ.təns/",
        "meaningVi": "năng lực chuyên môn, sự thành thạo",
        "collocations": "core competence, professional competence, demonstrate competence",
        "example": "The interview assessed both technical competence and interpersonal skills.",
        "exampleVi": "Buổi phỏng vấn đã đánh giá cả năng lực chuyên môn lẫn kỹ năng giao tiếp ứng xử.",
        "optionsVi": [
          "năng lực chuyên môn, sự thành thạo",
          "sự thiếu kinh nghiệm",
          "thái độ chủ quan",
          "bằng khen hình thức"
        ]
      },
      {
        "id": "noun_077",
        "word": "compromise",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈkɒm.prə.maɪz/",
        "meaningVi": "sự thỏa hiệp, sự nhượng bộ hai bên",
        "collocations": "reach a compromise, make a compromise, compromise solution",
        "example": "After extensive negotiations, both sides agreed on a fair compromise.",
        "exampleVi": "Sau nhiều cuộc đàm phán kéo dài, cả hai bên đã đồng thuận về một sự thỏa hiệp công bằng.",
        "optionsVi": [
          "sự thỏa hiệp, sự nhượng bộ hai bên",
          "chiến thắng áp đảo một phía",
          "sự đổ vỡ đàm phán",
          "sự áp đặt mệnh lệnh"
        ]
      },
      {
        "id": "noun_078",
        "word": "consensus",
        "level": "B2",
        "type": "noun",
        "ipa": "/kənˈsen.səs/",
        "meaningVi": "sự đồng thuận, sự nhất trí chung",
        "collocations": "reach a consensus, general consensus, build consensus",
        "example": "The committee reached a general consensus on adopting the new safety standards.",
        "exampleVi": "Ủy ban đã đạt được sự đồng thuận chung về việc áp dụng các tiêu chuẩn an toàn mới.",
        "optionsVi": [
          "sự đồng thuận, sự nhất trí chung",
          "sự chia rẽ bè phái",
          "sự phủ quyết đơn phương",
          "cuộc tranh cãi nảy lửa"
        ]
      },
      {
        "id": "noun_079",
        "word": "contradiction",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌkɒn.trəˈdɪk.ʃən/",
        "meaningVi": "sự mâu thuẫn, nghịch lý đối chọi",
        "collocations": "apparent contradiction, glaring contradiction, direct contradiction",
        "example": "There is an apparent contradiction between his public speech and his private actions.",
        "exampleVi": "Có một sự mâu thuẫn rõ rệt giữa lời nói trước công chúng và hành động thực tế của anh ta.",
        "optionsVi": [
          "sự mâu thuẫn, nghịch lý đối chọi",
          "sự thống nhất hài hòa",
          "sự bổ trợ qua lại",
          "bằng chứng củng cố"
        ]
      },
      {
        "id": "noun_080",
        "word": "controversy",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈkɒn.trə.vɜː.si/",
        "meaningVi": "cuộc tranh cãi dư luận, bất đồng gay gắt",
        "collocations": "spark controversy, cause controversy, ongoing controversy",
        "example": "The proposed tax reform sparked intense controversy among business owners.",
        "exampleVi": "Đề xuất cải cách thuế đã làm dấy lên cuộc tranh cãi gay gắt trong giới chủ doanh nghiệp.",
        "optionsVi": [
          "cuộc tranh cãi dư luận, bất đồng gay gắt",
          "sự ủng hộ nhiệt liệt",
          "sự đồng tình tuyệt đối",
          "thỏa thuận ngầm"
        ]
      },
      {
        "id": "noun_081",
        "word": "credibility",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌkred.əˈbɪl.ə.ti/",
        "meaningVi": "độ uy tín, tính đáng tin cậy",
        "collocations": "gain credibility, undermine credibility, establish credibility",
        "example": "Publishing accurate data established the research institute's credibility.",
        "exampleVi": "Việc công bố số liệu chuẩn xác đã xác lập độ uy tín của viện nghiên cứu.",
        "optionsVi": [
          "độ uy tín, tính đáng tin cậy",
          "sự gian dối dối trá",
          "sự nghi ngờ hoài nghi",
          "lời đồn thổi vô căn cứ"
        ]
      },
      {
        "id": "noun_082",
        "word": "deficiency",
        "level": "B2",
        "type": "noun",
        "ipa": "/dɪˈfɪʃ.ən.si/",
        "meaningVi": "sự thiếu hụt, khiếm khuyết nghiêm trọng",
        "collocations": "vitamin deficiency, structural deficiency, rectify a deficiency",
        "example": "The audit revealed several deficiencies in internal financial controls.",
        "exampleVi": "Đợt kiểm toán đã phát hiện một số khiếm khuyết trong quy trình kiểm soát tài chính nội bộ.",
        "optionsVi": [
          "sự thiếu hụt, khiếm khuyết nghiêm trọng",
          "sự dồi dào sung túc",
          "nguồn dự trữ phong phú",
          "kết quả vượt chỉ tiêu"
        ]
      },
      {
        "id": "noun_083",
        "word": "discrepancy",
        "level": "B2",
        "type": "noun",
        "ipa": "/dɪˈskrep.ən.si/",
        "meaningVi": "sự sai lệch, độ chênh lệch không khớp",
        "collocations": "unexplained discrepancy, minor discrepancy, discrepancy between",
        "example": "The accountant noticed a substantial discrepancy between the two balance sheets.",
        "exampleVi": "Kế toán viên đã phát hiện một sự sai lệch đáng kể giữa hai bảng cân đối kế toán.",
        "optionsVi": [
          "sự sai lệch, độ chênh lệch không khớp",
          "sự trùng khớp hoàn hảo",
          "kết quả đối soát khớp",
          "sự thống nhất tuyệt đối"
        ]
      },
      {
        "id": "noun_084",
        "word": "distinction",
        "level": "B2",
        "type": "noun",
        "ipa": "/dɪˈstɪŋk.ʃən/",
        "meaningVi": "nét phân biệt, danh hiệu xuất sắc",
        "collocations": "draw a distinction, clear distinction, graduate with distinction",
        "example": "It is crucial to draw a clear distinction between urgent and important tasks.",
        "exampleVi": "Điều tối quan trọng là phải vạch ra nét phân biệt rõ ràng giữa việc khẩn cấp và việc quan trọng.",
        "optionsVi": [
          "nét phân biệt, danh hiệu xuất sắc",
          "sự đánh đồng mập mờ",
          "sự hỗn loạn không trật tự",
          "kết quả trung bình"
        ]
      },
      {
        "id": "noun_085",
        "word": "diversity",
        "level": "B2",
        "type": "noun",
        "ipa": "/daɪˈvɜː.sə.ti/",
        "meaningVi": "sự đa dạng, tính phong phú",
        "collocations": "cultural diversity, biological diversity, promote diversity",
        "example": "Workplace diversity brings varied perspectives and fuels creative problem-solving.",
        "exampleVi": "Sự đa dạng nơi làm việc mang lại nhiều góc nhìn phong phú và thúc đẩy giải quyết vấn đề sáng tạo.",
        "optionsVi": [
          "sự đa dạng, tính phong phú",
          "sự rập khuôn đơn điệu",
          "sự đồng nhất tuyệt đối",
          "tư duy đóng khung"
        ]
      },
      {
        "id": "noun_086",
        "word": "feasibility",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌfiː.zəˈbɪl.ə.ti/",
        "meaningVi": "tính khả thi, khả năng thực thi được",
        "collocations": "feasibility study, assess the feasibility, economic feasibility",
        "example": "The engineering team conducted a thorough feasibility study before launching the bridge project.",
        "exampleVi": "Đội ngũ kỹ sư đã tiến hành nghiên cứu tính khả thi kỹ lưỡng trước khi khởi động dự án xây cầu.",
        "optionsVi": [
          "tính khả thi, khả năng thực thi được",
          "sự bất khả thi viển vông",
          "nguy cơ đổ vỡ chắc chắn",
          "sự lãng phí ngân sách"
        ]
      },
      {
        "id": "noun_087",
        "word": "framework",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈfreɪm.wɜːk/",
        "meaningVi": "khuôn khổ cơ cấu, hệ khung sườn",
        "collocations": "regulatory framework, conceptual framework, within the framework of",
        "example": "The government established a robust legal framework for fintech operations.",
        "exampleVi": "Chính phủ đã thiết lập một khuôn khổ pháp lý vững chắc cho hoạt động công nghệ tài chính.",
        "optionsVi": [
          "khuôn khổ cơ cấu, hệ khung sườn",
          "sự ngẫu hứng vô tổ chức",
          "chi tiết vụn vặt",
          "kết luận sau cùng"
        ]
      },
      {
        "id": "noun_088",
        "word": "hierarchy",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈhaɪə.rɑː.ki/",
        "meaningVi": "hệ thống cấp bậc thứ tự",
        "collocations": "corporate hierarchy, organizational hierarchy, strict hierarchy",
        "example": "Many modern tech companies prefer a flat structure over a rigid corporate hierarchy.",
        "exampleVi": "Nhiều công ty công nghệ hiện đại ưa chuộng cơ cấu phẳng thay vì hệ thống cấp bậc doanh nghiệp cứng nhắc.",
        "optionsVi": [
          "hệ thống cấp bậc thứ tự",
          "sự bình đẳng ngang hàng",
          "tập thể tự do",
          "hội nhóm không lãnh đạo"
        ]
      },
      {
        "id": "noun_089",
        "word": "incentive",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪnˈsen.tɪv/",
        "meaningVi": "sự khuyến khích, động lực thúc đẩy",
        "collocations": "financial incentive, tax incentive, provide an incentive",
        "example": "The company offers performance bonuses as an incentive for high productivity.",
        "exampleVi": "Công ty đưa ra các khoản thưởng hiệu suất như một động lực khuyến khích năng suất cao.",
        "optionsVi": [
          "sự khuyến khích, động lực thúc đẩy",
          "hình phạt răn đe",
          "mệnh lệnh bắt buộc",
          "sự áp bức áp đặt"
        ]
      },
      {
        "id": "noun_090",
        "word": "infrastructure",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈɪn.frəˌstrʌk.tʃər/",
        "meaningVi": "cơ sở hạ tầng, nền tảng vật chất kỹ thuật",
        "collocations": "transport infrastructure, digital infrastructure, invest in infrastructure",
        "example": "Investing in cloud infrastructure accelerated the startup's expansion abroad.",
        "exampleVi": "Đầu tư vào cơ sở hạ tầng đám mây đã đẩy nhanh tốc độ mở rộng ra nước ngoài của công ty khởi nghiệp.",
        "optionsVi": [
          "cơ sở hạ tầng, nền tảng vật chất kỹ thuật",
          "chiến lược tiếp thị",
          "kỹ năng mềm nhân viên",
          "bản quyền thương hiệu"
        ]
      },
      {
        "id": "noun_091",
        "word": "innovation",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌɪn.əˈveɪ.ʃən/",
        "meaningVi": "sự đổi mới, sáng kiến cải tiến",
        "collocations": "foster innovation, technological innovation, driving force of innovation",
        "example": "Continuous innovation is the cornerstone of sustainable market leadership.",
        "exampleVi": "Đổi mới liên tục là nền tảng cốt lõi để duy trì vị thế dẫn đầu thị trường bền vững.",
        "optionsVi": [
          "sự đổi mới, sáng kiến cải tiến",
          "lối mòn bảo thủ",
          "sự sao chép nguyên mẫu",
          "sự thụt lùi kỹ thuật"
        ]
      },
      {
        "id": "noun_092",
        "word": "insight",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈɪn.saɪt/",
        "meaningVi": "sự thấu triệt, góc nhìn sâu sắc",
        "collocations": "valuable insight, customer insight, gain insights into",
        "example": "Data analytics provides valuable insights into customer purchasing behaviors.",
        "exampleVi": "Phân tích dữ liệu mang lại những góc nhìn sâu sắc quý giá về hành vi mua sắm của khách hàng.",
        "optionsVi": [
          "sự thấu triệt, góc nhìn sâu sắc",
          "cái nhìn nông cạn bề ngoài",
          "sự hiểu sai lệch",
          "tin đồn ngoài lề"
        ]
      },
      {
        "id": "noun_093",
        "word": "integrity",
        "level": "B2",
        "type": "noun",
        "ipa": "/ɪnˈteɡ.rə.ti/",
        "meaningVi": "tính chính trực, tính toàn vẹn nguyên bản",
        "collocations": "moral integrity, personal integrity, maintain data integrity",
        "example": "A leader with moral integrity earns the unconditional trust of the entire organization.",
        "exampleVi": "Một nhà lãnh đạo có phẩm chất chính trực sẽ nhận được sự tin tưởng vô điều kiện của toàn bộ tổ chức.",
        "optionsVi": [
          "tính chính trực, tính toàn vẹn nguyên bản",
          "sự giả tạo gian lận",
          "lối sống cơ hội",
          "sự thỏa hiệp vụ lợi"
        ]
      },
      {
        "id": "noun_094",
        "word": "manifestation",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌmæn.ɪ.feˈsteɪ.ʃən/",
        "meaningVi": "sự biểu hiện rõ rệt, hiện thân cụ thể",
        "collocations": "clear manifestation, visible manifestation, physical manifestation",
        "example": "Chronic fatigue is often an early manifestation of excessive workplace burnout.",
        "exampleVi": "Mệt mỏi kinh niên thường là một biểu hiện sớm của tình trạng kiệt sức quá mức nơi công sở.",
        "optionsVi": [
          "sự biểu hiện rõ rệt, hiện thân cụ thể",
          "nguyên nhân ngầm ẩn",
          "sự biến mất hoàn toàn",
          "sự giả định lý thuyết"
        ]
      },
      {
        "id": "noun_095",
        "word": "methodology",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌmeθ.əˈdɒl.ə.dʒi/",
        "meaningVi": "hệ phương pháp luận, phương thức nghiên cứu",
        "collocations": "research methodology, robust methodology, agile methodology",
        "example": "Adopting an agile methodology improved our development team's delivery velocity.",
        "exampleVi": "Áp dụng hệ phương pháp luận linh hoạt (Agile) đã nâng cao tốc độ bàn giao của đội phát triển chúng tôi.",
        "optionsVi": [
          "hệ phương pháp luận, phương thức nghiên cứu",
          "công cụ phần cứng",
          "ý tưởng bột phát",
          "bản báo cáo kết luận"
        ]
      },
      {
        "id": "noun_096",
        "word": "obstacle",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈɒb.stə.kəl/",
        "meaningVi": "chướng ngại vật, trở ngại ngáng đường",
        "collocations": "overcome an obstacle, major obstacle, hurdle obstacle",
        "example": "Lack of initial capital was the biggest obstacle the young founders had to overcome.",
        "exampleVi": "Thiếu vốn ban đầu là trở ngại lớn nhất mà các nhà sáng lập trẻ phải vượt qua.",
        "optionsVi": [
          "chướng ngại vật, trở ngại ngáng đường",
          "bàn đạp thuận lợi",
          "sự trợ giúp đắc lực",
          "thành công dễ dàng"
        ]
      },
      {
        "id": "noun_097",
        "word": "paradigm",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˈpær.ə.daɪm/",
        "meaningVi": "khuôn mẫu tư duy, mô hình chuẩn",
        "collocations": "paradigm shift, cultural paradigm, new paradigm",
        "example": "The emergence of artificial intelligence represents a historic paradigm shift in education.",
        "exampleVi": "Sự xuất hiện của trí tuệ nhân tạo đại diện cho một bước chuyển biến khuôn mẫu mang tính lịch sử trong giáo dục.",
        "optionsVi": [
          "khuôn mẫu tư duy, mô hình chuẩn",
          "chi tiết vụn vặt",
          "sự sai sót cá biệt",
          "thời điểm ngẫu nhiên"
        ]
      },
      {
        "id": "noun_098",
        "word": "perspective",
        "level": "B2",
        "type": "noun",
        "ipa": "/pəˈspek.tɪv/",
        "meaningVi": "góc nhìn, quan điểm toàn cảnh",
        "collocations": "broader perspective, from my perspective, fresh perspective",
        "example": "Living in another country gave her a broader perspective on cultural differences.",
        "exampleVi": "Sống ở một quốc gia khác đã mang lại cho cô ấy góc nhìn bao quát hơn về những khác biệt văn hóa.",
        "optionsVi": [
          "góc nhìn, quan điểm toàn cảnh",
          "sự thiên vị định kiến",
          "tầm nhìn hạn hẹp",
          "sự bắt buộc tuân theo"
        ]
      },
      {
        "id": "noun_099",
        "word": "resilience",
        "level": "B2",
        "type": "noun",
        "ipa": "/rɪˈzɪl.jəns/",
        "meaningVi": "khả năng phục hồi, tính kiên cường bền bỉ",
        "collocations": "build resilience, emotional resilience, remarkable resilience",
        "example": "The team showed remarkable resilience in rebounding after the project setback.",
        "exampleVi": "Cả đội đã thể hiện sự kiên cường đáng nể khi nhanh chóng vực dậy sau sự cố dự án.",
        "optionsVi": [
          "khả năng phục hồi, tính kiên cường bền bỉ",
          "sự suy sụp đầu hàng",
          "tính dễ tổn thương",
          "sự buông xuôi bỏ cuộc"
        ]
      },
      {
        "id": "noun_100",
        "word": "vulnerability",
        "level": "B2",
        "type": "noun",
        "ipa": "/ˌvʌl.nər.əˈbɪl.ə.ti/",
        "meaningVi": "tính dễ bị tổn thương, lỗ hổng điểm yếu",
        "collocations": "security vulnerability, patch a vulnerability, expose vulnerability",
        "example": "The cybersecurity audit discovered a critical vulnerability in the payment gateway.",
        "exampleVi": "Đợt kiểm tra an ninh mạng đã phát hiện một lỗ hổng nghiêm trọng trong cổng thanh toán.",
        "optionsVi": [
          "tính dễ bị tổn thương, lỗ hổng điểm yếu",
          "lá chắn bất khả xâm phạm",
          "sức mạnh tuyệt đối",
          "hệ thống bảo mật tối tân"
        ]
      }
    ]
  },
  {
    "groupId": "pos_verbs",
    "name": "100 Động Từ Hành Động & Phản Xạ (Action Verbs)",
    "icon": "⚡",
    "category": "pos",
    "level": "B1",
    "description": "100 động từ cốt lõi A2–B2 giúp diễn đạt suy nghĩ, hành động và giải quyết vấn đề linh hoạt.",
    "words": [
      {
        "id": "verb_001",
        "word": "accept",
        "level": "A2",
        "type": "verb",
        "ipa": "/əkˈsept/",
        "meaningVi": "chấp nhận, đồng ý tiếp nhận",
        "collocations": "accept an offer, accept responsibility, readily accept",
        "example": "She happily accepted the job offer from the technology company.",
        "exampleVi": "Cô ấy đã vui vẻ chấp nhận lời mời làm việc từ công ty công nghệ.",
        "optionsVi": [
          "chấp nhận, đồng ý tiếp nhận",
          "từ chối thẳng thừng",
          "trì hoãn quyết định",
          "khiếu nại bồi thường"
        ]
      },
      {
        "id": "verb_002",
        "word": "achieve",
        "level": "A2",
        "type": "verb",
        "ipa": "/əˈtʃiːv/",
        "meaningVi": "đạt được mục tiêu, hoàn thành",
        "collocations": "achieve a goal, achieve success, achieve results",
        "example": "With discipline and persistence, you can achieve any realistic goal.",
        "exampleVi": "Bằng kỷ luật và sự kiên trì, bạn có thể đạt được bất kỳ mục tiêu thực tế nào.",
        "optionsVi": [
          "đạt được mục tiêu, hoàn thành",
          "từ bỏ giữa chừng",
          "lãng quên mục tiêu",
          "gặp phải thất bại"
        ]
      },
      {
        "id": "verb_003",
        "word": "agree",
        "level": "A2",
        "type": "verb",
        "ipa": "/əˈɡriː/",
        "meaningVi": "đồng ý, tán thành ý kiến",
        "collocations": "agree with someone, agree on a plan, completely agree",
        "example": "I completely agree with your proposal to optimize the workflow.",
        "exampleVi": "Tôi hoàn toàn đồng ý với đề xuất tối ưu hóa quy trình làm việc của bạn.",
        "optionsVi": [
          "đồng ý, tán thành ý kiến",
          "phản bác gay gắt",
          "bỏ phiếu chống",
          "nghi ngờ tính trung thực"
        ]
      },
      {
        "id": "verb_004",
        "word": "allow",
        "level": "A2",
        "type": "verb",
        "ipa": "/əˈlaʊ/",
        "meaningVi": "cho phép, tạo điều kiện cho",
        "collocations": "allow someone to do, allow time for, allow access",
        "example": "Flexible hours allow employees to balance work and personal life.",
        "exampleVi": "Giờ giấc linh hoạt cho phép nhân viên cân bằng giữa công việc và đời sống cá nhân.",
        "optionsVi": [
          "cho phép, tạo điều kiện cho",
          "ngăn cấm tuyệt đối",
          "xử phạt kỷ luật",
          "bắt buộc thực hiện"
        ]
      },
      {
        "id": "verb_005",
        "word": "appear",
        "level": "A2",
        "type": "verb",
        "ipa": "/əˈpɪər/",
        "meaningVi": "xuất hiện, dường như có vẻ",
        "collocations": "appear to be, suddenly appear, appear on screen",
        "example": "The problem appears to be much simpler than we initially thought.",
        "exampleVi": "Vấn đề dường như đơn giản hơn nhiều so với suy nghĩ ban đầu của chúng ta.",
        "optionsVi": [
          "xuất hiện, dường như có vẻ",
          "biến mất không dấu vết",
          "chứng minh rõ ràng",
          "bị phá hủy hoàn toàn"
        ]
      },
      {
        "id": "verb_006",
        "word": "apply",
        "level": "A2",
        "type": "verb",
        "ipa": "/əˈplaɪ/",
        "meaningVi": "ứng tuyển, áp dụng vào thực tế",
        "collocations": "apply for a job, apply a method, apply skills",
        "example": "He applied the techniques learned in the workshop to his daily tasks.",
        "exampleVi": "Anh ấy đã áp dụng các kỹ thuật học được trong buổi hội thảo vào công việc hàng ngày.",
        "optionsVi": [
          "ứng tuyển, áp dụng vào thực tế",
          "bỏ qua lý thuyết",
          "rút lui khỏi vị trí",
          "ngừng học hỏi"
        ]
      },
      {
        "id": "verb_007",
        "word": "avoid",
        "level": "A2",
        "type": "verb",
        "ipa": "/əˈvɔɪd/",
        "meaningVi": "tránh né, phòng tránh rủi ro",
        "collocations": "avoid mistakes, avoid conflicts, avoid rush hour",
        "example": "Double-checking your work helps you avoid unnecessary errors.",
        "exampleVi": "Kiểm tra kỹ lại bài làm giúp bạn tránh được những lỗi sai không đáng có.",
        "optionsVi": [
          "tránh né, phòng tránh rủi ro",
          "đối đầu trực tiếp",
          "cố tình gây ra",
          "chấp nhận rủi ro"
        ]
      },
      {
        "id": "verb_008",
        "word": "belong",
        "level": "A2",
        "type": "verb",
        "ipa": "/bɪˈlɒŋ/",
        "meaningVi": "thuộc về, thuộc quyền sở hữu",
        "collocations": "belong to, sense of belonging, belong together",
        "example": "This laptop belongs to the design department.",
        "exampleVi": "Chiếc máy tính xách tay này thuộc về phòng thiết kế.",
        "optionsVi": [
          "thuộc về, thuộc quyền sở hữu",
          "bị tịch thu tài sản",
          "cho mượn tạm thời",
          "bị vứt bỏ"
        ]
      },
      {
        "id": "verb_009",
        "word": "compare",
        "level": "A2",
        "type": "verb",
        "ipa": "/kəmˈpeər/",
        "meaningVi": "so sánh, đối chiếu tương quan",
        "collocations": "compare with, compare prices, compared to",
        "example": "Always compare prices from multiple vendors before placing a large order.",
        "exampleVi": "Hãy luôn so sánh giá từ nhiều nhà cung cấp trước khi đặt đơn hàng lớn.",
        "optionsVi": [
          "so sánh, đối chiếu tương quan",
          "chọn bừa ngẫu nhiên",
          "chấp nhận mức giá đầu",
          "từ chối mua hàng"
        ]
      },
      {
        "id": "verb_010",
        "word": "create",
        "level": "A2",
        "type": "verb",
        "ipa": "/kriˈeɪt/",
        "meaningVi": "tạo ra, sáng tạo nên",
        "collocations": "create opportunities, create value, create content",
        "example": "The software update creates a much smoother experience for mobile users.",
        "exampleVi": "Bản cập nhật phần mềm tạo ra trải nghiệm mượt mà hơn nhiều cho người dùng di động.",
        "optionsVi": [
          "tạo ra, sáng tạo nên",
          "phá hủy hoàn toàn",
          "sao chép nguyên mẫu",
          "xóa bỏ dữ liệu"
        ]
      },
      {
        "id": "verb_011",
        "word": "decide",
        "level": "A2",
        "type": "verb",
        "ipa": "/dɪˈsaɪd/",
        "meaningVi": "quyết định, định đoạt",
        "collocations": "decide to do, decide between, decide on a date",
        "example": "We need to decide on a launch date before preparing promotional materials.",
        "exampleVi": "Chúng ta cần quyết định ngày ra mắt trước khi chuẩn bị các ấn phẩm quảng bá.",
        "optionsVi": [
          "quyết định, định đoạt",
          "chần chừ do dự",
          "để mặc số phận",
          "hủy bỏ cuộc họp"
        ]
      },
      {
        "id": "verb_012",
        "word": "describe",
        "level": "A2",
        "type": "verb",
        "ipa": "/dɪˈskraɪb/",
        "meaningVi": "miêu tả, thuật lại chi tiết",
        "collocations": "describe accurately, describe the process, describe symptoms",
        "example": "Can you describe the steps you took right before the system crashed?",
        "exampleVi": "Bạn có thể miêu tả các bước bạn đã làm ngay trước khi hệ thống bị sập không?",
        "optionsVi": [
          "miêu tả, thuật lại chi tiết",
          "giấu nhẹm sự việc",
          "bóp méo sự thật",
          "đoán mò nguyên nhân"
        ]
      },
      {
        "id": "verb_013",
        "word": "explain",
        "level": "A2",
        "type": "verb",
        "ipa": "/ɪkˈspleɪn/",
        "meaningVi": "giải thích, làm sáng tỏ",
        "collocations": "explain clearly, explain the reason, explain how it works",
        "example": "The tutor explained the grammar rule with practical real-life examples.",
        "exampleVi": "Gia sư đã giải thích quy tắc ngữ pháp bằng những ví dụ thực tế rất dễ hiểu.",
        "optionsVi": [
          "giải thích, làm sáng tỏ",
          "làm rối rắm thêm",
          "đặt câu hỏi ngược",
          "từ chối trả lời"
        ]
      },
      {
        "id": "verb_014",
        "word": "improve",
        "level": "A2",
        "type": "verb",
        "ipa": "/ɪmˈpruːv/",
        "meaningVi": "cải thiện, nâng cao chất lượng",
        "collocations": "improve skills, improve performance, dramatically improve",
        "example": "Practicing English for twenty minutes daily will dramatically improve your fluency.",
        "exampleVi": "Luyện tiếng Anh hai mươi phút mỗi ngày sẽ cải thiện đáng kể độ trôi chảy của bạn.",
        "optionsVi": [
          "cải thiện, nâng cao chất lượng",
          "làm giảm hiệu suất",
          "giữ nguyên hiện trạng",
          "bỏ bê không rèn luyện"
        ]
      },
      {
        "id": "verb_015",
        "word": "manage",
        "level": "A2",
        "type": "verb",
        "ipa": "/ˈmæn.ɪdʒ/",
        "meaningVi": "quản lý, xoay sở hoàn thành",
        "collocations": "manage time, manage a team, manage to do something",
        "example": "Despite tight schedules, she managed to complete the report on time.",
        "exampleVi": "Dù lịch trình dày đặc, cô ấy vẫn xoay sở hoàn thành báo cáo đúng hạn.",
        "optionsVi": [
          "quản lý, xoay sở hoàn thành",
          "bỏ dở công việc",
          "mất phương hướng hoàn toàn",
          "đẩy việc cho người khác"
        ]
      },
      {
        "id": "verb_016",
        "word": "adapt",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈdæpt/",
        "meaningVi": "thích nghi, điều chỉnh cho phù hợp",
        "collocations": "adapt to changes, adapt quickly, adapt a strategy",
        "example": "Successful organizations adapt quickly to evolving customer demands.",
        "exampleVi": "Các tổ chức thành công thích nghi rất nhanh với nhu cầu ngày càng phát triển của khách hàng.",
        "optionsVi": [
          "thích nghi, điều chỉnh cho phù hợp",
          "bảo thủ chống đối",
          "từ chối thay đổi",
          "phá vỡ quy tắc"
        ]
      },
      {
        "id": "verb_017",
        "word": "adjust",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈdʒʌst/",
        "meaningVi": "điều chỉnh, căn chỉnh thông số/kế hoạch",
        "collocations": "adjust to, make adjustments, finely adjust",
        "example": "We adjusted our advertising budget based on the quarterly sales figures.",
        "exampleVi": "Chúng tôi đã điều chỉnh ngân sách quảng cáo dựa trên số liệu doanh số quý.",
        "optionsVi": [
          "điều chỉnh, căn chỉnh thông số/kế hoạch",
          "cố định vĩnh viễn",
          "hủy bỏ hoàn toàn",
          "tăng giá đột ngột"
        ]
      },
      {
        "id": "verb_018",
        "word": "admit",
        "level": "B1",
        "type": "verb",
        "ipa": "/ədˈmɪt/",
        "meaningVi": "thừa nhận sự thật, nhận lỗi",
        "collocations": "admit a mistake, admit defeat, openly admit",
        "example": "A mature professional is never afraid to admit their mistakes and learn from them.",
        "exampleVi": "Một người đi làm chững chạc không bao giờ ngại thừa nhận lỗi sai của mình và rút kinh nghiệm.",
        "optionsVi": [
          "thừa nhận sự thật, nhận lỗi",
          "đổ lỗi cho người khác",
          "chối bỏ trách nhiệm",
          "che giấu khuyết điểm"
        ]
      },
      {
        "id": "verb_019",
        "word": "affect",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈfekt/",
        "meaningVi": "ảnh hưởng, tác động trực tiếp đến",
        "collocations": "directly affect, adversely affect, affect performance",
        "example": "Poor sleep quality directly affects your cognitive performance and mood.",
        "exampleVi": "Chất lượng giấc ngủ kém ảnh hưởng trực tiếp đến hiệu suất tư duy và tâm trạng của bạn.",
        "optionsVi": [
          "ảnh hưởng, tác động trực tiếp đến",
          "không liên quan chút nào",
          "được miễn trừ hoàn toàn",
          "cải thiện tức thì"
        ]
      },
      {
        "id": "verb_020",
        "word": "analyze",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈæn.əl.aɪz/",
        "meaningVi": "phân tích số liệu, mổ xẻ vấn đề",
        "collocations": "analyze data, analyze results, carefully analyze",
        "example": "The marketing team analyzed customer survey results to refine the campaign.",
        "exampleVi": "Đội ngũ tiếp thị đã phân tích kết quả khảo sát khách hàng để tinh chỉnh chiến dịch.",
        "optionsVi": [
          "phân tích số liệu, mổ xẻ vấn đề",
          "đoán mò cảm tính",
          "bỏ qua số liệu",
          "xóa sạch cơ sở dữ liệu"
        ]
      },
      {
        "id": "verb_021",
        "word": "announce",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈnaʊns/",
        "meaningVi": "thông báo chính thức, công bố",
        "collocations": "announce a decision, announce results, officially announce",
        "example": "The board officially announced the appointment of the new managing director.",
        "exampleVi": "Hội đồng quản trị đã chính thức thông báo việc bổ nhiệm giám đốc điều hành mới.",
        "optionsVi": [
          "thông báo chính thức, công bố",
          "giữ bí mật nội bộ",
          "phủ nhận tin đồn",
          "hủy bỏ quyết định"
        ]
      },
      {
        "id": "verb_022",
        "word": "appreciate",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈpriː.ʃi.eɪt/",
        "meaningVi": "trân trọng, cảm kích sự giúp đỡ",
        "collocations": "greatly appreciate, appreciate help, appreciate the feedback",
        "example": "I greatly appreciate the time and effort you dedicated to our project.",
        "exampleVi": "Tôi vô cùng cảm kích thời gian và công sức mà bạn đã dành cho dự án của chúng ta.",
        "optionsVi": [
          "trân trọng, cảm kích sự giúp đỡ",
          "xem thường công sức",
          "đòi hỏi vô lý",
          "thờ ơ không cảm ơn"
        ]
      },
      {
        "id": "verb_023",
        "word": "approach",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈprəʊtʃ/",
        "meaningVi": "tiếp cận, đến gần đối tượng/vấn đề",
        "collocations": "approach a problem, approach a client, cautious approach",
        "example": "We need a fresh way to approach this persistent technical challenge.",
        "exampleVi": "Chúng ta cần một cách tiếp cận mới mẻ để giải quyết bài toán kỹ thuật nan giải này.",
        "optionsVi": [
          "tiếp cận, đến gần đối tượng/vấn đề",
          "tránh xa né tránh",
          "từ chối giải quyết",
          "bỏ qua hoàn toàn"
        ]
      },
      {
        "id": "verb_024",
        "word": "arrange",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈreɪndʒ/",
        "meaningVi": "sắp xếp cuộc hẹn, thu xếp lịch trình",
        "collocations": "arrange a meeting, arrange travel, neatly arrange",
        "example": "Please arrange an introductory meeting with the prospective partner next week.",
        "exampleVi": "Vui lòng thu xếp một cuộc họp giới thiệu với đối tác tiềm năng vào tuần tới.",
        "optionsVi": [
          "sắp xếp cuộc hẹn, thu xếp lịch trình",
          "hủy hẹn đột ngột",
          "làm xáo trộn lịch",
          "từ chối gặp gỡ"
        ]
      },
      {
        "id": "verb_025",
        "word": "assess",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈses/",
        "meaningVi": "đánh giá mức độ, thẩm định chất lượng",
        "collocations": "assess the risk, assess performance, thoroughly assess",
        "example": "Our risk management team thoroughly assessed all potential security threats.",
        "exampleVi": "Đội quản trị rủi ro đã thẩm định kỹ lưỡng tất cả các mối đe dọa bảo mật tiềm ẩn.",
        "optionsVi": [
          "đánh giá mức độ, thẩm định chất lượng",
          "định giá sai lệch",
          "bỏ qua khâu kiểm tra",
          "khen ngợi mù quáng"
        ]
      },
      {
        "id": "verb_026",
        "word": "assume",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈsjuːm/",
        "meaningVi": "cho rằng, giả định là, đảm nhận",
        "collocations": "assume responsibility, assume that, safely assume",
        "example": "Never assume what users want without testing real prototypes first.",
        "exampleVi": "Đừng bao giờ mặc định những gì người dùng muốn mà không thử nghiệm bản mẫu trước.",
        "optionsVi": [
          "cho rằng, giả định là, đảm nhận",
          "chứng minh bằng số liệu",
          "khẳng định chắc chắn",
          "bác bỏ hoàn toàn"
        ]
      },
      {
        "id": "verb_027",
        "word": "attract",
        "level": "B1",
        "type": "verb",
        "ipa": "/əˈtrækt/",
        "meaningVi": "thu hút, lôi cuốn khách hàng/nhân tài",
        "collocations": "attract customers, attract investment, attract attention",
        "example": "Innovative features help our application attract thousands of active learners.",
        "exampleVi": "Các tính năng đổi mới giúp ứng dụng của chúng tôi thu hút hàng ngàn người học tích cực.",
        "optionsVi": [
          "thu hút, lôi cuốn khách hàng/nhân tài",
          "xua đuổi xa lánh",
          "làm mất lòng tin",
          "gây thất vọng lớn"
        ]
      },
      {
        "id": "verb_028",
        "word": "broaden",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈbrɔː.dən/",
        "meaningVi": "mở rộng tầm nhìn, mở rộng phạm vi",
        "collocations": "broaden horizons, broaden knowledge, broaden perspective",
        "example": "Studying foreign literature broadens your cultural horizons significantly.",
        "exampleVi": "Nghiên cứu văn học nước ngoài giúp mở rộng đáng kể chân trời văn hóa của bạn.",
        "optionsVi": [
          "mở rộng tầm nhìn, mở rộng phạm vi",
          "thu hẹp giới hạn",
          "đóng khung suy nghĩ",
          "làm hạn chế tầm mắt"
        ]
      },
      {
        "id": "verb_029",
        "word": "clarify",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈklær.ɪ.faɪ/",
        "meaningVi": "làm rõ thông tin, giải nghĩa sáng tỏ",
        "collocations": "clarify a point, clarify expectations, seek to clarify",
        "example": "Could you please clarify your question so I can answer more accurately?",
        "exampleVi": "Bạn có thể làm rõ câu hỏi của mình để tôi trả lời chính xác hơn được không?",
        "optionsVi": [
          "làm rõ thông tin, giải nghĩa sáng tỏ",
          "làm cho mơ hồ thêm",
          "né tránh câu trả lời",
          "gây hiểu lầm tai hại"
        ]
      },
      {
        "id": "verb_030",
        "word": "combine",
        "level": "B1",
        "type": "verb",
        "ipa": "/kəmˈbaɪn/",
        "meaningVi": "kết hợp, phối hợp các yếu tố",
        "collocations": "combine theory and practice, combine efforts, successfully combine",
        "example": "The course successfully combines solid theory with hands-on practice.",
        "exampleVi": "Khóa học kết hợp thành công giữa lý thuyết vững chắc với thực hành trực tiếp.",
        "optionsVi": [
          "kết hợp, phối hợp các yếu tố",
          "tách rời riêng rẽ",
          "loại trừ lẫn nhau",
          "làm triệt tiêu nhau"
        ]
      },
      {
        "id": "verb_031",
        "word": "communicate",
        "level": "B1",
        "type": "verb",
        "ipa": "/kəˈmjuː.nɪ.keɪt/",
        "meaningVi": "giao tiếp, truyền đạt thông điệp",
        "collocations": "communicate clearly, communicate ideas, effectively communicate",
        "example": "Leaders must communicate strategic priorities clearly to all team members.",
        "exampleVi": "Nhà lãnh đạo phải truyền đạt các ưu tiên chiến lược một cách rõ ràng tới mọi thành viên.",
        "optionsVi": [
          "giao tiếp, truyền đạt thông điệp",
          "giữ kín thông tin",
          "gây cản trở liên lạc",
          "nói năng ấp úng"
        ]
      },
      {
        "id": "verb_032",
        "word": "compete",
        "level": "B1",
        "type": "verb",
        "ipa": "/kəmˈpiːt/",
        "meaningVi": "cạnh tranh, thi đua sòng phẳng",
        "collocations": "compete globally, compete for talent, effectively compete",
        "example": "Local companies must innovate continuously to compete globally.",
        "exampleVi": "Các doanh nghiệp địa phương phải đổi mới liên tục để cạnh tranh trên quy mô toàn cầu.",
        "optionsVi": [
          "cạnh tranh, thi đua sòng phẳng",
          "nhượng bộ đầu hàng",
          "từ bỏ thị trường",
          "bắt tay độc quyền"
        ]
      },
      {
        "id": "verb_033",
        "word": "confirm",
        "level": "B1",
        "type": "verb",
        "ipa": "/kənˈfɜːm/",
        "meaningVi": "xác nhận, khẳng định tính chính xác",
        "collocations": "confirm a booking, confirm details, please confirm",
        "example": "Please reply to this email to confirm your attendance at the summit.",
        "exampleVi": "Vui lòng phản hồi email này để xác nhận việc bạn tham dự hội nghị thượng đỉnh.",
        "optionsVi": [
          "xác nhận, khẳng định tính chính xác",
          "phủ nhận sạch trơn",
          "hủy bỏ lịch hẹn",
          "nghi ngờ tính chân thật"
        ]
      },
      {
        "id": "verb_034",
        "word": "consider",
        "level": "B1",
        "type": "verb",
        "ipa": "/kənˈsɪd.ər/",
        "meaningVi": "cân nhắc kỹ, xem xét thấu đáo",
        "collocations": "consider options, carefully consider, consider the impact",
        "example": "Take your time to carefully consider all offers before making a choice.",
        "exampleVi": "Hãy dành thời gian cân nhắc kỹ lưỡng mọi lời đề nghị trước khi đưa ra lựa chọn.",
        "optionsVi": [
          "cân nhắc kỹ, xem xét thấu đáo",
          "quyết định bốc đồng",
          "gạt bỏ ngay lập tức",
          "bỏ qua không thèm tính"
        ]
      },
      {
        "id": "verb_035",
        "word": "convince",
        "level": "B1",
        "type": "verb",
        "ipa": "/kənˈvɪns/",
        "meaningVi": "thuyết phục ai tin hoặc đồng ý",
        "collocations": "convince someone of, hard to convince, fully convinced",
        "example": "Compelling data helped convince the investors to fund our startup.",
        "exampleVi": "Dữ liệu thuyết phục đã giúp thuyết phục các nhà đầu tư rót vốn cho công ty khởi nghiệp của chúng tôi.",
        "optionsVi": [
          "thuyết phục ai tin hoặc đồng ý",
          "làm mất lòng tin",
          "gây phản ứng ngược",
          "áp đặt ép buộc"
        ]
      },
      {
        "id": "verb_036",
        "word": "deliver",
        "level": "B1",
        "type": "verb",
        "ipa": "/dɪˈlɪv.ər/",
        "meaningVi": "bàn giao, mang lại kết quả, phát biểu",
        "collocations": "deliver results, deliver a presentation, deliver on promises",
        "example": "Our product team delivered outstanding results ahead of schedule.",
        "exampleVi": "Đội ngũ sản phẩm của chúng tôi đã mang lại những kết quả xuất sắc trước thời hạn.",
        "optionsVi": [
          "bàn giao, mang lại kết quả, phát biểu",
          "thất hứa không làm",
          "chậm trễ bàn giao",
          "hủy bỏ cam kết"
        ]
      },
      {
        "id": "verb_037",
        "word": "demonstrate",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈdem.ən.streɪt/",
        "meaningVi": "chứng minh bằng thực tế, làm mẫu minh họa",
        "collocations": "demonstrate competence, clearly demonstrate, demonstrate how to",
        "example": "The pilot project clearly demonstrated the efficiency of the new system.",
        "exampleVi": "Dự án thí điểm đã chứng minh rõ ràng tính hiệu quả của hệ thống mới.",
        "optionsVi": [
          "chứng minh bằng thực tế, làm mẫu minh họa",
          "che giấu khuyết điểm",
          "nói suông không chứng cứ",
          "bác bỏ sự thật"
        ]
      },
      {
        "id": "verb_038",
        "word": "determine",
        "level": "B1",
        "type": "verb",
        "ipa": "/dɪˈtɜː.mɪn/",
        "meaningVi": "xác định rõ, định đoạt kết quả",
        "collocations": "determine the cause, determine whether, factors that determine",
        "example": "Thorough testing will determine whether the feature is ready for release.",
        "exampleVi": "Kiểm thử kỹ lưỡng sẽ xác định xem tính năng đã sẵn sàng để phát hành hay chưa.",
        "optionsVi": [
          "xác định rõ, định đoạt kết quả",
          "đoán mò mơ hồ",
          "để mặc ngẫu nhiên",
          "không cần kiểm tra"
        ]
      },
      {
        "id": "verb_039",
        "word": "develop",
        "level": "B1",
        "type": "verb",
        "ipa": "/dɪˈvel.əp/",
        "meaningVi": "phát triển, xây dựng từng bước",
        "collocations": "develop a strategy, develop skills, continuously develop",
        "example": "Reading diverse genres helps you develop critical thinking skills.",
        "exampleVi": "Đọc nhiều thể loại sách giúp bạn phát triển kỹ năng tư duy phản biện.",
        "optionsVi": [
          "phát triển, xây dựng từng bước",
          "làm thui chột tài năng",
          "kìm hãm tiến độ",
          "bỏ hoang phế"
        ]
      },
      {
        "id": "verb_040",
        "word": "encourage",
        "level": "B1",
        "type": "verb",
        "ipa": "/ɪnˈkʌr.ɪdʒ/",
        "meaningVi": "khuyến khích, động viên tinh thần",
        "collocations": "encourage participation, strongly encourage, encourage innovation",
        "example": "Great leaders actively encourage team members to share bold new ideas.",
        "exampleVi": "Những nhà lãnh đạo tuyệt vời luôn chủ động khuyến khích thành viên chia sẻ ý tưởng mới táo bạo.",
        "optionsVi": [
          "khuyến khích, động viên tinh thần",
          "chê bai dập tắt",
          "đe dọa trừng phạt",
          "ngăn cản tham gia"
        ]
      },
      {
        "id": "verb_041",
        "word": "establish",
        "level": "B1",
        "type": "verb",
        "ipa": "/ɪˈstæb.lɪʃ/",
        "meaningVi": "thiết lập, xác lập mối quan hệ",
        "collocations": "establish a relationship, establish guidelines, firmly establish",
        "example": "The agreement established a long-term partnership between both universities.",
        "exampleVi": "Bản thỏa thuận đã thiết lập mối quan hệ đối tác lâu dài giữa hai trường đại học.",
        "optionsVi": [
          "thiết lập, xác lập mối quan hệ",
          "chấm dứt hợp tác",
          "phá vỡ cam kết",
          "cắt đứt liên lạc"
        ]
      },
      {
        "id": "verb_042",
        "word": "examine",
        "level": "B1",
        "type": "verb",
        "ipa": "/ɪɡˈzæm.ɪn/",
        "meaningVi": "xem xét kỹ lưỡng, khảo sát tỉ mỉ",
        "collocations": "examine closely, examine evidence, examine the impact",
        "example": "We need to examine the customer data closely before changing product prices.",
        "exampleVi": "Chúng ta cần xem xét dữ liệu khách hàng thật kỹ trước khi thay đổi giá sản phẩm.",
        "optionsVi": [
          "xem xét kỹ lưỡng, khảo sát tỉ mỉ",
          "xem lướt qua loa",
          "bỏ qua không kiểm",
          "chấp nhận vội vã"
        ]
      },
      {
        "id": "verb_043",
        "word": "expand",
        "level": "B1",
        "type": "verb",
        "ipa": "/ɪkˈspænd/",
        "meaningVi": "mở rộng quy mô, bành trướng thị trường",
        "collocations": "expand business, expand overseas, rapidly expand",
        "example": "The startup plans to expand its operations into Southeast Asian markets next year.",
        "exampleVi": "Công ty khởi nghiệp dự định mở rộng hoạt động sang thị trường Đông Nam Á vào năm tới.",
        "optionsVi": [
          "mở rộng quy mô, bành trướng thị trường",
          "thu hẹp quy mô",
          "ngừng hoạt động",
          "cắt giảm chi nhánh"
        ]
      },
      {
        "id": "verb_044",
        "word": "explore",
        "level": "B1",
        "type": "verb",
        "ipa": "/ɪkˈsplɔːr/",
        "meaningVi": "khám phá, thăm dò các phương án",
        "collocations": "explore options, explore opportunities, explore ideas",
        "example": "Let's explore several alternative solutions before committing to one.",
        "exampleVi": "Chúng ta hãy thăm dò một vài giải pháp thay thế trước khi chốt một phương án.",
        "optionsVi": [
          "khám phá, thăm dò các phương án",
          "từ chối tìm hiểu",
          "chấp nhận lối mòn",
          "khóa chặt các lựa chọn"
        ]
      },
      {
        "id": "verb_045",
        "word": "identify",
        "level": "B1",
        "type": "verb",
        "ipa": "/aɪˈden.tɪ.faɪ/",
        "meaningVi": "nhận diện, xác định đúng điểm nút",
        "collocations": "identify problems, identify risks, easily identify",
        "example": "Early testing helps engineers identify software bugs before production release.",
        "exampleVi": "Kiểm thử sớm giúp các kỹ sư nhận diện các lỗi phần mềm trước khi phát hành chính thức.",
        "optionsVi": [
          "nhận diện, xác định đúng điểm nút",
          "nhầm lẫn tai hại",
          "bỏ sót lỗi sai",
          "ngó lơ vấn đề"
        ]
      },
      {
        "id": "verb_046",
        "word": "ignore",
        "level": "B1",
        "type": "verb",
        "ipa": "/ɪɡˈnɔːr/",
        "meaningVi": "phớt lờ, bỏ ngoài tai",
        "collocations": "completely ignore, ignore warnings, hard to ignore",
        "example": "You cannot afford to ignore customer feedback if you want to grow.",
        "exampleVi": "Bạn không thể phớt lờ phản hồi của khách hàng nếu bạn muốn phát triển.",
        "optionsVi": [
          "phớt lờ, bỏ ngoài tai",
          "lắng nghe chăm chú",
          "ghi nhận cẩn thận",
          "phản hồi ngay lập tức"
        ]
      },
      {
        "id": "verb_047",
        "word": "indicate",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈɪn.dɪ.keɪt/",
        "meaningVi": "chỉ ra, biểu thị dấu hiệu",
        "collocations": "clearly indicate, studies indicate, results indicate",
        "example": "Recent quarterly reports clearly indicate a resurgence in consumer spending.",
        "exampleVi": "Các báo cáo quý gần đây chỉ ra rõ ràng sự hồi phục trong chi tiêu của người tiêu dùng.",
        "optionsVi": [
          "chỉ ra, biểu thị dấu hiệu",
          "che giấu bằng chứng",
          "phủ định thực tế",
          "bóp méo số liệu"
        ]
      },
      {
        "id": "verb_048",
        "word": "inspire",
        "level": "B1",
        "type": "verb",
        "ipa": "/ɪnˈspaɪər/",
        "meaningVi": "truyền cảm hứng, thôi thúc",
        "collocations": "inspire others, deeply inspire, inspire confidence",
        "example": "Her passionate speech inspired many young engineers to pursue clean energy careers.",
        "exampleVi": "Bài diễn văn đầy nhiệt huyết của cô ấy đã truyền cảm hứng cho nhiều kỹ sư trẻ theo đuổi năng lượng sạch.",
        "optionsVi": [
          "truyền cảm hứng, thôi thúc",
          "làm nhụt chí ngã lòng",
          "gieo rắc nỗi sợ",
          "ngăn chặn ước mơ"
        ]
      },
      {
        "id": "verb_049",
        "word": "maintain",
        "level": "B1",
        "type": "verb",
        "ipa": "/meɪnˈteɪn/",
        "meaningVi": "duy trì đều đặn, bảo dưỡng",
        "collocations": "maintain standards, maintain focus, maintain consistency",
        "example": "Maintaining daily study consistency is far more effective than cramming before exams.",
        "exampleVi": "Duy trì sự kiên định học mỗi ngày hiệu quả hơn nhiều so với việc nhồi nhét trước kỳ thi.",
        "optionsVi": [
          "duy trì đều đặn, bảo dưỡng",
          "bỏ bê ngắt quãng",
          "làm gián đoạn",
          "phá hỏng thói quen"
        ]
      },
      {
        "id": "verb_050",
        "word": "measure",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈmeʒ.ər/",
        "meaningVi": "đo lường, định lượng hiệu quả",
        "collocations": "measure performance, measure impact, accurately measure",
        "example": "Clear key performance indicators allow managers to measure project impact accurately.",
        "exampleVi": "Các chỉ số hiệu suất rõ ràng cho phép người quản lý đo lường tác động của dự án một cách chuẩn xác.",
        "optionsVi": [
          "đo lường, định lượng hiệu quả",
          "ước lượng áng chừng",
          "bỏ qua số liệu",
          "xuyên tạc kết quả"
        ]
      },
      {
        "id": "verb_051",
        "word": "motivate",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈməʊ.tɪ.veɪt/",
        "meaningVi": "tạo động lực, khích lệ hành động",
        "collocations": "motivate employees, highly motivated, motivate oneself",
        "example": "Clear recognition and constructive rewards motivate employees to excel.",
        "exampleVi": "Sự ghi nhận rõ ràng và phần thưởng xứng đáng sẽ tạo động lực cho nhân viên bứt phá.",
        "optionsVi": [
          "tạo động lực, khích lệ hành động",
          "làm mất tinh thần",
          "trừng phạt hà khắc",
          "gây chán nản thất vọng"
        ]
      },
      {
        "id": "verb_052",
        "word": "negotiate",
        "level": "B1",
        "type": "verb",
        "ipa": "/nəˈɡəʊ.ʃi.eɪt/",
        "meaningVi": "đàm phán, thương lượng điều khoản",
        "collocations": "negotiate terms, negotiate a deal, successfully negotiate",
        "example": "The procurement director successfully negotiated a fifteen percent discount on supplies.",
        "exampleVi": "Giám đốc mua sắm đã thương lượng thành công mức giảm giá mười lăm phần trăm cho nguồn vật tư.",
        "optionsVi": [
          "đàm phán, thương lượng điều khoản",
          "chấp nhận vô điều kiện",
          "tự ý đơn phương quyết định",
          "phá vỡ hợp đồng"
        ]
      },
      {
        "id": "verb_053",
        "word": "observe",
        "level": "B1",
        "type": "verb",
        "ipa": "/əbˈzɜːv/",
        "meaningVi": "quan sát cẩn thận, tuân thủ quy tắc",
        "collocations": "observe behavior, observe safety rules, closely observe",
        "example": "Scientists closely observed the animals' behavioral reactions in their natural habitat.",
        "exampleVi": "Các nhà khoa học đã quan sát kỹ lưỡng phản ứng hành vi của loài động vật trong môi trường sống tự nhiên.",
        "optionsVi": [
          "quan sát cẩn thận, tuân thủ quy tắc",
          "nhắm mắt làm ngơ",
          "vi phạm quy định",
          "phá vỡ trật tự"
        ]
      },
      {
        "id": "verb_054",
        "word": "organize",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˈɔː.ɡən.aɪz/",
        "meaningVi": "tổ chức sắp đặt, điều phối sự kiện",
        "collocations": "organize an event, neatly organize, organize thoughts",
        "example": "She organized an insightful workshop on artificial intelligence for the faculty.",
        "exampleVi": "Cô ấy đã tổ chức một buổi workshop sâu sắc về trí tuệ nhân tạo cho toàn khoa.",
        "optionsVi": [
          "tổ chức sắp đặt, điều phối sự kiện",
          "làm hỗn loạn rối tung",
          "hủy bỏ đột ngột",
          "để mặc bề bộn"
        ]
      },
      {
        "id": "verb_055",
        "word": "participate",
        "level": "B1",
        "type": "verb",
        "ipa": "/pɑːˈtɪs.ɪ.peɪt/",
        "meaningVi": "tham gia đóng góp, hòa mình vào",
        "collocations": "participate actively, participate in discussions, invite to participate",
        "example": "Every student was encouraged to participate actively in the group discussion.",
        "exampleVi": "Mỗi sinh viên đều được khuyến khích tham gia tích cực vào cuộc thảo luận nhóm.",
        "optionsVi": [
          "tham gia đóng góp, hòa mình vào",
          "đứng ngoài thờ ơ",
          "từ chối tham dự",
          "rút lui im lặng"
        ]
      },
      {
        "id": "verb_056",
        "word": "perform",
        "level": "B1",
        "type": "verb",
        "ipa": "/pəˈfɔːm/",
        "meaningVi": "thực hiện nhiệm vụ, biểu diễn",
        "collocations": "perform well, perform duties, perform an operation",
        "example": "The software performs remarkably well even on low-end hardware devices.",
        "exampleVi": "Phần mềm hoạt động cực kỳ mượt mà ngay cả trên các thiết bị phần cứng đời cũ.",
        "optionsVi": [
          "thực hiện nhiệm vụ, biểu diễn",
          "ngừng hoạt động bị đơ",
          "bỏ bê nhiệm vụ",
          "thất bại hoàn toàn"
        ]
      },
      {
        "id": "verb_057",
        "word": "persuade",
        "level": "B1",
        "type": "verb",
        "ipa": "/pəˈsweɪd/",
        "meaningVi": "thuyết phục ai làm điều gì",
        "collocations": "persuade someone to, try to persuade, successfully persuade",
        "example": "She persuaded her colleagues to test the new agile project management framework.",
        "exampleVi": "Cô ấy đã thuyết phục các đồng nghiệp thử nghiệm khuôn khổ quản lý dự án linh hoạt mới.",
        "optionsVi": [
          "thuyết phục ai làm điều gì",
          "ép buộc mệnh lệnh",
          "bị bác bỏ ý kiến",
          "từ bỏ ý định"
        ]
      },
      {
        "id": "verb_058",
        "word": "predict",
        "level": "B1",
        "type": "verb",
        "ipa": "/prɪˈdɪkt/",
        "meaningVi": "dự đoán, tiên đoán trước",
        "collocations": "predict future trends, accurately predict, hard to predict",
        "example": "Machine learning algorithms can predict equipment failures before they happen.",
        "exampleVi": "Các thuật toán học máy có thể dự đoán sự cố máy móc trước khi chúng thực sự xảy ra.",
        "optionsVi": [
          "dự đoán, tiên đoán trước",
          "xảy ra bất ngờ",
          "ghi lại quá khứ",
          "quên mất diễn biến"
        ]
      },
      {
        "id": "verb_059",
        "word": "prevent",
        "level": "B1",
        "type": "verb",
        "ipa": "/prɪˈvent/",
        "meaningVi": "ngăn chặn, phòng ngừa rủi ro",
        "collocations": "prevent accidents, prevent from happening, take steps to prevent",
        "example": "Regular maintenance prevents expensive machine breakdowns later on.",
        "exampleVi": "Bảo dưỡng định kỳ giúp ngăn chặn những hỏng hóc máy móc tốn kém về sau.",
        "optionsVi": [
          "ngăn chặn, phòng ngừa rủi ro",
          "tạo điều kiện xảy ra",
          "cố tình dung túng",
          "bỏ qua cảnh báo"
        ]
      },
      {
        "id": "verb_060",
        "word": "promote",
        "level": "B1",
        "type": "verb",
        "ipa": "/prəˈməʊt/",
        "meaningVi": "thúc đẩy, quảng bá, thăng chức",
        "collocations": "promote a product, promote healthy habits, get promoted",
        "example": "He was promoted to senior engineer after delivering three successful projects.",
        "exampleVi": "Anh ấy đã được thăng chức lên kỹ sư cao cấp sau khi bàn giao thành công ba dự án.",
        "optionsVi": [
          "thúc đẩy, quảng bá, thăng chức",
          "giáng chức cách chức",
          "kìm hãm phát triển",
          "chê bai dập tắt"
        ]
      },
      {
        "id": "verb_061",
        "word": "provide",
        "level": "B1",
        "type": "verb",
        "ipa": "/prəˈvaɪd/",
        "meaningVi": "cung cấp, mang lại thông tin/dịch vụ",
        "collocations": "provide information, provide support, provide services",
        "example": "Our support center provides twenty-four-seven assistance to all customers.",
        "exampleVi": "Trung tâm hỗ trợ của chúng tôi cung cấp sự trợ giúp hai mươi tư trên bảy cho mọi khách hàng.",
        "optionsVi": [
          "cung cấp, mang lại thông tin/dịch vụ",
          "cắt đứt nguồn cung",
          "tước đoạt quyền lợi",
          "giữ kín thông tin"
        ]
      },
      {
        "id": "verb_062",
        "word": "recommend",
        "level": "B1",
        "type": "verb",
        "ipa": "/ˌrek.əˈmend/",
        "meaningVi": "khuyên dùng, đề xuất gợi ý",
        "collocations": "highly recommend, recommend a solution, doctor recommends",
        "example": "I highly recommend reading this book for anyone interested in behavioral economics.",
        "exampleVi": "Tôi đặc biệt khuyên đọc cuốn sách này cho bất kỳ ai quan tâm đến kinh tế học hành vi.",
        "optionsVi": [
          "khuyên dùng, đề xuất gợi ý",
          "can ngăn cảnh báo",
          "cấm tiệt không dùng",
          "chê bai thậm tệ"
        ]
      },
      {
        "id": "verb_063",
        "word": "recover",
        "level": "B1",
        "type": "verb",
        "ipa": "/rɪˈkʌv.ər/",
        "meaningVi": "hồi phục sức khỏe/kinh tế, lấy lại",
        "collocations": "recover from illness, recover data, quickly recover",
        "example": "The company quickly recovered from the supply chain disruption thanks to backup suppliers.",
        "exampleVi": "Công ty nhanh chóng hồi phục sau đợt gián đoạn chuỗi cung ứng nhờ các nhà cung cấp dự phòng.",
        "optionsVi": [
          "hồi phục sức khỏe/kinh tế, lấy lại",
          "suy sụp lụn bại",
          "mất trắng toàn bộ",
          "chìm sâu vào khủng hoảng"
        ]
      },
      {
        "id": "verb_064",
        "word": "reduce",
        "level": "B1",
        "type": "verb",
        "ipa": "/rɪˈdʒuːs/",
        "meaningVi": "cắt giảm chi phí/thời gian, thu nhỏ",
        "collocations": "reduce costs, reduce stress, significantly reduce",
        "example": "Automation significantly reduces manual errors and processing time.",
        "exampleVi": "Tự động hóa giúp cắt giảm đáng kể các sai sót thủ công và thời gian xử lý.",
        "optionsVi": [
          "cắt giảm chi phí/thời gian, thu nhỏ",
          "gia tăng đột biến",
          "nhân đôi chi phí",
          "kéo dài lê thê"
        ]
      },
      {
        "id": "verb_065",
        "word": "resolve",
        "level": "B1",
        "type": "verb",
        "ipa": "/rɪˈzɒlv/",
        "meaningVi": "giải quyết triệt để vấn đề/mâu thuẫn",
        "collocations": "resolve an issue, resolve conflicts, quickly resolve",
        "example": "Direct communication is often the most effective way to resolve workplace conflicts.",
        "exampleVi": "Giao tiếp trực diện thường là cách hiệu quả nhất để giải quyết triệt để các mâu thuẫn nơi làm việc.",
        "optionsVi": [
          "giải quyết triệt để vấn đề/mâu thuẫn",
          "làm trầm trọng thêm",
          "né tránh không xử lý",
          "đổ thêm dầu vào lửa"
        ]
      },
      {
        "id": "verb_066",
        "word": "accelerate",
        "level": "B2",
        "type": "verb",
        "ipa": "/əkˈsel.ə.reɪt/",
        "meaningVi": "đẩy nhanh tiến độ, gia tốc quá trình",
        "collocations": "accelerate growth, accelerate progress, significantly accelerate",
        "example": "Cloud computing tools significantly accelerate software deployment cycles.",
        "exampleVi": "Các công cụ điện toán đám mây đẩy nhanh đáng kể chu kỳ triển khai phần mềm.",
        "optionsVi": [
          "đẩy nhanh tiến độ, gia tốc quá trình",
          "kìm hãm trì trệ",
          "dừng khẩn cấp",
          "làm chậm tiến độ"
        ]
      },
      {
        "id": "verb_067",
        "word": "accommodate",
        "level": "B2",
        "type": "verb",
        "ipa": "/əˈkɒm.ə.deɪt/",
        "meaningVi": "đáp ứng nhu cầu, chứa được số lượng",
        "collocations": "accommodate requests, accommodate needs, accommodate guests",
        "example": "The conference venue can accommodate up to one thousand attendees comfortably.",
        "exampleVi": "Địa điểm tổ chức hội nghị có thể đáp ứng chỗ ngồi thoải mái cho tới một ngàn khách tham dự.",
        "optionsVi": [
          "đáp ứng nhu cầu, chứa được số lượng",
          "từ chối tiếp nhận",
          "quá tải từ chối",
          "không đủ sức chứa"
        ]
      },
      {
        "id": "verb_068",
        "word": "acknowledge",
        "level": "B2",
        "type": "verb",
        "ipa": "/əkˈnɒl.ɪdʒ/",
        "meaningVi": "công nhận sự thật, ghi nhận đóng góp",
        "collocations": "acknowledge receipt, acknowledge contribution, publicly acknowledge",
        "example": "The director publicly acknowledged the dedication and ingenuity of the research team.",
        "exampleVi": "Vị giám đốc đã công khai ghi nhận sự tận tụy và tài trí của đội ngũ nghiên cứu.",
        "optionsVi": [
          "công nhận sự thật, ghi nhận đóng góp",
          "phủ nhận công lao",
          "ngó lơ thành tích",
          "xóa sạch dấu vết"
        ]
      },
      {
        "id": "verb_069",
        "word": "advocate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈæd.və.keɪt/",
        "meaningVi": "công khai ủng hộ chính sách/quan điểm",
        "collocations": "strongly advocate, advocate for reform, advocate change",
        "example": "Many environmental scientists strongly advocate for stricter emissions limits.",
        "exampleVi": "Nhiều nhà khoa học môi trường công khai ủng hộ việc áp đặt các giới hạn khí thải nghiêm ngặt hơn.",
        "optionsVi": [
          "công khai ủng hộ chính sách/quan điểm",
          "chống đối kịch liệt",
          "phê phán chỉ trích",
          "cấm đoán gắt gao"
        ]
      },
      {
        "id": "verb_070",
        "word": "alleviate",
        "level": "B2",
        "type": "verb",
        "ipa": "/əˈliː.vi.eɪt/",
        "meaningVi": "làm dịu bớt nỗi đau, xoa dịu áp lực",
        "collocations": "alleviate poverty, alleviate symptoms, alleviate stress",
        "example": "The new highway expansion is expected to alleviate severe traffic congestion.",
        "exampleVi": "Việc mở rộng đường cao tốc mới được kỳ vọng sẽ làm dịu bớt tình trạng ùn tắc giao thông nghiêm trọng.",
        "optionsVi": [
          "làm dịu bớt nỗi đau, xoa dịu áp lực",
          "làm trầm trọng thêm",
          "châm ngòi căng thẳng",
          "gia tăng gánh nặng"
        ]
      },
      {
        "id": "verb_071",
        "word": "allocate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈæl.ə.keɪt/",
        "meaningVi": "phân bổ ngân sách, cấp phát tài nguyên",
        "collocations": "allocate funds, allocate resources, allocate time",
        "example": "Management allocated additional funds to research and development this quarter.",
        "exampleVi": "Ban quản lý đã phân bổ thêm ngân sách cho nghiên cứu và phát triển trong quý này.",
        "optionsVi": [
          "phân bổ ngân sách, cấp phát tài nguyên",
          "thắt chặt chi tiêu",
          "cắt giảm toàn bộ",
          "chi tiêu bừa bãi"
        ]
      },
      {
        "id": "verb_072",
        "word": "anticipate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ænˈtɪs.ɪ.peɪt/",
        "meaningVi": "lường trước tình huống, dự đoán trước",
        "collocations": "anticipate problems, anticipate changes, eagerly anticipate",
        "example": "Experienced project managers always anticipate potential roadblocks early.",
        "exampleVi": "Các nhà quản lý dự án giàu kinh nghiệm luôn lường trước các trở ngại tiềm ẩn từ sớm.",
        "optionsVi": [
          "lường trước tình huống, dự đoán trước",
          "bị động bất ngờ",
          "không hay biết gì",
          "hối hận muộn màng"
        ]
      },
      {
        "id": "verb_073",
        "word": "articulate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ɑːˈtɪk.jə.leɪt/",
        "meaningVi": "diễn đạt rành mạch, trình bày gãy gọn",
        "collocations": "articulate a vision, clearly articulate, articulate thoughts",
        "example": "The founder articulated a compelling vision that inspired investors and employees alike.",
        "exampleVi": "Nhà sáng lập đã diễn đạt một tầm nhìn đầy thuyết phục truyền cảm hứng cho cả nhà đầu tư lẫn nhân viên.",
        "optionsVi": [
          "diễn đạt rành mạch, trình bày gãy gọn",
          "nói năng ấp úng ngắc ngứ",
          "gây mơ hồ khó hiểu",
          "giữ im lặng"
        ]
      },
      {
        "id": "verb_074",
        "word": "collaborate",
        "level": "B2",
        "type": "verb",
        "ipa": "/kəˈlæb.ə.reɪt/",
        "meaningVi": "cộng tác chặt chẽ, phối hợp cùng làm",
        "collocations": "collaborate closely, collaborate on a project, collaborate with partners",
        "example": "Engineers and product designers collaborate closely throughout the sprint.",
        "exampleVi": "Các kỹ sư và nhà thiết kế sản phẩm cộng tác chặt chẽ với nhau trong suốt đợt sprint.",
        "optionsVi": [
          "cộng tác chặt chẽ, phối hợp cùng làm",
          "làm việc riêng lẻ tách biệt",
          "tranh giành ảnh hưởng",
          "cản trở công việc"
        ]
      },
      {
        "id": "verb_075",
        "word": "compensate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈkɒm.pən.seɪt/",
        "meaningVi": "bồi thường thiệt hại, bù đắp khuyết điểm",
        "collocations": "compensate for loss, adequately compensate, compensate victims",
        "example": "The airline agreed to compensate passengers for the canceled flight delays.",
        "exampleVi": "Hãng hàng không đã đồng ý bồi thường cho hành khách vì sự cố hủy chuyến bay chậm trễ.",
        "optionsVi": [
          "bồi thường thiệt hại, bù đắp khuyết điểm",
          "chối bỏ trách nhiệm",
          "thu thêm phụ phí",
          "phạt ngược khách hàng"
        ]
      },
      {
        "id": "verb_076",
        "word": "comprehend",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˌkɒm.prɪˈhend/",
        "meaningVi": "lĩnh hội thấu đáo, hiểu tường tận",
        "collocations": "fully comprehend, fail to comprehend, comprehend the meaning",
        "example": "It took years of rigorous study to fully comprehend advanced quantum physics.",
        "exampleVi": "Phải mất nhiều năm nghiên cứu khắt khe mới có thể lĩnh hội thấu đáo vật lý lượng tử nâng cao.",
        "optionsVi": [
          "lĩnh hội thấu đáo, hiểu tường tận",
          "hiểu sai lệch hoàn toàn",
          "học vẹt bề ngoài",
          "mù tịt không hiểu"
        ]
      },
      {
        "id": "verb_077",
        "word": "consolidate",
        "level": "B2",
        "type": "verb",
        "ipa": "/kənˈsɒl.ɪ.deɪt/",
        "meaningVi": "củng cố vị thế, hợp nhất dữ liệu/nguồn lực",
        "collocations": "consolidate market position, consolidate debt, consolidate gains",
        "example": "The acquisition helped the corporation consolidate its position as the market leader.",
        "exampleVi": "Thương vụ thâu tóm đã giúp tập đoàn củng cố vững chắc vị thế dẫn đầu thị trường của mình.",
        "optionsVi": [
          "củng cố vị thế, hợp nhất dữ liệu/nguồn lực",
          "làm suy yếu phân mảnh",
          "chia rẽ nội bộ",
          "đánh mất thị phần"
        ]
      },
      {
        "id": "verb_078",
        "word": "cultivate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈkʌl.tɪ.veɪt/",
        "meaningVi": "trau dồi bồi dưỡng, vun đắp mối quan hệ",
        "collocations": "cultivate relationships, cultivate habits, cultivate an environment",
        "example": "Successful entrepreneurs cultivate strong networks and long-term client relationships.",
        "exampleVi": "Các doanh nhân thành công luôn vun đắp mạng lưới quan hệ vững chắc và gắn kết lâu dài với khách hàng.",
        "optionsVi": [
          "trau dồi bồi dưỡng, vun đắp mối quan hệ",
          "phá hoại lòng tin",
          "lơ là không chăm sóc",
          "đốt cháy giai đoạn"
        ]
      },
      {
        "id": "verb_079",
        "word": "differentiate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˌdɪf.əˈren.ʃi.eɪt/",
        "meaningVi": "tạo điểm khác biệt, phân biệt rạch ròi",
        "collocations": "differentiate from competitors, clearly differentiate, differentiate between",
        "example": "Exceptional customer service differentiates our brand from ordinary competitors.",
        "exampleVi": "Dịch vụ chăm sóc khách hàng vượt trội tạo nên điểm khác biệt của thương hiệu chúng tôi so với đối thủ.",
        "optionsVi": [
          "tạo điểm khác biệt, phân biệt rạch ròi",
          "sao chép y hệt đối thủ",
          "hòa lẫn đại trà",
          "đánh đồng như nhau"
        ]
      },
      {
        "id": "verb_080",
        "word": "diminish",
        "level": "B2",
        "type": "verb",
        "ipa": "/dɪˈmɪn.ɪʃ/",
        "meaningVi": "suy giảm về lượng/giá trị, thu nhỏ",
        "collocations": "diminish value, diminish credibility, gradually diminish",
        "example": "Failing to deliver on promises will rapidly diminish customer trust.",
        "exampleVi": "Không thực hiện đúng cam kết sẽ nhanh chóng làm suy giảm niềm tin của khách hàng.",
        "optionsVi": [
          "suy giảm về lượng/giá trị, thu nhỏ",
          "gia tăng vùn vụt",
          "nâng tầm uy tín",
          "củng cố vững chắc"
        ]
      },
      {
        "id": "verb_081",
        "word": "disrupt",
        "level": "B2",
        "type": "verb",
        "ipa": "/dɪsˈrʌpt/",
        "meaningVi": "gây gián đoạn, phá vỡ cấu trúc truyền thống",
        "collocations": "disrupt the market, disrupt the supply chain, severely disrupt",
        "example": "Digital banking platforms severely disrupted traditional financial services.",
        "exampleVi": "Các nền tảng ngân hàng số đã làm thay đổi hoàn toàn và phá vỡ cấu trúc dịch vụ tài chính truyền thống.",
        "optionsVi": [
          "gây gián đoạn, phá vỡ cấu trúc truyền thống",
          "bảo toàn nguyên vẹn",
          "duy trì trật tự cũ",
          "hồi phục lại trạng thái"
        ]
      },
      {
        "id": "verb_082",
        "word": "eliminate",
        "level": "B2",
        "type": "verb",
        "ipa": "/iˈlɪm.ɪ.neɪt/",
        "meaningVi": "loại trừ hoàn toàn, triệt tiêu rủi ro",
        "collocations": "eliminate waste, eliminate errors, completely eliminate",
        "example": "Lean manufacturing methods aim to completely eliminate unnecessary production waste.",
        "exampleVi": "Các phương pháp sản xuất tinh gọn hướng tới việc loại trừ hoàn toàn các lãng phí sản xuất không cần thiết.",
        "optionsVi": [
          "loại trừ hoàn toàn, triệt tiêu rủi ro",
          "tích tụ thêm rác thải",
          "gia tăng tỷ lệ lỗi",
          "duy trì sự lãng phí"
        ]
      },
      {
        "id": "verb_083",
        "word": "emphasize",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈem.fə.saɪz/",
        "meaningVi": "nhấn mạnh tầm quan trọng, làm nổi bật",
        "collocations": "emphasize the importance of, strongly emphasize, re-emphasize",
        "example": "The speaker strongly emphasized the need for digital literacy in modern schools.",
        "exampleVi": "Diễn giả đã đặc biệt nhấn mạnh sự cần thiết của kỹ năng công nghệ số trong trường học hiện đại.",
        "optionsVi": [
          "nhấn mạnh tầm quan trọng, làm nổi bật",
          "xem nhẹ bỏ qua",
          "giảm thiểu giá trị",
          "không đả động tới"
        ]
      },
      {
        "id": "verb_084",
        "word": "enhance",
        "level": "B2",
        "type": "verb",
        "ipa": "/ɪnˈhɑːns/",
        "meaningVi": "nâng cao chất lượng, gia tăng giá trị",
        "collocations": "enhance performance, enhance security, enhance user experience",
        "example": "The latest update significantly enhances user data privacy and security.",
        "exampleVi": "Bản cập nhật mới nhất nâng cao đáng kể tính riêng tư và bảo mật dữ liệu của người dùng.",
        "optionsVi": [
          "nâng cao chất lượng, gia tăng giá trị",
          "làm xuống cấp chất lượng",
          "gây nguy cơ bảo mật",
          "phá hỏng trải nghiệm"
        ]
      },
      {
        "id": "verb_085",
        "word": "execute",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈek.sɪ.kjuːt/",
        "meaningVi": "thi hành lệnh, triển khai thực thi kế hoạch",
        "collocations": "execute a plan, execute a strategy, flawlessly execute",
        "example": "A great strategy is worthless unless the team can flawlessly execute it.",
        "exampleVi": "Một chiến lược tuyệt vời cũng vô giá trị trừ phi đội ngũ có thể thực thi nó một cách hoàn hảo.",
        "optionsVi": [
          "thi hành lệnh, triển khai thực thi kế hoạch",
          "để dự án trên giấy",
          "hủy bỏ kế hoạch",
          "trì hoãn vô thời hạn"
        ]
      },
      {
        "id": "verb_086",
        "word": "facilitate",
        "level": "B2",
        "type": "verb",
        "ipa": "/fəˈsɪl.ɪ.teɪt/",
        "meaningVi": "tạo điều kiện thuận lợi, hỗ trợ tiến trình",
        "collocations": "facilitate discussions, facilitate growth, facilitate learning",
        "example": "Modern collaboration platforms facilitate remote team communication across time zones.",
        "exampleVi": "Các nền tảng cộng tác hiện đại tạo điều kiện thuận lợi cho giao tiếp nhóm từ xa xuyên múi giờ.",
        "optionsVi": [
          "tạo điều kiện thuận lợi, hỗ trợ tiến trình",
          "gây cản trở khó khăn",
          "làm tắc nghẽn liên lạc",
          "ngăn chặn phát triển"
        ]
      },
      {
        "id": "verb_087",
        "word": "foster",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈfɒs.tər/",
        "meaningVi": "nuôi dưỡng, ấp ủ phát triển, thúc đẩy",
        "collocations": "foster innovation, foster collaboration, foster trust",
        "example": "An open workplace culture fosters mutual trust and genuine innovation.",
        "exampleVi": "Văn hóa công sở cởi mở sẽ nuôi dưỡng lòng tin cậy lẫn nhau và sự đổi mới thực thụ.",
        "optionsVi": [
          "nuôi dưỡng, ấp ủ phát triển, thúc đẩy",
          "bóp nghẹt sáng kiến",
          "phá vỡ sự tin tưởng",
          "dập tắt ý tưởng mới"
        ]
      },
      {
        "id": "verb_088",
        "word": "generate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈdʒen.ə.reɪt/",
        "meaningVi": "tạo ra doanh thu/năng lượng, làm phát sinh",
        "collocations": "generate revenue, generate leads, generate electricity",
        "example": "The new digital campaign generated over five thousand qualified customer leads.",
        "exampleVi": "Chiến dịch kỹ thuật số mới đã tạo ra hơn năm ngàn khách hàng tiềm năng chất lượng cao.",
        "optionsVi": [
          "tạo ra doanh thu/năng lượng, làm phát sinh",
          "tiêu hao cạn kiệt",
          "làm bốc hơi lợi nhuận",
          "làm mất khách hàng"
        ]
      },
      {
        "id": "verb_089",
        "word": "implement",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈɪm.plɪ.ment/",
        "meaningVi": "áp dụng vào thực tế, triển khai hệ thống",
        "collocations": "implement changes, implement policy, successfully implement",
        "example": "The hospital successfully implemented a digital patient record management system.",
        "exampleVi": "Bệnh viện đã triển khai thành công hệ thống quản lý hồ sơ bệnh án kỹ thuật số.",
        "optionsVi": [
          "áp dụng vào thực tế, triển khai hệ thống",
          "bãi bỏ quy định",
          "từ chối chuyển đổi",
          "chỉ nói trên lý thuyết"
        ]
      },
      {
        "id": "verb_090",
        "word": "incorporate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ɪnˈkɔː.pər.eɪt/",
        "meaningVi": "tích hợp vào tổng thể, kết hợp đưa vào",
        "collocations": "incorporate feedback, incorporate features, seamlessly incorporate",
        "example": "We incorporated user feedback into the latest design sprint.",
        "exampleVi": "Chúng tôi đã tích hợp phản hồi của người dùng vào đợt chạy nước rút thiết kế mới nhất.",
        "optionsVi": [
          "tích hợp vào tổng thể, kết hợp đưa vào",
          "loại trừ ra ngoài",
          "phớt lờ góp ý",
          "tách biệt cô lập"
        ]
      },
      {
        "id": "verb_091",
        "word": "initiate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ɪˈnɪʃ.i.eɪt/",
        "meaningVi": "khởi xướng dự án, bắt đầu quy trình",
        "collocations": "initiate a project, initiate contact, initiate reform",
        "example": "The leadership team initiated comprehensive operational reforms across all branches.",
        "exampleVi": "Ban lãnh đạo đã khởi xướng những cuộc cải tổ vận hành toàn diện trên tất cả các chi nhánh.",
        "optionsVi": [
          "khởi xướng dự án, bắt đầu quy trình",
          "kết thúc đóng lại",
          "trì hoãn không làm",
          "chấm dứt hợp đồng"
        ]
      },
      {
        "id": "verb_092",
        "word": "integrate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈɪn.tɪ.ɡreɪt/",
        "meaningVi": "tích hợp liên thông, hòa nhập hệ thống",
        "collocations": "integrate with, seamlessly integrate, integrate systems",
        "example": "The new payment gateway integrates seamlessly with our existing mobile application.",
        "exampleVi": "Cổng thanh toán mới tích hợp liền mạch với ứng dụng di động hiện có của chúng tôi.",
        "optionsVi": [
          "tích hợp liên thông, hòa nhập hệ thống",
          "xung đột không tương thích",
          "hoạt động rời rạc",
          "ngắt kết nối hệ thống"
        ]
      },
      {
        "id": "verb_093",
        "word": "leverage",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈliː.vər.ɪdʒ/",
        "meaningVi": "tận dụng đòn bẩy, khai thác tối đa lợi thế",
        "collocations": "leverage technology, leverage strengths, leverage data",
        "example": "Startups leverage modern cloud tools to compete effectively with established giants.",
        "exampleVi": "Các công ty khởi nghiệp tận dụng các công cụ đám mây hiện đại để cạnh tranh hiệu quả với các ông lớn lâu đời.",
        "optionsVi": [
          "tận dụng đòn bẩy, khai thác tối đa lợi thế",
          "bỏ phí tài nguyên",
          "không biết dùng ưu thế",
          "lệ thuộc thụ động"
        ]
      },
      {
        "id": "verb_094",
        "word": "mitigate",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈmɪt.ɪ.ɡeɪt/",
        "meaningVi": "giảm thiểu rủi ro, làm dịu bớt hậu quả",
        "collocations": "mitigate risk, mitigate the impact, mitigate losses",
        "example": "Diversifying investment portfolios helps mitigate potential financial losses.",
        "exampleVi": "Đa dạng hóa danh mục đầu tư giúp giảm thiểu những tổn thất tài chính tiềm ẩn.",
        "optionsVi": [
          "giảm thiểu rủi ro, làm dịu bớt hậu quả",
          "làm tăng nguy cơ rủi ro",
          "đổ thêm dầu vào lửa",
          "bỏ mặc số phận"
        ]
      },
      {
        "id": "verb_095",
        "word": "optimize",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈɒp.tɪ.maɪz/",
        "meaningVi": "tối ưu hóa quy trình/hiệu suất",
        "collocations": "optimize performance, optimize resources, optimize workflow",
        "example": "The engineering team optimized database queries to cut page loading time in half.",
        "exampleVi": "Đội ngũ kỹ thuật đã tối ưu hóa các truy vấn cơ sở dữ liệu để giảm một nửa thời gian tải trang.",
        "optionsVi": [
          "tối ưu hóa quy trình/hiệu suất",
          "làm chậm chạp nặng nề",
          "tiêu tốn tài nguyên",
          "làm giảm hiệu năng"
        ]
      },
      {
        "id": "verb_096",
        "word": "prioritize",
        "level": "B2",
        "type": "verb",
        "ipa": "/praɪˈɒr.ɪ.taɪz/",
        "meaningVi": "ưu tiên xử lý trước, đặt lên hàng đầu",
        "collocations": "prioritize tasks, prioritize health, set priorities",
        "example": "Effective professionals prioritize high-impact tasks early in their workday.",
        "exampleVi": "Những người làm việc hiệu quả luôn ưu tiên xử lý các đầu việc có tác động lớn vào đầu ngày làm việc.",
        "optionsVi": [
          "ưu tiên xử lý trước, đặt lên hàng đầu",
          "xao nhãng việc vặt",
          "trì hoãn việc gấp",
          "đánh đồng thứ tự"
        ]
      },
      {
        "id": "verb_097",
        "word": "reconcile",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈrek.ən.saɪl/",
        "meaningVi": "dung hòa hai quan điểm, đối soát tài chính",
        "collocations": "reconcile differences, reconcile accounts, reconcile data",
        "example": "The mediator helped both sides reconcile their differences and draft a fair contract.",
        "exampleVi": "Người hòa giải đã giúp hai bên dung hòa những bất đồng và soạn thảo một bản hợp đồng công bằng.",
        "optionsVi": [
          "dung hòa hai quan điểm, đối soát tài chính",
          "khoét sâu mâu thuẫn",
          "đẩy xung đột lên cao",
          "làm sai lệch sổ sách"
        ]
      },
      {
        "id": "verb_098",
        "word": "scrutinize",
        "level": "B2",
        "type": "verb",
        "ipa": "/ˈskruː.tɪ.naɪz/",
        "meaningVi": "soi xét kỹ lưỡng, kiểm tra gắt gao",
        "collocations": "scrutinize details, closely scrutinize, scrutinize financial records",
        "example": "Regulatory authorities scrutinized the company's financial records for tax compliance.",
        "exampleVi": "Cơ quan quản lý đã soi xét kỹ lưỡng hồ sơ tài chính của công ty về việc tuân thủ thuế.",
        "optionsVi": [
          "soi xét kỹ lưỡng, kiểm tra gắt gao",
          "kiểm tra qua loa đại khái",
          "bỏ qua không rà soát",
          "nhắm mắt cho qua"
        ]
      },
      {
        "id": "verb_099",
        "word": "substantiate",
        "level": "B2",
        "type": "verb",
        "ipa": "/səbˈstæn.ʃi.eɪt/",
        "meaningVi": "chứng minh bằng chứng cứ xác thực",
        "collocations": "substantiate claims, substantiate with evidence, fail to substantiate",
        "example": "The plaintiff failed to substantiate their claims with concrete documentary evidence.",
        "exampleVi": "Nguyên đơn đã không thể chứng minh các cáo buộc của mình bằng các bằng chứng tài liệu cụ thể.",
        "optionsVi": [
          "chứng minh bằng chứng cứ xác thực",
          "nói suông vô căn cứ",
          "bịa đặt lời khai",
          "phủ nhận cáo buộc"
        ]
      },
      {
        "id": "verb_100",
        "word": "transform",
        "level": "B2",
        "type": "verb",
        "ipa": "/trænsˈfɔːm/",
        "meaningVi": "chuyển đổi toàn diện, lột xác",
        "collocations": "transform business, digital transformation, transform lives",
        "example": "Adopting artificial intelligence transformed their customer service operations completely.",
        "exampleVi": "Ứng dụng trí tuệ nhân tạo đã chuyển đổi toàn diện hoạt động chăm sóc khách hàng của họ.",
        "optionsVi": [
          "chuyển đổi toàn diện, lột xác",
          "giữ nguyên lối cũ",
          "thụt lùi thoái hóa",
          "phục hồi cái cũ"
        ]
      }
    ]
  },
  {
    "groupId": "pos_adjectives",
    "name": "100 Tính Từ Miêu Tả & Đánh Giá (Core Adjectives)",
    "icon": "✨",
    "category": "pos",
    "level": "B1",
    "description": "100 tính từ sắc nét A2–B2 miêu tả tính cách, trạng thái, chất lượng và góc nhìn đánh giá.",
    "words": [
      {
        "id": "adj_001",
        "word": "available",
        "level": "A2",
        "type": "adjective",
        "ipa": "/əˈveɪ.lə.bəl/",
        "meaningVi": "có sẵn, rảnh rỗi có thể liên lạc",
        "collocations": "readily available, publicly available, available for consultation",
        "example": "The customer support team is available twenty-four hours a day.",
        "exampleVi": "Đội ngũ hỗ trợ khách hàng luôn có sẵn hai mươi tư giờ mỗi ngày.",
        "optionsVi": [
          "có sẵn, rảnh rỗi có thể liên lạc",
          "hết hàng vĩnh viễn",
          "bận rộn không thể gặp",
          "bị hạn chế nghiêm ngặt"
        ]
      },
      {
        "id": "adj_002",
        "word": "careful",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈkeə.fəl/",
        "meaningVi": "cẩn thận, kỹ lưỡng chu đáo",
        "collocations": "careful planning, be careful with, careful consideration",
        "example": "Careful planning at the beginning prevents costly mistakes later on.",
        "exampleVi": "Lên kế hoạch cẩn thận ngay từ đầu giúp ngăn ngừa những sai sót tốn kém về sau.",
        "optionsVi": [
          "cẩn thận, kỹ lưỡng chu đáo",
          "bất cẩn cẩu thả",
          "vội vàng hấp tấp",
          "liều lĩnh nguy hiểm"
        ]
      },
      {
        "id": "adj_003",
        "word": "comfortable",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈkʌm.fə.tə.bəl/",
        "meaningVi": "thoải mái, dễ chịu, tự tin",
        "collocations": "comfortable atmosphere, feel comfortable, comfortable shoes",
        "example": "Our open office creates a friendly and comfortable atmosphere for everyone.",
        "exampleVi": "Văn phòng mở của chúng tôi tạo ra một bầu không khí thân thiện và thoải mái cho tất cả mọi người.",
        "optionsVi": [
          "thoải mái, dễ chịu, tự tin",
          "gò bó khó chịu",
          "ngột ngạt căng thẳng",
          "bất an lo lắng"
        ]
      },
      {
        "id": "adj_004",
        "word": "convenient",
        "level": "A2",
        "type": "adjective",
        "ipa": "/kənˈviː.ni.ənt/",
        "meaningVi": "thuận tiện, tiện lợi cho việc sử dụng",
        "collocations": "convenient location, convenient time, extremely convenient",
        "example": "Mobile banking makes sending money overseas extremely convenient.",
        "exampleVi": "Ngân hàng di động giúp việc chuyển tiền ra nước ngoài trở nên cực kỳ thuận tiện.",
        "optionsVi": [
          "thuận tiện, tiện lợi cho việc sử dụng",
          "bất tiện phiền toái",
          "phức tạp rườm rà",
          "tốn kém thời gian"
        ]
      },
      {
        "id": "adj_005",
        "word": "dangerous",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈdeɪn.dʒər.əs/",
        "meaningVi": "nguy hiểm, có nguy cơ gây hại",
        "collocations": "highly dangerous, dangerous situation, dangerous driving",
        "example": "It is extremely dangerous to operate heavy machinery without proper training.",
        "exampleVi": "Cực kỳ nguy hiểm khi vận hành máy móc hạng nặng mà không qua đào tạo bài bản.",
        "optionsVi": [
          "nguy hiểm, có nguy cơ gây hại",
          "an toàn tuyệt đối",
          "vô hại lành tính",
          "thuận buồm xuôi gió"
        ]
      },
      {
        "id": "adj_006",
        "word": "difficult",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈdɪf.ɪ.kəlt/",
        "meaningVi": "khó khăn, nan giải phức tạp",
        "collocations": "difficult decision, difficult task, cope with difficult situations",
        "example": "Making budget cuts was the most difficult decision the management had to face.",
        "exampleVi": "Cắt giảm ngân sách là quyết định khó khăn nhất mà ban quản lý phải đối mặt.",
        "optionsVi": [
          "khó khăn, nan giải phức tạp",
          "dễ dàng đơn giản",
          "thuận lợi trôi chảy",
          "hiển nhiên rõ ràng"
        ]
      },
      {
        "id": "adj_007",
        "word": "famous",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈfeɪ.məs/",
        "meaningVi": "nổi tiếng, được nhiều người biết đến",
        "collocations": "world famous, famous for, become famous",
        "example": "Da Nang is famous for its breathtaking coastal beaches and delicious cuisine.",
        "exampleVi": "Đà Nẵng nổi tiếng với những bãi biển tuyệt đẹp và nền ẩm thực phong phú.",
        "optionsVi": [
          "nổi tiếng, được nhiều người biết đến",
          "vô danh ít ai biết",
          "tai tiếng xấu xa",
          "bị lãng quên"
        ]
      },
      {
        "id": "adj_008",
        "word": "healthy",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈhel.θi/",
        "meaningVi": "khỏe mạnh, lành mạnh tốt cho sức khỏe",
        "collocations": "healthy lifestyle, healthy diet, healthy competition",
        "example": "Maintaining a balanced healthy diet boosts productivity and long-term energy.",
        "exampleVi": "Duy trì chế độ ăn uống lành mạnh cân bằng giúp tăng năng suất và năng lượng lâu dài.",
        "optionsVi": [
          "khỏe mạnh, lành mạnh tốt cho sức khỏe",
          "độc hại có hại",
          "ốm yếu bệnh tật",
          "suy dinh dưỡng"
        ]
      },
      {
        "id": "adj_009",
        "word": "important",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ɪmˈpɔː.tənt/",
        "meaningVi": "quan trọng, mang tính cốt yếu",
        "collocations": "play an important role, critically important, important milestone",
        "example": "Patience and practice play an important role in mastering any language.",
        "exampleVi": "Kiên nhẫn và luyện tập đóng một vai trò quan trọng trong việc làm chủ bất kỳ ngôn ngữ nào.",
        "optionsVi": [
          "quan trọng, mang tính cốt yếu",
          "vụn vặt không đáng kể",
          "thứ yếu phụ trợ",
          "thừa thãi vô dụng"
        ]
      },
      {
        "id": "adj_010",
        "word": "necessary",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈnes.ə.ser.i/",
        "meaningVi": "cần thiết, không thể thiếu",
        "collocations": "absolutely necessary, necessary steps, if necessary",
        "example": "A passport is strictly necessary when traveling outside your home country.",
        "exampleVi": "Hộ chiếu là điều kiện hoàn toàn cần thiết khi đi du lịch ra nước ngoài.",
        "optionsVi": [
          "cần thiết, không thể thiếu",
          "không cần thiết tùy chọn",
          "thừa thãi lãng phí",
          "bị cấm mang theo"
        ]
      },
      {
        "id": "adj_011",
        "word": "popular",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈpɒp.jə.lər/",
        "meaningVi": "phổ biến, được ưa chuộng rộng rãi",
        "collocations": "widely popular, popular choice, increasingly popular",
        "example": "Podcasts have become an increasingly popular way to learn on the go.",
        "exampleVi": "Podcast đã trở thành một cách học tập ngày càng phổ biến khi đang di chuyển.",
        "optionsVi": [
          "phổ biến, được ưa chuộng rộng rãi",
          "bị xa lánh ghẻ lạnh",
          "lỗi thời không ai dùng",
          "kén người sử dụng"
        ]
      },
      {
        "id": "adj_012",
        "word": "possible",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈpɒs.ə.bəl/",
        "meaningVi": "có thể thực hiện được, khả thi",
        "collocations": "as soon as possible, make it possible, every possible effort",
        "example": "Cloud computing makes it possible to collaborate with international teams in real time.",
        "exampleVi": "Điện toán đám mây giúp việc cộng tác với các đội ngũ quốc tế theo thời gian thực trở nên khả thi.",
        "optionsVi": [
          "có thể thực hiện được, khả thi",
          "hoàn toàn bất khả thi",
          "không tưởng viển vông",
          "vô vọng bế tắc"
        ]
      },
      {
        "id": "adj_013",
        "word": "similar",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈsɪm.ɪ.lər/",
        "meaningVi": "tương tự, có nét giống nhau",
        "collocations": "similar to, strikingly similar, similar background",
        "example": "Both companies share a very similar vision regarding customer data privacy.",
        "exampleVi": "Cả hai công ty đều chia sẻ một tầm nhìn rất tương đồng về bảo mật dữ liệu khách hàng.",
        "optionsVi": [
          "tương tự, có nét giống nhau",
          "khác biệt hoàn toàn",
          "đối lập trái ngược",
          "xa lạ dị biệt"
        ]
      },
      {
        "id": "adj_014",
        "word": "successful",
        "level": "A2",
        "type": "adjective",
        "ipa": "/səkˈses.fəl/",
        "meaningVi": "thành công, đạt kết quả mong đợi",
        "collocations": "highly successful, successful career, successful launch",
        "example": "The marketing team celebrated the highly successful launch of the new product.",
        "exampleVi": "Đội ngũ tiếp thị đã ăn mừng sự ra mắt hết sức thành công của sản phẩm mới.",
        "optionsVi": [
          "thành công, đạt kết quả mong đợi",
          "thất bại cay đắng",
          "đổ vỡ giữa chừng",
          "kém hiệu quả"
        ]
      },
      {
        "id": "adj_015",
        "word": "useful",
        "level": "A2",
        "type": "adjective",
        "ipa": "/ˈjuːs.fəl/",
        "meaningVi": "hữu ích, có giá trị sử dụng cao",
        "collocations": "useful tool, extremely useful, useful advice",
        "example": "This English flashcard app is an extremely useful tool for busy professionals.",
        "exampleVi": "Ứng dụng flashcard tiếng Anh này là một công cụ cực kỳ hữu ích cho người đi làm bận rộn.",
        "optionsVi": [
          "hữu ích, có giá trị sử dụng cao",
          "vô dụng vô bổ",
          "gây phiền toái",
          "lãng phí bộ nhớ"
        ]
      },
      {
        "id": "adj_016",
        "word": "accurate",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈæk.jə.rət/",
        "meaningVi": "chính xác, chuẩn xác từng chi tiết",
        "collocations": "accurate information, highly accurate, accurate forecast",
        "example": "Weather forecasts have become remarkably accurate thanks to satellite data.",
        "exampleVi": "Dự báo thời tiết đã trở nên cực kỳ chính xác nhờ dữ liệu vệ tinh.",
        "optionsVi": [
          "chính xác, chuẩn xác từng chi tiết",
          "sai lệch mơ hồ",
          "ước chừng đại khái",
          "sai sót trầm trọng"
        ]
      },
      {
        "id": "adj_017",
        "word": "adequate",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈæd.ə.kwət/",
        "meaningVi": "đầy đủ, thỏa đáng, vừa đủ dùng",
        "collocations": "adequate resources, adequate preparation, fully adequate",
        "example": "Ensure you give yourself adequate time to review your presentation slides.",
        "exampleVi": "Hãy đảm bảo bạn dành cho mình đủ thời gian thỏa đáng để xem lại các slide thuyết trình.",
        "optionsVi": [
          "đầy đủ, thỏa đáng, vừa đủ dùng",
          "thiếu thốn trầm trọng",
          "không đủ tiêu chuẩn",
          "quá tải nghẽn mạng"
        ]
      },
      {
        "id": "adj_018",
        "word": "anxious",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈæŋk.ʃəs/",
        "meaningVi": "lo lắng, bồn chồn sốt ruột",
        "collocations": "feel anxious, anxious about, anxious to please",
        "example": "Many candidates feel anxious before taking an important job interview.",
        "exampleVi": "Nhiều ứng viên cảm thấy lo lắng bồn chồn trước khi bước vào buổi phỏng vấn quan trọng.",
        "optionsVi": [
          "lo lắng, bồn chồn sốt ruột",
          "bình thản tự tin",
          "thờ ơ không quan tâm",
          "hồ hởi phấn khởi"
        ]
      },
      {
        "id": "adj_019",
        "word": "appropriate",
        "level": "B1",
        "type": "adjective",
        "ipa": "/əˈprəʊ.pri.ət/",
        "meaningVi": "phù hợp, thích đáng trong hoàn cảnh",
        "collocations": "appropriate behavior, appropriate time, deemed appropriate",
        "example": "Wearing formal business attire is deemed appropriate for court hearings.",
        "exampleVi": "Mặc trang phục công sở trang trọng được coi là phù hợp cho các phiên tòa.",
        "optionsVi": [
          "phù hợp, thích đáng trong hoàn cảnh",
          "lệch lạc khiếm nhã",
          "lố lăng không hợp",
          "bị cấm đoán"
        ]
      },
      {
        "id": "adj_020",
        "word": "attractive",
        "level": "B1",
        "type": "adjective",
        "ipa": "/əˈtræk.tɪv/",
        "meaningVi": "hấp dẫn, lôi cuốn, có sức hút",
        "collocations": "attractive offer, highly attractive, attractive design",
        "example": "The company offered an attractive package including stock options and bonuses.",
        "exampleVi": "Công ty đã đưa ra gói đãi ngộ hấp dẫn bao gồm quyền mua cổ phiếu và tiền thưởng.",
        "optionsVi": [
          "hấp dẫn, lôi cuốn, có sức hút",
          "nhàm chán tệ hại",
          "kém cỏi không ai nhận",
          "đầy rẫy rủi ro"
        ]
      },
      {
        "id": "adj_021",
        "word": "automatic",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˌɔː.təˈmæt.ɪk/",
        "meaningVi": "tự động hóa, không cần can thiệp",
        "collocations": "automatic backup, automatic response, fully automatic",
        "example": "Enabling automatic cloud backups ensures your study data is never lost.",
        "exampleVi": "Bật sao lưu đám mây tự động đảm bảo dữ liệu học tập của bạn không bao giờ bị mất.",
        "optionsVi": [
          "tự động hóa, không cần can thiệp",
          "thủ công bằng tay",
          "phức tạp chậm chạp",
          "dễ bị lỗi người dùng"
        ]
      },
      {
        "id": "adj_022",
        "word": "aware",
        "level": "B1",
        "type": "adjective",
        "ipa": "/əˈweər/",
        "meaningVi": "có nhận thức, ý thức rõ về điều gì",
        "collocations": "well aware of, raise awareness, become aware",
        "example": "Software developers must be acutely aware of cybersecurity vulnerabilities.",
        "exampleVi": "Các kỹ sư phần mềm phải ý thức sâu sắc về các lỗ hổng an ninh mạng.",
        "optionsVi": [
          "có nhận thức, ý thức rõ về điều gì",
          "mù mờ không biết gì",
          "thờ ơ vô cảm",
          "lảng tránh sự thật"
        ]
      },
      {
        "id": "adj_023",
        "word": "beneficial",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˌben.ɪˈfɪʃ.əl/",
        "meaningVi": "có lợi, mang lại kết quả tốt",
        "collocations": "mutually beneficial, highly beneficial, beneficial effect",
        "example": "Both organizations signed a mutually beneficial long-term partnership agreement.",
        "exampleVi": "Cả hai tổ chức đã ký kết thỏa thuận hợp tác lâu dài đôi bên cùng có lợi.",
        "optionsVi": [
          "có lợi, mang lại kết quả tốt",
          "gây thiệt hại nặng nề",
          "độc hại nguy hiểm",
          "vô ích lãng phí"
        ]
      },
      {
        "id": "adj_024",
        "word": "capable",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈkeɪ.pə.bəl/",
        "meaningVi": "có năng lực, đủ khả năng gánh vác",
        "collocations": "capable of doing, highly capable, perfectly capable",
        "example": "She is a highly capable engineer who can resolve intricate system bugs.",
        "exampleVi": "Cô ấy là một kỹ sư hết sức có năng lực, có thể xử lý các lỗi hệ thống phức tạp.",
        "optionsVi": [
          "có năng lực, đủ khả năng gánh vác",
          "bất tài thiếu kỹ năng",
          "yếu ớt không tự chủ",
          "vụng về lúng túng"
        ]
      },
      {
        "id": "adj_025",
        "word": "competitive",
        "level": "B1",
        "type": "adjective",
        "ipa": "/kəmˈpet.ɪ.tɪv/",
        "meaningVi": "có tính cạnh tranh, giá tốt",
        "collocations": "competitive advantage, competitive salary, highly competitive",
        "example": "We offer top-tier products at very competitive prices in the region.",
        "exampleVi": "Chúng tôi cung cấp các sản phẩm hàng đầu với mức giá rất cạnh tranh trong khu vực.",
        "optionsVi": [
          "có tính cạnh tranh, giá tốt",
          "đắt đỏ vô lý",
          "thua kém đối thủ",
          "độc quyền bắt chẹt"
        ]
      },
      {
        "id": "adj_026",
        "word": "confident",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈkɒn.fɪ.dənt/",
        "meaningVi": "tự tin, chắc chắn vào năng lực",
        "collocations": "feel confident, confident about, quietly confident",
        "example": "Consistent daily review makes students feel confident walking into the exam room.",
        "exampleVi": "Ôn tập đều đặn mỗi ngày giúp học viên cảm thấy tự tin khi bước vào phòng thi.",
        "optionsVi": [
          "tự tin, chắc chắn vào năng lực",
          "nhút nhát sợ sệt",
          "hoang mang lo sợ",
          "tự ti mặc cảm"
        ]
      },
      {
        "id": "adj_027",
        "word": "conscious",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈkɒn.ʃəs/",
        "meaningVi": "có ý thức tỉnh táo, chú tâm",
        "collocations": "cost conscious, environmentally conscious, make a conscious effort",
        "example": "Modern consumers are becoming far more environmentally conscious with their purchases.",
        "exampleVi": "Người tiêu dùng hiện đại đang trở nên có ý thức bảo vệ môi trường hơn nhiều trong mua sắm.",
        "optionsVi": [
          "có ý thức tỉnh táo, chú tâm",
          "mất kiểm soát lú lẫn",
          "vô tâm cẩu thả",
          "mê muội thiếu hiểu biết"
        ]
      },
      {
        "id": "adj_028",
        "word": "consistent",
        "level": "B1",
        "type": "adjective",
        "ipa": "/kənˈsɪs.tənt/",
        "meaningVi": "nhất quán, kiên định không đổi",
        "collocations": "consistent quality, consistent effort, highly consistent",
        "example": "Consistent daily study delivers vastly superior results compared to erratic cramming.",
        "exampleVi": "Học tập kiên định mỗi ngày mang lại kết quả vượt trội hơn hẳn so với việc học dồn thất thường.",
        "optionsVi": [
          "nhất quán, kiên định không đổi",
          "thất thường nay đây mai đó",
          "mâu thuẫn tiền hậu bất nhất",
          "chập chờn ngắt quãng"
        ]
      },
      {
        "id": "adj_029",
        "word": "creative",
        "level": "B1",
        "type": "adjective",
        "ipa": "/kriˈeɪ.tɪv/",
        "meaningVi": "sáng tạo, giàu tính đổi mới",
        "collocations": "creative thinking, creative solution, highly creative",
        "example": "The marketing team devised a creative solution that doubled organic user signups.",
        "exampleVi": "Đội ngũ tiếp thị đã nghĩ ra một giải pháp sáng tạo giúp tăng gấp đôi lượng đăng ký tự nhiên.",
        "optionsVi": [
          "sáng tạo, giàu tính đổi mới",
          "rập khuôn sáo rỗng",
          "nhàm chán lối mòn",
          "sao chép nguyên văn"
        ]
      },
      {
        "id": "adj_030",
        "word": "critical",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈkrɪt.ɪ.kəl/",
        "meaningVi": "then chốt, mang tính phê phán phản biện",
        "collocations": "critical thinking, play a critical role, critical factor",
        "example": "Developing critical thinking skills enables learners to evaluate facts objectively.",
        "exampleVi": "Phát triển kỹ năng tư duy phản biện cho phép người học đánh giá sự thật một cách khách quan.",
        "optionsVi": [
          "then chốt, mang tính phê phán phản biện",
          "tầm thường không quan trọng",
          "tin theo mù quáng",
          "hời hợt nông cạn"
        ]
      },
      {
        "id": "adj_031",
        "word": "curious",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈkjʊə.ri.əs/",
        "meaningVi": "tò mò ham học hỏi, hiếu kỳ",
        "collocations": "curious mind, naturally curious, curious about",
        "example": "Curious learners explore unfamiliar topics without fear of making mistakes.",
        "exampleVi": "Những người học ham hiểu biết luôn khám phá các chủ đề mới lạ mà không sợ mắc sai lầm.",
        "optionsVi": [
          "tò mò ham học hỏi, hiếu kỳ",
          "thờ ơ vô cảm",
          "bảo thủ chống đối",
          "tự mãn không cần học"
        ]
      },
      {
        "id": "adj_032",
        "word": "decisive",
        "level": "B1",
        "type": "adjective",
        "ipa": "/dɪˈsaɪ.sɪv/",
        "meaningVi": "quyết đoán, mang tính dứt khoát định đoạt",
        "collocations": "decisive action, decisive factor, decisive role",
        "example": "The captain's decisive action during the storm saved the entire ship.",
        "exampleVi": "Hành động quyết đoán của thuyền trưởng trong cơn bão đã cứu sống cả con tàu.",
        "optionsVi": [
          "quyết đoán, mang tính dứt khoát định đoạt",
          "chần chừ do dự",
          "lúng túng nửa vời",
          "nhu nhược yếu đuối"
        ]
      },
      {
        "id": "adj_033",
        "word": "efficient",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ɪˈfɪʃ.ənt/",
        "meaningVi": "hiệu quả cao, tiết kiệm thời gian công sức",
        "collocations": "energy efficient, highly efficient, efficient workflow",
        "example": "Automating routine tasks makes the whole workflow far more efficient.",
        "exampleVi": "Tự động hóa các tác vụ lặp lại làm cho toàn bộ quy trình làm việc hiệu quả hơn rất nhiều.",
        "optionsVi": [
          "hiệu quả cao, tiết kiệm thời gian công sức",
          "lãng phí rườm rà",
          "chậm chạp trì trệ",
          "tốn kém nhân lực"
        ]
      },
      {
        "id": "adj_034",
        "word": "emotional",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ɪˈməʊ.ʃən.əl/",
        "meaningVi": "thuộc về cảm xúc, dễ xúc động",
        "collocations": "emotional intelligence, emotional support, emotional response",
        "example": "High emotional intelligence helps managers resolve workplace misunderstandings diplomatically.",
        "exampleVi": "Trí tuệ cảm xúc cao giúp người quản lý tháo gỡ những hiểu lầm nơi công sở một cách khéo léo.",
        "optionsVi": [
          "thuộc về cảm xúc, dễ xúc động",
          "lạnh lùng vô cảm",
          "lý trí khô khan",
          "máy móc rập khuôn"
        ]
      },
      {
        "id": "adj_035",
        "word": "enthusiastic",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ɪnˌθjuː.ziˈæs.tɪk/",
        "meaningVi": "nhiệt huyết, hào hứng đón nhận",
        "collocations": "enthusiastic about, highly enthusiastic, enthusiastic reception",
        "example": "The product received an enthusiastic reception from early beta testers.",
        "exampleVi": "Sản phẩm đã nhận được sự đón nhận hết sức hào hứng từ những người dùng thử nghiệm ban đầu.",
        "optionsVi": [
          "nhiệt huyết, hào hứng đón nhận",
          "thờ ơ lãnh đạm",
          "chê bai gay gắt",
          "ngại ngùng tránh né"
        ]
      },
      {
        "id": "adj_036",
        "word": "essential",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ɪˈsen.ʃəl/",
        "meaningVi": "thiết yếu, cốt lõi không thể thiếu",
        "collocations": "essential skills, absolutely essential, play an essential role",
        "example": "Active recall is essential for transferring new vocabulary into long-term memory.",
        "exampleVi": "Chủ động gợi nhớ (Active recall) là yếu tố thiết yếu để đưa từ mới vào trí nhớ dài hạn.",
        "optionsVi": [
          "thiết yếu, cốt lõi không thể thiếu",
          "không cần thiết phụ thuộc",
          "thừa thãi bỏ đi",
          "tùy ý không bắt buộc"
        ]
      },
      {
        "id": "adj_037",
        "word": "flexible",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈflek.sə.bəl/",
        "meaningVi": "linh hoạt, dễ uốn nắn thích ứng",
        "collocations": "flexible working hours, flexible approach, highly flexible",
        "example": "A flexible approach allows developers to pivot quickly when requirements evolve.",
        "exampleVi": "Cách tiếp cận linh hoạt cho phép lập trình viên xoay chuyển nhanh khi yêu cầu thay đổi.",
        "optionsVi": [
          "linh hoạt, dễ uốn nắn thích ứng",
          "cứng nhắc bảo thủ",
          "đóng khung cố định",
          "khó thay đổi"
        ]
      },
      {
        "id": "adj_038",
        "word": "frequent",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈfriː.kwənt/",
        "meaningVi": "thường xuyên, hay lặp lại",
        "collocations": "frequent updates, frequent traveler, frequent contact",
        "example": "Frequent small review sessions yield far better retention than rare cramming marathons.",
        "exampleVi": "Các phiên ôn tập ngắn nhưng thường xuyên mang lại khả năng ghi nhớ tốt hơn nhiều so với việc cày cuốc thỉnh thoảng.",
        "optionsVi": [
          "thường xuyên, hay lặp lại",
          "hiếm hoi ít khi",
          "bất thường ngẫu nhiên",
          "chỉ xảy ra một lần"
        ]
      },
      {
        "id": "adj_039",
        "word": "generous",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈdʒen.ər.əs/",
        "meaningVi": "hào phóng, rộng lượng cởi mở",
        "collocations": "generous donation, generous offer, generous support",
        "example": "The foundation made a generous donation to build computer labs for rural schools.",
        "exampleVi": "Tổ chức này đã quyên góp một khoản tài trợ hào phóng để xây phòng máy tính cho các trường vùng sâu.",
        "optionsVi": [
          "hào phóng, rộng lượng cởi mở",
          "keo kiệt bủn xỉn",
          "hẹp hòi ích kỷ",
          "tính toán chi li"
        ]
      },
      {
        "id": "adj_040",
        "word": "genuine",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈdʒen.ju.ɪn/",
        "meaningVi": "chân thật, chính hãng không giả mạo",
        "collocations": "genuine leather, genuine interest, genuine concern",
        "example": "She showed a genuine interest in understanding the needs of her students.",
        "exampleVi": "Cô ấy thể hiện một sự quan tâm chân thật trong việc thấu hiểu nhu cầu của học trò.",
        "optionsVi": [
          "chân thật, chính hãng không giả mạo",
          "hàng nhái giả tạo",
          "giả dối đóng kịch",
          "lừa đảo gian xảo"
        ]
      },
      {
        "id": "adj_041",
        "word": "grateful",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈɡreɪt.fəl/",
        "meaningVi": "biết ơn, cảm kích sâu sắc",
        "collocations": "deeply grateful, grateful for, forever grateful",
        "example": "I am deeply grateful for the unwavering guidance my mentors provided.",
        "exampleVi": "Tôi vô cùng biết ơn sự hướng dẫn tận tình không ngừng nghỉ của các cố vấn.",
        "optionsVi": [
          "biết ơn, cảm kích sâu sắc",
          "vong ân bội nghĩa",
          "vô ơn bạc bẽo",
          "thờ ơ không nhớ ơn"
        ]
      },
      {
        "id": "adj_042",
        "word": "hesitant",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈhez.ɪ.tənt/",
        "meaningVi": "do dự, ngập ngừng phân vân",
        "collocations": "hesitant to speak, feel hesitant, hesitant response",
        "example": "Do not feel hesitant to ask questions whenever a grammar point is unclear.",
        "exampleVi": "Đừng ngập ngừng đặt câu hỏi bất cứ khi nào một điểm ngữ pháp chưa được rõ ràng.",
        "optionsVi": [
          "do dự, ngập ngừng phân vân",
          "dứt khoát nhanh nhẹn",
          "táo bạo liều lĩnh",
          "tự tin không đắn đo"
        ]
      },
      {
        "id": "adj_043",
        "word": "impressive",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ɪmˈpres.ɪv/",
        "meaningVi": "ấn tượng sâu sắc, đáng nể phục",
        "collocations": "impressive results, highly impressive, impressive record",
        "example": "The startup demonstrated an impressive growth rate of two hundred percent year-over-year.",
        "exampleVi": "Công ty khởi nghiệp đã chứng minh một tốc độ tăng trưởng đáng nể hai trăm phần trăm so với cùng kỳ.",
        "optionsVi": [
          "ấn tượng sâu sắc, đáng nể phục",
          "mờ nhạt tầm thường",
          "đáng thất vọng",
          "kém cỏi tệ hại"
        ]
      },
      {
        "id": "adj_044",
        "word": "independent",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˌɪn.dɪˈpen.dənt/",
        "meaningVi": "độc lập, tự chủ tự lực",
        "collocations": "independent thinking, independent study, financially independent",
        "example": "Self-paced applications cultivate independent study habits in adult learners.",
        "exampleVi": "Các ứng dụng tự học theo nhịp độ cá nhân nuôi dưỡng thói quen tự học độc lập ở người lớn.",
        "optionsVi": [
          "độc lập, tự chủ tự lực",
          "lệ thuộc phụ thuộc",
          "bị chi phối điều khiển",
          "dựa dẫm ỷ lại"
        ]
      },
      {
        "id": "adj_045",
        "word": "inevitable",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ɪnˈev.ɪ.tə.bəl/",
        "meaningVi": "tất yếu, không thể tránh khỏi",
        "collocations": "inevitable outcome, almost inevitable, accept the inevitable",
        "example": "Occasional mistakes are an inevitable and valuable part of learning any new skill.",
        "exampleVi": "Những sai sót thỉnh thoảng là phần tất yếu và có giá trị trong việc học bất kỳ kỹ năng mới nào.",
        "optionsVi": [
          "tất yếu, không thể tránh khỏi",
          "hoàn toàn ngăn chặn được",
          "có thể né tránh",
          "tình cờ ngẫu nhiên"
        ]
      },
      {
        "id": "adj_046",
        "word": "logical",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈlɒdʒ.ɪ.kəl/",
        "meaningVi": "hợp logic, có lý lẽ chặt chẽ",
        "collocations": "logical conclusion, logical reasoning, logical step",
        "example": "Presenting arguments in a logical order makes your essay vastly more persuasive.",
        "exampleVi": "Trình bày luận điểm theo một thứ tự logic giúp bài luận của bạn thuyết phục hơn nhiều.",
        "optionsVi": [
          "hợp logic, có lý lẽ chặt chẽ",
          "vô lý phi lý",
          "hỗn loạn rời rạc",
          "cảm tính bốc đồng"
        ]
      },
      {
        "id": "adj_047",
        "word": "loyal",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈlɔɪ.əl/",
        "meaningVi": "trung thành, gắn bó dài lâu",
        "collocations": "loyal customer, remain loyal, fiercely loyal",
        "example": "Rewarding loyal customers with exclusive perks strengthens brand retention.",
        "exampleVi": "Tặng thưởng cho những khách hàng trung thành bằng các đặc quyền độc quyền giúp củng cố tỷ lệ gắn bó.",
        "optionsVi": [
          "trung thành, gắn bó dài lâu",
          "phản bội tráo trở",
          "thay lòng đổi dạ",
          "rời bỏ hàng ngũ"
        ]
      },
      {
        "id": "adj_048",
        "word": "memorable",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈmem.ər.ə.bəl/",
        "meaningVi": "đáng nhớ, để lại ấn tượng khó phai",
        "collocations": "memorable experience, highly memorable, memorable occasion",
        "example": "Studying abroad provided her with many unforgettable and memorable experiences.",
        "exampleVi": "Du học đã mang lại cho cô ấy nhiều trải nghiệm đáng nhớ và không thể nào quên.",
        "optionsVi": [
          "đáng nhớ, để lại ấn tượng khó phai",
          "nhạt nhẽo dễ quên",
          "tầm thường trôi tuột",
          "đáng quên lãng"
        ]
      },
      {
        "id": "adj_049",
        "word": "negative",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈneɡ.ə.tɪv/",
        "meaningVi": "tiêu cực, có chiều hướng xấu",
        "collocations": "negative impact, negative feedback, negative attitude",
        "example": "Chronic stress has a demonstrably negative impact on physical health.",
        "exampleVi": "Căng thẳng kéo dài gây ra tác động tiêu cực rõ ràng đối với sức khỏe thể chất.",
        "optionsVi": [
          "tiêu cực, có chiều hướng xấu",
          "tích cực lạc quan",
          "thuận lợi tốt đẹp",
          "hữu ích phát triển"
        ]
      },
      {
        "id": "adj_050",
        "word": "objective",
        "level": "B1",
        "type": "adjective",
        "ipa": "/əbˈdʒek.tɪv/",
        "meaningVi": "khách quan, dựa trên dữ liệu không thiên vị",
        "collocations": "objective assessment, remain objective, objective criteria",
        "example": "Judges must set aside personal bias and remain completely objective.",
        "exampleVi": "Các thẩm phán phải gạt bỏ định kiến cá nhân và giữ thái độ hoàn toàn khách quan.",
        "optionsVi": [
          "khách quan, dựa trên dữ liệu không thiên vị",
          "chủ quan thiên vị",
          "đầy định kiến cá nhân",
          "bất công cảm tính"
        ]
      },
      {
        "id": "adj_051",
        "word": "patient",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈpeɪ.ʃənt/",
        "meaningVi": "kiên nhẫn, nhẫn nại bền bỉ",
        "collocations": "be patient with, infinitely patient, patient teacher",
        "example": "Learning a new language takes time; be patient with yourself during the journey.",
        "exampleVi": "Học một ngôn ngữ mới cần có thời gian; hãy kiên nhẫn với chính mình trong suốt chặng đường.",
        "optionsVi": [
          "kiên nhẫn, nhẫn nại bền bỉ",
          "nóng nảy sốt ruột",
          "vội vàng hấp tấp",
          "dễ nản lòng buông xuôi"
        ]
      },
      {
        "id": "adj_052",
        "word": "permanent",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈpɜː.mə.nənt/",
        "meaningVi": "vĩnh viễn, lâu dài cố định",
        "collocations": "permanent position, permanent resident, permanent damage",
        "example": "After six months of probation, he was offered a permanent full-time position.",
        "exampleVi": "Sau sáu tháng thử việc, anh ấy đã được trao hợp đồng chính thức lâu dài.",
        "optionsVi": [
          "vĩnh viễn, lâu dài cố định",
          "tạm thời ngắn hạn",
          "thời vụ chớp nhoáng",
          "bấp bênh không ổn định"
        ]
      },
      {
        "id": "adj_053",
        "word": "practical",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈpræk.tɪ.kəl/",
        "meaningVi": "thực tế, có tính ứng dụng cao",
        "collocations": "practical experience, practical advice, practical solution",
        "example": "The workshop focused on delivering practical tips that attendees could use immediately.",
        "exampleVi": "Buổi hội thảo tập trung vào việc mang lại những lời khuyên thực tế mà người tham dự có thể dùng ngay.",
        "optionsVi": [
          "thực tế, có tính ứng dụng cao",
          "lý thuyết viển vông",
          "xa rời thực tế",
          "không dùng được"
        ]
      },
      {
        "id": "adj_054",
        "word": "precise",
        "level": "B1",
        "type": "adjective",
        "ipa": "/prɪˈsaɪs/",
        "meaningVi": "chính xác đến từng chi tiết, tỉ mỉ",
        "collocations": "precise measurements, at the precise moment, precise instructions",
        "example": "The lab technician followed the precise experimental instructions diligently.",
        "exampleVi": "Kỹ thuật viên phòng lab đã tuân thủ tỉ mỉ từng chỉ dẫn thí nghiệm chính xác.",
        "optionsVi": [
          "chính xác đến từng chi tiết, tỉ mỉ",
          "ước lượng áng chừng",
          "sai số lớn",
          "cẩu thả sơ sài"
        ]
      },
      {
        "id": "adj_055",
        "word": "productive",
        "level": "B1",
        "type": "adjective",
        "ipa": "/prəˈdʌk.tɪv/",
        "meaningVi": "năng suất cao, sinh lợi hiệu quả",
        "collocations": "productive meeting, highly productive, productive day",
        "example": "Eliminating digital distractions led to an exceptionally productive working session.",
        "exampleVi": "Loại bỏ những yếu tố xao nhãng kỹ thuật số đã mang lại một buổi làm việc cực kỳ năng suất.",
        "optionsVi": [
          "năng suất cao, sinh lợi hiệu quả",
          "lãng phí thời gian",
          "đình trệ không ra việc",
          "vô bổ không kết quả"
        ]
      },
      {
        "id": "adj_056",
        "word": "reasonable",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈriː.zən.ə.bəl/",
        "meaningVi": "hợp lý, vừa phải phải chăng",
        "collocations": "reasonable price, reasonable doubt, perfectly reasonable",
        "example": "The restaurant serves delicious food at very reasonable prices.",
        "exampleVi": "Nhà hàng phục vụ đồ ăn ngon miệng với mức giá rất hợp lý phải chăng.",
        "optionsVi": [
          "hợp lý, vừa phải phải chăng",
          "vô lý đắt đỏ",
          "cắt cổ vô căn cứ",
          "bất công quá đáng"
        ]
      },
      {
        "id": "adj_057",
        "word": "reliable",
        "level": "B1",
        "type": "adjective",
        "ipa": "/rɪˈlaɪ.ə.bəl/",
        "meaningVi": "đáng tin cậy, vận hành ổn định",
        "collocations": "reliable source, highly reliable, reliable service",
        "example": "Always cross-check news against multiple reliable journalistic sources.",
        "exampleVi": "Hãy luôn đối chiếu tin tức với nhiều nguồn báo chí đáng tin cậy.",
        "optionsVi": [
          "đáng tin cậy, vận hành ổn định",
          "không đáng tin",
          "chập chờn hay hỏng",
          "đầy rẫy hoài nghi"
        ]
      },
      {
        "id": "adj_058",
        "word": "remarkable",
        "level": "B1",
        "type": "adjective",
        "ipa": "/rɪˈmɑː.kə.bəl/",
        "meaningVi": "đáng chú ý, xuất sắc phi thường",
        "collocations": "remarkable achievement, truly remarkable, remarkable progress",
        "example": "The team achieved remarkable progress within just three sprints.",
        "exampleVi": "Toàn đội đã đạt được sự tiến bộ xuất sắc đáng nể chỉ trong vòng ba đợt sprint.",
        "optionsVi": [
          "đáng chú ý, xuất sắc phi thường",
          "tầm thường mờ nhạt",
          "không có gì đặc sắc",
          "tệ hại đáng thất vọng"
        ]
      },
      {
        "id": "adj_059",
        "word": "responsible",
        "level": "B1",
        "type": "adjective",
        "ipa": "/rɪˈspɒn.sə.bəl/",
        "meaningVi": "có tinh thần trách nhiệm, chịu trách nhiệm",
        "collocations": "socially responsible, hold responsible, responsible behavior",
        "example": "A mature professional acts as a responsible team player at all times.",
        "exampleVi": "Một người đi làm chững chạc luôn hành xử như một thành viên nhóm đầy trách nhiệm.",
        "optionsVi": [
          "có tinh thần trách nhiệm, chịu trách nhiệm",
          "vô trách nhiệm chối bỏ",
          "đùn đẩy đổ lỗi",
          "bỏ mặc nhiệm vụ"
        ]
      },
      {
        "id": "adj_060",
        "word": "sensitive",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈsen.sɪ.tɪv/",
        "meaningVi": "nhạy cảm, bảo mật nhạy bén",
        "collocations": "sensitive data, highly sensitive, sensitive issue",
        "example": "Handle all customer personal and financial data with extreme care.",
        "exampleVi": "Hãy xử lý tất cả dữ liệu cá nhân và tài chính nhạy cảm của khách hàng với sự cẩn trọng tối đa.",
        "optionsVi": [
          "nhạy cảm, bảo mật nhạy bén",
          "công khai đại trà",
          "vô cảm trơ lỳ",
          "không cần bảo vệ"
        ]
      },
      {
        "id": "adj_061",
        "word": "significant",
        "level": "B1",
        "type": "adjective",
        "ipa": "/sɪɡˈnɪf.ɪ.kənt/",
        "meaningVi": "có ý nghĩa quan trọng, đáng kể",
        "collocations": "significant difference, significant increase, statistically significant",
        "example": "The new feature drove a significant increase in daily active user engagements.",
        "exampleVi": "Tính năng mới đã tạo ra một mức tăng đáng kể trong sự tương tác của người dùng hàng ngày.",
        "optionsVi": [
          "có ý nghĩa quan trọng, đáng kể",
          "nhỏ nhặt không đáng kể",
          "vô nghĩa không ai quan tâm",
          "hầu như không thay đổi"
        ]
      },
      {
        "id": "adj_062",
        "word": "straightforward",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˌstreɪtˈfɔː.wəd/",
        "meaningVi": "thẳng thắn, đơn giản dễ hiểu",
        "collocations": "straightforward process, relatively straightforward, straightforward answer",
        "example": "The software installation procedure is straightforward and takes less than a minute.",
        "exampleVi": "Quy trình cài đặt phần mềm rất đơn giản dễ hiểu và chỉ mất chưa đầy một phút.",
        "optionsVi": [
          "thẳng thắn, đơn giản dễ hiểu",
          "quanh co phức tạp",
          "rối rắm khó hiểu",
          "đánh đố người dùng"
        ]
      },
      {
        "id": "adj_063",
        "word": "sufficient",
        "level": "B1",
        "type": "adjective",
        "ipa": "/səˈfɪʃ.ənt/",
        "meaningVi": "vừa đủ, thỏa đáng nhu cầu",
        "collocations": "sufficient time, sufficient evidence, more than sufficient",
        "example": "Two weeks is sufficient time to prepare thoroughly for the presentation.",
        "exampleVi": "Hai tuần là khoảng thời gian vừa đủ để chuẩn bị thật kỹ lưỡng cho buổi thuyết trình.",
        "optionsVi": [
          "vừa đủ, thỏa đáng nhu cầu",
          "thiếu thốn thiếu hụt",
          "quá ít không đủ",
          "dư thừa lãng phí"
        ]
      },
      {
        "id": "adj_064",
        "word": "temporary",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈtem.pər.ər.i/",
        "meaningVi": "tạm thời, có tính thời vụ",
        "collocations": "temporary solution, temporary position, temporary setback",
        "example": "This workaround is only a temporary solution until the patch is deployed.",
        "exampleVi": "Phương án khắc phục này chỉ là giải pháp tạm thời cho đến khi bản vá được triển khai.",
        "optionsVi": [
          "tạm thời, có tính thời vụ",
          "vĩnh viễn cố định",
          "lâu dài bền bỉ",
          "bất biến không đổi"
        ]
      },
      {
        "id": "adj_065",
        "word": "valuable",
        "level": "B1",
        "type": "adjective",
        "ipa": "/ˈvæl.jə.bəl/",
        "meaningVi": "quý giá, mang lại giá trị cao",
        "collocations": "valuable lesson, valuable insight, valuable contribution",
        "example": "Every mistake you make and reflect upon is a valuable lesson for growth.",
        "exampleVi": "Mỗi lỗi lầm bạn mắc phải và đúc rút lại đều là một bài học quý giá cho sự trưởng thành.",
        "optionsVi": [
          "quý giá, mang lại giá trị cao",
          "vô giá trị rác rưởi",
          "vô bổ tầm thường",
          "không ai cần đến"
        ]
      },
      {
        "id": "adj_066",
        "word": "ambiguous",
        "level": "B2",
        "type": "adjective",
        "ipa": "/æmˈbɪɡ.ju.əs/",
        "meaningVi": "mơ hồ, đa nghĩa khó đoán",
        "collocations": "deliberately ambiguous, ambiguous wording, highly ambiguous",
        "example": "The contract clause was too ambiguous, leading to prolonged legal disputes.",
        "exampleVi": "Điều khoản hợp đồng quá mơ hồ, dẫn đến các tranh chấp pháp lý kéo dài.",
        "optionsVi": [
          "mơ hồ, đa nghĩa khó đoán",
          "rõ ràng rành mạch",
          "minh bạch dứt khoát",
          "hiển nhiên dễ hiểu"
        ]
      },
      {
        "id": "adj_067",
        "word": "authentic",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ɔːˈθen.tɪk/",
        "meaningVi": "đích thực, nguyên bản không lai tạp",
        "collocations": "authentic experience, authentic flavor, authentic leadership",
        "example": "Authentic leaders inspire genuine trust because their words match their daily actions.",
        "exampleVi": "Những nhà lãnh đạo chân chính tạo dựng được niềm tin thực thụ bởi lời nói luôn đi đôi với hành động hàng ngày.",
        "optionsVi": [
          "đích thực, nguyên bản không lai tạp",
          "hàng nhái sao chép",
          "giả tạo đóng kịch",
          "lai căng pha tạp"
        ]
      },
      {
        "id": "adj_068",
        "word": "coherent",
        "level": "B2",
        "type": "adjective",
        "ipa": "/kəʊˈhɪə.rənt/",
        "meaningVi": "mạch lạc, liên kết chặt chẽ logic",
        "collocations": "coherent argument, coherent strategy, highly coherent",
        "example": "The report presented a coherent and persuasive case for adopting clean energy.",
        "exampleVi": "Bản báo cáo đã đưa ra một luận điểm mạch lạc và đầy tính thuyết phục cho việc áp dụng năng lượng sạch.",
        "optionsVi": [
          "mạch lạc, liên kết chặt chẽ logic",
          "rời rạc lộn xộn",
          "mâu thuẫn đá nhau",
          "lan man không đầu đuôi"
        ]
      },
      {
        "id": "adj_069",
        "word": "comprehensive",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˌkɒm.prɪˈhen.sɪv/",
        "meaningVi": "toàn diện, bao quát mọi góc độ",
        "collocations": "comprehensive review, comprehensive guide, comprehensive insurance",
        "example": "The onboarding program offers a comprehensive guide to company tools and processes.",
        "exampleVi": "Chương trình hòa nhập cung cấp một tài liệu hướng dẫn toàn diện về các công cụ và quy trình của công ty.",
        "optionsVi": [
          "toàn diện, bao quát mọi góc độ",
          "chắp vá sơ sài",
          "phiến diện một chiều",
          "bỏ sót nhiều mảng"
        ]
      },
      {
        "id": "adj_070",
        "word": "compulsory",
        "level": "B2",
        "type": "adjective",
        "ipa": "/kəmˈpʌl.sər.i/",
        "meaningVi": "bắt buộc phải tuân thủ",
        "collocations": "compulsory education, compulsory attendance, compulsory military service",
        "example": "Wearing safety goggles is strictly compulsory in the chemical laboratory.",
        "exampleVi": "Đeo kính bảo hộ là quy định bắt buộc tuyệt đối trong phòng thí nghiệm hóa chất.",
        "optionsVi": [
          "bắt buộc phải tuân thủ",
          "tùy ý tự nguyện",
          "không bắt buộc",
          "khuyến khích không ép"
        ]
      },
      {
        "id": "adj_071",
        "word": "confidential",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˌkɒn.fɪˈden.ʃəl/",
        "meaningVi": "bảo mật, tuyệt mật nghiêm ngặt",
        "collocations": "strictly confidential, confidential information, confidential report",
        "example": "All customer transaction histories are treated as strictly confidential data.",
        "exampleVi": "Mọi lịch sử giao dịch của khách hàng đều được xử lý như dữ liệu tuyệt mật nghiêm ngặt.",
        "optionsVi": [
          "bảo mật, tuyệt mật nghiêm ngặt",
          "công khai đại chúng",
          "tiết lộ tự do",
          "phát tán rộng rãi"
        ]
      },
      {
        "id": "adj_072",
        "word": "consecutive",
        "level": "B2",
        "type": "adjective",
        "ipa": "/kənˈsek.jə.tɪv/",
        "meaningVi": "liên tiếp, không ngắt quãng",
        "collocations": "consecutive days, consecutive years, for three consecutive months",
        "example": "He maintained a streak of forty consecutive days of English vocabulary practice.",
        "exampleVi": "Anh ấy đã duy trì chuỗi bốn mươi ngày liên tiếp luyện tập từ vựng tiếng Anh.",
        "optionsVi": [
          "liên tiếp, không ngắt quãng",
          "ngắt quãng chắp vá",
          "thỉnh thoảng ngẫu nhiên",
          "rời rạc từng đợt"
        ]
      },
      {
        "id": "adj_073",
        "word": "considerable",
        "level": "B2",
        "type": "adjective",
        "ipa": "/kənˈsɪd.ər.ə.bəl/",
        "meaningVi": "đáng kể, to lớn có trọng lượng",
        "collocations": "considerable amount, considerable impact, considerable effort",
        "example": "The team invested a considerable amount of effort into optimizing mobile app performance.",
        "exampleVi": "Toàn đội đã đầu tư một lượng công sức đáng kể vào việc tối ưu hóa hiệu năng ứng dụng di động.",
        "optionsVi": [
          "đáng kể, to lớn có trọng lượng",
          "ít ỏi không đáng kể",
          "tầm thường vụn vặt",
          "nhỏ nhoi tượng trưng"
        ]
      },
      {
        "id": "adj_074",
        "word": "constructive",
        "level": "B2",
        "type": "adjective",
        "ipa": "/kənˈstrʌk.tɪv/",
        "meaningVi": "mang tính xây dựng tích cực",
        "collocations": "constructive feedback, constructive dialogue, constructive criticism",
        "example": "Providing constructive feedback helps your peers grow without feeling discouraged.",
        "exampleVi": "Đưa ra phản hồi mang tính xây dựng giúp đồng nghiệp tiến bộ mà không cảm thấy nản lòng.",
        "optionsVi": [
          "mang tính xây dựng tích cực",
          "phá hoại tiêu cực",
          "chỉ trích vùi dập",
          "công kích ác ý"
        ]
      },
      {
        "id": "adj_075",
        "word": "crucial",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈkruː.ʃəl/",
        "meaningVi": "tối quan trọng, mang tính quyết định",
        "collocations": "crucial role, crucial factor, of crucial importance",
        "example": "Securing initial funding was crucial for building the technical prototype.",
        "exampleVi": "Đảm bảo nguồn vốn ban đầu là điều tối quan trọng để xây dựng bản mẫu kỹ thuật.",
        "optionsVi": [
          "tối quan trọng, mang tính quyết định",
          "thứ yếu ngoài lề",
          "tầm thường không cần",
          "bỏ qua cũng được"
        ]
      },
      {
        "id": "adj_076",
        "word": "detrimental",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˌdet.rɪˈmen.təl/",
        "meaningVi": "gây hại, phương hại nghiêm trọng",
        "collocations": "detrimental effect, detrimental to health, highly detrimental",
        "example": "Excessive screen time before bed has a detrimental effect on sleep quality.",
        "exampleVi": "Dùng màn hình quá nhiều trước khi ngủ gây tác hại nghiêm trọng đến chất lượng giấc ngủ.",
        "optionsVi": [
          "gây hại, phương hại nghiêm trọng",
          "có lợi bổ ích",
          "nâng cao thể lực",
          "an toàn tuyệt đối"
        ]
      },
      {
        "id": "adj_077",
        "word": "distinctive",
        "level": "B2",
        "type": "adjective",
        "ipa": "/dɪˈstɪŋk.tɪv/",
        "meaningVi": "đặc sắc, dễ nhận diện riêng biệt",
        "collocations": "distinctive feature, distinctive style, distinctive brand identity",
        "example": "Minimalist design is the most distinctive feature of the new product line.",
        "exampleVi": "Thiết kế tối giản là nét đặc sắc dễ nhận diện nhất của dòng sản phẩm mới.",
        "optionsVi": [
          "đặc sắc, dễ nhận diện riêng biệt",
          "đại trà nhạt nhòa",
          "sao chép phổ thông",
          "không có điểm nhấn"
        ]
      },
      {
        "id": "adj_078",
        "word": "drastic",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈdræs.tɪk/",
        "meaningVi": "quyết liệt, mạnh mẽ sâu sắc",
        "collocations": "drastic measures, drastic change, take drastic action",
        "example": "The company took drastic measures to cut operational overhead during the recession.",
        "exampleVi": "Công ty đã thực hiện những biện pháp quyết liệt để cắt giảm chi phí vận hành trong thời kỳ suy thoái.",
        "optionsVi": [
          "quyết liệt, mạnh mẽ sâu sắc",
          "nhẹ nhàng nửa vời",
          "không đáng kể",
          "thỏa hiệp mềm mỏng"
        ]
      },
      {
        "id": "adj_079",
        "word": "elaborate",
        "level": "B2",
        "type": "adjective",
        "ipa": "/iˈlæb.ər.ət/",
        "meaningVi": "công phu, tỉ mỉ phức tạp",
        "collocations": "elaborate plan, elaborate design, elaborate scheme",
        "example": "The event team prepared an elaborate stage design for the annual gala.",
        "exampleVi": "Đội sự kiện đã chuẩn bị một thiết kế sân khấu hết sức công phu cho đêm gala thường niên.",
        "optionsVi": [
          "công phu, tỉ mỉ phức tạp",
          "sơ sài đơn giản",
          "qua loa đại khái",
          "nhạt nhẽo cẩu thả"
        ]
      },
      {
        "id": "adj_080",
        "word": "exceptional",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ɪkˈsep.ʃən.əl/",
        "meaningVi": "xuất chúng, phi thường kiệt xuất",
        "collocations": "exceptional talent, exceptional performance, exceptional quality",
        "example": "She demonstrated exceptional leadership skills throughout the crisis.",
        "exampleVi": "Cô ấy đã thể hiện kỹ năng lãnh đạo xuất chúng trong suốt cuộc khủng hoảng.",
        "optionsVi": [
          "xuất chúng, phi thường kiệt xuất",
          "tầm thường trung bình",
          "kém cỏi yếu kém",
          "không có gì nổi bật"
        ]
      },
      {
        "id": "adj_081",
        "word": "exhaustive",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ɪɡˈzɔː.stɪv/",
        "meaningVi": "thấu đáo, triệt để đến cùng",
        "collocations": "exhaustive search, exhaustive list, exhaustive investigation",
        "example": "The engineers conducted an exhaustive investigation into the root cause of the outage.",
        "exampleVi": "Các kỹ sư đã tiến hành một cuộc điều tra thấu đáo về nguyên nhân gốc rễ của sự cố sập mạng.",
        "optionsVi": [
          "thấu đáo, triệt để đến cùng",
          "xem lướt bề ngoài",
          "nông cạn qua loa",
          "bỏ qua nửa chừng"
        ]
      },
      {
        "id": "adj_082",
        "word": "feasible",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈfiː.zə.bəl/",
        "meaningVi": "khả thi, có thể đưa vào thực tế",
        "collocations": "technically feasible, commercially feasible, economically feasible",
        "example": "With current battery advancements, electric aviation is becoming commercially feasible.",
        "exampleVi": "Với những tiến bộ pin hiện tại, hàng không điện đang dần trở nên khả thi về mặt thương mại.",
        "optionsVi": [
          "khả thi, có thể đưa vào thực tế",
          "bất khả thi viển vông",
          "không thể làm được",
          "ảo tưởng xa rời"
        ]
      },
      {
        "id": "adj_083",
        "word": "formidable",
        "level": "B2",
        "type": "adjective",
        "ipa": "/fɔːˈmɪd.ə.bəl/",
        "meaningVi": "đáng gờm, ghê gớm khó đánh bại",
        "collocations": "formidable opponent, formidable challenge, formidable obstacle",
        "example": "Entering the global market proved to be a formidable but rewarding challenge.",
        "exampleVi": "Thâm nhập thị trường toàn cầu đã chứng tỏ là một thử thách đáng gờm nhưng rất xứng đáng.",
        "optionsVi": [
          "đáng gờm, ghê gớm khó đánh bại",
          "yếu ớt dễ bắt nạt",
          "tầm thường vô hại",
          "không đáng bận tâm"
        ]
      },
      {
        "id": "adj_084",
        "word": "fundamental",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˌfʌn.dəˈmen.təl/",
        "meaningVi": "nền tảng, căn bản cốt lõi",
        "collocations": "fundamental difference, fundamental principles, fundamental change",
        "example": "Understanding grammar fundamentals is crucial before building complex conversational fluency.",
        "exampleVi": "Nắm vững các nguyên tắc ngữ pháp căn bản là điều tối quan trọng trước khi rèn độ lưu loát đàm thoại phức tạp.",
        "optionsVi": [
          "nền tảng, căn bản cốt lõi",
          "chi tiết ngoài lề",
          "phù phiếm bề mặt",
          "không đóng vai trò gì"
        ]
      },
      {
        "id": "adj_085",
        "word": "imperative",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ɪmˈper.ə.tɪv/",
        "meaningVi": "cấp bách, tối khẩn thiết phải làm",
        "collocations": "vitally imperative, become imperative, imperative that",
        "example": "It is vitally imperative that all servers are patched against the security exploit immediately.",
        "exampleVi": "Điều tối khẩn thiết là tất cả các máy chủ phải được cập nhật bản vá chống lỗ hổng bảo mật ngay lập tức.",
        "optionsVi": [
          "cấp bách, tối khẩn thiết phải làm",
          "trì hoãn cũng được",
          "không quan trọng",
          "tùy ý muốn làm hay không"
        ]
      },
      {
        "id": "adj_086",
        "word": "implicit",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ɪmˈplɪs.ɪt/",
        "meaningVi": "ngầm hiểu, hàm ẩn không nói thẳng",
        "collocations": "implicit trust, implicit assumption, implicit meaning",
        "example": "There was an implicit understanding between the two partners without signing extra papers.",
        "exampleVi": "Đã có một sự thấu hiểu ngầm giữa hai đối tác mà không cần phải ký thêm giấy tờ phụ.",
        "optionsVi": [
          "ngầm hiểu, hàm ẩn không nói thẳng",
          "nói toạc móng heo",
          "văn bản rành mạch",
          "tuyên bố công khai"
        ]
      },
      {
        "id": "adj_087",
        "word": "incompatible",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˌɪn.kəmˈpæt.ə.bəl/",
        "meaningVi": "xung khắc, không tương thích",
        "collocations": "incompatible with, mutually incompatible, fundamentally incompatible",
        "example": "The legacy software was completely incompatible with the newly installed operating system.",
        "exampleVi": "Phần mềm cũ hoàn toàn không tương thích với hệ điều hành mới được cài đặt.",
        "optionsVi": [
          "xung khắc, không tương thích",
          "hoàn toàn đồng bộ",
          "kết nối ăn khớp",
          "tương thích mượt mà"
        ]
      },
      {
        "id": "adj_088",
        "word": "indispensable",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˌɪn.dɪˈspen.sə.bəl/",
        "meaningVi": "không thể thiếu được, tối cần thiết",
        "collocations": "indispensable tool, become indispensable, prove indispensable",
        "example": "Version control systems have become indispensable tools for modern software development teams.",
        "exampleVi": "Các hệ thống quản lý phiên bản (Git) đã trở thành công cụ không thể thiếu đối với các đội phát triển phần mềm hiện đại.",
        "optionsVi": [
          "không thể thiếu được, tối cần thiết",
          "thừa thãi bỏ đi",
          "không dùng cũng được",
          "dễ dàng thay thế"
        ]
      },
      {
        "id": "adj_089",
        "word": "ingenious",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ɪnˈdʒiː.ni.əs/",
        "meaningVi": "tài tình, khéo léo thông minh xuất sắc",
        "collocations": "ingenious solution, ingenious design, truly ingenious",
        "example": "The engineer devised an ingenious solution that reduced power consumption by forty percent.",
        "exampleVi": "Kỹ sư đã nghĩ ra một giải pháp tài tình giúp giảm lượng tiêu thụ điện năng tới bốn mươi phần trăm.",
        "optionsVi": [
          "tài tình, khéo léo thông minh xuất sắc",
          "vụng về ngô nghê",
          "ngớ ngẩn sáo rỗng",
          "lạc hậu thô sơ"
        ]
      },
      {
        "id": "adj_090",
        "word": "lucrative",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈluː.krə.tɪv/",
        "meaningVi": "sinh lời cao, mang lại lợi nhuận béo bở",
        "collocations": "lucrative business, lucrative contract, highly lucrative",
        "example": "The startup secured a highly lucrative contract with a multinational telecommunications firm.",
        "exampleVi": "Công ty khởi nghiệp đã giành được một hợp đồng sinh lời rất cao với tập đoàn viễn thông đa quốc gia.",
        "optionsVi": [
          "sinh lời cao, mang lại lợi nhuận béo bở",
          "thua lỗ triền miên",
          "không có lãi",
          "lợi nhuận bèo bọt"
        ]
      },
      {
        "id": "adj_091",
        "word": "mandatory",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈmæn.də.tər.i/",
        "meaningVi": "có tính bắt buộc thi hành theo luật",
        "collocations": "mandatory requirement, mandatory training, make mandatory",
        "example": "Data privacy training is strictly mandatory for all newly hired banking staff.",
        "exampleVi": "Đào tạo bảo mật dữ liệu là bắt buộc nghiêm ngặt đối với tất cả nhân viên ngân hàng mới tuyển dụng.",
        "optionsVi": [
          "có tính bắt buộc thi hành theo luật",
          "tùy chọn tự ý",
          "không ép buộc",
          "khuyến khích tự nguyện"
        ]
      },
      {
        "id": "adj_092",
        "word": "meticulous",
        "level": "B2",
        "type": "adjective",
        "ipa": "/məˈtɪk.jə.ləs/",
        "meaningVi": "tỉ mỉ, cẩn thận từng chi tiết nhỏ",
        "collocations": "meticulous attention to detail, meticulous planning, highly meticulous",
        "example": "Her meticulous attention to detail ensured the research paper was published without corrections.",
        "exampleVi": "Sự chú ý tỉ mỉ đến từng chi tiết của cô ấy đã giúp bài báo khoa học được xuất bản mà không cần chỉnh sửa.",
        "optionsVi": [
          "tỉ mỉ, cẩn thận từng chi tiết nhỏ",
          "cẩu thả qua loa",
          "bừa bãi luộm thuộm",
          "xem thường chi tiết"
        ]
      },
      {
        "id": "adj_093",
        "word": "paramount",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈpær.ə.maʊnt/",
        "meaningVi": "tối quan trọng, đứng hàng đầu",
        "collocations": "of paramount importance, paramount concern, paramount priority",
        "example": "Passenger safety is of paramount importance in the design of high-speed rail systems.",
        "exampleVi": "Sự an toàn của hành khách là điều tối quan trọng hàng đầu trong thiết kế hệ thống đường sắt cao tốc.",
        "optionsVi": [
          "tối quan trọng, đứng hàng đầu",
          "thứ cấp mờ nhạt",
          "xếp hàng cuối cùng",
          "không đáng để ý"
        ]
      },
      {
        "id": "adj_094",
        "word": "plausible",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈplɔː.zə.bəl/",
        "meaningVi": "hợp lý, có cơ sở đáng tin",
        "collocations": "plausible explanation, perfectly plausible, plausible scenario",
        "example": "The detective presented a perfectly plausible scenario of how the break-in occurred.",
        "exampleVi": "Vị thám tử đã đưa ra một kịch bản hoàn toàn có cơ sở hợp lý về cách vụ đột nhập đã diễn ra.",
        "optionsVi": [
          "hợp lý, có cơ sở đáng tin",
          "phi lý không tưởng",
          "hoang đường bịa đặt",
          "không có căn cứ"
        ]
      },
      {
        "id": "adj_095",
        "word": "profound",
        "level": "B2",
        "type": "adjective",
        "ipa": "/prəˈfaʊnd/",
        "meaningVi": "sâu sắc, mang ý nghĩa thâm thúy",
        "collocations": "profound impact, profound insight, profound understanding",
        "example": "The mentor's advice had a profound impact on his approach to problem-solving.",
        "exampleVi": "Lời khuyên của người cố vấn đã có tác động sâu sắc đến cách tiếp cận giải quyết vấn đề của anh ấy.",
        "optionsVi": [
          "sâu sắc, mang ý nghĩa thâm thúy",
          "hời hợt nông cạn",
          "tầm thường vô bổ",
          "nông nổi bồng bột"
        ]
      },
      {
        "id": "adj_096",
        "word": "redundant",
        "level": "B2",
        "type": "adjective",
        "ipa": "/rɪˈdʌn.dənt/",
        "meaningVi": "dư thừa, không cần thiết phải giữ",
        "collocations": "redundant data, become redundant, make redundant",
        "example": "Modern cloud migration made several old on-premise hardware servers redundant.",
        "exampleVi": "Việc chuyển đổi lên đám mây hiện đại đã khiến nhiều máy chủ phần cứng tại chỗ cũ trở nên dư thừa.",
        "optionsVi": [
          "dư thừa, không cần thiết phải giữ",
          "tối cần thiết phải có",
          "quý giá khan hiếm",
          "đang được trọng dụng"
        ]
      },
      {
        "id": "adj_097",
        "word": "resilient",
        "level": "B2",
        "type": "adjective",
        "ipa": "/rɪˈzɪl.i.ənt/",
        "meaningVi": "kiên cường, nhanh chóng phục hồi",
        "collocations": "resilient economy, highly resilient, resilient infrastructure",
        "example": "Building a resilient software architecture ensures zero downtime during traffic spikes.",
        "exampleVi": "Xây dựng kiến trúc phần mềm kiên cường đảm bảo hệ thống không bị sập khi lưu lượng truy cập tăng vọt.",
        "optionsVi": [
          "kiên cường, nhanh chóng phục hồi",
          "mong manh dễ vỡ",
          "dễ sụp đổ tê liệt",
          "yếu ớt đầu hàng"
        ]
      },
      {
        "id": "adj_098",
        "word": "stringent",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈstrɪn.dʒənt/",
        "meaningVi": "nghiêm ngặt, thắt chặt khắt khe",
        "collocations": "stringent regulations, stringent requirements, stringent measures",
        "example": "Pharmaceutical products must undergo stringent safety testing before clinical approval.",
        "exampleVi": "Các sản phẩm dược phẩm phải trải qua các đợt kiểm tra an toàn nghiêm ngặt trước khi được cấp phép lâm sàng.",
        "optionsVi": [
          "nghiêm ngặt, thắt chặt khắt khe",
          "lỏng lẻo buông lỏng",
          "dễ dãi tùy tiện",
          "không có kiểm soát"
        ]
      },
      {
        "id": "adj_099",
        "word": "subtle",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈsʌt.əl/",
        "meaningVi": "tinh tế, vi tế khó nhận biết",
        "collocations": "subtle difference, subtle change, subtle hint",
        "example": "There is a subtle difference in nuance between these two advanced English synonyms.",
        "exampleVi": "Có một sự khác biệt tinh tế về sắc thái giữa hai từ đồng nghĩa tiếng Anh nâng cao này.",
        "optionsVi": [
          "tinh tế, vi tế khó nhận biết",
          "thô thiển lộ liễu",
          "đập ngay vào mắt",
          "rõ ràng quá mức"
        ]
      },
      {
        "id": "adj_100",
        "word": "vulnerable",
        "level": "B2",
        "type": "adjective",
        "ipa": "/ˈvʌl.nər.ə.bəl/",
        "meaningVi": "dễ bị tổn thương, có điểm yếu",
        "collocations": "vulnerable to attack, vulnerable population, highly vulnerable",
        "example": "Outdated software versions leave systems highly vulnerable to automated cyber attacks.",
        "exampleVi": "Các phiên bản phần mềm lỗi thời khiến hệ thống rất dễ bị tổn thương trước các cuộc tấn công mạng tự động.",
        "optionsVi": [
          "dễ bị tổn thương, có điểm yếu",
          "bất khả xâm phạm",
          "vững như bàn thạch",
          "được bảo vệ tuyệt đối"
        ]
      }
    ]
  },
  {
    "groupId": "pos_adverbs",
    "name": "100 Trạng Từ Bổ Trợ Ngữ Cảnh (Core Adverbs)",
    "icon": "🎯",
    "category": "pos",
    "level": "B1",
    "description": "100 trạng từ then chốt A2–B2 biểu thị mức độ, tần suất, thái độ và liên kết ý chặt chẽ.",
    "words": [
      {
        "id": "adv_001",
        "word": "actually",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈæk.tʃu.ə.li/",
        "meaningVi": "thực ra, thực sự là",
        "collocations": "actually happen, actually mean, not actually true",
        "example": "I didn't think I would enjoy the workshop, but it was actually very informative.",
        "exampleVi": "Tôi từng nghĩ mình sẽ không thích buổi hội thảo, nhưng thực ra nó rất nhiều thông tin bổ ích.",
        "optionsVi": [
          "thực ra, thực sự là",
          "chắc chắn trong tương lai",
          "chỉ là tạm thời",
          "hoàn toàn ngẫu nhiên"
        ]
      },
      {
        "id": "adv_002",
        "word": "already",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ɔːlˈred.i/",
        "meaningVi": "đã, rồi (sớm hơn dự kiến)",
        "collocations": "already know, already done, have already seen",
        "example": "We have already submitted the project report ahead of the deadline.",
        "exampleVi": "Chúng tôi đã nộp báo cáo dự án trước thời hạn quy định.",
        "optionsVi": [
          "đã, rồi (sớm hơn dự kiến)",
          "chưa từng bao giờ",
          "sắp sửa bắt đầu",
          "rất hiếm khi xảy ra"
        ]
      },
      {
        "id": "adv_003",
        "word": "clearly",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈklɪə.li/",
        "meaningVi": "rõ ràng, rành mạch",
        "collocations": "state clearly, clearly understand, see clearly",
        "example": "Please state your requirements clearly so that we can assist you properly.",
        "exampleVi": "Vui lòng nêu rõ các yêu cầu của bạn một cách rõ ràng để chúng tôi hỗ trợ đúng cách.",
        "optionsVi": [
          "rõ ràng, rành mạch",
          "mơ hồ khó hiểu",
          "lúng túng ngập ngừng",
          "hoàn toàn bí mật"
        ]
      },
      {
        "id": "adv_004",
        "word": "completely",
        "level": "A2",
        "type": "adverb",
        "ipa": "/kəmˈpliːt.li/",
        "meaningVi": "hoàn toàn, trọn vẹn",
        "collocations": "completely agree, completely different, completely free",
        "example": "The new operating system is completely different from the previous version.",
        "exampleVi": "Hệ điều hành mới hoàn toàn khác biệt so với phiên bản trước đó.",
        "optionsVi": [
          "hoàn toàn, trọn vẹn",
          "chỉ một phần nhỏ",
          "tạm thời gián đoạn",
          "hầu như không có"
        ]
      },
      {
        "id": "adv_005",
        "word": "especially",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ɪˈspeʃ.əl.i/",
        "meaningVi": "đặc biệt là, nhất là",
        "collocations": "especially important, especially useful, especially for beginners",
        "example": "Consistent practice is especially important when learning a new language.",
        "exampleVi": "Luyện tập đều đặn là đặc biệt quan trọng khi học một ngôn ngữ mới.",
        "optionsVi": [
          "đặc biệt là, nhất là",
          "nhìn chung đại khái",
          "hoàn toàn bình thường",
          "không quan trọng lắm"
        ]
      },
      {
        "id": "adv_006",
        "word": "finally",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈfaɪ.nəl.i/",
        "meaningVi": "cuối cùng, rốt cuộc",
        "collocations": "finally arrive, finally decide, finally agree",
        "example": "After weeks of negotiations, both parties finally reached an agreement.",
        "exampleVi": "Sau nhiều tuần đàm phán, cả hai bên cuối cùng đã đạt được thỏa thuận.",
        "optionsVi": [
          "cuối cùng, rốt cuộc",
          "ngay từ lúc đầu",
          "thỉnh thoảng đôi khi",
          "không bao giờ xong"
        ]
      },
      {
        "id": "adv_007",
        "word": "hardly",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈhɑːd.li/",
        "meaningVi": "hầu như không, hiếm khi",
        "collocations": "hardly ever, hardly notice, hardly believe",
        "example": "He was so tired that he could hardly keep his eyes open during the lecture.",
        "exampleVi": "Anh ấy mệt đến mức hầu như không thể mở nổi mắt trong suốt bài giảng.",
        "optionsVi": [
          "hầu như không, hiếm khi",
          "rất thường xuyên",
          "chắc chắn làm được",
          "liên tục không ngừng"
        ]
      },
      {
        "id": "adv_008",
        "word": "nearly",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈnɪə.li/",
        "meaningVi": "gần như, suýt nữa",
        "collocations": "nearly finished, nearly everyone, nearly double",
        "example": "The construction project is nearly finished and ready for inspection.",
        "exampleVi": "Dự án xây dựng đã gần như hoàn thành và sẵn sàng cho việc nghiệm thu.",
        "optionsVi": [
          "gần như, suýt nữa",
          "chưa bắt đầu",
          "chắc chắn xa vời",
          "hoàn toàn thất bại"
        ]
      },
      {
        "id": "adv_009",
        "word": "probably",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈprɒb.ə.bli/",
        "meaningVi": "có lẽ, có khả năng cao",
        "collocations": "most probably, probably right, will probably happen",
        "example": "The train will probably arrive late due to the heavy snowfall.",
        "exampleVi": "Chuyến tàu có lẽ sẽ đến muộn do đợt tuyết rơi dày đặc.",
        "optionsVi": [
          "có lẽ, có khả năng cao",
          "chắc chắn không bao giờ",
          "tuyệt đối trăm phần trăm",
          "hoàn toàn ngẫu hứng"
        ]
      },
      {
        "id": "adv_010",
        "word": "quickly",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈkwɪk.li/",
        "meaningVi": "nhanh chóng, mau lẹ",
        "collocations": "respond quickly, adapt quickly, learn quickly",
        "example": "Our support agents responded quickly to resolve the customer's issue.",
        "exampleVi": "Các nhân viên hỗ trợ của chúng tôi đã phản hồi nhanh chóng để giải quyết vấn đề của khách hàng.",
        "optionsVi": [
          "nhanh chóng, mau lẹ",
          "chậm chạp lề mề",
          "ngập ngừng do dự",
          "từ từ từng bước"
        ]
      },
      {
        "id": "adv_011",
        "word": "quietly",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈkwaɪət.li/",
        "meaningVi": "lặng lẽ, yên tĩnh, khẽ khàng",
        "collocations": "speak quietly, sit quietly, work quietly",
        "example": "Please work quietly in the library so you do not disturb others.",
        "exampleVi": "Vui lòng làm việc yên tĩnh trong thư viện để không làm phiền người khác.",
        "optionsVi": [
          "lặng lẽ, yên tĩnh, khẽ khàng",
          "ồn ào huyên náo",
          "la hét ầm ĩ",
          "phô trương rầm rộ"
        ]
      },
      {
        "id": "adv_012",
        "word": "really",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈrɪə.li/",
        "meaningVi": "thực sự, rất",
        "collocations": "really appreciate, really want, really helpful",
        "example": "We really appreciate your constructive feedback on our software update.",
        "exampleVi": "Chúng tôi thực sự trân trọng những phản hồi mang tính xây dựng của bạn về bản cập nhật phần mềm.",
        "optionsVi": [
          "thực sự, rất",
          "giả tạo đóng kịch",
          "hời hợt qua loa",
          "hầu như chẳng quan tâm"
        ]
      },
      {
        "id": "adv_013",
        "word": "recently",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈriː.sənt.li/",
        "meaningVi": "gần đây, mới đây",
        "collocations": "until recently, have recently published, recently discovered",
        "example": "The firm has recently expanded its offices to three international cities.",
        "exampleVi": "Công ty gần đây đã mở rộng văn phòng tới ba thành phố quốc tế.",
        "optionsVi": [
          "gần đây, mới đây",
          "từ thời cổ đại",
          "trong tương lai xa",
          "rất lâu về trước"
        ]
      },
      {
        "id": "adv_014",
        "word": "suddenly",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈsʌd.ən.li/",
        "meaningVi": "đột nhiên, bất ngờ",
        "collocations": "suddenly realize, suddenly change, stop suddenly",
        "example": "The weather changed suddenly from bright sunshine to a heavy downpour.",
        "exampleVi": "Thời tiết đột nhiên chuyển từ nắng chói chang sang mưa rào xối xả.",
        "optionsVi": [
          "đột nhiên, bất ngờ",
          "từ từ theo lịch hẹn",
          "được báo trước",
          "theo kế hoạch tuần tự"
        ]
      },
      {
        "id": "adv_015",
        "word": "usually",
        "level": "A2",
        "type": "adverb",
        "ipa": "/ˈjuː.ʒu.ə.li/",
        "meaningVi": "thông thường, thường lệ",
        "collocations": "as usually happens, usually take, usually work",
        "example": "The team usually conducts a brief stand-up meeting every morning at nine.",
        "exampleVi": "Cả nhóm thường tổ chức một cuộc họp nhanh mỗi buổi sáng lúc chín giờ.",
        "optionsVi": [
          "thông thường, thường lệ",
          "chưa từng xảy ra",
          "hiếm khi ngoại lệ",
          "chỉ một lần duy nhất"
        ]
      },
      {
        "id": "adv_016",
        "word": "absolutely",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈæb.sə.luːt.li/",
        "meaningVi": "tuyệt đối, hoàn toàn chắc chắn",
        "collocations": "absolutely necessary, absolutely essential, agree absolutely",
        "example": "Accurate financial bookkeeping is absolutely essential for tax compliance.",
        "exampleVi": "Sổ sách kế toán tài chính chính xác là điều tuyệt đối cần thiết để tuân thủ thuế.",
        "optionsVi": [
          "tuyệt đối, hoàn toàn chắc chắn",
          "tương đối sơ sài",
          "nửa vời mơ hồ",
          "không đáng tin cậy"
        ]
      },
      {
        "id": "adv_017",
        "word": "accurately",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈæk.jə.rət.li/",
        "meaningVi": "chính xác, đúng đắn",
        "collocations": "measure accurately, record accurately, reflect accurately",
        "example": "The financial model accurately reflects market changes under inflation.",
        "exampleVi": "Mô hình tài chính phản ánh chính xác các biến động thị trường dưới tác động lạm phát.",
        "optionsVi": [
          "chính xác, đúng đắn",
          "ước chừng đại khái",
          "sai lệch trầm trọng",
          "mông lung không chuẩn"
        ]
      },
      {
        "id": "adv_018",
        "word": "actively",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈæk.tɪv.li/",
        "meaningVi": "chủ động, tích cực tham gia",
        "collocations": "actively participate, actively seek, actively listen",
        "example": "Employees are encouraged to actively participate in company strategy sessions.",
        "exampleVi": "Nhân viên được khuyến khích tích cực tham gia vào các phiên họp chiến lược công ty.",
        "optionsVi": [
          "chủ động, tích cực tham gia",
          "thụ động ngồi xem",
          "thờ ơ bỏ bê",
          "miễn cưỡng làm theo"
        ]
      },
      {
        "id": "adv_019",
        "word": "adequately",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈæd.ə.kwət.li/",
        "meaningVi": "đầy đủ, thỏa đáng, vừa đủ",
        "collocations": "adequately prepared, adequately address, adequately funded",
        "example": "The department must ensure all staff are adequately trained before launch.",
        "exampleVi": "Phòng ban phải đảm bảo tất cả nhân viên được đào tạo thỏa đáng trước khi khởi động.",
        "optionsVi": [
          "đầy đủ, thỏa đáng, vừa đủ",
          "thiếu hụt nghiêm trọng",
          "quá mức dư thừa",
          "sơ sài cẩu thả"
        ]
      },
      {
        "id": "adv_020",
        "word": "anxiously",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈæŋk.ʃəs.li/",
        "meaningVi": "bồn chồn, lo âu, thắc thỏm",
        "collocations": "wait anxiously, anxiously look at, anxiously anticipate",
        "example": "Investors waited anxiously for the central bank's announcement on interest rates.",
        "exampleVi": "Các nhà đầu tư thắc thỏm chờ đợi thông báo của ngân hàng trung ương về lãi suất.",
        "optionsVi": [
          "bồn chồn, lo âu, thắc thỏm",
          "bình thản ung dung",
          "vui mừng hớn hở",
          "lãnh đạm dửng dưng"
        ]
      },
      {
        "id": "adv_021",
        "word": "apparently",
        "level": "B1",
        "type": "adverb",
        "ipa": "/əˈpær.ənt.li/",
        "meaningVi": "hình như, dường như, theo bề ngoài",
        "collocations": "apparently simple, apparently satisfied, apparently unaware",
        "example": "The technical issue was apparently caused by an unverified server update.",
        "exampleVi": "Vấn đề kỹ thuật dường như bắt nguồn từ một bản cập nhật máy chủ chưa được kiểm định.",
        "optionsVi": [
          "hình như, dường như, theo bề ngoài",
          "chắc chắn xác thực",
          "hoàn toàn vô lý",
          "được chứng minh khoa học"
        ]
      },
      {
        "id": "adv_022",
        "word": "appropriately",
        "level": "B1",
        "type": "adverb",
        "ipa": "/əˈprəʊ.pri.ət.li/",
        "meaningVi": "thích hợp, đúng mực, thỏa đáng",
        "collocations": "dress appropriately, respond appropriately, allocate appropriately",
        "example": "Candidates should dress appropriately when attending in-person interviews.",
        "exampleVi": "Ứng viên nên ăn mặc lịch sự phù hợp khi tham dự các buổi phỏng vấn trực tiếp.",
        "optionsVi": [
          "thích hợp, đúng mực, thỏa đáng",
          "khiếm nhã lệch chuẩn",
          "kỳ quặc lố lăng",
          "tùy tiện cẩu thả"
        ]
      },
      {
        "id": "adv_023",
        "word": "briefly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈbriːf.li/",
        "meaningVi": "ngắn gọn, tóm tắt, trong chốc lát",
        "collocations": "speak briefly, mention briefly, describe briefly",
        "example": "The CEO briefly outlined the third-quarter financial achievements.",
        "exampleVi": "Tổng giám đốc đã phác thảo ngắn gọn các thành tựu tài chính quý ba.",
        "optionsVi": [
          "ngắn gọn, tóm tắt, trong chốc lát",
          "dài dòng lê thê",
          "chi tiết tỉ mỉ cả ngày",
          "vĩnh viễn không dứt"
        ]
      },
      {
        "id": "adv_024",
        "word": "certainly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈsɜː.tən.li/",
        "meaningVi": "chắc chắn, dĩ nhiên",
        "collocations": "almost certainly, certainly agree, will certainly help",
        "example": "Adopting automation will certainly increase operational speed across departments.",
        "exampleVi": "Áp dụng tự động hóa chắc chắn sẽ gia tăng tốc độ vận hành trên khắp các phòng ban.",
        "optionsVi": [
          "chắc chắn, dĩ nhiên",
          "nghi ngờ bỏ ngỏ",
          "không có khả năng",
          "chỉ là tin đồn"
        ]
      },
      {
        "id": "adv_025",
        "word": "closely",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈkləʊs.li/",
        "meaningVi": "chặt chẽ, sát sao, tỉ mỉ",
        "collocations": "work closely, monitor closely, examine closely",
        "example": "Our engineers worked closely with the design team to refine the interface.",
        "exampleVi": "Các kỹ sư của chúng tôi đã làm việc chặt chẽ với đội thiết kế để tinh chỉnh giao diện.",
        "optionsVi": [
          "chặt chẽ, sát sao, tỉ mỉ",
          "xa cách rời rạc",
          "hời hợt qua loa",
          "bỏ mặc hoàn toàn"
        ]
      },
      {
        "id": "adv_026",
        "word": "commonly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈkɒm.ən.li/",
        "meaningVi": "thông thường, phổ biến rộng rãi",
        "collocations": "commonly used, commonly known, commonly found",
        "example": "Python is commonly used for data analysis and machine learning workflows.",
        "exampleVi": "Python được sử dụng phổ biến cho phân tích dữ liệu và quy trình học máy.",
        "optionsVi": [
          "thông thường, phổ biến rộng rãi",
          "hiếm khi thấy",
          "độc quyền bí mật",
          "bị cấm sử dụng"
        ]
      },
      {
        "id": "adv_027",
        "word": "constantly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈkɒn.stənt.li/",
        "meaningVi": "liên tục, không ngừng nghỉ",
        "collocations": "constantly changing, constantly update, constantly monitor",
        "example": "Consumer preferences are constantly changing in this digital marketplace.",
        "exampleVi": "Thị hiếu của người tiêu dùng liên tục thay đổi trong thị trường số này.",
        "optionsVi": [
          "liên tục, không ngừng nghỉ",
          "ngắt quãng gián đoạn",
          "cố định bất biến",
          "thỉnh thoảng đôi lúc"
        ]
      },
      {
        "id": "adv_028",
        "word": "correctly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/kəˈrekt.li/",
        "meaningVi": "đúng đắn, chuẩn xác",
        "collocations": "answer correctly, install correctly, behave correctly",
        "example": "Make sure all electrical components are installed correctly before turning on the power.",
        "exampleVi": "Đảm bảo tất cả linh kiện điện được lắp đặt đúng cách trước khi bật nguồn điện.",
        "optionsVi": [
          "đúng đắn, chuẩn xác",
          "lộn xộn sai lệch",
          "tùy tiện ngẫu nhiên",
          "ngược lại hoàn toàn"
        ]
      },
      {
        "id": "adv_029",
        "word": "deeply",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈdiːp.li/",
        "meaningVi": "sâu sắc, hết sức, tận đáy lòng",
        "collocations": "deeply concerned, deeply regret, deeply rooted",
        "example": "The board members are deeply concerned about the rising cost of raw materials.",
        "exampleVi": "Các thành viên hội đồng quản trị hết sức quan ngại về chi phí nguyên vật liệu đang tăng cao.",
        "optionsVi": [
          "sâu sắc, hết sức, tận đáy lòng",
          "nông cạn hời hợt",
          "bình thản vô cảm",
          "chỉ là nói đùa"
        ]
      },
      {
        "id": "adv_030",
        "word": "definitely",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈdef.ɪ.nət.li/",
        "meaningVi": "chắc chắn, dứt khoát không nghi ngờ",
        "collocations": "definitely agree, definitely recommend, will definitely attend",
        "example": "I would definitely recommend this cloud storage solution to any growing business.",
        "exampleVi": "Tôi chắc chắn sẽ giới thiệu giải pháp lưu trữ đám mây này cho bất kỳ doanh nghiệp đang phát triển nào.",
        "optionsVi": [
          "chắc chắn, dứt khoát không nghi ngờ",
          "lưỡng lự đắn đo",
          "chưa chắc đã đúng",
          "hoàn toàn từ chối"
        ]
      },
      {
        "id": "adv_031",
        "word": "deliberately",
        "level": "B1",
        "type": "adverb",
        "ipa": "/dɪˈlɪb.ər.ət.li/",
        "meaningVi": "cố ý, có chủ đích, thận trọng",
        "collocations": "deliberately choose, deliberately mislead, act deliberately",
        "example": "The firm deliberately chose a quiet launch to gather authentic user feedback first.",
        "exampleVi": "Công ty đã có chủ đích chọn ra mắt êm ắng để thu thập phản hồi người dùng thực tế trước.",
        "optionsVi": [
          "cố ý, có chủ đích, thận trọng",
          "vô tình vô ý",
          "bất ngờ ngẫu nhiên",
          "lơ đễnh vụng về"
        ]
      },
      {
        "id": "adv_032",
        "word": "directly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/daɪˈrekt.li/",
        "meaningVi": "trực tiếp, thẳng thừng, ngay tức thì",
        "collocations": "directly relate, communicate directly, deal directly with",
        "example": "Customers can communicate directly with support engineers via live chat.",
        "exampleVi": "Khách hàng có thể trao đổi trực tiếp với kỹ sư hỗ trợ thông qua chat trực tiếp.",
        "optionsVi": [
          "trực tiếp, thẳng thừng, ngay tức thì",
          "gián tiếp qua trung gian",
          "vòng vo tam quốc",
          "hoãn lại vô thời hạn"
        ]
      },
      {
        "id": "adv_033",
        "word": "easily",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈiː.zəl.i/",
        "meaningVi": "dễ dàng, không khó khăn, hiển nhiên",
        "collocations": "easily accessible, easily solve, easily understand",
        "example": "The new mobile interface can be easily navigated even by first-time users.",
        "exampleVi": "Giao diện di động mới có thể được điều hướng dễ dàng ngay cả bởi người dùng lần đầu.",
        "optionsVi": [
          "dễ dàng, không khó khăn, hiển nhiên",
          "chật vật gian khổ",
          "bế tắc phức tạp",
          "bất khả thi"
        ]
      },
      {
        "id": "adv_034",
        "word": "effectively",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ɪˈfek.tɪv.li/",
        "meaningVi": "hiệu quả, trên thực tế",
        "collocations": "communicate effectively, manage effectively, work effectively",
        "example": "Good leaders know how to communicate effectively with diverse teams.",
        "exampleVi": "Những nhà lãnh đạo giỏi biết cách giao tiếp hiệu quả với các nhóm nhân sự đa dạng.",
        "optionsVi": [
          "hiệu quả, trên thực tế",
          "vô ích lãng phí",
          "kém cỏi lúng túng",
          "không có tác dụng"
        ]
      },
      {
        "id": "adv_035",
        "word": "efficiently",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ɪˈfɪʃ.ənt.li/",
        "meaningVi": "năng suất, tiết kiệm nguồn lực, hiệu suất cao",
        "collocations": "run efficiently, operate efficiently, complete efficiently",
        "example": "The warehouse operations were restructured to process shipments more efficiently.",
        "exampleVi": "Hoạt động kho bãi đã được tái cấu trúc để xử lý các lô hàng một cách năng suất hơn.",
        "optionsVi": [
          "năng suất, tiết kiệm nguồn lực, hiệu suất cao",
          "lãng phí rườm rà",
          "chậm trễ đội chi phí",
          "tốn thời gian công sức"
        ]
      },
      {
        "id": "adv_036",
        "word": "entirely",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ɪnˈtaɪə.li/",
        "meaningVi": "trọn vẹn, hoàn toàn toàn bộ",
        "collocations": "entirely new, entirely agree, entirely dedicated",
        "example": "The research team developed an entirely new algorithm for audio compression.",
        "exampleVi": "Nhóm nghiên cứu đã phát triển một thuật toán hoàn toàn mới cho việc nén âm thanh.",
        "optionsVi": [
          "trọn vẹn, hoàn toàn toàn bộ",
          "chỉ một phần nhỏ",
          "chắp vá tạm bợ",
          "gần như bằng không"
        ]
      },
      {
        "id": "adv_037",
        "word": "equally",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈiː.kwə.li/",
        "meaningVi": "bình đẳng, ngang bằng nhau, như nhau",
        "collocations": "equally important, treat equally, share equally",
        "example": "Both quality and customer support are equally important for brand loyalty.",
        "exampleVi": "Cả chất lượng và dịch vụ chăm sóc khách hàng đều quan trọng như nhau đối với lòng trung thành thương hiệu.",
        "optionsVi": [
          "bình đẳng, ngang bằng nhau, như nhau",
          "thiên vị bất công",
          "chênh lệch một trời một vực",
          "bất bình đẳng tuyệt đối"
        ]
      },
      {
        "id": "adv_038",
        "word": "eventually",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ɪˈven.tʃu.ə.li/",
        "meaningVi": "rốt cuộc, cuối cùng thì (sau nỗ lực)",
        "collocations": "eventually succeed, eventually become, will eventually happen",
        "example": "With continuous dedication and focus, her startup eventually turned profitable.",
        "exampleVi": "Với sự cống hiến và tập trung liên tục, công ty khởi nghiệp của cô rốt cuộc đã sinh lời.",
        "optionsVi": [
          "rốt cuộc, cuối cùng thì (sau nỗ lực)",
          "ngay tức khắc",
          "bỏ cuộc giữa chừng",
          "chưa từng nỗ lực"
        ]
      },
      {
        "id": "adv_039",
        "word": "frequently",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈfriː.kwənt.li/",
        "meaningVi": "thường xuyên, lặp lại nhiều lần",
        "collocations": "frequently asked, update frequently, travel frequently",
        "example": "Our support page includes answers to the most frequently asked questions.",
        "exampleVi": "Trang hỗ trợ của chúng tôi bao gồm câu trả lời cho các câu hỏi thường gặp nhất.",
        "optionsVi": [
          "thường xuyên, lặp lại nhiều lần",
          "hiếm hoi hàng năm",
          "chỉ xảy ra một lần",
          "hoàn toàn bặt vô âm tín"
        ]
      },
      {
        "id": "adv_040",
        "word": "generally",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈdʒen.ər.əl.i/",
        "meaningVi": "nhìn chung, đại thể, nói chung",
        "collocations": "generally accepted, generally speaking, generally agree",
        "example": "Generally speaking, remote work has boosted productivity for technical staff.",
        "exampleVi": "Nói chung, làm việc từ xa đã thúc đẩy năng suất cho các nhân viên kỹ thuật.",
        "optionsVi": [
          "nhìn chung, đại thể, nói chung",
          "cá biệt riêng rẽ",
          "chi tiết đến từng milimet",
          "hoàn toàn ngoại lệ"
        ]
      },
      {
        "id": "adv_041",
        "word": "gradually",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈɡrædʒ.u.əl.i/",
        "meaningVi": "dần dần, từ từ từng bước",
        "collocations": "gradually increase, gradually improve, become gradually easier",
        "example": "Your listening comprehension will gradually improve with daily practice.",
        "exampleVi": "Khả năng nghe hiểu của bạn sẽ dần dần tiến bộ nhờ việc luyện tập mỗi ngày.",
        "optionsVi": [
          "dần dần, từ từ từng bước",
          "đột ngột tức thì",
          "giậm chân tại chỗ",
          "thụt lùi nhanh chóng"
        ]
      },
      {
        "id": "adv_042",
        "word": "greatly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈɡreɪt.li/",
        "meaningVi": "rất nhiều, to lớn, đáng kể",
        "collocations": "greatly appreciate, greatly reduce, greatly influence",
        "example": "Adopting code reviews has greatly reduced production bugs this quarter.",
        "exampleVi": "Việc áp dụng đánh giá mã nguồn đã giảm thiểu rất nhiều lỗi trên môi trường thực tế quý này.",
        "optionsVi": [
          "rất nhiều, to lớn, đáng kể",
          "không đáng kể chút nào",
          "hầu như bằng không",
          "giảm nhẹ tạm thời"
        ]
      },
      {
        "id": "adv_043",
        "word": "highly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈhaɪ.li/",
        "meaningVi": "rất, ở mức độ cao, hết sức",
        "collocations": "highly recommended, highly qualified, highly competitive",
        "example": "The course is highly recommended for professionals seeking cloud certifications.",
        "exampleVi": "Khóa học được đánh giá rất cao dành cho các chuyên gia tìm kiếm chứng chỉ điện toán đám mây.",
        "optionsVi": [
          "rất, ở mức độ cao, hết sức",
          "kém cỏi thấp kém",
          "tầm thường không nổi bật",
          "bị chê bai nặng nề"
        ]
      },
      {
        "id": "adv_044",
        "word": "honestly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈɒn.ɪst.li/",
        "meaningVi": "thành thật, chân thành, thật lòng",
        "collocations": "honestly speak, honestly believe, act honestly",
        "example": "Honestly speaking, we need more testing before releasing this version.",
        "exampleVi": "Thành thật mà nói, chúng ta cần thử nghiệm nhiều hơn trước khi phát hành phiên bản này.",
        "optionsVi": [
          "thành thật, chân thành, thật lòng",
          "dối trá lừa lọc",
          "xã giao giả tạo",
          "mập mờ giấu giếm"
        ]
      },
      {
        "id": "adv_045",
        "word": "hopefully",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈhəʊp.fəl.i/",
        "meaningVi": "hy vọng rằng, đầy triển vọng",
        "collocations": "hopefully arrive, hopefully resolve, look hopefully",
        "example": "Hopefully, the server maintenance will be concluded before business hours begin.",
        "exampleVi": "Hy vọng rằng việc bảo trì máy chủ sẽ được hoàn tất trước khi giờ làm việc bắt đầu.",
        "optionsVi": [
          "hy vọng rằng, đầy triển vọng",
          "tuyệt vọng bế tắc",
          "chắc chắn thất bại",
          "không mong đợi gì"
        ]
      },
      {
        "id": "adv_046",
        "word": "immediately",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ɪˈmiː.di.ət.li/",
        "meaningVi": "ngay lập tức, tức thì",
        "collocations": "immediately respond, take action immediately, effective immediately",
        "example": "Please report any suspicious login attempts immediately to IT security.",
        "exampleVi": "Vui lòng báo cáo bất kỳ nỗ lực đăng nhập đáng ngờ nào ngay lập tức cho bộ phận an ninh mạng.",
        "optionsVi": [
          "ngay lập tức, tức thì",
          "trì hoãn chần chừ",
          "đợi dịp khác",
          "từ từ năm sau"
        ]
      },
      {
        "id": "adv_047",
        "word": "increasingly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ɪnˈkriː.sɪŋ.li/",
        "meaningVi": "ngày càng nhiều, tăng dần theo thời gian",
        "collocations": "increasingly important, increasingly difficult, become increasingly popular",
        "example": "Data privacy regulations are becoming increasingly strict across all countries.",
        "exampleVi": "Các quy định về quyền riêng tư dữ liệu đang ngày càng trở nên nghiêm ngặt ở tất cả các quốc gia.",
        "optionsVi": [
          "ngày càng nhiều, tăng dần theo thời gian",
          "ngày càng suy giảm",
          "giữ nguyên bất động",
          "biến mất hoàn toàn"
        ]
      },
      {
        "id": "adv_048",
        "word": "initially",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ɪˈnɪʃ.əl.i/",
        "meaningVi": "ban đầu, lúc khởi đầu",
        "collocations": "initially planned, initially hesitant, initially thought",
        "example": "The software was initially planned as an internal tool before being commercialized.",
        "exampleVi": "Phần mềm ban đầu được lên kế hoạch làm công cụ nội bộ trước khi được thương mại hóa.",
        "optionsVi": [
          "ban đầu, lúc khởi đầu",
          "ở giai đoạn kết thúc",
          "mãi về sau này",
          "chưa từng dự tính"
        ]
      },
      {
        "id": "adv_049",
        "word": "largely",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈlɑːdʒ.li/",
        "meaningVi": "phần lớn, chủ yếu",
        "collocations": "largely due to, largely responsible, largely based on",
        "example": "Our product's quick market adoption is largely due to positive word of mouth.",
        "exampleVi": "Sự đón nhận nhanh chóng của thị trường đối với sản phẩm chủ yếu nhờ vào truyền miệng tích cực.",
        "optionsVi": [
          "phần lớn, chủ yếu",
          "chỉ là phần nhỏ thứ yếu",
          "hoàn toàn không liên quan",
          "ngẫu nhiên tình cờ"
        ]
      },
      {
        "id": "adv_050",
        "word": "naturally",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈnætʃ.ər.əl.i/",
        "meaningVi": "tự nhiên, đương nhiên, vốn dĩ",
        "collocations": "come naturally, naturally occur, speak naturally",
        "example": "Good communication skills come naturally to some people, but others can learn them.",
        "exampleVi": "Kỹ năng giao tiếp tốt đến một cách tự nhiên với một số người, nhưng những người khác hoàn toàn có thể học được.",
        "optionsVi": [
          "tự nhiên, đương nhiên, vốn dĩ",
          "nhân tạo gượng gạo",
          "bắt ép khiên cưỡng",
          "hoàn toàn trái tự nhiên"
        ]
      },
      {
        "id": "adv_051",
        "word": "necessarily",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˌnes.əˈser.əl.i/",
        "meaningVi": "nhất thiết, tất yếu",
        "collocations": "not necessarily true, not necessarily mean, necessarily follow",
        "example": "A higher price tag does not necessarily guarantee better build quality.",
        "exampleVi": "Mức giá cao hơn không nhất thiết đảm bảo chất lượng hoàn thiện tốt hơn.",
        "optionsVi": [
          "nhất thiết, tất yếu",
          "tùy ý ngẫu hứng",
          "vô cớ bất chợt",
          "không có nguyên nhân"
        ]
      },
      {
        "id": "adv_052",
        "word": "normally",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈnɔː.məl.i/",
        "meaningVi": "bình thường, như thông lệ",
        "collocations": "function normally, normally take, under normal conditions",
        "example": "The database operates normally under peak traffic conditions without latency.",
        "exampleVi": "Cơ sở dữ liệu hoạt động bình thường dưới điều kiện lưu lượng cao điểm mà không bị trễ.",
        "optionsVi": [
          "bình thường, như thông lệ",
          "bất thường kỳ lạ",
          "gặp trục trặc hư hỏng",
          "ngoại lệ hiếm thấy"
        ]
      },
      {
        "id": "adv_053",
        "word": "obviously",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈɒb.vi.əs.li/",
        "meaningVi": "rõ ràng là, hiển nhiên là",
        "collocations": "obviously wrong, obviously true, state the obvious",
        "example": "The prototype obviously needs further refinements before mass production.",
        "exampleVi": "Bản mẫu rõ ràng là cần được tinh chỉnh thêm trước khi đưa vào sản xuất hàng loạt.",
        "optionsVi": [
          "rõ ràng là, hiển nhiên là",
          "mơ hồ khó đoán",
          "bí ẩn che giấu",
          "hoàn toàn mù mờ"
        ]
      },
      {
        "id": "adv_054",
        "word": "occasionally",
        "level": "B1",
        "type": "adverb",
        "ipa": "/əˈkeɪ.ʒən.əl.i/",
        "meaningVi": "thỉnh thoảng, đôi khi",
        "collocations": "occasionally visit, occur occasionally, check occasionally",
        "example": "We occasionally organize team building outings to strengthen team bonding.",
        "exampleVi": "Chúng tôi thỉnh thoảng tổ chức các chuyến dã ngoại gắn kết để củng cố tinh thần đồng đội.",
        "optionsVi": [
          "thỉnh thoảng, đôi khi",
          "liên tục từng giây",
          "không bao giờ diễn ra",
          "luôn luôn cố định"
        ]
      },
      {
        "id": "adv_055",
        "word": "partially",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈpɑː.ʃəl.i/",
        "meaningVi": "một phần, cục bộ, chưa trọn vẹn",
        "collocations": "partially completed, partially true, partially blind",
        "example": "The project roadmap was partially revised after the client submitted new requirements.",
        "exampleVi": "Lộ trình dự án đã được sửa đổi một phần sau khi khách hàng gửi thêm các yêu cầu mới.",
        "optionsVi": [
          "một phần, cục bộ, chưa trọn vẹn",
          "toàn diện một trăm phần trăm",
          "triệt để từ gốc tới ngọn",
          "hoàn tất không tì vết"
        ]
      },
      {
        "id": "adv_056",
        "word": "personally",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈpɜː.sən.əl.i/",
        "meaningVi": "theo cá nhân tôi, đích thân",
        "collocations": "personally believe, take personally, thank personally",
        "example": "The director personally thanked every member of the engineering team.",
        "exampleVi": "Giám đốc đã đích thân cảm ơn từng thành viên trong nhóm kỹ thuật.",
        "optionsVi": [
          "theo cá nhân tôi, đích thân",
          "ủy quyền qua người khác",
          "nhờ vả trung gian",
          "theo ý kiến tập thể"
        ]
      },
      {
        "id": "adv_057",
        "word": "politely",
        "level": "B1",
        "type": "adverb",
        "ipa": "/pəˈlaɪt.li/",
        "meaningVi": "lịch sự, nhã nhặn, lễ phép",
        "collocations": "ask politely, decline politely, listen politely",
        "example": "The receptionist politely guided the visitors to the executive meeting room.",
        "exampleVi": "Nhân viên lễ tân đã lịch sự dẫn khách vào phòng họp ban điều hành.",
        "optionsVi": [
          "lịch sự, nhã nhặn, lễ phép",
          "thô lỗ cộc lốc",
          "hống hách ngạo mạn",
          "vô lễ xấc xược"
        ]
      },
      {
        "id": "adv_058",
        "word": "potentially",
        "level": "B1",
        "type": "adverb",
        "ipa": "/pəˈten.ʃəl.i/",
        "meaningVi": "tiềm ẩn, có tiềm năng, có thể",
        "collocations": "potentially dangerous, potentially profitable, potentially useful",
        "example": "This newly patented manufacturing process is potentially revolutionary for renewable energy.",
        "exampleVi": "Quy trình sản xuất mới được cấp bằng sáng chế này có tiềm năng mang tính cách mạng cho năng lượng tái tạo.",
        "optionsVi": [
          "tiềm ẩn, có tiềm năng, có thể",
          "chắc chắn thất bại",
          "không có hy vọng",
          "hoàn toàn vô dụng"
        ]
      },
      {
        "id": "adv_059",
        "word": "primarily",
        "level": "B1",
        "type": "adverb",
        "ipa": "/praɪˈmer.əl.i/",
        "meaningVi": "chủ yếu, trước hết, trên hết",
        "collocations": "primarily focus on, primarily responsible, primarily used for",
        "example": "The enterprise platform is designed primarily for large multinational corporations.",
        "exampleVi": "Nền tảng doanh nghiệp này được thiết kế chủ yếu dành cho các tập đoàn đa quốc gia lớn.",
        "optionsVi": [
          "chủ yếu, trước hết, trên hết",
          "chỉ là phụ họa",
          "không liên quan trực tiếp",
          "thứ yếu bên lề"
        ]
      },
      {
        "id": "adv_060",
        "word": "properly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈprɒp.əl.i/",
        "meaningVi": "đúng cách, chỉnh chu, hợp thức",
        "collocations": "function properly, work properly, dispose properly",
        "example": "Make sure all confidential documents are properly shredded before disposal.",
        "exampleVi": "Đảm bảo rằng tất cả các tài liệu mật được tiêu hủy đúng cách trước khi xử lý rác thải.",
        "optionsVi": [
          "đúng cách, chỉnh chu, hợp thức",
          "ẩu đả sai quy trình",
          "cẩu thả qua loa",
          "vứt bừa bãi trái phép"
        ]
      },
      {
        "id": "adv_061",
        "word": "rapidly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈræp.ɪd.li/",
        "meaningVi": "nhanh chóng, mau lẹ, tốc độ cao",
        "collocations": "grow rapidly, expand rapidly, change rapidly",
        "example": "The e-commerce market expanded rapidly throughout the past decade.",
        "exampleVi": "Thị trường thương mại điện tử đã mở rộng nhanh chóng trong suốt thập kỷ qua.",
        "optionsVi": [
          "nhanh chóng, mau lẹ, tốc độ cao",
          "trì trệ chậm chạp",
          "đóng băng đứng yên",
          "thụt lùi từng bước"
        ]
      },
      {
        "id": "adv_062",
        "word": "regularly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈreɡ.jə.lə.li/",
        "meaningVi": "đều đặn, định kỳ theo lịch",
        "collocations": "exercise regularly, update regularly, meet regularly",
        "example": "Security patches must be applied regularly to protect servers from vulnerabilities.",
        "exampleVi": "Các bản vá bảo mật phải được áp dụng đều đặn định kỳ để bảo vệ máy chủ khỏi lỗ hổng.",
        "optionsVi": [
          "đều đặn, định kỳ theo lịch",
          "thất thường tùy hứng",
          "bỏ quên hàng tháng",
          "chưa từng lặp lại"
        ]
      },
      {
        "id": "adv_063",
        "word": "seriously",
        "level": "B1",
        "type": "adverb",
        "ipa": "/ˈsɪə.ri.əs.li/",
        "meaningVi": "nghiêm túc, trầm trọng",
        "collocations": "take seriously, seriously injured, seriously consider",
        "example": "The management team takes employee health and workplace safety very seriously.",
        "exampleVi": "Ban quản lý rất coi trọng nghiêm túc sức khỏe và an toàn nơi làm việc của nhân viên.",
        "optionsVi": [
          "nghiêm túc, trầm trọng",
          "đùa cợt cợt nhả",
          "xem nhẹ coi thường",
          "hời hợt thờ ơ"
        ]
      },
      {
        "id": "adv_064",
        "word": "significantly",
        "level": "B1",
        "type": "adverb",
        "ipa": "/sɪɡˈnɪf.ɪ.kənt.li/",
        "meaningVi": "đáng kể, có ý nghĩa lớn",
        "collocations": "increase significantly, reduce significantly, differ significantly",
        "example": "Migrating to microservices significantly improved application response times.",
        "exampleVi": "Việc chuyển đổi sang kiến trúc dịch vụ vi mô đã cải thiện đáng kể thời gian phản hồi của ứng dụng.",
        "optionsVi": [
          "đáng kể, có ý nghĩa lớn",
          "nhỏ nhặt không đáng kể",
          "giữ nguyên mức cũ",
          "vô thưởng vô phạt"
        ]
      },
      {
        "id": "adv_065",
        "word": "specifically",
        "level": "B1",
        "type": "adverb",
        "ipa": "/spəˈsɪf.ɪ.kəl.i/",
        "meaningVi": "cụ thể là, đặc thù, riêng biệt",
        "collocations": "specifically designed, state specifically, specifically mention",
        "example": "This ergonomics chair was specifically designed to reduce lower back strain.",
        "exampleVi": "Chiếc ghế công thái học này được thiết kế riêng biệt nhằm giảm áp lực lên vùng thắt lưng.",
        "optionsVi": [
          "cụ thể là, đặc thù, riêng biệt",
          "chung chung đại khái",
          "mơ hồ không mục đích",
          "áp dụng bừa bãi"
        ]
      },
      {
        "id": "adv_066",
        "word": "arguably",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˈɑːɡ.ju.ə.bli/",
        "meaningVi": "có thể coi là, được cho là",
        "collocations": "arguably the best, arguably the most important, arguably true",
        "example": "Clean energy is arguably the most critical industry of the twenty-first century.",
        "exampleVi": "Năng lượng sạch có thể coi là ngành công nghiệp quan trọng nhất của thế kỷ hai mươi mốt.",
        "optionsVi": [
          "có thể coi là, được cho là",
          "hoàn toàn vô căn cứ",
          "chắc chắn sai lầm",
          "không ai thừa nhận"
        ]
      },
      {
        "id": "adv_067",
        "word": "coincidentally",
        "level": "B2",
        "type": "adverb",
        "ipa": "/kəʊˌɪn.sɪˈden.təl.i/",
        "meaningVi": "trùng hợp ngẫu nhiên",
        "collocations": "coincidentally happen, coincidentally meet, coincidentally share",
        "example": "Coincidentally, both research teams published their breakthrough papers on the exact same day.",
        "exampleVi": "Trùng hợp ngẫu nhiên là cả hai nhóm nghiên cứu đều công bố các bài báo đột phá vào đúng cùng một ngày.",
        "optionsVi": [
          "trùng hợp ngẫu nhiên",
          "có sắp đặt trước",
          "được dàn dựng công phu",
          "theo kịch bản sẵn có"
        ]
      },
      {
        "id": "adv_068",
        "word": "comparatively",
        "level": "B2",
        "type": "adverb",
        "ipa": "/kəmˈpær.ə.tɪv.li/",
        "meaningVi": "tương đối, so với những cái khác",
        "collocations": "comparatively low, comparatively easy, comparatively small",
        "example": "The initial installation cost is comparatively low compared to traditional gas furnaces.",
        "exampleVi": "Chi phí lắp đặt ban đầu là tương đối thấp khi so sánh với các lò sưởi đốt gas truyền thống.",
        "optionsVi": [
          "tương đối, so với những cái khác",
          "tuyệt đối độc nhất",
          "cực kỳ đắt đỏ vô địch",
          "không thể so sánh"
        ]
      },
      {
        "id": "adv_069",
        "word": "consequently",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˈkɒn.sɪ.kwənt.li/",
        "meaningVi": "do đó, hệ quả là, vì vậy",
        "collocations": "consequently lead to, consequently suffer, consequently decide",
        "example": "The supplier faced component shortages; consequently, shipment dates had to be postponed.",
        "exampleVi": "Nhà cung cấp đối mặt với tình trạng thiếu hụt linh kiện; do đó, ngày giao hàng đã phải hoãn lại.",
        "optionsVi": [
          "do đó, hệ quả là, vì vậy",
          "mặc dù vậy",
          "trước đó rất lâu",
          "bất chấp điều đó"
        ]
      },
      {
        "id": "adv_070",
        "word": "considerably",
        "level": "B2",
        "type": "adverb",
        "ipa": "/kənˈsɪd.ər.ə.bli/",
        "meaningVi": "đáng kể, nhiều, ở mức độ lớn",
        "collocations": "considerably higher, reduce considerably, vary considerably",
        "example": "Operating expenses decreased considerably after moving our data center to the cloud.",
        "exampleVi": "Chi phí vận hành đã giảm đáng kể sau khi chuyển trung tâm dữ liệu của chúng tôi lên đám mây.",
        "optionsVi": [
          "đáng kể, nhiều, ở mức độ lớn",
          "chút ít không đáng để ý",
          "chẳng thay đổi gì",
          "tăng nhẹ tượng trưng"
        ]
      },
      {
        "id": "adv_071",
        "word": "consistently",
        "level": "B2",
        "type": "adverb",
        "ipa": "/kənˈsɪs.tənt.li/",
        "meaningVi": "kiên định, trước sau như một",
        "collocations": "consistently deliver, perform consistently, consistently rank",
        "example": "Our QA team has consistently delivered defect-free releases over the past two years.",
        "exampleVi": "Nhóm đảm bảo chất lượng của chúng tôi luôn kiên định mang lại các bản phát hành không lỗi trong hai năm qua.",
        "optionsVi": [
          "kiên định, trước sau như một",
          "thất thường trồi sụt",
          "sớm nắng chiều mưa",
          "bấp bênh không ổn định"
        ]
      },
      {
        "id": "adv_072",
        "word": "drastically",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˈdræs.tɪ.kəl.i/",
        "meaningVi": "quyết liệt, mạnh mẽ sâu sắc, triệt để",
        "collocations": "drastically cut, change drastically, drastically reduce",
        "example": "The airline drastically cut ticket prices to stimulate international travel demand.",
        "exampleVi": "Hãng hàng không đã quyết liệt cắt giảm giá vé để kích cầu du lịch quốc tế.",
        "optionsVi": [
          "quyết liệt, mạnh mẽ sâu sắc, triệt để",
          "nhẹ nhàng cầm chừng",
          "dè dặt từng chút một",
          "không có tác động gì"
        ]
      },
      {
        "id": "adv_073",
        "word": "exclusively",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ɪkˈskluː.sɪv.li/",
        "meaningVi": "độc quyền, duy nhất, dành riêng",
        "collocations": "exclusively available, cater exclusively, deal exclusively with",
        "example": "This premium analytics feature is exclusively available to enterprise tier subscribers.",
        "exampleVi": "Tính năng phân tích cao cấp này độc quyền dành riêng cho các thuê bao gói doanh nghiệp.",
        "optionsVi": [
          "độc quyền, duy nhất, dành riêng",
          "phổ thông đại trà cho tất cả",
          "chia sẻ công khai tự do",
          "tạm thời mở rộng"
        ]
      },
      {
        "id": "adv_074",
        "word": "fundamentally",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˌfʌn.dəˈmen.təl.i/",
        "meaningVi": "về cơ bản, từ gốc rễ, bản chất cốt lõi",
        "collocations": "fundamentally flawed, fundamentally different, fundamentally alter",
        "example": "Artificial intelligence will fundamentally alter how businesses interpret customer feedback.",
        "exampleVi": "Trí tuệ nhân tạo sẽ thay đổi căn bản từ gốc rễ cách các doanh nghiệp diễn giải phản hồi khách hàng.",
        "optionsVi": [
          "về cơ bản, từ gốc rễ, bản chất cốt lõi",
          "bên ngoài hình thức bề mặt",
          "chỉ là tiểu tiết phụ trợ",
          "tạm thời chắp vá"
        ]
      },
      {
        "id": "adv_075",
        "word": "implicitly",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ɪmˈplɪs.ɪt.li/",
        "meaningVi": "ngầm hiểu, ngấm ngầm, không nói ra lời",
        "collocations": "implicitly acknowledge, trust implicitly, implicitly assume",
        "example": "By clicking accept, users implicitly agree to the updated terms of service.",
        "exampleVi": "Bằng việc bấm chấp nhận, người dùng ngầm đồng ý với các điều khoản dịch vụ cập nhật.",
        "optionsVi": [
          "ngầm hiểu, ngấm ngầm, không nói ra lời",
          "tuyên bố công khai bằng văn bản",
          "phủ nhận dứt khoát",
          "thông báo rầm rộ"
        ]
      },
      {
        "id": "adv_076",
        "word": "inevitably",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ɪnˈev.ɪ.tə.bli/",
        "meaningVi": "chắc chắn xảy ra, không thể tránh khỏi",
        "collocations": "inevitably lead to, inevitably result in, inevitably happen",
        "example": "Rapid urban growth inevitably leads to higher demand for public transportation.",
        "exampleVi": "Sự tăng trưởng đô thị nhanh chóng chắc chắn không tránh khỏi dẫn đến nhu cầu cao hơn về giao thông công cộng.",
        "optionsVi": [
          "chắc chắn xảy ra, không thể tránh khỏi",
          "hoàn toàn có thể phòng ngừa",
          "xác suất cực thấp",
          "ảo tưởng xa vời"
        ]
      },
      {
        "id": "adv_077",
        "word": "inherently",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ɪnˈhɪə.rənt.li/",
        "meaningVi": "vốn dĩ, vốn có từ bản chất sinh ra",
        "collocations": "inherently risky, inherently flawed, inherently valuable",
        "example": "Investing in early-stage startups is inherently risky but offers substantial potential returns.",
        "exampleVi": "Đầu tư vào các công ty khởi nghiệp giai đoạn đầu vốn dĩ tiềm ẩn rủi ro nhưng mang lại lợi nhuận tiềm năng lớn.",
        "optionsVi": [
          "vốn dĩ, vốn có từ bản chất sinh ra",
          "do tác động nhân tạo",
          "ngẫu nhiên vay mượn từ ngoài",
          "tạm thời phát sinh"
        ]
      },
      {
        "id": "adv_078",
        "word": "invariably",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ɪnˈveə.ri.ə.bli/",
        "meaningVi": "luôn luôn như vậy, không bao giờ thay đổi",
        "collocations": "invariably lead to, invariably true, almost invariably",
        "example": "Rushing a code deployment without unit testing invariably leads to preventable production outages.",
        "exampleVi": "Hấp tấp triển khai mã mà không kiểm thử đơn vị luôn luôn dẫn đến các sự cố gián đoạn có thể phòng ngừa.",
        "optionsVi": [
          "luôn luôn như vậy, không bao giờ thay đổi",
          "chỉ thỉnh thoảng mới bị",
          "có lúc này lúc khác",
          "hiếm hoi vô cùng"
        ]
      },
      {
        "id": "adv_079",
        "word": "ironically",
        "level": "B2",
        "type": "adverb",
        "ipa": "/aɪˈrɒn.ɪ.kəl.i/",
        "meaningVi": "trớ trêu thay, mỉa mai thay",
        "collocations": "ironically enough, ironically note, ironically prove",
        "example": "Ironically, the software update intended to fix stability issues caused an unexpected server crash.",
        "exampleVi": "Trớ trêu thay, bản cập nhật phần mềm nhằm sửa các lỗi ổn định lại gây ra sự cố sập máy chủ bất ngờ.",
        "optionsVi": [
          "trớ trêu thay, mỉa mai thay",
          "đúng như kỳ vọng",
          "hợp lý một cách hoàn hảo",
          "theo đúng ý nguyện"
        ]
      },
      {
        "id": "adv_080",
        "word": "markedly",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˈmɑː.kɪd.li/",
        "meaningVi": "rõ rệt, thấy rõ, đáng chú ý",
        "collocations": "markedly different, improve markedly, increase markedly",
        "example": "Customer satisfaction scores improved markedly after the support team reduced waiting times.",
        "exampleVi": "Điểm hài lòng của khách hàng đã cải thiện rõ rệt sau khi đội hỗ trợ giảm bớt thời gian chờ đợi.",
        "optionsVi": [
          "rõ rệt, thấy rõ, đáng chú ý",
          "mập mờ khó thấy",
          "chẳng thay đổi mảy may",
          "suy giảm lùi bước"
        ]
      },
      {
        "id": "adv_081",
        "word": "meticulously",
        "level": "B2",
        "type": "adverb",
        "ipa": "/məˈtɪk.jə.ləs.li/",
        "meaningVi": "tỉ mỉ, kỹ càng từng chi tiết nhỏ nhất",
        "collocations": "meticulously planned, meticulously document, verify meticulously",
        "example": "Every security protocol was meticulously documented before the regulatory compliance audit.",
        "exampleVi": "Mọi quy trình an ninh đều được ghi chép tỉ mỉ trước cuộc kiểm toán tuân thủ quy định.",
        "optionsVi": [
          "tỉ mỉ, kỹ càng từng chi tiết nhỏ nhất",
          "cẩu thả đại khái",
          "qua loa cho xong chuyện",
          "bỏ qua chi tiết quan trọng"
        ]
      },
      {
        "id": "adv_082",
        "word": "mutually",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˈmjuː.tʃu.ə.li/",
        "meaningVi": "lẫn nhau, cùng nhau, cả đôi bên",
        "collocations": "mutually beneficial, mutually exclusive, mutually agreed",
        "example": "Both companies negotiated a mutually beneficial partnership to expand global market distribution.",
        "exampleVi": "Cả hai công ty đã đàm phán một mối quan hệ đối tác cùng có lợi cho cả đôi bên để mở rộng phân phối toàn cầu.",
        "optionsVi": [
          "lẫn nhau, cùng nhau, cả đôi bên",
          "đơn phương một phía",
          "áp đặt ép buộc",
          "bất lợi cho đối phương"
        ]
      },
      {
        "id": "adv_083",
        "word": "notably",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˈnəʊ.tə.bli/",
        "meaningVi": "đáng chú ý là, đặc biệt là",
        "collocations": "most notably, notably absent, notably successful",
        "example": "Several key executives were notably absent from the quarterly earnings conference.",
        "exampleVi": "Một vài giám đốc điều hành chủ chốt đã vắng mặt đáng chú ý khỏi hội nghị báo cáo lợi nhuận hàng quý.",
        "optionsVi": [
          "đáng chú ý là, đặc biệt là",
          "bình thường không ai để ý",
          "chẳng có gì nổi bật",
          "hoàn toàn mờ nhạt"
        ]
      },
      {
        "id": "adv_084",
        "word": "overwhelmingly",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˌəʊ.vəˈwel.mɪŋ.li/",
        "meaningVi": "áp đảo, một cách choáng ngợp, vượt trội",
        "collocations": "overwhelmingly positive, vote overwhelmingly, overwhelmingly support",
        "example": "The community gave overwhelmingly positive feedback on the new open-source developer tools.",
        "exampleVi": "Cộng đồng đã đưa ra những phản hồi tích cực áp đảo về bộ công cụ nhà phát triển mã nguồn mở mới.",
        "optionsVi": [
          "áp đảo, một cách choáng ngợp, vượt trội",
          "thiểu số ít ỏi",
          "lưỡng lự nửa vời",
          "bị bác bỏ hoàn toàn"
        ]
      },
      {
        "id": "adv_085",
        "word": "paradoxically",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˌpær.əˈdɒk.sɪ.kəl.i/",
        "meaningVi": "nghịch lý là, trớ trêu ngược đời",
        "collocations": "paradoxically enough, paradoxically result in, seem paradoxically",
        "example": "Paradoxically, lowering subscription prices actually increased overall revenue through broader adoption.",
        "exampleVi": "Nghịch lý là, việc hạ giá gói thuê bao thực chất lại gia tăng tổng doanh thu nhờ số lượng người dùng đông đảo hơn.",
        "optionsVi": [
          "nghịch lý là, trớ trêu ngược đời",
          "dễ hiểu hiển nhiên",
          "theo lẽ tự nhiên thông thường",
          "đúng như sách giáo khoa"
        ]
      },
      {
        "id": "adv_086",
        "word": "predominantly",
        "level": "B2",
        "type": "adverb",
        "ipa": "/prɪˈdɒm.ɪ.nənt.li/",
        "meaningVi": "chiếm ưu thế, phần lớn, áp đảo",
        "collocations": "predominantly used, predominantly female, predominantly rural",
        "example": "The mobile app audience is predominantly young working professionals aged twenty-five to thirty-five.",
        "exampleVi": "Khán giả sử dụng ứng dụng di động phần lớn chiếm ưu thế là những chuyên gia trẻ đi làm từ 25 đến 35 tuổi.",
        "optionsVi": [
          "chiếm ưu thế, phần lớn, áp đảo",
          "chiếm tỷ lệ nhỏ giọt",
          "phân bổ rải rác đồng đều",
          "hoàn toàn vắng bóng"
        ]
      },
      {
        "id": "adv_087",
        "word": "presumably",
        "level": "B2",
        "type": "adverb",
        "ipa": "/prɪˈzjuː.mə.bli/",
        "meaningVi": "có lẽ là, phỏng đoán là, có thể giả định rằng",
        "collocations": "presumably because, presumably intended, will presumably continue",
        "example": "The package was presumably delivered to the reception desk while we were at lunch.",
        "exampleVi": "Gói hàng có lẽ đã được giao tới bàn lễ tân trong lúc chúng tôi đang đi ăn trưa.",
        "optionsVi": [
          "có lẽ là, phỏng đoán là, có thể giả định rằng",
          "đã được chứng thực bằng giấy tờ",
          "chắc chắn một trăm phần trăm",
          "chắc chắn bị hủy"
        ]
      },
      {
        "id": "adv_088",
        "word": "proactively",
        "level": "B2",
        "type": "adverb",
        "ipa": "/prəʊˈæk.tɪv.li/",
        "meaningVi": "chủ động đón đầu, tiên phong ngăn chặn",
        "collocations": "proactively address, manage proactively, identify proactively",
        "example": "Our support team proactively contacts customers whenever system telemetry detects recurring errors.",
        "exampleVi": "Đội hỗ trợ của chúng tôi chủ động liên hệ với khách hàng bất cứ khi nào hệ thống phát hiện lỗi lặp lại.",
        "optionsVi": [
          "chủ động đón đầu, tiên phong ngăn chặn",
          "nước đến chân mới nhảy",
          "chờ người khác nhắc nhở",
          "thờ ơ mặc kệ"
        ]
      },
      {
        "id": "adv_089",
        "word": "profoundly",
        "level": "B2",
        "type": "adverb",
        "ipa": "/prəˈfaʊnd.li/",
        "meaningVi": "sâu sắc, thâm thúy, mức độ cực kỳ sâu",
        "collocations": "profoundly affect, profoundly grateful, profoundly impact",
        "example": "The mentor's practical career advice profoundly influenced her long-term professional development.",
        "exampleVi": "Lời khuyên nghề nghiệp thực tế của người cố vấn đã ảnh hưởng sâu sắc đến sự phát triển sự nghiệp lâu dài của cô.",
        "optionsVi": [
          "sâu sắc, thâm thúy, mức độ cực kỳ sâu",
          "hời hợt thoảng qua",
          "vô hại không tác động",
          "nhạt nhòa dễ quên"
        ]
      },
      {
        "id": "adv_090",
        "word": "relentlessly",
        "level": "B2",
        "type": "adverb",
        "ipa": "/rɪˈlent.ləs.li/",
        "meaningVi": "không ngừng nghỉ, dai dẳng kiên quyết",
        "collocations": "work relentlessly, pursue relentlessly, push relentlessly",
        "example": "The research lab worked relentlessly for six months to synthesize the breakthrough compound.",
        "exampleVi": "Phòng thí nghiệm nghiên cứu đã làm việc không ngừng nghỉ suốt sáu tháng để tổng hợp hợp chất đột phá.",
        "optionsVi": [
          "không ngừng nghỉ, dai dẳng kiên quyết",
          "chóng vánh nản lòng",
          "bỏ cuộc giữa chừng",
          "lười nhác chần chừ"
        ]
      },
      {
        "id": "adv_091",
        "word": "remarkably",
        "level": "B2",
        "type": "adverb",
        "ipa": "/rɪˈmɑː.kə.bli/",
        "meaningVi": "đáng kinh ngạc, phi thường, nổi bật lạ kỳ",
        "collocations": "remarkably resilient, remarkably similar, remarkably successful",
        "example": "The local economy proved remarkably resilient despite unexpected macroeconomic headwinds.",
        "exampleVi": "Nền kinh tế địa phương đã chứng minh khả năng phục hồi phi thường đáng kinh ngạc bất chấp các cơn gió ngược kinh tế vĩ mô.",
        "optionsVi": [
          "đáng kinh ngạc, phi thường, nổi bật lạ kỳ",
          "tầm thường xoàng xĩnh",
          "đúng như thông thường",
          "yếu ớt sụp đổ nhanh"
        ]
      },
      {
        "id": "adv_092",
        "word": "rigorously",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˈrɪɡ.ər.əs.li/",
        "meaningVi": "nghiêm ngặt, khắt khe, chặt chẽ đúng chuẩn",
        "collocations": "rigorously tested, enforce rigorously, screen rigorously",
        "example": "All medical sensors are rigorously tested to ensure accurate patient vitals monitoring.",
        "exampleVi": "Tất cả các cảm biến y tế đều được kiểm định nghiêm ngặt để đảm bảo theo dõi chính xác các dấu hiệu sinh tồn của bệnh nhân.",
        "optionsVi": [
          "nghiêm ngặt, khắt khe, chặt chẽ đúng chuẩn",
          "lỏng lẻo tùy tiện",
          "đại khái bừa bãi",
          "bỏ qua các bước thẩm định"
        ]
      },
      {
        "id": "adv_093",
        "word": "seamlessly",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˈsiːm.ləs.li/",
        "meaningVi": "liền mạch, trơn tru mượt mà, không kẽ hở",
        "collocations": "integrate seamlessly, work seamlessly, blend seamlessly",
        "example": "The payment gateway integrates seamlessly with our existing shopping cart infrastructure.",
        "exampleVi": "Cổng thanh toán tích hợp liền mạch mượt mà với cơ sở hạ tầng giỏ hàng hiện tại của chúng tôi.",
        "optionsVi": [
          "liền mạch, trơn tru mượt mà, không kẽ hở",
          "chắp vá xung đột",
          "ngắt quãng gián đoạn",
          "lỗi thời không tương thích"
        ]
      },
      {
        "id": "adv_094",
        "word": "simultaneously",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˌsɪm.əlˈteɪ.ni.əs.li/",
        "meaningVi": "đồng thời, cùng một lúc",
        "collocations": "occur simultaneously, operate simultaneously, broadcast simultaneously",
        "example": "The hybrid cloud system can process thousands of financial transactions simultaneously.",
        "exampleVi": "Hệ thống đám mây lai có thể xử lý hàng ngàn giao dịch tài chính đồng thời cùng một lúc.",
        "optionsVi": [
          "đồng thời, cùng một lúc",
          "tuần tự từng bước",
          "ngắt quãng rời rạc",
          "cách nhau nhiều năm"
        ]
      },
      {
        "id": "adv_095",
        "word": "substantially",
        "level": "B2",
        "type": "adverb",
        "ipa": "/səbˈstæn.ʃəl.i/",
        "meaningVi": "đáng kể, về căn bản, cốt lõi",
        "collocations": "substantially higher, contribute substantially, vary substantially",
        "example": "Automated warehouse logistics substantially lowered order fulfillment overhead.",
        "exampleVi": "Hậu cần kho bãi tự động đã cắt giảm đáng kể chi phí vận hành xử lý đơn hàng.",
        "optionsVi": [
          "đáng kể, về căn bản, cốt lõi",
          "không đáng một xu",
          "chỉ mang tính tượng trưng",
          "dậm chân tại chỗ"
        ]
      },
      {
        "id": "adv_096",
        "word": "subtly",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˈsʌt.li/",
        "meaningVi": "tinh tế, khéo léo, khó nhận biết trực tiếp",
        "collocations": "subtly different, change subtly, subtly hint",
        "example": "The website's typography was subtly adjusted to improve long-form reading comfort.",
        "exampleVi": "Phông chữ của trang web đã được tinh chỉnh tinh tế khéo léo để tăng cảm giác thoải mái khi đọc bài dài.",
        "optionsVi": [
          "tinh tế, khéo léo, khó nhận biết trực tiếp",
          "lộ liễu thô thiển",
          "phô trương đập vào mắt",
          "vụng về vụng dại"
        ]
      },
      {
        "id": "adv_097",
        "word": "systematically",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˌsɪs.təˈmæt.ɪ.kəl.i/",
        "meaningVi": "có hệ thống, theo bài bản phương pháp",
        "collocations": "systematically analyze, review systematically, eliminate systematically",
        "example": "The security team systematically audited every endpoint to isolate the intrusion.",
        "exampleVi": "Nhóm an ninh mạng đã kiểm tra có hệ thống từng điểm cuối để cô lập vụ xâm nhập.",
        "optionsVi": [
          "có hệ thống, theo bài bản phương pháp",
          "lộn xộn ngẫu hứng",
          "tùy tiện không bài bản",
          "mò mẫm vu vơ"
        ]
      },
      {
        "id": "adv_098",
        "word": "thoroughly",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ˈθʌr.ə.li/",
        "meaningVi": "cẩn thận từ đầu đến cuối, thấu đáo triệt để",
        "collocations": "thoroughly investigate, clean thoroughly, understand thoroughly",
        "example": "Inspectors thoroughly examined the structural integrity of the bridge before reopening traffic.",
        "exampleVi": "Các thanh tra viên đã kiểm tra thấu đáo triệt để độ toàn vẹn cấu trúc của cây cầu trước khi mở lại giao thông.",
        "optionsVi": [
          "cẩn thận từ đầu đến cuối, thấu đáo triệt để",
          "cưỡi ngựa xem hoa",
          "sơ sài qua loa",
          "bỏ qua nửa chừng"
        ]
      },
      {
        "id": "adv_099",
        "word": "unanimously",
        "level": "B2",
        "type": "adverb",
        "ipa": "/juːˈnæn.ɪ.məs.li/",
        "meaningVi": "nhất trí, đồng lòng một trăm phần trăm",
        "collocations": "unanimously agreed, voted unanimously, unanimously elected",
        "example": "The committee unanimously voted to approve the sustainable building initiative.",
        "exampleVi": "Ủy ban đã nhất trí bỏ phiếu một trăm phần trăm thông qua sáng kiến xây dựng bền vững.",
        "optionsVi": [
          "nhất trí, đồng lòng một trăm phần trăm",
          "bất đồng sâu sắc",
          "chia rẽ phe phái",
          "đa số phản đối"
        ]
      },
      {
        "id": "adv_100",
        "word": "unquestionably",
        "level": "B2",
        "type": "adverb",
        "ipa": "/ʌnˈkwes.tʃə.nə.bli/",
        "meaningVi": "không thể nghi ngờ, chắc chắn đúng đắn",
        "collocations": "unquestionably true, unquestionably the best, prove unquestionably",
        "example": "Her exceptional leadership skills make her unquestionably the best candidate for CEO.",
        "exampleVi": "Kỹ năng lãnh đạo xuất sắc của cô khiến cô chắc chắn không thể nghi ngờ là ứng viên tốt nhất cho vị trí CEO.",
        "optionsVi": [
          "không thể nghi ngờ, chắc chắn đúng đắn",
          "đầy rẫy nghi vấn",
          "hoài nghi mơ hồ",
          "không đáng tin cậy"
        ]
      }
    ]
  }
];
