
'use client'
import React, { createRef } from "react";
import Linkqrcard from '@/components/qrcodecard/Linkqrcard';
import { useScreenshot, createFileName } from "use-react-screenshot";


const Userqrpop = ({data, togglemyqr, companySetup}) => {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

    
  return (
    <div className="loading-over2 mytagqr" style={{ display: "flex" }} ref={ref}>
<div className="containerqr">
<span onClick={downloadScreenshot} className="material-symbols-outlined">
download
</span>
<Linkqrcard data={data} />

  <div className="textqr" onClick={togglemyqr}>
    <h1 className="headerqr">
    {companySetup?.organization_name}
    </h1>
    <p className="descriptionqr">
    Please scan the QR code below to start the process of requesting your visit. We look forward to welcoming you!
    </p>

  
  </div>
</div>
</div>
  )
}

export default Userqrpop