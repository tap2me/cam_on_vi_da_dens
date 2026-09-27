// =========================================
//  CẤU HÌNH CHO TRANG "TẠO THIỆP" (tao.html)
//  Xem hướng dẫn lấy 2 thông tin dưới đây trong README.md
// =========================================
window.THIEP_CONFIG = {
  // Cloud name của tài khoản Cloudinary (Dashboard → "Cloud name"), ví dụ: "dxyz12abc"
  cloudName: "wlbfzpbc",

  // Tên upload preset kiểu "Unsigned" (Settings → Upload → Upload presets), ví dụ: "thiep_unsigned"
  uploadPreset: "camonvidaden",

  // Các bài hát có sẵn trong thư mục music/ để người dùng chọn
  songs: [
    { file: "Ngàn Năm Ánh Sáng.mp3", title: "Ngàn Năm Ánh Sáng" }
  ],

  // Giới hạn
  maxPhotos: 10,
  maxSongMB: 15
};
