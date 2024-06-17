import React, { useEffect, useRef, useState, useContext } from 'react';
import  QRCodeStyling  from "qr-code-styling";
import mylogo from '../../../public/InvestmentOneLogo.png'
import { toast } from 'sonner';
import { VeeContext } from '@/context/veecontext';

const Linkqrcard = ({data}) => {
  const [fileExt, setFileExt] = useState("png");
  const {logo } = useContext(VeeContext);
    useEffect(() => {
        const qrCode = new QRCodeStyling(
          {
          width: 290,
          height: 250,
          data: data,
          margin: 0,
          qrOptions: { typeNumber: "0", mode: "Byte", errorCorrectionLevel: "L" },
          imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 3 },
          dotsOptions: { type: "extra-rounded", color: "#9a4c1e" },
          backgroundOptions: { color: "#ffffff" },
          image: logo || 'InvestmentOneLogo.png' ,
          dotsOptionsHelper: {
            colorType: { single: true, gradient: false },
            gradient: {
              linear: true,
              radial: false,
              color1: "#6a1a4c",
              color2: "#6a1a4c",
              rotation: "0",
            },
          },
          cornersSquareOptions: { type: "extra-rounded", color: "#6a1039" },
          cornersSquareOptionsHelper: {
            colorType: { single: true, gradient: false },
            gradient: {
              linear: true,
              radial: false,
              color1: "#000000",
              color2: "#000000",
              rotation: "0",
            },
          },
          cornersDotOptions: { type: "", color: "#6a1039" },
          cornersDotOptionsHelper: {
            colorType: { single: true, gradient: false },
            gradient: {
              linear: true,
              radial: false,
              color1: "#000000",
              color2: "#000000",
              rotation: "0",
            },
          },
          backgroundOptionsHelper: {
            colorType: { single: true, gradient: false },
            gradient: {
              linear: true,
              radial: false,
              color1: "#ffffff",
              color2: "#ffffff",
              rotation: "0",
            },
          },
        });
        
        qrCode.append(document.getElementById(`qr-code`));

      }, []);




  return (
  <div className='qr-code-container'>
  <div  id='qr-code'  />
 </div>
  )
}

export default Linkqrcard