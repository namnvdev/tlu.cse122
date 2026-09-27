# Ghi chú giảng dạy — Bài giảng 05

## Chuẩn bị

- Mở bộ slide `lectures/lecture-05/index.html` và kiểm tra các liên kết tới bài 04, Course Home.
- Chuẩn bị trình duyệt có DevTools. Dùng chế độ responsive để đổi viewport; kiểm tra khoảng 375 px, 768 px, 1280 px và một kích thước trung gian.
- Các demo Bootstrap nạp CSS và JavaScript từ `assets/vendor/bootstrap/` của khóa học, nên chạy qua máy chủ HTTP cục bộ từ thư mục gốc dự án. Không cần kết nối CDN.
- Có thể hỏi người học dự đoán bố cục trước mỗi lần đổi viewport, rồi yêu cầu giải thích quy tắc CSS hoặc lớp Bootstrap tạo ra thay đổi.

## Tiết 1 — Responsive Design

Trọng tâm: viewport meta, bố cục linh hoạt, mobile-first, breakpoint theo nội dung, media query, ảnh và chữ thích nghi, điều hướng trên màn hình hẹp.

1. Mở `demos/lecture-05/responsive-lab/index.html`.
2. Bắt đầu ở cửa sổ rộng, rồi thu hẹp dần qua breakpoint 48rem (thường là 768 px khi cỡ chữ gốc 16 px). Cho người học quan sát thẻ đổi từ nhiều cột sang một cột, thanh điều hướng chuyển sang nút mở/đóng, và ảnh đổi biến thể.
3. Mở DevTools để quan sát chiều rộng viewport và trạng thái breakpoint hiện trên trang. Thay đổi chiều rộng chậm rãi để tìm điểm chuyển tiếp.
4. Kiểm tra nút điều hướng bằng chuột và bàn phím; theo dõi `aria-expanded`. So sánh ảnh khi viewport ở hai phía breakpoint.
5. Hỏi: breakpoint nào nên thay đổi bố cục, và nội dung nào vẫn cần ưu tiên khi không còn chỗ?

## Tiết 2 — Bootstrap 5

Trọng tâm: container, hệ lưới 12 cột, breakpoint của lưới, gutters, utility classes, components; cân nhắc CSS thuần và Bootstrap theo bối cảnh.

1. Mở `demos/lecture-05/bootstrap-grid/index.html` ở cửa sổ rộng. Quan sát ba cột; thu hẹp dưới breakpoint `md` để các cột xếp lại.
2. Dùng DevTools xem các lớp `.container`, `.row`, `.col-12`, `.col-md-6`, `.col-xl-4`; đối chiếu với quy tắc media query tương ứng trong CSS Bootstrap cục bộ.
3. Thử đổi kích thước cửa sổ qua các vùng mobile, tablet và desktop. Chú ý gutters và giới hạn chiều rộng container.
4. Cho người học diễn đạt lại cùng bố cục bằng CSS Grid thuần. Thảo luận chi phí tùy biến, tốc độ dựng giao diện và tính nhất quán khi chọn framework.

## Tiết 3 — Responsive UI với Bootstrap

Trọng tâm: form, điều hướng, tùy biến có kiểm soát, accessibility của component và kiểm thử nhiều viewport.

1. Mở `demos/lecture-05/bootstrap-ui/index.html`.
2. Thu hẹp viewport để xem navbar thu gọn. Kích hoạt toggler, kiểm tra mục tiêu `aria-controls` và giá trị `aria-expanded`; dùng bàn phím để di chuyển và kích hoạt.
3. Thử gửi form để thấy kiểm tra dữ liệu phía trình duyệt và thông báo demo; thử nút nhập lại. Kiểm tra nhãn có liên kết với từng trường.
4. So sánh thẻ/card và nút trên các viewport. Chỉ ra phần CSS biến đổi màu thương hiệu, rồi phân biệt biến tùy chỉnh với việc sửa mã thư viện.
5. Kết thúc bằng lượt kiểm tra mobile, tablet và desktop: không cuộn ngang, thứ tự nội dung hợp lý, điều khiển dùng được bằng bàn phím, trạng thái focus nhìn thấy, chữ và nút đủ dễ đọc.

## Lưu ý tổ chức

Các trang chiếu chỉ chứa nội dung hướng tới người học; trình tự thao tác, câu hỏi gợi mở và quan sát kỳ vọng nằm trong ghi chú này. Bootstrap được cung cấp cục bộ trong `assets/vendor/bootstrap/` để demo chạy nhất quán khi không có mạng. Các đường dẫn tài liệu MDN và Bootstrap chính thức nằm ở slide tham khảo cuối bài.
