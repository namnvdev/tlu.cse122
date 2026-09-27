# Ghi chú giảng dạy — Bài giảng 09

## Chuẩn bị

- Mở `lectures/lecture-09/index.html`; kiểm tra liên kết Course Home và Bài giảng 08.
- Chạy các demo từ HTTP server cục bộ. Fetch demo đọc `products.json` cùng origin, không cần API ngoài; nếu mở bằng `file://`, browser có thể chặn Fetch.
- Chuẩn bị DevTools Console, Sources và Network. Bài giảng là demo trình chiếu; không yêu cầu từng người có laptop.
- Lecture 08 đã giới thiệu event loop và timer; bài này tập trung Promise, async/await, REST và Fetch. Không đi sâu framework hoặc kiến trúc tích hợp dự án.

## Tiết 1 — Promise

1. Mở `demos/lecture-09/async-flow/index.html`; lần lượt chạy Promise thành công và lỗi.
2. Theo dõi log: Promise khởi đầu pending, sau timer chuyển fulfilled hoặc rejected; nhánh tương ứng chạy, sau đó finally.
3. Phân tích chain: mỗi `then` trả về Promise mới. Giá trị return chuyển sang bước sau; lỗi/rejection bỏ qua các bước success đến catch phù hợp.
4. Cho thấy finally chạy ở cả hai nhánh và thường dùng để dọn trạng thái chung.
5. Mở Sources và đặt breakpoint trong timer hoặc handler nếu cần xem Call Stack và Scope.

## Tiết 2 — async/await

1. Chạy nút async/await; so sánh cách viết với Promise chain dùng cùng `getResult`.
2. Nhấn mạnh `async` luôn trả Promise; `await` chỉ tạm dừng async function hiện tại, không block main thread.
3. Dùng nút Promise lỗi để đối chiếu `catch`; chỉ ra `try/catch/finally` tương ứng trong async function.
4. Phân biệt thao tác phụ thuộc chạy tuần tự với thao tác độc lập có thể dùng `Promise.all`.
5. Mô hình hóa giao diện có trạng thái idle/loading/success/empty/error để chuẩn bị cho Fetch.

## Tiết 3 — REST và Fetch

1. Mở `demos/lecture-09/fetch-rest/index.html` qua HTTP. Network hiển thị `GET ./products.json`, status 200 và JSON response.
2. Quan sát UI chuyển loading → success; mở response trong Network và đối chiếu các object được render.
3. Bấm “GET resource không tồn tại”. Fetch vẫn trả Response với status 404; `response.ok` là false nên code tự ném lỗi và hiển thị trạng thái lỗi.
4. Giải thích đây là static JSON cùng origin để demo request-response ổn định; REST concept được trình bày qua resource URL và GET method, không giả định file tĩnh là backend API đầy đủ.
5. Cho xem POST snippet trên slide: method, `Content-Type: application/json`, và body qua `JSON.stringify`. Không gửi request thật vì demo server chỉ phục vụ tệp tĩnh.
6. Nhắc CORS là chính sách response phía server; lỗi CORS/network khác HTTP 4xx/5xx mà browser vẫn nhận được response.

## Kết nối project

Các trạng thái loading/success/empty/error, xử lý Promise và cách render JSON thành UI sẽ được tích hợp sâu hơn trong Lecture 10 và dự án Frontend.
