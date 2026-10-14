// Dữ liệu các Khoá học (Tiếng Anh giao tiếp công việc IT + AWS + CNCF)
export const COURSES_DATA = [
  {
    id: "eng-it-comm",
    title: "Tiếng Anh Giao Tiếp Cho Dân Kỹ Thuật (IT Communication)",
    badge: "English Focus",
    color: "from-blue-600 to-indigo-700",
    description: "Giáo trình thực chiến giúp kỹ sư tự tin nói chuyện trong Daily Standup, Sprint Planning, báo cáo sự cố và thảo luận kiến trúc.",
    modules: [
      {
        id: "mod-1",
        title: "Module 1: Daily Standup & Báo cáo tiến độ",
        lessons: [
          {
            id: "eng-les-01",
            title: "Bài 1: Present Perfect vs. Past Simple trong báo cáo công việc",
            duration: "25 phút",
            videoDriveId: "1p_e_m-P_L_E_D_R_I_V_E_I_D_1", // ID Google Drive mẫu
            notes: "Tập trung phân biệt rõ: Khi nào dùng thì Quá khứ đơn (mốc thời gian cụ thể: yesterday, 2 hours ago) và Hiện tại hoàn thành (kết quả còn liên quan đến hiện tại: have deployed, has fixed).",
            aiPrompt: `You are a friendly, patient English speaking tutor practicing with an IT engineer.
I want to build confidence speaking in daily standups and work discussions.

[CURRENT LESSON CONTEXT]
- Topic: Daily work tasks, bug fixing & sprint updates
- Target Grammar: Present Perfect (have/has + V3) vs. Past Simple (V2/ed).

[SPECIAL INSTRUCTION FOR SPEECH-TO-TEXT & PRONUNCIATION]
Because I am speaking via voice-to-text, my pronunciation might be imperfect or missing ending sounds (like -s, -ed, -t, -d), causing misheard words:
1. IF MY SENTENCE SOUNDS UNCLEAR, UNNATURAL, OR HAS NONSENSICAL WORDS:
   - DO NOT pretend you understood and DO NOT guess blindly.
   - Politely ask for clarification by offering 2 options of what you think I meant.
   - Example: "I might have misheard you. Did you say: (A) 'I have fixed the bug' or (B) 'I fixed the bug'?"
2. IF I MISS CRITICAL ENDING SOUNDS (e.g. saying 'work' instead of 'worked'):
   - Point it out gently: "Did you mean 'worked'? Remember to pronounce the /t/ ending sound!"

[SESSION CONVERSATION RULES]
1. Length: Exactly 6 conversational turns. Keep each response short (2-3 sentences max).
2. Flow: Ask ONLY ONE question at a time. Guide me to describe my tasks, what I finished yesterday, and what I have accomplished today.
3. Sandwich Feedback: Acknowledge my idea -> Briefly correct any grammar/word error (1 sentence) -> Ask the next question.
4. Support: If I say "hint" or seem stuck, give me a sentence starter template.
5. Wrap-up (Turn 6): End with a brief summary: 2 things I did well and 2 specific pronunciation/grammar points to improve.

Start by greeting me warmly in 1 sentence and ask your first question.`,
            quizzes: [
              {
                id: 1,
                question: "Yesterday afternoon, I ______ the pull request for the authentication service.",
                options: ["merged", "have merged", "was merged", "merging"],
                correctIndex: 0,
                explanation: "Có mốc thời gian xác định trong quá khứ ('Yesterday afternoon') nên bắt buộc dùng thì Quá khứ đơn ('merged')."
              },
              {
                id: 2,
                question: "Up until now, our team ______ three major sprints on this project.",
                options: ["completed", "has completed", "is completing", "completes"],
                correctIndex: 1,
                explanation: "'Up until now' (Cho đến tận bây giờ) là dấu hiệu kinh điển của thì Hiện tại hoàn thành ('has completed')."
              },
              {
                id: 3,
                question: "We ______ any critical bugs since the v2.4 release on Monday.",
                options: ["didn't find", "haven't found", "don't find", "hadn't found"],
                correctIndex: 1,
                explanation: "Mệnh đề có 'since + mốc thời gian' ('since the release') thì mệnh đề chính chia ở Hiện tại hoàn thành: 'haven't found'."
              },
              {
                id: 4,
                question: "Two hours ago, the monitoring alarm ______ due to a memory spike.",
                options: ["went off", "has gone off", "goes off", "is going off"],
                correctIndex: 0,
                explanation: "'Two hours ago' là thời điểm xác định trong quá khứ -> dùng Quá khứ đơn ('went off' = reo chuông/kích hoạt)."
              },
              {
                id: 5,
                question: "I ______ the staging database, so you can test your APIs now.",
                options: ["already reset", "have already reset", "was resetting", "am reset"],
                correctIndex: 1,
                explanation: "Hành động đã hoàn tất trong quá khứ nhưng để lại kết quả ảnh hưởng trực tiếp đến hiện tại ('you can test now') -> dùng Hiện tại hoàn thành."
              },
              {
                id: 6,
                question: "Which question is grammatically CORRECT for a daily standup?",
                options: [
                  "Did you deployed the patch yesterday?",
                  "Have you deployed the patch yet?",
                  "Did you have deployed the patch?",
                  "Are you deploy the patch yesterday?"
                ],
                correctIndex: 1,
                explanation: "Câu đúng là: 'Have you deployed the patch yet?'. Phương án A sai vì sau trợ động từ 'Did' phải dùng động từ nguyên mẫu ('deploy')."
              },
              {
                id: 7,
                question: "Last week, we ______ our cloud infrastructure from AWS to GCP.",
                options: ["have migrated", "migrated", "are migrating", "migrate"],
                correctIndex: 1,
                explanation: "'Last week' chỉ thời gian đã chấm dứt hoàn toàn trong quá khứ -> dùng Quá khứ đơn ('migrated')."
              },
              {
                id: 8,
                question: "The QA team ______ the test results yet, so we cannot proceed.",
                options: ["hasn't approved", "didn't approve", "doesn't approve", "isn't approving"],
                correctIndex: 0,
                explanation: "Có trạng từ 'yet' ở cuối câu phủ định -> dấu hiệu đặc trưng của Hiện tại hoàn thành ('hasn't approved')."
              },
              {
                id: 9,
                question: "When ______ that new microservice framework?",
                options: [
                  "did you implement",
                  "have you implemented",
                  "did you implemented",
                  "are you implement"
                ],
                correctIndex: 0,
                explanation: "Khi hỏi về thời điểm xảy ra sự việc với từ để hỏi 'When', tiếng Anh chuẩn luôn dùng Quá khứ đơn: 'When did you implement...?'. Không dùng 'When have you...'"
              },
              {
                id: 10,
                question: "I ______ with Docker for over four years, but I just started learning Kubernetes last month.",
                options: ["worked", "have worked", "was working", "work"],
                correctIndex: 1,
                explanation: "Diễn tả kinh nghiệm làm việc tích lũy từ quá khứ đến hiện tại ('for over four years') -> dùng Hiện tại hoàn thành ('have worked')."
              },
              {
                id: 11,
                question: "Look at the status dashboard! The server ______!",
                options: ["crashed", "has crashed", "was crashing", "crashes"],
                correctIndex: 1,
                explanation: "Diễn tả sự việc vừa mới xảy ra và để lại kết quả đập ngay vào mắt ở hiện tại ('Look at the status dashboard!') -> dùng Hiện tại hoàn thành ('has crashed')."
              },
              {
                id: 12,
                question: "In 2023, our engineering department ______ into three autonomous squads.",
                options: ["has reorganized", "reorganized", "was reorganizing", "is reorganized"],
                correctIndex: 1,
                explanation: "Năm 2023 là mốc thời gian cụ thể trong quá khứ -> Quá khứ đơn ('reorganized')."
              },
              {
                id: 13,
                question: "She ______ out of the office for ten minutes, but she is back at her desk now.",
                options: ["has been", "was", "is", "had been"],
                correctIndex: 1,
                explanation: "Hành động đã kết thúc hoàn toàn trong quá khứ (hiện tại cô ấy đã quay lại bàn: 'she is back') -> dùng Quá khứ đơn ('was')."
              },
              {
                id: 14,
                question: "How many customer tickets ______ today?",
                options: ["did you resolve", "have you resolved", "were you resolved", "are you resolving"],
                correctIndex: 1,
                explanation: "'Today' là khoảng thời gian chưa kết thúc (ngày hôm nay vẫn đang tiếp diễn) -> dùng Hiện tại hoàn thành ('have you resolved')."
              },
              {
                id: 15,
                question: "I can't access the database because someone ______ the root credentials.",
                options: ["changed", "has changed", "was changed", "is changing"],
                correctIndex: 1,
                explanation: "Hành động đổi mật khẩu xảy ra lúc nào không rõ, nhưng hậu quả trực tiếp ở hiện tại là tôi không truy cập được ('I can't access') -> Hiện tại hoàn thành ('has changed')."
              },
              {
                id: 16,
                question: "Find the MISTAKE: 'Yesterday I have pushed three commits to the repository.'",
                options: [
                  "'Yesterday' nên đổi thành 'Tomorrow'",
                  "'have pushed' sai, phải sửa thành 'pushed'",
                  "'three commits' sai, phải là 'three commit'",
                  "'to the repository' sai giới từ"
                ],
                correctIndex: 1,
                explanation: "Có 'Yesterday' thì không được dùng thì Hiện tại hoàn thành ('have pushed'), phải sửa thành Quá khứ đơn ('pushed')."
              },
              {
                id: 17,
                question: "Our DevOps engineer ______ the SSL certificate just 5 minutes ago.",
                options: ["renewed", "has renewed", "is renewing", "renews"],
                correctIndex: 0,
                explanation: "'5 minutes ago' là mốc thời gian quá khứ rõ ràng -> dùng Quá khứ đơn ('renewed')."
              },
              {
                id: 18,
                question: "We ______ this API endpoint multiple times, and it always behaves consistently.",
                options: ["tested", "have tested", "are tested", "were testing"],
                correctIndex: 1,
                explanation: "Diễn tả hành động đã làm nhiều lần (kinh nghiệm lặp lại: 'multiple times') tính đến thời điểm hiện tại -> Hiện tại hoàn thành ('have tested')."
              }
            ]
          },
          {
            id: "eng-les-02",
            title: "Bài 2: Trình bày nguyên nhân trục trặc và giải pháp (Root Cause Analysis)",
            duration: "20 phút",
            videoDriveId: "1p_e_m-P_L_E_D_R_I_V_E_I_D_2",
            notes: "Học các liên từ chỉ nguyên nhân - kết quả: due to, as a result of, lead to, consequently trong buổi Post-Mortem họp rút kinh nghiệm.",
            aiPrompt: `You are a Senior Tech Lead conducting a post-mortem meeting with me.
I want to practice explaining the root cause of an outage and the preventive steps we took.

[LESSON CONTEXT]
- Topic: System incident report & root cause analysis (RCA)
- Target Grammar: Cause and Effect structures (due to, caused by, as a result of, therefore, in order to).

[SPECIAL INSTRUCTION FOR SPEECH-TO-TEXT & PRONUNCIATION]
If my speech is unclear or transcribed with weird words:
- Politely clarify: "Did you mean (A) [...] or (B) [...]?"
- Point out any dropped ending sounds gently.

[RULES]
1. 6 conversational turns.
2. Ask 1 question at a time.
3. Sandwich feedback: acknowledge -> correct -> ask next question.
4. Conclude at turn 6 with constructive tips.`,
            quizzes: [
              {
                id: 1,
                question: "The API latency increased dramatically ______ a sudden surge in traffic.",
                options: ["due to", "because", "lead to", "consequently"],
                correctIndex: 0,
                explanation: "'Due to' đi với cụm danh từ ('a sudden surge in traffic'). 'Because' phải đi với mệnh đề (S + V)."
              },
              {
                id: 2,
                question: "We implemented automatic rate limiting ______ prevent future DDoS attacks.",
                options: ["in order to", "so that", "because of", "owing to"],
                correctIndex: 0,
                explanation: "'In order to' đi với động từ nguyên mẫu ('prevent'). 'So that' đi với mệnh đề."
              },
              {
                id: 3,
                question: "The database cluster ran out of storage; ______, write operations failed.",
                options: ["however", "consequently", "although", "despite"],
                correctIndex: 1,
                explanation: "'Consequently' (Do đó / Hậu quả là) diễn tả mối quan hệ nhân quả logic giữa 2 vế câu."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "aws-saa",
    title: "Luyện Thi Chứng Chỉ AWS Certified Solutions Architect (SAA-C03)",
    badge: "Cloud IT",
    color: "from-amber-500 to-orange-600",
    description: "Hệ thống bài giảng video thiết kế kiến trúc chuẩn AWS (Well-Architected Framework), VPC, EC2, S3, RDS, DynamoDB và bảo mật IAM.",
    modules: [
      {
        id: "aws-mod-1",
        title: "Module 1: Mạng VPC & Cấu trúc phân vùng mạng (VPC & Subnets)",
        lessons: [
          {
            id: "aws-les-01",
            title: "Bài 1: Thiết kế Multi-AZ VPC với Public & Private Subnets",
            duration: "35 phút",
            videoDriveId: "1p_e_m-P_L_E_D_R_I_V_E_I_D_AWS1",
            notes: "Hiểu sâu về Internet Gateway (IGW), NAT Gateway, Route Tables và Network ACLs.",
            aiPrompt: `You are an AWS Solutions Architect Interviewer.
Test my knowledge on AWS VPC architecture in English.
Ask me 1 question at a time about why we place databases in private subnets and how NAT Gateways work.
Clarify if speech-to-text gets confusing. Keep it to 6 turns.`,
            quizzes: [
              {
                id: 1,
                question: "Which component allows instances in a private subnet to connect to the internet while preventing incoming traffic?",
                options: ["Internet Gateway (IGW)", "NAT Gateway", "Virtual Private Gateway", "VPC Peering Connection"],
                correctIndex: 1,
                explanation: "NAT Gateway cho phép máy chủ trong Private Subnet gọi ra ngoài internet (để tải bản vá, gọi API) nhưng ngăn chặn hoàn toàn kết nối từ internet đi ngược vào."
              },
              {
                id: 2,
                question: "Security Groups are ______ while Network ACLs are ______.",
                options: ["stateless / stateful", "stateful / stateless", "public / private", "dynamic / static"],
                correctIndex: 1,
                explanation: "Security Groups là stateful (tự động cho phép traffic phản hồi đi ngược ra), trong khi NACLs là stateless (phải cấu hình cả inbound và outbound rule)."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cncf-cka",
    title: "Chứng Chỉ Kubernetes Administrator (CKA / CNCF)",
    badge: "Cloud Native",
    color: "from-sky-500 to-blue-700",
    description: "Thực hành triển khai, quản trị cụm Kubernetes, Pods, Deployments, Services, Ingress, RBAC và troubleshooting sự cố thực tế.",
    modules: [
      {
        id: "cka-mod-1",
        title: "Module 1: Kubernetes Core Architecture",
        lessons: [
          {
            id: "cka-les-01",
            title: "Bài 1: Control Plane Components (kube-apiserver, etcd, scheduler, controller-manager)",
            duration: "30 phút",
            videoDriveId: "1p_e_m-P_L_E_D_R_I_V_E_I_D_CKA1",
            notes: "Vai trò của từng thành phần trong Master Node và luồng tạo Pod từ khi chạy lệnh kubectl apply.",
            aiPrompt: `You are a Kubernetes CKA Expert.
Discuss Kubernetes architecture with me in English.
Ask me to describe how kube-apiserver communicates with etcd and kube-scheduler.
Clarify any unclear pronunciation politely. Keep to 6 turns.`,
            quizzes: [
              {
                id: 1,
                question: "Which Control Plane component is the ONLY one that interacts directly with etcd?",
                options: ["kube-scheduler", "kube-controller-manager", "kube-apiserver", "kubelet"],
                correctIndex: 2,
                explanation: "kube-apiserver là thành phần duy nhất trong cụm K8s giao tiếp trực tiếp với etcd để đọc/ghi dữ liệu trạng thái cụm."
              }
            ]
          }
        ]
      }
    ]
  }
];
