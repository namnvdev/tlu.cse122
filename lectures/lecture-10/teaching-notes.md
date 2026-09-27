# Ghi chú giảng dạy — Bài giảng 10

## Chuẩn bị

- Mở deck `lectures/lecture-10/index.html` và demo tích hợp `demos/lecture-10/integrated-app/index.html` qua HTTP server cục bộ.
- Chuẩn bị DevTools Console, Network, Elements và Sources. Demo đọc `data/products.json` cùng origin; không cần API bên ngoài hoặc gói cài đặt.
- Nhắc lại kiến thức trước: HTML semantics, responsive CSS, JS modules, DOM/events, Fetch và Promise.
- Bài này khảo sát tư duy component/framework và vòng đời project, không chuyển thành khóa React/Vue/Angular.

## Tiết 1 — Tích hợp API

1. Mở demo; Network cho thấy GET tới `data/products.json`, status 200 và JSON response.
2. Theo đường dữ liệu: `api.js` gọi Fetch/kiểm tra status/parse JSON; `main.js` giữ state và lọc; `components.js` tạo card; browser render.
3. Gõ từ khóa; input event cập nhật query và UI lọc từ dữ liệu đã tải, không gửi request mới.
4. Để minh họa lỗi, tạm đổi đường dẫn JSON trong `api.js` qua DevTools Local Overrides hoặc đổi tên tệp demo; quan sát error state, rồi khôi phục. Nêu khác biệt lỗi HTTP/network/schema.
5. Phân biệt empty result của tìm kiếm với lỗi API; xem trạng thái role=status và kiểm tra focus/input bằng bàn phím.
6. Thảo luận secret API key: mã browser tải về đều có thể xem; credentials riêng tư phải ở server/proxy.

## Tiết 2 — Component Thinking

1. Dùng Sources mở `components.js`; chỉ ra `createProductCard`, `renderProductList` và `setStatus` là các trách nhiệm tách riêng.
2. Đối chiếu `main.js` là nơi giữ state/điều phối, `api.js` là lớp lấy dữ liệu, component function là lớp trình bày.
3. Đổi nhẹ cấu trúc card rồi quan sát tất cả bản ghi vẫn dùng chung component. Giải thích input dữ liệu giống props nhưng demo dùng vanilla JS, không dùng framework.
4. Dùng sơ đồ luồng một chiều: state/data → component output; input event → update query/state → render.
5. So sánh React, Vue và Angular ở mức hệ sinh thái, cách định nghĩa component, mức tích hợp và độ phù hợp đội ngũ; không chọn framework chỉ theo độ phổ biến.

## Tiết 3 — Project Integration và Deployment

1. Rà một user flow hoàn chỉnh: mở catalog, tải dữ liệu, lọc, không có kết quả, lỗi request.
2. Kiểm tra viewport nhỏ và lớn, keyboard, label, focus visible, empty/error status; xác nhận không có cuộn ngang.
3. Trong Network kiểm tra asset/data request và status; Console không có lỗi; thử đường dẫn sai có chủ đích để thấy 404.
4. Giải thích Git sequence `status → add → commit → push`; mỗi commit ghi một thay đổi có ý nghĩa.
5. Triển khai static build/site lên host (ví dụ GitHub Pages). Nếu site ở subpath, kiểm tra base URL và đường dẫn tài nguyên; không giả định URL bắt đầu ở domain root.
6. Mở URL production sau publish, kiểm tra request JSON/CSS/JS, tương tác, responsive, empty/error states và link điều hướng.
7. Cho project demo theo luồng người dùng: vấn đề, dữ liệu/API, UI state, cấu trúc component, kiểm thử và giới hạn hiện tại.

## Giới hạn demo

Demo dùng JSON tĩnh cùng origin để request chạy ổn định khi dạy. Nó minh họa tích hợp service/UI nhưng không thay cho backend REST thực, xác thực người dùng, secrets hoặc thao tác ghi dữ liệu. Khi dùng API thật, endpoint, CORS, schema và điều khoản sử dụng cần được kiểm tra riêng.
