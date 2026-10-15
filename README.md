# English is My Own (English & IT LMS)

> **Nền tảng Static Web tự học Tiếng Anh giao tiếp công việc & Luyện thi chứng chỉ IT (AWS, CNCF)**  
> Tích hợp Spaced Repetition (Kỷ luật ôn tập), Phản xạ giao tiếp AI (ChatGPT/Gemini Voice) và Trình phát Video Google Drive.

---

## 🌟 Tính Năng Nổi Bật

### 1. Trung Tâm Luyện Từ Vựng Độc Lập (Vocabulary Hub)
- **Placement Test 10 câu chuẩn CEFR:** Tự động xếp lớp khởi điểm (A1, A2, B1, B2) cho người mới bắt đầu.
- **Quy tắc Kỷ luật & Cơ chế Phạt (Penalty System):**
  - Mục tiêu: Tối thiểu **1 batch = 10 từ mới / ngày**.
  - **Điều kiện mở khóa:** Bắt buộc phải hoàn thành bài ôn tập từ vựng của ngày hôm trước ($T-1$) thì hệ thống mới mở khóa 10 từ mới.
  - **Cơ chế phạt khi lười:** Nếu bỏ lỡ một hoặc nhiều ngày, lượng từ cần ôn sẽ bằng: `[Số từ còn nợ của phiên gần nhất] + [10 từ ngẫu nhiên trong kho đã học]`.
- **3 Chế độ tương tác phản xạ đa chiều:**
  - **Mode 1 (Dịch ngược):** Xem nghĩa Tiếng Việt + gợi ý số ký tự $\rightarrow$ Gõ từ Tiếng Anh (Active Recall).
  - **Mode 2 (Nghe chép chính tả):** Nghe phát âm native US qua Web Speech API $\rightarrow$ Gõ lại từ.
  - **Mode 3 (Nhận diện phản xạ):** Xem từ Tiếng Anh & IPA $\rightarrow$ Chọn 1 trong 4 nghĩa Tiếng Việt trong 3-5 giây.
- **Tính năng độc quyền: "Không thể nghe lúc này" (Audio Bypass):**
  - Khi ở văn phòng hoặc nơi công cộng ồn ào không thể bật loa, người dùng bấm nút *"🔇 Không thể nghe lúc này"*.
  - Hệ thống sẽ **không phạt câu sai**, đồng thời tự động chuyển đổi toàn bộ các câu hỏi nghe còn lại trong phiên sang dạng đọc hiểu và điền từ.

### 2. Khoá Học Video & Phòng Luyện Phản Xạ AI (Courses & Speaking Hub)
- **Phát Video từ Google Drive:** Nhúng trực tiếp MP4 từ Google Drive qua giao diện `iframe Preview`, không lo giới hạn file >100MB, hỗ trợ tua và streaming thích ứng độ phân giải.
- **Bài tập củng cố ngữ pháp 15–20 câu:** Mỗi bài giảng đi kèm bộ câu hỏi trắc nghiệm chuyên sâu, có giải thích cặn kẽ tiếng Việt và cho phép làm lại các câu đã sai.
- **Action Hub Luyện Nói cùng AI:**
  - Cung cấp sẵn Prompt chuẩn quốc tế cho từng bài học với **Giao thức sửa lỗi phát âm & nhận diện giọng nói (Speech-to-Text)**: Nếu bạn nói nuốt âm đuôi (*-s, -ed*) hoặc AI nghe không rõ, AI sẽ hỏi lại và đưa ra các lựa chọn `(A) hay (B)` thay vì đoán mò.
  - Tích hợp 1-click **Sao chép Prompt** và nút mở nhanh **ChatGPT Voice** hoặc **Gemini Voice**.

### 3. Đồng Bộ Đám Mây & PWA
- **Firebase Authentication & Cloud Firestore:** Đăng nhập 1 chạm bằng tài khoản Google, tự động đồng bộ tiến độ học và streak lên mây.
- **Chế độ Offline & LocalStorage:** Vẫn hoạt động 100% trơn tru ngay cả khi chưa kết nối Firebase.
- **Progressive Web App (PWA):** Cho phép cài đặt web ra màn hình chính điện thoại (iOS / Android) như một app độc lập.

---

## 🚀 Hướng Dẫn Sử Dụng & Triển Khai

### Cách 1: Chạy Thử Trên Máy Tính (Local)
Dự án là **Static Web thuần (Pure HTML5 + ES Modules)**, không cần cài đặt `node_modules` nặng nề. Bạn chỉ cần mở bằng bất kỳ web server nào:

```bash
# Sử dụng Python có sẵn trên Mac/Linux:
python3 -m http.server 3000

# Hoặc dùng npx serve:
npx serve .
```
Sau đó mở trình duyệt tại: `http://localhost:3000`

---

### Cách 2: Triển Khai Miễn Phí Lên GitHub Pages (30 giây)
1. Commit và push toàn bộ source code lên nhánh `main`:
   ```bash
   git add .
   git commit -m "feat: complete English and IT LMS with Vocab Hub"
   git push origin main
   ```
2. Trên GitHub, vào **Repository Settings** $\rightarrow$ **Pages**.
3. Tại mục **Build and deployment / Source**, chọn **Deploy from a branch**.
4. Chọn nhánh `main` và thư mục `/ (root)`, nhấn **Save**.
5. Đợi 1 phút, trang web của bạn sẽ hoạt động tại: `https://<username>.github.io/EnglishisMyOwn/`

---

## ⚙️ Cấu Hình Firebase (Google Sign-In & Firestore)

Nếu bạn muốn bật tính năng **Đăng nhập Google** và **Đồng bộ tiến độ giữa các thiết bị**:

1. Truy cập [Firebase Console](https://console.firebase.google.com/) và tạo một Project mới.
2. Vào **Build** $\rightarrow$ **Authentication** $\rightarrow$ Tab **Sign-in method** $\rightarrow$ Bật nhà cung cấp **Google**.
3. Vào **Build** $\rightarrow$ **Firestore Database** $\rightarrow$ Tạo cơ sở dữ liệu ở chế độ **Test Mode** (hoặc cấu hình Rules cho phép authenticated user đọc/ghi vào `users/{uid}`).
4. Vào **Project Settings** (biểu tượng bánh răng) $\rightarrow$ Cuộn xuống mục **Your apps** $\rightarrow$ Thêm Web App (`</>`) để lấy thông số cấu hình.
5. **Cách nhập cấu hình vào App:**
   - **Cách 1 (Trực quan):** Bấm biểu tượng ⚙️ (Cài đặt) ở góc trên bên phải website $\rightarrow$ Dán các thông số `apiKey`, `authDomain`, `projectId`... $\rightarrow$ Bấm **Lưu**.
   - **Cách 2 (Code):** Cập nhật biến `DEFAULT_FIREBASE_CONFIG` trong file `js/firebase-config.js`.

---

## 📂 Cách Thêm Video & Bài Giảng Mới

Để thêm bài giảng hoặc khoá học mới (như AWS, Kubernetes hay English):
1. Tải video MP4 lên thư mục Google Drive của bạn.
2. Chuột phải vào video $\rightarrow$ Chọn **Chia sẻ (Share)** $\rightarrow$ Đổi quyền truy cập thành **"Bất kỳ ai có đường liên kết đều có thể xem" (Anyone with the link can view)**.
3. Sao chép ID của file từ đường dẫn:
   - Link: `https://drive.google.com/file/d/1a2b3c4d5e6f7g8h/view`
   - File ID: `1a2b3c4d5e6f7g8h`
4. Mở file `js/data/courses-data.js` và thêm bài học với `videoDriveId: "1a2b3c4d5e6f7g8h"`.

## 📚 Cách Thêm & Cập Nhật Từ Vựng Mới (Tự Động Đồng Bộ)

Dữ liệu từ vựng được phân tách thành các file dạng JSON/JS theo từng chủ đề trong thư mục `data/vocab/`:
- `01-daily.json`: Giao tiếp hàng ngày, ăn uống, du lịch, thói quen (8 nhóm, 240 từ)
- `02-work.json`: Công sở, phỏng vấn, email, teamwork (5 nhóm, 180 từ)
- `03-tech.json`: Lập trình, DevOps, QA, Cloud, System Design (6 nhóm, 180 từ)
- `04-marketing.json`: Digital Marketing, Brand, Analytics (3 nhóm, 100 từ)

### 👉 Thêm chủ đề mới cực kỳ đơn giản:
1. Tạo một file `.json` mới trong `data/vocab/` (ví dụ: `05-finance.json` hoặc `ielts.json`).
2. Định dạng file:
```json
[
  {
    "groupId": "finance_banking",
    "name": "Tài chính & Ngân hàng",
    "icon": "💳",
    "category": "work",
    "level": "B2",
    "description": "Thuật ngữ thanh toán, ngân hàng và tài chính doanh nghiệp",
    "words": [
      {
        "id": "fin_01",
        "word": "liquidity",
        "level": "B2",
        "type": "noun",
        "ipa": "/lɪˈkwɪd.ə.ti/",
        "meaningVi": "tính thanh khoản",
        "collocations": "maintain liquidity, liquidity crisis",
        "example": "The bank maintains high liquidity to handle withdrawals.",
        "exampleVi": "Ngân hàng duy trì tính thanh khoản cao để đáp ứng các khoản rút tiền.",
        "optionsVi": [
          "tính thanh khoản",
          "lãi suất vay",
          "thua lỗ kéo dài",
          "đầu cơ bất động sản"
        ]
      }
    ]
  }
]
```
3. Commit và `git push` lên GitHub:
   - **GitHub Actions** sẽ tự động biên dịch, tối ưu gói offline PWA.
   - Nếu bạn đã thêm Secret `FIREBASE_SERVICE_ACCOUNT` trên GitHub, workflow sẽ **tự động nạp thẳng dữ liệu lên Cloud Firestore** mà bạn không cần phải bấm bất kỳ nút nào!

---

## 📱 Cài Đặt Lên Màn Hình Điện Thoại (PWA)
- **Trên iPhone (Safari):** Mở link trang web $\rightarrow$ Bấm nút **Chia sẻ (Share)** $\rightarrow$ Chọn **Thêm vào MH chính (Add to Home Screen)**.
- **Trên Android (Chrome):** Mở link trang web $\rightarrow$ Bấm dấu 3 chấm góc phải $\rightarrow$ Chọn **Cài đặt ứng dụng** hoặc **Thêm vào màn hình chính**.
