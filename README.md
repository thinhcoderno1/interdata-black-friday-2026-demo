# Black Friday 2026 — Demo InterData

Landing page Next.js dùng để duyệt thiết kế Black Friday và các gói Best Plans. Trang chạy tại [localhost:3100](http://localhost:3100) và có đường dẫn chuyển tiếp `/blackfriday/`.

## Chạy trên máy

Từ thư mục gốc của repo, dùng Node.js 22 LTS hoặc mới hơn.

```sh
npm ci
npm run dev
```

Để chạy bản production trên máy, dùng `npm run build` rồi `npm run start` và mở [localhost:3000](http://localhost:3000). Máy chủ lắng nghe trên `0.0.0.0` và đọc cổng từ biến môi trường `PORT`, mặc định là `3000`.

## Deploy lên Coolify bằng Railpack

Tạo ứng dụng từ **Public Repository** và chọn nhánh `main`. Dùng cấu hình sau. [Tài liệu Railpack của Coolify](https://coolify.io/docs/applications/builds/railpack)

| Mục | Giá trị |
| --- | --- |
| Build Pack | `Railpack` |
| Base Directory | `/` |
| Output Type / Site Type | `Web application` / `Dynamic` |
| Application Port | `3000` |

`railpack.json` chọn Node.js 22 và cấu hình các lệnh `npm ci`, `npm run build`, `npm run start`. Nếu đổi cổng nội bộ, đặt `PORT` khi chạy ứng dụng trùng với cổng đó. Sau khi deploy, mở tên miền ứng dụng để kiểm tra trang chủ. Có thể dùng `/` làm đường dẫn kiểm tra tình trạng ứng dụng.

## Chỉnh dữ liệu cho buổi duyệt

- `src/data/black-friday-demo.ts` chứa tên, cấu hình, giá năm, quà tặng và URL portal của tám gói BF26 PLATINUM, cùng mã giảm giá mẫu.
- Best Plans tự tính tổng giá từ giá năm, giảm 5% cho chu kỳ 2 năm và 10% cho chu kỳ 3 năm. Quà tặng xuất hiện ở chu kỳ 3 năm trên các gói P2 đến P8.
- Giá gạch ngang ưu tiên giá VPS Platinum Viettel theo kỳ hạn khi trùng vCore, RAM và dung lượng NVMe. Với P2–P8, giá ước tính dùng đơn giá tài nguyên theo tháng, giảm 10%, 15% hoặc 20% theo kỳ hạn 1, 2 hoặc 3 năm, rồi cộng khoản RAM Viettel 10.000đ/GB/tháng.
- Nút **Đăng ký ngay** trong Best Plans mở trang cấu hình gói trên portal InterData với chu kỳ đang chọn. Flash Sale mở hộp xem trước, dùng đồng hồ của máy chủ Next.js và giữ lịch từ trang gốc.

## Khi ghép lại vào source chính

Đối chiếu phần giao diện trong `src/components/black-friday/` với source chính. Chuyển các thay đổi thiết kế đã duyệt và dùng lại bộ nạp dữ liệu, URL đăng ký và mã ưu đãi của source chính khi gói chính thức sẵn sàng.
