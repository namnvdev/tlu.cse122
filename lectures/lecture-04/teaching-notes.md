# Teaching Notes · Bài giảng 04

## Phạm vi

- Chapter 3 periods 3–4/4 và Chapter 4 period 1/4 theo course plan.
- Period 1: content, padding, border, margin, `box-sizing`, `display`.
- Period 2: normal flow, position, overflow, pseudo-class, pseudo-element, custom properties, CSS debugging.
- Period 3: Flexbox, CSS Grid, khi nào chọn mỗi cách và phân rã layout.
- Không đưa media queries, mobile-first, responsive design hoặc Bootstrap vào Lecture này; các chủ đề đó thuộc Lecture 05.

## Tổ chức ba period

### Period 1 · Box Model

Dùng một card duy nhất để lần lượt chỉ ra content, padding, border và margin. Viết phép tính ngang cho `content-box`, rồi chuyển sang `border-box`; phân biệt tổng border-box với khoảng ngoài do margin tạo ra. Kết thúc bằng các hành vi cơ bản của `display: block`, `inline`, `inline-block`.

**Demo Box Model**

1. Mở `demos/lecture-04/box-model/index.html`.
2. Kéo từng thanh padding/border/margin và theo dõi cách vùng hộp thay đổi.
3. Chuyển `box-sizing` giữa `content-box` và `border-box`; đối chiếu rendered border-box width.
4. Mở DevTools → Elements, chọn hộp và so sánh panel Box Model với readout của demo.
5. Chỉ rõ margin nằm ngoài border và không được cộng vào CSS width của hộp.

**Talking points**

- Width mặc định `content-box`; Box Model panel có thể hiển thị cả các vùng riêng.
- Với border-box, phần content co lại để padding/border nằm trong width đã định.
- Block/inline là cách tham gia flow cơ bản, không phải layout system đầy đủ.

### Period 2 · CSS Layout Fundamentals

Bắt đầu bằng normal flow để sinh viên có mốc so sánh. Thử `static`, rồi `relative` để thấy phần tử còn giữ chỗ; dùng `absolute` trong một ancestor `position: relative` để thấy nó rời flow. So sánh `fixed`/`sticky` bằng sơ đồ và trang cuộn. Chuyển sang overflow và các selector trạng thái/nội dung ảo, cuối cùng giới thiệu custom properties.

**Demo position / overflow**

1. Mở `demos/lecture-04/position-overflow/index.html`.
2. Chuyển nhãn qua normal flow, `relative`, `absolute`; quan sát block sau giữ chỗ trong flow hay không.
3. Cuộn riêng khung `overflow: auto` để thấy vùng cuộn độc lập.
4. Hover qua chip để thấy pseudo-class; `::after` thêm nội dung; đổi `--accent` để thấy custom property dùng lại.
5. Trong DevTools, inspect nhãn/chip, kiểm tra `position`, `overflow` và computed value của màu.

**Talking points**

- `relative` dịch hình ảnh nhưng vẫn giữ vị trí ban đầu trong flow.
- `absolute` không chiếm chỗ flow và cần hiểu containing block tham chiếu.
- `overflow` có thể thay đổi cách phần nội dung dư được truy cập.
- Pseudo-class biểu diễn trạng thái; pseudo-element nhắm một phần ảo.
- Custom properties theo cascade/scope, không phải biến tiền xử lý build-time.

### Period 3 · Flexbox & Grid

Phân rã ví dụ thành container và items trước khi chọn công cụ. Dùng hàng công cụ hoặc dãy card để giải thích trục chính/cross axis của Flexbox. Dùng vùng nội dung cạnh sidebar để giải thích tracks hai chiều của Grid. Cho cùng dữ liệu xuất hiện ở cả hai demo để đối chiếu trực quan, không giới thiệu breakpoint/responsive behavior.

**Demo Flexbox / Grid**

1. Mở `demos/lecture-04/flex-grid/index.html`.
2. Chuyển Flexbox/Grid trên cùng nhóm card.
3. Với Flexbox, chỉ main axis và tác dụng của `gap`/`flex: 1`.
4. Với Grid, chỉ các cột được định nghĩa bằng `repeat(3, 1fr)` và hàng tự sinh.
5. Inspect container trong DevTools; đọc computed `display`, `gap` và bật overlay nếu hỗ trợ.

**Talking points**

- Flexbox hợp với quan hệ sắp xếp một chiều; Grid hợp với cấu trúc hàng/cột cùng quan trọng.
- Có thể kết hợp Grid ở cấp trang và Flexbox trong một vùng.
- Bắt đầu từ nội dung/quan hệ, không chọn công cụ theo thói quen.

## Kết thúc bài

Nối Box Model (kích thước/hộp), flow/position (vị trí/phần tràn) và Flexbox/Grid (quan hệ giữa items) thành các lớp giải thích layout. Lecture 05 tiếp tục với cách giao diện thích nghi nhiều kích thước màn hình.

## Official References

- [CSS — W3C](https://www.w3.org/Style/CSS/)
- [CSS Layout — MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout)
- [Flexbox — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout)
- [CSS Grid — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout)
- [Chrome DevTools Elements](https://developer.chrome.com/docs/devtools/elements)
