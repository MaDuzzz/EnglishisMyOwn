// Khoá học Tiếng Anh Giao Tiếp Qua Phim Kinh Điển & TV Shows (Cinema Shadowing Lab)
// Phương pháp: Nhắm mắt nghe ngấm ➔ Xem có phụ đề ➔ Mổ xẻ ngữ cảnh ➔ Shadowing nhại cảm xúc ➔ Quizz đục lỗ

export const COURSES_DATA = [
  {
    id: "course-friends",
    title: "Tiếng Anh Giao Tiếp Qua Phim Friends (New York Sitcom)",
    shortTitle: "Friends (Sitcom)",
    badge: "Phim Kinh Điển",
    color: "from-amber-500 via-orange-600 to-rose-600",
    icon: "☕",
    level: "A2 - B2",
    description: "Làm chủ ngữ điệu tự nhiên, tiếng lóng đời thường và sự hài hước hóm hỉnh của nhóm bạn 6 người nổi tiếng nhất lịch sử truyền hình New York.",
    bannerText: "Học qua những trích đoạn cười ra nước mắt của Ross, Rachel, Chandler, Joey, Monica và Phoebe.",
    modules: [
      {
        id: "mod-friends-1",
        title: "Phần 1: Những Tình Huống Dở Khóc Dở Cười Đời Thường",
        lessons: [
          {
            id: "friends-01-birthday-gift",
            title: "Trích đoạn 1: Quà sinh nhật thảm họa của Joey (Joey's Bad Birthday Gift)",
            episode: "Season 4 - Episode 6",
            duration: "02:23",
            videoDriveUrl: "https://drive.google.com/file/d/1NopDA2H8JFJrYfkgo_8N2tKtPCxsIjgN/preview",
            videoDriveId: "1NopDA2H8JFJrYfkgo_8N2tKtPCxsIjgN",
            description: "Joey khổ sở vì không biết mua quà sinh nhật cho bạn gái Kathy. Chiếc bút kiêm đồng hồ văn phòng phẩm của anh khiến Chandler phải ra tay cứu nguy.",
            context: "Joey bước vào căn hộ của Monica & Rachel với vẻ mặt mệt mỏi vì việc chọn quà cho bạn gái. Joey tự hào khoe món quà 'hai trong một' là chiếc bút kiêm đồng hồ mua vội ở tiệm OfficeMax. Chandler bàng hoàng và quyết định đích thân đi săn lùng một món quà ý nghĩa hơn.",
            keyVocabulary: [
              { word: "shop for", ipa: "/ʃɒp fɔːr/", meaningVi: "đi lùng mua quà/đồ cho ai đó", exampleInClip: "It is so hard to shop for girls." },
              { word: "two gifts in one", ipa: "/tuː ɡɪfts ɪn wʌn/", meaningVi: "hai món quà trong một (tích hợp đa năng)", exampleInClip: "It's two gifts in one." },
              { word: "while you're at it", ipa: "/waɪl jɔːr æt ɪt/", meaningVi: "tiện thể, nhân tiện đang làm việc đó", exampleInClip: "While you're at it, could you get her a card?" },
              { word: "owe you one", ipa: "/oʊ juː wʌn/", meaningVi: "nợ một ân huệ, mang ơn", exampleInClip: "Thanks man, I owe you one." }
            ],
            dialogue: [
              {
                id: "f0_1",
                speaker: "Joey",
                en: "Man, it is so hard to shop for girls.",
                vi: "Trời ạ, đi mua quà cho con gái khó không tưởng nổi.",
                tone: "Than thở, mệt mỏi, bất lực",
                pronunciationTip: "Nối âm nhanh 'it is' -> /ɪt ɪz/, nhấn mạnh từ cảm thán 'Man' và 'so hard'.",
                contextNote: "Joey là chàng trai đào hoa nhưng rất vụng về trong việc thấu hiểu tâm lý phụ nữ khi tặng quà."
              },
              {
                id: "f0_2",
                speaker: "Chandler",
                en: "Yes, it is... at OfficeMax.",
                vi: "Chuẩn luôn... nhất là khi chú đi mua ở tiệm văn phòng phẩm OfficeMax.",
                tone: "Châm chọc, mỉa mai đặc trưng của Chandler",
                pronunciationTip: "Ngắt nhẹ sau 'Yes, it is' rồi nhấn mạnh tên cửa hàng 'OfficeMax' với ngữ điệu trêu đùa.",
                contextNote: "Chandler nhìn thấy túi đồ văn phòng phẩm liền đoán ngay Joey lại mua đồ lặt vặt rẻ tiền làm quà sinh nhật."
              },
              {
                id: "f0_3",
                speaker: "Rachel",
                en: "What did you get her?",
                vi: "Anh đã mua tặng cô ấy cái gì thế?",
                tone: "Tò mò, hơi e ngại",
                pronunciationTip: "Lướt âm nhẹ: 'What did you' đọc nhanh thành /wʌ dɪdʒə/.",
                contextNote: "Rachel là chuyên gia thời trang nên rất tò mò Joey đã chọn món gì."
              },
              {
                id: "f0_4",
                speaker: "Joey",
                en: "A pen. It's two gifts in one. It's a pen that's also a clock! Huh?",
                vi: "Một cái bút! Một món quà được tận hai chức năng nhé: vừa là bút viết lại vừa là đồng hồ! Đỉnh chưa?",
                tone: "Hớn hở, tự hào như vừa phát minh ra kỳ tích",
                pronunciationTip: "Nhấn mạnh cụm 'two gifts in one' và kết thúc bằng tiếng cười 'Huh?' đòi hỏi sự đồng tình.",
                contextNote: "Joey ngây thơ nghĩ rằng phụ nữ sẽ thích những món đồ công nghệ mini đa năng kiểu trẻ con."
              },
              {
                id: "f0_5",
                speaker: "Chandler",
                en: "Huh-huh! You can't give her that.",
                vi: "Ha-ha! Chú không thể tặng cô ấy món đồ đó được đâu.",
                tone: "Cười trừ, lắc đầu dập tắt hy vọng",
                pronunciationTip: "Nhấn mạnh từ 'can't' với âm /æ/ căng và bật âm /t/ dứt khoát.",
                contextNote: "Chandler là bạn thân nhất của Joey và nhận ra ngay món quà này sẽ phá hỏng buổi sinh nhật."
              },
              {
                id: "f0_6",
                speaker: "Chandler",
                en: "Because she's not eleven! And it's not the seventh night of Hanukkah!",
                vi: "Bởi vì cô ấy đâu phải đứa bé 11 tuổi! Và hôm nay cũng chẳng phải đêm thứ 7 của lễ Hanukkah!",
                tone: "Gay gắt, hài hước, ví von châm biếm",
                pronunciationTip: "Nhấn mạnh vào số tuổi 'eleven' và đêm 'seventh night'.",
                contextNote: "Hanukkah là lễ hội Do Thái kéo dài 8 đêm, các đêm cuối mọi người thường chỉ tặng những món quà nhỏ linh tinh cho trẻ em."
              },
              {
                id: "f0_7",
                speaker: "Joey",
                en: "Sure it is! She needs a pen for work. She's writing, she turns it over... 'Whoa! It's time for my date with Joey!'",
                vi: "Tặng tốt chứ sao! Cô ấy cần bút đi làm này. Đang viết dở, lật ngược lại xem giờ... 'Ái chà, đến giờ hẹn hò với anh Joey rồi!'",
                tone: "Diễn tả điệu bộ siêu tự tin, ngây thơ hài hước",
                pronunciationTip: "Giọng Joey giả vờ làm bạn gái với tông giọng cao, hào hứng ở câu cuối.",
                contextNote: "Joey cố gắng hợp lý hóa món quà bằng một kịch bản tưởng tượng không tưởng."
              },
              {
                id: "f0_8",
                speaker: "Chandler",
                en: "For three years!?",
                vi: "Hẹn hò suốt 3 năm trời mà không có sinh nhật nào á!?",
                tone: "Mắt tròn xoe thảng thốt, không tin nổi vào tai mình",
                pronunciationTip: "Lên giọng cực mạnh ở cuối câu hỏi cảm thán: 'For three years!?'.",
                contextNote: "Joey thú nhận cô bạn gái cũ Angela Delvecchio trong 3 năm quen nhau chưa từng có sinh nhật vì anh chẳng bao giờ nhớ."
              },
              {
                id: "f0_9",
                speaker: "Joey",
                en: "Thanks, man. And oh, while you're at it, could you get her a card?",
                vi: "Cảm ơn bạn hiền! À tiện thể thì mua hộ tao tấm thiệp luôn nhé?",
                tone: "Thản nhiên nhờ vả, tranh thủ lợi dụng lòng tốt của bạn",
                pronunciationTip: "Nối âm nhanh: 'while you're at it' -> /waɪl jɔːr æt ɪt/.",
                contextNote: "Cụm từ siêu phổ biến trong giao tiếp hàng ngày khi muốn nhờ ai làm thêm việc gì tiện đường."
              },
              {
                id: "f0_10",
                speaker: "Joey",
                en: "A book? Is it a book that's also a safe?",
                vi: "Sách á? Có phải loại sách rỗng ruột kiêm két sắt giấu tiền không?",
                tone: "Háo hức, vẫn ám ảnh với tư duy đồ dùng đa năng",
                pronunciationTip: "Lên giọng ở từ 'safe' thể hiện sự tò mò.",
                contextNote: "Khi Chandler mang về cuốn sách kinh điển The Velveteen Rabbit, Joey vẫn nghĩ nó là đồ chơi giấu đồ."
              },
              {
                id: "f0_11",
                speaker: "Joey",
                en: "You got it. Thanks man. Thanks for doing this, I owe you one.",
                vi: "Nhất trí luôn. Cảm ơn chú em nhé, tao nợ chú một lần này đấy!",
                tone: "Chân thành, ấm áp, biết ơn",
                pronunciationTip: "Cụm 'I owe you one' nói liền mạch: /aɪ oʊ juː wʌn/.",
                contextNote: "Cách nói cảm ơn phổ biến nhất của người Mỹ khi bạn bè giúp đỡ mình việc quan trọng."
              }
            ],
            goldenPhrases: [
              {
                phrase: "Two gifts in one!",
                meaning: "Hai trong một! (Một công đôi việc)",
                usageTip: "Dùng để mô tả đồ dùng hoặc giải pháp đa năng, tiện lợi."
              },
              {
                phrase: "While you're at it, could you...?",
                meaning: "Tiện thể lúc đang làm việc đó thì làm hộ tôi... nhé?",
                usageTip: "Mẫu câu nhờ vả tự nhiên và lịch sự bậc nhất trong giao tiếp đời thường."
              },
              {
                phrase: "I owe you one.",
                meaning: "Tôi nợ bạn một lần nhé! (Tôi sẽ đền đáp ân huệ này)",
                usageTip: "Dùng khi bạn bè hoặc đồng nghiệp ra tay gánh vác việc khó giúp bạn."
              }
            ],
            quizzes: [
              {
                type: "cloze",
                question: "Joey giải thích với mọi người về món quà chiếc bút kiêm đồng hồ:",
                sentence: "A pen. It's two gifts in ______! It's a pen that's also a clock!",
                options: ["one", "two", "all", "half"],
                correctIndex: 0,
                explanation: "Cụm từ 'two gifts in one' nghĩa là 2 món quà trong một sản phẩm duy nhất."
              },
              {
                type: "cloze",
                question: "Điền cụm từ nhờ vả tự nhiên của Joey khi nhờ Chandler mua hộ tấm thiệp:",
                sentence: "Thanks, man. And oh, ______ you're at it, could you get her a card?",
                options: ["while", "since", "because", "until"],
                correctIndex: 0,
                explanation: "'While you're at it' là thành ngữ chỉ việc nhân tiện lúc đang đi/đang làm thì làm thêm việc gì đó."
              },
              {
                type: "vocab",
                question: "Câu nói 'I owe you one' của Joey dành cho Chandler mang ý nghĩa gì?",
                options: [
                  "Tôi nợ bạn một ân huệ / Lần sau tôi sẽ đền đáp bạn",
                  "Tôi nợ bạn một đô la tiền mặt",
                  "Tôi sẽ đòi lại một món nợ cũ",
                  "Bạn phải trả lại đồ cho tôi"
                ],
                correctIndex: 0,
                explanation: "'I owe you one' (I owe you a favor) là câu nói cảm ơn quen thuộc khi ai đó giúp bạn việc lớn."
              }
            ]
          },
          {
            id: "friends-02-pivot",
            title: "Trích đoạn 2: Ross khiêng sofa và câu thoại bất hủ 'Pivot!'",
            episode: "Season 5 - Episode 11",
            duration: "02:30",
            videoDriveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptgms/preview",
            videoDriveId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptgms",
            description: "Ross kiên quyết không trả 4$ phí vận chuyển sofa và nhờ Chandler cùng Rachel khiêng lên tầng qua lối cầu thang hẹp.",
            context: "Ross vừa mua chiếc sofa đắt tiền và vẽ sẵn sơ đồ hình học để khiêng lên cầu thang. Tuy nhiên thực tế chiếc ghế bị kẹt cứng giữa cầu thang hẹp. Ross liên tục chỉ đạo trong hoảng loạn trong khi Chandler và Rachel kiệt sức.",
            keyVocabulary: [
              { word: "pivot", ipa: "/ˈpɪv.ət/", meaningVi: "xoay quanh một trục cố định", exampleInClip: "Pivot! Pivot! Pivot!" },
              { word: "turn it up", ipa: "/tɜːn ɪt ʌp/", meaningVi: "dựng đứng lên (hoặc vặn to lên)", exampleInClip: "Okay, turn it up. Turn it!" },
              { word: "stuck", ipa: "/stʌk/", meaningVi: "bị kẹt cứng, không nhúc nhích được", exampleInClip: "I think it's stuck!" },
              { word: "unbend", ipa: "/ʌnˈbend/", meaningVi: "duỗi thẳng ra, không gập lại nữa", exampleInClip: "My arm doesn't unbend that way!" }
            ],
            dialogue: [
              {
                id: "f1_1",
                speaker: "Ross",
                en: "Come on, Chandler! Just lift it straight up and turn it!",
                vi: "Nhanh lên Chandler! Chỉ cần nhấc bổng thẳng lên rồi xoay thôi mà!",
                tone: "Hối hả, mất kiên nhẫn, ra vẻ hiểu biết",
                pronunciationTip: "Nối âm nhanh: 'lift it straight up' -> /lɪft ɪt streɪ tʌp/.",
                contextNote: "Ross luôn cho rằng bản thân có tư duy toán học chuẩn xác nên đưa ra chỉ dẫn như một kỹ sư."
              },
              {
                id: "f1_2",
                speaker: "Chandler",
                en: "I am lifting! I'm pretty sure my spine is about to snap!",
                vi: "Tôi đang nhấc đây thây! Tôi dám chắc cái cột sống của tôi sắp gãy đôi rồi!",
                tone: "Châm biếm, mỉa mai, gồng mình vì quá nặng",
                pronunciationTip: "Nhấn mạnh cực mạnh vào từ 'am' trong 'I AM lifting' để phản bác lại sự nghi ngờ của Ross.",
                contextNote: "Phong cách đặc trưng của Chandler: dùng cách nói cường điệu (hyperbole) để thể hiện sự bất lực."
              },
              {
                id: "f1_3",
                speaker: "Ross",
                en: "Okay, now pivot! Pivot! Pivooot!",
                vi: "Được rồi, giờ xoay góc đi! Xoay! Xoaayyy!",
                tone: "Gào thét cuống cuồng, âm vực cao dần đến nghẹt thở",
                pronunciationTip: "Âm /ɪ/ ngắn và bật âm /t/ dứt khoát. Ross kéo dài nguyên âm ở lần thứ 3 tạo hiệu ứng hài kịch.",
                contextNote: "Câu thoại nổi tiếng nhất trong lịch sử phim sitcom truyền hình Mỹ."
              },
              {
                id: "f1_4",
                speaker: "Chandler",
                en: "Shut up! Shut up! Shut up!",
                vi: "Im đi! Câm mồm đi! Im ngay đi!",
                tone: "Bực tức bùng nổ, gào lên đáp trả",
                pronunciationTip: "Nối âm kinh điển: 'Shut up' đọc là /ʃʌ tʌp/ với âm 't' mềm kiểu Mỹ.",
                contextNote: "Chandler không thể chịu nổi việc Ross cứ đứng hét một từ vô nghĩa trong khi ghế thì kẹt cứng."
              },
              {
                id: "f1_5",
                speaker: "Rachel",
                en: "I don't think it's going to pivot anymore, Ross.",
                vi: "Em nghĩ là nó không thể nào xoay thêm được phân nào nữa đâu Ross.",
                tone: "Bình thản, mệt mỏi nhưng chấp nhận thực tế",
                pronunciationTip: "Ngắt nhẹ sau 'anymore' và hạ giọng nhẹ nhàng ở tên 'Ross'.",
                contextNote: "Rachel là tiếng nói của lý trí kéo hai anh chàng về thực tại chiếc ghế đã kẹt thành hình chữ V."
              }
            ],
            goldenPhrases: [
              {
                phrase: "Pivot! Pivot! Pivot!",
                meaning: "Xoay góc đi! / Chuyển hướng gấp!",
                usageTip: "Dùng để đùa vui khi cả nhóm đang gặp bế tắc và cần xoay sở hướng giải quyết mới."
              },
              {
                phrase: "I'm pretty sure my spine is about to snap!",
                meaning: "Tôi dám chắc lưng/cột sống tôi sắp gãy đôi rồi!",
                usageTip: "Cách nói cường điệu hài hước khi bạn phải khiêng vác hoặc làm việc gì đó quá sức."
              }
            ],
            quizzes: [
              {
                type: "cloze",
                question: "Điền từ đúng vào câu thoại kinh điển của Ross khi chỉ đạo khiêng sofa lên cầu thang:",
                sentence: "Okay, now ______! ______! Pivooot!",
                options: ["Pivot", "Push", "Rotate", "Turn"],
                correctIndex: 0,
                explanation: "Ross liên tục hét từ 'Pivot' (Xoay quanh trục) tạo nên cảnh quay hài kịch huyền thoại của Friends."
              },
              {
                type: "cloze",
                question: "Chandler phản bác lại sự chỉ đạo phiền toái của Ross bằng câu nói nào?",
                sentence: "______ up! ______ up! ______ up!",
                options: ["Shut", "Stand", "Lift", "Hold"],
                correctIndex: 0,
                explanation: "Chandler hét lên 'Shut up! Shut up! Shut up!' vì không thể chịu nổi tiếng thét lặp đi lặp lại của Ross."
              },
              {
                type: "vocab",
                question: "Cụm từ 'turn it up' trong ngữ cảnh khiêng vác đồ đạc có nghĩa là gì?",
                options: [
                  "Dựng đứng cạnh ghế lên",
                  "Vặn âm lượng loa to lên",
                  "Bỏ chiếc ghế xuống đất",
                  "Đẩy chiếc ghế về phía trước"
                ],
                correctIndex: 0,
                explanation: "Trong không gian hẹp của cầu thang, 'turn it up' có nghĩa là dựng đứng chiều dài chiếc ghế lên để lách qua khúc cua."
              }
            ]
          },
          {
            id: "friends-03-joey-food",
            title: "Trích đoạn 3: Joey không bao giờ chia đồ ăn 'Joey doesn't share food!'",
            episode: "Season 10 - Episode 9",
            duration: "02:15",
            videoDriveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptgms/preview",
            videoDriveId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptgms",
            description: "Joey đi hẹn hò với một cô gái xinh đẹp nhưng tức giận vì cô ấy với tay lấy vài cọng khoai tây chiên trên đĩa của anh.",
            context: "Phoebe mai mối một cô gái cho Joey. Mọi chuyện diễn ra rất lãng mạn cho đến khi cô gái tự ý lấy khoai tây chiên của anh. Joey về nhà tâm sự với Phoebe với vẻ mặt cực kỳ nghiêm túc.",
            keyVocabulary: [
              { word: "share", ipa: "/ʃeər/", meaningVi: "chia sẻ, dùng chung", exampleInClip: "Joey doesn't share food!" },
              { word: "plate", ipa: "/pleɪt/", meaningVi: "đĩa thức ăn", exampleInClip: "Right off my plate!" },
              { word: "stuffing", ipa: "/ˈstʌf.ɪŋ/", meaningVi: "nhồi nhét, ăn ngấu nghiến", exampleInClip: "Stuffing her face!" },
              { word: "deal breaker", ipa: "/ˈdiːlˌbreɪ.kər/", meaningVi: "yếu tố làm hỏng thỏa thuận/mối quan hệ", exampleInClip: "Is that a deal breaker for you?" }
            ],
            dialogue: [
              {
                id: "f2_1",
                speaker: "Phoebe",
                en: "So how was your date with Sarah last night?",
                vi: "Thế buổi hẹn tối qua của cậu với Sarah thế nào rồi?",
                tone: "Tò mò, vui vẻ, mong đợi tin tốt",
                pronunciationTip: "Nối âm: 'how was your' -> /haʊ wəzjər/.",
                contextNote: "Phoebe là người đứng ra sắp xếp buổi hẹn hò này cho Joey."
              },
              {
                id: "f2_2",
                speaker: "Joey",
                en: "It was good... until she reached over and took some of my fries!",
                vi: "Mọi thứ đều ổn... cho đến khi cô ấy với tay sang và lấy mất mấy cọng khoai chiên của tớ!",
                tone: "Nghiêm trọng hóa vấn đề, đau khổ như vừa bị phản bội",
                pronunciationTip: "Nhấn mạnh từ 'my fries' với ánh mắt sửng sốt.",
                contextNote: "Đối với Joey Tribbiani, đồ ăn là nguyên tắc thiêng liêng số một, bất khả xâm phạm."
              },
              {
                id: "f2_3",
                speaker: "Phoebe",
                en: "Oh, come on! She took a couple of fries? That's not a crime!",
                vi: "Thôi nào! Cô ấy chỉ lấy có hai ba cọng khoai tây thôi mà? Đâu phải là phạm tội ác tày trời đâu!",
                tone: "Bật cười, coi đó là chuyện vặt vãnh",
                pronunciationTip: "Cụm 'come on' nối âm nhẹ, giọng điệu nâng lên thể hiện sự khó hiểu.",
                contextNote: "Mọi người bình thường đều thấy việc chia sẻ một ít khoai chiên trong buổi hẹn là rất dễ thương."
              },
              {
                id: "f2_4",
                speaker: "Joey",
                en: "Look, Phoebe, JOEY DOESN'T SHARE FOOD!",
                vi: "Nghe này Phoebe, JOEY KHÔNG BAO GIỜ CHIA SẺ ĐỒ ĂN!",
                tone: "Dứt khoát, tự xưng tên ở ngôi thứ 3, tuyên ngôn như một đạo luật",
                pronunciationTip: "Nói to từng từ một cách rành rọt, nhấn mạnh trọng âm vào 'JOEY' và 'SHARE FOOD'.",
                contextNote: "Joey nói về bản thân ở ngôi thứ ba như một cách khẳng định bản năng nguyên thủy không thể thay đổi."
              }
            ],
            goldenPhrases: [
              {
                phrase: "Joey doesn't share food!",
                meaning: "Tôi không bao giờ chia đồ ăn cho ai cả!",
                usageTip: "Câu nói đùa kinh điển khi bạn bè xin ăn ké đồ ăn của bạn tại nhà hàng hoặc rạp chiếu phim."
              },
              {
                phrase: "That's a deal breaker!",
                meaning: "Đó là điều tối kỵ không thể chấp nhận được!",
                usageTip: "Dùng khi một khuyết điểm nhỏ của đối phương khiến bạn quyết định dừng mối quan hệ."
              }
            ],
            quizzes: [
              {
                type: "cloze",
                question: "Điền câu tuyên ngôn bảo vệ đĩa thức ăn nổi tiếng của Joey Tribbiani:",
                sentence: "Look, Phoebe, Joey doesn't ______ food!",
                options: ["share", "give", "like", "cook"],
                correctIndex: 0,
                explanation: "Câu nói kinh điển là: 'Joey doesn't share food!' (Joey không bao giờ chia sẻ đồ ăn)."
              },
              {
                type: "vocab",
                question: "Trong tiếng Anh giao tiếp và hẹn hò, 'deal breaker' mang ý nghĩa là gì?",
                options: [
                  "Điều tối kỵ khiến bạn quyết định chấm dứt mối quan hệ",
                  "Một món quà đắt tiền trong buổi hẹn đầu tiên",
                  "Một trò chơi mạo hiểm phá vỡ sự im lặng",
                  "Hành động trả tiền hóa đơn cho đối phương"
                ],
                correctIndex: 0,
                explanation: "'Deal breaker' là một yếu tố hoặc thói quen xấu của đối phương khiến bạn không thể tiếp tục tiến xa."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "course-himym",
    title: "Tiếng Anh Hẹn Hò & Tự Tin Qua How I Met Your Mother",
    shortTitle: "HIMYM (Giao Tiếp)",
    badge: "Hiện Đại & Hài Hước",
    color: "from-blue-600 via-indigo-600 to-violet-700",
    icon: "🍸",
    level: "B1 - B2",
    description: "Học cách nói chuyện lôi cuốn, xây dựng sự tự tin đỉnh cao và kỹ năng kể chuyện (storytelling) cuốn hút cùng Barney Stinson & Ted Mosby.",
    bannerText: "Học các câu châm ngôn hài hước, phản xạ bắt chuyện ở quán bar, công sở và nghệ thuật giữ bầu không khí náo nhiệt.",
    modules: [
      {
        id: "mod-himym-1",
        title: "Phần 1: Nghệ Thuật Tự Tin & Bắt Chuyện Tự Nhiên",
        lessons: [
          {
            id: "himym-01-suit-up",
            title: "Trích đoạn 1: Barney Stinson: 'Suit up!' & Triết lý sống Legendary",
            episode: "Season 1 - Episode 1",
            duration: "02:20",
            videoDriveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptgms/preview",
            videoDriveId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptgms",
            description: "Barney thuyết phục Ted thay chiếc áo phông xuề xòa để diện bộ vest sang trọng trước khi bước chân ra quán bar McLaren's.",
            context: "Ted đang rầu rĩ vì mãi chưa tìm thấy người bạn đời lý tưởng. Barney bước vào với phong thái hào hoa, yêu cầu Ted phải 'mặc vest' để thay đổi toàn bộ năng lượng và sẵn sàng cho một đêm huyền thoại.",
            keyVocabulary: [
              { word: "suit up", ipa: "/suːt ʌp/", meaningVi: "mặc vest lịch lãm vào", exampleInClip: "Ted, suit up!" },
              { word: "legendary", ipa: "/ˈledʒ.ən.dri/", meaningVi: "huyền thoại, đỉnh cao xuất sắc", exampleInClip: "It's gonna be legen... wait for it... dary!" },
              { word: "wingman", ipa: "/ˈwɪŋ.mæn/", meaningVi: "bạn đồng hành hỗ trợ cưa cẩm", exampleInClip: "I'm your wingman tonight." },
              { word: "have you met Ted", ipa: "/hæv juː met ted/", meaningVi: "câu mồi bắt chuyện kinh điển", exampleInClip: "Haaaaave you met Ted?" }
            ],
            dialogue: [
              {
                id: "h1_1",
                speaker: "Barney",
                en: "Ted, what are you wearing? Where is your suit?",
                vi: "Ted, cậu đang mặc cái thứ gì trên người thế kia? Bộ vest của cậu đâu rồi?",
                tone: "Sốc, thất vọng một cách kịch tính",
                pronunciationTip: "Nhấn mạnh vào 'What' và 'Where' để biểu lộ sự ngạc nhiên tột độ.",
                contextNote: "Barney coi việc mặc vest (suit) là tôn chỉ hàng đầu của người đàn ông thành đạt và tự tin."
              },
              {
                id: "h1_2",
                speaker: "Ted",
                en: "I'm not wearing a suit to go down to the bar, Barney.",
                vi: "Tớ không có mặc vest chỉ để bước xuống quán rượu dưới nhà đâu Barney.",
                tone: "Mệt mỏi, phản đối, thấy sự việc không cần thiết",
                pronunciationTip: "Hạ thấp âm điệu ở cuối câu 'Barney' để thể hiện sự ngán ngẩm.",
                contextNote: "Ted chỉ muốn xuống quán bar quen thuộc dưới nhà uống bia bình dân."
              },
              {
                id: "h1_3",
                speaker: "Barney",
                en: "Suit up! Tonight will be legen... wait for it... dary! Legendary!",
                vi: "Mặc vest vào ngay! Đêm nay sẽ là một huyền... đợi một chút nào... thoại! Huyền thoại!",
                tone: "Năng lượng bùng nổ, truyền cảm hứng mạnh mẽ, tự tin 100%",
                pronunciationTip: "Ngắt nghỉ có chủ đích ở cụm 'wait for it' để tạo sự hồi hộp cho người nghe trước khi kết thúc bằng 'dary'.",
                contextNote: "Cụm catchphrase tạo nên thương hiệu của nhân vật Barney Stinson trong suốt 9 mùa phim."
              },
              {
                id: "h1_4",
                speaker: "Barney",
                en: "Because your best friend is about to teach you how to live!",
                vi: "Bởi vì người bạn thân nhất của cậu sắp dạy cho cậu biết thế nào mới là tận hưởng cuộc sống!",
                tone: "Kiêu hãnh, tự mãn nhưng vô cùng ấm áp và chân thành",
                pronunciationTip: "Nối âm: 'teach you how to' -> /tiːtʃ juː haʊ tə/.",
                contextNote: "Dù nói năng có phần ngạo mạn nhưng Barney thực sự muốn Ted vui vẻ và thoát khỏi sự ủ rũ."
              }
            ],
            goldenPhrases: [
              {
                phrase: "Suit up!",
                meaning: "Mặc vest chỉnh chu vào! / Chuẩn bị chiến thôi!",
                usageTip: "Dùng để kích hoạt tinh thần anh em trước một sự kiện quan trọng hoặc buổi tiệc tùng lớn."
              },
              {
                phrase: "Legen... wait for it... dary!",
                meaning: "Đỉnh của chóp / Huyền thoại!",
                usageTip: "Cách nói tạo sự kịch tính và thu hút toàn bộ sự chú ý của mọi người vào câu chuyện bạn sắp kể."
              }
            ],
            quizzes: [
              {
                type: "cloze",
                question: "Điền cụm từ tạo kịch tính kinh điển của Barney khi miêu tả về một đêm tiệc:",
                sentence: "Tonight will be legen... ______ for it... dary!",
                options: ["wait", "look", "listen", "stay"],
                correctIndex: 0,
                explanation: "Barney luôn ngắt từ 'legendary' ra làm đôi và chèn thêm câu 'wait for it' (hãy chờ xem) ở giữa."
              },
              {
                type: "vocab",
                question: "Trong văn hóa hội thoại tiếng Anh, từ 'Wingman' nghĩa là gì?",
                options: [
                  "Người bạn đi cùng để hỗ trợ, giúp bạn bắt chuyện và tạo ấn tượng tốt",
                  "Một phi công lái máy bay quân sự",
                  "Người bảo vệ đứng gác cửa quán bar",
                  "Người tài xế lái xe đưa cả nhóm về nhà"
                ],
                correctIndex: 0,
                explanation: "'Wingman' là tiếng lóng chỉ người bạn đồng hành cực kỳ tin cậy, sẵn sàng hỗ trợ bạn trong các cuộc trò chuyện xã giao."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "course-masterchef",
    title: "Tiếng Anh Áp Lực & Quyết Đoán Cùng MasterChef Global",
    shortTitle: "MasterChef (Leadership)",
    badge: "Phản Xạ Nhanh",
    color: "from-emerald-600 via-teal-600 to-cyan-700",
    icon: "🔪",
    level: "B1 - B2",
    description: "Học cách giao tiếp dứt khoát dưới áp lực khủng khiếp, cách ra lệnh, phản hồi nhanh và kỹ năng lãnh đạo đội nhóm cùng Gordon Ramsay.",
    bannerText: "Rèn giũa khả năng lắng nghe và nói tiếng Anh với tốc độ 120-150 từ/phút trong môi trường nhà bếp chuyên nghiệp.",
    modules: [
      {
        id: "mod-mc-1",
        title: "Phần 1: Giao Tiếp & Điều Phối Dưới Áp Lực Thời Gian",
        lessons: [
          {
            id: "mc-01-kitchen-rush",
            title: "Trích đoạn 1: Gordon Ramsay điều phối phòng bếp: 'Yes, Chef!'",
            episode: "MasterChef Global - Restaurant Takeover",
            duration: "02:40",
            videoDriveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptgms/preview",
            videoDriveId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptgms",
            description: "Bếp trưởng Gordon Ramsay kiểm tra các món ăn trước khi đưa ra cho khách và yêu cầu toàn bộ đội ngũ phải giao tiếp rõ ràng từng giây.",
            context: "Nhà hàng bước vào giờ cao điểm với hàng chục đơn hàng dồn dập. Đội trưởng bối rối và các thành viên nấu chậm trễ. Gordon Ramsay bước vào chấn chỉnh văn hóa giao tiếp và yêu cầu sự dứt khoát tuyệt đối.",
            keyVocabulary: [
              { word: "on the fly", ipa: "/ɒn ðə flaɪ/", meaningVi: "ngay lập tức, làm gấp rút", exampleInClip: "I need two risottos on the fly!" },
              { word: "raw", ipa: "/rɔː/", meaningVi: "sống, chưa chín", exampleInClip: "It's completely raw in the middle!" },
              { word: "communicate", ipa: "/kəˈmjuː.nɪ.keɪt/", meaningVi: "giao tiếp, thông báo cho nhau", exampleInClip: "You have to communicate with each other!" },
              { word: "yes chef", ipa: "/jes ʃef/", meaningVi: "rõ thưa bếp trưởng (xác nhận quân lệnh)", exampleInClip: "Yes, Chef!" }
            ],
            dialogue: [
              {
                id: "mc1_1",
                speaker: "Gordon Ramsay",
                en: "Listen to me! Table four, two scallops, two beef wellingtons. How long on the beef?",
                vi: "Nghe tôi nói đây! Bàn số bốn, hai đĩa sò điệp, hai phần bò wellington. Món bò còn bao nhiêu phút nữa?",
                tone: "Đanh thép, dứt khoát, âm lượng lớn, kiểm soát hoàn toàn căn bếp",
                pronunciationTip: "Rút gọn 'How long on the beef?' thay vì hỏi dài dòng 'How much time do you need for the beef?'.",
                contextNote: "Trong môi trường làm việc tốc độ cao, câu hỏi ngắn gọn trực tiếp giúp tiết kiệm từng giây quý giá."
              },
              {
                id: "mc1_2",
                speaker: "Team Captain",
                en: "Uh... about... maybe three to four minutes, Chef?",
                vi: "Dạ... khoảng... chắc là ba đến bốn phút nữa thưa Bếp trưởng?",
                tone: "Ngập ngừng, thiếu tự tin, giọng điệu nâng lên ở cuối câu như một câu hỏi",
                pronunciationTip: "Chứa nhiều từ đệm 'Uh', 'maybe' thể hiện sự lúng túng và mất kiểm soát thời gian.",
                contextNote: "Cách trả lời tối kỵ trong công việc: người quản lý cần một con số chính xác chứ không phải sự phỏng đoán mông lung."
              },
              {
                id: "mc1_3",
                speaker: "Gordon Ramsay",
                en: "Maybe? Don't tell me 'maybe'! Is it three minutes or four minutes? Be precise!",
                vi: "Chắc là à? Đừng có nói với tôi từ 'chắc là'! Ba phút hay là bốn phút? Phải chính xác vào!",
                tone: "Gay gắt, chuẩn xác, không khoan nhượng với sự đại khái",
                pronunciationTip: "Nhấn mạnh đặc biệt vào từ 'precise' /prɪˈsaɪs/ với âm /s/ đuôi sắc lẹm.",
                contextNote: "Ramsay dạy bài học cốt lõi: Trong công việc đòi hỏi chất lượng đỉnh cao, sự mơ hồ sẽ kéo theo sự sụp đổ của cả dây chuyền."
              },
              {
                id: "mc1_4",
                speaker: "Team Captain",
                en: "Three minutes, Chef! Ready in three minutes!",
                vi: "Ba phút nữa thưa Bếp trưởng! Sẵn sàng ra đĩa trong ba phút nữa!",
                tone: "Dứt khoát, to, rõ ràng, mắt nhìn thẳng",
                pronunciationTip: "Nói với tốc độ nhanh nhưng âm tiết dứt khoát, không còn ngắc ngứ.",
                contextNote: "Thí sinh đã lấy lại sự tự tin và xác lập cam kết rõ ràng với người dẫn dắt."
              }
            ],
            goldenPhrases: [
              {
                phrase: "Be precise!",
                meaning: "Hãy chính xác vào! (Đừng nói chung chung)",
                usageTip: "Dùng khi quản lý dự án yêu cầu cấp dưới báo cáo deadline hoặc dữ liệu số liệu cụ thể."
              },
              {
                phrase: "On the fly!",
                meaning: "Làm ngay lập tức không chậm trễ!",
                usageTip: "Tiếng lóng trong công việc khi cần xử lý gấp một việc phát sinh ngoài dự kiến."
              }
            ],
            quizzes: [
              {
                type: "cloze",
                question: "Gordon Ramsay đòi hỏi các đầu bếp phải trả lời thời gian cụ thể bằng câu nói nào?",
                sentence: "Don't tell me 'maybe'! Be ______!",
                options: ["precise", "fast", "silent", "gentle"],
                correctIndex: 0,
                explanation: "Ramsay yêu cầu 'Be precise!' (Phải chính xác vào!) thay vì trả lời nước đôi 3 hay 4 phút."
              },
              {
                type: "vocab",
                question: "Cụm thành ngữ 'on the fly' trong môi trường làm việc nhà hàng/công nghệ có nghĩa là gì?",
                options: [
                  "Làm ngay tức khắc trong lúc đang di chuyển/vận hành",
                  "Bắt một con ruồi đang bay",
                  "Trì hoãn công việc sang ngày hôm sau",
                  "Giao việc cho người khác làm hộ"
                ],
                correctIndex: 0,
                explanation: "'On the fly' nghĩa là làm nhanh chóng ngay lập tức trong tình huống gấp gáp mà không cần chuẩn bị trước nhiều."
              }
            ]
          }
        ]
      }
    ]
  }
];
