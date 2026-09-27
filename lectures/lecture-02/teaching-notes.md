# Teaching Notes · Bài giảng 02

## Phạm vi

- Chapter 2, periods 1–3/4 theo course plan: cấu trúc document HTML; nội dung text/link/image/list/table/media; form, controls, label và HTML validation.
- Lecture 03 tiếp tục phần còn lại của Chapter 2 (HTML quality, SEO cơ bản, accessibility, keyboard, ARIA nhập môn và validator) trước khi chuyển sang CSS. Không đi sâu các chủ đề đó trong Lecture 02.
- Syllabus Chapter 2 phân bổ 4 tiết lý thuyết và 2 tiết thực hành; Lecture 02 bao phủ 3 tiết đầu. Thực hành sinh viên làm trong Practice theo tiến trình học phần.

## Tổ chức ba period

### Period 1 · HTML Document Structure

Mở từ HTML là ngôn ngữ cấu trúc/ý nghĩa. Dựng tài liệu từ `doctype` đến `html`, `head`, `body`; giải thích UTF-8, viewport, `title`, `lang`, heading hierarchy và landmark. Chiếu source ngắn cạnh kết quả browser để chỉ ra cấu trúc source được browser phân tích thành document tree.

**Demo gợi ý**

1. Mở `demos/lecture-02/content-demo/index.html`.
2. Mở DevTools → Elements, lần theo `main` → `article` → heading, paragraph, list và table.
3. So sánh thứ bậc heading với kiểu trình bày; nhấn mạnh CSS sẽ thay đổi hình thức mà không đổi cấp ngữ nghĩa.
4. Chọn một liên kết trong mục “Trong trang này” để quan sát fragment dẫn đến `id`.

**Talking points**

- `head` là metadata, còn `body` là nội dung tài liệu.
- `lang` mô tả ngôn ngữ chính; `title` nên có ý nghĩa riêng cho trang.
- Chọn heading dựa theo tổ chức nội dung, không dựa theo cỡ chữ.
- Landmark biểu đạt vai trò vùng nội dung; không cần bọc mọi phần bằng element semantic nếu không phù hợp.

### Period 2 · HTML Content

Dùng một chủ đề xuyên suốt (trang giới thiệu khu vườn) để chọn element theo nội dung: đoạn và emphasis, liên kết, ảnh, list, bảng dữ liệu, audio/video. Cùng một ví dụ giúp so sánh các markup mà không biến tiết học thành các snippet tách rời.

**Demo nội dung**

Trang demo có bảng giờ hoạt động, danh sách điểm tham quan, liên kết nội trang, markup mẫu và cấu trúc semantic. Chỉ rõ `caption`, `th`, `td`, `scope` dùng với dữ liệu có hàng/cột; table không phải công cụ dàn bố cục. Ảnh nền minh họa trong demo mang tính trang trí; nội dung được truyền đạt bằng văn bản kế cận.

**Talking points**

- Link text cần cho biết đích/mục đích khi đọc độc lập.
- `alt` phụ thuộc vai trò: mô tả thông tin cần truyền tải; dùng rỗng cho ảnh trang trí.
- `ol` phù hợp khi thứ tự có ý nghĩa; `ul` khi các mục ngang hàng.
- Table phù hợp dữ liệu dạng bảng; cấu trúc heading cells làm quan hệ cột/hàng dễ hiểu.
- `controls` cho phép browser cung cấp điều khiển media; cân nhắc nội dung thay thế/phụ trợ trong những bài học sau.

### Period 3 · Forms

Tiến triển từ `<form>` đến control, label, `name`, rồi validation. Phân biệt ba thứ hay bị trộn: `id` nhận dạng element trong document, `for` nối label tới control, `name` trở thành khóa dữ liệu gửi đi.

**Demo form**

1. Mở `demos/lecture-02/form-demo/index.html`.
2. Gửi form trống để thấy `required` chặn submit và browser thông báo vị trí cần sửa.
3. Thử email sai định dạng, số người dưới 1/trên 8, rồi nhập hợp lệ.
4. Chọn từng radio để quan sát cùng `name` tạo một nhóm chọn một giá trị.
5. Gửi dữ liệu hợp lệ; trang hiện cặp `name = value`. Xác nhận rõ dữ liệu chỉ được hiển thị cục bộ, không gửi ra server.
6. Dùng Reset để đưa form về giá trị ban đầu.

**Talking points**

- `type` ảnh hưởng giao diện control và constraint validation phía browser.
- `required`, `min`, `max`, `step`, `minlength`, `maxlength`, `pattern` diễn tả một số ràng buộc phổ biến.
- Native validation giúp phản hồi sớm nhưng không bảo đảm dữ liệu an toàn/chính xác ở server; cần xác thực phía xử lý.
- Button trong form có vai trò submit/reset rõ ràng qua thuộc tính `type`.
- Không gửi dữ liệu cá nhân thật trong demo.

## Kiểm tra kiến thức cuối Lecture

Đề nghị sinh viên giải thích cách `head` và `body` khác nhau; chọn element cho một đoạn nội dung/bảng/list; nối label với input; mô tả `name` và một constraint. Dùng slide tổng kết để nối document → nội dung → form. Bài tiếp theo tập trung HTML quality và CSS foundations.

## Official References

- [HTML Living Standard — WHATWG](https://html.spec.whatwg.org/)
- [HTML for Web Developers — WHATWG](https://html.spec.whatwg.org/dev/)
- [HTML Forms — WHATWG](https://html.spec.whatwg.org/multipage/forms.html)
- [Accessible Forms — W3C WAI](https://www.w3.org/WAI/tutorials/forms/)
