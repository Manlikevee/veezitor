import React from 'react'

const Dashboardcard = ({iconname, value, text}) => {
  return (
<div className="dashcard">
  <div className="dashicon">
    <span className="material-symbols-outlined"> {iconname} </span>
  </div>
  <div className="dashtexts">
    <div className="dashvalue" id="pending">
      {value}
    </div>
    <div className="dashnumber">{text}</div>
  </div>
</div>

  )
}

export default Dashboardcard