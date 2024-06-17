
'use client'
import React from 'react'
import dynamic from 'next/dynamic';

const dynamicLinkqrcard = dynamic(() => import('@/components/qrcodecard/Linkqrcard'), { ssr: false });

const Myqrrpopup = ({data}) => {

    
  return (
    <div className="loading-over2 mytagqr" style={{ display: "flex" }}>
<div className="containerqr">
<dynamicLinkqrcard data={data} />
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