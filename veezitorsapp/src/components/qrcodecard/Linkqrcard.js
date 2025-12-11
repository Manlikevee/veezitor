import React, { useEffect, useRef, useState, useContext } from "react";
import QRCodeStyling from "qr-code-styling";
import { VeeContext } from "@/context/veecontext";

const Linkqrcard = ({ data }) => {
  const qrRef = useRef(null);
  const qrInstance = useRef(null);
  const { logo } = useContext(VeeContext);

  useEffect(() => {
    // Only initialize once
    if (!qrInstance.current) {
      qrInstance.current = new QRCodeStyling({
        width: 290,
        height: 250,
        data,
        margin: 0,

        qrOptions: {
          typeNumber: "0",
          mode: "Byte",
          errorCorrectionLevel: "L",
        },

        imageOptions: {
          hideBackgroundDots: true,
          imageSize: 0.4,
          margin: 3,
        },

        dotsOptions: {
          type: "extra-rounded",
          color: "#9a4c1e",
        },

        backgroundOptions: {
          color: "#ffffff",
        },

        cornersSquareOptions: {
          type: "extra-rounded",
          color: "#6a1039",
        },

        cornersDotOptions: {
          type: "dot",
          color: "#6a1039",
        },

        // Uncomment if you want a logo
        // image: logo,
      });
    }

    // append to DOM
    if (qrRef.current) {
      qrRef.current.innerHTML = ""; // clear
      qrInstance.current.append(qrRef.current);
    }
  }, [data, logo]);

  return (
    <div className="qr-code-container">
      <div ref={qrRef} />
    </div>
  );
};

export default Linkqrcard;
