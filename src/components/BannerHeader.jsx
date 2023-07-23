import React from 'react';

function BannerHeader({obj}) {
  return (
    <div className="banner_header-container">
        <div className="banner_bg">
            <img src={obj.background} alt="" />
        </div>
        <div className="banner_content">
            <h1 className="content_title">{obj.title}</h1>
            <p className='content_description'>{obj.description}</p>
        </div>
    </div>
  )
}

export default BannerHeader