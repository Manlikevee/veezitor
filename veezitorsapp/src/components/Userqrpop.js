
'use client'
import React, { createRef } from "react";
import Linkqrcard from '@/components/qrcodecard/Linkqrcard';
import { useScreenshot, createFileName } from "use-react-screenshot";


const Userqrpop = ({data, togglemyqr}) => {
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
<Linkqrcard data={data} />

  <div className="textqr" onClick={togglemyqr}>
    <h1 className="headerqr">
      Veetec
    </h1>
    <p className="descriptionqr">
      Scan the QR code to start your visitation request
    </p>
    <button onClick={downloadScreenshot}>Download screenshot</button>
  </div>
</div>
</div>
  )
}

export default Userqrpop