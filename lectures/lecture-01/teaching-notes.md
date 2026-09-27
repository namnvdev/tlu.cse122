# Teaching Notes · Bài giảng 01

## Phạm vi và cấu trúc

- Chương 1 của đề cương; 3 periods × 55 phút.
- Period 1: Internet, World Wide Web, Website/Web application, browser/client/server, frontend/backend và Client–Server.
- Period 2: URL, domain, DNS, hosting, HTTP request/response, tài nguyên Web, static site/MPA/SPA và quan sát DevTools.
- Period 3: môi trường phát triển, lệnh terminal, Git/GitHub và quy trình tạo một trang đầu tiên.
- Syllabus Chương 1 phân bổ 3 tiết lý thuyết và 1 tiết thực hành. Lecture này chỉ trình bày 3 tiết lý thuyết; hoạt động thực hành thực hiện trong Practice.

## Gợi ý tổ chức

### Period 1 · Internet, World Wide Web & Client–Server

Mở bằng slide lộ trình của tiết, sau đó dùng sơ đồ mạng để phân biệt hạ tầng Internet với dịch vụ Web. Giữ ví dụ xuyên suốt là một người dùng nhập URL và nhận trang. Khi giải thích client/server, nhấn mạnh đây là vai trò trong một lần trao đổi; một thiết bị có thể đóng nhiều vai trò ở tình huống khác nhau.

**Điểm cần làm rõ**

- Web là một trong nhiều dịch vụ sử dụng Internet.
- Browser là client thường gặp; server có thể phục vụ tệp hoặc xử lý logic.
- Frontend/backend chỉ phân biệt phía chạy và trách nhiệm ở mức nhập môn.
- Một trang thường được tạo từ HTML cùng tài nguyên CSS, JavaScript, ảnh, font; không đồng nhất một URL với một tệp duy nhất.

**Câu hỏi trao đổi gợi ý**

- Nếu Internet là hạ tầng, Web nằm ở đâu trong mô hình đó?
- Ai khởi tạo request? Ai tạo response?
- Email và Web có nhất thiết là cùng một dịch vụ không?

### Period 2 · How the Web Works

Phân tích URL mẫu theo từng thành phần. Dùng luồng domain → DNS → địa chỉ mạng → server ở mức khái niệm, tránh hàm ý DNS chuyển tiếp nội dung website. Giới thiệu HTTP qua một request GET và response 200; đối chiếu status 404/5xx và các nhóm 2xx–5xx.

**Demo: HTTP observer**

1. Mở `demos/lecture-01/http-observer/index.html` trong browser.
2. Thay URL mẫu để quan sát scheme, host, port, path, query, fragment cập nhật.
3. Nhấn “Mô phỏng GET request”; đọc request line, `Host`, response status và `Content-Type`.
4. Chỉ rõ fragment (`#reviews`) không được gửi trong HTTP request.
5. Nói rõ đây là mô phỏng tại chỗ, không phát request mạng thật.

**Demo website thật / DevTools**

1. Mở một website công khai phù hợp với lớp học; chọn nội dung không yêu cầu đăng nhập.
2. Mở Chrome DevTools, chọn Network, bật Preserve log nếu cần, sau đó tải lại trang.
3. Chọn document request chính và lần lượt chỉ ra Request URL, method, status, response headers và preview/response.
4. Chọn Elements để đối chiếu nội dung hiển thị với DOM; chọn Console để nhận biết nơi xuất hiện lỗi.
5. Giải thích rằng cache, quyền riêng tư, extensions và cấu trúc từng website làm danh sách request khác nhau.

**Câu hỏi trao đổi gợi ý**

- `?id=42` và `#reviews` phục vụ mục đích gì?
- Response 404 khác 500 ra sao ở góc nhìn nhóm status?
- Vì sao một trang hiển thị có thể tải nhiều tài nguyên?

### Period 3 · Development Environment, DevTools, Git & GitHub

Trình bày vòng lặp editor → server → browser → DevTools → Git như một quy trình thống nhất. Dùng PowerShell làm ví dụ lệnh terminal, đồng thời lưu ý shell khác nhau có thể có lệnh tương đương khác.

**Command-line walkthrough**

| Lệnh | Mục đích / ví dụ | Thời điểm dùng |
|---|---|---|
| `pwd` | Hiển thị thư mục hiện tại. | Xác nhận vị trí trước thao tác. |
| `cd <folder>` | `cd web-project` chuyển vào thư mục. | Điều hướng workspace. |
| `dir` | Liệt kê tệp và thư mục trong PowerShell. | Kiểm tra nội dung thư mục. |
| `mkdir <folder>` | `mkdir web-project` tạo thư mục. | Tạo vùng chứa dự án. |
| `code .` | Mở thư mục hiện tại trong VS Code nếu lệnh CLI đã cài. | Mở workspace. |

**Git walkthrough**

Slide bao quát toàn bộ các lệnh yêu cầu trong task. Khi trình bày, làm rõ cấu hình danh tính chỉ cần thiết lập phù hợp một lần và dữ liệu sẽ được ghi vào metadata commit. Nhắc người học không đưa mật khẩu/token vào tên, email hay commit.

| Lệnh | Mục đích, cú pháp và ví dụ | Vị trí trong workflow |
|---|---|---|
| `git --version` | Xác nhận cài đặt; ví dụ `git --version`. | Trước khi dùng Git. |
| `git config --global user.name "Your Name"` | Đặt tên tác giả commit; cú pháp như cột lệnh. | Thiết lập máy lần đầu. |
| `git config --global user.email "you@example.com"` | Đặt email metadata commit. | Thiết lập máy lần đầu. |
| `git init` | Tạo repository tại thư mục hiện tại. | Bắt đầu repository mới. |
| `git status` | Xem nhánh và trạng thái tệp. | Sau sửa tệp, trước/sau staging. |
| `git add .` | Đưa thay đổi dưới thư mục hiện tại vào staging. | Chọn nội dung commit. |
| `git commit -m "Initial commit"` | Tạo commit từ nội dung staged. | Lưu mốc local. |
| `git log` | Xem lịch sử commit; có thể dùng `git log --oneline`. | Rà các mốc đã lưu. |
| `git diff` | Xem khác biệt chưa staged. | Kiểm tra sửa đổi trước `add`. |
| `git branch` | Liệt kê nhánh local. | Nhận biết nhánh hiện tại. |
| `git switch <branch>` | Chuyển nhánh; ví dụ `git switch main`. | Chọn ngữ cảnh làm việc. |
| `git clone <repository-url>` | Sao chép repo và lịch sử; ví dụ URL HTTPS GitHub. | Bắt đầu từ dự án từ xa. |
| `git remote -v` | Xem địa chỉ fetch/push đã cấu hình. | Kiểm tra đích đồng bộ. |
| `git pull` | Lấy và tích hợp thay đổi remote. | Cập nhật local; cần remote/branch phù hợp. |
| `git push` | Gửi commit local lên remote. | Chia sẻ commit; repo mới có thể cần `git push -u origin main`. |

Giải thích luồng Working Directory → Staging Area → Local Repository → Remote Repository. So sánh Git (công cụ/version control) với GitHub (dịch vụ hosting/cộng tác). Nêu rõ `git add .` có thể stage nhiều tệp; người dùng nên kiểm tra `git status` và `git diff` trước commit.

**Demo: trang Web đầu tiên**

1. Mở `demos/lecture-01/first-page/index.html`; nêu sự khác nhau giữa mở bằng `file://` và phục vụ qua HTTP local.
2. Tải lại trang để quan sát giao diện; nhấn nút và xem Console ghi thông điệp JavaScript.
3. Mở Elements để xem DOM, Network để xem các tệp nạp khi trang được phục vụ qua local server.
4. Để phục vụ qua HTTP, mở PowerShell tại thư mục `demos/lecture-01/first-page`, chạy `python -m http.server 8000`, rồi truy cập `http://localhost:8000`. Có thể dùng local server sẵn có trong VS Code nếu đã cài.
5. Dừng server bằng `Ctrl+C` sau khi quan sát.

Demo tổng hợp trong phạm vi tiết học: tạo thư mục → mở VS Code → tạo `index.html` → chạy local server → mở browser → kiểm tra DevTools → `git init` → `git status` → `git add .` → `git commit` → nối remote GitHub và push khi repository đã được tạo. Dùng repository mẫu/riêng cho lớp; không yêu cầu sinh viên có tài khoản hoặc máy tính trong Lecture.

## Kết thúc bài

Cho sinh viên nối lại ba lớp ý: Internet/Web và Client–Server giải thích nền tảng; URL/DNS/HTTP giải thích cách tìm và trao đổi tài nguyên; editor/browser/DevTools/Git giải thích vòng lặp tạo và kiểm tra sản phẩm. Bài tiếp theo bắt đầu với cấu trúc tài liệu HTML.

## Tài liệu chính thức

- [HTTP — MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [HTTP Overview — MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)
- [VS Code Getting Started](https://code.visualstudio.com/docs/getstarted/overview)
- [Git Reference](https://git-scm.com/docs)
- [Pro Git](https://git-scm.com/book/en/v2)
- [GitHub Getting Started](https://docs.github.com/en/get-started)
