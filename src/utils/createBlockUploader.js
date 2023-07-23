export default function createBlockUploader() {
  // Tạo phần tử div chứa các phần tử khác
  const projectBlock = document.createElement("div");
  projectBlock.classList.add("project_block");

  // Tạo phần tử div chứa phần tử input và phần tử img
  const blockFileUploader = document.createElement("div");
  blockFileUploader.classList.add("block_file-uploader");
  projectBlock.appendChild(blockFileUploader);

  // Tạo phần tử input kiểu file
  const fileUploaderInput = document.createElement("input");
  fileUploaderInput.type = "file";
  fileUploaderInput.classList.add("file_uploader-input");
  blockFileUploader.appendChild(fileUploaderInput);

  // Tạo phần tử div để chứa thông tin về tệp tin được tải lên
  const fileNotice = document.createElement("div");
  fileNotice.classList.add("file_notice");
  blockFileUploader.appendChild(fileNotice);

  // Tạo phần tử div chứa biểu tượng thông báo
  const noticeContainer = document.createElement("div");
  noticeContainer.classList.add("notice_container");
  fileNotice.appendChild(noticeContainer);

  // Tạo phần tử img để hiển thị biểu tượng thông báo
  const noticeIcon = document.createElement("img");
  noticeIcon.src =
    "https://dribbble.com/assets/packs/media/assets/images/picture-placeholder-663241b1d5d22ee9abbe41bf9dd724df.png";
  noticeIcon.alt = "";
  const noticeIconDiv = document.createElement("div");
  noticeIconDiv.classList.add("notice_icon");
  noticeIconDiv.appendChild(noticeIcon);
  noticeContainer.appendChild(noticeIconDiv);

  // Tạo phần tử p để hiển thị tiêu đề thông báo
  const noticeTitle = document.createElement("p");
  noticeTitle.classList.add("notice_title");
  noticeTitle.innerHTML =
    "Tải lên dự án của bạn tại đây, <span> Duyệt qua</span>";
  noticeContainer.appendChild(noticeTitle);

  // Tạo phần tử p để hiển thị cảnh báo tệp tin
  const noticeAlert = document.createElement("p");
  noticeAlert.classList.add("notice_alert");
  noticeAlert.innerHTML =
    "Nên sử dụng chiều rộng tối thiểu 1600px. Mỗi tệp tối đa 10 MB";
  noticeContainer.appendChild(noticeAlert);

  // Tạo phần tử ul để liệt kê các định dạng tệp tin cho phép
  const noticeList = document.createElement("ul");
  noticeList.classList.add("notice_list");
  noticeContainer.appendChild(noticeList);

  // Tạo các phần tử li để hiển thị thông tin về các định dạng tệp tin cho phép
  const noticeItems = [
    "Hình ảnh có độ phân giải cao (png,jpg,gif)",
    "Video(mp4)",
    "Gif hoạt hình",
    "Chỉ tải lên phương tiện mà bạn sở hữu quyền đối với chúng",
  ];
  noticeItems.forEach((item) => {
    const noticeItem = document.createElement("li");
    noticeItem.classList.add("notice_item");
    noticeItem.innerHTML = `<i class="fa-solid fa-circle"></i> ${item}`;
    noticeList.appendChild(noticeItem);
  });

  // Tạo phần tử img để hiển thị nội dung của tệp tin được chọn
  const fileShowInput = document.createElement("img");
  fileShowInput.src = "";
  fileShowInput.alt = "";
  fileShowInput.classList.add("file_show-input");
  blockFileUploader.appendChild(fileShowInput);

  // Tạo phần tử textarea để nhập mô tả cho tệp tin
  const inputDescriptionImage = document.createElement("textarea");
  inputDescriptionImage.classList.add("input_description-image");
  inputDescriptionImage.placeholder =
    "Viết những điều bạn muốn về thiết kế này hoặc thêm bất kì thông tin chi tiết nào khác mà bạn muốn đề cập tới";
  projectBlock.appendChild(inputDescriptionImage);

  return projectBlock;
}
