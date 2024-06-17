
'use client'
import React from 'react'
import Linkqrcard from '@/components/qrcodecard/Linkqrcard';


const Userqrpop = ({data, togglemyqr}) => {

    
  return (
    <div className="loading-over2 mytagqr" style={{ display: "flex" }}>
<div className="containerqr">
<Linkqrcard data={data} />

  <div className="textqr" onClick={togglemyqr}>
    <h1 className="headerqr">
      Veetec
    </h1>
    <p className="descriptionqr">
      Scan the QR code to start your visitation request
    </p>
  </div>
</div>
</div>
  )
}

export default Userqrpop