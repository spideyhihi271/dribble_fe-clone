import React from 'react'

function DetailShortFooter({owner}) {
  console.log(owner);
  return (
    <div className="detail_short-footer">
        <div className="owner_avt">
            <div className="line"></div>
            <div className="avt_border">
                <div className="avt_main">
                  <img src={owner.urlAvt} alt="" />
                </div>
            </div>
        </div>
        <p className="owner_name">{owner.name}</p>
        <p className="owner_bio">{owner.introdution}</p>
        <button className="hire_btn">Hire Me</button>
    </div>
  )
}

export default DetailShortFooter