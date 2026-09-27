# Ghi chú giảng dạy — Bài giảng 06

## Chuẩn bị

- Mở `lectures/lecture-06/index.html`; kiểm tra điều hướng về Course Home và Bài giảng 05.
- Demo có thể chạy bằng cách mở từng `index.html` trong browser; chúng chỉ dùng HTML/CSS/JavaScript chuẩn, không phụ thuộc thư viện ngoài hoặc mạng.
- Chuẩn bị DevTools Console để xem log và lỗi. Học viên có thể theo dõi trên màn chiếu; bài giảng không yêu cầu mỗi người có máy tính.
- Phạm vi bài này kết thúc ở nền tảng ngôn ngữ và dữ liệu. DOM, events, modules và JSON là nội dung bài kế tiếp.

## Tiết 1 — JavaScript Basics

Trọng tâm: browser runtime, cách nhúng script, `let`/`const`, kiểu dữ liệu, chuyển kiểu, toán tử và Console.

1. Mở `demos/lecture-06/runtime/index.html`; chạy lại ví dụ bằng nút trên trang.
2. Đọc kết quả theo thứ tự: template literal, kiểu `number`/`boolean`, phép so sánh nghiêm ngặt. Mở Console để đối chiếu log.
3. Giải thích `const` không cho gán lại binding, còn `let` phù hợp giá trị cần thay đổi. Nhấn mạnh object/array khai báo `const` vẫn có thể mutate.
4. Làm rõ khác biệt `5 === "5"` và `5 == "5"`; khuyến khích dùng `===` để tránh ép kiểu ngầm trong so sánh thông thường.
5. Nếu Console có lỗi, chọn dòng lỗi và kiểm tra tên biến, dấu ngoặc, kiểu đầu vào; phân biệt lỗi cú pháp với kết quả logic sai.

## Tiết 2 — Control Flow & Functions

Trọng tâm: Boolean, `if/else`, truthy/falsy, toán tử logic, vòng lặp, khai báo/gọi hàm, parameter/argument, `return`, scope và arrow function.

1. Mở `demos/lecture-06/control-flow/index.html`; thay điểm bằng giá trị hợp lệ và bấm “Tính kết quả”. Thử biên 5 và 8 để thấy thứ tự nhánh.
2. Đưa điểm ngoài khoảng 0–10 hoặc để trống; quan sát validation HTML ngăn xử lý giá trị không hợp lệ.
3. Đọc hàm `classify`: mỗi nhánh có `return`; kết quả là giá trị tại nơi gọi. Phân biệt parameter `score` với argument người dùng cung cấp.
4. Đọc vòng lặp `for...of` qua các mốc mẫu, rồi đối chiếu output. Nếu cần minh họa vòng lặp theo số lượt, dùng ví dụ `for (let i = 0; i < 3; i++)` trong slide.
5. Dùng ví dụ scope trên slide để phân biệt biến toàn cục/hàm/block; giải thích arrow syntax và lưu ý arrow không có `this` riêng.

## Tiết 3 — Arrays & Objects

Trọng tâm: array, object, dữ liệu lồng nhau, tham chiếu/mutation, `map`, `filter`, `reduce`, destructuring, spread và rest.

1. Mở `demos/lecture-06/data/index.html`; đặt ngưỡng giá khác nhau và chạy lọc. Quan sát danh sách, số lượng và tổng.
2. Dẫn theo phép biến đổi: `filter` chọn product theo `price`, `map` dựng bản ghi cần hiển thị, `reduce` cộng giá. Nhắc callback cần `return` giá trị thích hợp.
3. Đối chiếu `products` (array) và từng product (object). Truy cập trường theo tên và phần tử theo index.
4. Dùng DevTools thay thử một thuộc tính để minh họa mutation. Sau đó tạo mảng mới với spread; giải thích spread chỉ sao chép nông, object lồng nhau vẫn có thể dùng chung tham chiếu.
5. Chỉ ra destructuring để lấy trường có tên và rest để gom phần còn lại; tránh nhầm rest pattern trong khai báo với spread expression.

## Kết nối với bài tiếp theo

Các hàm và cấu trúc dữ liệu ở đây là nền tảng để tổ chức JavaScript thành modules, đọc JSON và làm việc với DOM ở Bài giảng 07. Không chuyển sang cập nhật giao diện hoặc xử lý sự kiện trong bài này.
