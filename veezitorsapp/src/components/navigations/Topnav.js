import React from 'react'

const Topnav = ({ toggle, fullscreen , mylogo}) => {

  const handleOverlayClick = () => {
    toggle();
  };

  return (
<div className="header">

      <div className='toplayer'>
      <div class="sidebarlogo topnavlogo">
      <img src={`${mylogo || 'InvestmentOneLogo.png' }`} alt="" />
        {/* Vee   */}
      </div>
      <div className="searchbar">
    <span className="material-symbols-outlined">search</span>{" "}
    <input type="text" placeholder="Search anything here" />
  </div>
      </div>

  <div className="extraicons">
    <div className="noti" onClick={fullscreen}>
      <span className="material-symbols-outlined">notifications</span>
    </div>

    <div className="avatar">
      <div className="pphoto">
        <img
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=626&ext=jpg"
          alt=""
        />
      </div>
    </div>

    <div className="noti grd" onClick={handleOverlayClick}>
    <span className="material-symbols-outlined">
grid_view
</span>
    </div>

  </div>
</div>

  )
}

export default Topnav