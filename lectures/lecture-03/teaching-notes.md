# Teaching Notes · Bài giảng 03

## Phạm vi

- Chapter 2 period 4/4: HTML quality, SEO cơ bản, accessibility, keyboard access, ARIA nhập môn và validator.
- Chapter 3 periods 1–2/4: CSS foundations (các cách gắn CSS, cascade, inheritance, selectors, specificity) và styling fundamentals (color, units, typography).
- Box Model, positioning, overflow, Flexbox và Grid thuộc Lecture 04; chưa dạy trong bài này.

## Tổ chức ba period

### Period 1 · HTML Quality

Nối tiếp document/content/form từ Lecture 02. Nêu HTML semantic giúp cấu trúc dễ hiểu; giới thiệu metadata title/description và link text ở mức SEO cơ bản. Sau đó quan sát cùng một trang bằng keyboard: Tab qua link/button và nhận biết focus indicator. Giới thiệu ARIA như một bổ sung khi HTML native không đủ biểu đạt tên/quan hệ; nhấn mạnh ARIA không tự cung cấp hành vi keyboard.

**Demo chất lượng HTML**

1. Mở `demos/lecture-03/html-quality/index.html`.
2. So sánh chế độ markup semantic với ví dụ dùng `div` giả heading; trao đổi về cấu trúc, không chỉ cỡ chữ.
3. Nhấn “Thử keyboard focus” để đưa focus đến button và quan sát viền focus.
4. Dùng Tab/Shift+Tab để theo luồng điều khiển.
5. Mở Nu HTML Checker từ trang demo. Dán markup mẫu vào Direct Input và đọc lỗi/cảnh báo; sửa một lỗi cú pháp rồi chạy lại.
6. Phân biệt validator kiểm tra markup với đánh giá accessibility tổng thể.

**Talking points**

- SEO cơ bản ở đây là tiêu đề/mô tả phù hợp, heading có cấu trúc và liên kết có ý nghĩa.
- `button`, `a`, `label` native có semantics/hành vi sẵn; tránh tái tạo bằng `div` khi không có lý do.
- Focus cần nhìn thấy và thứ tự điều hướng nên theo cấu trúc tài liệu.
- ARIA cần tên gọi chính xác; role không biến element thường thành control đầy đủ.

### Period 2 · CSS Fundamentals

Giới thiệu CSS bằng một rule ngắn; phân biệt selector, property và value. Minh họa inline/internal/external, nhấn mạnh external CSS dễ dùng lại. Tiếp tục theo đúng thứ tự: type/class/ID và selector kết hợp → cascade → specificity → source order → inheritance.

**Demo cascade**

1. Mở `demos/lecture-03/css-cascade/index.html`.
2. Bật/tắt `.strong` để quan sát rule có specificity cao hơn.
3. Đổi ID `target` thành `other` để thấy rule class xuất hiện; bật rule cuối `.notice` để cùng-specificity rule sau thắng.
4. Đặt lại, bật `#target` và bật/tắt `.strong` để so sánh ID với compound class rule.
5. Mở DevTools → Elements → Styles/Computed và đối chiếu computed color.

**Talking points**

- Cascade giải quyết declarations cạnh tranh trên cùng property; đây là khung giải thích, không phải liệt kê hết mọi bước precedence.
- Specificity so sánh các nhóm selector (ID, class/attribute/pseudo-class, type/pseudo-element), không dựa độ dài selector.
- Source order chỉ phân định sau khi các yếu tố ưu tiên trước ngang nhau.
- Một số property như `color` và `font-family` thường inherit; `margin`, `padding`, `border` thường không.
- DevTools cho biết rule khớp, nguồn khai báo, rule bị ghi đè và giá trị computed.

### Period 3 · Styling Fundamentals

Dùng một HTML document duy nhất để thay đổi màu, font-size và đơn vị. Minh họa named color, HEX, rgb(); px so với em/rem/%; font-family, font-size, font-weight và line-height. Không mở rộng sang Box Model hoặc bố cục.

**Demo styling**

1. Mở `demos/lecture-03/styling/index.html`.
2. Thay màu nhấn và cỡ chữ; so sánh CSS variables với thay đổi nhìn thấy.
3. Chuyển px/rem để xem computed font-size trong browser.
4. Mở DevTools → Elements → Computed, đối chiếu line-height, font-family và kích thước chữ.
5. Nhấn liên kết “Xem style computed” để liên hệ điều hướng fragment với HTML.

**Talking points**

- CSS pixel là đơn vị logic; không luôn bằng một pixel vật lý.
- `em` liên quan context cỡ chữ; `rem` liên quan cỡ chữ gốc; phần trăm tham chiếu tùy property.
- Font stack có generic fallback để có phương án khi font cụ thể không khả dụng.
- Màu chữ/nền cần dễ phân biệt; giới thiệu tiêu chí tương phản và để kiểm tra accessibility chi tiết ở các nội dung tiếp theo.

## Kết thúc bài

Kết nối HTML quality (nội dung có thể hiểu/sử dụng) với CSS (rule chọn element và tính style), rồi với lựa chọn màu/chữ để trình bày. Lecture 04 tiếp tục từ styling sang Box Model và layout.

## Official References

- [HTML Living Standard — WHATWG](https://html.spec.whatwg.org/)
- [Web Accessibility Tutorials — W3C WAI](https://www.w3.org/WAI/tutorials/)
- [Accessible Forms — W3C WAI](https://www.w3.org/WAI/tutorials/forms/)
- [CSS — W3C](https://www.w3.org/Style/CSS/)
- [CSS Specifications — W3C CSS WG](https://www.w3.org/Style/CSS/current-work.en)
- [CSS — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
