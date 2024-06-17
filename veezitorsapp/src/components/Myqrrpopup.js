
'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import Linkqrcard from '@/components/qrcodecard/Linkqrcard';


const Myqrrpopup = ({data}) => {

    
  return (
    <div className="loading-over2 mytagqr" style={{ display: "flex" }}>
<div className="containerqr">
<Linkqrcard data={data} />
  <div className="textqr">
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

export default Myqrrpopup