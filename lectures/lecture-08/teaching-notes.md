# Ghi chú giảng dạy — Bài giảng 08

## Chuẩn bị

- Mở slide deck và các demo từ máy chủ HTTP cục bộ. Demos không cần dịch vụ ngoài hoặc thư viện cài thêm.
- Chuẩn bị DevTools Console và Elements để xem event listeners, DOM và trạng thái storage.
- Lecture vẫn phù hợp lớp học không có laptop cho từng người: giảng viên trình chiếu thao tác, lớp quan sát và dự đoán thứ tự/đầu ra.
- Event loop chỉ giới thiệu call stack, mã đồng bộ và timer callback. Để Promise, microtask, async/await và Fetch cho Lecture 09.

## Tiết 1 — Events

1. Mở `demos/lecture-08/events-forms/index.html`; quan sát DOM trước tương tác.
2. Gõ vào trường họ tên; callback `input` cập nhật bộ đếm bằng `event.target.value`.
3. Thử submit khi bỏ trống, nhập tên một ký tự, nhập email sai rồi nhập hợp lệ. Chú ý browser constraint validation xảy ra trước submit event.
4. Khi submit hợp lệ, theo dõi `preventDefault`, `FormData` và thông báo trạng thái. Giải thích `target`, `currentTarget`, bubbling bằng cây form nếu cần.
5. Dùng DevTools Elements/Event Listeners để chỉ ra listener đang gắn với input và form.

## Tiết 2 — Forms và Validation

1. Tiếp tục trên form demo, tập trung vào association label/for/id và thuộc tính `name`.
2. So sánh `required`, `type=email`, `minlength` với JavaScript handler: HTML mô tả ràng buộc, browser hiển thị phản hồi, handler chỉ xử lý dữ liệu hợp lệ.
3. Quan sát `new FormData(form).get("email")`; lưu ý chỉ control có `name` mới có key tương ứng.
4. Kích hoạt Reset; giải thích reset đưa control về giá trị ban đầu và event `reset` dùng để cập nhật status trong demo.
5. Nêu yêu cầu accessible: lỗi cần mô tả bằng chữ, focus ở control có lỗi, vùng thông báo trạng thái có tên/role phù hợp.

## Tiết 3 — Storage và Event Loop

### Browser Storage

1. Mở `demos/lecture-08/storage/index.html`, nhập ghi chú mẫu rồi bấm Lưu.
2. Tải lại trang; ghi chú còn nhờ localStorage. Bấm Đọc lại và Xóa ghi chú để quan sát từng API.
3. Trong Application/Storage của DevTools xem key `cse122-demo-note`. Mở trang ở tab mới để so sánh sessionStorage theo tab với localStorage theo origin.
4. Nhấn mạnh dữ liệu lưu là chuỗi, có thể serialize object bằng JSON, storage không phải nơi cất bí mật và có thể bị chặn/lỗi.

### Event Loop preview

1. Mở `demos/lecture-08/event-loop/index.html`, bấm chạy nhiều lần.
2. Quan sát mỗi lượt luôn theo thứ tự A, B, C: hai lệnh sync hoàn thành trước timer callback.
3. Giải thích `setTimeout(..., 0)` đặt thời gian trễ tối thiểu; callback không ngắt task đồng bộ đang chạy.
4. Chỉ giới thiệu call stack và callback queue ở mức khái niệm. Chuyển Promise/microtask/async-await sang Lecture 09.

## Liên kết project

Form có validation và status; lựa chọn/ghi chú nhỏ có thể tái dùng trong project. Khi cần dữ liệu remote, bài tiếp theo sẽ xây trên callback/event loop để học Promise, async/await và Fetch API.
