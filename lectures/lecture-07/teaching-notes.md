# Ghi chú giảng dạy — Bài giảng 07

## Chuẩn bị

- Mở `lectures/lecture-07/index.html`; kiểm tra liên kết tới Course Home và Bài giảng 06.
- Chạy demo modules qua HTTP server cục bộ từ thư mục gốc dự án. ES modules thường bị chặn khi trang được mở bằng `file://`; demo DOM có thể mở trực tiếp nhưng server giúp thống nhất.
- Chuẩn bị DevTools: Console, Sources, Network và Elements. Sinh viên quan sát theo màn chiếu, không cần tự lập trình trong giờ lý thuyết.
- Bài này tập trung vào JSON, modules, debugging và DOM; không chuyển sang event handling, form interaction hay storage.

## Tiết 1 — JSON, Modules và Debugging

1. Mở `demos/lecture-07/modules/index.html` qua HTTP. Quan sát thông báo kết quả và Console.
2. Cho thấy `main.js` import hai tên từ `data.js`; đối chiếu tên export với named import. Mở Network để xác nhận browser tải cả hai module.
3. Phân biệt JavaScript object với JSON text. Trong Console chạy `JSON.stringify` và `JSON.parse`; bỏ dấu nháy kép có chủ đích để quan sát `SyntaxError`, rồi khôi phục cú pháp.
4. Trong Sources đặt breakpoint tại `students.map(formatStudent)` hoặc `formatStudent`; reload, dùng Step over và Scope để theo dõi tham số và giá trị trả về.
5. Nếu demo không chạy, kiểm tra server origin, đường dẫn import tương đối, Console và status trong Network.

## Tiết 2 — DOM và truy vấn

1. Mở `demos/lecture-07/dom-render/index.html`. Quan sát nội dung được tạo từ JavaScript.
2. Trong Elements mở `#products`; lần theo quan hệ parent/child từ vùng chứa đến `article`, `h3` và `p`.
3. Trong Console đối chiếu `document.querySelector("#products")`, `querySelectorAll(".card")`, `textContent` và `classList`.
4. Giải thích khác nhau giữa View Source (HTML ban đầu) và Elements (DOM hiện hành sau parser/script).
5. Minh họa `textContent` với chuỗi có dấu `<`; chuỗi xuất hiện như văn bản. Tránh thực thi markup không tin cậy.

## Tiết 3 — Tạo và cập nhật DOM

1. Lần theo `products` qua `map`, `createElement`, `textContent`, `append` và `replaceChildren`.
2. Đặt breakpoint trong callback của `map`; xem từng `product`, `card` mới và thời điểm chúng được lắp vào container.
3. Quan sát `#summary` sau khi script chạy. Đối chiếu số node với số bản ghi.
4. Nêu lỗi thường gặp: selector trả `null`, script chạy trước khi HTML parse, class/id sai chính tả, hoặc gán chuỗi không tin cậy vào `innerHTML`.
5. Chốt: JSON/modules tổ chức và trao đổi mã/dữ liệu; DOM là cây tài liệu browser hiển thị. Events ở bài kế tiếp nối thao tác người dùng với cập nhật DOM.

## Tài liệu

Các liên kết MDN, WHATWG và TC39 nằm ở slide tham khảo cuối bài. Module demo dùng cú pháp chuẩn browser hiện đại, không cần gói cài đặt.
