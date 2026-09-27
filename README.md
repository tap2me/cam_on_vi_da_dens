# 💌 Cảm ơn vì đã đến

Trang thiệp cảm ơn có ảnh kỷ niệm, nhạc nền và lời nhắn. Chủ web tạo thiệp cho từng khách
bằng một công cụ trên máy mình, rồi gửi mỗi khách **một đường link riêng**. Khách chỉ xem được
thiệp của mình, không tự tạo được thiệp mới.

## Các loại link

| Link | Nội dung lấy từ đâu |
|---|---|
| `.../` | Nội dung mặc định viết sẵn trong `index.html` + ảnh trong `images/` |
| `.../?k=lannew1-udju` | Thư mục `khach/lannew1-udju/` (tự tay thêm vào code như trước) |
| `.../?id=chi-lan-x8p3k2.json` | Thiệp tạo bằng công cụ `tao-thiep.html` (ảnh lưu trên Cloudinary) |

## Tạo thiệp cho khách

Công cụ nằm ở thư mục **`CONG-CU-TAO-THIEP (khong dua len web)`**, bên ngoài thư mục web này.

1. Nhấp đúp vào `tao-thiep.html` (mở bằng Chrome hoặc Edge; máy cần có internet, nhưng không cần đưa file lên web).
2. Nhập tên khách, thêm ảnh, viết lời nhắn, chọn nhạc rồi bấm **Tạo link 💖**.
3. Sao chép link và gửi cho khách.

Các link đã tạo được lưu ở mục **"Thiệp đã tạo trên máy này"** ngay trong công cụ.
Danh sách này chỉ có trên trình duyệt của máy đó, nên nhớ lưu link ra chỗ khác nếu quan trọng.

⚠️ **Không đưa `tao-thiep.html` lên GitHub.** Trong file có tên upload preset. Ai biết tên
preset là tải được file lên tài khoản Cloudinary của bạn.

## Cài đặt Cloudinary (đã làm xong, ghi lại để nhớ)

1. Tài khoản Cloudinary → **Dashboard** → chép **Cloud name**, điền vào `config.js` của web
   **và** phần CÀI ĐẶT ở đầu file `tao-thiep.html`.
2. **Settings** → **Upload** → **Upload presets** → **Add upload preset** → Signing mode **Unsigned**.
   Đặt tên khó đoán (ví dụ `thiep-k7x2p9qm`), rồi điền tên đó **chỉ** vào `tao-thiep.html`.

## Thêm bài hát để chọn

Chép file `.mp3` vào thư mục `music/` của web (và đưa lên GitHub), rồi thêm một dòng vào
`songs` trong phần CÀI ĐẶT của `tao-thiep.html`:

```js
songs: [
  { file: "Ngàn Năm Ánh Sáng.mp3", title: "Ngàn Năm Ánh Sáng" },
  { file: "Bai Moi.mp3", title: "Bài Mới" }
],
```

Cũng có thể chọn "Tải bài hát của bạn" trong công cụ để tải thẳng một file `.mp3` lên Cloudinary.

## Lưu ý

- **Ai có link thì xem được thiệp.** Mã link có đuôi ngẫu nhiên nên người khác không đoán ra được.
- **Xoá một thiệp:** vào Cloudinary → Media Library, tìm file có tên giống mã trong link
  (ví dụ `chi-lan-x8p3k2`) và các ảnh của thiệp đó rồi xoá.
- **Link báo "Không tìm thấy lời nhắn này":** kiểm tra `cloudName` trong `config.js`, và xem file
  đó còn trong Media Library không.
