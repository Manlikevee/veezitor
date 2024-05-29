
import React, { useState } from 'react'
import 'intl-tel-input/build/css/intlTelInput.css';
// import IntlTelInput from 'intl-tel-input/react';
import IntlTelInput from 'intl-tel-input/reactWithUtils';
const Visitorsform = ({number, setNumber, isValid, setIsValid }) => {
    const [errorCode, setErrorCode] = useState('');

    return (
        <>
        <IntlTelInput
        initialValue={number}
        onChangeNumber={(value) => {
          setNumber(value);
          setIsValid(false); // Reset validity on number change
        }}
        onChangeValidity={setIsValid}
        onChangeErrorCode={setErrorCode}
        initOptions={{
          initialCountry: 'ng', // Initial country
          separateDialCode: true, // Show separate dial code
        //   utilsScript: "intl-tel-input/build/js/utils.js",
        }}
      />
      </>
  )
}

export default Visitorsform