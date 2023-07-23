import React from 'react'

function LoginIntro() {
  return (
    <div className="login_intro">
        <div className="intro_bg">
          <img src="https://cdn.dribbble.com/assets/auth/sign-up-2b63dbffcc69046adb0ec414be26771ce10d91a8f9b4de7c281bcbee9e95d9f9.png" alt="" />
        </div>
        <div className="intro_info">
            <p className="intro_title">Khám phá các Nhà thiết kế & Sáng tạo hàng đầu thế giới.</p>
            <div className="intro_author">
                <p className="author_name">Sophie Hall</p>
                <p className="author_position">Người sáng lập, Catalogue</p>
                <p className="author_job">Cá nhân sáng tạo</p>
            </div>
        </div>
    </div>
  )
}

export default LoginIntro