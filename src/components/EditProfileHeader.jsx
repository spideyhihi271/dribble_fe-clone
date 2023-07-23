import React from 'react'
import { Link } from 'react-router-dom'

function EditProfileHeader({profile}) {
  return (
    <div className="edit_profile-header">
        <div className="edit_profile-avt">
          <img src={profile.urlAvt} alt="" />
        </div>
        <div className="edit_profile-info">
          <Link className="profile_info-name">{profile.name}</Link>
          <p className="edit_profile-description">Cập nhật tên người dùng của bạn và quản lý tài khoản của bạn</p>
        </div>
    </div>
  )
}

export default EditProfileHeader