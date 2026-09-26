# CSE122 · Trang chủ học phần và Bài giảng 01

Mở [trang chủ học phần](index.html), sau đó chọn [Bài giảng 01](lectures/lecture-01/index.html). Danh mục bài giảng nằm tại [lectures/index.html](lectures/index.html).

## Bài giảng 01 · Nền tảng Internet, Web và môi trường phát triển

Bài giảng gồm 3 tiết × 55 phút:

- **Tiết 1:** Internet, WWW, trình duyệt, server, tài nguyên, Client–Server, Frontend và Backend.
- **Tiết 2:** URL, domain, DNS, hosting, HTTP request/response, vai trò HTML/CSS/JavaScript/API, website tĩnh, MPA, SPA và minh họa Network.
- **Tiết 3:** VS Code, Terminal, HTTP server cục bộ, Chrome DevTools, Git, GitHub và quy trình phát triển.

Mở `lectures/lecture-01/index.html`; dùng phím mũi tên để chuyển trang chiếu. Nhấn **O** hoặc nút mục lục để xem danh sách trang chiếu.

## Chạy minh họa Network

Trong Terminal, chuyển tới thư mục `demos/lecture-01` và chạy:

```powershell
python -m http.server 5500
```

Mở `http://localhost:5500`, bật Chrome DevTools → Network rồi tải lại trang. Chọn `data.json` để xem request, trạng thái HTTP và response JSON.
