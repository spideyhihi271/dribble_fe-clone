import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_nav">
        <div className="footer_logo">
          <Link to={""} className="footer_logo-img">
            <img
              src="https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png"
              alt=""
            />
          </Link>
          <p className="footer_logo-description">
            Dribbble là cộng đồng hàng đầu thế giới dành cho những người sáng
            tạo để chia sẻ, phát triển và được tuyển dụng.
          </p>
          <div className="footer_social-list">
            <Link to={""} className="social_item">
              <i class="fa-regular fa-basketball"></i>
            </Link>
            <Link to={""} className="social_item">
              <i class="fa-brands fa-twitter"></i>
            </Link>
            <Link to={""} className="social_item">
              <i class="fa-brands fa-square-facebook"></i>
            </Link>
            <Link to={""} className="social_item">
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link to={""} className="social_item">
              <i class="fa-brands fa-pinterest"></i>
            </Link>
          </div>
        </div>
        <div className="footer_item">
          <div className="footer_nav-list">
            <div className="footer_list-title">Dành cho nhà thiết kế</div>
            <Link to={""} className="footer_nav-item">
              Đi pro
            </Link>
            <Link to={""} className="footer_nav-item">
              Khám phá công việc thiết kế
            </Link>
            <Link to={""} className="footer_nav-item">
              Blog thiết kế
            </Link>
            <Link to={""} className="footer_nav-item">
              Podcast ngoài giờ
            </Link>
            <Link to={""} className="footer_nav-item">
              Vòng loại trực tiếp
            </Link>
            <Link to={""} className="footer_nav-item">
              Quy tắc ứng xử
            </Link>
          </div>
        </div>
        <div className="footer_item">
          <div className="footer_nav-list">
            <div className="footer_list-title">Thuê nhà thiết kế</div>
            <Link to={""} className="footer_nav-item">
              Đăng tin tuyển dụng
            </Link>
            <Link to={""} className="footer_nav-item">
              Đăng một dự án tự do
            </Link>
            <Link to={""} className="footer_nav-item">
              Tìm kiếm nhà thiết kế
            </Link>
          </div>
          <div className="footer_nav-list">
            <div className="footer_list-title">Thuê nhà thiết kế</div>
            <Link to={""} className="footer_nav-item">
              Quảng cáo với chúng tôi
            </Link>
          </div>
        </div>
        <div className="footer_item">
          <div className="footer_nav-list">
            <div className="footer_list-title">Công ti</div>
            <Link to={""} className="footer_nav-item">
              Về chúng tôi
            </Link>
            <Link to={""} className="footer_nav-item">
              Nghề nghiệp
            </Link>
            <Link to={""} className="footer_nav-item">
              Ủng hộ
            </Link>
            <Link to={""} className="footer_nav-item">
              Bộ phương tiện
            </Link>
            <Link to={""} className="footer_nav-item">
              Lời chứng thực
            </Link>
            <Link to={""} className="footer_nav-item">
              API
            </Link>
            <Link to={""} className="footer_nav-item">
              Điều khoản dịch vụ
            </Link>
            <Link to={""} className="footer_nav-item">
              Chính sách bảo mật
            </Link>
            <Link to={""} className="footer_nav-item">
              Chính sách cookie
            </Link>
          </div>
        </div>
        <div className="footer_item">
          <div className="footer_nav-list">
            <div className="footer_list-title">Thư mục</div>
            <Link to={""} className="footer_nav-item">
              Việc làm thiết kế
            </Link>
            <Link to={""} className="footer_nav-item">
              Nhà thiết kế cho thuê
            </Link>
            <Link to={""} className="footer_nav-item">
              Nhà thiết kế tự do cho thuê
            </Link>
            <Link to={""} className="footer_nav-item">
              Thẻ
            </Link>
            <Link to={""} className="footer_nav-item">
              Địa điểm
            </Link>
          </div>
          <div className="footer_nav-list">
            <div className="footer_list-title">Tài sản thiết kế</div>
            <Link to={""} className="footer_nav-item">
              Thị trường sáng tạo
            </Link>
            <Link to={""} className="footer_nav-item">
              Phông chữ
            </Link>
            <Link to={""} className="footer_nav-item">
              Nhà thiết kế tự do cho thuê
            </Link>
            <Link to={""} className="footer_nav-item">
              Con sóc phông chữ
            </Link>
          </div>
        </div>
        <div className="footer_item">
          <div className="footer_nav-list">
            <div className="footer_list-title">Tài nguyên thiết kế</div>
            <Link to={""} className="footer_nav-item">
              Làm nghề tự do
            </Link>
            <Link to={""} className="footer_nav-item">
              Tuyển dụng thiết kế
            </Link>
            <Link to={""} className="footer_nav-item">
              Danh mục đầu tư thiết kế
            </Link>
            <Link to={""} className="footer_nav-item">
              Giáo dục thiết kế
            </Link>
            <Link to={""} className="footer_nav-item">
              Quá trình sáng tạo
            </Link>
            <Link to={""} className="footer_nav-item">
              Xu hướng ngành thiết kế
            </Link>
          </div>
        </div>
      </div>
      <div className="footer_lines">
          <p className="footer_publics">© 2023 Dribbble. Đã đăng ký Bản quyền.</p>
          <div className="footer_upload-total">
              <b>Dribbble Clone </b>
              <span> - made by ..</span>
              <img src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg" alt="" />
          </div>
      </div>
    </div>
  );
}

export default Footer;
