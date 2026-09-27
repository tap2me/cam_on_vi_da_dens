# 💌 Cảm ơn vì đã đến

Trang thiệp cảm ơn có ảnh kỷ niệm, nhạc nền và lời nhắn. **Ai cũng có thể tự tạo thiệp riêng**:
vào trang `tao.html`, tải ảnh lên, viết lời nhắn, rồi nhận một đường link riêng để gửi cho người khác.

## Các loại link

| Link | Nội dung lấy từ đâu |
|---|---|
| `.../` | Nội dung mặc định viết sẵn trong `index.html` + ảnh trong `images/` |
| `.../?k=lannew1-udju` | Thư mục `khach/lannew1-udju/` (tự tay thêm vào code như trước) |
| `.../?id=chi-lan-x8p3k2` | Thiệp người dùng tự tạo ở `tao.html` (ảnh lưu trên Cloudinary) |
| `.../tao.html` | Trang để người dùng tự tạo thiệp |

## Cài đặt một lần (khoảng 5 phút)

Trang web này là web tĩnh, không có máy chủ riêng, nên ảnh người dùng tải lên được lưu ở
**Cloudinary** (gói miễn phí, không cần thẻ ngân hàng).

1. Đăng ký tài khoản miễn phí tại <https://cloudinary.com>.
2. Vào **Dashboard** rồi chép **Cloud name** (ví dụ `dxyz12abc`).
3. Vào **Settings** (bánh răng) → **Upload** → mục **Upload presets** → **Add upload preset**:
   - **Signing mode**: chọn **Unsigned**
   - Đặt tên preset, ví dụ `thiep_unsigned`, rồi bấm **Save**
4. Mở file `config.js` rồi điền hai giá trị vừa lấy:
   ```js
   cloudName: "dxyz12abc",
   uploadPreset: "thiep_unsigned",
   ```
5. Đưa code lên chỗ đang đăng trang (GitHub Pages, Netlify…) như bình thường.
6. Thử: vào `.../tao.html`, tạo một thiệp, rồi mở link nhận được.

## Thêm bài hát để người dùng chọn

Chép file `.mp3` vào thư mục `music/`, rồi thêm một dòng trong `config.js`:

```js
songs: [
  { file: "Ngàn Năm Ánh Sáng.mp3", title: "Ngàn Năm Ánh Sáng" },
  { file: "Bai Moi.mp3", title: "Bài Mới" }
],
```

Người dùng cũng có thể tự tải bài `.mp3` của họ lên (tối đa 15MB, chỉnh được bằng `maxSongMB`).

## Lưu ý

- **Ảnh được thu nhỏ trước khi tải lên** (cạnh dài nhất 1600px), nên tải nhanh và tốn ít dung lượng.
  Gói miễn phí của Cloudinary đủ cho hàng nghìn thiệp.
- **Ai có link thì xem được thiệp.** Mã link có đuôi ngẫu nhiên nên người khác không đoán ra được,
  nhưng đừng tải lên ảnh quá riêng tư.
- **Upload preset kiểu "Unsigned" nghĩa là ai mở trang cũng tải được file lên tài khoản Cloudinary này.**
  Với trang nhỏ thì không sao. Nếu thấy có file lạ, vào Cloudinary → **Media Library** để xoá.
- **Xoá một thiệp:** vào Cloudinary → Media Library, tìm file có tên giống mã trong link
  (ví dụ `chi-lan-x8p3k2`) và các ảnh của thiệp đó rồi xoá.
- **Link báo "Không tìm thấy lời nhắn này":** kiểm tra lại `cloudName` trong `config.js`, và xem file
  đó còn trong Media Library không.
